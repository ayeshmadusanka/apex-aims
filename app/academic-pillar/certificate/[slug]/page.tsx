import AcademicCourseDetail, { type AcademicCourse } from "@/components/academic-course-detail";

const courses = {
  "certificate-in-work-study": {
    title: "Certificate in Work Study",
    subtitle: "Join with Industry Professionals to Boost Your Career",
    image: "/images/academic-pillar/certificate-courses/certificate-in-work-study.webp",
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
    image: "/images/academic-pillar/certificate-courses/workstudy-nvq-level-4.webp",
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
    image: "/images/academic-pillar/certificate-courses/certificate-in-merchandising.webp",
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
    image: "/images/academic-pillar/certificate-courses/quality-assurance-management.webp",
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
    image: "/images/academic-pillar/certificate-courses/advanced-certificate-apparel-production-management.webp",
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
    image: "/images/academic-pillar/certificate-courses/pattern-making-and-grading.webp",
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
    image: "/images/academic-pillar/certificate-courses/organization-planning-and-controlling.webp",
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