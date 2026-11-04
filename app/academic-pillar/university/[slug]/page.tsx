import AcademicCourseDetail, { type AcademicCourse } from "@/components/academic-course-detail";

const courses = {
  "industrial-engineering-process-excellence": {
    title: "Industrial Engineering and Process Excellence",
    subtitle: "Master Industrial Engineering Principles",
    image: "/images/academic-pillar/university-courses/industrial-engineering-process-excellence.webp",
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
    image: "/images/academic-pillar/university-courses/certified-pmts-costing-practitioner.webp",
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
    image: "/images/academic-pillar/university-courses/certificate-in-merchandising.webp",
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
    image: "/images/academic-pillar/university-courses/lean-white-belt.webp",
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
} satisfies Record<string, AcademicCourse>
export async function generateStaticParams() {
  return Object.keys(courses).map((slug) => ({ slug }));
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <AcademicCourseDetail course={courses[slug]} />;
}
