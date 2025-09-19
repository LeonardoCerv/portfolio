"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  CodeBracketIcon, 
  CpuChipIcon, 
  ServerIcon, 
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  AcademicCapIcon
} from "@heroicons/react/24/outline"

export function AboutSection() {
  const skills = [
    {
      category: "Frontend",
      icon: <GlobeAltIcon className="w-6 h-6" />,
      technologies: ["React", "Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion", "Radix UI"]
    },
    {
      category: "Backend",
      icon: <ServerIcon className="w-6 h-6" />,
      technologies: ["FastAPI", "Django", "Node.js", "PostgreSQL", "Supabase", "Docker"]
    },
    {
      category: "AI & Automation",
      icon: <CpuChipIcon className="w-6 h-6" />,
      technologies: ["Cerebras AI", "Claude AI", "Model Context Protocol", "Web Scraping", "Automation"]
    },
    {
      category: "Languages",
      icon: <CodeBracketIcon className="w-6 h-6" />,
      technologies: ["TypeScript", "Python", "Rust", "Go", "JavaScript", "Dart"]
    },
    {
      category: "Mobile",
      icon: <DevicePhoneMobileIcon className="w-6 h-6" />,
      technologies: ["Flutter", "React Native", "Mobile-First Design", "Cross-Platform"]
    },
    {
      category: "Tools & Platforms",
      icon: <AcademicCapIcon className="w-6 h-6" />,
      technologies: ["Git", "Docker", "NPM", "Vercel", "Supabase", "PostgreSQL"]
    }
  ]

  const experience = [
    {
      role: "Full Stack Developer",
      description: "Building end-to-end web applications with modern frameworks and AI integration.",
      achievements: ["Created AI-powered water quality analysis system", "Developed P2P video chat in Rust", "Built published NPM packages", "Won HackMIT 2025"]
    },
    {
      role: "Systems Programmer",
      description: "Exploring low-level programming and high-performance systems development.",
      achievements: ["Built P2P networking applications", "Developed CLI tools and utilities", "Experimented with Trusted Execution Environments", "Created cross-platform mobile apps"]
    },
    {
      role: "API Developer",
      description: "Designing and implementing RESTful APIs and backend services.",
      achievements: ["Created multiple production APIs", "Integrated AI services and databases", "Built CRM and legal document systems", "Developed automation tools"]
    }
  ]

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">About Me</h2>
            <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent rounded-full" />
          </div>
          <div className="border-dashed-indie p-6 bg-muted/20 rounded-lg max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto italic">
              A curious developer who loves building things that solve real problems.
              From AI-powered water quality analysis to peer-to-peer video chat systems,
              I enjoy exploring different technologies and finding creative solutions.
            </p>
            <div className="mt-4 text-sm text-muted-foreground">
              Coffee-fueled coding sessions • Late-night debugging • Always learning
            </div>
          </div>
        </div>

        {/* Experience Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {experience.map((exp, index) => (
            <div key={exp.role}>
              <Card className="h-full border border-dashed-indie">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    {exp.role}
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      Active
                    </span>
                  </CardTitle>
                  <CardDescription className="italic">{exp.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="mb-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Technical Skills</h3>
            <p className="text-muted-foreground italic">My current toolkit & favorite technologies</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div key={skill.category}>
              <Card className="border border-dashed-indie">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-muted rounded-lg border border-dashed-indie">
                      {skill.icon}
                    </div>
                    <CardTitle className="text-lg">{skill.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs border-dashed-indie">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* GitHub Stats */}
        <div className="mt-20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">GitHub Stats</h3>
            <p className="text-muted-foreground italic">My open source contributions and activity</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <Card className="border border-dashed-indie">
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold text-primary">25+</div>
                  <div className="text-sm text-muted-foreground">Repositories</div>
                </CardContent>
              </Card>
            </div>
            <div className="text-center">
              <Card className="border border-dashed-indie">
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold text-primary">150+</div>
                  <div className="text-sm text-muted-foreground">Commits (2025)</div>
                </CardContent>
              </Card>
            </div>
            <div className="text-center">
              <Card className="border border-dashed-indie">
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold text-primary">8</div>
                  <div className="text-sm text-muted-foreground">Languages</div>
                </CardContent>
              </Card>
            </div>
            <div className="text-center">
              <Card className="border border-dashed-indie">
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold text-primary">5</div>
                  <div className="text-sm text-muted-foreground">Hackathons Won</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Personal Statement */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto bg-muted/30 rounded-2xl p-8 border border-dashed-indie relative">
            {/* Corner decoration */}
            <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-primary/30 rounded-tl-lg" />
            <div className="absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-primary/30 rounded-tr-lg" />
            <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-primary/30 rounded-bl-lg" />
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-primary/30 rounded-br-lg" />

            <h3 className="text-2xl font-bold mb-6 flex items-center justify-center gap-2">
              What Drives Me
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I&apos;m fascinated by the intersection of technology and real-world problems.
              Whether it&apos;s using AI to make water quality testing more accessible,
              building decentralized communication tools, or creating APIs that power businesses,
              I love finding practical solutions to everyday challenges.
            </p>
            <div className="border-t border-dashed-indie pt-6">
              <p className="text-base text-muted-foreground italic">
                When I&apos;m not coding, you&apos;ll find me exploring new technologies,
                contributing to open source projects, or working on my latest side project.
                I believe in learning by doing and sharing knowledge with the community.
              </p>
              <div className="mt-4 text-sm text-muted-foreground">
                Always building • Constantly learning • Open to collaborate
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}