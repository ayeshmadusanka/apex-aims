import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Target, Users, Globe, Award } from "lucide-react"
// Removed Next.js specific Image component, using standard <img> tag instead.
// import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Solid Color Background */}
      <section className="relative bg-slate-800 text-white py-20 overflow-hidden">
        {/* Removed Hexagonal Background Pattern */}
        {/* Removed Hexagonal Design Elements */}

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">About Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Apex Institute of Management Services - A premier institution dedicated to shaping the future of management
            education
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Who we are</h2>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p className="text-lg">
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
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  {/* Replaced Next.js Image with standard <img> tag */}
                  <img
                    src="https://apexinstituteedu.com/wp-content/uploads/2023/02/0.1-min-1.png"
                    alt="AIMS Professional Team and Global Presence"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Additional Text */}
            <div className="mt-16 text-center">
              <p className="text-lg text-gray-700 leading-relaxed max-w-5xl mx-auto font-bold text-justify">
                Till date we have successfully guided around 2000+ professionals in the manufacturing as well as service
                sector and helped graduates and other novices to the manufacturing and service fields by directing them
                to employment opportunities with our discerning partners and liaisons worldwide. Additionally, we
                observe ethical, moral and professional values to maintain high standards in our work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 mb-20">
              {/* Our Vision */}
              {/* Removed border-l-4 and border-l-blue-600 */}
              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 flex items-center justify-center">
                      {/* Replaced Next.js Image with standard <img> tag */}
                      <img
                        src="https://apexinstituteedu.com/wp-content/uploads/2023/01/vision_icon-min.png"
                        alt="Vision Icon"
                        width={64}
                        height={64}
                        className="object-contain"
                      />
                    </div>
                    <CardTitle className="text-3xl text-blue-600">Our Vision</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    Our vision is to become the number one in empowering our students by providing the right guidance
                    globally. Our vision is not about the quantity, but the quality as clearly manifested by our
                    adherence to best standards and being up-to-date in our resources. We strive to be the leader in
                    providing professional training and education in the manufacturing sector in the world.
                  </p>
                </CardContent>
              </Card>

              {/* Our Mission */}
              {/* Removed border-l-4 and border-l-red-600 */}
              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 flex items-center justify-center">
                      {/* Replaced Next.js Image with standard <img> tag */}
                      <img
                        src="https://apexinstituteedu.com/wp-content/uploads/2023/01/mission_icon-min.png"
                        alt="Mission Icon"
                        width={64}
                        height={64}
                        className="object-contain"
                      />
                    </div>
                    <CardTitle className="text-3xl text-red-600">Our Mission</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    Grooming resourceful professionals while inculcating the spirit of scientific thinking in them to
                    avail themselves to survive and excel in the manufacturing and service sectors is our mission. Our
                    end product: dynamic individuals will be versatile additions to their organizations in both local
                    and international corporate ambiance. Our well-experienced team is ready to facilitate our students'
                    pursuit of excellence in accordance with their aptitude and aspirations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">The Amazing Team of Us</h2>
              {/* Removed "MEET OUR TEAM" text */}
            </div>

            {/* Team Image */}
            <div className="mb-16">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
                {/* Replaced Next.js Image with standard <img> tag */}
                <img
                  src="https://apexinstituteedu.com/wp-content/uploads/2023/11/Copy-of-www.apexinstituteedu.com-1.png"
                  alt="AIMS Team Photo"
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Team Members - Removed specific content as requested */}
            {/* The individual team member sections have been removed */}
          </div>
        </div>
      </section>

      {/* Branches & International Online Platform */}
      <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">Branches & International Online Platform</h2>
          </div>

          {/* World Map */}
          <div className="relative max-w-6xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Replaced Next.js Image with standard <img> tag */}
              <img
                src="https://apexinstituteedu.com/wp-content/uploads/2023/01/Group-2192.png"
                alt="AIMS Global Branches and International Online Platform"
                width={1200}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Removed YouTube Section text */}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Transform Your Career?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have advanced their careers through AIMS
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Get Started Today
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
