"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Search, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Ensure body doesn't scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-background/95 backdrop-blur-sm border-b" : "bg-transparent",
      )}
    >
      <div className="container flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-3">
          <div className="relative h-14 w-14">
            <Image
              src="/images/logo.png"
              alt="Electrathon Racing Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="font-bold text-2xl hidden sm:inline-block">WOSS EVC</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-base font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/team" className="text-base font-medium hover:text-primary transition-colors">
            Team
          </Link>
          <Link href="/car" className="text-base font-medium hover:text-primary transition-colors">
            Car
          </Link>
          <Link href="/sponsors" className="text-base font-medium hover:text-primary transition-colors">
            Sponsors
          </Link>
          <Link href="/races" className="text-base font-medium hover:text-primary transition-colors">
            Races
          </Link>
          <Button variant="ghost" size="icon" className="ml-2">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
        </nav>

        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(true)}>
          <Menu className="h-6 w-6" />
          <span className="sr-only">Menu</span>
        </Button>

        {isMenuOpen && (
          <div className="fixed inset-0 z-[100] bg-black">
            <div className="flex h-20 items-center justify-between px-4 border-b border-gray-800">
              <Link href="/" className="flex items-center space-x-3">
                <div className="relative h-14 w-14">
                  <Image
                    src="/images/logo.png"
                    alt="Electrathon Racing Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="font-bold text-2xl text-white">WOSS EVC</span>
              </Link>
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                <X className="h-6 w-6 text-white" />
                <span className="sr-only">Close</span>
              </Button>
            </div>
            <nav className="flex flex-col p-6">
              <Link
                href="/"
                className="py-4 border-b border-gray-800 text-xl font-medium text-white hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/team"
                className="py-4 border-b border-gray-800 text-xl font-medium text-white hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Team
              </Link>
              <Link
                href="/car"
                className="py-4 border-b border-gray-800 text-xl font-medium text-white hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Car
              </Link>
              <Link
                href="/sponsors"
                className="py-4 border-b border-gray-800 text-xl font-medium text-white hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sponsors
              </Link>
              <Link
                href="/races"
                className="py-4 text-xl font-medium text-white hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Races
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

