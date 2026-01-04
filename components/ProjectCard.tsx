'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Project } from '../data/projects'

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article 
      whileHover={{ y: -8, scale: 1.01 }} 
      className="glass card-soft"
    >
      <div className="w-full h-44 overflow-hidden rounded-xl mb-4 bg-gray-100 dark:bg-slate-800">
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
        {project.title}
      </h4>
      <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm">
        {project.description}
      </p>

      {/* TECH TAGS */}
      <div className="flex flex-wrap gap-2 mt-3">
        {project.tech.map((t) => (
          <span
            key={t}
            className="
              /* UKURAN */
              text-xs px-3 py-1 
              
              /* BENTUK & GAYA */
              font-medium
              rounded-full 
              border border-white/10 
              bg-white/5 
              
              /* WARNA FONT */
              text-slate-600 
              
              /* UBAH KE slate-300 UNTUK DARK MODE 
                 (Agar terlihat sama terangnya dengan teks paragraf About yang ukurannya lebih besar)
              */
              dark:text-slate-300
            "
          >
            {t}
          </span>
        ))}
      </div>

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-600 dark:text-pink-400 font-medium mt-3 inline-block hover:underline"
      >
        Visit →
      </a>
    </motion.article>
  )
}