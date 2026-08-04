import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  const recipientEmail =
    process.env.NEXT_PUBLIC_CONTACT_EMAIL || process.env.RESEND_TO_EMAIL;

  if (!recipientEmail) {
    return NextResponse.json(
      { error: "Recipient email is not configured" },
      { status: 500 }
    );
  }

  try {
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
