"use client"

import { useState, useEffect, Suspense } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { Canvas, useLoader } from "@react-three/fiber"
import { OrbitControls, Html } from "@react-three/drei"
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js"

function Model({ path }: { path: string }) {
  const gltf = useLoader(GLTFLoader, path)
  return (
    <>
      <primitive object={gltf.scene} scale={2.0} />
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <directionalLight position={[-5, -5, -5]} intensity={0.5} />
    </>
  )
}

function LoadingIndicator() {
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center">
        <div className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin mb-4"></div>
        <p className="text-primary font-medium">Loading 3D Model...</p>
      </div>
    </Html>
  )
}

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
    <div className="min-h-screen">
      {/* Hero Section - Removed pt-16 to allow image to extend under navbar */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/cars/IMG_0355.jpg"
            alt="Electrathon Car"
            fill
            priority
            className="object-cover"
          />
          {/* Added gradient at top to ensure navbar text remains readable */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-background/40 to-background" />
        </div>

        <div className="container relative z-10 px-4 md:px-6 mt-20">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="text-8xl md:text-9xl font-bold text-primary/50 opacity-100">WarRig X1</div>
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
              Every component of our WarRig X1 has been carefully designed and tested for maximum performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Dimensions</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Length</p>
                    <p className="text-lg font-medium">80 inches</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Width</p>
                    <p className="text-lg font-medium">23 inches</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Height</p>
                    <p className="text-lg font-medium">48 inches</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Frame Weight</p>
                    <p className="text-lg font-medium">30 pounds</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Performance</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Top Speed</p>
                    <p className="text-lg font-medium">∞ mph</p>
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
                    <p className="text-lg font-medium">12V Lithium-ion</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Battery Capacity</p>
                    <p className="text-lg font-medium">48 AH</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Motor Type</p>
                    <p className="text-lg font-medium">BDC Hub Motor</p>
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
      {/* Interactive 3D Model Section */}
      <section id="interactive" className="py-20 md:py-32 bg-background/50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Interactive Model
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Explore the WarRig X1
            </h2>
            <p className="text-muted-foreground text-lg max-w-[800px] mx-auto">
              Interact with our 3D model to examine every detail of the vehicle.
            </p>
          </div>

          <div className="h-[600px] w-full rounded-xl overflow-hidden bg-black/5">
            <Canvas camera={{ position: [0, 0, 3], fov: 75 }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <Suspense fallback={<LoadingIndicator />}>
                <Model path="/images/cars/Assembly 1.gltf" />
              </Suspense>
              <OrbitControls 
                enableZoom={true}
                minDistance={2}
                maxDistance={8}
                enablePan={true}
              />
            </Canvas>
          </div>
        </div>
      </section>

      {/* Next Generation Teaser */}
      <section id="future" className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Looking Ahead</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">The Future: WarRig X2</h2>
          <p className="text-muted-foreground text-lg">
            Our engineering team is already working on the next generation of our Electrathon vehicle, with
            ambitious goals to push the boundaries even further.
          </p>
            <ul className="space-y-2">
            <li className="flex items-center">
            <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
            <span>15% weight reduction through frame redesign</span>
            </li>
            <li className="flex items-center">
            <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
            <span>Improved aerodynamics with active elements</span>
            </li>
            <li className="flex items-center">
            <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
            <span>Enhanced motor efficiency for better range</span>
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

