"use client"

import { ArrowDownIcon } from "@heroicons/react/24/outline"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const skills = [
    "TypeScript", "React", "Next.js", "Rust", "Python",
    "AI Integration", "FastAPI", "PostgreSQL", "Web Scraping", "P2P Systems"
  ]

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative">
      <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
        <div className="space-y-6">
          <div className="inline-block">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-2">
              Leonardo Cervantes
            </h1>
            <div className="w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent rounded-full" />
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-2xl mx-auto italic">
            Full Stack Developer & Tech Explorer
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="border-dashed-indie p-6 bg-muted/20 rounded-lg">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I build things that solve real problems. From AI-powered water quality testing
              to peer-to-peer video chat systems, I love exploring new technologies and
              creating practical solutions.
            </p>
            <div className="mt-4 text-sm text-muted-foreground italic">
              — Currently building in TypeScript, Rust, and Python
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div key={skill}>
              <Badge variant="secondary" className="text-sm py-2 px-4 font-medium border-dashed-indie">
                {skill}
              </Badge>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button size="lg" className="px-8 py-3 text-base font-semibold border-dashed-indie">
            View My Work ↓
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-3 text-base border-dashed-indie">
            Download Resume
          </Button>
        </div>

        <div className="pt-16">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-dashed-indie hover:bg-muted/50 transition-colors cursor-pointer">
            <ArrowDownIcon className="w-5 h-5 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  )
}