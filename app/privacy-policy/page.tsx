import PolicyLayout, { type PolicySection } from "@/components/policy-layout"

const sections: PolicySection[] = [
  {
    title: "1. Introduction",
    content: <>
      <p>Apex Institute of Management Services (AIMS) respects the privacy of visitors, students, applicants and customers who use our website and educational services.</p>
      <p>This Privacy Policy explains how we collect, use, store, protect and disclose personal information when you visit https://apexinstituteedu.com/, register for courses, use our learning management system or make payments through our website.</p>
      <p>By using our website and services, you acknowledge the practices described in this policy.</p>
    </>,
  },
  {
    title: "2. Information We Collect",
    content: <>
      <p>We may collect the following categories of personal information:</p>
      <h3>Personal Information</h3>
      <ul>
        <li>Full name.</li>
        <li>Email address.</li>
        <li>Telephone and mobile numbers.</li>
        <li>Residential or mailing address.</li>
        <li>Country and other registration details.</li>
      </ul>
      <h3>Educational Information</h3>
      <ul>
        <li>Course and programme registration details.</li>
        <li>Academic and professional qualifications provided by you.</li>
        <li>Student identification and registration information.</li>
        <li>Learning progress, assessment and certification records.</li>
      </ul>
      <h3>Payment Information</h3>
      <ul>
        <li>Payment transaction references.</li>
        <li>Payment dates and amounts.</li>
        <li>Payment status and confirmation details.</li>
        <li>Information necessary to verify and process payments.</li>
      </ul>
      <p>Payment card information is processed through the relevant payment service provider. AIMS does not intend to store complete card numbers, CVV codes or sensitive card authentication information on its website servers.</p>
      <h3>Technical Information</h3>
      <p>We may collect technical information such as IP addresses, browser type, device information, website usage data and cookies.</p>
    </>,
  },
  {
    title: "3. How We Use Your Information",
    content: <>
      <p>AIMS may use collected information for the following purposes:</p>
      <ul>
        <li>Processing course applications and registrations.</li>
        <li>Managing student accounts and learning activities.</li>
        <li>Providing access to online learning facilities.</li>
        <li>Processing and verifying payments.</li>
        <li>Issuing certificates and maintaining academic records.</li>
        <li>Responding to inquiries and providing customer support.</li>
        <li>Communicating course updates, schedules and important announcements.</li>
        <li>Improving our website and educational services.</li>
        <li>Preventing fraudulent transactions and unauthorized activities.</li>
        <li>Complying with applicable legal and regulatory requirements.</li>
      </ul>
    </>,
  },
  {
    title: "4. Payment Processing and Security",
    content: <>
      <p>Online payments made through our website may be processed by authorized third-party payment service providers and banking partners.</p>
      <p>Payment transactions may be subject to the privacy policies and security procedures of those providers.</p>
      <p>AIMS uses reasonable administrative, technical and organizational measures to protect information against unauthorized access, disclosure, alteration, loss or misuse.</p>
      <p>However, no internet-based system can guarantee absolute security.</p>
    </>,
  },
  {
    title: "5. Sharing of Personal Information",
    content: <>
      <p>AIMS does not sell or rent students' personal information to third parties.</p>
      <p>We may share relevant information with trusted service providers where necessary to deliver our services, including:</p>
      <ul>
        <li>Banks and payment gateway providers.</li>
        <li>Learning management system providers.</li>
        <li>Website hosting and technical service providers.</li>
        <li>Educational partners and certification providers, where relevant.</li>
        <li>Government authorities or regulatory bodies when required by law.</li>
      </ul>
      <p>Third parties receiving personal information are expected to handle it appropriately and only for authorized purposes.</p>
    </>,
  },
  {
    title: "6. Cookies and Website Tracking",
    content: <>
      <p>Our website may use cookies and similar technologies to:</p>
      <ul>
        <li>Improve website functionality.</li>
        <li>Remember user preferences.</li>
        <li>Understand website traffic and visitor activity.</li>
        <li>Improve website performance and user experience.</li>
      </ul>
      <p>You may manage or disable cookies through your browser settings. Disabling certain cookies may affect some website features.</p>
    </>,
  },
  {
    title: "7. Data Retention",
    content: <>
      <p>AIMS retains personal information only for as long as reasonably necessary for the purposes for which it was collected, including educational administration, financial records, customer support, dispute resolution and legal obligations.</p>
      <p>Information that is no longer required will be securely deleted, anonymized or otherwise disposed of where appropriate.</p>
    </>,
  },
  {
    title: "8. Protection of Student Information",
    content: <>
      <p>AIMS takes reasonable steps to protect student registration details, educational records and account information.</p>
      <p>Students are responsible for maintaining the confidentiality of their login credentials and notifying AIMS if they suspect unauthorized access to their accounts.</p>
    </>,
  },
  {
    title: "9. External Websites and Third-Party Services",
    content: <>
      <p>Our website may contain links to external websites, online payment services and learning platforms.</p>
      <p>AIMS is not responsible for the privacy practices, security or content of third-party websites. Users are encouraged to review the relevant privacy policies before providing personal information to those services.</p>
    </>,
  },
  {
    title: "10. Privacy Requests and Inquiries",
    content: <>
      <p>If you have questions about your personal information, wish to request access or correction where applicable, or have concerns about how your information is handled, please contact us.</p>
      <p>Email: info@apexinstituteedu.com</p>
      <p>Telephone: 077 724 5172</p>
      <p>AIMS will review and respond to requests in accordance with applicable legal requirements.</p>
    </>,
  },
  {
    title: "11. Applicable Data Protection Laws",
    content: <p>AIMS aims to handle personal information in accordance with applicable data protection and privacy laws of Sri Lanka, including the Personal Data Protection Act, No. 9 of 2022, as amended, and applicable regulations and commencement provisions.</p>,
  },
  {
    title: "12. Changes to This Privacy Policy",
    content: <>
      <p>AIMS may update this Privacy Policy from time to time to reflect changes in our services, technology or legal requirements.</p>
      <p>Any updated version will be published on our official website.</p>
    </>,
  },
  {
    title: "13. Contact Information",
    content: <address>
      <p>Apex Institute of Management Services (AIMS)</p>
      <p>No. 546/4, Galle Road,</p>
      <p>Colombo 03, Sri Lanka.</p>
      <p>Telephone: 077 724 5172</p>
      <p>Email: info@apexinstituteedu.com</p>
      <p>Website: https://apexinstituteedu.com/</p>
    </address>,
  },
]

export default function PrivacyPolicyPage() {
  return (
    <PolicyLayout
      title="PRIVACY POLICY"
      closingName="Apex Institute of Management Services"
      sections={sections}
    />
  )
}
