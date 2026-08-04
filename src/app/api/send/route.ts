import { NextResponse } from "next/server";
import { Resend } from "resend";

// Simple in-memory sliding window rate limiter (IP based)
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;
const ipRequestCounts = new Map<string, { count: number; resetTime: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = ipRequestCounts.get(ip);

  if (!record || now > record.resetTime) {
    ipRequestCounts.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  record.count += 1;
  return false;
}

// Clean up expired rate limit records periodically
setInterval(() => {
  const now = Date.now();
  for (const [ip, record] of ipRequestCounts.entries()) {
    if (now > record.resetTime) {
      ipRequestCounts.delete(ip);
    }
  }
}, 5 * 60 * 1000);

// RFC 5322 compliant email validation regex
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export async function POST(req: Request) {
  try {
    // 1. IP Rate Limiting
    const forwardedFor = req.headers.get("x-forwarded-for");
    const clientIp = forwardedFor
      ? forwardedFor.split(",")[0].trim()
      : "127.0.0.1";

    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        { error: "Too many contact requests. Please try again in 10 minutes." },
        { status: 429 }
      );
    }

    // 2. Parse payload safely
    let body;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid JSON payload." },
        { status: 400 }
      );
    }

    const { name, email, message } = body || {};

    // 3. Input Validation & Sanitization
    if (typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { error: "Name is required." },
        { status: 400 }
      );
    }

    if (typeof email !== "string" || !EMAIL_REGEX.test(email.trim())) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { error: "Message content is required." },
        { status: 400 }
      );
    }

    // Sanitize lengths to prevent buffer / payload abuse
    const cleanName = name.trim().slice(0, 100).replace(/[\r\n]/g, " "); // Strip newlines to prevent header injection
    const cleanEmail = email.trim().slice(0, 254).replace(/[\r\n]/g, "");
    const cleanMessage = message.trim().slice(0, 2000);

    const apiKey = process.env.RESEND_API_KEY;
    const recipientEmail =
      process.env.RESEND_TO_EMAIL || process.env.NEXT_PUBLIC_CONTACT_EMAIL;

    if (!apiKey || !recipientEmail) {
      console.error("Email service misconfiguration: Missing RESEND_API_KEY or recipient email.");
      return NextResponse.json(
        { error: "Email service is temporarily unavailable." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: recipientEmail,
      subject: `Portfolio Contact: Message from ${cleanName}`,
      replyTo: cleanEmail,
      text: `Name: ${cleanName}\nEmail: ${cleanEmail}\n\nMessage:\n${cleanMessage}`,
    });

    if (error) {
      console.error("Resend delivery failure:", error);
      return NextResponse.json(
        { error: "Unable to process message delivery at this time." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Unexpected error in /api/send:", error);
    return NextResponse.json(
      { error: "An unexpected server error occurred." },
      { status: 500 }
    );
  }
}
