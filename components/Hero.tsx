"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

// --- DATA PROJECT ---
const projects = [
  {
    id: 1,
    title: "Catalog Dua Naga Perkasa",
    desc: "Catalog website of PT Dua Naga Perkasa",
    image: "/images/nagaper.jpg",
    tags: ["Next.js", "React", "TailwindCSS"],
    category: "Web Development",
    link: "https://github.com/lifkiss/PT-DuaNagaPerkasa.git"
  },
  {
    id: 2,
    title: "Galley La Hall",
    desc: "3D Game using UNITY",
    image: "/images/galleylahall.jpg",
    tags: ["FastAPI", "Python", "React"],
    category: "Game Dev",
    link: "https://vinnyvv.itch.io/galley-la-halls"
  },
  {
    id: 3,
    title: "Kalimantan Barat",
    desc: "About West Borneo",
    image: "/images/indahnya.jpg",
    tags: ["shadcn/ui", "React", "TypeScript"],
    category: "Web Development",
    link: "https://indahnyakalimantanbarat.vercel.app/"
  },
  {
    id: 4,
    title: "Crimson Down the Creek",
    desc: "Visual Novel Game",
    image: "/images/CrimsonD.png",
    tags: ["Renpy", "Python"],
    category: "Game Dev",
    link: "https://vnjcafeumn.itch.io/crimson-down-the-creek"
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  // --- PERBAIKAN DISINI (Menambahkan : number) ---
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0
    })
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-500">
      
      {/* Background Ambient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-10%] top-0 w-[60vw] max-w-[900px] aspect-square rounded-full opacity-30 blur-[120px] bg-gradient-to-br from-pink-300 to-transparent animate-pulse-slow"></div>
        <div className="absolute right-[-10%] bottom-0 w-[60vw] max-w-[900px] aspect-square rounded-full opacity-25 blur-[160px] bg-gradient-to-br from-sky-200 to-transparent animate-pulse-slower"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN */}
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
              Lifkie Lie <span className="text-slate-300 dark:text-slate-700">—</span>
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-lg"
            >
              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                A STUDENT OF <span className="text-slate-900 dark:text-white font-medium">MULTIMEDIA NUSANTARA UNIVERSITY</span>, 2023 - 2027.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                {/* UPDATE TOMBOL KIRI (SESUAI REQUEST SEBELUMNYA):
                   Sekarang tombol ini juga membuka link project di tab baru.
                */}
                <a 
                  href={projects[currentIndex].link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-7 py-4 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl"
                >
                  <span className="relative z-10">Visit Site</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                
                <a href="#contact" className="px-7 py-4 rounded-2xl border-2 border-slate-200 dark:border-slate-800 font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 transition-all">
                  Contact me
                </a>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Slider */}
          <div className="md:col-span-5 flex flex-col items-center justify-center gap-8">
            <div className="relative group w-full max-w-[450px]">
              
              {/* Nav Buttons */}
              <button 
                onClick={prevSlide}
                className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-white/50 dark:border-white/10 shadow-2xl opacity-0 group-hover:opacity-100 transition-all hover:scale-110 active:scale-90 text-slate-800 dark:text-white"
              >
                <ChevronLeft size={20} />
              </button>

              <button 
                onClick={nextSlide}
                className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-white/50 dark:border-white/10 shadow-2xl opacity-0 group-hover:opacity-100 transition-all hover:scale-110 active:scale-90 text-slate-800 dark:text-white"
              >
                <ChevronRight size={20} />
              </button>

              {/* Card Content */}
              <div className="relative h-[520px] w-full">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4, ease: "anticipate" }}
                    className="absolute inset-0 glass-morphism p-6 rounded-[2.5rem] bg-white/40 dark:bg-slate-900/40 backdrop-blur-2xl border border-white/40 dark:border-white/10 shadow-[0_32px_64px_-15px_rgba(0,0,0,0.1)] flex flex-col"
                  >
                    {/* Image Area */}
                    <div className="relative h-64 w-full rounded-[1.8rem] overflow-hidden shadow-inner bg-slate-200 dark:bg-slate-800">
                      <div className="absolute top-4 right-4 z-10 px-4 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-[10px] font-black text-pink-600 dark:text-pink-400 uppercase tracking-widest border border-white/20">
                        {projects[currentIndex].category}
                      </div>
                      <img 
                        src={projects[currentIndex].image}
                        alt={projects[currentIndex].title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      />
                    </div>

                    {/* Text Area */}
                    <div className="mt-8 px-2 flex-grow flex flex-col">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                        {projects[currentIndex].title}
                      </h3>
                      <p className="mt-2 text-slate-500 dark:text-slate-400 text-sm leading-relaxed line-clamp-2 italic">
                        "{projects[currentIndex].desc}"
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {projects[currentIndex].tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 rounded-lg bg-white/50 dark:bg-white/5 border border-white/40 dark:border-white/10 text-[10px] font-bold text-slate-600 dark:text-slate-400 uppercase">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* BUTTON KANAN: View Case Study */}
                      <a 
                        href={projects[currentIndex].link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="mt-auto w-full py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold text-sm shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 hover:brightness-110 transition-all flex items-center justify-center gap-2"
                      >
                        View Case Study <ExternalLink size={14} />
                      </a>
                      
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Pagination UI */}
            <div className="flex flex-col items-center gap-4">
              <div className="flex gap-2">
                {projects.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > currentIndex ? 1 : -1);
                      setCurrentIndex(i);
                    }}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      currentIndex === i 
                      ? "w-12 bg-pink-500 shadow-[0_0_12px_rgba(236,72,153,0.5)]" 
                      : "w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400"
                    }`}
                  />
                ))}
              </div>
              <p className="text-[10px] font-black text-slate-400 dark:text-slate-600 uppercase tracking-[0.3em]">
                Project {currentIndex + 1} <span className="text-slate-200 dark:text-slate-800 mx-2">|</span> {projects.length}
              </p>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .glass-morphism {
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.07);
        }
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