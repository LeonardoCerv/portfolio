"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  EnvelopeIcon, 
  MapPinIcon,
  ArrowTopRightOnSquareIcon
} from "@heroicons/react/24/outline"

export function ContactSection() {
  const contactMethods = [
    {
      icon: <EnvelopeIcon className="w-6 h-6" />,
      label: "Email",
      value: "leonardo@example.com",
      href: "mailto:leonardo@example.com"
    },
    {
      icon: <ArrowTopRightOnSquareIcon className="w-6 h-6" />,
      label: "GitHub",
      value: "github.com/LeonardoCerv",
      href: "https://github.com/LeonardoCerv"
    },
    {
      icon: <ArrowTopRightOnSquareIcon className="w-6 h-6" />,
      label: "LinkedIn",
      value: "linkedin.com/in/leonardo-cervantes",
      href: "https://linkedin.com/in/leonardo-cervantes"
    },
    {
      icon: <MapPinIcon className="w-6 h-6" />,
      label: "Location",
      value: "Available Remotely",
      href: null
    }
  ]

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Let&apos;s Connect</h2>
            <div className="w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent rounded-full" />
          </div>
          <div className="border-dashed-indie p-6 bg-muted/20 rounded-lg max-w-2xl mx-auto">
            <p className="text-lg text-muted-foreground italic">
              Got an interesting project or just want to chat about tech?
              I&apos;m always up for meaningful conversations and collaborations.
            </p>
            <div className="mt-4 text-sm text-muted-foreground">
              Open to discussions • Ready to collaborate • Love meeting new people
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Card className="border-dashed-indie">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  Get In Touch
                </h3>
                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <div key={method.label} className="flex items-center gap-3">
                      <div className="p-2 bg-muted rounded-lg border border-dashed-indie">
                        {method.icon}
                      </div>
                      <div>
                        <p className="font-medium">{method.label}</p>
                        {method.href ? (
                          <a 
                            href={method.href}
                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                            target={method.href.startsWith('http') ? '_blank' : undefined}
                            rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {method.value}
                          </a>
                        ) : (
                          <p className="text-sm text-muted-foreground">{method.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="border-dashed-indie">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  What Excites Me
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-muted/50 rounded-lg border border-dashed-indie">
                    <h4 className="font-medium mb-2 flex items-center gap-2">
                      Blockchain Projects
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      EigenLabs integration, DeFi applications, smart contracts, and Web3 development.
                    </p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg border border-dashed-indie">
                    <h4 className="font-medium mb-2 flex items-center gap-2">
                      AI Integration
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      ML model integration, AI-powered applications, and innovative AI use cases.
                    </p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg border border-dashed-indie">
                    <h4 className="font-medium mb-2 flex items-center gap-2">
                      Full Stack Development
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Modern web applications, mobile apps, and scalable backend systems.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="border-dashed-indie p-6 bg-muted/20 rounded-lg max-w-md mx-auto">
            <Button size="lg" className="w-full border-dashed-indie">
              <EnvelopeIcon className="w-4 h-4 mr-2" />
              Send Me a Message
            </Button>
            <p className="text-xs text-muted-foreground mt-3 italic">
              Usually responds within 24 hours • Always happy to chat
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}