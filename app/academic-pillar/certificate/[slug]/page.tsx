import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Clock, Calendar, DollarSign, GraduationCap, Award, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const courses: Record<string, any> = {
  "certificate-in-work-study": {
    title: "Certificate in Work Study",
    subtitle: "Join with Industry Professionals to Boost Your Career",
    image: "/images/academic-pillar/Certificate Courses/1.png",
    description: "Take the next step in your professional journey with our comprehensive Certificate in Work Study. Designed for those seeking to optimize industrial efficiency, this course bridges the gap between theoretical knowledge and practical industry application.",
    courseContent: [
      "Work-study Fundamentals: Understanding the core principles of productivity",
      "Method Study: Analyzing and improving ways of doing work",
      "Time Study: Measuring the time required for specific tasks",
      "Line Balancing: Optimizing production flow and resource allocation",
      "Layout Planning: Designing efficient workspaces",
      "Introduction to GSD: Learning General Sewing Data for standardized motion",
      "Sewing Machinery: Understanding the technical tools of the trade",
      "Production Planning & Systems: Managing the broader manufacturing lifecycle"
    ],
    logistics: {
      duration: "12 Weeks",
      mode: "Online Sessions via Zoom (Flexible learning from anywhere)",
      investment: "60,000 LKR",
      payment: "Flexible installment options available"
    },
    requirements: {
      academic: "3 Passes for the GCE Advanced Level (A/L) Examination",
      professional: "Minimum of 2 years of hands-on industrial experience"
    },
    duration: "12 Weeks",
    badge: "TVEC Approved"
  },
  "workstudy-nvq-level-4": {
    title: "Certificate in Industrial Engineering (Work Study)",
    subtitle: "Obtain a Locally and Internationally Recognized Qualification",
    image: "/images/academic-pillar/Certificate Courses/2.png",
    description: "Obtain a locally and internationally recognized NVQ Level 4 certificate. This program is TVEC approved and designed to equip you with essential skills in industrial engineering and work study.",
    courseContent: [
      "NVQ Level 4 Qualification Framework",
      "Work Study Fundamentals and Methodologies",
      "Industrial Engineering Principles",
      "Time and Motion Study Techniques",
      "Production System Optimization",
      "Quality Control Standards",
      "Health and Safety Protocols",
      "Practical Industrial Applications"
    ],
    logistics: {
      duration: "06 Months",
      schedule: "Sunday sessions",
      mode: "Blended approach featuring Online Sessions via Zoom and Classroom Practicals",
      investment: "70,000 LKR"
    },
    requirements: {
      academic: "3 Passes for the GCE Advanced Level (A/L) Examination",
      professional: "Minimum of 2 years of hands-on industrial experience"
    },
    certification: [
      "NVQ Level 4: Specifically for the Sri Lankan qualification framework",
      "TVEC Approved: Ensures the course meets national vocational standards",
      "ISO Certified: Study with an ISO Certified Institute (Apex Institute of Management Services)"
    ],
    duration: "06 Months",
    badge: "NVQ Level 4"
  },
  "certificate-in-merchandising": {
    title: "Certificate in Merchandising",
    subtitle: "Keep Pursuing Your Passion",
    image: "/images/academic-pillar/Certificate Courses/3.png",
    description: "Develop your expertise in the apparel industry with our specialized Certificate in Merchandising. This program is designed for school leavers and industry staff who want to master the commercial and technical aspects of garment production and supply chain management.",
    courseContent: [
      "Fundamentals: Introduction to Merchandising and Garment Costing",
      "Material Knowledge: Fabric Technology and Fiber & Yarn Knowledge",
      "Technical Processes: Introduction to Garment Dying, Finishing & Washing",
      "Product Development: Product Development & Sample Approval and Tech Pack Developing",
      "Efficiency & Quality: Introduction to Work Study and Introduction to Quality Control",
      "Commercial Operations: Accessories & Embellishments used in the Apparel Industry, Brands, and Commercial Aspects & Logistics",
      "Supply Chain & Markets: Concept to Market (end-to-end Delivery), International Trades & Economy, and Fundamental Supply Chain Management",
      "Client Relations: Customer Understanding and Relationship Management"
    ],
    logistics: {
      duration: "10 Weeks",
      mode: "Online Sessions conducted via Zoom technology",
      facilitation: "Classes are led by industry-experienced experts",
      investment: "60,000 LKR",
      payment: "Easy payment options available through installment plans"
    },
    requirements: {
      qualification: "A/L Pass",
      targetGroup: "School Leavers and industry staff"
    },
    accreditation: "ISO Certified: Study with an ISO Certified Institute (Apex Institute of Management Services)",
    duration: "10 Weeks",
    badge: "TVEC Approved"
  },
  "quality-assurance-management": {
    title: "Certificate in Quality Assurance Management",
    subtitle: "Master Quality Control and Assurance",
    image: "/images/academic-pillar/Certificate Courses/4.png",
    description: "Master the principles of quality control and assurance with a program tailored for professionals in the manufacturing sector. This course focuses on ensuring product excellence through systematic process management.",
    courseContent: [
      "Fundamentals: Introduction to Quality and the History of Quality",
      "Quality Aspects: Understanding various Aspects of Quality",
      "Material & Technical Quality: Introduction to Raw Material Quality and Introduction of Machines & Seams",
      "Control & Assurance: Product Quality Control and comprehensive Quality Assurance",
      "Process Integration: Relationship of Product Quality with Manufacturing Process Quality",
      "Problem Solving: Strategies for Quality-Related Problem Solving"
    ],
    logistics: {
      duration: "03 Months",
      mode: "Online sessions conducted via Zoom",
      investment: "60,000 LKR",
      payment: "Installment payment options are available"
    },
    requirements: {
      qualification: "GCE Advanced Level (A/L) Pass",
      targetGroup: "Specifically designed for QA staff and interested professionals"
    },
    accreditation: "Certified Training: Study with an ISO Certified & TVEC Approved Institute (Apex Institute of Management Services)",
    duration: "03 Months",
    badge: "TVEC Approved"
  },
  "advanced-certificate-apparel-production-management": {
    title: "Advanced Certificate in Apparel Production Management",
    subtitle: "Empower Your Career in the Apparel Industry",
    image: "/images/academic-pillar/Certificate Courses/5.png",
    description: "Empower your career in the apparel industry with a comprehensive understanding of production lifecycles. This advanced program is designed for current production staff and emerging leaders who want to master efficiency and supervisory management.",
    courseContent: [
      "Production Management: Core principles of garment production management",
      "Operational Excellence: Work Study, Production Systems, and Line Balancing",
      "Quality & Standards: Quality Control and Health & Safety protocols",
      "Managerial Skills: Supervisory Management for team and group leaders",
      "Analytical Tools: Garment Analysis, Process Analysis Charts, and Productivity & Efficiency Calculations",
      "Planning & Lean: Production Planning & Controlling and Basic Lean Knowledge"
    ],
    logistics: {
      duration: "03 Months",
      investment: "60,000 LKR",
      contact: "077 260 0478"
    },
    requirements: {
      targetGroup: "Individuals after O/L & A/L, Production staff, Team Leaders, Group Leaders, and Supervisors"
    },
    accreditation: "Certified Training: Study with an ISO Certified institute (Apex Institute of Management Services)",
    duration: "03 Months",
    badge: "TVEC Approved"
  },
  "pattern-making-grading": {
    title: "Certificate in Pattern Making & Grading",
    subtitle: "Master Precision Garment Construction",
    image: "/images/academic-pillar/Certificate Courses/6.png",
    description: "Master the technical art of precision garment construction through our specialized program in pattern production and grading. This course is designed to provide both theoretical understanding and practical expertise in creating manufacturing-ready patterns.",
    courseContent: [
      "Introduction to Pattern Production: Fundamental concepts of the craft",
      "Tools and Equipment: Identification and use of essential tools for cutting and grading",
      "Measurement Procedures: Mastering body measurement positions and guides for precision",
      "Basic Block Drafting: Construction of foundational blocks for Shirts, T-shirts, Skirts, Blouses, and Jackets",
      "Production Pattern Sets: Developing complete sets for professional manufacturing",
      "Advanced Styling: Developing patterns for diverse skirt styles, including Pleated, Panel, and Flared designs",
      "Grading Techniques: Learning the principles and techniques of grading patterns across different sizes",
      "Manufacturing Specifications: Drafting and grading specifically for industrial manufacturing standards",
      "Fabric Optimization: Creating efficient markers and calculating fabric construction"
    ],
    logistics: {
      duration: "4 Months",
      schedule: "Held every Sunday",
      mode: "A blended approach featuring Online Sessions and Practical training",
      investment: "60,000 LKR"
    },
    accreditation: [
      "TVEC Approved: Meets national vocational standards",
      "ISO Certified: Facilitated by an ISO certified institute"
    ],
    duration: "4 Months",
    badge: "TVEC Approved"
  },
  "organization-planning-controlling": {
    title: "Advanced Certificate in Organization Planning & Controlling",
    subtitle: "Enhance Your Strategic and Operational Capabilities",
    image: "/images/academic-pillar/Certificate Courses/7.png",
    description: "Enhance your strategic and operational capabilities with our Advanced Certificate in Organization Planning & Controlling. This program focuses on optimizing manufacturing workflows, resource allocation, and performance monitoring to ensure organizational efficiency.",
    courseContent: [
      "Strategic Planning: Setting organizational objectives and defining long-term roadmaps",
      "Production Planning & Control (PPC): Mastering the stages of routing, scheduling, loading, and dispatching",
      "Demand Forecasting: Predicting market requirements to optimize inventory and production levels",
      "Capacity Planning: Evaluating labor and machinery capabilities to meet production demands",
      "Material Requirements Planning (MRP): Coordinating raw materials and supply chains for uninterrupted flow",
      "Performance Monitoring & Follow-up: Implementing control techniques to track progress and initiate corrective actions",
      "Optimization & Cost Reduction: Identifying bottlenecks and streamlining processes to minimize waste"
    ],
    logistics: {
      duration: "45 Days",
      mode: "Online sessions via Zoom technology"
    },
    requirements: {
      targetGroup: "Production managers, planners, and senior operational staff seeking career growth"
    },
    accreditation: [
      "Expert-Led Training: Taught by industry professionals from Apex Institute of Management Services (AIMS)",
      "ISO Certified: Study with an institute recognized for quality management standards"
    ],
    duration: "45 Days",
    badge: "TVEC Approved"
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
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-blue-900/60 to-black/70"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center">
              <Badge className="mb-4 bg-blue-600 text-white">{course.badge}</Badge>
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
                    <Clock className="w-5 h-5 text-blue-600" />
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
                    <Users className="w-5 h-5 text-blue-600" />
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
                    <DollarSign className="w-5 h-5 text-blue-600" />
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
                      <Calendar className="w-5 h-5 text-blue-600" />
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
                  {course.requirements.academic && (
                    <div className="flex items-start gap-3">
                      <GraduationCap className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-gray-900">Academic Requirement</p>
                        <p className="text-gray-700">{course.requirements.academic}</p>
                      </div>
                    </div>
                  )}
                  {course.requirements.professional && (
                    <div className="flex items-start gap-3">
                      <Award className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-gray-900">Professional Experience</p>
                        <p className="text-gray-700">{course.requirements.professional}</p>
                      </div>
                    </div>
                  )}
                  {course.requirements.qualification && (
                    <div className="flex items-start gap-3">
                      <GraduationCap className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-gray-900">Minimum Qualification</p>
                        <p className="text-gray-700">{course.requirements.qualification}</p>
                      </div>
                    </div>
                  )}
                  {course.requirements.targetGroup && (
                    <div className="flex items-start gap-3">
                      <Users className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
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

      {/* Accreditation */}
      {(course.certification || course.accreditation) && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Certification & Accreditation</h2>
              <Card>
                <CardContent className="p-6">
                  {Array.isArray(course.accreditation) ? (
                    <ul className="space-y-3">
                      {course.accreditation.map((item: string, index: number) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-700">{course.accreditation}</p>
                  )}
                  {course.certification && (
                    <ul className="space-y-3 mt-4">
                      {course.certification.map((item: string, index: number) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
            <p className="text-blue-100 text-lg mb-8">
              Enroll now and take the first step towards advancing your career
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
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
