import {
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle,
  Handshake,
  Users,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { ReactNode } from "react"
import HomeHero from "@/components/home-hero"
import ImpactMetrics from "@/components/impact-metrics"
import CompanyLogoGrid from "@/components/company-logo-grid"
import SectionLabel from "@/components/section-label"
import SuccessStoriesCarousel from "@/components/success-stories-carousel"

const BENEFITS = [
  "Expert-led learning with industry professionals",
  "Comprehensive team motivation and development",
  "24/7 consultation for all your learning needs",
]

function PrimaryLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex min-h-12 items-center rounded-lg bg-[#263f6b] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1e3356] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#263f6b] focus-visible:ring-offset-2"
    >
      {children}
      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
    </Link>
  )
}

export default function HomePage() {
  return (
    <div className="bg-white text-slate-900">
      <HomeHero />

      <section className="bg-white pb-16 pt-4 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="order-1 space-y-6 lg:order-1">
            <div>
              <SectionLabel icon={Building2}>About AIMS</SectionLabel>
              <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl">
                Welcome to the <span className="text-[#263f6b]">APEX Institute</span> of Management Services
              </h1>
            </div>
            <div className="max-w-xl space-y-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              <p>
                AIMS is a leading training and educational partner, helping organizations transform into efficient,
                effective and financially profitable entities.
              </p>
              <p>
                We bridge the gap between operational and managerial level theoretical knowledge and practical
                application. Our vision is to provide practice-focused and professionally oriented education to
                students around the globe.
              </p>
            </div>
            <PrimaryLink href="/about">Learn More About Us</PrimaryLink>
          </div>

          <div className="order-2 lg:order-2">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
              <Image
                src="/images/about/aims-team.webp"
                alt="The AIMS professional team"
                width={500}
                height={300}
                className="h-auto w-full rounded-xl object-cover"
                sizes="(max-width: 1023px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-t border-slate-200 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
            <SectionLabel icon={BarChart3}>Our Impact</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Learning that reaches <span className="text-[#263f6b]">further</span>
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              A growing community, practical programmes and a commitment to recognised quality.
            </p>
          </header>

          <ImpactMetrics />
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="order-1 space-y-7 lg:order-1">
            <div>
              <SectionLabel icon={CheckCircle}>Why Choose AIMS?</SectionLabel>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl">
                Benefits of learning <span className="text-[#263f6b]">from AIMS</span>
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
                Leading the way to professional success with extensive knowledge and practical experience.
              </p>
            </div>

            <ul className="space-y-4">
              {BENEFITS.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-base leading-7 text-slate-700 sm:text-lg">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#263f6b]" aria-hidden="true" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <PrimaryLink href="/contact">Send a Message</PrimaryLink>
          </div>

          <div className="order-2 lg:order-2">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
              <Image
                src="/images/about/benefits-of-learning.webp"
                alt="Benefits of learning with AIMS"
                width={600}
                height={400}
                className="h-auto w-full rounded-xl object-cover"
                sizes="(max-width: 1023px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="mx-auto mb-8 max-w-2xl text-center">
            <SectionLabel icon={Handshake}>Our Partners</SectionLabel>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Trusted by <span className="text-[#263f6b]">leading organizations</span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
              AIMS works with organizations that value practical learning and professional development.
            </p>
          </header>
          <CompanyLogoGrid />
        </div>
      </section>

      <section className="bg-white border-t border-slate-200 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
            <SectionLabel icon={Users}>Success Stories</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Our Success <span className="text-[#263f6b]">Stories</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              A closer look at the people and organizations who are part of the AIMS learning community.
            </p>
          </header>

          <SuccessStoriesCarousel />
        </div>
      </section>
    </div>
  )
}
