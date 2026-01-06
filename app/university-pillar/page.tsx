import { Button } from "@/components/ui/button"
import { GraduationCap } from "lucide-react"
import Image from "next/image"

export default function UniversityPillarPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative w-full flex flex-col items-center justify-center overflow-hidden">
        <div className="relative w-full aspect-[18/5] overflow-hidden">
          <div className="relative w-full h-full">
            <Image
              src="/images/university-pillar/UNI Logos/Header.png"
              alt="AIMS Professional Services - University Pillar"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-[#0056B3]/50 to-black/50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="container mx-auto px-4 flex items-center justify-center text-center">
                <h1 className="text-4xl lg:text-5xl font-bold text-white">University Pillar</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <p className="text-lg leading-relaxed text-gray-700">
              At University Pillar, we take great pride in our successful track record of helping Manufacturing
              Companies achieve maximum production efficiency with the valuable contributions of our skilled Graduates.
              Our program has effectively eliminated the reluctance of Companies to hire University Graduates who may
              lack practical experience in a manufacturing environment. We are thrilled to have transformed Government
              and Private University Graduates to meet the requirements of the Manufacturing sector, working in close
              collaboration with their respective universities.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Our programs at AIMS are valued by seasoned university lecturers and industry veterans with over 10 years
              of work experience in their respective fields, ensuring the highest quality of professional education for
              our students.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
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

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Universities we have partnered</h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12 mb-12">
              {[
                { name: "Rajarata University of Sri Lanka", subtitle: "2021 Online & 2022 Physical Webinar", logo: "/images/university-pillar/UNI Logos/rajarata.png" },
                { name: "University of Moratuwa", subtitle: "2016-2021 Online Webinar", logo: "/images/university-pillar/UNI Logos/Moratu.png" },
                { name: "University of Sri Jayewardenepura", subtitle: "2020-2022 Online Webinar", logo: "/images/university-pillar/UNI Logos/Japura.png" },
              ].map((university, index) => (
                <div key={index} className="flex flex-col items-center justify-end p-4 bg-white h-64">
                  <div className="flex-grow flex items-center justify-center">
                    <Image src={university.logo} alt={`${university.name} logo`} width={120} height={80} objectFit="contain" />
                  </div>
                  <div className="text-center mt-auto">
                    <h3 className="text-lg font-semibold text-gray-900">{university.name}</h3>
                    <p className="text-gray-600 text-sm">{university.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-12 mb-12">
              {[
                { name: "University of Peradeniya", subtitle: "2022 Online Webinar", logo: "/images/university-pillar/UNI Logos/Pera.png" },
                { name: "University of Vavuniya", subtitle: "2021 Online Webinar", logo: "/images/university-pillar/UNI Logos/Vavuniya.png" },
                { name: "SLTC Research University", subtitle: "2021-2022 Online Webinar", logo: "/images/university-pillar/UNI Logos/SLTC logo.png" },
              ].map((university, index) => (
                <div key={index} className="flex flex-col items-center justify-end p-4 bg-white h-64">
                  <div className="flex-grow flex items-center justify-center">
                    <Image src={university.logo} alt={`${university.name} logo`} width={120} height={80} objectFit="contain" />
                  </div>
                  <div className="text-center mt-auto">
                    <h3 className="text-lg font-semibold text-gray-900">{university.name}</h3>
                    <p className="text-gray-600 text-sm">{university.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {[
                { name: "University of Sabaragamuwa", subtitle: "2021 Online Webinar", logo: "/images/university-pillar/UNI Logos/Sabaragamuwa.png" },
                { name: "University of Wayamba", subtitle: "2016-2021 Online Webinar", logo: "/images/university-pillar/UNI Logos/Wayamaba.png" },
                { name: "Professional Development Programs", subtitle: "Industry-University Collaboration", logo: "/images/university-pillar/UNI Logos/Japura.png" },
              ].map((university, index) => (
                <div key={index} className="flex flex-col items-center justify-end p-4 bg-white h-64">
                  <div className="flex-grow flex items-center justify-center">
                    <Image src={university.logo} alt={`${university.name} logo`} width={120} height={80} objectFit="contain" />
                  </div>
                  <div className="text-center mt-auto">
                    <h3 className="text-lg font-semibold text-gray-900">{university.name}</h3>
                    <p className="text-gray-600 text-sm">{university.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
