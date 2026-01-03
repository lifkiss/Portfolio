import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, message } = body

    // 1. Validasi input sederhana
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Mohon isi semua kolom.' }, { status: 400 })
    }

    // 2. Konfigurasi Transporter (Kurir Email) menggunakan Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // Email Anda dari .env
        pass: process.env.GMAIL_PASS, // App Password dari .env
      },
    })

    // 3. Setup Detail Email
    const mailOptions = {
      from: process.env.GMAIL_USER, // Pengirim (harus sama dengan auth user)
      to: 'llifkie@gmail.com',      // Penerima (Email Anda sendiri)
      replyTo: email,               // Agar saat Anda reply, langsung ke email pengirim
      subject: `New Message from Portfolio: ${name}`,
      text: message,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <div style="background-color: #f4f4f4; padding: 10px; border-radius: 5px;">
          ${message}
        </div>
      `,
    }

    // 4. Kirim Email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ message: 'Email berhasil terkirim!' }, { status: 200 })
  } catch (err: any) {
    console.error('Email error:', err)
    return NextResponse.json({ error: 'Gagal mengirim email.' }, { status: 500 })
  }
}