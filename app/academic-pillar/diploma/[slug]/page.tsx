import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Clock, Calendar, DollarSign, GraduationCap, Award, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const courses: Record<string, any> = {
  "diploma-in-industrial-engineering": {
    title: "Diploma in Industrial Engineering",
    subtitle: "Get Your Dream Job With Better Reputation",
    image: "/images/academic-pillar/Diploma Courses/9.png",
    description: "Elevate your professional standing with our comprehensive Diploma in Industrial Engineering. This program is designed to provide high-level expertise in operational efficiency and workplace engineering, positioning you for top-tier roles in the industry.",
    courseContent: [
      "Engineering Fundamentals: Introduction to Industrial Engineering",
      "Measurement & Analysis: Work Measurement and Method Study and Development",
      "Operational Excellence: Operation Management and Lean Manufacturing and Process Engineering",
      "Workplace Design: Work place Engineering and Equipment Technology, along with Motion Economy and Ergonomics",
      "Standards & Safety: Health and Safety and Industrial Standards"
    ],
    logistics: {
      duration: "56 Weeks",
      mode: "Online Sessions",
      investment: "180,000 LKR (Payable in 4 Installments)",
      payment: "Special Offers: One-time payment offer: 15,000 LKR discount. Early bird discount: 5,000 LKR"
    },
    requirements: {
      qualification: "Advanced Certificate Program of IMS or equivalent qualifications"
    },
    certification: [
      "Official Course Provider: Apex Institute of Management Services is the official provider for IMS-UK",
      "ISO Certified: Study with a recognized ISO Certified Institute"
    ],
    duration: "56 Weeks",
    badge: "56 Weeks"
  },
  "diploma-in-industrial-management": {
    title: "Diploma in Industrial Management",
    subtitle: "Enhance Your Knowledge & Upgrade Career Life With Your Passion",
    image: "/images/academic-pillar/Diploma Courses/10.png",
    description: "Accelerate your leadership potential with our comprehensive Diploma in Industrial Management. This program is designed for manufacturing staff who aspire to transition into senior management roles by mastering the multidisciplinary facets of modern industrial operations.",
    courseContent: [
      "Operations & Projects: Operations Management and Project Management",
      "Human Factors: Ergonomics & work design and Human Resource Management",
      "Financial & Strategic Control: Accounting and Finance and Strategic Management",
      "Quality & Marketing: Total Quality Management (TQM) and Marketing Management"
    ],
    logistics: {
      duration: "56 Weeks",
      mode: "Online Sessions via Zoom",
      investment: "180,000 LKR",
      payment: "Flexible installments are available"
    },
    requirements: {
      qualification: "GCE Advanced Level (A/L) Pass",
      targetGroup: "All manufacturing staff and professionals seeking management upgrades"
    },
    accreditation: [
      "Certified Training: Study with an ISO Certified & TVEC Approved Institute",
      "Institute: Apex Institute of Management Services (AIMS)"
    ],
    duration: "56 Weeks",
    badge: "56 Weeks"
  },
  "diploma-in-apparel-production-management": {
    title: "Diploma in Apparel Production Management",
    subtitle: "Build Up Your Professional Qualifications for the Apparel Industry",
    image: "/images/academic-pillar/Diploma Courses/11.png",
    description: "Master the complexities of large-scale garment manufacturing with our comprehensive Diploma in Apparel Production Management. This program is designed to transform manufacturing assistants and executives into highly skilled production leaders.",
    courseContent: [
      "Leadership & Management: Introduction to Management, Leadership skills, and People Management",
      "Core Production Knowledge: Introduction to Apparel Production Management and the specific Functions in an Apparel Production environment",
      "Technical Expertise: Advanced Production Management Techniques and the integration of New technologies in Apparel Production",
      "Industrial Frameworks: Industrial Engineering and the implementation of Lean Manufacturing",
      "Systems & Planning: Quality Assurance & Management Systems and Production Planning & Organization",
      "Operations: Comprehensive Operation Management strategies"
    ],
    logistics: {
      duration: "56 Weeks",
      mode: "Online Sessions via Zoom",
      investment: "180,000 LKR"
    },
    requirements: {
      targetGroup: "All manufacturing assistants, Executives, and those in above-level positions seeking professional qualification"
    },
    accreditation: [
      "Certified Quality: Study with an ISO Certified and TVEC Approved Institute",
      "Institute: Apex Institute of Management Services (AIMS)"
    ],
    duration: "56 Weeks",
    badge: "56 Weeks"
  },
  "diploma-in-quality-management": {
    title: "Diploma in Quality Management",
    subtitle: "Master the strategic and technical requirements of modern quality assurance with our professional Diploma in Quality Management. This program is designed for quality staff and professionals looking to implement global standards within a manufacturing environment.",
    image: "/images/academic-pillar/Diploma Courses/12.png",
    description: "Master the strategic and technical requirements of modern quality assurance with our professional Diploma in Quality Management. This program is designed for quality staff and professionals looking to implement global standards within a manufacturing environment.",
    courseContent: [
      "Quality Foundations: Introduction to Quality Management and Basic Application of Quality",
      "Inspection & Raw Materials: Technical training in Quality Inspection and Raw Material Quality",
      "Manufacturing Integration: Basics of Manufacturing Process and the concept of \"Built in Quality\"",
      "Systems & Standards: Developing a Quality Management System and understanding Quality as a Global Standard",
      "Testing & Safety: Advanced Testing's for Quality and ensuring Product Safety"
    ],
    logistics: {
      duration: "56 Weeks",
      mode: "Online sessions conducted via Zoom",
      investment: "180,000 LKR",
      payment: "Installment payment options are available"
    },
    requirements: {
      qualification: "GCE Advanced Level (A/L) Pass",
      targetGroup: "Specifically designed for Quality Staff and manufacturing professionals"
    },
    accreditation: [
      "Certified Training: Study with an ISO Certified institute",
      "Institute: Apex Institute of Management Services (AIMS)"
    ],
    duration: "56 Weeks",
    badge: "56 Weeks"
  },
  "diploma-in-human-resource-management": {
    title: "Diploma in Human Resource Management",
    subtitle: "Accelerate Your HR Career",
    image: "/images/academic-pillar/Diploma Courses/13.png",
    description: "Join us to obtain a practical exposure to Human Resource Management through our comprehensive Diploma program. This course is designed to equip you with the strategic and operational skills needed to excel as an HR professional in modern organizations.",
    courseContent: [
      "Foundations: Theories of Management & Introduction to Organizations",
      "HR Core: Introduction to Human Resource Management (HRM)",
      "Lifecycle Management: Human Resource Planning & Recruitment",
      "Performance & Data: Performance Management and Statistical Techniques & Information Technology in HRM",
      "Safety & Law: Employee Health & Safety and Sri Lankan Labour Laws & Industrial Relations",
      "Behavioral Science: Soft Skills, Counselling & Psychology Related to HR Performance",
      "Strategic Integration: Multi-disciplinary Approach to HRM and a final HR Project"
    ],
    logistics: {
      duration: "56 Weeks",
      mode: "Online sessions conducted via Zoom",
      investment: "180,000 LKR"
    },
    requirements: {
      qualification: "GCE Advanced Level (A/L) Pass",
      targetGroup: "School Leavers, HR Assistants, Executives, and Senior Executives seeking career advancement"
    },
    accreditation: [
      "Certified Training: Study with an ISO Certified and TVEC Approved Institute",
      "Institute: Apex Institute of Management Services (AIMS)"
    ],
    duration: "56 Weeks",
    badge: "56 Weeks"
  },
  "diploma-in-fashion-design": {
    title: "Diploma in Fashion Design",
    subtitle: "Unlock Your Creative Potential in the Fashion World",
    image: "/images/academic-pillar/Diploma Courses/14.png",
    description: "Step into the vibrant world of fashion with our comprehensive Diploma in Fashion Design. This program is specifically curated to meet the needs of budding designers, offering a perfect blend of artistic exploration and technical proficiency to help you launch a successful career or your own fashion label.",
    courseContent: [
      "Design Foundations: Introduction to fashion design, color theory, design principles, and history of fashion",
      "Creative Visualization: Fashion figure illustration, croquis sketching, and developing mood boards",
      "Technical Skills: Pattern making (2D & 3D), garment construction, tailoring, and draping techniques",
      "Fabric & Materials: Textile science, understanding fiber properties, and surface ornamentation",
      "Digital Design: Utilizing CAD software and Photoshop for fashion illustration and technical drawings",
      "Commercial Strategy: Fashion marketing, branding, trend forecasting, and business model development",
      "Production Management: Understanding tech packs, garment sample stages, and manufacturing operations"
    ],
    logistics: {
      duration: "1 to 2 years (Full-time and Part-time available)",
      mode: "Blended approach including hands-on practical workshops and online theoretical sessions",
      investment: "Approximately 150,000 LKR (Installment plans typically available)"
    },
    requirements: {
      qualification: "GCE Ordinary Level (O/L) passes",
      targetGroup: "School leavers, aspiring entrepreneurs, and individuals passionate about creative design"
    },
    accreditation: [
      "TVEC Registered: Many programs are registered under the Tertiary and Vocational Education Commission in Sri Lanka",
      "International Recognition: Options for UK-based qualifications (e.g., OTHM Level 3) which provide pathways to international degrees"
    ],
    duration: "1-2 Years",
    badge: "1-2 Years"
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
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-red-900/60 to-black/70"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center">
              <Badge className="mb-4 bg-red-600 text-white">{course.badge}</Badge>
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
                      <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Course Logistics</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Clock className="w-5 h-5 text-red-600" />
                    Duration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{course.logistics.duration}</p>
                  {course.logistics.schedule && (
                    <p className="text-gray-600 mt-2">{course.logistics.schedule}</p>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Users className="w-5 h-5 text-red-600" />
                    Learning Mode
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{course.logistics.mode}</p>
                  {course.logistics.facilitation && (
                    <p className="text-gray-600 mt-2">{course.logistics.facilitation}</p>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <DollarSign className="w-5 h-5 text-red-600" />
                    Investment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 font-semibold text-lg">{course.logistics.investment}</p>
                  {course.logistics.payment && (
                    <p className="text-gray-600 mt-2">{course.logistics.payment}</p>
                  )}
                </CardContent>
              </Card>

              {course.logistics.contact && (
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Calendar className="w-5 h-5 text-red-600" />
                      Contact
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 font-semibold">{course.logistics.contact}</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Entry Requirements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Entry Requirements</h2>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {course.requirements?.academic && (
                    <div className="flex items-start gap-3">
                      <GraduationCap className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-gray-900">Academic Requirement</p>
                        <p className="text-gray-700">{course.requirements.academic}</p>
                      </div>
                    </div>
                  )}
                  {course.requirements?.professional && (
                    <div className="flex items-start gap-3">
                      <Award className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-gray-900">Professional Experience</p>
                        <p className="text-gray-700">{course.requirements.professional}</p>
                      </div>
                    </div>
                  )}
                  {course.requirements?.qualification && (
                    <div className="flex items-start gap-3">
                      <GraduationCap className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-gray-900">Minimum Qualification</p>
                        <p className="text-gray-700">{course.requirements.qualification}</p>
                      </div>
                    </div>
                  )}
                  {course.requirements?.targetGroup && (
                    <div className="flex items-start gap-3">
                      <Users className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
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
      <section className="py-16 bg-red-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
            <p className="text-red-100 text-lg mb-8">
              Enroll now and take the first step towards advancing your career
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
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
