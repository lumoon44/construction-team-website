// Общие помощники для serverless-функций.
// Файлы с подчёркиванием в начале Vercel не публикует как endpoint.

// Redis: либо прямое подключение по REDIS_URL (интеграция Vercel → Storage),
// либо Upstash REST API (UPSTASH_REDIS_REST_URL / KV_REST_API_URL)
const { createClient } = require("redis");

let clientPromise = null;

function getRedisClient() {
  if (!clientPromise) {
    clientPromise = createClient({ url: process.env.REDIS_URL })
      .on("error", (err) => console.error("Redis client error:", err))
      .connect()
      .catch((err) => {
        clientPromise = null;
        throw err;
      });
  }
  return clientPromise;
}

async function redis(...command) {
  if (process.env.REDIS_URL) {
    const client = await getRedisClient();
    return client.sendCommand(command.map(String));
  }

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
    process.env.REDIS_URL ||
      ((process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL) &&
        (process.env.UPSTASH_REDIS_REST_TOKEN ||
          process.env.KV_REST_API_TOKEN))
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
