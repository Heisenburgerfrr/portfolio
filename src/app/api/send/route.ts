import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const apiKey = process.env.RESEND_API_KEY;
    const recipientEmail =
      process.env.NEXT_PUBLIC_CONTACT_EMAIL || process.env.RESEND_TO_EMAIL;

    if (!apiKey) {
      console.warn("RESEND_API_KEY is not configured.");
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    if (!recipientEmail) {
      return NextResponse.json(
        { error: "Recipient email is not configured." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: recipientEmail,
      subject: `New message from ${name}`,
      replyTo: email,
      text: `From ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to send message:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
