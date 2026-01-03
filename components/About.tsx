'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Skills from './Skills'

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass card-soft flex flex-col gap-6 items-start"
        >
          
          {/* 1. AVATAR */}
          <div className="flex items-center gap-4">
            <img
              src="mukagw.jpeg"
              alt="avatar"
              className="w-28 h-28 rounded-full object-cover border border-white/20"
            />
            <div className="flex flex-col items-start gap-2">
              <div className="text-sm text-slate-600">Based in Indonesia</div>
              <a
                href="/Lifkie-Lie-Resume.pdf"
                download
                className="px-4 py-2 bg-slate-800 text-white text-sm font-medium rounded-lg hover:bg-slate-700 transition-colors shadow-sm"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* 2. ABOUT ME */}
          <div>
            <h2 className="text-3xl font-bold mb-2">About me</h2>
            <p className="text-slate-600">
              I am an Informatics student. backend developer.
            </p>
          </div>

          {/* 3. INTERESTS + SKILLS (SEJAJAR) */}
          <div className="w-full border-t border-slate-200/60 pt-6 mt-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* INTERESTS */}
              <div>
                <h4 className="text-sm font-semibold mb-2">Interests</h4>
                <ul className="text-slate-600 list-disc pl-5 space-y-1">
                  <li>Full-Stack Developer</li>
                  <li>Android Developer</li>
                  <li>Machine Learning</li>
                </ul>
              </div>

              {/* SKILLS */}
              <div>
                <Skills />
              </div>

            </div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}
