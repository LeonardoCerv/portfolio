"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CodeBracketIcon,
  CpuChipIcon,
  MusicalNoteIcon,
  BookOpenIcon,
  PuzzlePieceIcon,
  CameraIcon
} from "@heroicons/react/24/outline"

export function InterestsSection() {
  const interests = [
    {
      category: "Tech Exploration",
      icon: <CpuChipIcon className="w-6 h-6" />,
      description: "Always diving into new technologies and frameworks",
      items: ["Rust systems programming", "AI model integration", "Web3 experiments", "Low-level networking"],
      color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
    },
    {
      category: "Creative Coding",
      icon: <CodeBracketIcon className="w-6 h-6" />,
      description: "Building fun projects and exploring creative applications",
      items: ["P2P applications", "CLI tools", "Web scrapers", "API experiments"],
      color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
    },
    {
      category: "Learning & Books",
      icon: <BookOpenIcon className="w-6 h-6" />,
      description: "Constantly learning through books and documentation",
      items: ["Technical documentation", "Programming books", "Research papers", "Open source code"],
      color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100"
    },
    {
      category: "Music & Audio",
      icon: <MusicalNoteIcon className="w-6 h-6" />,
      description: "Exploring music, audio processing, and creative expression",
      items: ["Music production", "Audio programming", "Sound design", "Creative coding"],
      color: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-100"
    },
    {
      category: "Gaming",
      icon: <PuzzlePieceIcon className="w-6 h-6" />,
      description: "Enjoying games and thinking about game development",
      items: ["Indie games", "Game mechanics", "Unity experiments", "Game design"],
      color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100"
    },
    {
      category: "Photography",
      icon: <CameraIcon className="w-6 h-6" />,
      description: "Capturing moments and exploring visual storytelling",
      items: ["Street photography", "Nature shots", "Tech product photography", "Visual documentation"],
      color: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100"
    }
  ]

  const currentFocus = [
    "Building more Rust projects",
    "Exploring AI integration patterns",
    "Contributing to open source",
    "Learning systems programming",
    "Experimenting with new frameworks"
  ]

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Beyond Code</h2>
            <div className="w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent rounded-full" />
          </div>
          <div className="border-dashed-indie p-6 bg-muted/20 rounded-lg max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground italic">
              What I&apos;m passionate about outside of programming. These interests often
              influence my projects and keep me inspired to learn and create.
            </p>
            <div className="mt-4 text-sm text-muted-foreground">
              Creative pursuits • Music & sound • Endless curiosity • Gaming adventures
            </div>
          </div>
        </div>

        {/* Current Focus */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-6 flex items-center justify-center gap-2">
              Currently Exploring
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {currentFocus.map((item, index) => (
                <div key={item}>
                  <Badge variant="outline" className="text-sm py-2 px-4 bg-background/50 border-dashed-indie">
                    {item}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Interests Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interests.map((interest, index) => (
            <div key={interest.category}>
              <Card className="h-full border border-dashed-indie relative">
                {/* Decorative corner */}
                <div className="absolute -top-1 -left-1 w-3 h-3 border-l-2 border-t-2 border-primary/30 rounded-tl-sm" />

                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-muted rounded-lg border border-dashed-indie">
                      {interest.icon}
                    </div>
                    <CardTitle className="text-lg">{interest.category}</CardTitle>
                  </div>
                  <CardDescription className="text-sm italic">
                    {interest.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {interest.items.map((item) => (
                      <Badge key={item} variant="secondary" className="text-xs border-dashed-indie">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Personal Note */}
        <div className="mt-20 text-center">
          <div className="max-w-3xl mx-auto bg-muted/30 rounded-2xl p-8 border border-dashed-indie relative">
            {/* Corner decorations */}
            <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-primary/30 rounded-tl-lg" />
            <div className="absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-primary/30 rounded-tr-lg" />
            <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-primary/30 rounded-bl-lg" />
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-primary/30 rounded-br-lg" />

            <h3 className="text-xl font-bold mb-4 flex items-center justify-center gap-2">
              Why I Create
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed italic">
              I believe the best projects come from genuine curiosity and real-world interests.
              Whether it&apos;s building tools that make life easier or exploring new technologies
              just because they&apos;re fascinating, I love creating things that matter to me
              and hopefully to others too.
            </p>
            <div className="mt-6 border-t border-dashed-indie pt-4">
              <p className="text-sm text-muted-foreground">
                &ldquo;Code is poetry written in logic, and every project tells a story worth sharing.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}