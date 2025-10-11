"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ChevronDown } from "lucide-react"
import { useState } from "react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  {
    name: "Our Programs",
    href: "#",
    children: [
      { name: "Project Pillar", href: "/project-pillar" },
      { name: "Academic Pillar", href: "/academic-pillar" },
      { name: "University Pillar", href: "/university-pillar" },
    ],
  },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [expanded, setExpanded] = useState(null)

  return (
    <nav className="bg-[#263f6b] border-b border-[#1e3356] sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20 px-4">
          <a href="/" className="flex items-center">
            <img src="/images/aims-logo.png" alt="AIMS Logo" width={120} height={60} className="h-12 w-auto" />
          </a>

          <div className="hidden md:flex items-center justify-center space-x-8 flex-1 px-8">
            {navigation.map((item) =>
              item.children ? (
                <div key={item.name} className="relative group">
                  <button className="flex items-center text-white hover:text-white font-medium transition-all duration-200 focus:outline-none hover:brightness-125">
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                  </button>
                  <div className="absolute hidden group-hover:block bg-[#324e84] mt-2 rounded-lg shadow-lg backdrop-blur-sm">
                    {item.children.map((child) => (
                      <a
                        key={child.name}
                        href={child.href}
                        className="block text-white px-4 py-2 hover:bg-white hover:text-[#263f6b] rounded-lg transition-all duration-200"
                      >
                        {child.name}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-white font-medium transition-all duration-200 relative group hover:brightness-125"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
                </a>
              )
            )}
            <Button
              asChild
              className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <a href="https://validator.apexinstituteedu.com/" target="_blank" rel="noopener noreferrer">
                Certificate Validation
              </a>
            </Button>
            <Button
              asChild
              className="bg-red-600 hover:bg-red-500 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <a href="https://lms.apexinstituteedu.com/" target="_blank" rel="noopener noreferrer">
                LMS
              </a>
            </Button>
          </div>

          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full text-white hover:brightness-125 h-10 w-10">
                  <Menu className="h-8 w-8" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-[#263f6b] border-[#1e3356]">
                <div className="absolute top-4 right-4">
                  <Button variant="ghost" size="icon" className="rounded-full text-white hover:brightness-125">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </Button>
                </div>
                <div className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item, index) =>
                    item.children ? (
                      <div key={item.name} className="flex flex-col">
                        <button
                          onClick={() => setExpanded(expanded === index ? null : index)}
                          className="flex items-center justify-between text-white font-medium px-4 py-2 hover:brightness-125"
                        >
                          {item.name}
                          <ChevronDown
                            className={`h-4 w-4 transition-transform duration-200 ${
                              expanded === index ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {expanded === index && (
                          <div className="pl-6">
                            {item.children.map((child) => (
                              <a
                                key={child.name}
                                href={child.href}
                                className="block text-white hover:text-[#263f6b] hover:bg-white font-medium py-2 px-2 rounded-lg transition-all duration-200"
                                onClick={() => setIsOpen(false)}
                              >
                                {child.name}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-white hover:text-[#263f6b] hover:bg-white font-medium py-3 px-4 rounded-lg transition-all duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </a>
                    )
                  )}
                  <Button
                    asChild
                    className="bg-blue-600 hover:bg-blue-500 text-white mt-4 rounded-full"
                    onClick={() => setIsOpen(false)}
                  >
                    <a href="https://validator.apexinstituteedu.com/" target="_blank" rel="noopener noreferrer">
                      Certificate Validation
                    </a>
                  </Button>
                  <Button
                    asChild
                    className="bg-red-600 hover:bg-red-500 text-white mt-4 rounded-full"
                    onClick={() => setIsOpen(false)}
                  >
                    <a href="https://lms.apexinstituteedu.com/" target="_blank" rel="noopener noreferrer">
                      LMS
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
