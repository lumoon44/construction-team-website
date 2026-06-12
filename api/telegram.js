const {
  redis,
  redisConfigured,
  sendTelegramMessage,
  escapeHtml,
} = require("./_lib");

// Webhook Telegram-бота: авторизация по паролю (BOT_PASSWORD)
// и просмотр последних заявок командой /leads или словом «заявки»
module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Защита webhook: секрет задаётся при вызове setWebhook (secret_token)
  const secret = process.env.TELEGRAM_WEBHOOK_SECRET;
  if (secret && req.headers["x-telegram-bot-api-secret-token"] !== secret) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const message = req.body?.message;
  const chatId = message?.chat?.id;
  const text = String(message?.text ?? "").trim();

  // Отвечаем 200 на всё, иначе Telegram будет повторять доставку
  if (!chatId || !text) {
    return res.status(200).json({ ok: true });
  }

  try {
    await handleMessage(chatId, text);
  } catch (err) {
    console.error("Telegram webhook error:", err);
  }
  return res.status(200).json({ ok: true });
};

async function handleMessage(chatId, text) {
  if (!redisConfigured()) {
    return sendTelegramMessage(
      chatId,
      "⚠️ Хранилище заявок не подключено (Upstash Redis). Обратитесь к администратору."
    );
  }

  const password = process.env.BOT_PASSWORD;
  const isOwner = String(chatId) === String(process.env.TELEGRAM_CHAT_ID);
  const isAuthorized =
    isOwner || (await redis("SISMEMBER", "authorized_chats", String(chatId))) === 1;

  if (!isAuthorized) {
    if (text === "/start") {
      return sendTelegramMessage(
        chatId,
        "🔒 Введите пароль, чтобы получить доступ к заявкам."
      );
    }
    if (!password) {
      return sendTelegramMessage(
        chatId,
        "⚠️ Пароль доступа не настроен. Обратитесь к администратору."
      );
    }
    if (text === password) {
      await redis("SADD", "authorized_chats", String(chatId));
      return sendTelegramMessage(
        chatId,
        "✅ Доступ открыт!\n\nКоманды:\n• /leads — последние заявки\n• /logout — отключить доступ\n\nНовые заявки будут приходить сюда автоматически."
      );
    }
    return sendTelegramMessage(chatId, "❌ Неверный пароль. Попробуйте ещё раз.");
  }

  // Авторизованные команды
  if (text === "/logout") {
    await redis("SREM", "authorized_chats", String(chatId));
    return sendTelegramMessage(
      chatId,
      "🔒 Доступ отключён. Чтобы вернуться — введите пароль."
    );
  }

  if (text === "/leads" || /заявк/i.test(text)) {
    return sendLeads(chatId);
  }

  return sendTelegramMessage(
    chatId,
    "Команды:\n• /leads — последние заявки\n• /logout — отключить доступ"
  );
}

async function sendLeads(chatId) {
  const raw = (await redis("LRANGE", "leads", "0", "9")) || [];
  if (raw.length === 0) {
    return sendTelegramMessage(chatId, "📭 Заявок пока нет.");
  }

  const items = raw.map((item, i) => {
    let lead;
    try {
      lead = JSON.parse(item);
    } catch {
      return `${i + 1}. (не удалось прочитать запись)`;
    }
    return [
      `<b>${i + 1}. ${escapeHtml(lead.name)}</b> — ${escapeHtml(lead.phone)}`,
      `💬 ${escapeHtml(lead.message)}`,
      `🕐 ${escapeHtml(lead.date)}`,
    ].join("\n");
  });

  return sendTelegramMessage(
    chatId,
    `📋 <b>Последние заявки (${raw.length}):</b>\n\n${items.join("\n\n")}`
  );
}
