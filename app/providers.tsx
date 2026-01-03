'use client'

import { ThemeProvider } from 'next-themes'
import React from 'react'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider 
      attribute="class"      // Mengganti class HTML jadi 'dark'
      defaultTheme="dark"    // SETTING DEFAULT: Langsung Dark Mode
      enableSystem={false}   // Abaikan setting laptop user, paksa dark
    >
      {children}
    </ThemeProvider>
  )
}