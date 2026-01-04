'use client'
import React from 'react'
import { motion, Variants } from 'framer-motion'

const skills = [
  'React', 'Next.js', 'Java', 'PHP', 'Kotlin', 'Tailwind',
  'TypeScript', 'REST API', 'Laravel', 'HTML', 'Firebase Authentication',
]

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 4 },
  show: { opacity: 1, y: 0 },
}

export default function Skills() {
  return (
    <div>
      {/* Header diperbesar: text-sm -> text-xl */}
      <h4 className="text-xl font-bold mb-4">Skills</h4>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-wrap gap-2.5"
      >
        {skills.map((s) => (
          <motion.span
            key={s}
            variants={item}
            className="
              px-3.5 py-1.5
              text-base
              font-medium
              rounded-full
              border border-white/10
              bg-white/5
              text-slate-600
            "
            // Perubahan CSS:
            // 1. px-2.5 py-1 -> px-3.5 py-1.5 (Padding lebih lega)
            // 2. text-xs -> text-base (Font lebih besar)
          >
            {s}
          </motion.span>
        ))}
      </motion.div>
    </div>
  )
}