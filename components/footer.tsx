import { ArrowUpRight, Facebook, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react"
import Image from "next/image"

const footerLinkClass = "text-sm leading-6 text-slate-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#172b4d]"

const socialLinks = [
  { href: "https://www.facebook.com/apexins.edu", label: "Facebook", Icon: Facebook },
  { href: "https://www.tiktok.com/@apex_institute_", label: "TikTok", Icon: null },
  { href: "https://www.linkedin.com/in/apexsrilanka/", label: "LinkedIn", Icon: Linkedin },
  { href: "https://www.youtube.com/@aimslk", label: "YouTube", Icon: Youtube },
]

export default function Footer() {
  return (
    <footer className="bg-[#172b4d] text-white">
      <div className="container mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 gap-x-8 gap-y-9 sm:grid-cols-2 xl:grid-cols-5 xl:gap-y-0">
          <div className="space-y-5 sm:col-span-2 xl:col-span-1">
            <a href="/" aria-label="AIMS home" className="inline-flex rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70">
              <Image
                src="/images/about/aims-logo.png"
                alt="Apex Institute of Management Services"
                width={270}
                height={97}
                className="h-14 w-auto object-contain sm:h-16"
              />
            </a>
            <p className="max-w-sm text-sm leading-6 text-slate-300">
              Apex Institute of Management Services empowers future leaders through practical, career-focused management education.
            </p>
            <nav aria-label="Social media" className="flex items-center gap-2">
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`AIMS on ${label}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-slate-200 transition-colors hover:border-white/50 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                >
                  {Icon ? <Icon className="h-[18px] w-[18px]" aria-hidden="true" /> : (
                    <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                  )}
                </a>
              ))}
            </nav>
            <hr className="border-white/20 sm:col-span-2 xl:hidden" />
          </div>

          <nav aria-label="Explore">
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-white">Explore</h2>
            <ul className="space-y-2.5">
              <li><a href="/" className={footerLinkClass}>Home</a></li>
              <li><a href="/about" className={footerLinkClass}>About AIMS</a></li>
              <li><a href="/contact" className={footerLinkClass}>Contact</a></li>
            </ul>
          </nav>

          <nav aria-label="Our programs">
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-white">Our Programs</h2>
            <ul className="space-y-2.5">
              <li><a href="/academic-pillar" className={footerLinkClass}>Academic Pillar</a></li>
              <li><a href="/university-pillar" className={footerLinkClass}>University Pillar</a></li>
              <li><a href="/project-pillar" className={footerLinkClass}>Project Pillar</a></li>
            </ul>
          </nav>

          <nav aria-label="Student services">
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-white">Student Services</h2>
            <ul className="space-y-2.5">
              <li>
                <a href="https://payment.apexinstituteedu.com" target="_blank" rel="noopener noreferrer" className={`${footerLinkClass} inline-flex items-center gap-1`}>
                  Online Payment <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="https://validator.apexinstituteedu.com/" target="_blank" rel="noopener noreferrer" className={`${footerLinkClass} inline-flex items-center gap-1`}>
                  Certificate Validation <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="https://lms.apexinstituteedu.com/" target="_blank" rel="noopener noreferrer" className={`${footerLinkClass} inline-flex items-center gap-1`}>
                  Learning Portal (LMS) <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </nav>

          <address className="not-italic">
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-white">Visit or Contact</h2>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3 text-sm leading-6 text-slate-300">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-sky-200" aria-hidden="true" />
                <span>No. 546/4, Galle Road,<br />Colombo 03, Sri Lanka</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-sky-200" aria-hidden="true" />
                <a href="tel:+94777245172" className={footerLinkClass}>077 724 5172</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-sky-200" aria-hidden="true" />
                <a href="mailto:info@apexinstituteedu.com" className={`${footerLinkClass} break-all`}>info@apexinstituteedu.com</a>
              </li>
            </ul>
          </address>
        </div>

        <hr className="my-9 border-white/25 sm:my-10" />

        <div className="flex flex-col gap-5 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p className="text-xs leading-5 text-slate-300 sm:text-sm">
            &copy; {new Date().getFullYear()} AIMS · Apex Institute of Management Services. All rights reserved.
          </p>
          <nav aria-label="Legal policies" className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:justify-end">
            <a href="/privacy-policy" className={footerLinkClass}>Privacy Policy</a>
            <a href="/terms-and-conditions" className={footerLinkClass}>Terms and Conditions</a>
            <a href="/refund-policy" className={footerLinkClass}>Refund Policy</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

