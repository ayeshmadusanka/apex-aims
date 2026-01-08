import { Button } from "@/components/ui/button"
import { Facebook, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react"
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
              <a href="https://www.facebook.com/apexins.edu" target="_blank" rel="noopener noreferrer">
                <Button size="icon" variant="ghost" className="text-gray-300 hover:text-white hover:bg-blue-600">
                  <Facebook className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://www.tiktok.com/@apex_institute_" target="_blank" rel="noopener noreferrer">
                <Button size="icon" variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-700">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </Button>
              </a>
               <a href="https://www.linkedin.com/in/apexsrilanka/" target="_blank" rel="noopener noreferrer">
                <Button size="icon" variant="ghost" className="text-gray-300 hover:text-white hover:bg-blue-700">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://www.youtube.com/@aimslk" target="_blank" rel="noopener noreferrer">
                <Button size="icon" variant="ghost" className="text-gray-300 hover:text-white hover:bg-red-600">
                  <Youtube className="h-5 w-5" />
                </Button>
              </a>
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
                <a href="/academic-pillar" className="text-gray-300 hover:text-white transition-colors">
                  Academic Pillar
                </a>
              </li>
              <li>
                <a href="/university-pillar" className="text-gray-300 hover:text-white transition-colors">
                  University Pillar
                </a>
              </li>
              <li>
                <a href="/project-pillar" className="text-gray-300 hover:text-white transition-colors">
                  Project Pillar
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
                <Phone className="h-5 w-5 text-red-500" />
                <a
                  href="tel:+94777245172"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  077 724 5172
                </a>
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
