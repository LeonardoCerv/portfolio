"use client"

import { useEffect, useRef, useState } from 'react'
import Timeline from '../components/Timeline'

export default function Home() {
  const [toast, setToast] = useState({ message: '', type: '' })
  const toastTimer = useRef<number | null>(null)

  const copyEmail = async () => {
    const email = 'leocerva29@gmail.com'
    if (toastTimer.current) {
      window.clearTimeout(toastTimer.current)
    }
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(email)
      } else {
        // fallback copy
        const el = document.createElement('textarea')
        el.value = email
        el.setAttribute('readonly', '')
        el.style.position = 'absolute'
        el.style.left = '-9999px'
        document.body.appendChild(el)
        el.select()
        document.execCommand('copy')
        document.body.removeChild(el)
      }
      setToast({ message: 'Email copied to clipboard!', type: 'success' })
    } catch (err) {
      console.error('Copy failed', err)
      setToast({ message: 'Failed to copy email', type: 'error' })
    }
    toastTimer.current = window.setTimeout(() => setToast({ message: '', type: '' }), 2500)
  }

  useEffect(() => {
    return () => {
      if (toastTimer.current) {
        window.clearTimeout(toastTimer.current)
      }
    }
  }, [])

  return (
    <div className="font-sans max-w-lg mx-auto py-16 px-4">

      <div className="mb-8">
        <h1 className="text-xl font-light leading-loose mb-2.5">Leonardo Cervantes</h1>
        <p className="text-sm font-light mb-2">
          Computer Science @ <span className="font-medium">Tec de Monterrey</span>
          <br />
          Research Engineer @ <span className="font-medium">Neural Harvest</span>
          <br />
          <br />
          18y/o Hackathon addict. I love creating when I can&apos;t find what I need.
        </p>
        
        <ul className="list-none flex gap-4 mt-2">
          <li><a href="/LeonardoCervantes_Resume.pdf" className="text-[#007acc] no-underline text-sm font-light ">Download CV</a></li>
          <li><a href="https://github.com/leonardocerv" className="text-[#007acc] no-underline text-sm font-light">GitHub</a></li>
          <li><a href="https://linkedin.com/in/leonardocerv" className="text-[#007acc] no-underline text-sm font-light">LinkedIn</a></li>
          <li>
            <button
              type="button"
              onClick={copyEmail}
              title="Copy email"
              aria-label="Copy email address to clipboard"
              className="text-[#007acc] text-sm font-light bg-transparent border-none cursor-pointer"
            >
              Email
            </button>
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-light mb-2.5">what I&apos;m working on</h2>
        <div className="leading-relaxed text-sm font-light flex flex-col gap-2">
          <p className="">
            <span className="font-medium">novus. </span>
            Contributing and presenting academic papers. Developing gamified experiences to improve learning.
          </p>
          <p>
            <span className="font-medium">ceams. </span> 
            Running a web design agency. Working on a few client projects, crafting sites that look right and work better.
          </p>
        </div>
      </div>
      
      

      <div className="mb-8">
        <h2 className="text-xl font-light mb-2.5">currently interested in</h2>
        <div className="leading-relaxed text-sm font-light flex flex-col gap-2">
          <p className="">
            <span className="font-medium">growing. </span>
            Trying to post consistently on linkedin, shipping fast but with quality, sharing my projects in communities, etc.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-light mb-2.5">things I&apos;m proud of</h2>
        <div className="leading-relaxed text-sm font-light flex flex-col gap-2">
          <p className="">
            <span className="font-medium"> hackmit 2025. </span>
            Won a crypto challenge. 1 of 5 Mexican students there, and the only one who came back with a prize.
          </p>
        </div>
      </div>

      <Timeline />

      {toast.message && (
        <div
          role="status"
          aria-live="polite"
          className={`fixed bottom-5 right-5 px-4 py-2 rounded-full z-50 transition-transform transition-opacity duration-300 border border-[#007acc] text-[#007acc] bg-white/40 backdrop-blur-sm font-light text-base shadow-sm`}
          style={{ transform: 'translateY(0)', opacity: 1 }}
        >
          {toast.message}
        </div>
      )}
      
    </div>
  )
}