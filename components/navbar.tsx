"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
// Removed Next.js specific Image component, using standard <img> tag instead.
// import Image from "next/image"
// Removed Next.js specific Link component, using standard <a> tag instead.
// import Link from "next/link"
import { useState } from "react"

const navigation = [
  { name: "About Us", href: "/about" },
  { name: "Project Pillar", href: "/project-pillar" },
  { name: "Academic Pillar", href: "/academic-pillar" },
  { name: "University Pillar", href: "/university-pillar" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-[#263f6b] border-b border-[#1e3356] sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20 px-4">
          {/* Logo */}
          {/* Replaced Next.js Link with standard <a> tag */}
          <a href="/" className="flex items-center">
            {/* Replaced Next.js Image with standard <img> tag */}
            <img src="/images/aims-logo.png" alt="AIMS Logo" width={120} height={60} className="h-12 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center space-x-8 flex-1 px-8">
            {navigation.map((item) => (
              // Replaced Next.js Link with standard <a> tag
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-blue-300 font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
            {/* Certificate Validation Button for Desktop */}
            <Button
              asChild
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Replaced Next.js Link with standard <a> tag */}
              <a href="/certificate-validation">
                Certificate Validation
              </a>
            </Button>
            <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              LMS
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full text-white hover:bg-navy-800">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-[#263f6b] border-[#1e3356]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    // Replaced Next.js Link with standard <a> tag
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-white hover:text-blue-300 font-medium py-3 px-4 rounded-lg hover:bg-[#1e3356] transition-all duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                  {/* Certificate Validation Button for Mobile */}
                  <Button
                    asChild
                    className="bg-blue-600 hover:bg-blue-700 text-white mt-4 rounded-full"
                    onClick={() => setIsOpen(false)}
                  >
                    {/* Replaced Next.js Link with standard <a> tag */}
                    <a href="/certificate-validation">
                      Certificate Validation
                    </a>
                  </Button>
                  <Button className="bg-red-600 hover:bg-red-700 text-white mt-4 rounded-full">LMS</Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
