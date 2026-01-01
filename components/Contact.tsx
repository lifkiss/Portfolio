'use client'
import React, { useState } from 'react'


export default function Contact() {
const [status, setStatus] = useState('')


async function handleSubmit(e: any) {
e.preventDefault()
const form = new FormData(e.target)
const body = Object.fromEntries(form.entries())
try {
const res = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(body) })
if (res.ok) setStatus('Sent — thank you!')
else setStatus('Error sending')
} catch (err) { setStatus('Error') }
}


return (
<section id="contact" className="section-pad">
<div className="max-w-4xl mx-auto px-6">
<h3 className="text-2xl font-semibold mb-4">Contact</h3>
<div className="glass card-soft">
<form onSubmit={handleSubmit} className="grid gap-3">
<input
  name="name"
  placeholder="Your name"
  className="p-3 rounded-md border border-white/20"
/>

<input
  name="email"
  placeholder="you@email.com"
  className="p-3 rounded-md border border-white/20"
/>

<textarea
  name="message"
  placeholder="Message"
  className="p-3 rounded-md h-28 border border-white/20"
/>

<div className="flex items-center justify-between">
<button className="px-4 py-2 rounded-md bg-slate-900 text-white">Send</button>
<div className="text-sm text-slate-600">{status}</div>
</div>
</form>
</div>
</div>
</section>
)
}