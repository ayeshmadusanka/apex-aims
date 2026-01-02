import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Clock, Calendar, DollarSign, GraduationCap, Award, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const courses: Record<string, any> = {
  "industrial-engineering-process-excellence": {
    title: "Industrial Engineering and Process Excellence",
    subtitle: "Master Industrial Engineering Principles",
    image: "/images/academic-pillar/Courses for University Students/23.png",
    description: "Gain comprehensive knowledge in industrial engineering principles and process optimization techniques designed for university students.",
    courseContent: [
      "Industrial Engineering Fundamentals: Core concepts and methodologies",
      "Process Optimization: Techniques for improving efficiency",
      "Work Measurement: Time and motion studies",
      "Production Planning: Effective planning strategies",
      "Quality Management: Quality control principles"
    ],
    logistics: {
      duration: "45 days",
      mode: "Online sessions via Zoom"
    },
    requirements: {
      targetGroup: "University students pursuing engineering degrees"
    },
    duration: "45 days",
    badge: "45 days"
  },
  "certified-pmts-costing-practitioner": {
    title: "Certified PMTS & Costing Practitioner Program",
    subtitle: "Enhance your technical expertise in predetermined motion time systems and financial garment analysis.",
    image: "/images/academic-pillar/Courses for University Students/24.png",
    description: "This practitioner course is designed to bridge the gap between technical operations and executive-level cost management within the apparel industry.",
    courseContent: [
      "MTM1: Comprehensive study of Methods-Time Measurement level 1",
      "MTM2: Advanced application of Methods-Time Measurement level 2",
      "Process Time Calculations: Mastering the math behind production timing",
      "Video-based Practical Exercises: Hands-on learning through visual analysis and simulation",
      "Garment Costing: Systematic approach to calculating the total cost of production"
    ],
    logistics: {
      duration: "50 Hours",
      mode: "Online sessions conducted via Zoom technology",
      investment: "60,000 LKR"
    },
    requirements: {
      qualification: "GCE Advanced Level (A/L) Pass",
      targetGroup: "IE Officers, Executives, and Managers"
    },
    accreditation: [
      "Certified Training: Study with an ISO Certified and TVEC Approved Institute",
      "Institute: Apex Institute of Management Services (AIMS)"
    ],
    duration: "50 Hours",
    badge: "50 Hours"
  },
  "certificate-in-merchandising-university": {
    title: "Certificate in Merchandising",
    subtitle: "Specialized Merchandising Training",
    image: "/images/academic-pillar/Courses for University Students/25.png",
    description: "Develop specialized skills in retail merchandising and product management tailored for university students.",
    courseContent: [
      "Introduction to Merchandising: Fundamentals of the field",
      "Product Management: Effective product strategies",
      "Retail Operations: Understanding retail business",
      "Supply Chain: Supply chain fundamentals",
      "Customer Relations: Building customer relationships"
    ],
    logistics: {
      duration: "60 days",
      mode: "Online sessions via Zoom"
    },
    requirements: {
      targetGroup: "University students interested in merchandising"
    },
    duration: "60 days",
    badge: "60 days"
  },
  "certified-lean-white-belt-university": {
    title: "Certified Lean White Belt Practitioner Program",
    subtitle: "Foundation Level Lean Principles",
    image: "/images/academic-pillar/Courses for University Students/Academic Pillar Images.png",
    description: "Gain foundational knowledge in lean principles and basic improvement tools designed for university students.",
    courseContent: [
      "Lean Fundamentals: Introduction to Lean principles",
      "Waste Identification: Learning to identify the 8 wastes",
      "DMAIC Methodology: Overview of Define, Measure, Analyze, Improve, Control",
      "Basic Lean Tools: 5S, Visual Management, Kaizen",
      "Process Mapping: Understanding value stream mapping"
    ],
    logistics: {
      duration: "90 days",
      mode: "Online sessions via Zoom"
    },
    requirements: {
      targetGroup: "University students seeking lean knowledge"
    },
    duration: "90 days",
    badge: "90 days"
  }
}

export async function generateStaticParams() {
  return Object.keys(courses).map((slug) => ({
    slug: slug,
  }))
}

export default function CourseDetailPage({ params }: { params: { slug: string } }) {
  const course = courses[params.slug]

  if (!course) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Course Not Found</h1>
          <Link href="/academic-pillar">
            <Button>Back to Courses</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[300px] md:h-[400px] bg-black">
        <div className="relative w-full h-full">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-emerald-900/60 to-black/70"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center">
              <Badge className="mb-4 bg-emerald-600 text-white">{course.badge}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{course.title}</h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">{course.subtitle}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Course Overview</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{course.description}</p>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Course Content</h2>
            <Card>
              <CardContent className="p-6">
                <ul className="space-y-4">
                  {course.courseContent.map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Course Logistics */}
      {course.logistics && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Course Logistics</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {course.logistics.duration && (
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <Clock className="w-5 h-5 text-emerald-600" />
                        Duration
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{course.logistics.duration}</p>
                    </CardContent>
                  </Card>
                )}

                {course.logistics.mode && (
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <Users className="w-5 h-5 text-emerald-600" />
                        Learning Mode
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{course.logistics.mode}</p>
                    </CardContent>
                  </Card>
                )}

                {course.logistics.investment && (
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <DollarSign className="w-5 h-5 text-emerald-600" />
                        Investment
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 font-semibold text-lg">{course.logistics.investment}</p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Entry Requirements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Entry Requirements</h2>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {course.requirements?.qualification && (
                    <div className="flex items-start gap-3">
                      <GraduationCap className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-gray-900">Minimum Qualification</p>
                        <p className="text-gray-700">{course.requirements.qualification}</p>
                      </div>
                    </div>
                  )}
                  {course.requirements?.targetGroup && (
                    <div className="flex items-start gap-3">
                      <Users className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-gray-900">Target Group</p>
                        <p className="text-gray-700">{course.requirements.targetGroup}</p>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
            <p className="text-emerald-100 text-lg mb-8">
              Enroll now and take the first step towards advancing your career
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
                Enroll Now
              </Button>
              <Link href="/academic-pillar">
                <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                  Back to Courses
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
