"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Ambient background rings */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-10%] top-0 w-[60vw] max-w-[900px] aspect-square rounded-full opacity-30 blur-[120px] bg-gradient-to-br from-pink-300 to-transparent animate-pulse-slow"></div>
        <div className="absolute right-[-10%] bottom-0 w-[60vw] max-w-[900px] aspect-square rounded-full opacity-25 blur-[160px] bg-gradient-to-br from-sky-200 to-transparent animate-pulse-slower"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="flex flex-col-reverse md:flex-row items-start md:items-center gap-10">
          {/* LEFT: text column */}
          <div className="w-full md:w-7/12">
            <p className="text-sm text-slate-500 mb-3">HELLO, I'M</p>

            <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Lifkie Lie <span className="text-slate-600">—</span>
            </h1>

            <div className="mt-6 max-w-xl">
              <p className="text-lg text-slate-600 dark:text-slate-300">
                I craft modern interfaces using glassmorphism, soft gradients and subtle motion — focused on UI, animation, and frontend performance.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#projects" className="inline-flex items-center px-5 py-3 rounded-xl bg-slate-900 text-white hover:brightness-105 shadow-md">
                  See projects
                </a>
                <a href="#contact" className="inline-flex items-center px-5 py-3 rounded-xl bg-slate-900 text-white hover:brightness-105 shadow-md">
                  Contact me
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: preview glass card */}
          <div className="w-full md:w-5/12 flex justify-end">
            <motion.div
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="glass p-6 rounded-2xl min-w-[260px] md:min-w-[340px] shadow-lg border border-white/30"
            >
              
              {/* --- BAGIAN 1: GAMBAR --- */}
              {/* Pastikan gambar ada di folder public */}
              <div className="h-[200px] md:h-[260px] w-full rounded-xl overflow-hidden bg-gray-800">
                 <img 
                    src="/nama-file-gambar-kamu.jpg"  
                    alt="Preview Project Saya"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                 />
              </div>

              <div className="mt-4">
                {/* --- BAGIAN 2: JUDUL --- */}
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    Nama Aplikasi Kamu
                </h3>
                
                {/* --- BAGIAN 3: DESKRIPSI --- */}
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                    Jelaskan fitur utama aplikasimu di sini. Misalnya: Aplikasi kasir berbasis web untuk UMKM.
                </p>

                {/* --- BAGIAN 4: TAGS --- */}
                <div className="mt-3 flex gap-2 flex-wrap">
                  <span className="text-xs px-2 py-1 rounded-full bg-white/10">Laravel</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-white/10">MySQL</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-white/10">Bootstrap</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}