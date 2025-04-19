import Image from "next/image"
import { Button } from "@/components/ui/button"

// put this link in somehwere https://hcb.hackclub.com/donations/start/woss-electrathon

export default function SponsorsPage() {
  const sponsors = [
    {
      name: "Altura Power",
      tier: "platinum",
      logo: "/images/sponsers/atura.webp?height=120&width=240",
      description: "Pioneering the future of renewable energy technology and sustainable power solutions.",
      website: "https://aturapower.com/"
    },
    {
      name: "Pretium Engineering",
      tier: "platinum",
      logo: "/images/sponsers/preng.avif?height=120&width=240",
      description: "Leading building scientists and engineers providing expert consulting in building science, mechanical and structural engineering across the complete lifecycle of buildings.",
      website: "https://pretiumengineering.com/"
    },
    {
      name: "Stack Adapt",
      tier: "gold",
      logo: "/images/sponsers/stat.png?height=120&width=240",
      description: "Leading AI-powered programmatic advertising platform enabling brands to execute multi-channel campaigns across native, display, video, and other digital formats with advanced targeting and optimization capabilities.",
    },
    {
      name: "HackClub Bank",
      tier: "gold",
      logo: "/images/sponsers/hcb.png?height=120&width=240",
      description: "Empowering student projects through accessible fiscal sponsorship and financial tools.",
    },
    {
      name: "GitHub",
      tier: "silver",
      logo: "/images/sponsers/git.png?height=120&width=240",
      description: "The world's leading platform for software development and collaboration.",
    },
    {
      name: "University of Waterloo Engineering",
      tier: "bronze",
      logo: "/images/sponsers/images.png?height=120&width=240",
      description: "Canada's largest engineering school, fostering innovation and technical excellence.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src="/images/sponsers/tspmo.png?height=600&width=1600" alt="Sponsors" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-center">
            Our Sponsors
          </h1>
          <p className="mt-4 text-xl text-muted-foreground max-w-[700px] mx-auto text-center">
            The partners who make our racing program possible through their generous support.
          </p>
        </div>
      </section>

      {/* Platinum Sponsors */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Platinum Sponsors
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Major Partners</h2>
            <p className="text-muted-foreground text-lg max-w-[800px] mx-auto">
              These organizations provide significant financial and technical support to our team.
            </p>
          </div>

            <div className="grid md:grid-cols-2 gap-8">
            {sponsors
              .filter((s) => s.tier === "platinum")
              .map((sponsor) => (
              <div
                key={sponsor.name}
                className="bg-black/50 backdrop-blur-sm rounded-xl overflow-hidden border border-primary/20 hover:border-primary/50 transition-colors"
              >
                <div className="p-8 flex flex-col items-center text-center">
                <div className="relative h-24 w-48 mb-6">
                  <Image
                  src={sponsor.logo || "/placeholder.svg"}
                  alt={sponsor.name}
                  fill
                  className="object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold">{sponsor.name}</h3>
                <p className="text-muted-foreground mt-2">{sponsor.description}</p>
                {sponsor.website ? (
                  <Button 
                  variant="outline" 
                  className="mt-6 rounded-full" 
                  asChild
                  >
                  <a href={sponsor.website} target="_blank" rel="noopener noreferrer">
                    Visit Website
                  </a>
                  </Button>
                ) : (
                  <Button variant="outline" className="mt-6 rounded-full" disabled>
                  Visit Website
                  </Button>
                )}
                </div>
              </div>
              ))}
            </div>
        </div>
      </section>

      {/* Gold & Silver Sponsors */}
      <section className="py-20 md:py-32 bg-black">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Gold & Silver Sponsors
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Supporting Partners</h2>
            <p className="text-muted-foreground text-lg max-w-[800px] mx-auto">
              These organizations provide valuable support and resources to our racing program.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {sponsors
              .filter((s) => s.tier === "gold" || s.tier === "silver")
              .map((sponsor) => (
                <div
                  key={sponsor.name}
                  className="bg-background/5 backdrop-blur-sm p-6 rounded-xl space-y-4 hover:bg-background/10 transition-colors"
                >
                  <div className="relative h-16 w-32 mx-auto">
                    <Image
                      src={sponsor.logo || "/placeholder.svg"}
                      alt={sponsor.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-center">{sponsor.name}</h3>
                  <p className="text-muted-foreground text-center text-sm">{sponsor.description}</p>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Bronze Sponsors */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Bronze Sponsors</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Additional Partners</h2>
            <p className="text-muted-foreground text-lg max-w-[800px] mx-auto">
              These organizations contribute to our success through their generous support.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {sponsors
              .filter((s) => s.tier === "bronze")
              .map((sponsor) => (
                <div key={sponsor.name} className="p-4 flex flex-col items-center text-center">
                  <div className="relative h-12 w-24 mb-4">
                    <Image
                      src={sponsor.logo || "/placeholder.svg"}
                      alt={sponsor.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-sm font-medium">{sponsor.name}</h3>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Become a Sponsor */}
      <section className="py-20 md:py-32 bg-primary/10">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Become a Sponsor</h2>
              <p className="text-muted-foreground text-lg">
              Support the next generation of engineers and sustainable technology by sponsoring our Electrathon Racing
              Team. We offer various sponsorship tiers with different benefits.
              </p>
              <div className="space-y-4">
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
                <p>Brand visibility on our vehicle, team uniforms, and website</p>
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
                <p>Opportunities to engage with talented engineering students</p>
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
                <p>Demonstrate your commitment to sustainability and STEM education</p>
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
                <p>Tax benefits for supporting educational initiatives</p>
              </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="rounded-full" asChild>
                <a href="/images/sponsorship.pdf" target="_blank" rel="noopener noreferrer">
                  View Sponsorship Package
                </a>
                </Button>
              <Button size="lg" className="rounded-full" variant="secondary" asChild>
                <a href="https://hcb.hackclub.com/donations/start/woss-electrathon" target="_blank" rel="noopener noreferrer">
                Donate Now
                </a>
              </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/images/team/uw.avif?height=400&width=600"
                alt="Sponsorship opportunities"
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

