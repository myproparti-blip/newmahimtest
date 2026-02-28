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

export default function ArchitectInSuratPage() {
  const faqs = [
    {
      question: "What architectural services do you provide in Surat?",
      answer:
        "We provide comprehensive architectural services including residential design, commercial architecture, interior design, building consultations, and 3D visualization for projects in Surat and surrounding areas.",
    },
    {
      question: "How much does architectural design cost in Surat?",
      answer:
        "Our architectural fees are customized based on project scope, complexity, and size. We offer competitive pricing for residential and commercial projects. Contact us for a detailed quote.",
    },
    {
      question: "How long does an architectural project typically take?",
      answer:
        "Project timelines vary based on complexity. Residential projects typically take 2-6 months, while commercial projects may take 6-12 months including design, approvals, and documentation.",
    },
    {
      question: "Do you handle GMC approvals for construction in Surat?",
      answer:
        "Yes, we assist with all municipal approvals including GMC (Greater Municipal Corporation) clearances, building permission, and regulatory compliance for Surat projects.",
    },
    {
      question: "What makes you the best architect in Surat?",
      answer:
        "With years of experience in Surat's real estate market, we combine innovative design with practical knowledge of local regulations, climate, and construction practices.",
    },
  ]

  const breadcrumbs = [
    { name: "Home", url: "https://mahimarchitects.com" },
    { name: "Architect in Surat", url: "https://mahimarchitects.com/architect-in-surat" },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Schema Markup */}
      <JsonLd data={getBreadcrumbSchema(breadcrumbs)} />
      <JsonLd data={getProfessionSchema("Residential & Commercial Architect in Surat", "Professional residential and commercial architecture services in Surat")} />
      <JsonLd data={getFAQSchema(faqs)} />

      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm mb-8 opacity-80">
            <a href="/" className="hover:underline">
              Home
            </a>
            {" > "}
            <span>Architect in Surat</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Professional Architect Services in Surat, Gujarat
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Led by Ashish Patel (15+ years experience). Award-winning residential and commercial architecture designs tailored to Surat's unique needs
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition">
            Schedule Free Consultation
          </button>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold mb-6">Best Architect in Surat for Residential & Commercial Projects</h2>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-2">About Mahim Architects - Led by Ashish Patel</h3>
            <p className="text-gray-700 mb-2">
              <strong>Ashish Patel</strong> is the lead architect at Mahim Architects with <strong>15+ years of experience</strong> in residential and commercial architecture across Surat and Gujarat.
            </p>
            <p className="text-gray-700">
              His expertise spans villa design, apartment complexes, office buildings, and retail spaces. Ashish is committed to creating innovative, functional, and aesthetically pleasing designs that exceed client expectations.
            </p>
          </div>

          <p className="text-lg leading-relaxed mb-8 text-gray-700">
            Looking for the best architect in Surat? <strong>Mahim Architects by Ashish Patel</strong> is your trusted partner for creating
            stunning, functional spaces that enhance your lifestyle. With <strong>15+ years of extensive experience</strong> in Surat's
            real estate market, we understand the unique requirements of residential and commercial projects
            in this vibrant city.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">Why Choose Our Architects in Surat?</h2>

          <ul className="space-y-4 mb-8">
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold flex-shrink-0">✓</span>
              <span className="text-gray-700">
                <strong>Local Expertise:</strong> Deep understanding of Surat's climate, building regulations,
                and construction practices
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold flex-shrink-0">✓</span>
              <span className="text-gray-700">
                <strong>Innovative Design:</strong> Contemporary architectural solutions that reflect your
                vision
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold flex-shrink-0">✓</span>
              <span className="text-gray-700">
                <strong>GMC Approval Expertise:</strong> Seamless navigation through Surat Municipal Corporation
                approvals
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold flex-shrink-0">✓</span>
              <span className="text-gray-700">
                <strong>Cost-Effective Solutions:</strong> Quality designs within your budget
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold flex-shrink-0">✓</span>
              <span className="text-gray-700">
                <strong>Timely Delivery:</strong> Committed to project deadlines and milestones
              </span>
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-6">Residential Architecture Services in Surat</h2>

          <p className="text-gray-700 mb-6">
            From modern villas to contemporary apartments, our residential architecture team creates homes
            that balance aesthetics with functionality. We specialize in:
          </p>

          <ul className="space-y-2 mb-8 text-gray-700 list-disc list-inside">
            <li>Luxury villa design and planning</li>
            <li>Apartment complex architecture</li>
            <li>Independent house design</li>
            <li>Interior layout optimization</li>
            <li>Sustainable home design</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-6">Commercial Architecture in Surat</h2>

          <p className="text-gray-700 mb-6">
            We design commercial spaces that drive business success. Our commercial architecture includes:
          </p>

          <ul className="space-y-2 mb-8 text-gray-700 list-disc list-inside">
            <li>Office building design</li>
            <li>Retail space architecture</li>
            <li>Corporate headquarters</li>
            <li>Commercial complexes</li>
            <li>Mixed-use development</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-6">Our Architectural Process</h2>

          <ol className="space-y-4 mb-8">
            <li className="flex gap-3">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full flex-shrink-0 font-bold">1</span>
              <div>
                <strong className="text-gray-900">Consultation:</strong>
                <p className="text-gray-700">Understand your vision, requirements, and budget</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full flex-shrink-0 font-bold">2</span>
              <div>
                <strong className="text-gray-900">Conceptual Design:</strong>
                <p className="text-gray-700">Create initial designs and 3D visualizations</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full flex-shrink-0 font-bold">3</span>
              <div>
                <strong className="text-gray-900">Detailed Planning:</strong>
                <p className="text-gray-700">Develop construction drawings and specifications</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full flex-shrink-0 font-bold">4</span>
              <div>
                <strong className="text-gray-900">Approvals:</strong>
                <p className="text-gray-700">Handle GMC and regulatory approvals</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full flex-shrink-0 font-bold">5</span>
              <div>
                <strong className="text-gray-900">Construction Support:</strong>
                <p className="text-gray-700">Provide on-site supervision and guidance</p>
              </div>
            </li>
          </ol>

          <h2 className="text-2xl font-bold mt-12 mb-6">Frequently Asked Questions About Architects in Surat</h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-l-4 border-blue-600 pl-6 py-2">
                <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-6">Get Your Architectural Design Done in Surat</h2>

          <p className="text-gray-700 mb-8">
            Ready to transform your architectural dreams into reality? Contact Mahim Architects today for
            expert consultation on residential or commercial projects in Surat. Our team of experienced
            architects is committed to delivering exceptional designs that exceed your expectations.
          </p>

          <div className="bg-blue-50 border-2 border-blue-600 rounded-lg p-6 mt-8">
            <h3 className="font-bold text-xl text-gray-900 mb-4">Free Initial Consultation</h3>
            <p className="text-gray-700 mb-4">
              Book a free 30-minute consultation with our architects to discuss your project requirements.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition">
              Schedule Now
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-slate-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Looking for Professional Architecture Services in Surat?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Contact Mahim Architects today to discuss your residential or commercial project.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition">
          Get Started Today
        </button>
      </section>
    </main>
  )
}
