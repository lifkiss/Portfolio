'use client'
import React from 'react'
import { motion, Variants } from 'framer-motion'

const toolsList: string[] = [
  'Git',
  'GitHub',
  'Vercel',
  'Firebase',
  'MySQL',
  'Postman',
  'VS Code',
  'Android Studio',
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

export default function Tools() {
  return (
    <div>
      <h4 className="text-sm font-semibold mb-2">Tools & Platforms</h4>

      <motion.div
        variants={container}
        initial="hidden"
        // PERBAIKAN BUG: Ganti whileInView jadi animate
        animate="show"
        className="flex flex-wrap gap-2"
      >
        {toolsList.map((tool) => (
          <motion.span
            key={tool}
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
            {tool}
          </motion.span>
        ))}
      </motion.div>
    </div>
  )
}