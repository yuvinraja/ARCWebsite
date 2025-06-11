// app/api/contact/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY); // Store API key in .env.local

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, reason, message } = body;

    // Compose email content
    const content = `
      New Contact Form Submission:

      Name: ${name}
      Email: ${email}
      Reason: ${reason}
      Message: ${message}
    `;

    const data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // Use verified sender
      to: ['voltaerotech@gmail.com'], // Replace with site owner's email
      subject: `New Contact: ${reason}`,
      text: content,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
