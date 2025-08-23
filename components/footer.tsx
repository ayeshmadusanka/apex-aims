import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Image
              src="/images/aims-logo.png"
              alt="AIMS Logo"
              width={150}
              height={75}
              className="h-16 w-auto bg-white p-2 rounded"
            />
            <p className="text-gray-300">
              Apex Institute of Management Services - Empowering future leaders through excellence in management
              education.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="ghost" className="text-gray-300 hover:text-white hover:bg-blue-600">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-gray-300 hover:text-white hover:bg-blue-600">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-gray-300 hover:text-white hover:bg-blue-600">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-gray-300 hover:text-white hover:bg-red-600">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/certificate-validation" className="text-gray-300 hover:text-white transition-colors">
                  Certificate Validation
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Admissions
                </Link>
              </li>
            </ul>
          </div>

          {/* Pillars */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Pillars</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/project-pillar" className="text-gray-300 hover:text-white transition-colors">
                  Project Pillar
                </Link>
              </li>
              <li>
                <Link href="/academic-pillar" className="text-gray-300 hover:text-white transition-colors">
                  Academic Pillar
                </Link>
              </li>
              <li>
                <Link href="/university-pillar" className="text-gray-300 hover:text-white transition-colors">
                  University Pillar
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-red-500" />
                <span className="text-gray-300">123 Education Street, City, State 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-500" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-red-500" />
                <span className="text-gray-300">info@aims.edu</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-300">© 2024 AIMS - Apex Institute of Management Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
