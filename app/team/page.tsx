"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface TeamMember {
  id: number
  name: string
  role: string
  number?: number
  image: string
  bio: string
}

export default function TeamPage() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Team Captain & Driver",
      number: 1,
      image: "/placeholder.svg?height=600&width=400",
      bio: "Alex has been with the team since its founding and has led us to multiple victories. With 3 years of racing experience, Alex specializes in energy management and race strategy.",
    },
    {
      id: 2,
      name: "Jamie Smith",
      role: "Lead Engineer",
      number: 22,
      image: "/placeholder.svg?height=600&width=400",
      bio: "Jamie oversees all technical aspects of our vehicle design. With a passion for aerodynamics, Jamie has helped reduce our car's drag coefficient by 20% over the last season.",
    },
    {
      id: 3,
      name: "Taylor Williams",
      role: "Battery Specialist",
      number: 33,
      image: "/placeholder.svg?height=600&width=400",
      bio: "Taylor's innovations in battery management have extended our range by 15 miles. Specializing in electrical engineering, Taylor ensures our power systems are both efficient and reliable.",
    },
    {
      id: 4,
      name: "Morgan Lee",
      role: "Driver",
      number: 44,
      image: "/placeholder.svg?height=600&width=400",
      bio: "Morgan joined the team last year and has already secured two podium finishes. Known for smooth driving style that maximizes efficiency while maintaining competitive speeds.",
    },
  ]

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % teamMembers.length)
  }

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + teamMembers.length) % teamMembers.length)
  }

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/placeholder.svg?height=800&width=1600" alt="Team photo" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <h1 className="text-6xl md:text-8xl font-bold text-center">The Team</h1>
        </div>
      </section>

      {/* Team Members Carousel */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Meet Our Drivers</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">The Faces Behind the Wheel</h2>
            <p className="text-muted-foreground text-lg max-w-[800px] mx-auto">
              Our talented drivers combine skill, strategy, and passion to push our Electrathon car to its limits.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {teamMembers
                  .filter((member) => member.role.includes("Driver"))
                  .map((member) => (
                    <div key={member.id} className="w-full flex-shrink-0 px-4">
                      <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="relative">
                          <div className="absolute -top-10 -left-10 text-[180px] font-bold text-primary opacity-20 z-0 leading-none">
                            {member.number}
                          </div>
                          <div className="relative z-10 rounded-xl overflow-hidden border-4 border-primary">
                            <Image
                              src={member.image || "/placeholder.svg"}
                              alt={member.name}
                              width={400}
                              height={600}
                              className="object-cover aspect-[2/3]"
                            />
                          </div>
                          <div className="absolute bottom-4 left-4 right-4 bg-background/80 backdrop-blur-sm p-4 rounded-lg">
                            <div className="font-bold text-2xl">{member.name}</div>
                            <div className="text-primary">{member.role}</div>
                          </div>
                        </div>
                        <div className="space-y-6">
                          <div className="text-6xl font-bold text-primary">{member.number}</div>
                          <h3 className="text-3xl font-bold">{member.name}</h3>
                          <p className="text-xl text-primary">{member.role}</p>
                          <p className="text-muted-foreground">{member.bio}</p>
                          <Button className="rounded-full">View Profile</Button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            <Button
              variant="outline"
              size="icon"
              className="absolute top-1/2 left-0 -translate-y-1/2 rounded-full z-10"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Previous</span>
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute top-1/2 right-0 -translate-y-1/2 rounded-full z-10"
              onClick={nextSlide}
            >
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Full Team Grid */}
      <section className="py-20 md:py-32 bg-black">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Our Full Roster</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">The Complete Team</h2>
            <p className="text-muted-foreground text-lg max-w-[800px] mx-auto">
              From engineering to management, every member plays a crucial role in our success.
            </p>
          </div>

          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
          >
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-background/5 backdrop-blur-sm rounded-xl overflow-hidden group hover:bg-background/10 transition-colors"
              >
                <div className="relative h-80">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-primary">{member.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <Button variant="outline" className="w-full rounded-full">
                    View Profile
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                Team Achievements
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Track Record</h2>
              <p className="text-muted-foreground text-lg">
                Since our founding, we've consistently improved our performance and standings in the national
                Electrathon circuit.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">8</div>
                  <p className="text-muted-foreground">Podium Finishes</p>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">3</div>
                  <p className="text-muted-foreground">First Place Wins</p>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">15%</div>
                  <p className="text-muted-foreground">Efficiency Improvement</p>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">2</div>
                  <p className="text-muted-foreground">Design Awards</p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image src="/placeholder.svg?height=400&width=600" alt="Team celebration" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Join the Team CTA */}
      <section className="py-20 md:py-32 bg-primary/10">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join Our Team</h2>
            <p className="text-muted-foreground text-lg">
              We're always looking for passionate students to join our Electrathon Racing Team. No experience necessary
              - just enthusiasm and dedication!
            </p>
            <Button size="lg" className="rounded-full">
              Apply Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

