const express = require("express");
const cors = require("cors");
// const sgMail = require("@sendgrid/mail");
// const { Enveloop } = require("enveloop");
// const enveloop = new Enveloop({ apiKey: process.env.ENVELOOP_LIVE_API_KEY });
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const to = process.env.EMAIL_TO || "Acme <onboarding@resend.dev>";
const templateId = process.env.RESEND_TEMPLATE_ID || "your-template-id";
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
    origin: ["http://localhost:5503", "https://dahee-kim.netlify.app", "https://daheekim.app"],
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOptions));

app.options("/send-email", cors(corsOptions));
app.use(express.json());

app.post("/send-email", async (req, res) => {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const { name, message, email } = req.body;

    try {
        const data = {
            from: email,
            to: [to],
            template_id: templateId,
            subject: `📬 New Message from ${name} - My Portfolio`,
            variables: {
                name: name,
                message: message,
                email: email,
            },
        };

        const { data: response, error } = await resend.emails.send(data);

        if (error) {
            console.error("Resend error:", error);
            return res.status(500).json({ success: false, error: error.message });
        }

        console.log("Email sent successfully!");
        console.log("Email ID:", response?.id);
        console.log("Template ID:", templateId);

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
