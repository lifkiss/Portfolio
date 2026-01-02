import "./globals.css";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "I'M — Lifkie",
  description: "PORTFOLIO",
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
