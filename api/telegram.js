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

// Метаданные чата хранятся отдельным хэшем, независимо от authorized_chats.
// first_seen проставляется один раз через HSETNX и больше никогда не
// перезаписывается — это неизменяемая метка "чат существует с такого-то
// момента". last_seen обновляется на каждое сообщение через HSET (это
// upsert: одно и то же поле просто получает новое значение, новых записей
// не создаётся). При /logout эта история не трогается — удаляется только
// членство в authorized_chats, чат просто перестаёт получать рассылку, но
// не "исчезает" бесследно.
async function touchChatMeta(chatId) {
  const key = `chat:${chatId}:meta`;
  const now = new Date().toISOString();
  try {
    await redis("HSETNX", key, "first_seen", now);
    await redis("HSET", key, "last_seen", now);
  } catch (err) {
    console.error("Redis error (chat meta):", err);
  }
}

async function handleMessage(chatId, text) {
  if (!redisConfigured()) {
    return sendTelegramMessage(
      chatId,
      "⚠️ Хранилище не подключено (Upstash Redis). Обратитесь к администратору."
    );
  }

  await touchChatMeta(chatId);

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
      // SADD идемпотентен: повторный ввод пароля тем же чатом не создаёт
      // дубликат в множестве и не сбрасывает уже накопленную историю.
      await redis("SADD", "authorized_chats", String(chatId));
      return sendTelegramMessage(
        chatId,
        "✅ Готово! Новые заявки с сайта будут приходить в этот чат.\n\nОтключить: /logout"
      );
    }
    return sendTelegramMessage(chatId, "❌ Неверный пароль. Попробуйте ещё раз.");
  }

  if (text === "/logout") {
    // Убираем только из списка активной рассылки — history (chat:*:meta)
    // не удаляется, first_seen остаётся навсегда.
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
