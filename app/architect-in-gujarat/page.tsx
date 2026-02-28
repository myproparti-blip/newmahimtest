"use client"

import type { Metadata } from "next"
import { JsonLd } from "@/components/json-ld"
import {
  generateMetadata as genMetadata,
  getOrganizationSchema,
  getProfessionSchema,
  getFAQSchema,
  getBreadcrumbSchema,
} from "@/lib/seo-metadata"

export default function ArchitectInGujaratPage() {
  const faqs = [
    {
      question: "What regions in Gujarat do you serve?",
      answer:
        "We provide architecture services across Gujarat including Surat, Ahmedabad, Vadodara, Rajkot, and other major cities. Our team has expertise in local regulations and construction practices across the state.",
    },
    {
      question: "What is your experience with commercial architecture in Gujarat?",
      answer:
        "We have completed numerous commercial projects across Gujarat including office buildings, retail spaces, industrial facilities, and mixed-use developments. Our commercial designs prioritize functionality and aesthetic appeal.",
    },
    {
      question: "How do you handle different climate conditions across Gujarat?",
      answer:
        "Our designs account for Gujarat's climate variations. We incorporate features like adequate ventilation, heat management, and weather-resistant materials suitable for different regions within Gujarat.",
    },
    {
      question: "Do you provide online consultations for Gujarat projects?",
      answer:
        "Yes, we offer online consultations for clients across Gujarat. We use digital tools for design presentations, document sharing, and regular project updates.",
    },
    {
      question: "What architectural styles do you specialize in for Gujarat projects?",
      answer:
        "We work with modern, contemporary, traditional, and fusion styles. Each design is customized based on client preferences, local context, and Gujarat's architectural heritage.",
    },
  ]

  const breadcrumbs = [
    { name: "Home", url: "https://mahimarchitects.com" },
    { name: "Architect in Gujarat", url: "https://mahimarchitects.com/architect-in-gujarat" },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Schema Markup */}
      <JsonLd data={getBreadcrumbSchema(breadcrumbs)} />
      <JsonLd data={getProfessionSchema("Architecture Services Across Gujarat", "Professional architectural services for residential and commercial projects across all major cities in Gujarat")} />
      <JsonLd data={getFAQSchema(faqs)} />

      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm mb-8 opacity-80">
            <a href="/" className="hover:underline">
              Home
            </a>
            {" > "}
            <span>Architect in Gujarat</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Professional Architects Across Gujarat - Mahim Architects
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Led by Ashish Patel (15+ years). Architecture services for residential and commercial projects throughout Gujarat state
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition">
            Schedule Consultation
          </button>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold mb-6">Architecture Firm Serving Gujarat State - Led by Ashish Patel</h2>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Mahim Architects - 15+ Years of Excellence</h3>
            <p className="text-gray-700">
              <strong>Ashish Patel</strong>, founder of Mahim Architects, brings <strong>15+ years of proven expertise</strong> in designing residential villas, commercial complexes, office buildings, and retail spaces across Gujarat. Our commitment to innovation and quality has made us the preferred choice for architects in Surat, Ahmedabad, and beyond.
            </p>
          </div>

          <p className="text-lg leading-relaxed mb-8 text-gray-700">
            <strong>Mahim Architects by Ashish Patel</strong> is a leading architecture firm providing comprehensive design and planning services
            across Gujarat. Whether you're looking for residential architecture in Surat, commercial design in
            Ahmedabad, or architectural services in any other city in Gujarat, we bring expertise and innovation
            to every project.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">Our Service Areas in Gujarat</h2>

          <ul className="grid grid-cols-2 gap-4 mb-8">
            <li className="text-gray-700 flex items-center gap-2">
              <span className="text-blue-600">◆</span> Surat
            </li>
            <li className="text-gray-700 flex items-center gap-2">
              <span className="text-blue-600">◆</span> Ahmedabad
            </li>
            <li className="text-gray-700 flex items-center gap-2">
              <span className="text-blue-600">◆</span> Vadodara
            </li>
            <li className="text-gray-700 flex items-center gap-2">
              <span className="text-blue-600">◆</span> Rajkot
            </li>
            <li className="text-gray-700 flex items-center gap-2">
              <span className="text-blue-600">◆</span> Gandhinagar
            </li>
            <li className="text-gray-700 flex items-center gap-2">
              <span className="text-blue-600">◆</span> Junagadh
            </li>
            <li className="text-gray-700 flex items-center gap-2">
              <span className="text-blue-600">◆</span> Bhavnagar
            </li>
            <li className="text-gray-700 flex items-center gap-2">
              <span className="text-blue-600">◆</span> Anand
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-6">Architecture Services Across Gujarat</h2>

          <h3 className="text-xl font-bold mt-8 mb-4">Residential Architecture in Gujarat</h3>

          <p className="text-gray-700 mb-4">
            From individual homes to large residential complexes, we design residential spaces that provide comfort,
            functionality, and modern aesthetics. Our residential projects across Gujarat include:
          </p>

          <ul className="space-y-2 mb-8 text-gray-700 list-disc list-inside">
            <li>Residential villas and independent houses</li>
            <li>Apartment complexes and societies</li>
            <li>Gated communities and townships</li>
            <li>Luxury residential projects</li>
            <li>Cost-effective housing solutions</li>
          </ul>

          <h3 className="text-xl font-bold mt-8 mb-4">Commercial Architecture in Gujarat</h3>

          <p className="text-gray-700 mb-4">
            Our commercial architecture expertise spans various sectors across Gujarat:
          </p>

          <ul className="space-y-2 mb-8 text-gray-700 list-disc list-inside">
            <li>Office buildings and business complexes</li>
            <li>Retail spaces and shopping centers</li>
            <li>Industrial facilities and warehouses</li>
            <li>Hospitality projects (hotels, resorts)</li>
            <li>Mixed-use developments</li>
            <li>Corporate headquarters</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-6">Why Choose Architecture Firm Services Across Gujarat?</h2>

          <ul className="space-y-4 mb-8">
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold flex-shrink-0">✓</span>
              <span className="text-gray-700">
                <strong>State-Wide Expertise:</strong> Understanding of regulations and practices in all major
                cities
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold flex-shrink-0">✓</span>
              <span className="text-gray-700">
                <strong>Multi-City Project Management:</strong> Experienced in coordinating projects across
                different locations
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold flex-shrink-0">✓</span>
              <span className="text-gray-700">
                <strong>Local Knowledge:</strong> Familiarity with local authorities and approval processes
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold flex-shrink-0">✓</span>
              <span className="text-gray-700">
                <strong>Climate Adapted Design:</strong> Solutions suited to different regional climates
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold flex-shrink-0">✓</span>
              <span className="text-gray-700">
                <strong>Cost-Effective Solutions:</strong> Competitive pricing without compromising quality
              </span>
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-6">Key Architectural Specializations</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="font-bold text-lg mb-2">Residential Architecture</h3>
              <p className="text-gray-700">Expert design for homes, apartments, and residential communities</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="font-bold text-lg mb-2">Commercial Architecture</h3>
              <p className="text-gray-700">Professional designs for offices, retail, and industrial spaces</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="font-bold text-lg mb-2">Interior Architecture</h3>
              <p className="text-gray-700">Functional and beautiful interior space planning</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="font-bold text-lg mb-2">Sustainable Design</h3>
              <p className="text-gray-700">Eco-friendly architectural solutions across Gujarat</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-6">Frequently Asked Questions</h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-l-4 border-blue-600 pl-6 py-2">
                <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-6">Contact Us for Architecture Services in Gujarat</h2>

          <p className="text-gray-700 mb-8">
            Ready to start your architectural project anywhere in Gujarat? Contact Mahim Architects today for
            expert consultation, design, and planning services.
          </p>

          <div className="bg-blue-50 border-2 border-blue-600 rounded-lg p-6 mt-8">
            <h3 className="font-bold text-xl text-gray-900 mb-4">Schedule Your Consultation</h3>
            <p className="text-gray-700 mb-4">
              Get expert architectural advice for your residential or commercial project.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition">
              Book Now
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-slate-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Looking for Architectural Services in Gujarat?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Mahim Architects brings expertise and innovation to projects across the entire state.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition">
          Get Started
        </button>
      </section>
    </main>
  )
}
