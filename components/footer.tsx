import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container px-4 py-12 md:py-16 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative h-10 w-10">
                <Image
                  src="/images/logo.png?height=40&width=40"
                  alt="Electrathon Racing Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-xl">ELECTRATHON</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Powering the future of electric racing through innovation, teamwork, and sustainable technology.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-sm mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/car" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Car
                </Link>
              </li>
              <li>
                <Link href="/sponsors" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Sponsors
                </Link>
              </li>
              <li>
                <Link href="/races" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Races
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-sm mb-4">CONTACT</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Email: team@electrathonracing.com</li>
              <li className="text-sm text-muted-foreground">Phone: (123) 456-7890</li>
              <li className="text-sm text-muted-foreground">Address: 123 School St, City, State</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-sm mb-4">FOLLOW US</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Electrathon Racing Team. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/privacy" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

