import "./globals.css";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Portfolio — Glassmorphism",
  description: "Modern portfolio with glassmorphism & animations",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Jangan pakai background di sini */}
      <body className="antialiased transition-colors duration-500">
        {children}
      </body>
    </html>
  );
}
