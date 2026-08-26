const { redis, redisConfigured } = require("./_lib");

// Задача этого эндпоинта — не дать провайдеру (Upstash / Vercel Storage)
// удалить бесплатную базу Redis за неактивность. Бесплатные тарифы обычно
// подчищают базы, к которым долго не было ни одного запроса. Vercel Cron
// дёргает этот путь по расписанию (см. "crons" в vercel.json) — этого
// одного захода достаточно, чтобы база всегда считалась "используемой".
//
// Защита: если задать переменную окружения CRON_SECRET в настройках
// проекта на Vercel, он сам подставит её в заголовок Authorization при
// вызове по расписанию — эндпоинт отклонит любой другой вызов.
module.exports = async function handler(req, res) {
  const secret = process.env.CRON_SECRET;
  if (secret && req.headers["authorization"] !== `Bearer ${secret}`) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  if (!redisConfigured()) {
    return res.status(200).json({ ok: false, reason: "Redis не настроен" });
  }

  try {
    await redis("PING");
    // Отдельный ключ с меткой времени — просто чтобы в консоли базы было
    // видно, когда был последний heartbeat, если понадобится проверить руками.
    await redis("SET", "keepalive:last_ping", new Date().toISOString());
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Redis keepalive error:", err);
    return res.status(500).json({ ok: false, error: String(err) });
  }
};
