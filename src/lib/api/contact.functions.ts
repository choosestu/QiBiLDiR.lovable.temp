import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  company: z.string().trim().max(100).optional().or(z.literal("")),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(1).max(1000),
});

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator(contactSchema)
  .handler(async ({ data }) => {
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      console.warn("RESEND_API_KEY not configured — skipping email");
      return { success: true };
    }

    const html = `
      <div style="font-family: sans-serif; max-width: 600px;">
        <h2 style="color: #1a1a2e;">New Contact — QiBiLDiR</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; font-weight: bold; width: 120px;">Name</td><td>${data.name}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold;">Email</td><td><a href="mailto:${data.email}">${data.email}</a></td></tr>
          ${data.company ? `<tr><td style="padding: 8px 0; font-weight: bold;">Company</td><td>${data.company}</td></tr>` : ""}
        </table>
        <hr style="margin: 20px 0; border: none; border-top: 1px solid #eee;" />
        <p style="font-weight: bold;">Message</p>
        <p style="white-space: pre-wrap; color: #444;">${data.message}</p>
      </div>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "QiBiLDiR <contact@thefoundation.ca>",
        to: ["stuart@thefoundation.ca"],
        subject: `New Contact: ${data.name}${data.company ? ` — ${data.company}` : ""}`,
        html,
        reply_to: data.email,
      }),
    });

    if (!res.ok) {
      const errBody = await res.text();
      console.error("Resend error:", res.status, errBody);
      throw new Error("Failed to send message");
    }

    return { success: true };
  });
