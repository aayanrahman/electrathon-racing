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
  const [expandedMember, setExpandedMember] = useState<number | null>(null)

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Zane Beeai",
      role: "President",
      number: 1,
      image: "/images/team/zane.webp?height=600&width=400",
      bio: "As Team President, Zane provides strategic leadership and vision for the Electrathon Racing Team. His strong project management skills and ability to unite diverse talents have been instrumental in building our program from the ground up. He oversees all aspects of team operations while fostering an environment of innovation and collaboration.",
    },
    {
      id: 2,
      name: "Vidyuth Kripashankar",
      role: "Vice President",
      number: 22,
      image: "/images/team/Vidyuth.webp?height=600&width=400",
      bio: "Vidyuth spearheads our technical development as Vice President, bringing expertise in electrical systems and vehicle dynamics. His methodical approach to problem-solving and deep understanding of engineering principles helps guide our team through complex technical challenges while maintaining high standards of quality and safety.",
    },
    {
      id: 3,
      name: "Angelo Wei",
      role: "Vice President",
      number: 22,
      image: "/images/team/Angelo.webp?height=600&width=400",
      bio: "As Vice President of Operations, Angelo oversees our engineering initiatives with a focus on innovation and efficiency. His strong background in technical project management and systems integration ensures our team meets its development milestones while pushing the boundaries of electric vehicle technology.",
    },
    {
      id: 4,
      name: "Ahmad Arab",
      role: "Design Lead",
      number: 33,
      image: "/images/team/ahmad.jpeg?height=600&width=400",
      bio: "Ahmad leads our design department, utilizing advanced CAD software to create precise 3D models and technical specifications. His innovative approach to vehicle design combines aerodynamic efficiency with practical engineering solutions, ensuring our vehicle meets both performance and safety requirements.",
    },
    {
      id: 5,
      name: "Aayan Rahman",
      role: "Logistics Lead & Driver",
      number: 44,
      image: "/images/team/aayan.jpeg?height=600&width=400",
      bio: "Aayan serves as both Logistics Lead and primary driver, bringing a unique perspective to vehicle development. Beyond managing our supply chain and operations, he developed our team's web presence and digital infrastructure. His dual role provides valuable insights into both vehicle performance and team management.",
    },
    {
      id: 6,
      name: "Shayaan Azeem",
      role: "Director of Finance & Race Strategy",
      number: 22,
      image: "/images/team/Shayaan.webp?height=600&width=400",
      bio: "As Director of Finance & Race Strategy, Shayaan manages the team's financial operations and develops race strategies. His expertise in financial planning and strategic analysis helps optimize our resource allocation and race performance. He plays a crucial role in securing sponsorships and ensuring the team's fiscal sustainability.",
    },
    {
      id: 7,
      name: "Sam",
      role: "Manufacturing Lead",
      number: 22,
      image: "/images/team/sam.jpg?height=600&width=400",
      bio: "Sam leads our manufacturing operations, overseeing the critical transition from design to production. His expertise in fabrication techniques and quality control ensures our vehicle components meet precise specifications while maintaining efficient production timelines.",
    },
    {
      id: 8,
      name: "Sarim Khan",
      role: "Design",
      number: 22,
      image: "/images/team/sarim.jpg?height=600&width=400",
      bio: "Sarim heads our branding and visual identity initiatives, creating compelling designs that represent our team's professional image. His work, including our distinctive logo, helps establish our team's presence in the competitive racing landscape.",
    },
  ]

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % teamMembers.length)
  }

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + teamMembers.length) % teamMembers.length)
  }

  const toggleMemberBio = (id: number) => {
    setExpandedMember(expandedMember === id ? null : id)
  }

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src="/images/team/race.png?height=800&width=1600" alt="Team photo" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-background/50 to-background" />
      </div>

      <div className="container relative z-10 px-4 md:px-6 mt-20">
        <h1 className="text-6xl md:text-8xl font-bold text-center">The Team</h1>
      </div>
      </section>

      {/* Team Members Carousel */}

      {/* Full Team Grid */}
      <section className="py-20 md:py-32 bg-background">
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
          className="bg-background/5 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 shadow-md hover:shadow-lg hover:bg-background/10"
          >
          <div className="relative h-80">
            <Image
            src={member.image || "/placeholder.svg"}
            alt={member.name}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-xl font-bold">{member.name}</h3>
            <p className="text-primary">{member.role}</p>
            </div>
          </div>
          <div className="p-6">
            <Button 
              variant="outline" 
              className="w-full rounded-full"
              onClick={() => toggleMemberBio(member.id)}
            >
              {expandedMember === member.id ? "Hide Profile" : "View Profile"}
            </Button>
            
            {expandedMember === member.id && (
              <div className="mt-4 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="p-4 bg-background/20 rounded-lg backdrop-blur-sm border border-primary/10">
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </div>
              </div>
            )}
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
          Support Our Journey
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Help Us Make History</h2>
          <p className="text-muted-foreground text-lg">
          We're a new team with big ambitions in the Electrathon racing circuit. To compete at our best,
          we need support from our community and sponsors.
          </p>
          <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">$5K</div>
            <p className="text-muted-foreground">Funding Goal</p>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">20+</div>
            <p className="text-muted-foreground">Team Members</p>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">100%</div>
            <p className="text-muted-foreground">Student-Led</p>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">2024</div>
            <p className="text-muted-foreground">Competition Year</p>
          </div>
          </div>
            <Button
            variant="outline"
            className="mt-4"
            onClick={() => window.location.href = 'https://hcb.hackclub.com/donations/start/woss-electrathon'}
            // Or for external links:
            // onClick={() => window.open('https://example.com', '_blank')}
            >
            Become a Sponsor
            </Button>
        </div>
        <div className="relative h-[400px] rounded-xl overflow-hidden">
          <Image src="/images/team/waterloo.jpg?height=400&width=600" alt="Team celebration" fill className="object-cover" />
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
        <Button 
          size="lg" 
          className="rounded-full"
          onClick={() => window.open('https://discord.gg/EpuWhapy', '_blank')}
        >
          Apply Now
        </Button>
        </div>
      </div>
      </section>
    </div>
  )
}

