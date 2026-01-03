/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Ini kuncinya
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          light: "#f5f4fa",
          dark: "#0f0f11",
        },
      },
    },
  },
  plugins: [],
};