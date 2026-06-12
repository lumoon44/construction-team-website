const { Resend } = require("resend");
const {
  redis,
  redisConfigured,
  sendTelegramMessage,
  escapeHtml,
} = require("./_lib");

const resend = new Resend(process.env.RESEND_API_KEY);

// Адрес, куда приходят заявки
const TO_EMAIL = process.env.TO_EMAIL || "lumoon44@outlook.com";

// Адрес отправителя — после верификации домена замените на свой
// например: "Lumoon <no-reply@lumoon44.ru>"
const FROM_EMAIL =
  process.env.FROM_EMAIL || "Lumoon <onboarding@resend.dev>";

module.exports = async function handler(req, res) {
  // Разрешаем только POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, phone, message } = req.body ?? {};

  // Базовая валидация
  if (!name || !phone || !message) {
    return res.status(400).json({ error: "Заполните все поля" });
  }
  if (String(name).trim().length < 2) {
    return res.status(400).json({ error: "Слишком короткое имя" });
  }
  if (!/^[\d\s+\-()]{10,}$/.test(String(phone).trim())) {
    return res.status(400).json({ error: "Некорректный номер телефона" });
  }
  if (String(message).trim().length < 10) {
    return res.status(400).json({ error: "Сообщение слишком короткое" });
  }

  const now = new Date().toLocaleString("ru-RU", {
    timeZone: "Europe/Moscow",
    dateStyle: "long",
    timeStyle: "short",
  });

  const lead = {
    name: String(name).trim(),
    phone: String(phone).trim(),
    message: String(message).trim(),
    date: now,
  };

  // Письмо, Telegram и сохранение в базу — параллельно;
  // заявка считается доставленной, если сработал хотя бы один канал
  const [emailResult, telegramResult, storeResult] = await Promise.allSettled([
    sendEmail(lead),
    notifyTelegram(lead),
    saveLead(lead),
  ]);

  if (emailResult.status === "rejected") {
    console.error("Resend error:", emailResult.reason);
  }
  if (telegramResult.status === "rejected") {
    console.error("Telegram error:", telegramResult.reason);
  }
  if (storeResult.status === "rejected") {
    console.error("Redis error:", storeResult.reason);
  }

  const delivered =
    emailResult.status === "fulfilled" ||
    (telegramResult.status === "fulfilled" && telegramResult.value);

  if (!delivered) {
    return res.status(500).json({ error: "Ошибка отправки, попробуйте позже" });
  }

  return res.status(200).json({ ok: true });
};

// Сохраняем заявку в Upstash Redis (последние 200)
async function saveLead(lead) {
  if (!redisConfigured()) return false;
  await redis("LPUSH", "leads", JSON.stringify(lead));
  await redis("LTRIM", "leads", "0", "199");
  return true;
}

// Уведомление владельцу (TELEGRAM_CHAT_ID) и всем, кто авторизовался в боте по паролю
async function notifyTelegram(lead) {
  const text = [
    "🔔 <b>Lumoon — новая заявка</b>",
    "",
    `👤 <b>Имя:</b> ${escapeHtml(lead.name)}`,
    `📞 <b>Телефон:</b> ${escapeHtml(lead.phone)}`,
    `💬 <b>Сообщение:</b> ${escapeHtml(lead.message)}`,
    "",
    `🕐 ${lead.date}`,
  ].join("\n");

  const chatIds = new Set();
  if (process.env.TELEGRAM_CHAT_ID) {
    chatIds.add(String(process.env.TELEGRAM_CHAT_ID));
  }
  if (redisConfigured()) {
    try {
      const authorized = (await redis("SMEMBERS", "authorized_chats")) || [];
      authorized.forEach((id) => chatIds.add(String(id)));
    } catch (err) {
      console.error("Redis error (authorized_chats):", err);
    }
  }
  if (chatIds.size === 0) return false;

  const results = await Promise.allSettled(
    [...chatIds].map((id) => sendTelegramMessage(id, text))
  );
  results.forEach((r) => {
    if (r.status === "rejected") console.error("Telegram error:", r.reason);
  });
  return results.some((r) => r.status === "fulfilled" && r.value);
}

function sendEmail({ name, phone, message, date }) {
  return resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject: `Новая заявка с сайта — ${name}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;color:#1a1a1a">
          <div style="background:#110e0b;padding:28px 32px;border-radius:8px 8px 0 0">
            <h1 style="margin:0;font-size:22px;color:#d97a1e;letter-spacing:-0.02em">
              Lumoon — новая заявка
            </h1>
            <p style="margin:6px 0 0;font-size:13px;color:#6e6760">${date}</p>
          </div>
          <div style="border:1px solid #e8e0d5;border-top:none;padding:28px 32px;border-radius:0 0 8px 8px">
            <table style="width:100%;border-collapse:collapse">
              <tr>
                <td style="padding:10px 0;font-size:12px;color:#888;text-transform:uppercase;letter-spacing:.06em;width:110px;vertical-align:top">Имя</td>
                <td style="padding:10px 0;font-size:15px;font-weight:600">${escapeHtml(name)}</td>
              </tr>
              <tr style="border-top:1px solid #f0ebe4">
                <td style="padding:10px 0;font-size:12px;color:#888;text-transform:uppercase;letter-spacing:.06em;vertical-align:top">Телефон</td>
                <td style="padding:10px 0;font-size:15px">
                  <a href="tel:${escapeHtml(phone.replace(/\s/g, ""))}" style="color:#d97a1e;text-decoration:none;font-weight:600">
                    ${escapeHtml(phone)}
                  </a>
                </td>
              </tr>
              <tr style="border-top:1px solid #f0ebe4">
                <td style="padding:10px 0;font-size:12px;color:#888;text-transform:uppercase;letter-spacing:.06em;vertical-align:top">Сообщение</td>
                <td style="padding:10px 0;font-size:15px;line-height:1.6">${escapeHtml(message).replace(/\n/g, "<br>")}</td>
              </tr>
            </table>
          </div>
        </div>
      `,
  });
}
