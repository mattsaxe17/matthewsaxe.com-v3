import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    const body = await req.json();
    const { name, email, message } = body as { name: string; email: string; message: string };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name || !email || !emailRegex.test(email) || !message || message.length < 20) {
        return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
    }

    try {
        await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to: 'matt@matthewsaxe.com',
            subject: `New inquiry from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        });

        return NextResponse.json({ success: true });
    } catch {
        return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
    }
}
