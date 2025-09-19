"use client"

import { useEffect, useState } from "react"
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline"

export function Footer() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const theme = localStorage.getItem('theme')
    if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)
    if (newIsDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <footer className="border-t border-dashed-indie bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="font-semibold">Leonardo Cervantes</p>
            <p className="text-sm text-muted-foreground italic">
              Full Stack Developer & Tech Explorer
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <button
              onClick={toggleTheme}
              className="hover:text-primary transition-colors p-2 rounded-lg hover:bg-muted"
              aria-label="Toggle theme"
            >
              {isDark ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
            </button>
            <a
              href="https://github.com/LeonardoCerv"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors flex items-center gap-1"
            >
              <span>GitHub</span>
              <span className="text-xs">↗</span>
            </a>
            <a
              href="https://linkedin.com/in/leonardo-cervantes"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors flex items-center gap-1"
            >
              <span>LinkedIn</span>
              <span className="text-xs">↗</span>
            </a>
            <a
              href="mailto:leonardo@example.com"
              className="hover:text-primary transition-colors flex items-center gap-1"
            >
              <span>Email</span>
            </a>
          </div>
        </div>

        <div className="border-t border-dashed-indie mt-8 pt-4 text-center text-sm text-muted-foreground">
          <p className="italic">
            Built with Next.js 15, Tailwind CSS, and Framer Motion • Made with care in 2025
          </p>
        </div>
      </div>
    </footer>
  )
}