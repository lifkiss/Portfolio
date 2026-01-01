'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
return (
<section id="about" className="section-pad">
<div className="max-w-6xl mx-auto px-6">
<motion.div initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="glass card-soft grid md:grid-cols-2 gap-6 items-center">
<div>
<h2 className="text-3xl font-bold mb-2">About me</h2>
<p className="text-slate-600">I am an Informatics student focusing on frontend engineering and UX design. I enjoy building polished interfaces and experimenting with visual design systems like glassmorphism.</p>
</div>
<div className="flex flex-col gap-3">
<div className="flex items-center gap-4">
<img src="/images/profile.jpg" alt="avatar" className="w-28 h-28 rounded-full object-cover border border-white/20" />
<div>
<div className="text-sm text-slate-600">Based in Indonesia</div>
<div className="text-sm text-slate-600">Open to internship</div>
</div>
</div>

<div className="mt-2">
<h4 className="text-sm font-semibold mb-2">Interests</h4>
<ul className="text-slate-600 list-disc pl-5 space-y-1">
<li>UI design & prototyping</li>
<li>Frontend performance & animations</li>
<li>Accessible interfaces</li>
</ul>
</div>
</div>
</motion.div>
</div>
</section>
)
}