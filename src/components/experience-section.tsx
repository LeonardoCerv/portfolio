"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MediaShowcase, type MediaItem } from "@/components/ui/media-showcase"
import { 
  SiReact, 
  SiNodedotjs, 
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiHeroku,
  SiIntel
} from "react-icons/si"
import { 
  FaBriefcase,
  FaCode,
  FaTrophy,
  FaLaptopCode,
  FaCubes,
  FaPrint
} from "react-icons/fa"
import { 
  MdBusiness,
  MdSchool,
  MdAccessTime,
  MdTrendingUp
} from "react-icons/md"

const experiences = [
  {
    company: "MXREP",
    subtitle: "(Novus Funded)",
    position: "Software Engineering Intern",
    period: "Aug 2024 – Present",
    location: "Querétaro, Mexico (Hybrid)",
    type: "internship",
    current: true,
    logo: <SiReact className="text-2xl text-cyan-500" />,
    achievements: [
      "Currently working on Cowtec - an innovative project in development",
      "Previously contributed to a gamified industrial engineering simulator using React, Node.js, Express, and MongoDB for 500+ students globally",
      "Delivered project 2 months ahead of schedule through agile development and effective team coordination",
      "Led code reviews and implemented CI/CD practices that improved team development velocity by 30%",
      "Co-authored academic papers exploring gamification's impact in higher education"
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "CI/CD"],
    techIcons: [
      <SiReact key="react" className="text-cyan-500" />,
      <SiNodedotjs key="node" className="text-green-500" />,
      <SiMongodb key="mongo" className="text-green-600" />
    ],
    highlights: ["Agile Development", "Team Leadership", "Academic Research"],
    // media: [
    //   {
    //     type: "image" as const,
    //     src: "/api/placeholder/400/300",
    //     title: "MXREP Simulator Dashboard",
    //     description: "Main dashboard of the gamified industrial engineering simulator",
    //     thumbnail: "/api/placeholder/400/300"
    //   },
    //   {
    //     type: "image" as const,
    //     src: "/api/placeholder/400/300",
    //     title: "Cowtec Project Preview",
    //     description: "Early preview of the Cowtec project interface",
    //     thumbnail: "/api/placeholder/400/300"
    //   }
    // ] as MediaItem[]
  },
  {
    company: "Freelance",
    position: "Full Stack Developer",
    period: "January 2024 – Present",
    location: "Remote",
    type: "freelance",
    current: true,
    logo: <FaLaptopCode className="text-2xl text-purple-500" />,
    achievements: [
      "Developed 10+ production web applications for local businesses, increasing client leads by up to 200%",
      "Collaborated with business owners on product requirements, UI/UX design, and deployment strategies",
      "Implemented responsive designs and modern development practices including version control and CI/CD"
    ],
    technologies: ["React", "Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    techIcons: [
      <SiReact key="react" className="text-cyan-500" />,
      <SiNextdotjs key="next" className="text-gray-800 dark:text-white" />,
      <SiPostgresql key="postgres" className="text-blue-600" />
    ],
    highlights: ["Client Management", "UI/UX Design", "Business Growth"],
    // media: [
    //   {
    //     type: "image" as const,
    //     src: "/api/placeholder/400/300",
    //     title: "Restaurant Management System",
    //     description: "Full-stack restaurant management app with POS integration",
    //     thumbnail: "/api/placeholder/400/300"
    //   },
    //   {
    //     type: "video" as const,
    //     src: "/api/placeholder/video/demo.mp4",
    //     title: "E-commerce Platform Demo",
    //     description: "Custom e-commerce solution for local retail business",
    //     thumbnail: "/api/placeholder/400/300"
    //   }
    // ] as MediaItem[]
  },
  {
    company: "Via Diseño",
    position: "Software Development Intern",
    period: "February 2025 – June 2025",
    location: "Querétaro, Mexico",
    type: "internship",
    current: false,
    logo: <MdSchool className="text-2xl text-blue-500" />,
    achievements: [
      "Developed a university enrollment platform using Next.js and PostgreSQL reducing administrative time by 20x",
      "Implemented test-driven development and scalable backend architecture deployed on Heroku",
      "Designed data visualization dashboards and delivered comprehensive documentation for long-term maintainability"
    ],
    technologies: ["Next.js", "PostgreSQL", "Heroku", "TDD"],
    techIcons: [
      <SiNextdotjs key="next" className="text-gray-800 dark:text-white" />,
      <SiPostgresql key="postgres" className="text-blue-600" />,
      <SiHeroku key="heroku" className="text-purple-600" />
    ],
    highlights: ["University Platform", "Data Visualization", "TDD"],
    // media: [
    //   {
    //     type: "image" as const,
    //     src: "/api/placeholder/400/300",
    //     title: "Enrollment Platform Interface",
    //     description: "Main interface of the university enrollment system",
    //     thumbnail: "/api/placeholder/400/300"
    //   },
    //   {
    //     type: "image" as const,
    //     src: "/api/placeholder/400/300",
    //     title: "Analytics Dashboard",
    //     description: "Data visualization dashboard for enrollment tracking",
    //     thumbnail: "/api/placeholder/400/300"
    //   }
    // ] as MediaItem[]
  },
  {
    company: "Intel",
    position: "Software Development Intern",
    period: "Apr 2023 – Sep 2023",
    location: "Querétaro, Mexico",
    type: "internship",
    current: false,
    logo: <SiIntel className="text-2xl text-blue-600" />,
    achievements: [
      "Led 10+ IoT projects from ideation to deployment; won 1st and 2nd place in innovation competition",
      "Modernized unused 3D printer with custom Marlin firmware, enabling prototyping with a tight budget",
      "Conducted thesis research on legacy firmware refurbishment and hardware accessibility"
    ],
    technologies: ["IoT", "Firmware", "3D Printing", "Hardware"],
    techIcons: [
      <FaCubes key="iot" className="text-orange-500" />,
      <FaPrint key="3d" className="text-gray-600" />,
      <FaCode key="firmware" className="text-green-500" />
    ],
    highlights: ["Innovation Competition Winner", "Hardware Modernization", "Research"],
    // media: [
    //   {
    //     type: "video" as const,
    //     src: "/api/placeholder/video/3d-printer.mp4",
    //     title: "3D Printer Modernization",
    //     description: "Custom Marlin firmware implementation for legacy 3D printer",
    //     thumbnail: "/api/placeholder/400/300"
    //   },
    //   {
    //     type: "image" as const,
    //     src: "/api/placeholder/400/300",
    //     title: "IoT Project Setup",
    //     description: "One of the IoT projects that won innovation competition",
    //     thumbnail: "/api/placeholder/400/300"
    //   }
    // ] as MediaItem[]
  }
]

