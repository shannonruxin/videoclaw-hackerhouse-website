import { Resend } from "resend";

function setCors(res: any) {
  // Adjust origin as needed; "*" is simplest for a contact form endpoint.
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

export default async function handler(req: any, res: any) {
  setCors(res);

  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  if (req.method !== "POST") {
    res.status(405).send("Method Not Allowed");
    return;
  }

  const body = await getJsonBody(req);
  const email = body?.email;
  const message = body?.message;

  if (!email || !message) {
    res.status(400).send("Missing fields");
    return;
  }

  if (!process.env.RESEND_API_KEY) {
    res.status(500).send("Server not configured");
    return;
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { data, error } = await resend.emails.send({
      // Replace with your verified domain sender for production deliverability.
      from: "VideoClaw Hackerhouse <shannonruxin@gmail.com>",
      to: ["shannonruxin@gmail.com"],
      subject: "VideoClaw Hackerhouse — New Contact",
      replyTo: email,
      text: `New message from: ${email}\n\n${message}`,
    });

    if (error) {
      console.error("Resend contact send failed:", error);
      res.status(500).json({ success: false, error: error.message });
      return;
    }

    res.status(200).json({ success: true, id: data?.id });
  } catch (err: any) {
    const message =
      typeof err?.message === "string" && err.message.length > 0
        ? err.message
        : "Error sending email";
    console.error("Resend contact unexpected error:", err);
    res.status(500).json({ success: false, error: message });
  }
}

async function getJsonBody(req: any) {
  if (req.body && typeof req.body === "object") return req.body;
  if (typeof req.body === "string") return safeJsonParse(req.body);

  let raw = "";
  for await (const chunk of req) {
    raw += chunk;
  }
  return safeJsonParse(raw);
}

function safeJsonParse(raw: string) {
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

