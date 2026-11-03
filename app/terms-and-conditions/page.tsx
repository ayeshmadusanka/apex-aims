import PolicyLayout, { type PolicySection } from "@/components/policy-layout"

const sections: PolicySection[] = [
  {
    title: "1. Introduction",
    content: <>
      <p>Welcome to Apex Institute of Management Services (AIMS).</p>
      <p>These Terms and Conditions govern your access to and use of our website, https://apexinstituteedu.com/, including our educational programmes, professional training services, online learning facilities and payment services.</p>
      <p>By accessing our website, registering for a programme or making a payment, you agree to comply with these Terms and Conditions.</p>
      <p>If you do not agree with these terms, please do not use our website or services.</p>
    </>,
  },
  {
    title: "2. About AIMS",
    content: <>
      <p>Apex Institute of Management Services (AIMS) is an educational and professional training institution providing practice-focused learning opportunities, management education, specialized training and related educational services.</p>
      <p>Our services may include:</p>
      <ul>
        <li>Professional and vocational training programmes.</li>
        <li>Academic and management development programmes.</li>
        <li>Online and classroom-based learning.</li>
        <li>Educational consultancy and project-related services.</li>
        <li>Assessments and certification-related services.</li>
      </ul>
    </>,
  },
  {
    title: "3. Website Usage",
    content: <>
      <p>By using this website, you agree:</p>
      <ul>
        <li>To provide accurate and complete information when registering or submitting inquiries.</li>
        <li>Not to use the website for unlawful or fraudulent activities.</li>
        <li>Not to attempt unauthorized access to our website, systems or student accounts.</li>
        <li>Not to interfere with the website's functionality or security.</li>
        <li>Not to copy, reproduce or distribute website content without prior written permission.</li>
      </ul>
      <p>AIMS reserves the right to restrict or suspend access to users who violate these conditions.</p>
    </>,
  },
  {
    title: "4. Course Registration and Enrollment",
    content: <>
      <p>Students must provide accurate personal and contact information when registering.</p>
      <p>Course enrollment is subject to the relevant programme's admission requirements and availability.</p>
      <p>Submission of an application does not automatically guarantee admission.</p>
      <p>Enrollment will be confirmed after the applicable registration requirements and payment conditions have been satisfied.</p>
      <p>Students must ensure that they select the correct course or programme before completing registration.</p>
      <p>AIMS reserves the right to reject or cancel registrations that contain false, misleading or incomplete information.</p>
    </>,
  },
  {
    title: "5. Course Fees and Online Payments",
    content: <>
      <p>All applicable course fees and charges will be communicated before payment.</p>
      <p>Payments may be made through the online payment facilities provided on the AIMS website.</p>
      <p>Online payments may be processed through authorized banking partners and payment gateway providers, including Seylan Bank IPG.</p>
      <p>Students must ensure that payment details are correct before confirming a transaction.</p>
      <p>A successful payment is subject to verification by the relevant payment service provider and AIMS.</p>
      <p>Students should retain their payment receipts and transaction references.</p>
      <p>AIMS shall not be responsible for delays caused by banking networks, payment gateway interruptions or other third-party service failures beyond its reasonable control.</p>
    </>,
  },
  {
    title: "6. Payment Confirmation",
    content: <>
      <p>A registration or payment will be considered successful once the transaction has been confirmed through the relevant payment provider and verified by AIMS.</p>
      <p>If a payment has been deducted from your account but no confirmation has been received, please contact:</p>
      <p>Email: info@apexinstituteedu.com</p>
      <p>Telephone: 077 724 5172</p>
      <p>Please provide your payment transaction reference when contacting us.</p>
    </>,
  },
  {
    title: "7. Cancellation and Refunds",
    content: <>
      <p>All course cancellations and refund requests are subject to the AIMS Refund Policy published on our official website.</p>
      <p>Students are encouraged to review the Refund Policy before making a payment.</p>
      <p>AIMS reserves the right to assess refund requests according to the applicable cancellation conditions and relevant legal requirements.</p>
    </>,
  },
  {
    title: "8. Course Delivery and Changes",
    content: <>
      <p>AIMS aims to deliver programmes according to the published course descriptions, schedules and delivery arrangements.</p>
      <p>However, AIMS reserves the right to make reasonable changes to:</p>
      <ul>
        <li>Course schedules and commencement dates.</li>
        <li>Class locations and delivery methods.</li>
        <li>Lecturers and instructors.</li>
        <li>Course materials and learning resources.</li>
        <li>Programme structure where educationally necessary.</li>
      </ul>
      <p>Where significant changes occur, affected students will be informed through the contact details provided during registration.</p>
    </>,
  },
  {
    title: "9. Student Responsibilities",
    content: <>
      <p>Students are expected to:</p>
      <ul>
        <li>Follow the academic and administrative rules of AIMS.</li>
        <li>Attend classes and participate in learning activities as required.</li>
        <li>Complete assignments and assessments within the specified deadlines.</li>
        <li>Maintain respectful and professional conduct.</li>
        <li>Avoid plagiarism, cheating or academic misconduct.</li>
        <li>Protect their student login credentials.</li>
        <li>Use learning resources only for permitted educational purposes.</li>
      </ul>
      <p>AIMS reserves the right to take appropriate action in cases of misconduct or violations of academic requirements.</p>
    </>,
  },
  {
    title: "10. Certificates and Qualifications",
    content: <>
      <p>Certificates and other academic documents will be issued subject to the relevant programme requirements.</p>
      <p>Students may be required to:</p>
      <ul>
        <li>Complete the relevant course or programme.</li>
        <li>Fulfil attendance requirements, where applicable.</li>
        <li>Complete assessments and examinations.</li>
        <li>Satisfy outstanding financial obligations.</li>
      </ul>
      <p>AIMS reserves the right to withhold, cancel or investigate certificates where fraud, misrepresentation or other serious irregularities are identified, subject to applicable law and relevant procedures.</p>
    </>,
  },
  {
    title: "11. Intellectual Property Rights",
    content: <>
      <p>All website content and materials, including:</p>
      <ul>
        <li>Logos and trademarks.</li>
        <li>Text, graphics and images.</li>
        <li>Course materials and presentations.</li>
        <li>Videos and educational resources.</li>
        <li>Website design and digital content.</li>
      </ul>
      <p>are owned by AIMS or used with appropriate authorization, unless otherwise stated.</p>
      <p>Users must not reproduce, distribute, modify, publish or commercially exploit these materials without prior written permission from the relevant rights holder.</p>
      <p>Students may use authorized course materials for personal educational purposes only, subject to any additional usage restrictions.</p>
    </>,
  },
  {
    title: "12. Privacy and Personal Information",
    content: <>
      <p>AIMS respects the privacy of website visitors and students.</p>
      <p>Personal information collected through our website and services will be handled in accordance with our Privacy Policy and applicable data protection laws.</p>
      <p>Please review our Privacy Policy for further information about how personal information is collected, processed, stored and protected.</p>
    </>,
  },
  {
    title: "13. Third-Party Services",
    content: <>
      <p>Our website may use third-party services, including:</p>
      <ul>
        <li>Online payment gateways.</li>
        <li>Banking services.</li>
        <li>Website hosting providers.</li>
        <li>Learning management systems.</li>
        <li>External educational and certification platforms.</li>
      </ul>
      <p>These services may operate under their own terms, conditions and privacy policies.</p>
      <p>AIMS does not control all aspects of third-party services and cannot guarantee their uninterrupted availability.</p>
    </>,
  },
  {
    title: "14. Limitation of Liability",
    content: <>
      <p>AIMS will take reasonable steps to provide reliable educational and website services.</p>
      <p>To the extent permitted by applicable law, AIMS shall not be liable for indirect or consequential losses arising from:</p>
      <ul>
        <li>Temporary website interruptions.</li>
        <li>Third-party service failures.</li>
        <li>Internet or network connectivity issues.</li>
        <li>Unauthorized access resulting from compromised user credentials.</li>
        <li>Events beyond AIMS's reasonable control.</li>
      </ul>
      <p>Nothing in these Terms and Conditions excludes or limits any liability or consumer rights that cannot lawfully be excluded or limited.</p>
    </>,
  },
  {
    title: "15. Website Availability",
    content: <>
      <p>AIMS reserves the right to modify, suspend or discontinue any part of the website or its services for maintenance, security, technical improvements or operational reasons.</p>
      <p>We will make reasonable efforts to minimize service interruptions where possible.</p>
    </>,
  },
  {
    title: "16. Changes to Terms and Conditions",
    content: <>
      <p>AIMS may revise these Terms and Conditions from time to time.</p>
      <p>Updated terms will be published on our official website. Continued use of our website and services after changes take effect constitutes acceptance of the revised terms, to the extent permitted by applicable law.</p>
    </>,
  },
  {
    title: "17. Governing Law",
    content: <>
      <p>These Terms and Conditions shall be governed by and interpreted in accordance with the laws of the Democratic Socialist Republic of Sri Lanka.</p>
      <p>Any disputes arising in connection with these terms shall be subject to the jurisdiction of the competent courts of Sri Lanka.</p>
    </>,
  },
  {
    title: "18. Contact Information",
    content: <>
      <p>For questions or clarification regarding these Terms and Conditions, please contact:</p>
      <address>
        <p>Apex Institute of Management Services (AIMS)</p>
        <p>Address:</p>
        <p>No. 546/4, Galle Road,</p>
        <p>Colombo 03, Sri Lanka.</p>
        <p>Telephone: 077 724 5172</p>
        <p>Email: info@apexinstituteedu.com</p>
        <p>Website: https://apexinstituteedu.com/</p>
      </address>
    </>,
  },
  {
    title: "19. Acceptance of Terms",
    content: <p>By accessing our website, registering for courses or completing an online payment, you acknowledge that you have read and agreed to these Terms and Conditions, together with the applicable Refund Policy and Privacy Policy.</p>,
  },
]

export default function TermsAndConditionsPage() {
  return (
    <PolicyLayout
      title="TERMS AND CONDITIONS"
      closingName="Apex Institute of Management Services"
      sections={sections}
    />
  )
}
