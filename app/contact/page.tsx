import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Get in touch with us to learn more about our programs and how we can help you achieve your goals
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email address" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="Enter your phone number" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="program">Program of Interest</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a program" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mba">MBA</SelectItem>
                        <SelectItem value="executive-mba">Executive MBA</SelectItem>
                        <SelectItem value="pgdm">PGDM</SelectItem>
                        <SelectItem value="certificate">Certificate Programs</SelectItem>
                        <SelectItem value="corporate">Corporate Training</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Tell us about your requirements or questions" rows={4} />
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Send Message</Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600 flex items-center">
                    <MapPin className="mr-3 h-6 w-6" />
                    Visit Our Campus
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    No 546/4, Galle Road
                    <br />
                    Colombo 03
                    <br />
                    Colombo, Sri Lanka
                  </p>
                  <Button
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent"
                  >
                    Get Directions
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-red-600 flex items-center">
                    <Phone className="mr-3 h-6 w-6" />
                    Call Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-gray-700">
                      <strong>Hotline:</strong> 077 724 5172
                    </p>
                    <p className="text-gray-700">
                      <strong>WhatsApp:</strong> 077 724 5172
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600 flex items-center">
                    <Mail className="mr-3 h-6 w-6" />
                    Email Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-gray-700">
                      <strong>General:</strong> hello@apexinstituteedu.com
                    </p>
                    <p className="text-gray-700">
                      <strong>Admissions:</strong> hello@apexinstituteedu.com
                    </p>
                    <p className="text-gray-700">
                      <strong>Corporate:</strong> hello@apexinstituteedu.com
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-red-600 flex items-center">
                    <Clock className="mr-3 h-6 w-6" />
                    Office Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-gray-700">
                      <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM
                    </p>
                    <p className="text-gray-700">
                      <strong>Saturday:</strong> 9:00 AM - 2:00 PM
                    </p>
                    <p className="text-gray-700">
                      <strong>Sunday:</strong> Closed
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common questions</p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {[
              {
                question: "What are the admission requirements?",
                answer:
                  "Admission requirements vary by program. Generally, we require a bachelor's degree for postgraduate programs and relevant work experience for executive programs.",
              },
              {
                question: "Do you offer online programs?",
                answer:
                  "Yes, we offer several online and hybrid programs to accommodate working professionals and students from different locations.",
              },
              {
                question: "What is the fee structure?",
                answer:
                  "Fee structure varies by program. Please contact our admissions team for detailed information about fees and available scholarships.",
              },
              {
                question: "Are there scholarship opportunities?",
                answer:
                  "Yes, we offer merit-based scholarships and financial aid options. Contact our admissions office for more information about eligibility and application process.",
              },
              {
                question: "What is the placement record?",
                answer:
                  "We have an excellent placement record with our graduates working in leading companies worldwide. Our career services team provides comprehensive placement support.",
              },
              {
                question: "Can I visit the campus?",
                answer:
                  "We encourage prospective students to visit our campus. Please schedule an appointment through our admissions office for a guided tour.",
              },
            ].map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-600">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{faq.answer}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-xl text-gray-600">Located on Galle Road, Colombo 03</p>
          </div>

          <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">Interactive Map Coming Soon</p>
              <p className="text-gray-500">No 546/4, Galle Road, Colombo 03, Sri Lanka</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
