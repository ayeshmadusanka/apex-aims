import AcademicCourseDetail, { type AcademicCourse } from "@/components/academic-course-detail";

const courses: Record<string, AcademicCourse> = {
  "diploma-in-industrial-engineering": {
    title: "Diploma in Industrial Engineering",
    subtitle: "Get Your Dream Job With Better Reputation",
    image: "/images/academic-pillar/diploma-courses/industrial-engineering.webp",
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
    image: "/images/academic-pillar/diploma-courses/industrial-management.webp",
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
    image: "/images/academic-pillar/diploma-courses/apparel-production-management.webp",
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
    image: "/images/academic-pillar/diploma-courses/quality-management.webp",
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
    image: "/images/academic-pillar/diploma-courses/human-resource-management.webp",
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
    image: "/images/academic-pillar/diploma-courses/fashion-design.webp",
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
};

export async function generateStaticParams() {
  return Object.keys(courses).map((slug) => ({ slug }));
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = Object.prototype.hasOwnProperty.call(courses, slug) ? courses[slug] : undefined;
  return <AcademicCourseDetail course={course} />;
}
