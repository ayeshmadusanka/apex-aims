"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { BookOpen, GraduationCap, Users, Globe, CheckCircle, Calendar, ArrowRight, ChevronLeft, ChevronRight, Eye, X, UserCheck, Award } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function HomePage() {
  const heroImages = [
    { src: "/images/hero/1.webp", alt: "AIMS Professional Services - Hero 1" },
    { src: "/images/hero/2.webp", alt: "AIMS Professional Services - Hero 2" },
    { src: "/images/hero/3.webp", alt: "AIMS Professional Services - Hero 3" },
    { src: "/images/hero/4.webp", alt: "AIMS Professional Services - Hero 4" },
  ]
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState(null)
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
  }
  
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }
  
  useEffect(() => {
    const interval = setInterval(nextImage, 5000) // Auto-advance every 5 seconds
    return () => clearInterval(interval)
  }, [])
  
  return (
    <>
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }

        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section id="hero" className="relative w-full flex flex-col items-center justify-center overflow-hidden h-auto md:min-h-[500px] md:h-[75vh] md:max-h-[600px] bg-black">
        {/* Image Container */}
        <div className="relative w-full aspect-video md:aspect-auto md:h-full overflow-hidden">
          <div className="relative w-full h-full">
            {/* Background Images */}
            {heroImages.map((image, index) => (
              <div key={index} className="absolute inset-0 w-full h-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className={`object-cover transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                  priority={index === 0}
                />
              </div>
            ))}

            {/* Enhanced Slide Indicators */}
            <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-1 md:space-x-2 z-30">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  aria-label={`Slide ${index + 1}`}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`group flex items-center justify-center w-5 h-5 md:w-6 md:h-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300`}
                >
                  <span className={`w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-white transition-all duration-300 ${index === currentImageIndex ? 'opacity-100' : 'opacity-30'}`}></span>
                </button>
              ))}
            </div>
          </div>
        </div>

        </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Changed grid for mobile to 3 columns using grid-cols-3 */}
            <div className="grid grid-cols-3 gap-4 md:gap-8">
              {" "}
              {/* Adjusted gap for better fit on small screens */}
              {/* Specialised courses */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  <Image
                    src="/images/2 Icon Set/Specialised courses.png"
                    alt="Specialized Courses Icon"
                    width={80}
                    height={80}
                    className="object-contain hover:scale-110 transition-transform duration-300"
                  />
                </div>
                {/* Reduced text size for mobile (text-base) and kept text-lg for md screens and up */}
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">Specialised courses</h3>
              </div>
              {/* Expert Lecturers */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  <Image
                    src="/images/2 Icon Set/Expert Lecturers.png"
                    alt="Expert Lecturers Icon"
                    width={80}
                    height={80}
                    className="object-contain hover:scale-110 transition-transform duration-300"
                  />
                </div>
                {/* Reduced text size for mobile (text-base) and kept text-lg for md screens and up */}
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">Expert Lecturers</h3>
              </div>
              {/* Certificates */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  <Image
                    src="/images/2 Icon Set/Certificates.png"
                    alt="Global Certificates Icon"
                    width={80}
                    height={80}
                    className="object-contain hover:scale-110 transition-transform duration-300"
                  />
                </div>
                {/* Reduced text size for mobile (text-base) and kept text-lg for md screens and up */}
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">Certificates</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Use flexbox with column reverse on small screens and grid on large screens */}
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 items-center">
              {" "}
              {/* Removed flex-col-reverse */}
              {/* This div contains the text content */}
              <div className="space-y-8 order-2 lg:order-1">
                {" "}
                {/* Keep order-2 on mobile for text after image, no order on large screens */}
                <div className="space-y-4">
                  <div className="inline-flex items-center px-4 py-2 bg-[#0056B3]/10 border border-[#0056B3]/20 rounded-full text-sm font-medium text-[#0056B3]">
                    <Award className="w-4 h-4 mr-2" />
                    About AIMS
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    Welcome to the
                    <span className="block bg-gradient-to-r from-[#0056B3] to-[#1E90FF] bg-clip-text text-transparent">
                      APEX Institute
                    </span>
                    of Management Services
                  </h2>
                </div>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p className="text-lg">
                    AIMS is a leading training and educational partner, helping organizations transform into efficient,
                    effective and financially profitable entities.
                  </p>
                  <p>
                    We bridge the gap between operational and managerial level theoretical knowledge and practical
                    application. Our vision is to provide practice-focused and professionally oriented education to
                    students around the globe.
                  </p>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              {/* This div contains the image */}
              <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
                {" "}
                {/* Use order-1 on mobile for image first, no order on large screens, and add bottom margin for spacing on mobile */}
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/3 Aims Team/AIMS TEAM.png"
                    alt="AIMS Professional Team"
                    width={500}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-20 -right-16 w-64 h-64 bg-[#1E90FF]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -left-16 w-56 h-56 bg-[#0056B3]/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-[#0056B3]/10 border border-[#0056B3]/20 rounded-full text-sm font-medium text-[#0056B3] mb-6">
              <Award className="w-4 h-4 mr-2" />
              Our Mission
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Polish Your <span className="bg-gradient-to-r from-[#0056B3] to-[#1E90FF] bg-clip-text text-transparent">SKILLS</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transforming careers through excellence in management education
            </p>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { number: "10+", label: "Expert Lecturers", color: "orange", icon: UserCheck, bgClass: "bg-orange-100", iconBgClass: "bg-orange-500", textClass: "text-orange-600" },
              { number: "15+", label: "Skill Courses", color: "blue", icon: BookOpen, bgClass: "bg-blue-100", iconBgClass: "bg-blue-500", textClass: "text-blue-600" },
              { number: "5,000+", label: "Students Enrolled", color: "purple", icon: GraduationCap, bgClass: "bg-purple-100", iconBgClass: "bg-purple-500", textClass: "text-purple-600" },
              { number: "14+", label: "Countries", color: "green", icon: Globe, bgClass: "bg-green-100", iconBgClass: "bg-green-500", textClass: "text-green-600" },
            ].map((stat, index) => (
              <div key={index} className={`${stat.bgClass} rounded-2xl p-6 text-center group hover:shadow-lg transition-all duration-300`}>
                <div className={`w-14 h-14 ${stat.iconBgClass} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="h-7 w-7 text-white" />
                </div>
                <div className={`text-3xl font-bold ${stat.textClass} mb-2`}>{stat.number}</div>
                <p className="text-gray-700 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Partners */}
          <div className="border-t border-gray-200 pt-16">
            <p className="text-sm font-medium text-gray-500 mb-8 tracking-wider uppercase">
              Trusted by Leading Organizations
            </p>

            {/* 8 Column Grid */}
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8 items-center justify-center">
              {[
                { src: "/images/4 Company Logos/1 AIMS WEB Site Logos.png", alt: "Partner Company 1" },
                { src: "/images/4 Company Logos/AIMS WEB Site Logos (1).png", alt: "Partner Company 2" },
                { src: "/images/4 Company Logos/AIMS WEB Site Logos (10).png", alt: "Partner Company 3" },
                { src: "/images/4 Company Logos/AIMS WEB Site Logos (5).png", alt: "Partner Company 4" },
                { src: "/images/4 Company Logos/AIMS WEB Site Logos (9).png", alt: "Partner Company 5" },
                { src: "/images/4 Company Logos/2 AIMS WEB Site Logos (11).png", alt: "Partner Company 6" },
                { src: "/images/4 Company Logos/3 AIMS WEB Site Logos (37).png", alt: "Partner Company 7" },
                { src: "/images/4 Company Logos/4 Jo Lanka Logo.png", alt: "Jo Lanka" },
              ].map((partner, index) => (
                <div key={index} className="flex items-center justify-center w-36 h-24 opacity-70 hover:opacity-100 transition-opacity duration-300 group">
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    width={120}
                    height={60}
                    className="object-contain max-h-full max-w-full filter grayscale hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 order-2 lg:order-1">
                <div className="space-y-4">
                  <Badge variant="outline" className="border-blue-200 text-blue-700 bg-blue-50">
                    Why Choose AIMS?
                  </Badge>
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    Benefits of Learning
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                      from AIMS
                    </span>
                  </h2>
                  <p className="text-xl text-gray-600">
                    Leading the way to professional success with extensive knowledge and practical experience.
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    "Expert-led learning with industry professionals",
                    "Comprehensive team motivation and development",
                    "24/7 consultation for all your learning needs",
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-gray-700 text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>

                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full">
                  Send a Message
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              {/* Directly show the image without the extra card background */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl order-1 lg:order-2 group">
                <Image
                  src="/images/5 Benefits of Learning section/5.png"
                  alt="Benefits of Learning with AIMS"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Our Success Stories */}
      <section className="py-8 lg:py-12 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-40 -right-20 w-80 h-80 bg-[#1E90FF]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 -left-20 w-72 h-72 bg-[#0056B3]/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#0056B3]/10 border border-[#0056B3]/20 rounded-full text-sm font-medium text-[#0056B3] mb-6">
              <Users className="w-4 h-4 mr-2" />
              Success Stories
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Success <span className="bg-gradient-to-r from-[#0056B3] to-[#1E90FF] bg-clip-text text-transparent">Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Trusted by leading organizations worldwide, showcasing our commitment to excellence and transformative impact.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-6xl mx-auto"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {[
                  { src: "/images/clinet-1.png", alt: "Success Story 1" },
                  { src: "/images/clinet-2.png", alt: "Success Story 2" },
                  { src: "/images/clinet-3.png", alt: "Success Story 3" },
                  { src: "/images/clinet-4.png", alt: "Success Story 4" },
                  { src: "/images/clinet-5.png", alt: "Success Story 5" },
                  { src: "/images/clinet-6.png", alt: "Success Story 6" },
                  { src: "/images/clinet-7.png", alt: "Success Story 7" },
                ].map((client, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/4">
                    <div className="p-1">
                      <div
                        className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 overflow-hidden border border-gray-100 cursor-pointer"
                        onClick={() => setSelectedImage(client)}
                      >
                        <div className="flex aspect-square items-center justify-center p-4">
                          <div className="relative w-full h-full">
                            <Image
                              src={client.src}
                              alt={client.alt}
                              fill
                              className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                            />
                            {/* Eye icon overlay */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                              <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                                <Eye className="w-6 h-6 text-[#0056B3]" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden lg:flex" />
              <CarouselNext className="hidden lg:flex" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors duration-200"
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>
            <div className="relative w-full h-full min-h-[400px]">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain p-8"
                sizes="(max-width: 768px) 100vw, 80vw"
              />
            </div>
          </div>
        </div>
      )}

        </div>
    </>
  )
}
