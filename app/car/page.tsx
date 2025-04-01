"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown, Plus } from "lucide-react"

export default function CarPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const sections = document.querySelectorAll("section[id]")

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100
        const sectionHeight = (section as HTMLElement).offsetHeight

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/cars/IMG_0355.jpg"
            alt="Electrathon Car"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="text-8xl md:text-9xl font-bold text-primary/50 opacity-100">E-VOLT X1</div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              ENGINEERED FOR EFFICIENCY
            </h1>
            <p className="text-xl text-muted-foreground max-w-[700px] mx-auto">
              Our latest Electrathon vehicle combines cutting-edge technology with efficient design to maximize range
              and speed.
            </p>
          </div>
        </div>

        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <Button variant="ghost" size="icon" className="rounded-full" onClick={() => scrollToSection("specs")}>
            <ChevronDown className="h-8 w-8" />
          </Button>
        </div>
      </section>

      {/* Car Specs Section */}
      <section id="specs" className="py-20 md:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Specifications</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Technical Details</h2>
            <p className="text-muted-foreground text-lg max-w-[800px] mx-auto">
              Every component of our E-VOLT X1 has been carefully designed and tested for maximum performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Dimensions</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Length</p>
                    <p className="text-lg font-medium">96 inches</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Width</p>
                    <p className="text-lg font-medium">36 inches</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Height</p>
                    <p className="text-lg font-medium">30 inches</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Weight</p>
                    <p className="text-lg font-medium">175 pounds</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Performance</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Top Speed</p>
                    <p className="text-lg font-medium">45 mph</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Range</p>
                    <p className="text-lg font-medium">85 miles</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Acceleration (0-30 mph)</p>
                    <p className="text-lg font-medium">6.2 seconds</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Drag Coefficient</p>
                    <p className="text-lg font-medium">0.15</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Electrical System</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Battery Type</p>
                    <p className="text-lg font-medium">Lithium-ion</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Battery Capacity</p>
                    <p className="text-lg font-medium">2.5 kWh</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Motor Type</p>
                    <p className="text-lg font-medium">BLDC Hub Motor</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Motor Power</p>
                    <p className="text-lg font-medium">3.5 kW</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[500px] rounded-xl overflow-hidden">
              <Image
                src="/images/cars/sigma.png?height=600&width=600"
                alt="E-VOLT X1 Technical Drawing"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Car Features */}
      <section id="features" className="py-20 md:py-32 bg-black">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Key Features</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Innovative Design Elements</h2>
            <p className="text-muted-foreground text-lg max-w-[800px] mx-auto">
              Explore the cutting-edge features that make our E-VOLT X1 a leader in Electrathon racing.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="relative h-[600px] rounded-xl overflow-hidden border-2 border-primary/20">
              <Image src="/placeholder.svg?height=600&width=800" alt="E-VOLT X1" fill className="object-contain" />

              {/* Interactive Hotspots */}
              <div className="absolute top-1/4 left-1/4 group">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-primary/20 border-primary hover:bg-primary/30"
                >
                  <Plus className="h-5 w-5" />
                </Button>
                <div className="absolute left-full ml-4 top-0 w-64 p-4 bg-background/90 backdrop-blur-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <h4 className="font-bold">Aerodynamic Shell</h4>
                  <p className="text-sm text-muted-foreground">
                    Custom-designed carbon fiber shell with optimized airflow channels reduces drag by 25% compared to
                    our previous model.
                  </p>
                </div>
              </div>

              <div className="absolute top-1/3 right-1/4 group">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-primary/20 border-primary hover:bg-primary/30"
                >
                  <Plus className="h-5 w-5" />
                </Button>
                <div className="absolute right-full mr-4 top-0 w-64 p-4 bg-background/90 backdrop-blur-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <h4 className="font-bold">Battery Management System</h4>
                  <p className="text-sm text-muted-foreground">
                    Advanced BMS with thermal regulation ensures optimal battery performance and extends range by up to
                    15%.
                  </p>
                </div>
              </div>

              <div className="absolute bottom-1/4 left-1/3 group">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-primary/20 border-primary hover:bg-primary/30"
                >
                  <Plus className="h-5 w-5" />
                </Button>
                <div className="absolute left-full ml-4 bottom-0 w-64 p-4 bg-background/90 backdrop-blur-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <h4 className="font-bold">Regenerative Braking</h4>
                  <p className="text-sm text-muted-foreground">
                    Our custom regenerative braking system recovers up to 20% of energy during deceleration and braking.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Timeline */}
      <section id="development" className="py-20 md:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Development Process
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">From Concept to Competition</h2>
            <p className="text-muted-foreground text-lg max-w-[800px] mx-auto">
              Follow the journey of our E-VOLT X1 from initial design to race-ready vehicle.
            </p>
          </div>

          <div
            className={`max-w-3xl mx-auto space-y-12 transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
          >
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <span className="font-bold text-primary-foreground">1</span>
                </div>
                <div className="h-full w-0.5 bg-primary/30 mt-2"></div>
              </div>
              <div className="pt-1 pb-8">
                <h3 className="text-xl font-bold">Concept & Design</h3>
                <p className="text-muted-foreground mt-2">
                  Our engineering team spent 3 months developing the initial concept, using computational fluid dynamics
                  to optimize aerodynamics.
                </p>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="relative h-40 rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=160&width=240"
                      alt="Design sketch"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-40 rounded-lg overflow-hidden">
                    <Image src="/placeholder.svg?height=160&width=240" alt="CAD model" fill className="object-cover" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <span className="font-bold text-primary-foreground">2</span>
                </div>
                <div className="h-full w-0.5 bg-primary/30 mt-2"></div>
              </div>
              <div className="pt-1 pb-8">
                <h3 className="text-xl font-bold">Prototyping</h3>
                <p className="text-muted-foreground mt-2">
                  We built a 1/4 scale model for wind tunnel testing, followed by a full-size prototype to validate our
                  design choices.
                </p>
                <div className="mt-4 relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=600"
                    alt="Prototype testing"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <span className="font-bold text-primary-foreground">3</span>
                </div>
                <div className="h-full w-0.5 bg-primary/30 mt-2"></div>
              </div>
              <div className="pt-1 pb-8">
                <h3 className="text-xl font-bold">Construction</h3>
                <p className="text-muted-foreground mt-2">
                  The final vehicle was constructed over 4 months, with our team fabricating the carbon fiber shell and
                  assembling all components.
                </p>
                <div className="mt-4 grid grid-cols-3 gap-4">
                  <div className="relative h-32 rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=128&width=128"
                      alt="Construction phase 1"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-32 rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=128&width=128"
                      alt="Construction phase 2"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-32 rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=128&width=128"
                      alt="Construction phase 3"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <span className="font-bold text-primary-foreground">4</span>
                </div>
              </div>
              <div className="pt-1">
                <h3 className="text-xl font-bold">Testing & Optimization</h3>
                <p className="text-muted-foreground mt-2">
                  We conducted extensive track testing, collecting data to fine-tune our systems and optimize
                  performance for race conditions.
                </p>
                <div className="mt-4 relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=600"
                    alt="Track testing"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Stats */}
      <section id="performance" className="py-20 md:py-32 bg-primary/10">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Performance</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Race Results</h2>
            <p className="text-muted-foreground text-lg max-w-[800px] mx-auto">
              The E-VOLT X1 has proven its capabilities on the track with impressive performance metrics.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-background rounded-xl p-6 space-y-2">
              <h3 className="text-5xl font-bold text-primary">85</h3>
              <p className="text-muted-foreground">Miles Per Charge</p>
            </div>
            <div className="bg-background rounded-xl p-6 space-y-2">
              <h3 className="text-5xl font-bold text-primary">45</h3>
              <p className="text-muted-foreground">MPH Top Speed</p>
            </div>
            <div className="bg-background rounded-xl p-6 space-y-2">
              <h3 className="text-5xl font-bold text-primary">1st</h3>
              <p className="text-muted-foreground">State Championship</p>
            </div>
            <div className="bg-background rounded-xl p-6 space-y-2">
              <h3 className="text-5xl font-bold text-primary">2nd</h3>
              <p className="text-muted-foreground">National Finals</p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Generation Teaser */}
      <section id="future" className="py-20 md:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Looking Ahead</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">The Future: E-VOLT X2</h2>
              <p className="text-muted-foreground text-lg">
                Our engineering team is already working on the next generation of our Electrathon vehicle, with
                ambitious goals to push the boundaries even further.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                  <span>20% weight reduction through advanced composites</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                  <span>Improved aerodynamics with active elements</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                  <span>Next-gen battery technology for 100+ mile range</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                  <span>Advanced telemetry and race strategy software</span>
                </li>
              </ul>
              <Button className="rounded-full">Join Our Development Team</Button>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden bg-gradient-to-r from-background to-primary/20 flex items-center justify-center">
              <div className="text-6xl font-bold text-primary/20">COMING SOON</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

