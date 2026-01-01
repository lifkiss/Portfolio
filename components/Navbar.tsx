"use client";

import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("");
  const [theme, setTheme] = useState("light");

  // ACTIVE NAV DETECTOR
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "-100px 0px -30% 0px", 
      }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  // THEME LOADER
  useEffect(() => {
    const saved = localStorage.getItem("theme") || "light";
    setTheme(saved);
    document.documentElement.classList.toggle("dark", saved === "dark");
  }, []);

  // TOGGLE THEME
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <header className="fixed w-full z-50 top-4 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between glass py-2 px-4 rounded-2xl">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full gradient-ring flex items-center justify-center font-bold">
            L
          </div>
          <div className="text-sm font-semibold">Lifkie Lie</div>
        </div>

        {/* Nav */}
        <nav className="hidden md:flex gap-6 items-center text-sm">

          <a
            href="#about"
            className={`${active === "about" ? "text-blue-500 font-semibold" : "hover:underline"}`}
          >
            About
          </a>

          <a
            href="#skills"
            className={`${active === "skills" ? "text-blue-500 font-semibold" : "hover:underline"}`}
          >
            Skills
          </a>

          <a
            href="#projects"
            className={`${active === "projects" ? "text-blue-500 font-semibold" : "hover:underline"}`}
          >
            Projects
          </a>

          <a
            href="#contact"
             className={`${active === "contact" ? "text-blue-500 font-semibold" : "hover:underline"}`}
            >
             Contact
          </a>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="ml-4 px-3 py-1 rounded-full glass border border-white/20 hover:brightness-110 transition-all"
          >
            {theme === "light" ? "🌙 Dark" : "☀️ Light"}
          </button>
        </nav>
      </div>
    </header>
  );
}
