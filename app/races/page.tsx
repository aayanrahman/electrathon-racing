"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, MapPin, Clock, Trophy, Star, Target, Award } from "lucide-react"

interface Race {
  id: number
  name: string
  date: string
  location: string
  time: string
  image: string
  description: string
  isHighlighted?: boolean
}

export default function RacesPage() {
  const [activeTab, setActiveTab] = useState("upcoming")

  const races: Race[] = [
    {
      id: 1,
      name: "University of Waterloo ElectrON",
      date: "April 27, 2024",
      location: "University of Waterloo, Engineering 5",
      time: "9:00 AM - 5:00 PM",
      image: "/images/events/blud.png?height=400&width=800",
      description:
        "Our team's first official competition! The University of Waterloo ElectrON brings together high school teams from across the region to compete in an exciting day of electric vehicle racing. This event will be our debut and a fantastic opportunity to showcase our vehicle's capabilities.",
      isHighlighted: true,
    },
    {
      id: 2,
      name: "Regional High School Exhibition",
      date: "May 18, 2024",
      location: "WOSS Campus",
      time: "10:00 AM - 2:00 PM",
      image: "/placeholder.svg?height=400&width=800",
      description:
        "A showcase event where we'll demonstrate our electric vehicle to other high schools in the area. This non-competitive exhibition is aimed at inspiring other schools to start their own teams and join the growing electrathon movement.",
    },
    {
      id: 3,
      name: "Technology Expo",
      date: "June 8, 2024",
      location: "Metro Convention Center",
      time: "9:00 AM - 4:00 PM",
      image: "/placeholder.svg?height=400&width=800",
      description:
        "We'll be presenting our vehicle at the annual Technology Expo, connecting with industry professionals and potential sponsors. This is a great opportunity to highlight the engineering talent of our team and secure additional support for future competitions.",
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section - Modified to extend under navbar */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/events/blud.png?height=800&width=1600" alt="Race track" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-background/40 to-background" />
        </div>

        <div className="container relative z-10 px-4 md:px-6 mt-20">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">Our Journey Begins</h1>
            <p className="text-xl text-muted-foreground max-w-[700px] mx-auto">
              As a new team, we're preparing for our first race season with ambition and determination.
            </p>
            <div className="mt-8">
              <Button size="lg" className="rounded-full">
                Support Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">2024 Season</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Upcoming Events</h2>
            <p className="text-muted-foreground text-lg max-w-[800px] mx-auto">
              Join us as we debut our electric vehicle and showcase our engineering talent.
            </p>
          </div>
          
          <div className="space-y-12">
            {races.map((race) => (
              <div 
                key={race.id} 
                className={`bg-background border rounded-xl overflow-hidden ${race.isHighlighted ? "ring-2 ring-primary" : ""}`}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative h-64 md:h-auto">
                    <Image src={race.image || "/placeholder.svg"} alt={race.name} fill className="object-cover" />
                    {race.isHighlighted && (
                      <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold flex items-center">
                        <Star className="h-4 w-4 mr-2" />
                        First Official Race!
                      </div>
                    )}
                  </div>
                  <div className="p-6 md:p-8 flex flex-col justify-between">
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold">{race.name}</h3>
                      <div className="space-y-2">
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>{race.date}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span>{race.location}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Clock className="h-4 w-4 mr-2" />
                          <span>{race.time}</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground">{race.description}</p>
                    </div>
                    <div className="mt-6 flex space-x-4">
                      <Button className="rounded-full">Event Details</Button>
                      <Button variant="outline" className="rounded-full">
                        Add to Calendar
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Goals */}
      <section className="py-20 md:py-32 bg-black">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Team Objectives</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Racing Goals</h2>
            <p className="text-muted-foreground text-lg max-w-[800px] mx-auto">
              As we embark on our first season, we've set ambitious goals for our team's performance.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-background/5 backdrop-blur-sm rounded-xl p-6 space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Trophy className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Complete Waterloo Race</h3>
              <p className="text-muted-foreground">
                Successfully complete all laps at our debut race at the University of Waterloo with our car performing reliably.
              </p>
            </div>
            <div className="bg-background/5 backdrop-blur-sm rounded-xl p-6 space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Energy Efficiency</h3>
              <p className="text-muted-foreground">
                Achieve top-tier energy efficiency ratings by optimizing our motor control systems and vehicle aerodynamics.
              </p>
            </div>
            <div className="bg-background/5 backdrop-blur-sm rounded-xl p-6 space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Technical Innovation</h3>
              <p className="text-muted-foreground">
                Receive recognition for our technical innovations in vehicle design, specifically our custom battery management system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Race Information */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                About Electrathon Racing
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What is Electrathon?</h2>
              <p className="text-muted-foreground text-lg">
                Electrathon is a type of electric vehicle competition where teams design and build single-person
                electric vehicles. The goal is to travel the furthest distance possible in a set time using a limited
                amount of battery power.
              </p>
              <p className="text-muted-foreground text-lg">
                These competitions promote innovation in electric vehicle technology, energy efficiency, and sustainable
                transportation solutions while providing students with hands-on engineering experience.
              </p>
              <div className="space-y-4 mt-6">
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p>Vehicles must be powered solely by electric motors</p>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p>Battery capacity is limited to 1,000 watt-hours</p>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p>Races typically last 1 hour on a closed circuit</p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/images/cars/IMG_0355.jpg"
                alt="Our electrathon vehicle"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sponsor CTA */}
      <section className="py-20 md:py-32 bg-primary/10">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Support Our Racing Journey</h2>
            <p className="text-muted-foreground text-lg">
              We're seeking sponsors to help fund our first racing season. Your support helps us purchase materials, improve our vehicle, and compete at a higher level. In return, we offer brand visibility and association with STEM education and sustainable technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-full"
                onClick={() => window.location.href = 'https://hcb.hackclub.com/donations/start/woss-electrathon'}>
                Become a Sponsor
              </Button>
              <Button variant="outline" size="lg" className="rounded-full">
                Contact Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

