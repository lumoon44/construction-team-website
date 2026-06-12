const { redis, redisConfigured, sendTelegramMessage } = require("./_lib");

// Webhook Telegram-бота: авторизация по паролю (BOT_PASSWORD).
// После ввода пароля чат добавляется в рассылку новых заявок.
// В Redis хранятся только ID чатов — никаких данных клиентов (152-ФЗ).
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
      "⚠️ Хранилище не подключено (Upstash Redis). Обратитесь к администратору."
    );
  }

  const password = process.env.BOT_PASSWORD;
  const isOwner = String(chatId) === String(process.env.TELEGRAM_CHAT_ID);
  const isAuthorized =
    isOwner ||
    (await redis("SISMEMBER", "authorized_chats", String(chatId))) === 1;

  if (!isAuthorized) {
    if (text === "/start") {
      return sendTelegramMessage(
        chatId,
        "🔒 Введите пароль, чтобы получать заявки с сайта."
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
        "✅ Готово! Новые заявки с сайта будут приходить в этот чат.\n\nОтключить: /logout"
      );
    }
    return sendTelegramMessage(chatId, "❌ Неверный пароль. Попробуйте ещё раз.");
  }

  if (text === "/logout") {
    await redis("SREM", "authorized_chats", String(chatId));
    return sendTelegramMessage(
      chatId,
      "🔒 Рассылка отключена. Чтобы вернуться — введите пароль."
    );
  }

  return sendTelegramMessage(
    chatId,
    "✅ Вы получаете заявки с сайта.\nОтключить рассылку: /logout"
  );
}
