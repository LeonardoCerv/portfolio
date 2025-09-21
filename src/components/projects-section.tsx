"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MediaShowcase, type MediaItem } from "@/components/ui/media-showcase"
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from "@heroicons/react/24/outline"

interface Project {
  title: string
  description: string
  longDescription: string
  technologies: string[]
  github?: string
  demo?: string
  status: "production" | "development" | "completed"
  category: "blockchain" | "ai" | "web" | "infrastructure" | "mobile"
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
      demo: "https://github.com/LeonardoCerv/water-judge/tree/main/src", // External API mentioned in README
      status: "completed",
      category: "ai",
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
      title: "P2P CLI Video Chat",
      description: "Rust-based peer-to-peer video chat application with command-line interface.",
      longDescription: "A high-performance P2P video chat system built in Rust, featuring direct peer-to-peer connections without centralized servers. Demonstrates advanced networking, real-time communication, and low-level systems programming.",
      technologies: ["Rust", "WebRTC", "P2P Networking", "CLI", "Async Programming"],
      github: "https://github.com/LeonardoCerv/p2p-cli",
      status: "completed",
      category: "infrastructure",
      featured: true,
      // media: [
      //   {
      //     type: "video" as const,
      //     src: "/api/placeholder/video/p2p-demo.mp4",
      //     title: "P2P Chat Demo",
      //     description: "Demonstration of peer-to-peer video chat functionality",
      //     thumbnail: "/api/placeholder/400/300"
      //   },
      //   {
      //     type: "image" as const,
      //     src: "/api/placeholder/400/300",
      //     title: "CLI Interface",
      //     description: "Command-line interface for the P2P video chat",
      //     thumbnail: "/api/placeholder/400/300"
      //   },
      //   {
      //     type: "demo" as const,
      //     src: "https://github.com/LeonardoCerv/p2p-cli",
      //     title: "GitHub Repository",
      //     description: "Complete source code and documentation",
      //     external: true
      //   }
      // ]
    },
    {
      title: "Web Browsing MCP Server",
      description: "Published NPM package providing Model Context Protocol for web browsing.",
      longDescription: "An open-source MCP server that enables AI models to safely browse and extract web content. Published on NPM and designed for integration with AI assistants and automation tools.",
      technologies: ["TypeScript", "Node.js", "Model Context Protocol", "Web Scraping", "Cheerio"],
      github: "https://github.com/LeonardoCerv/web-browsing-MCP",
      demo: "https://www.npmjs.com/package/@leonardocerv/web-browsing-mcp",
      status: "production",
      category: "ai",
      featured: true,
      // media: [
      //   {
      //     type: "image" as const,
      //     src: "/api/placeholder/400/300",
      //     title: "MCP Server Architecture",
      //     description: "Technical overview of the Model Context Protocol implementation",
      //     thumbnail: "/api/placeholder/400/300"
      //   },
      //   {
      //     type: "image" as const,
      //     src: "/api/placeholder/400/300",
      //     title: "API Documentation",
      //     description: "Comprehensive API documentation and usage examples",
      //     thumbnail: "/api/placeholder/400/300"
      //   },
      //   {
      //     type: "demo" as const,
      //     src: "https://www.npmjs.com/package/@leonardocerv/web-browsing-mcp",
      //     title: "NPM Package",
      //     description: "Published package on NPM registry",
      //     external: true
      //   }
      // ]
    },
    {
      title: "Prompt Wisp",
      description: "Modern Next.js application with Supabase authentication and advanced UI.",
      longDescription: "A sophisticated web application featuring Google OAuth integration, real-time database updates, and a beautiful component library. Built with the latest Next.js 15 and React 19 features.",
      technologies: ["Next.js 15", "React 19", "Supabase", "TypeScript", "Radix UI", "Tailwind CSS"],
      github: "https://github.com/LeonardoCerv/prompt-wisp",
      status: "development",
      category: "web"
    },
    {
      title: "HackMIT 2025 - Clearly",
      description: "Award-winning water quality analysis app combining Django and React.",
      longDescription: "The winning project from HackMIT 2025 that provides an intuitive interface for water quality testing. Features AI-powered analysis, mobile-responsive design, and comprehensive water safety reporting.",
      technologies: ["Django", "React", "Claude AI", "PostgreSQL", "Python", "Mobile-First"],
      github: "https://github.com/LeonardoCerv/clearly-hackmit2025",
      status: "completed",
      category: "mobile",
      featured: true,
      // media: [
      //   {
      //     type: "video" as const,
      //     src: "/api/placeholder/video/clearly-demo.mp4",
      //     title: "Clearly App Demo",
      //     description: "Award-winning water quality analysis application",
      //     thumbnail: "/api/placeholder/400/300"
      //   },
      //   {
      //     type: "image" as const,
      //     src: "/api/placeholder/400/300",
      //     title: "Mobile Interface",
      //     description: "Mobile-responsive design for water quality testing",
      //     thumbnail: "/api/placeholder/400/300"
      //   },
      //   {
      //     type: "demo" as const,
      //     src: "https://github.com/LeonardoCerv/clearly-hackmit2025",
      //     title: "GitHub Repository",
      //     description: "Complete source code and project documentation",
      //     external: true
      //   }
      // ]
    },
    {
      title: "EigenX TEE Application",
      description: "TypeScript application running in Trusted Execution Environment on EigenX.",
      longDescription: "An experimental application exploring Trusted Execution Environment technology on the EigenX platform. Demonstrates secure computation patterns and blockchain integration for verifiable results.",
      technologies: ["TypeScript", "Trusted Execution Environment", "EigenX", "Viem", "Node.js"],
      github: "https://github.com/LeonardoCerv/eigenx-tee-app",
      status: "development",
      category: "infrastructure"
    },
    {
      title: "CRM System (RFS.MX)",
      description: "Full-stack CRM application for business management and client relations.",
      longDescription: "A comprehensive CRM system built for RFS.MX with features for client management, project tracking, and business analytics. Includes both web and API components.",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "API Development", "Business Logic"],
      github: "https://github.com/LeonardoCerv/crm.rfs.mx",
      status: "production",
      category: "web"
    },
    {
      title: "Legal Documents API",
      description: "Backend API for legal document processing and management.",
      longDescription: "A robust API system for handling legal documents, featuring document generation, validation, and secure storage. Built with modern backend technologies and comprehensive testing.",
      technologies: ["FastAPI", "Python", "PostgreSQL", "Document Processing", "API Design"],
      github: "https://github.com/LeonardoCerv/legal-docs-api",
      status: "production",
      category: "infrastructure"
    },
    {
      title: "Lotto API",
      description: "RESTful API for lottery number generation and validation.",
      longDescription: "A fun project that provides lottery number generation with statistical analysis and validation features. Built as an exploration of probability and API design patterns.",
      technologies: ["Node.js", "Express", "REST API", "Statistics", "Validation"],
      github: "https://github.com/LeonardoCerv/lotto-api",
      status: "completed",
      category: "web"
    },
    {
      title: "Python Book Scraper",
      description: "Web scraper for collecting book data and metadata from online sources.",
      longDescription: "A Python-based web scraper that collects book information, prices, and availability from various online bookstores. Features data cleaning, CSV export, and error handling.",
      technologies: ["Python", "Beautiful Soup", "Web Scraping", "Data Processing", "CSV"],
      github: "https://github.com/LeonardoCerv/python-book-scraper",
      status: "completed",
      category: "infrastructure"
    },
    {
      title: "Flutter Mobile App",
      description: "Cross-platform mobile application built with Flutter framework.",
      longDescription: "A mobile application exploring Flutter's capabilities for cross-platform development. Features modern UI patterns, state management, and native device integration.",
      technologies: ["Flutter", "Dart", "Mobile Development", "Cross-Platform", "UI/UX"],
      github: "https://github.com/LeonardoCerv/flutter-app",
      status: "development",
      category: "mobile"
    },
    {
      title: "Go Web Application",
      description: "Backend web application built with Go programming language.",
      longDescription: "A web application exploring Go's performance and concurrency features. Demonstrates RESTful API design, database integration, and efficient request handling.",
      technologies: ["Go", "Gin Framework", "PostgreSQL", "REST API", "Concurrency"],
      github: "https://github.com/LeonardoCerv/go-app",
      status: "development",
      category: "infrastructure"
    }
  ]

  const categoryColors = {
    blockchain: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100",
    ai: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100",
    web: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100",
    infrastructure: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100",
    mobile: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-100"
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
          <div className="border-dashed-indie p-6 bg-muted/20 rounded-lg max-w-2xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed italic">
              A showcase of innovative projects spanning blockchain, AI, web development, and infrastructure.
            </p>
            <div className="mt-4 text-sm text-muted-foreground">
              Built with passion • Production-ready • Always learning
            </div>
          </div>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {featuredProjects.map((project) => (
            <div key={project.title} className="group">
              <Card className="h-full border-2 border-dashed-indie relative">
                {/* Status indicator */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full border-2 border-background" />

                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-3">
                    <Badge className={`${categoryColors[project.category]} font-medium text-xs border-dashed-indie`}>
                      {project.category}
                    </Badge>
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
                    <Badge className={`${categoryColors[project.category]} border-dashed-indie`}>
                      {project.category}
                    </Badge>
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