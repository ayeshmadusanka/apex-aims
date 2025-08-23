"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { BookOpen, GraduationCap, Users, Globe, CheckCircle, Calendar, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function HomePage() {
  const heroImages = [
    { src: "/images/hero-1.png", alt: "AIMS Professional Services - Hero 1" },
    { src: "/images/hero-2.png", alt: "AIMS Professional Services - Hero 2" },
  ]
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden mt-0">
        {/* Aspect Ratio Container (15:8) */}
        <div className="relative w-full" style={{ paddingTop: "53.33%" /* 8 / 15 * 100 */ }}>
          {/* Hero Image Slider */}
          <div className="absolute inset-0">
            <div className="relative w-full h-full">
              <Image
                src={heroImages[currentImageIndex].src}
                alt={heroImages[currentImageIndex].alt}
                fill
                className="object-cover transition-opacity duration-1000"
                priority
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
            
            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-all duration-200"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-all duration-200"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            
            {/* Image Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
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
                    src="https://apexinstituteedu.com/wp-content/uploads/2023/02/Vector.png"
                    alt="Specialized Courses Icon"
                    width={56}
                    height={56}
                    className="object-contain"
                  />
                </div>
                {/* Reduced text size for mobile (text-base) and kept text-lg for md screens and up */}
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">Specialised courses</h3>
              </div>
              {/* Expert Lecturers */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  <Image
                    src="https://apexinstituteedu.com/wp-content/uploads/2023/02/Vector-1.png"
                    alt="Expert Lecturers Icon"
                    width={56}
                    height={56}
                    className="object-contain"
                  />
                </div>
                {/* Reduced text size for mobile (text-base) and kept text-lg for md screens and up */}
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">Expert Lecturers</h3>
              </div>
              {/* Certificates */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  <Image
                    src="https://apexinstituteedu.com/wp-content/uploads/2023/02/Group-23.png"
                    alt="Global Certificates Icon"
                    width={56}
                    height={56}
                    className="object-contain"
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
                  <Badge variant="outline" className="border-blue-200 text-blue-700 bg-blue-50">
                    About AIMS
                  </Badge>
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    Welcome to the
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600">
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
                    src="https://apexinstituteedu.com/wp-content/uploads/2023/02/0.1-min.png"
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
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="space-y-4 mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Our Mission: Polish Your
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">
                  {" "}
                  SKILLS
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Transforming careers through excellence in management education
              </p>
            </div>

            {/* Statistics without cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {" "}
              {/* Modified grid-cols-2 for mobile */}
              {[
                { number: "10+", label: "Expert Lecturers", color: "orange", icon: Users },
                { number: "15+", label: "Skill Courses", color: "blue", icon: BookOpen },
                { number: "5,000+", label: "Students Enrolled", color: "purple", icon: GraduationCap },
                { number: "14+", label: "Countries", color: "green", icon: Globe },
              ].map((stat, index) => (
                <div key={index} className="flex flex-col items-center justify-center p-4">
                  {" "}
                  {/* Adjusted for direct display */}
                  <div
                    className={`w-16 h-16 bg-${stat.color}-600 rounded-2xl flex items-center justify-center mx-auto mb-4`}
                  >
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className={`text-4xl font-bold text-${stat.color}-600 mb-2`}>{stat.number}</div>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Partners */}
            <div className="border-t border-gray-200 pt-16">
              <p className="text-sm font-medium text-gray-500 mb-8 tracking-wider uppercase">
                Trusted by Leading Organizations
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center opacity-70">
                {[
                  {
                    src: "https://apexinstituteedu.com/wp-content/uploads/2021/12/Brandix_Apparel_Limited_Logo.png",
                    alt: "Brandix Apparel Limited",
                  },
                  { src: "https://apexinstituteedu.com/wp-content/uploads/2021/12/unnamed.png", alt: "Renuka Foods" },
                  {
                    src: "https://apexinstituteedu.com/wp-content/uploads/2021/12/hela-clothing-logo.png",
                    alt: "Hela Clothing",
                  },
                  {
                    src: "https://apexinstituteedu.com/wp-content/uploads/2021/12/HIR_MasterLogo_Pos_RGB-1200x800-1.png",
                    alt: "Hayleys Industrial Solutions",
                  },
                  { src: "https://apexinstituteedu.com/wp-content/uploads/2021/12/images.png", alt: "Unilever" },
                  {
                    src: "https://apexinstituteedu.com/wp-content/uploads/2021/12/Logo_of_MAS_Holdings.png",
                    alt: "MAS Holdings",
                  },
                ].map((partner, index) => (
                  <div key={index} className="flex items-center justify-center h-20">
                    <Image
                      src={partner.src || "/placeholder.svg"}
                      alt={partner.alt}
                      width={160}
                      height={80}
                      className="object-contain max-h-full max-w-full"
                    />
                  </div>
                ))}
              </div>
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
              <div className="relative rounded-3xl overflow-hidden shadow-2xl order-1 lg:order-2">
                <Image
                  src="https://apexinstituteedu.com/wp-content/uploads/2022/10/PHOTO-2021-09-10-11-49-21-3.jpg"
                  alt="Benefits of Learning from AIMS"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Our Valued Clients</h2>
              <p className="text-xl text-gray-600">Trusted by leading organizations worldwide</p>
            </div>

            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-6xl mx-auto"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {[
                  { src: "/images/clinet-1.png", alt: "Client 1" },
                  { src: "/images/clinet-2.png", alt: "Client 2" },
                  { src: "/images/clinet-3.png", alt: "Client 3" },
                  { src: "/images/clinet-4.png", alt: "Client 4" },
                  { src: "/images/clinet-5.png", alt: "Client 5" },
                  { src: "/images/clinet-6.png", alt: "Client 6" },
                  { src: "/images/clinet-7.png", alt: "Client 7" },
                ].map((client, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/4">
                    <div className="p-1">
                      <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <div className="relative w-full h-full">
                            <Image
                              src={client.src}
                              alt={client.alt}
                              fill
                              className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                            />
                          </div>
                        </CardContent>
                      </Card>
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

      {/* Latest Articles */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Latest Articles</h2>
              <p className="text-xl text-gray-600">Stay updated with our latest insights and news</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  date: "March 23, 2022",
                  title: "Process Excellence and Fundamentals of Industrial Engineering Program",
                  excerpt:
                    "Normal performance which was accepted, and sufficient yesterday is no longer valid and qualifies even",
                },
                {
                  date: "December 21, 2021",
                  title: "Black Belt – Banking & Finance",
                  excerpt: "Do you want to be a super performer in banking & finance? Normal performance",
                },
                {
                  date: "March 23, 2022",
                  title: "Process Excellence and Fundamentals of Industrial Engineering Program",
                  excerpt:
                    "Normal performance which was accepted, and sufficient yesterday is no longer valid and qualifies even",
                },
              ].map((article, index) => (
                <Card
                  key={index}
                  className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center text-sm text-blue-600 mb-4 font-medium">
                      <Calendar className="h-4 w-4 mr-2" />
                      {article.date}
                    </div>
                    <CardTitle className="text-xl text-gray-900 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 mb-6 leading-relaxed">{article.excerpt}</CardDescription>
                    <Button
                      variant="ghost"
                      className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-0 h-auto font-medium"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
