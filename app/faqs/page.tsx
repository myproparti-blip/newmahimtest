"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { ChevronDown, HelpCircle, MessageCircle, Phone, Mail } from "lucide-react"
import { useState } from "react"

export default function FAQsPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "What services does Mahim Architect offer?",
      answer: "We provide comprehensive architectural and design services including master planning, BIM services, interior design, structural engineering, 3D visualization, landscape design, and project management. Our integrated approach ensures seamless delivery from concept to completion."
    },
    {
      question: "How long does a typical architectural project take?",
      answer: "Project timelines vary based on complexity, scope, and size. Residential projects typically take 3-6 months, while commercial projects may take 6-12 months or longer. We provide detailed schedules during the initial consultation phase."
    },
    {
      question: "Do you work with clients internationally?",
      answer: "Yes, we have experience working with clients across different regions and time zones. We use advanced communication tools and digital collaboration platforms to ensure seamless coordination regardless of location."
    },
    {
      question: "What is BIM and why is it important?",
      answer: "BIM (Building Information Modeling) is a digital representation of a building's physical and functional characteristics. It improves coordination, reduces errors, enhances visualization, and streamlines construction. We use Revit and other advanced BIM tools for all our projects."
    },
    {
      question: "Can you help with sustainable/green building design?",
      answer: "Absolutely. Sustainability is core to our design philosophy. We integrate energy-efficient systems, renewable materials, waste reduction strategies, and environmental stewardship into every project we undertake."
    },
    {
      question: "What is your design process?",
      answer: "Our process includes: Discovery & Analysis, Conceptualization, Refinement, Optimization, Collaboration, and Implementation. We involve clients at every stage with regular consultations and feedback sessions to ensure alignment with your vision."
    },
    {
      question: "Do you provide 3D visualizations and renders?",
      answer: "Yes, we create high-quality 3D visualizations and photorealistic renders to help you visualize the final design. These are invaluable for presentations, approvals, and marketing purposes."
    },
    {
      question: "How do you handle budget constraints?",
      answer: "We work closely with clients to understand budget parameters from the start. Our team optimizes designs for cost-efficiency without compromising quality, and provides transparent cost estimates at each phase."
    },
    {
      question: "What software and tools do you use?",
      answer: "We utilize industry-leading software including Autodesk Revit, AutoCAD, SketchUp, Adobe Creative Suite, Lumion, and V-Ray for visualization. This ensures compatibility with other design professionals and contractors."
    },
    {
      question: "Do you provide construction administration services?",
      answer: "Yes, we offer comprehensive construction administration including site supervision, quality control, progress monitoring, and coordination with contractors to ensure the design is executed as intended."
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-50 via-white to-neutral-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(217,119,6,0.08)_0%,transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_60%,rgba(180,83,9,0.08)_0%,transparent_50%)] pointer-events-none" />
        
        <motion.div 
          className="max-w-4xl mx-auto text-center relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-amber-100 border border-amber-300">
            <span className="text-sm font-medium text-amber-900">Find Answers</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-neutral-900">
            Frequently Asked Questions
          </h1>
          
          <p className="text-lg md:text-xl text-neutral-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Get answers to common questions about our services, process, and expertise
          </p>
        </motion.div>
      </section>

      {/* FAQs Section */}
      <section className="relative px-4 py-20 md:py-28">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group"
              >
                <motion.button
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  className="w-full p-6 rounded-2xl bg-white border border-neutral-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300 text-left"
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-neutral-900 flex-1">{faq.question}</h3>
                    <motion.div
                      animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 ml-4"
                    >
                      <ChevronDown className="w-6 h-6 text-amber-600" />
                    </motion.div>
                  </div>
                </motion.button>

                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: expandedIndex === index ? 1 : 0,
                    height: expandedIndex === index ? "auto" : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 bg-gradient-to-r from-amber-50 to-orange-50 border-x border-b border-neutral-200 rounded-b-2xl">
                    <p className="text-neutral-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="relative px-4 py-20 md:py-28">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative p-12 rounded-3xl bg-amber-50 border border-amber-200 text-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,119,6,0.05)_0%,transparent_70%)] pointer-events-none" />
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Didn't Find Your Answer?</h3>
              <p className="text-neutral-700 mb-8 text-lg">Our team is ready to help with any additional questions or inquiries</p>
              
              <motion.a
                href="https://wa.me/917046127242"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-medium hover:shadow-lg hover:shadow-amber-600/50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us on WhatsApp
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
