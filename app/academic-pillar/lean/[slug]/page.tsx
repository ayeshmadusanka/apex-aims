import AcademicCourseDetail, { type AcademicCourse } from "@/components/academic-course-detail";

const courses: Record<string, AcademicCourse> = {
  "lean-certified-white-belt-practitioner": {
    title: "Certified Lean White Belt Practitioner",
    subtitle: "Start Your Journey to Continuous Improvement",
    image: "/images/academic-pillar/lean/white-belt.webp",
    description: "Gain a foundational understanding of Lean Six Sigma and the essential tools used to enhance efficiency and eliminate waste. This entry-level practitioner program is designed to create a culture of excellence and prepare you for active participation in process improvement initiatives.",
    courseContent: [
      "Lean & Six Sigma Fundamentals: Understanding the history, principles, and synergy between Lean and Six Sigma",
      "The 8 Wastes (Muda): Learning to identify defects, overproduction, waiting, and other inefficiencies",
      "DMAIC Methodology: A comprehensive overview of the Define, Measure, Analyze, Improve, and Control framework",
      "Essential Lean Tools: Introduction to 5S (Sort, Set in Order, Shine, Standardize, Sustain), Visual Management, and Kaizen",
      "Process Mapping: Understanding the basics of creating flowcharts and identifying value-added activities",
      "Problem Solving: Introduction to root cause analysis using tools like the Fishbone Diagram and the 5 Whys"
    ],
    logistics: {
      duration: "1 hour (self-paced) to 1 full day (instructor-led)",
      mode: "Online sessions via Zoom, self-paced eLearning, or in-person classroom training",
      investment: "Costs vary by provider, ranging from free introductory courses to approximately $349–$995"
    },
    requirements: {
      prerequisites: "None. This course is specifically designed for individuals with no prior knowledge of Lean Six Sigma",
      targetGroup: "Senior leaders, project team members, manufacturing operators, and any professional seeking to improve workplace efficiency"
    },
    accreditation: [
      "Certified Training: Study with recognized providers to earn an industry-approved White Belt Certification",
      "International Recognition: Many programs are aligned with global standards such as those set by the Council for Six Sigma Certification (CSSC)"
    ],
    duration: "Flexible",
    badge: "Foundation"
  },
  "lean-certified-yellow-belt-practitioner": {
    title: "Certified Lean Yellow Belt Practitioner",
    subtitle: "Enhance Your Knowledge & Upgrade Your Career With Passion",
    image: "/images/academic-pillar/lean/yellow-belt.webp",
    description: "Advance your expertise in operational excellence with the Certified Lean Yellow Belt Practitioner program. This course is highly beneficial for graduates and undergraduates with industrial experience who want to gain in-depth knowledge in lean manufacturing.",
    courseContent: [
      "Lean Fundamentals: Overview of Lean Manufacturing and Lean Leadership",
      "Waste & Mapping: Identification of Types of Waste and mastery of Process Mapping | VSM (Value Stream Mapping)",
      "Continuous Improvement: Engaging in Kaizen Activities and Problem Solving techniques",
      "Operational Controls: Implementing Visual Control, Standard Work, and Just in Time (JIT) principles",
      "Advanced Metrics & Maintenance: Understanding the Lean Matrix and the Basics of TPM (Total Productive Maintenance)"
    ],
    logistics: {
      duration: "08 Weeks",
      mode: "Online Sessions via Zoom technology",
      investment: "50,000 LKR"
    },
    requirements: {
      targetGroup: "Ideal for Graduates, Undergraduates, and those with industrial experience seeking to deepen their lean manufacturing knowledge"
    },
    accreditation: [
      "Certified Training: Facilitated by qualified lecturers at an ISO Certified Institute",
      "Institute: Apex Institute of Management Services (AIMS)"
    ],
    duration: "08 Weeks",
    badge: "6 days (24 Hrs)"
  },
  "lean-certified-green-belt-practitioner": {
    title: "Certified Lean Green Belt Practitioner",
    subtitle: "Master the advanced tools of operational excellence and lead significant process improvement projects within your organization.",
    image: "/images/academic-pillar/lean/green-belt.webp",
    description: "This practitioner-level course is highly beneficial for graduates and professionals with industrial experience who want to gain in-depth, actionable knowledge in lean manufacturing.",
    courseContent: [
      "Foundations: Detailed study of the LEAN Belt System and an Introduction of Lean Manufacturing",
      "Leadership & Coaching: Training in Coaching & Monitoring and Hoshin Kanri (Strategic Planning)",
      "Advanced Problem Solving: Mastering methods such as 8 Steps and A3 Thinking",
      "Technical Lean Tools: Implementation of Advanced 5S, Job Instruction Training, and Value Stream Mapping",
      "Process Optimization: Strategies for Continuous Flow, BIQ (Built-In Quality), and FMEA (Failure Mode and Effects Analysis)"
    ],
    logistics: {
      duration: "12 Weeks",
      mode: "Online Sessions",
      investment: "95,000 LKR",
      payment: "Flexible installments are available"
    },
    requirements: {
      targetGroup: "Professionals with industrial experience, graduates, and those looking for specialized expertise in lean manufacturing"
    },
    accreditation: [
      "Certified Quality: Join an ISO Certified & TVEC Approved Institute",
      "Institute: Apex Institute of Management Services (AIMS)"
    ],
    duration: "12 Weeks",
    badge: "12 Days (48 Hrs)"
  },
  "lean-certified-black-belt-practitioner": {
    title: "Certified Lean Black Belt Practitioner",
    subtitle: "Master Advanced Leadership & Strategy",
    image: "/images/academic-pillar/lean/black-belt.webp",
    description: "AIMS is a leading training partner dedicated to helping organizations transform into efficient, effective, and financially profitable entities. Developed to bridge the gap between operational and managerial theoretical knowledge, this program focuses on the practical application of advanced theories at a global scale.",
    courseContent: [
      "16 Technical Modules: In-depth exploration of advanced lean engineering and process optimization tools",
      "04 Management Modules: Specialized modules focused on high-level strategic leadership and organizational transformation"
    ],
    logistics: {
      investment: "250,000 LKR"
    },
    requirements: {
      certification: "Must hold a Lean Green Belt level qualification",
      experience: "A satisfactory level of lean tool application experience",
      management: "More than 3 years of management experience"
    },
    whyAims: [
      "Proven Track Record: Training over 2,000 professionals since 2013",
      "Global Reach: Presence in over 5 countries with more than 12 partners and 4 university affiliations",
      "Multilingual Support: Instruction available in 2 languages"
    ],
    duration: "Advanced",
    badge: "14 Days (84 Hrs)"
  },
  "lean-six-sigma-green-belt-finance": {
    title: "Lean Six Sigma Green Belt Practitioner Program for Finance",
    image: "/images/academic-pillar/lean/six-sigma-green-belt-finance.webp",
    description: "Lean Six Sigma Green Belt specialized for finance professionals",
    duration: "75 days",
    badge: "75 days"
  },
  "lean-six-sigma-black-belt-finance": {
    title: "Lean Six Sigma Black Belt Practitioner Program for Finance",
    image: "/images/academic-pillar/lean/six-sigma-black-belt-finance.webp",
    description: "Lean Six Sigma Black Belt specialized for finance professionals",
    duration: "120 days",
    badge: "120 days"
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
