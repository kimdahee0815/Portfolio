const express = require('express');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');
const { Enveloop } = require('enveloop')
const enveloop = new Enveloop({ apiKey: process.env.ENVELOOP_LIVE_API_KEY })
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const corsOptions = {
  origin: ['http://localhost:5503', 'https://dahee-kim.netlify.app'],
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
};

app.use(cors(corsOptions));

app.options('/send-email', cors(corsOptions));
app.use(express.json());

app.post('/send-email', async (req, res) => {
   if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, message, email } = req.body;

  try {
    const data = {
      to: "kimdahee0815@gmail.com",
      template: "hello",
      templateVariables: {
        name,
        message,
        subject: `📬 New Message from ${name} - My Portfolio`,
        email 
      }
    };

    const response = await fetch("https://api.enveloop.com/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.ENVELOOP_LIVE_API_KEY}`, 
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Enveloop error:", errorData);
      return res.status(500).json({ success: false, error: errorData });
    }

    console.log(response.json())
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running ...`);
  console.log(PORT)
});