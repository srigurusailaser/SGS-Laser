import dotenv from 'dotenv';

dotenv.config();

const sendEmail = async (subject, htmlContent, sender, to, replyTo) => {
  const payload = {
    subject,
    htmlContent,
    sender,
    to,
  };

  if (replyTo) {
    payload.replyTo = replyTo;
  }

  const response = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'api-key': process.env.BREVO_API_KEY,
      'content-type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const err = await response.text();
    console.error("Brevo API Error:", err);
    throw new Error(`Failed to send email: ${response.statusText}`);
  }

  return await response.json();
};

export { sendEmail };
