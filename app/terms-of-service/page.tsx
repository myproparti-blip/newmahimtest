"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { FileText, CheckCircle, AlertCircle, Users, DollarSign, Shield } from "lucide-react"

export default function TermsOfServicePage() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  const sections = [
    {
      icon: FileText,
      title: "Terms",
      content: "Our comprehensive terms governing the use of our website and services",
      id: "terms"
    },
    {
      icon: Users,
      title: "User Responsibilities",
      content: "Your obligations when using our services and accessing our website",
      id: "responsibilities"
    },
    {
      icon: Shield,
      title: "Limitations",
      content: "Important limitations on liability and service availability",
      id: "limitations"
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
            <span className="text-sm font-medium text-amber-900">Legal & Compliance</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-neutral-900">
            Terms of Service
          </h1>
          
          <p className="text-lg md:text-xl text-neutral-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Please read these terms carefully before using our website and services.
          </p>
        </motion.div>
      </section>

      {/* Quick Overview Cards */}
      <section className="relative px-4 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid md:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          >
            {sections.map((section, index) => {
              const Icon = section.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative h-full"
                >
                  <div className="absolute inset-0 bg-amber-100 rounded-2xl opacity-0 group-hover:opacity-50 blur-xl transition-all duration-300" />
                  
                  <div className="relative p-8 rounded-2xl bg-white border border-neutral-200 group-hover:border-amber-400 group-hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-amber-100 border border-amber-300 group-hover:border-amber-400 transition-all duration-300 flex-shrink-0">
                        <Icon className="w-6 h-6 text-amber-600" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">{section.title}</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed flex-1">{section.content}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Detailed Content Section */}
      <section className="relative px-4 py-20 md:py-28">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            {/* Section 1 */}
            <div className="p-8 rounded-2xl bg-white border border-neutral-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-amber-100 border border-amber-300">
                  <FileText className="w-6 h-6 text-amber-600" />
                </div>
                <h2 className="text-2xl font-bold text-neutral-900">1. Agreement to Terms</h2>
              </div>
              <p className="text-neutral-700 leading-relaxed">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service. Mahim Architect reserves the right to make changes to this policy at any time.
              </p>
            </div>

            {/* Section 2 */}
            <div className="p-8 rounded-2xl bg-white border border-neutral-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-amber-100 border border-amber-300">
                  <CheckCircle className="w-6 h-6 text-amber-600" />
                </div>
                <h2 className="text-2xl font-bold text-neutral-900">2. Use License</h2>
              </div>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Permission is granted to temporarily download one copy of the materials (information or software) on Mahim Architect's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="space-y-3 ml-6">
                {[
                  "Modify or copy the materials",
                  "Use the materials for any commercial purpose or for any public display",
                  "Attempt to decompile or reverse engineer any software contained on the website",
                  "Remove any copyright or other proprietary notations from the materials",
                  "Transfer the materials to another person or 'mirror' the materials on any other server",
                  "Violate any applicable laws or regulations related to access to the website"
                ].map((item, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="text-neutral-700"
                  >
                    • {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Section 3 */}
            <div className="p-8 rounded-2xl bg-white border border-neutral-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">3. Disclaimer</h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                The materials on Mahim Architect's website are provided on an 'as is' basis. Mahim Architect makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
              <div className="bg-amber-50 border border-amber-100 p-6 rounded-lg">
                <p className="text-neutral-700 leading-relaxed">
                  Further, Mahim Architect does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <div className="p-8 rounded-2xl bg-white border border-neutral-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-amber-100 border border-amber-300">
                  <Users className="w-6 h-6 text-amber-600" />
                </div>
                <h2 className="text-2xl font-bold text-neutral-900">4. Limitations</h2>
              </div>
              <p className="text-neutral-700 leading-relaxed mb-6">
                In no event shall Mahim Architect or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Mahim Architect's website, even if Mahim Architect or an authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </div>

            {/* Section 5 */}
            <div className="p-8 rounded-2xl bg-white border border-neutral-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">5. Accuracy of Materials</h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                The materials appearing on Mahim Architect's website could include technical, typographical, or photographic errors. Mahim Architect does not warrant that any of the materials on the website are accurate, complete, or current. Mahim Architect may make changes to the materials contained on its website at any time without notice.
              </p>
            </div>

            {/* Section 6 */}
            <div className="p-8 rounded-2xl bg-white border border-neutral-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">6. Links</h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Mahim Architect has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Mahim Architect of the site. Use of any such linked website is at the user's own risk.
              </p>
            </div>

            {/* Section 7 */}
            <div className="p-8 rounded-2xl bg-white border border-neutral-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">7. Modifications</h2>
              <p className="text-neutral-700 leading-relaxed">
                Mahim Architect may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </div>

            {/* Section 8 */}
            <div className="p-8 rounded-2xl bg-white border border-neutral-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-amber-100 border border-amber-300">
                  <AlertCircle className="w-6 h-6 text-amber-600" />
                </div>
                <h2 className="text-2xl font-bold text-neutral-900">8. Governing Law</h2>
              </div>
              <p className="text-neutral-700 leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </div>

          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
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
              <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Questions About Our Terms?</h3>
              <p className="text-neutral-700 mb-8 text-lg">Contact us for any clarifications or concerns</p>
              
              <motion.a
                href="https://wa.me/917046127242"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-medium hover:shadow-lg hover:shadow-amber-600/50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Support
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Info */}
      <section className="relative px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center border-t border-neutral-200 pt-8"
          >
            <p className="text-sm text-neutral-600 mb-2">
              <strong>Last Updated:</strong> February 18, 2026
            </p>
            <p className="text-sm text-neutral-600">
              By using our website and services, you acknowledge that you have read and understood these Terms of Service.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
