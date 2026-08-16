import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const name = formData.get("name")?.toString() || "";
    const contact = formData.get("contact")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const message = formData.get("message")?.toString() || "";

    const { error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["mayankkulkarni65@gmail.com"],
      subject: `New portfolio message from ${name}`,
      replyTo: email,
      text: `
Name: ${name}
Contact: ${contact}
Email: ${email}

Message:
${message}
      `,
    });

    if (error) {
      console.error(error);

      return NextResponse.json(
        { success: false, error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { success: false, error: "Something went wrong" },
      { status: 500 }
    );
  }
}