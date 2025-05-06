const express = require('express');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const corsOptions = {
  origin: ['http://localhost:3000', 'https://dahee-kim.netlify.app'],
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
};

app.use(cors(corsOptions));

app.options('/send-email', cors(corsOptions));
app.use(express.json());

app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  const msg = {
    to: 'kimdahee0815@egmail.com',
    from: email, 
    subject: `📬 New Message from ${name}`,
    text: `Sender: ${name} <${email}>\n\nMessage:\n${message}`,
    html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; padding: 20px; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 10px;">
      <h2 style="color: #333;">📬 New Message from <strong>${name}</strong></h2>
      <p><strong>Sender Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; white-space: pre-wrap;">
        ${message}
      </div>
      <hr style="margin: 30px 0; border: none; border-top: 1px solid #ccc;" />
      <footer style="font-size: 0.9em; color: #999; text-align: center;">
        This message was sent from your portfolio contact form.
      </footer>
    </div>
  `
  };

  try {
    await sgMail.send(msg);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("SendGrid error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running ...`);
  console.log(PORT)
});