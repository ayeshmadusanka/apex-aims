import { Award, Globe, Target, Users } from "lucide-react"
import Image from "next/image"
import PageHero from "@/components/page-hero"
import SectionLabel from "@/components/section-label"

const PRINCIPLES = [
  {
    title: "Our Vision",
    image: "/images/about/2 Mission Vision/Vission.png",
    description:
      "Our vision is to become the number one in empowering our students by providing the right guidance globally. Our vision is not about the quantity, but the quality as clearly manifested by our adherence to best standards and being up-to-date in our resources. We strive to be the leader in providing professional training and education in the manufacturing sector in the world.",
  },
  {
    title: "Our Mission",
    image: "/images/about/2 Mission Vision/Mission.png",
    description:
      "Grooming resourceful professionals while inculcating the spirit of scientific thinking in them to avail themselves to survive and excel in the manufacturing and service sectors is our mission. Our end product: dynamic individuals will be versatile additions to their organizations in both local and international corporate ambiance. Our well-experienced team is ready to facilitate our students' pursuit of excellence in accordance with their aptitude and aspirations.",
  },
]

export default function AboutPage() {
  return (
    <div className="bg-white text-slate-900">
      <PageHero title="About AIMS" />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="order-2 space-y-6 lg:order-1">
            <div>
              <SectionLabel icon={Award}>Who We Are</SectionLabel>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl">
                Our <span className="text-[#263f6b]">Story</span>
              </h2>
            </div>
            <div className="space-y-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              <p>
                Since its inception in 2007, APEX INSTITUTE OF MANAGEMENT SERVICES (AIMS) has come a long way to
                secure its reputation not only in Sri Lanka but also globally as a distinguished training and
                educational partner specifically catering to the necessities of students from all walks in their
                professions such as school leavers, graduates, professionals holding executive and managerial
                positions as well as corporates in the manufacturing and service sectors who placed their trust on us.
              </p>
              <p>
                AIMS is registered under the NAITA since 2010 and ISO 9001:2015 certified for providing professional
                education. In our proud journey, we have focused on developing integrated solutions to bridge the gap
                between operational and managerial level theoretical knowledge and practical approaches.
              </p>
              <p>
                Till date we have successfully guided around 2000+ professionals in the manufacturing as well as service
                sector and helped graduates and other novices to the manufacturing and service fields by directing them
                to employment opportunities with our discerning partners and liaisons worldwide. Additionally, we
                observe ethical, moral and professional values to maintain high standards in our work.
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
              <Image
                src="/images/about/1 Global Branches Photo/Global Photo.png"
                alt="AIMS global team and professional network"
                width={600}
                height={400}
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="h-auto w-full rounded-xl object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
            <SectionLabel icon={Target}>Vision &amp; Mission</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Our Guiding <span className="text-[#263f6b]">Principles</span>
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              The foundation of our commitment to excellence and transformative education
            </p>
          </header>

          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2 lg:gap-8">
            {PRINCIPLES.map(({ title, image, description }) => (
              <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <div className="mb-6 flex items-center gap-4">
                  <Image src={image} alt="" width={64} height={64} className="h-16 w-16 object-contain" />
                  <h3 className="text-2xl font-semibold tracking-tight text-[#263f6b] sm:text-3xl">{title}</h3>
                </div>
                <p className="text-base leading-7 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <header className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
            <SectionLabel icon={Users}>Our Team</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Our <span className="text-[#263f6b]">Team</span>
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              Meet the dedicated professionals who make our mission possible
            </p>
          </header>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
            <Image
              src="/images/about/3 Team Photo/AIMS TEAM.png"
              alt="AIMS team"
              width={800}
              height={500}
              sizes="(max-width: 768px) 100vw, 80vw"
              className="h-auto w-full rounded-xl object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
            <SectionLabel icon={Globe}>Global Presence</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Branches &amp; <span className="text-[#263f6b]">International</span> Platform
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              Expanding our reach through physical branches and online learning platforms
            </p>
          </header>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
            <Image
              src="/images/about/4 Branches & International Online Platform/Branches & International Online Platform.png"
              alt="AIMS global branches and international online platform"
              width={1200}
              height={500}
              sizes="(max-width: 768px) 100vw, 92vw"
              className="h-auto w-full rounded-xl object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
