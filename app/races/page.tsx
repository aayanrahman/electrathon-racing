"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, MapPin, Clock, Trophy } from "lucide-react"

interface Race {
  id: number
  name: string
  date: string
  location: string
  time: string
  image: string
  description: string
  result?: string
  upcoming: boolean
}

export default function RacesPage() {
  const [activeTab, setActiveTab] = useState("upcoming")

  const races: Race[] = [
    {
      id: 1,
      name: "State Championship",
      date: "April 15, 2025",
      location: "Central City Speedway",
      time: "10:00 AM - 4:00 PM",
      image: "/placeholder.svg?height=400&width=800",
      description:
        "The annual State Championship is one of the most prestigious events in the Electrathon calendar. Teams from across the state compete in a 1-hour endurance race to see who can travel the furthest distance on a single battery charge.",
      upcoming: true,
    },
    {
      id: 2,
      name: "Regional Qualifier",
      date: "May 22, 2025",
      location: "Westlake Circuit",
      time: "9:00 AM - 3:00 PM",
      image: "/placeholder.svg?height=400&width=800",
      description:
        "The Regional Qualifier is a crucial event that determines which teams advance to the National Finals. The race format includes a technical inspection, a sprint race, and a 45-minute endurance challenge.",
      upcoming: true,
    },
    {
      id: 3,
      name: "National Finals",
      date: "June 10, 2025",
      location: "Electrathon Speedway",
      time: "11:00 AM - 5:00 PM",
      image: "/placeholder.svg?height=400&width=800",
      description:
        "The pinnacle of the Electrathon racing season, the National Finals brings together the top teams from across the country. The competition includes technical innovation judging, a presentation component, and a 90-minute endurance race.",
      upcoming: true,
    },
    {
      id: 4,
      name: "Winter Invitational",
      date: "January 15, 2025",
      location: "Indoor Arena",
      time: "10:00 AM - 2:00 PM",
      image: "/placeholder.svg?height=400&width=800",
      description:
        "The Winter Invitational is a special indoor event that challenges teams to navigate a technical course with tight turns and varying surfaces. This event focuses on vehicle handling and driver skill.",
      result: "1st Place",
      upcoming: false,
    },
    {
      id: 5,
      name: "Spring Classic",
      date: "March 8, 2025",
      location: "Riverside Track",
      time: "9:00 AM - 3:00 PM",
      image: "/placeholder.svg?height=400&width=800",
      description:
        "The Spring Classic is the first major outdoor event of the season. Teams compete in multiple heat races throughout the day, with points awarded based on finishing position and energy efficiency.",
      result: "2nd Place",
      upcoming: false,
    },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/placeholder.svg?height=800&width=1600" alt="Race track" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">Race Calendar</h1>
            <p className="text-xl text-muted-foreground max-w-[700px] mx-auto">
              Follow our team as we compete across the country in the national Electrathon circuit.
            </p>
          </div>
        </div>
      </section>

      {/* Race Calendar */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="upcoming" className="space-y-8">
            <div className="flex justify-center">
              <TabsList>
                <TabsTrigger
                  value="upcoming"
                  onClick={() => setActiveTab("upcoming")}
                  className="text-sm sm:text-base px-4 sm:px-8"
                >
                  Upcoming Races
                </TabsTrigger>
                <TabsTrigger
                  value="past"
                  onClick={() => setActiveTab("past")}
                  className="text-sm sm:text-base px-4 sm:px-8"
                >
                  Past Results
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="upcoming" className="space-y-8">
              {races
                .filter((race) => race.upcoming)
                .map((race) => (
                  <div key={race.id} className="bg-background border rounded-xl overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="relative h-64 md:h-auto">
                        <Image src={race.image || "/placeholder.svg"} alt={race.name} fill className="object-cover" />
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
            </TabsContent>

            <TabsContent value="past" className="space-y-8">
              {races
                .filter((race) => !race.upcoming)
                .map((race) => (
                  <div key={race.id} className="bg-background border rounded-xl overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="relative h-64 md:h-auto">
                        <Image src={race.image || "/placeholder.svg"} alt={race.name} fill className="object-cover" />
                        {race.result && (
                          <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold">
                            {race.result}
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
                            {race.result && (
                              <div className="flex items-center text-primary">
                                <Trophy className="h-4 w-4 mr-2" />
                                <span>{race.result}</span>
                              </div>
                            )}
                          </div>
                          <p className="text-muted-foreground">{race.description}</p>
                        </div>
                        <div className="mt-6">
                          <Button variant="outline" className="rounded-full">
                            View Race Report
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Race Standings */}
      <section className="py-20 md:py-32 bg-black">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">2025 Season</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Current Standings</h2>
            <p className="text-muted-foreground text-lg max-w-[800px] mx-auto">
              Track our team's performance in the national Electrathon championship.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-background/5 backdrop-blur-sm rounded-xl overflow-hidden">
            <div className="p-6 border-b border-primary/20">
              <h3 className="text-xl font-bold">2025 Team Standings</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center mr-4">
                      <span className="font-bold text-primary-foreground">1</span>
                    </div>
                    <span className="font-medium">Westside Technical</span>
                  </div>
                  <span className="font-bold">42 pts</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-primary/80 flex items-center justify-center mr-4">
                      <span className="font-bold text-primary-foreground">2</span>
                    </div>
                    <span className="font-medium">Our Team</span>
                  </div>
                  <span className="font-bold">38 pts</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-primary/60 flex items-center justify-center mr-4">
                      <span className="font-bold text-primary-foreground">3</span>
                    </div>
                    <span className="font-medium">Eastside Academy</span>
                  </div>
                  <span className="font-bold">35 pts</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center mr-4">
                      <span className="font-bold">4</span>
                    </div>
                    <span className="font-medium">Northern High</span>
                  </div>
                  <span className="font-bold">29 pts</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center mr-4">
                      <span className="font-bold">5</span>
                    </div>
                    <span className="font-medium">Southern Tech</span>
                  </div>
                  <span className="font-bold">24 pts</span>
                </div>
              </div>
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
                src="/placeholder.svg?height=400&width=600"
                alt="Electrathon race in action"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer CTA */}
      <section className="py-20 md:py-32 bg-primary/10">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Volunteer at Our Races</h2>
            <p className="text-muted-foreground text-lg">
              We're always looking for volunteers to help at our race events. From timing and scoring to pit crew
              assistance, there are many ways to get involved!
            </p>
            <Button size="lg" className="rounded-full">
              Volunteer Sign-Up
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

