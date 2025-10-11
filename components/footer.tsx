import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Image
              src="/images/aims-logo.png"
              alt="AIMS Logo"
              width={150}
              height={75}
              className="h-16 w-auto"
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
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-gray-300 hover:text-white hover:bg-blue-600">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-gray-300 hover:text-white hover:bg-red-600">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-gray-300 hover:text-white hover:bg-red-600">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="https://validator.apexinstituteedu.com/"
                  className="text-gray-300 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Certificate Validation
                </a>
              </li>
              <li>
                <a
                  href="https://lms.apexinstituteedu.com/"
                  className="text-gray-300 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LMS
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Our Programs</h3>
            <ul className="space-y-2">
              <li>
                <a href="/project-pillar" className="text-gray-300 hover:text-white transition-colors">
                  Project Pillar
                </a>
              </li>
              <li>
                <a href="/academic-pillar" className="text-gray-300 hover:text-white transition-colors">
                  Academic Pillar
                </a>
              </li>
              <li>
                <a href="/university-pillar" className="text-gray-300 hover:text-white transition-colors">
                  University Pillar
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-red-500 mt-1" />
                <span className="text-gray-300">
                  No 546/4, Galle Road<br />
                  Colombo 03<br />
                  Sri Lanka
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-500" />
                <span className="text-gray-300">077 724 5172</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-red-500" />
                <a
                  href="mailto:info@apexinstituteedu.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  info@apexinstituteedu.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-300">© {new Date().getFullYear()} AIMS - Apex Institute of Management Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
