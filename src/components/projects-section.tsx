"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MediaShowcase, type MediaItem } from "@/components/ui/media-showcase"
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from "@heroicons/react/24/outline"

type ProjectCategory = "Blockchain & Crypto" | "AI & Machine Learning" | "Web Development" | "Infrastructure & DevOps" | "Developer Tools / Productivity Tools" | "Mobile Development" | "Simulation / Game Development / AI" | "Game Development" | "Networking / Communication / Systems Programming" | "Language Design" | "Embedded Systems" | "Hardware"

interface Project {
  title: string
  description: string
  longDescription: string
  technologies: string[]
  github?: string
  demo?: string
  status: "production" | "development" | "completed"
  categories: ProjectCategory[]
  featured?: boolean
  media?: MediaItem[]
}

export function ProjectsSection() {
  const projects: Project[] = [
    {
      title: "Water Judge - EigenLabs Challenge",
      description: "AI-powered water quality analysis with blockchain verification for HackMIT 2025.",
      longDescription: "Built during HackMIT 2025, this project uses Cerebras AI to analyze water quality data and leverages EigenLabs for blockchain verification. It provides health scores, usage recommendations, and cleaning instructions with cryptographic proof of authenticity.",
      technologies: ["Python", "FastAPI", "Cerebras AI", "EigenLabs", "Ethereum", "Docker"],
      github: "https://github.com/LeonardoCerv/water-judge",
      status: "completed",
      categories: ["AI & Machine Learning", "Blockchain & Crypto"],
      featured: true,
      // media: [
      //   {
      //     type: "image" as const,
      //     src: "/api/placeholder/400/300",
      //     title: "Water Analysis Dashboard",
      //     description: "AI-powered water quality analysis interface",
      //     thumbnail: "/api/placeholder/400/300"
      //   },
      //   {
      //     type: "video" as const,
      //     src: "/api/placeholder/video/water-demo.mp4",
      //     title: "Water Judge Demo",
      //     description: "Complete workflow demonstration of water quality analysis",
      //     thumbnail: "/api/placeholder/400/300"
      //   },
      //   {
      //     type: "demo" as const,
      //     src: "https://github.com/LeonardoCerv/water-judge/tree/main/src",
      //     title: "Live Demo",
      //     description: "Interactive demo of the water quality analysis system",
      //     external: true
      //   }
      // ]
    },
    {
      title: "Scratch Space",
      description: "VSCode extension for creating and managing isolated scratch spaces for development experimentation.",
      longDescription: "A powerful VSCode extension that provides developers with dedicated scratch spaces for prototyping, testing ideas, and temporary code snippets. Features include isolated environments, version control integration, and seamless switching between different scratch projects.",
      technologies: ["TypeScript", "VSCode API", "Node.js", "Extension Development"],
      github: "https://github.com/LeonardoCerv/scratch-space",
      status: "production",
      categories: ["Developer Tools / Productivity Tools"],
      featured: true,
    },
    {
      title: "EZ Badges",
      description: "Enhanced badge generation service with extensive icon library and custom image path support.",
      longDescription: "A modern take on Shields.io that offers a more extensive icon library and allows users to use their own image paths for fully custom badges. Perfect for developers wanting professional-looking badges with complete customization, supporting dynamic content and custom styling options.",
      technologies: ["Node.js", "Express", "SVG", "Icon Libraries", "API Development"],
      github: "https://github.com/LeonardoCerv/ez-badges",
      status: "production",
      categories: ["Developer Tools / Productivity Tools"],
      featured: true,
    },
    {
      title: "Fire Rescue Simulation",
      description: "Agent-based simulation of fire rescue scenarios using Mesa and Unity with API integration.",
      longDescription: "This project implements an agent-based simulation inspired by the board game 'Flash Point: Fire Rescue'. It models firefighters navigating through buildings to rescue victims while managing fire spread and structural damage. Includes AI agent models using Mesa, full game development in Unity, and HTTP/JSON API connections for real-time simulation control and data exchange.",
      technologies: ["Python", "Mesa", "Unity", "HTTP", "JSON", "JSON.NET", "Agent Based Modeling", "Game Development"],
      github: "https://github.com/LeonardoCerv/fire-rescue-simulation",
      status: "completed",
      categories: ["AI & Machine Learning", "Game Development"],
      featured: true,
    },
    {
      title: "P2P CLI Video Chat",
      description: "Rust-based peer-to-peer video chat application with command-line interface.",
      longDescription: "A high-performance P2P video chat system built in Rust, featuring direct peer-to-peer connections without centralized servers. Demonstrates advanced networking, real-time communication, and low-level systems programming.",
      technologies: ["Rust", "WebRTC", "P2P Networking", "CLI", "Async Programming"],
      github: "https://github.com/LeonardoCerv/p2p-cli",
      status: "completed",
      categories: ["Networking / Communication / Systems Programming"],
    },
    {
      title: "Web Browsing MCP Server",
      description: "MCP server that allows AI assistants to browse the web and extract information from websites.",
      longDescription: "An open-source MCP server that enables AI models to safely browse and extract web content, including specific elements and metadata. Published on NPM and designed for integration with AI assistants and automation tools.",
      technologies: ["TypeScript", "Node.js", "Model Context Protocol", "Web Scraping", "Cheerio"],
      github: "https://github.com/LeonardoCerv/web-browsing-MCP",
      demo: "https://www.npmjs.com/package/@leonardocerv/web-browsing-mcp",
      status: "production",
      categories: ["AI & Machine Learning", "Developer Tools / Productivity Tools"],
    },
    {
      title: "Prompt Wisp",
      description: "A modern full-stack application for organizing, managing, and sharing AI prompts.",
      longDescription: "A sophisticated web application featuring Google OAuth integration, real-time database updates, and a beautiful component library. Built with the latest Next.js 15 and React 19 features, it helps users organize prompts with collections, tags, and sharing capabilities.",
      technologies: ["Next.js 15", "React 19", "Supabase", "TypeScript", "Radix UI", "Tailwind CSS"],
      github: "https://github.com/LeonardoCerv/prompt-wisp",
      status: "development",
      categories: ["Developer Tools / Productivity Tools"]
    },
    {
      title: "Prompt Wisp Web Extension",
      description: "Chrome extension to easily save and use AI prompts on LLMs like ChatGPT, Claude, Gemini, and more. It's part of my Prompt Wisp project so you need a Prompt Wisp account to use it.",
      longDescription: "A Chrome extension that allows users to easily save and reuse AI prompts across various LLM platforms like ChatGPT, Claude, Gemini, and more. Part of the Prompt Wisp ecosystem, requires a Prompt Wisp account for full functionality.",
      technologies: ["JavaScript", "Chrome Extensions", "AI Integration", "Prompt Management"],
      github: "https://github.com/LeonardoCerv/prompt-wisp-web-extension",
      status: "completed",
      categories: ["Developer Tools / Productivity Tools"]
    },
    {
      title: "HackMIT 2025 - Clearly",
      description: "Award-winning water quality analysis app combining Django and React.",
      longDescription: "The winning project from HackMIT 2025 that provides an intuitive interface for water quality testing. Features AI-powered analysis, mobile-responsive design, and comprehensive water safety reporting.",
      technologies: ["Django", "React", "Claude AI", "PostgreSQL", "Python", "Mobile-First"],
      github: "https://github.com/LeonardoCerv/clearly-hackmit2025",
      status: "completed",
      categories: ["AI & Machine Learning", "Mobile Development"],
    },
    {
      title: "Legal Documents API",
      description: "Rails API for creating, managing, and serving tailored legal documents.",
      longDescription: "A robust API system for handling legal documents, featuring document generation, validation, and secure storage. Supports Terms of Service, Privacy Policy, Cookie Policy, Disclaimer, and Acceptable Use Policy with comprehensive testing.",
      technologies: ["Rails", "Ruby", "PostgreSQL", "Document Processing", "API Design"],
      github: "https://github.com/LeonardoCerv/legal-docs-api",
      status: "production",
      categories: ["Infrastructure & DevOps"]
    },
    {
      title: "Bullet Hell Shooter",
      description: "A basic game dev project where I made a bullet hell about a penguin using Unity.",
      longDescription: "A basic game development project where I created a bullet hell shooter game about a penguin using the Unity game engine. Features classic bullet hell mechanics with fast-paced action and challenging gameplay.",
      technologies: ["Unity", "C#", "Game Development"],
      github: "https://github.com/LeonardoCerv/bullet-hell-shooter",
      status: "completed",
      categories: ["Game Development"]
    },
    {
      title: "Flowing Vision",
      description: "AI water leak detection app combining YOLOv5 computer vision, Intel OpenVINO optimization, and a Flask web interface.",
      longDescription: "An AI water leak detection application that combines YOLOv5 computer vision models, Intel OpenVINO optimization for efficient inference, and a Flask web interface. Designed to detect water leaks in real-time using advanced computer vision techniques.",
      technologies: ["Python", "YOLOv5", "Intel OpenVINO", "Flask", "Computer Vision"],
      github: "https://github.com/LeonardoCerv/flowing-vision",
      status: "completed",
      categories: ["AI & Machine Learning"]
    },
    {
      title: "Timezone Bot",
      description: "Discord/Slack/Telegram bot that helps you convert the timezone inside a sent or given message to your timezone.",
      longDescription: "A versatile bot available on Discord, Slack, and Telegram that automatically detects and converts timezones mentioned in messages to the user's local timezone. Helps distributed teams coordinate across different time zones seamlessly.",
      technologies: ["Node.js", "Discord API", "Slack API", "Telegram API", "Timezone Conversion"],
      github: "https://github.com/LeonardoCerv/timezone-bot",
      status: "completed",
      categories: ["Developer Tools / Productivity Tools"]
    },
    {
      title: "Unsent Canvas",
      description: "Unsent Canvas is an anonymous, real-time collaborative note canvas. Users can place short notes anywhere on an infinite shared space. The project is inspired by The Unsent Project, but reimagined as a spatial, interactive canvas for open expression.",
      longDescription: "An anonymous, real-time collaborative note canvas inspired by The Unsent Project. Users can place short notes anywhere on an infinite shared space, creating a spatial and interactive platform for open expression and anonymous communication.",
      technologies: ["JavaScript", "WebSockets", "Real-time Collaboration", "Canvas API"],
      github: "https://github.com/LeonardoCerv/unsent-canvas",
      status: "completed",
      categories: ["Web Development"]
    },
    {
      title: "Groot Esolang",
      description: "A programming language where everything is 'I am Groot'.",
      longDescription: "A unique esoteric programming language where all code and operations are expressed through variations of 'I am Groot'. Explores the boundaries of programming language design and syntax interpretation.",
      technologies: ["Programming Languages", "Esoteric Languages", "Interpreter Design"],
      github: "https://github.com/LeonardoCerv/groot-esolang",
      status: "completed",
      categories: ["Language Design"]
    },
    {
      title: "IoT Solar Tracker",
      description: "An IoT project that optimizes and adjusts a solar panel's positioning for maximum energy efficiency. This is both a hardware project and a software one, it integrates IoT to see metrics in a dashboard.",
      longDescription: "An IoT project that automatically adjusts solar panel positioning for optimal energy efficiency. Combines hardware sensors with software controls and provides real-time metrics through a dashboard interface for monitoring solar energy production.",
      technologies: ["IoT", "Arduino/Raspberry Pi", "Sensors", "Dashboard", "Solar Energy"],
      github: "https://github.com/LeonardoCerv/IoT-solar-tracker",
      status: "completed",
      categories: ["Hardware", "Web Development"]
    },
    {
      title: "ECU Data Processing",
      description: "A sensor data processing system implemented in MARIE assembly that simulates automotive ECU operations.",
      longDescription: "A sensor data processing system implemented in MARIE assembly that simulates automotive ECU (Engine Control Unit) operations. Demonstrates low-level programming and embedded systems concepts through assembly language implementation.",
      technologies: ["MARIE Assembly", "Embedded Systems", "Automotive", "Low-level Programming"],
      github: "https://github.com/LeonardoCerv/ECU-data-processing",
      status: "completed",
      categories: ["Embedded Systems"]
    },
    {
      title: "Expense Prediction Model",
      description: "Data science project that predicts personal costs using machine learning.",
      longDescription: "A data science project that uses machine learning algorithms to predict personal expenses based on historical data. Helps users understand and forecast their spending patterns through predictive analytics.",
      technologies: ["Python", "Machine Learning", "Data Science", "Predictive Analytics"],
      github: "https://github.com/LeonardoCerv/expense-prediction-model",
      status: "completed",
      categories: ["AI & Machine Learning"]
    },
    {
      title: "Genomic Analysis",
      description: "Bioinformatics data analysis of SARS-CoV-2 genomic sequences across 20 countries.",
      longDescription: "A comprehensive bioinformatics project analyzing SARS-CoV-2 genomic sequences from 20 different countries. Uses computational methods to study viral evolution, mutations, and geographic distribution patterns.",
      technologies: ["Python", "Bioinformatics", "Genomics", "Data Analysis", "SARS-CoV-2"],
      github: "https://github.com/LeonardoCerv/genomic-analysis",
      status: "completed",
      categories: ["AI & Machine Learning"]
    },
  ]

  const categoryColors: Record<ProjectCategory, string> = {
    "Blockchain & Crypto": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100",
    "AI & Machine Learning": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100",
    "Web Development": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100",
    "Infrastructure & DevOps": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100",
    "Developer Tools / Productivity Tools": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100",
    "Mobile Development": "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-100",
    "Simulation / Game Development / AI": "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-100",
    "Game Development": "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100",
    "Networking / Communication / Systems Programming": "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-100",
    "Language Design": "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100",
    "Embedded Systems": "bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-100",
    "Hardware": "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100"
  }

  const statusColors = {
    production: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100",
    development: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100",
    completed: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
  }

  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured Projects</h2>
            <div className="w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent rounded-full" />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My best projects.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {featuredProjects.map((project) => (
            <div key={project.title} className="group">
              <Card className="h-full border-2 border-dashed-indie relative">

                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex gap-1">
                      {project.categories.map((cat) => (
                        <Badge key={cat} className={`${categoryColors[cat]} font-medium text-xs border-dashed-indie`}>
                          {cat}
                        </Badge>
                      ))}
                    </div>
                    <Badge variant="outline" className={`${statusColors[project.status]} border-2 text-xs border-dashed-indie`}>
                      {project.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl leading-tight mb-2">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed italic">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.longDescription}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs py-1 px-2 border-dashed-indie">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="secondary" className="text-xs py-1 px-2 border-dashed-indie">
                        +{project.technologies.length - 4} more
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-3 pt-2">
                    {project.github && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(project.github, '_blank', 'noopener,noreferrer')}
                        className="border-dashed-indie flex items-center gap-2"
                      >
                        <CodeBracketIcon className="w-4 h-4" />
                        Code
                      </Button>
                    )}
                    {project.demo && (
                      <Button
                        size="sm"
                        onClick={() => window.open(project.demo, '_blank', 'noopener,noreferrer')}
                        className="border-dashed-indie flex items-center gap-2"
                      >
                        <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                        Demo
                      </Button>
                    )}
                  </div>

                  {/* Media Showcase for Featured Projects */}
                  {/* Uncomment when you have actual images/videos */}
                  {/* {project.media && project.media.length > 0 && (
                    <div className="pt-4 border-t border-dashed mt-4">
                      <MediaShowcase 
                        items={project.media}
                        title="Project Media"
                      />
                    </div>
                  )} */}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="text-center mb-12">
          <div className="inline-block">
            <h3 className="text-2xl font-bold mb-4">More Projects</h3>
            <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent rounded-full" />
          </div>
          <p className="text-muted-foreground italic">Other experiments and explorations I&apos;ve worked on</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {otherProjects.map((project) => (
            <div key={project.title} className="group">
              <Card className="border border-dashed-indie">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex gap-1">
                      {project.categories.map((cat) => (
                        <Badge key={cat} className={`${categoryColors[cat]} border-dashed-indie`}>
                          {cat}
                        </Badge>
                      ))}
                    </div>
                    <Badge variant="outline" className={`${statusColors[project.status]} border-dashed-indie`}>
                      {project.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg mb-2">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="leading-relaxed italic">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs py-1 px-2 border-dashed-indie">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project.github && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(project.github, '_blank', 'noopener,noreferrer')}
                        className="border-dashed-indie flex items-center gap-2"
                      >
                        <CodeBracketIcon className="w-4 h-4" />
                        Code
                      </Button>
                    )}
                    {project.demo && (
                      <Button
                        size="sm"
                        onClick={() => window.open(project.demo, '_blank', 'noopener,noreferrer')}
                        className="border-dashed-indie flex items-center gap-2"
                      >
                        <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                        Demo
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}