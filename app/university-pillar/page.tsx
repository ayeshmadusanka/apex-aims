import { Button } from "@/components/ui/button"
import { GraduationCap } from "lucide-react"
import Image from "next/image" // Make sure to import Image

export default function UniversityPillarPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb Section */}
      <section className="relative py-20 overflow-hidden" style={{backgroundImage: 'url("/images/hero/breadcrumb.png")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="mx-auto w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6">
            <GraduationCap className="h-10 w-10 text-red-600" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">University Pillar</h1>
          <p className="text-lg lg:text-xl text-white/95 max-w-4xl mx-auto leading-relaxed">
            Strong university partnerships and accreditations ensuring globally recognized qualifications
          </p>
        </div>
      </section>

      {/* Track Record Section */}
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

      {/* University Partners Logos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Universities we have partnered</h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12 mb-12">
              {[
                {
                  name: "Rajarata University of Sri Lanka",
                  subtitle: "2021 Online & 2022 Physical Webinar",
                  logo: "/images/university-pillar/UNI Logos/rajarata.png",
                },
                {
                  name: "University of Moratuwa",
                  subtitle: "2016-2021 Online Webinar",
                  logo: "/images/university-pillar/UNI Logos/Moratu.png",
                },
                {
                  name: "University of Sri Jayewardenepura",
                  subtitle: "2020-2022 Online Webinar",
                  logo: "/images/university-pillar/UNI Logos/Japura.png",
                },
              ].map((university, index) => (
                <div key={index} className="flex flex-col items-center justify-end p-4 bg-white h-64"> {/* Removed border and shadow classes */}
                  <div className="flex-grow flex items-center justify-center">
                    <Image
                      src={university.logo}
                      alt={`${university.name} logo`}
                      width={120}
                      height={80}
                      objectFit="contain"
                    />
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
                {
                  name: "University of Peradeniya",
                  subtitle: "2022 Online Webinar",
                  logo: "/images/university-pillar/UNI Logos/Pera.png",
                },
                {
                  name: "University of Vavuniya",
                  subtitle: "2021 Online Webinar",
                  logo: "/images/university-pillar/UNI Logos/Vavuniya.png",
                },
                {
                  name: "SLTC Research University",
                  subtitle: "2021-2022 Online Webinar",
                  logo: "/images/university-pillar/UNI Logos/SLTC logo.png",
                },
              ].map((university, index) => (
                <div key={index} className="flex flex-col items-center justify-end p-4 bg-white h-64"> {/* Removed border and shadow classes */}
                  <div className="flex-grow flex items-center justify-center">
                    <Image
                      src={university.logo}
                      alt={`${university.name} logo`}
                      width={120}
                      height={80}
                      objectFit="contain"
                    />
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
                {
                  name: "University of Sabaragamuwa",
                  subtitle: "2021 Online Webinar",
                  logo: "/images/university-pillar/UNI Logos/Sabaragamuwa.png",
                },
                {
                  name: "University of Wayamba",
                  subtitle: "2016-2021 Online Webinar",
                  logo: "/images/university-pillar/UNI Logos/Wayamaba.png",
                },
                {
                  name: "Professional Development Programs",
                  subtitle: "Industry-University Collaboration",
                  logo: "/images/university-pillar/UNI Logos/Japura.png",
                },
              ].map((university, index) => (
                <div key={index} className="flex flex-col items-center justify-end p-4 bg-white h-64"> {/* Removed border and shadow classes */}
                  <div className="flex-grow flex items-center justify-center">
                    <Image
                      src={university.logo}
                      alt={`${university.name} logo`}
                      width={120}
                      height={80}
                      objectFit="contain"
                    />
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

      {/* Contact Section - Commented out */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-6 h-48 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">💼</span>
                    </div>
                    <p className="text-white font-medium">Business Solutions</p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-600 to-teal-600 rounded-2xl p-6 h-48 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🌐</span>
                    </div>
                    <p className="text-white font-medium">Global Network</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">What you are looking for is not on the list?</h2>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-orange-600">Don't worry:</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Please contact us. We will provide the best solution for you.
                  </p>
                </div>

                <div className="flex items-center space-x-4 bg-gray-100 rounded-lg p-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">🏢</span>
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold">Trusted by 500+</p>
                    <p className="text-gray-600">Clients</p>
                  </div>
                </div>

                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg">Contact us</Button>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Earn Globally Recognized Qualifications</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our programs and receive degrees that open doors worldwide
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Explore Degree Programs
          </Button>
        </div>
      </section>
    </div>
  )
}
