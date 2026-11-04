import {
  ArrowUpRight,
  Building2,
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import ContactForm from "@/components/contact-form"
import { Button } from "@/components/ui/button"
import PageHero from "@/components/page-hero"
import SectionLabel from "@/components/section-label"
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_HREF,
  INSTITUTE_ADDRESS,
  MAP_URL,
} from "@/lib/site-contact"

const CONTACT_DETAILS: { label: string; value: string; href: string; icon: LucideIcon; external?: boolean }[] = [
  {
    label: "Visit us",
    value: INSTITUTE_ADDRESS,
    href: MAP_URL,
    icon: MapPin,
    external: true,
  },
  { label: "Call us", value: CONTACT_PHONE, href: CONTACT_PHONE_HREF, icon: Phone },
  { label: "Email us", value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}`, icon: Mail },
]

const SOCIAL_LINKS: { name: string; href: string; icon: LucideIcon | "tiktok" }[] = [
  { name: "Facebook", href: "https://www.facebook.com/apexins.edu", icon: Facebook },
  { name: "TikTok", href: "https://www.tiktok.com/@apex_institute_", icon: "tiktok" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/apexsrilanka/", icon: Linkedin },
  { name: "YouTube", href: "https://www.youtube.com/@aimslk", icon: Youtube },
]

export default function ContactPage() {
  return (
    <div className="bg-white text-slate-900">
      <PageHero title="Contact AIMS" />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:px-8">
          <ContactForm />

          <aside className="space-y-8">
            <section aria-labelledby="contact-information-heading">
              <div className="mb-5">
                <SectionLabel icon={Building2}>Get in touch</SectionLabel>
                <h2 id="contact-information-heading" className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">
                  Contact Information
                </h2>
                <p className="mt-2 text-base leading-7 text-slate-600">Get in touch with our team.</p>
              </div>

              <div className="space-y-3">
                {CONTACT_DETAILS.map(({ label, value, href, icon: Icon, external }) => (
                  <a
                    key={label}
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="group flex min-h-20 items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 transition-colors hover:border-[#263f6b]/40 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#263f6b] focus-visible:ring-offset-2"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#263f6b] text-white">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold text-slate-900">{label}</span>
                      <span className="block break-words text-sm leading-6 text-slate-600">{value}</span>
                    </span>
                  </a>
                ))}
              </div>
            </section>

            <section aria-labelledby="social-links-heading" className="border-t border-slate-200 pt-7">
              <h2 id="social-links-heading" className="text-lg font-semibold text-slate-900">Follow Us</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">Stay updated with our latest programs and news.</p>
              <ul className="mt-4 grid grid-cols-2 gap-3">
                {SOCIAL_LINKS.map(({ name, href, icon: Icon }) => (
                  <li key={name}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`AIMS on ${name} (opens in a new tab)`}
                      className="group flex min-h-14 items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-[#263f6b]/40 hover:bg-slate-50 hover:text-[#263f6b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#263f6b] focus-visible:ring-offset-2"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#263f6b] text-white transition-colors group-hover:bg-[#1e3356]">
                        {Icon === "tiktok" ? (
                          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                          </svg>
                        ) : (
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        )}
                      </span>
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </aside>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="mx-auto mb-10 max-w-3xl text-center">
            <SectionLabel icon={MapPin}>Our Location</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Visit Our <span className="text-[#263f6b]">Institute</span>
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              Located in the heart of Colombo, our institute is equipped with modern facilities to serve your educational needs.
            </p>
          </header>

          <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <iframe
              src={`${MAP_URL}&output=embed`}
              title="Map showing AIMS at No. 546/4, Galle Road, Colombo 03"
              width="100%"
              height="480"
              className="block h-[320px] w-full sm:h-[400px] lg:h-[480px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="flex flex-col gap-3 border-t border-slate-200 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <p className="text-sm text-slate-600">{INSTITUTE_ADDRESS}</p>
              <Button
                asChild
                className="min-h-12 rounded-lg bg-[#263f6b] px-5 font-semibold text-white hover:bg-[#1e3356]"
              >
                <a
                  href={MAP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open directions <ArrowUpRight aria-hidden="true" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
