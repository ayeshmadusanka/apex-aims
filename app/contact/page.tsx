import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, MessageCircle, Building2, Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-[#0056B3] to-[#E41E26] text-white py-24" style={{backgroundImage: 'url("/images/banner_image.webp")', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0056B3]/90 to-[#E41E26]/90"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-8">
            Contact <span className="bg-gradient-to-r from-[#0056B3] to-[#E41E26] bg-clip-text text-transparent">Us</span>
          </h1>
          <p className="text-xl lg:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed">
            Get in touch with our team to learn more about our programs and how we can help you achieve your educational goals.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        <div className="absolute top-20 -right-20 w-72 h-72 bg-[#0056B3]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -left-20 w-96 h-96 bg-[#E41E26]/5 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 max-w-7xl mx-auto">
            <div>
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transform hover:shadow-3xl transition-shadow duration-500">
                <div className="bg-gradient-to-r from-[#0056B3] to-[#1E90FF] px-8 py-8">
                  <h2 className="text-2xl font-bold text-white flex items-center">
                    <MessageCircle className="w-6 h-6 mr-3 text-white" />
                    Send Message
                  </h2>
                  <p className="text-white/90 mt-2">Fill out the form below to get in touch</p>
                </div>

                <div className="p-4 sm:p-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-sm font-semibold text-gray-800">First Name *</Label>
                        <Input
                          id="firstName"
                          placeholder="Enter your first name"
                          className="border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0056B3] focus:border-[#0056B3] transition-all duration-300"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-sm font-semibold text-gray-800">Last Name *</Label>
                        <Input
                          id="lastName"
                          placeholder="Enter your last name"
                          className="border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0056B3] focus:border-[#0056B3] transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-semibold text-gray-800">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        className="border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0056B3] focus:border-[#0056B3] transition-all duration-300"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-semibold text-gray-800">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        className="border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0056B3] focus:border-[#0056B3] transition-all duration-300"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-semibold text-gray-800">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your requirements or questions..."
                        rows={6}
                        className="border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0056B3] focus:border-[#0056B3] transition-all duration-300 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="group relative w-full py-4 px-6 bg-gradient-to-r from-[#0056B3] to-[#1E90FF] hover:from-[#0056B3] hover:to-[#0056B3] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                      <MessageCircle className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                      <span className="relative">Send Message</span>
                    </Button>
                  </form>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-[#0056B3] to-[#1E90FF] rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <h2 className="text-lg sm:text-xl font-bold text-white mb-2 flex items-center">
                  <Building2 className="w-6 h-6 mr-3" />
                  Contact Information
                </h2>
                <p className="text-white/90">Get in touch with our team</p>
              </div>

              <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transform hover:shadow-3xl transition-shadow duration-500">
                <div className="p-4 sm:p-8">
                  <div className="space-y-3">
                    <a href="https://www.google.com/maps?q=No+546%2F4,+Galle+Road,+Colombo+03,+Sri+Lanka" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 p-3 bg-gradient-to-r from-[#0056B3]/5 to-[#1E90FF]/5 rounded-lg hover:from-[#0056B3]/10 hover:to-[#1E90FF]/10 transition-all duration-300">
                      <div className="w-10 h-10 bg-gradient-to-r from-[#0056B3] to-[#1E90FF] rounded-lg flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">Visit Us</p>
                        <p className="text-xs text-gray-600">No 546/4, Galle Road, Colombo 03</p>
                      </div>
                    </a>
                  <div className="space-y-3 mt-4">
                    <a href="tel:+94777245172" className="flex items-center space-x-3 p-3 bg-gradient-to-r from-[#0056B3]/5 to-[#1E90FF]/5 rounded-lg hover:from-[#0056B3]/10 hover:to-[#1E90FF]/10 transition-all duration-300">
                      <div className="w-10 h-10 bg-gradient-to-r from-[#0056B3] to-[#1E90FF] rounded-lg flex items-center justify-center">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">Call Us</p>
                        <p className="text-xs text-gray-600">077 724 5172</p>
                      </div>
                    </a>

                    <a href="mailto:info@apexinstituteedu.com" className="flex items-center space-x-3 p-3 bg-gradient-to-r from-[#0056B3]/5 to-[#1E90FF]/5 rounded-lg hover:from-[#0056B3]/10 hover:to-[#1E90FF]/10 transition-all duration-300">
                      <div className="w-10 h-10 bg-gradient-to-r from-[#0056B3] to-[#1E90FF] rounded-lg flex items-center justify-center">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">Email Us</p>
                        <p className="text-xs text-gray-600">info@apexinstituteedu.com</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

              <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transform hover:shadow-3xl transition-shadow duration-500">
                <div className="p-4 sm:p-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
                  <p className="text-sm text-gray-600 mb-4">Stay updated with our latest programs and news</p>
                  <div className="grid grid-cols-2 gap-3">
                    <a href="#" target="_blank" rel="noopener noreferrer"
                       className="flex items-center space-x-3 p-3 bg-gradient-to-r from-[#0056B3]/5 to-[#1E90FF]/5 rounded-lg hover:from-[#0056B3]/10 hover:to-[#1E90FF]/10 transition-all duration-300 group/btn">
                      <div className="w-8 h-8 bg-gradient-to-r from-[#0056B3] to-[#1E90FF] rounded-lg flex items-center justify-center group-hover/btn:scale-110 transition-transform">
                        <Facebook className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm font-medium text-gray-700">Facebook</span>
                    </a>

                    <a href="#" target="_blank" rel="noopener noreferrer"
                       className="flex items-center space-x-3 p-3 bg-gradient-to-r from-[#0056B3]/5 to-[#1E90FF]/5 rounded-lg hover:from-[#0056B3]/10 hover:to-[#1E90FF]/10 transition-all duration-300 group/btn">
                      <div className="w-8 h-8 bg-gradient-to-r from-[#0056B3] to-[#1E90FF] rounded-lg flex items-center justify-center group-hover/btn:scale-110 transition-transform">
                        <Instagram className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm font-medium text-gray-700">Instagram</span>
                    </a>

                    <a href="#" target="_blank" rel="noopener noreferrer"
                       className="flex items-center space-x-3 p-3 bg-gradient-to-r from-[#0056B3]/5 to-[#1E90FF]/5 rounded-lg hover:from-[#0056B3]/10 hover:to-[#1E90FF]/10 transition-all duration-300 group/btn">
                      <div className="w-8 h-8 bg-gradient-to-r from-[#0056B3] to-[#1E90FF] rounded-lg flex items-center justify-center group-hover/btn:scale-110 transition-transform">
                        <Linkedin className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm font-medium text-gray-700">LinkedIn</span>
                    </a>

                    <a href="#" target="_blank" rel="noopener noreferrer"
                       className="flex items-center space-x-3 p-3 bg-gradient-to-r from-[#0056B3]/5 to-[#1E90FF]/5 rounded-lg hover:from-[#0056B3]/10 hover:to-[#1E90FF]/10 transition-all duration-300 group/btn">
                      <div className="w-8 h-8 bg-gradient-to-r from-[#0056B3] to-[#1E90FF] rounded-lg flex items-center justify-center group-hover/btn:scale-110 transition-transform">
                        <Youtube className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm font-medium text-gray-700">YouTube</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    <section className="py-8 lg:py-12 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-40 -right-20 w-80 h-80 bg-[#1E90FF]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 -left-20 w-72 h-72 bg-[#0056B3]/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#0056B3]/10 border border-[#0056B3]/20 rounded-full text-sm font-medium text-[#0056B3] mb-6">
              <MapPin className="w-4 h-4 mr-2" />
              Our Location
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Visit Our <span className="bg-gradient-to-r from-[#0056B3] to-[#1E90FF] bg-clip-text text-transparent">Institute</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Located in the heart of Colombo, our institute is equipped with modern facilities to serve your educational needs.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden transform hover:shadow-3xl transition-shadow duration-500">
              <div className="relative">
                <iframe
                  src="https://www.google.com/maps?q=No+546%2F4,+Galle+Road,+Colombo+03,+Sri+Lanka&output=embed"
                  width="100%"
                  height="500"
                  style={{ border: '0' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg px-4 py-3 border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#0056B3] to-[#1E90FF] rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Main Branch</p>
                      <p className="text-sm font-bold text-gray-900">Colombo, Sri Lanka</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-gray-50 to-white p-8 border-t border-gray-100">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0056B3] to-[#1E90FF] rounded-xl flex items-center justify-center shadow-lg">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Address</p>
                      <p className="text-sm font-bold text-gray-900">No 546/4 Galle Road, Colombo 03</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0056B3] to-[#1E90FF] rounded-xl flex items-center justify-center shadow-lg">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Contact</p>
                      <a href="tel:+94777245172" className="text-sm font-bold text-gray-900 hover:text-[#E41E26] transition-colors duration-200">077 724 5172</a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0056B3] to-[#1E90FF] rounded-xl flex items-center justify-center shadow-lg">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Email</p>
                      <a href="mailto:info@apexinstituteedu.com" className="text-sm font-bold text-gray-900 hover:text-[#E41E26] transition-colors duration-200">info@apexinstituteedu.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
