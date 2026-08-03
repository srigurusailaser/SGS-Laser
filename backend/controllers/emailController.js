import { sendEmail } from '../utils/brevo.js';

const sendContactEmail = async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Name, email, and message are required' });
  }

  const adminEmail = process.env.ADMIN_EMAIL;

  try {
    await sendEmail(
      `New Contact Form Submission from ${name}`,
      `
      <html>
        <body>
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </body>
      </html>
      `,
      { name: "SGS Lasers System", email: process.env.FROM_EMAIL || adminEmail },
      [{ email: adminEmail, name: "Admin" }],
      { email: email, name: name }
    );
    
    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending contact email:', error);
    res.status(500).json({ message: 'Failed to send message' });
  }
};

export { sendContactEmail };
