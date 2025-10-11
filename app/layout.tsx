import type React from "react"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "AIMS - Apex Institute of Management Services",
  description: "Premier management institute offering professional courses, Lean Six Sigma certification, and operational excellence programs. Transform your career with industry-leading training.",
  keywords: "Management Institute, Professional Education, Leadership Training, Apex Institute, AIMS, Management Courses, Business Education, Professional Development, Corporate Training, Skills Development, Management Certification, Lean courses, Lean manufacturing, Process Improvement, Quality Management",
  authors: [{ name: "AIMS - Apex Institute of Management Services" }],
  creator: "AIMS - Apex Institute of Management Services",
  publisher: "AIMS - Apex Institute of Management Services",
  robots: "index, follow",
  language: "en",
  icons: {
    icon: [
      { url: '/web-app-manifest-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/web-app-manifest-512x512.png', sizes: '512x512', type: 'image/png' }
    ],
    apple: [
      { url: '/web-app-manifest-192x192.png', sizes: '192x192', type: 'image/png' }
    ],
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://apexinstituteedu.com/',
    title: "AIMS - Apex Institute of Management Services",
    description: "Premier management institute offering professional courses, Lean Six Sigma certification, and operational excellence programs. Transform your career with industry-leading training.",
    siteName: 'AIMS - Apex Institute of Management Services',
    images: [
      {
        url: '/web-app-manifest-512x512.png',
        width: 512,
        height: 512,
        alt: 'AIMS - Apex Institute of Management Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "AIMS - Apex Institute of Management Services",
    description: "Premier management institute offering professional courses, Lean Six Sigma certification, and operational excellence programs. Transform your career with industry-leading training.",
    images: ['/web-app-manifest-512x512.png'],
    creator: '@apex_institute',
    site: '@apex_institute',
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  alternates: {
    canonical: 'https://apexinstituteedu.com/',
  },
  other: {
    'apple-mobile-web-app-title': 'AIMS',
    'application-name': 'AIMS',
    'msapplication-TileColor': '#0056B3',
    'msapplication-config': '/browserconfig.xml',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />

        {/* Tawk.to Live Chat Script */}
        <Script id="tawk-to-script" strategy="afterInteractive">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/686ac19853ff86190e6b0614/1ivgg8fe9';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>
      </body>
    </html>
  )
}
