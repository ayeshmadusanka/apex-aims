import PolicyLayout, { type PolicySection } from "@/components/policy-layout"

const sections: PolicySection[] = [
  {
    title: "1. Introduction",
    content: (
      <>
        <p>Apex Institute of Management Services (AIMS) is committed to providing quality educational programmes, professional training and learning services.</p>
        <p>This Refund Policy outlines the conditions applicable to payments made for courses, training programmes, registrations and other services offered by AIMS through its website or approved payment channels.</p>
        <p>By registering for a programme or making a payment, students and customers acknowledge and agree to this Refund Policy.</p>
      </>
    ),
  },
  {
    title: "2. Course Registration and Payments",
    content: (
      <>
        <p>All course fees, registration fees and other applicable charges must be paid through payment methods officially approved by AIMS.</p>
        <p>Students are responsible for ensuring that the selected course, registration details and payment amount are correct before completing a transaction.</p>
        <p>Registration will be confirmed once the payment has been successfully received and verified by AIMS.</p>
        <p>Students should retain their payment receipts and transaction references for future reference.</p>
      </>
    ),
  },
  {
    title: "3. Non-Refundable Policy",
    content: (
      <>
        <p>All fees paid to Apex Institute of Management Services (AIMS) are strictly non-refundable.</p>
        <p>This includes, but is not limited to:</p>
        <ul>
          <li>Course registration fees.</li>
          <li>Tuition fees.</li>
          <li>Training programme fees.</li>
          <li>Examination and assessment fees.</li>
          <li>Administrative fees.</li>
          <li>Other service-related charges.</li>
        </ul>
        <p>Once a payment has been successfully completed, AIMS will not provide refunds for any reason, including:</p>
        <ul>
          <li>Change of mind after registration.</li>
          <li>Withdrawal from a course or training programme.</li>
          <li>Failure to attend classes or training sessions.</li>
          <li>Inability to participate in a programme.</li>
          <li>Personal circumstances or changes in availability.</li>
          <li>Failure to complete a course or programme.</li>
        </ul>
        <p>Students are therefore advised to carefully review all course details, programme requirements and applicable fees before making a payment.</p>
        <p>This policy is subject to any refund or other rights that cannot lawfully be excluded under applicable Sri Lankan law.</p>
      </>
    ),
  },
  {
    title: "4. Course Cancellation or Changes by AIMS",
    content: (
      <>
        <p>If AIMS cancels a course, training programme or service, or is unable to deliver the advertised programme, AIMS will communicate the available arrangements to affected students.</p>
        <p>Any resolution will be handled in accordance with applicable legal requirements and the circumstances of the cancellation.</p>
      </>
    ),
  },
  {
    title: "5. Payment Errors and Duplicate Transactions",
    content: (
      <>
        <p>If a customer experiences a duplicate payment, an incorrect transaction or a payment processing error, the matter must be reported to the AIMS Finance Department for investigation.</p>
        <p>Customers should provide the following information:</p>
        <ul>
          <li>Full name.</li>
          <li>Registered email address.</li>
          <li>Course or programme name.</li>
          <li>Payment date.</li>
          <li>Transaction reference number.</li>
          <li>Payment receipt or supporting evidence.</li>
        </ul>
        <p>Verified duplicate or erroneous transactions will be reviewed and resolved in accordance with applicable banking procedures and legal requirements. This does not create a general entitlement to a refund of course fees.</p>
      </>
    ),
  },
  {
    title: "6. Payment Processing Time",
    content: (
      <>
        <p>Online payments may be processed through authorized banking partners and payment gateway providers.</p>
        <p>If an amount has been deducted from a customer's bank account but the payment confirmation has not been received, the customer should contact the Finance Department with the transaction reference.</p>
        <p>AIMS will coordinate with the relevant bank or payment service provider to investigate the transaction.</p>
      </>
    ),
  },
  {
    title: "7. Contact Person for Payment and Refund Inquiries",
    content: (
      <>
        <p>For all payment-related inquiries, transaction issues, duplicate payments and questions regarding this policy, please contact:</p>
        <address>
          <p>Contact Person: Finance Manager</p>
          <p>Mr. Visaahan Jeyaratna</p>
          <p>Apex Institute of Management Services (AIMS)</p>
          <p>No. 546/4, Galle Road,</p>
          <p>Colombo 03, Sri Lanka.</p>
          <p>Telephone: 077 944 0441</p>
          <p>Email: info@apexinstituteedu.com</p>
          <p>Website: https://apexinstituteedu.com/</p>
        </address>
      </>
    ),
  },
  {
    title: "8. Policy Amendments",
    content: (
      <>
        <p>AIMS reserves the right to update or amend this Refund Policy when necessary.</p>
        <p>Any revised version will be published on the official AIMS website.</p>
        <p>Customers and students are encouraged to review this policy before making payments.</p>
      </>
    ),
  },
  {
    title: "9. Acceptance of Policy",
    content: (
      <p>By registering for a course, purchasing a training programme or completing an online payment, students and customers acknowledge that they have read, understood and accepted this Refund Policy.</p>
    ),
  },
]

export default function RefundPolicyPage() {
  return (
    <PolicyLayout
      title="REFUND POLICY"
      closingName="Apex Institute of Management Services (AIMS)"
      sections={sections}
    />
  )
}
