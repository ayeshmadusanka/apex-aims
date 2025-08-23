import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, FileText } from "lucide-react"

export default function CertificateValidationPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-red-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Certificate Validation</h1>
          <p className="text-xl max-w-3xl mx-auto">Verify the authenticity of AIMS certificates and credentials</p>
        </div>
      </section>

      {/* Validation Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Certificate Validation Form</CardTitle>
                <CardDescription>
                  Please fill out the form below to validate your AIMS certificate. All fields are required.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  {/* Student Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
                      Student Information
                    </h3>

                    <div className="space-y-2">
                      <Label htmlFor="nicPassport">NIC/Passport Number *</Label>
                      <Input id="nicPassport" placeholder="Enter your NIC or Passport number" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="studentName">Full Name *</Label>
                      <Input id="studentName" placeholder="Enter your full name as per certificate" required />
                    </div>
                  </div>

                  {/* Enrollment Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
                      Enrollment Details
                    </h3>

                    <div className="space-y-2">
                      <Label htmlFor="activeEnrollments">Active Enrollments *</Label>
                      <Input id="activeEnrollments" placeholder="Enter your program name" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="organization">Organization / Company *</Label>
                      <Input id="organization" placeholder="Enter your current organization or company name" required />
                    </div>
                  </div>

                  {/* Validation Request Details */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
                      Validation Request
                    </h3>

                    <div className="space-y-2">
                      <Label htmlFor="reason">Reason for Certificate Validation *</Label>
                      <Textarea
                        id="reason"
                        placeholder="Please specify the reason for certificate validation"
                        rows={4}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mobileNumber">Mobile Number *</Label>
                      <Input
                        id="mobileNumber"
                        type="tel"
                        placeholder="Enter your mobile number with country code"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="personName">Person Name (Requesting Validation) *</Label>
                      <Input id="personName" placeholder="Enter the name of person requesting validation" required />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-medium"
                    >
                      Validate Certificate
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
