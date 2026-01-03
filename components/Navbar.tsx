'use client';

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes"; // <--- Import wajib ini

export default function Navbar() {
  // Ambil fungsi dari next-themes
  const { theme, setTheme } = useTheme();
  
  // State untuk memastikan component sudah dimuat (mencegah error hydration)
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Fungsi toggle yang benar (menggunakan library)
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className="fixed w-full z-50 top-4 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between glass py-2 px-4 rounded-2xl">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full gradient-ring flex items-center justify-center font-bold text-slate-900 dark:text-white">
            L
          </div>
          <div className="text-sm font-semibold text-slate-900 dark:text-white">Lifkie Lie</div>
        </div>

        {/* Nav Link */}
        <nav className="hidden md:flex gap-6 items-center text-sm font-medium text-slate-700 dark:text-slate-200">

          <a href="#about" className="hover:text-blue-500 hover:scale-105 transition-all duration-200">
            About
          </a>

          <a href="#skills" className="hover:text-blue-500 hover:scale-105 transition-all duration-200">
            Skills
          </a>

          <a href="#projects" className="hover:text-blue-500 hover:scale-105 transition-all duration-200">
            Projects
          </a>

          <a href="#contact" className="hover:text-blue-500 hover:scale-105 transition-all duration-200">
            Contact
          </a>

          {/* Theme Toggle — Fixed */}
          <button
            onClick={toggleTheme}
            className="ml-4 px-3 py-1 rounded-full glass border border-white/20 hover:brightness-110 transition-all flex items-center gap-2 text-slate-900 dark:text-white"
          >
            {/* Cek mounted dulu agar icon tidak berubah mendadak */}
            {mounted && theme === "dark" ? (
              <>☀️ Light</> // Kalau sedang Dark, tawarkan Light
            ) : (
              <>🌙 Dark</>  // Kalau sedang Light (atau loading), tawarkan Dark
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}