'use client'
import React from 'react'
import { motion } from 'framer-motion'


const skills = ['React', 'Next.js', 'Tailwind', 'TypeScript', 'Figma', 'Framer Motion']


export default function Skills() {
return (
<section id="skills" className="section-pad">
<div className="max-w-5xl mx-auto px-6">
<h3 className="text-2xl font-semibold mb-4">Skills</h3>
<motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} className="flex flex-wrap gap-3">
{skills.map(s => (
<div key={s} className="px-3 py-2 rounded-full glass text-sm">{s}</div>
))}
</motion.div>
</div>
</section>
)
}