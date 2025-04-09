"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown } from "lucide-react"

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const sponsorshipRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY

      // Parallax effect for hero section
      if (heroRef.current) {
        heroRef.current.style.transform = `translateY(${scrollY * 0.2}px)`
      }
      // Fade in elements as they come into view
      ;[featuresRef, statsRef, sponsorshipRef].forEach((ref) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect()
          const isInView = rect.top < window.innerHeight * 0.75 && rect.bottom > 0

          if (isInView) {
            ref.current.classList.add("animate-in")
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div ref={heroRef} className="absolute inset-0 z-0">
          <Image
            src="/images/boy.png?height=1080&width=1920"
            alt="Electrathon Racing Car"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        </div>

        <div className="container relative z-10 px-4 md:px-6 pt-20">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              HELP US BUILD THE FUTURE OF ELECTRIC RACING
            </h1>
            <p className="text-xl text-muted-foreground max-w-[700px] mx-auto">
              We're a new school Electrathon team seeking sponsors to help turn our innovative designs into reality. Join us on our journey.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/sponsors">
                <Button size="lg" className="rounded-full">
                  Become a Sponsor
                </Button>
              </Link>
              <Link href="/team">
                <Button size="lg" variant="outline" className="rounded-full">
                  Meet Our Team
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown className="h-8 w-8" />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">About Us</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Building Our First Electric Racing Vehicle
              </h2>
              <p className="text-muted-foreground text-lg">
                Our newly formed Electrathon Racing Team consists of passionate students with a vision to design and build an innovative electric race car from the ground up. We're currently in the development phase and seeking support to bring our designs to life.
              </p>
              <p className="text-muted-foreground text-lg">
                Founded in 2023, we're combining classroom knowledge with hands-on engineering to create a sustainable, high-performance electric vehicle that will compete in future Electrathon competitions.
              </p>
              <Button variant="default" className="rounded-full group">
                Our Vision <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden">
              <Image
                src="/images/team.webp?height=500&width=500"
                alt="Team working on Electrathon car design"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Car Design Goals Section */}
      <section ref={featuresRef} className="py-20 md:py-32 bg-black opacity-0 transition-opacity duration-1000">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Our Design</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              WarRig X1: Our Vision
            </h2>
            <p className="text-muted-foreground text-lg max-w-[800px] mx-auto">
              We're designing our first Electrathon vehicle with cutting-edge technology and efficient design principles to maximize performance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background/5 backdrop-blur-sm p-6 rounded-xl space-y-4 hover:bg-background/10 transition-colors">
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-bold">Aerodynamic Design</h3>
              <p className="text-muted-foreground">
                We're engineering an ultra-efficient aerodynamic profile to minimize resistance and maximize range, targeting a drag coefficient of just 0.15.
              </p>
            </div>

            <div className="bg-background/5 backdrop-blur-sm p-6 rounded-xl space-y-4 hover:bg-background/10 transition-colors">
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m4.93 4.93 4.24 4.24"></path>
                  <path d="m14.83 9.17 4.24-4.24"></path>
                  <path d="m14.83 14.83 4.24 4.24"></path>
                  <path d="m9.17 14.83-4.24 4.24"></path>
                  <circle cx="12" cy="12" r="4"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-bold">Advanced Battery System</h3>
              <p className="text-muted-foreground">
                Plans for a custom-designed 48V lithium-ion battery pack with integrated thermal management for optimal performance and safety.
              </p>
            </div>

            <div className="bg-background/5 backdrop-blur-sm p-6 rounded-xl space-y-4 hover:bg-background/10 transition-colors">
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1-1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1-1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-bold">Lightweight Materials</h3>
              <p className="text-muted-foreground">
                Aiming to use carbon fiber chassis and body panels to achieve a target weight of just 175 pounds, improving efficiency and handling.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link href="/car">
              <Button variant="outline" className="rounded-full">
                See Our Design Plans
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section
        ref={statsRef}
        className="py-20 md:py-32 bg-gradient-to-b from-background to-background/80 opacity-0 transition-opacity duration-1000"
      >
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Performance Targets</h2>
            <p className="text-muted-foreground text-lg mt-4">With your sponsorship, we aim to achieve these milestones</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <h3 className="text-5xl font-bold text-primary">85+</h3>
              <p className="text-muted-foreground">Miles Per Charge Goal</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-5xl font-bold text-primary">45</h3>
              <p className="text-muted-foreground">MPH Target Speed</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-5xl font-bold text-primary">12</h3>
              <p className="text-muted-foreground">Team Members</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-5xl font-bold text-primary">2024</h3>
              <p className="text-muted-foreground">First Race Goal</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Opportunities Section */}
      <section ref={sponsorshipRef} className="py-20 md:py-32 bg-background opacity-0 transition-opacity duration-1000">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Sponsor Us</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Sponsorship Opportunities</h2>
            <p className="text-muted-foreground text-lg max-w-[800px] mx-auto">
              Partner with us to support STEM education and sustainable technology innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background border rounded-xl overflow-hidden group hover:border-primary transition-colors">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Bronze sponsorship"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm rounded-lg p-2">
                  <p className="text-sm font-medium">BRONZE TIER</p>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Bronze Sponsor</h3>
                <p className="text-muted-foreground">Logo on our website and small logo placement on the vehicle.</p>
                <Link href="/sponsors#bronze">
                  <Button variant="outline" className="w-full">
                    Details
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-background border rounded-xl overflow-hidden group hover:border-primary transition-colors">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Silver sponsorship"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm rounded-lg p-2">
                  <p className="text-sm font-medium">SILVER TIER</p>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Silver Sponsor</h3>
                <p className="text-muted-foreground">Medium logo placement on vehicle and featured in team presentations.</p>
                <Link href="/sponsors#silver">
                  <Button variant="outline" className="w-full">
                    Details
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-background border rounded-xl overflow-hidden group hover:border-primary transition-colors">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Gold sponsorship"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm rounded-lg p-2">
                  <p className="text-sm font-medium">GOLD TIER</p>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Gold Sponsor</h3>
                <p className="text-muted-foreground">Prominent logo placement, media mentions, and exclusive team events.</p>
                <Link href="/sponsors#gold">
                  <Button variant="outline" className="w-full">
                    Details
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary/10">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Help Us Build The Future</h2>
              <p className="text-muted-foreground text-lg">
                Your sponsorship will directly support our students in gaining real-world engineering experience while developing sustainable transportation technology. We offer various sponsorship levels to fit your organization's goals and budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="rounded-full">
                  Become a Sponsor
                </Button>
                <Button size="lg" variant="outline" className="rounded-full">
                  Contact Our Team
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/images/weld.jpg?height=400&width=600"
                alt="Team members working on designs"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

