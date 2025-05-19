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
  const { name, email, message } = req.body;

  // const msg = {
  //   to: 'kimdahee0815@gmail.com',
  //   from: email, 
  //   subject: `📬 New Message from ${name}`,
  //   text: `Sender: ${name} <${email}>\n\nMessage:\n${message}`,
  //   html: `
  //   <div style="font-family: Arial, sans-serif; line-height: 1.6; padding: 20px; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 10px;">
  //     <h2 style="color: #333;">📬 New Message from <strong>${name}</strong></h2>
  //     <p><strong>Sender Email:</strong> ${email}</p>
  //     <p><strong>Message:</strong></p>
  //     <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; white-space: pre-wrap;">
  //       ${message}
  //     </div>
  //     <hr style="margin: 30px 0; border: none; border-top: 1px solid #ccc;" />
  //     <footer style="font-size: 0.9em; color: #999; text-align: center;">
  //       This message was sent from your portfolio contact form.
  //     </footer>
  //   </div>
  // `
  // };

  try {
    const data = {
      "to": "kimdahee0815@gmail.com",
      "template": "hello",
      "templateVariables": {
        "message": message,
        "name": name,
        "subject": `📬 New Message from ${name} - My Portfolio`
      }
    }
    // await enveloop.sendMessage({
    //   "to": "kimdahee0815@gmail.com",
    //   "template": "hello",
    //   "templateVariables": {
    //     "message": message,
    //     "name": name,
    //     "subject": `📬 New Message from ${name} - My Portfolio`
    //   }
    // })
    await fetch("https://api.enveloop.com/messages", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "Authorization": process.env.ENVELOOP_LIVE_API_KEY,
      },
    })

    // enveloop.templateInfo({ template: 'welcome-email' })
    //   .then(res => console.log(res))
    //   .catch(err => console.log(err))
    res.status(200).json({ success: true });
    // await sgMail.send(msg);
    // res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: error.message });
    // console.error("SendGrid error:", JSON.stringify(error.response.body, null, 2));
    // res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running ...`);
  console.log(PORT)
});