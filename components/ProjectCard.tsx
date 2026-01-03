'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Project } from '../data/projects'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article whileHover={{ y: -8, scale: 1.01 }} className="glass card-soft">
      <div className="w-full h-44 overflow-hidden rounded-xl mb-4 bg-gray-100">
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      <h4 className="text-lg font-semibold">{project.title}</h4>
      <p className="text-slate-600 mt-2">{project.description}</p>

      <div className="flex flex-wrap gap-2 mt-3">
        {project.tech.map(t => (
          <span
            key={t}
            className="text-xs px-2 py-1 border rounded bg-white/5"
          >
            {t}
          </span>
        ))}
      </div>

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 font-medium mt-3 inline-block"
      >
        Visit →
      </a>
    </motion.article>
  )
}
