// Общие помощники для serverless-функций.
// Файлы с подчёркиванием в начале Vercel не публикует как endpoint.

// Upstash Redis через REST API (переменные добавляет интеграция Vercel → Storage)
async function redis(...command) {
  const url =
    process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
  const token =
    process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;
  if (!url || !token) return null;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(command),
  });
  if (!response.ok) {
    throw new Error(`Redis: ${response.status} ${await response.text()}`);
  }
  return (await response.json()).result;
}

function redisConfigured() {
  return Boolean(
    (process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL) &&
      (process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN)
  );
}

async function sendTelegramMessage(chatId, text) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  if (!token || !chatId) return false;

  const response = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text, parse_mode: "HTML" }),
    }
  );
  if (!response.ok) {
    throw new Error(`Telegram API: ${response.status} ${await response.text()}`);
  }
  return true;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

module.exports = { redis, redisConfigured, sendTelegramMessage, escapeHtml };
