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
});