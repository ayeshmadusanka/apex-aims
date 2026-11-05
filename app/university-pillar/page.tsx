import Image from "next/image";
import { GraduationCap, Handshake } from "lucide-react";
import { PillarHero } from "@/components/pillar-hero";
import SectionLabel from "@/components/section-label";

const universities = [
  { name: "Rajarata University of Sri Lanka", subtitle: "2021 Online & 2022 Physical Webinar", logo: "/images/university-pillar/logos/rajarata.webp" },
  { name: "University of Moratuwa", subtitle: "2016-2021 Online Webinar", logo: "/images/university-pillar/logos/moratuwa.webp" },
  { name: "University of Sri Jayewardenepura", subtitle: "2020-2022 Online Webinar", logo: "/images/university-pillar/logos/sri-jayewardenepura.webp" },
  { name: "University of Peradeniya", subtitle: "2022 Online Webinar", logo: "/images/university-pillar/logos/peradeniya.webp" },
  { name: "University of Vavuniya", subtitle: "2021 Online Webinar", logo: "/images/university-pillar/logos/vavuniya.webp" },
  { name: "SLTC Research University", subtitle: "2021-2022 Online Webinar", logo: "/images/university-pillar/logos/sltc-research-university.webp" },
  { name: "University of Sabaragamuwa", subtitle: "2021 Online Webinar", logo: "/images/university-pillar/logos/sabaragamuwa.webp" },
  { name: "University of Wayamba", subtitle: "2016-2021 Online Webinar", logo: "/images/university-pillar/logos/wayamba.webp" },
  { name: "Professional Development Programs", subtitle: "Industry-University Collaboration", logo: "/images/university-pillar/logos/sri-jayewardenepura.webp" },
];

export default function UniversityPillarPage() {
  return (
    <div className="min-h-screen bg-white">
      <PillarHero
        image="/images/university-pillar/logos/header.webp"
        alt="AIMS Professional Services - University Pillar"
        title="University Pillar"
      />

      <section className="border-t border-slate-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <header className="mx-auto mb-8 max-w-3xl text-center">
            <SectionLabel icon={GraduationCap}>Graduate pathways</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Connecting <span className="text-[#263f6b]">graduates and industry</span>
            </h2>
          </header>
          <div className="mx-auto max-w-3xl space-y-5 text-base leading-8 text-slate-600 sm:text-lg">
            <p>
              At University Pillar, we take great pride in our successful track record of helping Manufacturing
              Companies achieve maximum production efficiency with the valuable contributions of our skilled Graduates.
              Our program has effectively eliminated the reluctance of Companies to hire University Graduates who may
              lack practical experience in a manufacturing environment. We are thrilled to have transformed Government
              and Private University Graduates to meet the requirements of the Manufacturing sector, working in close
              collaboration with their respective universities.
            </p>
            <p>
              Our programs at AIMS are valued by seasoned university lecturers and industry veterans with over 10 years
              of work experience in their respective fields, ensuring the highest quality of professional education for
              our students.
            </p>
            <p>
              At our organization, we're committed to helping individuals and organizations maximize their productivity
              and effectiveness. As part of this mission, we've conducted numerous webinar series at various
              universities, aimed at expanding knowledge and promoting awareness about the importance of productivity in
              organizational success. Our webinars are designed to equip participants with practical tools and
              strategies that they can immediately apply in their daily work, as well as to foster a mindset of
              continuous improvement and learning. Join us for our upcoming webinars and discover how you can achieve
              your goals and unlock your full potential!
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
            <SectionLabel icon={Handshake}>Our Collaborations</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Universities we have <span className="text-[#263f6b]">partnered</span>
            </h2>
          </header>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {universities.map((university) => (
              <article
                key={university.name}
                className="group flex min-h-64 flex-col rounded-xl border border-slate-200 bg-white p-6 transition-shadow duration-200 hover:shadow-md"
              >
                <div className="mb-5 flex h-28 items-center justify-center border-b border-slate-100 pb-5">
                  <Image
                    src={university.logo}
                    alt={`${university.name} logo`}
                    width={220}
                    height={120}
                    sizes="220px"
                    loading="lazy"
                    className="max-h-full w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
                  />
                </div>
                <h3 className="text-lg font-semibold leading-snug text-slate-900">{university.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{university.subtitle}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
