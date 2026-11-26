// Telegram Bot Configuration for FUTURE ME
export const TELEGRAM_CONFIG = {
  BOT_TOKEN: '9188437210:AAGZNnLXqSVFnnDgSvfCyWR2sKZNy8wdOYY',
  BOT_ID: '9188437210',
  ADMIN_ID: '8455527189',
  BOT_USERNAME: 'future_me7_bot',
  BOT_URL: 'https://t.me/future_me7_bot',
};

function escapeHtml(text) {
  if (!text) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/**
 * Sends a message to the configured Telegram Admin via Bot API
 */
export async function sendTelegramMessage(text) {
  const url = `https://api.telegram.org/bot${TELEGRAM_CONFIG.BOT_TOKEN}/sendMessage`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: TELEGRAM_CONFIG.ADMIN_ID,
      text,
      parse_mode: 'HTML',
      disable_web_page_preview: true,
    }),
  });

  const data = await response.json();

  if (!response.ok || !data.ok) {
    const desc = data?.description || 'Telegram API xatoligi yuz berdi';
    if (desc.toLowerCase().includes('chat not found')) {
      throw new Error('Admin Telegramda @future_me7_bot botiga kirib /start tugmasini bosishi kerak.');
    }
    throw new Error(desc);
  }

  return data;
}

/**
 * Sends a user application / consultation request from Home page to Telegram
 */
export async function sendApplicationToTelegram({ name, stage, contact, message }) {
  const now = new Date().toLocaleString('uz-UZ');
  const lines = [
    `🚀 <b>FUTURE ME — Yangi Murojaat!</b>`,
    ``,
    `👤 <b>Ism:</b> ${escapeHtml(name)}`,
    stage ? `🎓 <b>Sinf / Bosqich:</b> ${escapeHtml(stage)}` : null,
    contact ? `📞 <b>Aloqa:</b> ${escapeHtml(contact)}` : null,
    message ? `💬 <b>Xabar / Maqsad:</b> ${escapeHtml(message)}` : null,
    ``,
    `🕒 <i>Vaqt: ${escapeHtml(now)}</i>`,
  ].filter(Boolean);

  return sendTelegramMessage(lines.join('\n'));
}

/**
 * Sends quiz TOP 3 results summary to Telegram
 */
export async function sendQuizResultToTelegram({ name, contact, topCareers, totalAnswered }) {
  const now = new Date().toLocaleString('uz-UZ');
  const topLines = (topCareers || []).map(
    (c, idx) => `${idx + 1}. <b>${escapeHtml(c.title)}</b> — ${c.matchPercentage}% (${escapeHtml(c.category)})`
  );

  const lines = [
    `📊 <b>FUTURE ME — Test Natijasi!</b>`,
    ``,
    name ? `👤 <b>Foydalanuvchi:</b> ${escapeHtml(name)}` : null,
    contact ? `📞 <b>Aloqa:</b> ${escapeHtml(contact)}` : null,
    `✅ <b>Javob berilgan savollar:</b> ${totalAnswered || 15} / 15`,
    ``,
    `🏆 <b>TOP 3 Mos Kasblar:</b>`,
    ...topLines,
    ``,
    `🕒 <i>Vaqt: ${escapeHtml(now)}</i>`,
  ].filter(Boolean);

  return sendTelegramMessage(lines.join('\n'));
}

/**
 * Sends newsletter subscription to Telegram
 */
export async function sendNewsletterToTelegram(email) {
  const now = new Date().toLocaleString('uz-UZ');
  const text = [
    `📬 <b>FUTURE ME — Yangi Obuna!</b>`,
    ``,
    `📧 <b>Email:</b> ${escapeHtml(email)}`,
    `🕒 <i>Vaqt: ${escapeHtml(now)}</i>`,
  ].join('\n');

  return sendTelegramMessage(text);
}
