import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Target, Users, Globe, Award, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  const Badge = ({ children, icon: Icon }: { children: React.ReactNode; icon: any }) => (
    <div className="inline-flex items-center px-4 py-2 bg-[#0056B3]/10 border border-[#0056B3]/20 rounded-full text-sm font-medium text-[#0056B3]">
      <Icon className="w-4 h-4 mr-2" />
      {children}
    </div>
  )

  const GradientButton = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a href={href} className="group">
      <div className="relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#0056B3] to-[#1E90FF] text-white font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#0056B3]/50 focus:ring-offset-2">
        <span className="relative z-10">{children}</span>
        <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
      </div>
    </a>
  )
  return (
    <div className="min-h-screen">
      <section className="relative w-full flex flex-col items-center justify-center overflow-hidden h-[150px] md:min-h-[200px] md:h-[40vh] md:max-h-[300px] bg-black">
        <div className="relative w-full aspect-video md:aspect-auto md:h-full overflow-hidden">
          <div className="relative w-full h-full">
            <Image
              src="/images/hero/breadcrumb.png"
              alt="AIMS Professional Services - About Us"
              fill
              className="object-cover opacity-80"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-[#0056B3]/50 to-black/50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="container mx-auto px-4 flex items-center justify-center text-center">
                <h1 className="text-4xl lg:text-5xl font-bold text-white">About Us</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 order-2 lg:order-1">
                <div className="space-y-4">
                  <Badge icon={Award}>Who We Are</Badge>
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                    Our <span className="bg-gradient-to-r from-[#0056B3] to-[#1E90FF] bg-clip-text text-transparent">Story</span>
                  </h2>
                </div>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    Since its inception in 2007, APEX INSTITUTE OF MANAGEMENT SERVICES (AIMS) has come a long way to
                    secure its reputation not only in Sri Lanka but also globally as a distinguished training and
                    educational partner specifically catering to the necessities of students from all walks in their
                    professions such as school leavers, graduates, professionals holding executive and managerial
                    positions as well as corporates in the manufacturing and service sectors who placed their trust on
                    us.
                  </p>
                  <p>
                    AIMS is registered under the NAITA since 2010 and ISO 9001:2015 certified for providing professional
                    education. In our proud journey, we have focused on developing integrated solutions to bridge the
                    gap between operational and managerial level theoretical knowledge and practical approaches.
                  </p>
                   <p>
                    Till date we have successfully guided around 2000+ professionals in the manufacturing as well as service sector and helped graduates and other novices to the manufacturing and service fields by directing them to employment opportunities with our discerning partners and liaisons worldwide.
                    Additionally, we observe ethical, moral and professional values to maintain high standards in our work.
                  </p>
                </div>
              </div>

              <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/about/1 Global Branches Photo/Global Photo.png"
                    alt="AIMS Global Team and Professional Network"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-20 -right-16 w-64 h-64 bg-[#1E90FF]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -left-16 w-56 h-56 bg-[#0056B3]/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <Badge icon={Target}>Vision & Mission</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 mt-2">
              Our Guiding <span className="bg-gradient-to-r from-[#0056B3] to-[#1E90FF] bg-clip-text text-transparent">Principles</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The foundation of our commitment to excellence and transformative education
            </p>
          </div>

        <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden transform hover:shadow-lg transition-shadow duration-300">
                <div className="p-8 text-center">
                  <div className="flex items-center justify-center mb-6">
                    <Image
                      src="/images/about/2 Mission Vision/Vission.png"
                      alt="Vision Icon"
                      width={64}
                      height={64}
                      className="object-contain mr-3"
                    />
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-[#0056B3] to-[#1E90FF] bg-clip-text text-transparent">
                      Our Vision
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Our vision is to become the number one in empowering our students by providing the right guidance
                    globally. Our vision is not about the quantity, but the quality as clearly manifested by our
                    adherence to best standards and being up-to-date in our resources. We strive to be the leader in
                    providing professional training and education in the manufacturing sector in the world.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden transform hover:shadow-lg transition-shadow duration-300">
                <div className="p-8 text-center">
                  <div className="flex items-center justify-center mb-6">
                    <Image
                      src="/images/about/2 Mission Vision/Mission.png"
                      alt="Mission Icon"
                      width={64}
                      height={64}
                      className="object-contain mr-3"
                    />
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-[#0056B3] to-[#1E90FF] bg-clip-text text-transparent">
                      Our Mission
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Grooming resourceful professionals while inculcating the spirit of scientific thinking in them to
                    avail themselves to survive and excel in the manufacturing and service sectors is our mission. Our
                    end product: dynamic individuals will be versatile additions to their organizations in both local
                    and international corporate ambiance. Our well-experienced team is ready to facilitate our students'
                    pursuit of excellence in accordance with their aptitude and aspirations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge icon={Users}>Our Team</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 mt-2">
                Our Amazing <span className="bg-gradient-to-r from-[#0056B3] to-[#1E90FF] bg-clip-text text-transparent">Team</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Meet the dedicated professionals who make our mission possible
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/about/3 Team Photo/AIMS TEAM.png"
                  alt="AIMS Team Photo"
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-40 -right-20 w-80 h-80 bg-[#1E90FF]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 -left-20 w-72 h-72 bg-[#0056B3]/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <Badge icon={Globe}>Global Presence</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 mt-2">
              Branches & <span className="bg-gradient-to-r from-[#0056B3] to-[#1E90FF] bg-clip-text text-transparent">International</span> Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Expanding our reach through physical branches and online learning platforms
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about/4 Branches & International Online Platform/Branches & International Online Platform.png"
                alt="AIMS Global Branches and International Online Platform"
                width={1200}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
