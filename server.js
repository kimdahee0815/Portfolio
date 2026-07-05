const express = require("express");
const cors = require("cors");
// const sgMail = require("@sendgrid/mail");
// const { Enveloop } = require("enveloop");
// const enveloop = new Enveloop({ apiKey: process.env.ENVELOOP_LIVE_API_KEY });
const nodemailer = require("nodemailer");
// const resend = new Resend(process.env.RESEND_API_KEY);

const to = process.env.EMAIL_TO || "Acme <onboarding@resend.dev>";
// const templateId = process.env.RESEND_TEMPLATE_ID || "your-template-id";
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
    origin: ["http://localhost:5503", "https://dahee-kim.netlify.app", "https://daheekim.app"],
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOptions));

// SMTP 설정
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_TO,
        pass: process.env.GOOGLE_APP_PASS,
    },
});

app.options("/send-email", cors(corsOptions));
app.use(express.json());

app.post("/send-email", async (req, res) => {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const { name, message, email } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({
            success: false,
            error: "Missing fields",
        });
    }

    try {
        const data = {
            from: `"Portfolio Contact" <${email}>`,
            to: to,
            subject: `📬 New Message from ${name} - My Portfolio`,
            html: `
            <!DOCTYPE html>
            <html>
            <head><meta charset="utf-8" /></head>
            <body style="margin:0; padding:0; background-color:#f5f2ee;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:48px 0;">
                <tr>
                  <td align="center">
                    <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="background:#fffdfb; border-radius:14px; overflow:hidden; box-shadow:0 2px 12px rgba(0,0,0,0.06); font-family:Georgia, 'Times New Roman', serif;">

                      <!-- Pastel gradient header -->
                      <tr>
                        <td style="padding:40px 44px 32px 44px; background:linear-gradient(135deg, #e8e0f5 0%, #f5e0e8 50%, #fbe8d9 100%);">
                          <p style="margin:0 0 8px 0; font-size:11px; letter-spacing:2px; text-transform:uppercase; color:#8a7a9c; font-family:Arial, sans-serif;">Portfolio inquiry</p>
                          <h1 style="margin:0; font-size:25px; font-weight:400; color:#423a52; font-style:italic;">A message from ${name}</h1>
                        </td>
                      </tr>

                      <!-- Body -->
                      <tr>
                        <td style="padding:32px 44px;">
                          <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <tr>
                              <td style="padding:0 0 20px 0; width:90px; vertical-align:top; font-size:12px; letter-spacing:0.5px; color:#b3a6bd; text-transform:uppercase;">Name</td>
                              <td style="padding:0 0 20px 0; font-size:14px; color:#423a52;">${name}</td>
                            </tr>
                            <tr>
                              <td style="padding:0 0 20px 0; vertical-align:top; font-size:12px; letter-spacing:0.5px; color:#b3a6bd; text-transform:uppercase;">Email</td>
                              <td style="padding:0 0 20px 0; font-size:14px;"><a href="mailto:${email}" style="color:#b487a0; text-decoration:none;">${email}</a></td>
                            </tr>
                            <tr>
                              <td style="padding:0; vertical-align:top; font-size:12px; letter-spacing:0.5px; color:#b3a6bd; text-transform:uppercase;">Message</td>
                              <td style="padding:0; font-size:14px; line-height:1.8; color:#5a5063; white-space:pre-wrap;">${message}</td>
                            </tr>
                          </table>
                        </td>
                      </tr>

                      <!-- CTA -->
                      <tr>
                        <td style="padding:0 44px 36px 44px;">
                          <a href="mailto:${email}" style="display:inline-block; padding:13px 30px; border-radius:999px; background:linear-gradient(120deg, #d9c8ec, #f0c9d8, #fad6b8); color:#4a3f57; font-size:13px; font-family:Arial, sans-serif; letter-spacing:0.5px; font-weight:bold; text-decoration:none;">Reply to ${name} →</a>
                        </td>
                      </tr>

                      <!-- Footer -->
                      <tr>
                        <td style="padding:18px 44px; border-top:1px solid #f0ebe4; text-align:center;">
                          <p style="margin:0; font-size:11px; color:#b8afc0; font-family:Arial, sans-serif; letter-spacing:0.5px;">daheekim.app · Contact form</p>
                        </td>
                      </tr>

                      <!-- Pastel gradient bottom line -->
                      <tr>
                        <td style="height:5px; background:linear-gradient(90deg, #e8e0f5, #f5e0e8, #fbe8d9, #f5e0e8, #e8e0f5);"></td>
                      </tr>

                    </table>
                  </td>
                </tr>
              </table>
            </body>
            </html>
            `,
        };

        await transporter.sendMail(data, (error, info) => {
            if (error) {
                console.error("Email error:", error);
                return res.status(500).json({ success: false, error: error.message });
            }
        });

        console.log("Email sent successfully!");

        res.status(200).json({ success: true });
    } catch (error) {
        console.error("Server error:", error);
        res.status(500).json({ success: false, error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`✅ Server running ...`);
    console.log(PORT);
});