export function ExperienceSection() {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-8 mb-16">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-3 mb-4">
              <FaBriefcase className="text-2xl text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Experience
              </h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent rounded-full mx-auto" />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey through software development, from IoT innovation at Intel to building scalable web applications for businesses
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20 md:transform md:-translate-x-1/2" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center group`}
              >
                {/* Content Card */}
                <div className={`w-full md:w-2/3 ml-12 md:ml-0 ${index % 2 === 0 ? '' : 'md:mr-12'}`}>
                  <Card className={`border-dashed-indie hover:shadow-lg transition-all duration-300 group-hover:scale-105 ${
                    exp.current ? 'ring-2 ring-primary/20 bg-primary/5' : ''
                  }`}>
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-muted/50">
                            {exp.logo}
                          </div>
                          <div>
                            <CardTitle className="flex items-center gap-2 text-lg">
                              {exp.company}
                              {exp.subtitle && (
                                <span className="text-sm font-normal text-muted-foreground">
                                  {exp.subtitle}
                                </span>
                              )}
                              {exp.current && (
                                <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 text-xs">
                                  Current
                                </Badge>
                              )}
                            </CardTitle>
                            <CardDescription className="font-medium text-base">
                              {exp.position}
                            </CardDescription>
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      {/* Achievements */}
                      <div className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground leading-relaxed">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Technologies */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <FaCode className="text-xs text-muted-foreground" />
                          <span className="text-sm font-medium">Technologies:</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <Badge 
                              key={idx} 
                              variant="secondary" 
                              className="text-xs border-dashed-indie bg-muted/30"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center gap-3 pt-1">
                          {exp.techIcons.map((icon, idx) => (
                            <div key={idx} className="text-lg opacity-70 hover:opacity-100 transition-opacity">
                              {icon}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Highlights */}
                      {exp.highlights && (
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <FaTrophy className="text-xs text-yellow-500" />
                            <span className="text-sm font-medium">Key Highlights:</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {exp.highlights.map((highlight, idx) => (
                              <Badge 
                                key={idx} 
                                className="text-xs bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100 border-dashed-indie"
                              >
                                {highlight}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Media Showcase */}
                      {/* Uncomment when you have actual images/videos */}
                      {/* {exp.media && exp.media.length > 0 && (
                        <MediaShowcase 
                          items={exp.media}
                          title="Project Showcase"
                          className="pt-2"
                        />
                      )} */}
                    </CardContent>
                  </Card>
                </div>

                {/* Period indicator (visible on larger screens) */}
                <div className={`hidden md:block w-1/3 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="text-sm font-medium text-muted-foreground">
                    {exp.period}
                  </div>
                  <div className="text-xs text-muted-foreground/70">
                    {exp.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}