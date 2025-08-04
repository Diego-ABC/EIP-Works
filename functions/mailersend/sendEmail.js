import { HttpsError } from "firebase-functions/https";

/**
 * Sends an email using the MailerSend API.
 *
 * @param {{
 *   emailVars: Object,
 *   from: { email: string, name?: string },
 *   to: { email: string, name?: string },
 *   subject?: string,
 *   templateId: string
 * }} params The email parameters.
 * @return {Promise<{success: true, id: (string|null)}>} The result of the send operation.
 * @throws {import("firebase-functions/https").HttpsError} If the email fails to send.
 */
export default async function sendEmail({
  emailVars,
  from,
  to,
  subject = "",
  templateId,
}) {
  if (!from || !to || !templateId)
    throw new Error("missing sendEmail parameters");

  const MAILERSEND_SEND_KEY = process.env.MAILERSEND_SEND_KEY;
  const res = await fetch("https://api.mailersend.com/v1/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
      Authorization: `Bearer ${MAILERSEND_SEND_KEY}`,
    },
    body: JSON.stringify({
      from,
      to: [to],
      personalization: [
        {
          email: to.email,
          data: emailVars,
        },
      ],
      subject,
      template_id: templateId,
    }),
  });

  console.log(
    JSON.stringify({
      from,
      to: [to],
      personalization: [
        {
          email: to.email,
          data: emailVars,
        },
      ],
      subject,
      template_id: templateId,
    })
  );
  const rawText = await res.text();

  let result;
  try {
    result = JSON.parse(rawText);
  } catch (_) {
    result = { raw: rawText }; // fallback if not JSON
  }

  if (!res.ok) {
    console.error("MailerSend error:", result);
    throw new HttpsError("internal", "Failed to send email", result);
  }

  return { success: true, id: res.headers.get("x-message-id") };
}
