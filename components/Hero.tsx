"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects"; // 🔑 SATU-SATUNYA SUMBER DATA

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) =>
      prev === projects.length - 1 ? 0 : prev + 1
    );
  }, []);

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0,
    }),
  };

  const project = projects[currentIndex];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-transparent transition-colors duration-500">
      
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-10%] top-0 w-[60vw] max-w-[900px] aspect-square rounded-full opacity-30 blur-[120px] bg-gradient-to-br from-pink-300 to-transparent animate-pulse-slow"></div>
        <div className="absolute right-[-10%] bottom-0 w-[60vw] max-w-[900px] aspect-square rounded-full opacity-25 blur-[160px] bg-gradient-to-br from-sky-200 to-transparent animate-pulse-slower"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* LEFT */}
          <div className="md:col-span-7 space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm font-bold tracking-[0.2em] text-pink-500 uppercase"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 dark:text-white leading-[0.9]"
            >
              Lifkie Lie{" "}
              <span className="text-slate-300 dark:text-slate-700">—</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-600 dark:text-slate-400 max-w-lg"
            >
              A STUDENT OF{" "}
              <span className="font-medium text-slate-900 dark:text-white">
                MULTIMEDIA NUSANTARA UNIVERSITY
              </span>
              , 2023 – 2027.
            </motion.p>

            <div className="mt-10 flex gap-4">
              <a
                href="https://github.com/lifkiss"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-4 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold shadow-xl hover:scale-105 active:scale-95 transition"
              >
                GitHub
              </a>

              <a
                href="#contact"
                className="px-7 py-4 rounded-2xl border-2 border-slate-200 dark:border-slate-800 font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 transition"
              >
                Contact me
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="md:col-span-5 flex flex-col items-center gap-8">
            <div className="relative group w-full max-w-[450px]">

              {/* NAV */}
              <button
                onClick={prevSlide}
                className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border shadow-xl opacity-0 group-hover:opacity-100 transition"
              >
                <ChevronLeft />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border shadow-xl opacity-0 group-hover:opacity-100 transition"
              >
                <ChevronRight />
              </button>

              {/* CARD */}
              <div className="relative h-[520px] w-full">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={project.id}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4, ease: "anticipate" }}
                    className="absolute inset-0 p-6 rounded-[2.5rem] bg-white/40 dark:bg-slate-900/40 backdrop-blur-2xl border shadow-2xl flex flex-col"
                  >
                    {/* IMAGE */}
                    <div className="relative h-64 rounded-[1.8rem] overflow-hidden bg-slate-200 dark:bg-slate-800">
                      <div className="absolute top-4 right-4 z-10 px-4 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/90 text-[10px] font-black text-pink-500 uppercase tracking-widest">
                        PROJECT
                      </div>
                      <img
                        src={project.img}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      />
                    </div>

                    {/* TEXT */}
                    <div className="mt-8 px-2 flex flex-col flex-grow">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                        {project.title}
                      </h3>

                      <p className="mt-2 text-slate-500 dark:text-slate-400 text-sm italic line-clamp-2">
                        "{project.description}"
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1 rounded-lg bg-white/50 dark:bg-white/5 border text-[10px] font-bold uppercase"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto w-full py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold shadow-lg hover:brightness-110 transition flex items-center justify-center gap-2"
                      >
                        View Project <ExternalLink size={14} />
                      </a>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* PAGINATION */}
            <div className="flex flex-col items-center gap-4">
              <div className="flex gap-2">
                {projects.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > currentIndex ? 1 : -1);
                      setCurrentIndex(i);
                    }}
                    className={`h-1.5 rounded-full transition-all ${
                      currentIndex === i
                        ? "w-12 bg-pink-500"
                        : "w-2 bg-slate-300 dark:bg-slate-700"
                    }`}
                  />
                ))}
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                Project {currentIndex + 1} | {projects.length}
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.05); }
        }
        @keyframes pulse-slower {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.1); }
        }
        .animate-pulse-slow { animation: pulse-slow 8s infinite ease-in-out; }
        .animate-pulse-slower { animation: pulse-slower 12s infinite ease-in-out; }
      `}</style>
    </section>
  );
}
