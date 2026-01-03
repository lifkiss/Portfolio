'use client'
import React from 'react'
import { motion } from 'framer-motion'

const skills = [
  'React',
  'Next.js',
  'Tailwind',
  'TypeScript',
  'Figma',
  'Framer Motion',
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const item = {
  hidden: { opacity: 0, y: 4 },
  show: { opacity: 1, y: 0 },
}

export default function Skills() {
  return (
    <div>
      <h4 className="text-sm font-semibold mb-2">Skills</h4>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-wrap gap-2"
      >
        {skills.map((s) => (
          <motion.span
            key={s}
            variants={item}
            className="
              px-2.5 py-1
              text-xs
              rounded-full
              border border-white/10
              bg-white/5
              text-slate-600
            "
          >
            {s}
          </motion.span>
        ))}
      </motion.div>
    </div>
  )
}
