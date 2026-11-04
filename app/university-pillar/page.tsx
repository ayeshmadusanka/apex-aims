import Image from "next/image";
import { PillarHero } from "@/components/pillar-hero";

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

      <section className="bg-white border-t border-slate-200 py-14 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl space-y-5 text-base leading-8 text-gray-700 sm:text-lg">
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

      <section className="py-14 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-8 max-w-6xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">Our collaborations</p>
            <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">Universities we have partnered</h2>
          </div>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {universities.map((university) => (
              <article
                key={university.name}
                className="flex min-h-64 flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-5 flex h-28 items-center justify-center rounded-xl bg-gray-50 p-4">
                  <Image
                    src={university.logo}
                    alt={`${university.name} logo`}
                    width={220}
                    height={120}
                    sizes="220px"
                    className="max-h-full w-auto object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold leading-snug text-gray-900">{university.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{university.subtitle}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
