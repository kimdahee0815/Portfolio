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
              <body style="margin:0; padding:0; background-color:#f4f4f7; font-family:'Helvetica Neue', Arial, sans-serif;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
                  <tr>
                    <td align="center">
                      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:20px; overflow:hidden; box-shadow:0 10px 40px rgba(0,0,0,0.12);">
                        <tr>
                          <td style="padding:36px 40px; background: linear-gradient(120deg, #ff4d6d, #ff9a4d, #ffe14d, #4dff9e, #4dc9ff, #7a4dff, #ff4dd2);">
                            <table role="presentation" width="100%">
                              <tr>
                                <td style="background:rgba(255,255,255,0.92); border-radius:14px; padding:20px 24px;">
                                  <p style="margin:0; font-size:12px; letter-spacing:1.5px; color:#a855f7; font-weight:700; text-transform:uppercase;">Portfolio Contact</p>
                                  <h1 style="margin:6px 0 0 0; font-size:22px; color:#1a1a1a;">📬 New Message from ${name}</h1>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding:32px 40px;">
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-radius:14px; border:1px solid #eee; overflow:hidden;">
                              <tr>
                                <td style="padding:16px 20px; border-bottom:1px solid #f0f0f5; background:#fafafa;">
                                  <p style="margin:0; font-size:11px; text-transform:uppercase; letter-spacing:1px; color:#a3a3a3;">Name</p>
                                  <p style="margin:4px 0 0 0; font-size:15px; color:#1a1a1a; font-weight:600;">${name}</p>
                                </td>
                              </tr>
                              <tr>
                                <td style="padding:16px 20px; border-bottom:1px solid #f0f0f5; background:#fafafa;">
                                  <p style="margin:0; font-size:11px; text-transform:uppercase; letter-spacing:1px; color:#a3a3a3;">Email</p>
                                  <p style="margin:4px 0 0 0; font-size:15px;">
                                    <a href="mailto:${email}" style="color:#7a4dff; text-decoration:none; font-weight:600;">${email}</a>
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td style="padding:20px; background:#fff;">
                                  <p style="margin:0 0 8px 0; font-size:11px; text-transform:uppercase; letter-spacing:1px; color:#a3a3a3;">Message</p>
                                  <p style="margin:0; font-size:15px; line-height:1.7; color:#333; white-space:pre-wrap;">${message}</p>
                                </td>
                              </tr>
                            </table>
                            <table role="presentation" width="100%" style="margin-top:28px;">
                              <tr>
                                <td align="center">
                                  <a href="mailto:${email}" style="display:inline-block; padding:14px 32px; border-radius:999px; background:linear-gradient(90deg, #ff4d6d, #7a4dff, #4dc9ff); color:#fff; font-size:14px; font-weight:700; text-decoration:none;">
                                    Reply to ${name} →
                                  </a>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding:24px 40px; text-align:center;">
                            <p style="margin:0; font-size:12px; color:#bbb;">Sent automatically from daheekim.app contact form</p>
                          </td>
                        </tr>
                        <tr>
                          <td style="height:6px; background:linear-gradient(90deg, #ff4d6d, #ff9a4d, #ffe14d, #4dff9e, #4dc9ff, #7a4dff, #ff4dd2);"></td>
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
