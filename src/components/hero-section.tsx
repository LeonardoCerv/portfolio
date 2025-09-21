"use client"

import { ArrowDownIcon } from "@heroicons/react/24/outline"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiJavascript,
  SiFastapi,
  SiDjango,
  SiNodedotjs,
  SiPostgresql,
  SiSupabase,
  SiPython,
  SiRust,
  SiGo,
  SiDart,
  SiFlutter,
  SiDocker,
  SiGit,
  SiNpm,
  SiVercel,
  SiOpenai
} from "react-icons/si"
import { 
  FaMobile,
  FaBrain,
  FaRobot,
  FaLink,
  FaSpider,
  FaPalette
} from "react-icons/fa"
import { 
  MdWeb,
  MdSettings,
  MdCode,
  MdSmartphone,
  MdBuild
} from "react-icons/md"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative">
      <div className="max-w-7xl mx-auto text-center space-y-20 relative z-10">
        {/* Hero Header */}
        <div className="space-y-12">
          <div className="space-y-6">
            <div className="inline-block">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-2">
                Leonardo Cervantes
              </h1>
              <div className="w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent rounded-full" />
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-2xl mx-auto italic">
              CS Student @ Tec de Monterrey
            </p>
          </div>

          <div className="max-w-xl mx-auto">
            <div className="border-dashed-indie p-6 bg-muted/20 rounded-lg">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                I enjoy building to solve my own problems and then turn them into tools that others can use.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed px-4">
                Most of the time I’m working on web apps and watching yt tutorials lol.
              </p>
            </div>
          </div>


        {/* Tech Stack */}
        <div className="space-y-8">
          
          {/* Categorized Tech Stack */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Frontend Development */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-center flex items-center justify-center gap-2">
                <MdWeb className="text-xl" /> Frontend Development
              </h4>
              <div className="flex flex-wrap justify-center gap-3">
                <div className="group relative">
                  <Badge className="bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-100 border-dashed-indie p-3 hover:scale-110 transition-transform cursor-pointer">
                    <SiReact className="text-xl" />
                  </Badge>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    React
                  </div>
                </div>
                <div className="group relative">
                  <Badge className="bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100 border-dashed-indie p-3 hover:scale-110 transition-transform cursor-pointer">
                    <SiNextdotjs className="text-xl" />
                  </Badge>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Next.js
                  </div>
                </div>
                <div className="group relative">
                  <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 border-dashed-indie p-3 hover:scale-110 transition-transform cursor-pointer">
                    <SiTypescript className="text-xl" />
                  </Badge>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    TypeScript
                  </div>
                </div>
                <div className="group relative">
                  <Badge className="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100 border-dashed-indie p-3 hover:scale-110 transition-transform cursor-pointer">
                    <SiTailwindcss className="text-xl" />
                  </Badge>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Tailwind CSS
                  </div>
                </div>
                <div className="group relative">
                  <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100 border-dashed-indie p-3 hover:scale-110 transition-transform cursor-pointer">
                    <SiJavascript className="text-xl" />
                  </Badge>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    JavaScript
                  </div>
                </div>
              </div>
            </div>

            {/* Backend Development */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-center flex items-center justify-center gap-2">
                <MdSettings className="text-xl" /> Backend Development
              </h4>
              <div className="flex flex-wrap justify-center gap-3">
                <div className="group relative">
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 border-dashed-indie p-3 hover:scale-110 transition-transform cursor-pointer">
                    <SiFastapi className="text-xl" />
                  </Badge>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    FastAPI
                  </div>
                </div>
                <div className="group relative">
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 border-dashed-indie p-3 hover:scale-110 transition-transform cursor-pointer">
                    <SiDjango className="text-xl" />
                  </Badge>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Django
                  </div>
                </div>
                <div className="group relative">
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 border-dashed-indie p-3 hover:scale-110 transition-transform cursor-pointer">
                    <SiNodedotjs className="text-xl" />
                  </Badge>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Node.js
                  </div>
                </div>
                <div className="group relative">
                  <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 border-dashed-indie p-3 hover:scale-110 transition-transform cursor-pointer">
                    <SiPostgresql className="text-xl" />
                  </Badge>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    PostgreSQL
                  </div>
                </div>
                <div className="group relative">
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 border-dashed-indie p-3 hover:scale-110 transition-transform cursor-pointer">
                    <SiSupabase className="text-xl" />
                  </Badge>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Supabase
                  </div>
                </div>
              </div>
            </div>

            {/* Programming Languages */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-center flex items-center justify-center gap-2">
                <MdCode className="text-xl" /> Programming Languages
              </h4>
              <div className="flex flex-wrap justify-center gap-3">
                <div className="group relative">
                  <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100 border-dashed-indie p-3 hover:scale-110 transition-transform cursor-pointer">
                    <SiPython className="text-xl" />
                  </Badge>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Python
                  </div>
                </div>
                <div className="group relative">
                  <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100 border-dashed-indie p-3 hover:scale-110 transition-transform cursor-pointer">
                    <SiRust className="text-xl" />
                  </Badge>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Rust
                  </div>
                </div>
                <div className="group relative">
                  <Badge className="bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-100 border-dashed-indie p-3 hover:scale-110 transition-transform cursor-pointer">
                    <SiGo className="text-xl" />
                  </Badge>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Go
                  </div>
                </div>
                <div className="group relative">
                  <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 border-dashed-indie p-3 hover:scale-110 transition-transform cursor-pointer">
                    <SiDart className="text-xl" />
                  </Badge>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Dart
                  </div>
                </div>
              </div>
            </div>

            {/* AI & Machine Learning */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-center flex items-center justify-center gap-2">
                <FaRobot className="text-xl" /> AI & Machine Learning
              </h4>
              <div className="flex flex-wrap justify-center gap-3">
                <div className="group relative">
                  <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100 border-dashed-indie p-3 hover:scale-110 transition-transform cursor-pointer">
                    <FaBrain className="text-xl" />
                  </Badge>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Cerebras AI
                  </div>
                </div>
                <div className="group relative">
                  <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100 border-dashed-indie p-3 hover:scale-110 transition-transform cursor-pointer">
                    <SiOpenai className="text-xl" />
                  </Badge>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Claude AI
                  </div>
                </div>
                <div className="group relative">
                  <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100 border-dashed-indie p-3 hover:scale-110 transition-transform cursor-pointer">
                    <FaLink className="text-xl" />
                  </Badge>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Model Context Protocol
                  </div>
                </div>
                <div className="group relative">
                  <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100 border-dashed-indie p-3 hover:scale-110 transition-transform cursor-pointer">
                    <FaSpider className="text-xl" />
                  </Badge>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Web Scraping
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Development */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-center flex items-center justify-center gap-2">
                <MdSmartphone className="text-xl" /> Mobile Development
              </h4>
              <div className="flex flex-wrap justify-center gap-3">
                <div className="group relative">
                  <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 border-dashed-indie p-3 hover:scale-110 transition-transform cursor-pointer">
                    <SiFlutter className="text-xl" />
                  </Badge>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Flutter
                  </div>
                </div>
                <div className="group relative">
                  <Badge className="bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-100 border-dashed-indie p-3 hover:scale-110 transition-transform cursor-pointer">
                    <FaMobile className="text-xl" />
                  </Badge>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    React Native
                  </div>
                </div>
                <div className="group relative">
                  <Badge className="bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100 border-dashed-indie p-3 hover:scale-110 transition-transform cursor-pointer">
                    <FaPalette className="text-xl" />
                  </Badge>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Mobile-First Design
                  </div>
                </div>
              </div>
            </div>

            {/* Tools & DevOps */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-center flex items-center justify-center gap-2">
                <MdBuild className="text-xl" /> Tools & DevOps
              </h4>
              <div className="flex flex-wrap justify-center gap-3">
                <div className="group relative">
                  <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 border-dashed-indie p-3 hover:scale-110 transition-transform cursor-pointer">
                    <SiDocker className="text-xl" />
                  </Badge>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Docker
                  </div>
                </div>
                <div className="group relative">
                  <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100 border-dashed-indie p-3 hover:scale-110 transition-transform cursor-pointer">
                    <SiGit className="text-xl" />
                  </Badge>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Git
                  </div>
                </div>
                <div className="group relative">
                  <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100 border-dashed-indie p-3 hover:scale-110 transition-transform cursor-pointer">
                    <SiNpm className="text-xl" />
                  </Badge>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    NPM
                  </div>
                </div>
                <div className="group relative">
                  <Badge className="bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100 border-dashed-indie p-3 hover:scale-110 transition-transform cursor-pointer">
                    <SiVercel className="text-xl" />
                  </Badge>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Vercel
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="px-8 py-3 text-base font-semibold border-dashed-indie">
              View My Work ↓
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-3 text-base border-dashed-indie"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/LeonardoCervantes_Resume.pdf';
                link.download = 'LeonardoCervantes_Resume.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}