"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Shield, Lock, Eye, FileText, Mail, Phone, MessageCircle } from "lucide-react"

export default function PrivacyPolicyPage() {
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
      icon: Shield,
      title: "Introduction",
      content: "At Mahim Architect, we are committed to protecting your privacy and ensuring you have a positive experience on our website. This Privacy Policy explains how we collect, use, disclose, and safeguard your information.",
      id: "introduction"
    },
    {
      icon: Eye,
      title: "Information We Collect",
      content: "Personal Data, Newsletter Subscriptions, Website Usage Data, Cookies, and Contact Inquiries",
      id: "information"
    },
    {
      icon: Lock,
      title: "Data Security",
      content: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
      id: "security"
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
            <span className="text-sm font-medium text-amber-900">Your Privacy Matters</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-neutral-900">
            Privacy Policy
          </h1>
          
          <p className="text-lg md:text-xl text-neutral-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Transparent, secure, and compliant. Learn how we protect and respect your personal information.
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
                  <Shield className="w-6 h-6 text-amber-600" />
                </div>
                <h2 className="text-2xl font-bold text-neutral-900">1. Introduction</h2>
              </div>
              <p className="text-neutral-700 leading-relaxed">
                At Mahim Architect, we are committed to protecting your privacy and ensuring you have a positive experience on our website. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
            </div>

            {/* Section 2 */}
            <div className="p-8 rounded-2xl bg-white border border-neutral-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-amber-100 border border-amber-300">
                  <Eye className="w-6 h-6 text-amber-600" />
                </div>
                <h2 className="text-2xl font-bold text-neutral-900">2. Information We Collect</h2>
              </div>
              <p className="text-neutral-700 leading-relaxed mb-6">We may collect information about you in a variety of ways:</p>
              <ul className="space-y-3 ml-6">
                {[
                  { title: "Personal Data", desc: "Name, email address, phone number, and other contact information you voluntarily provide" },
                  { title: "Newsletter Subscriptions", desc: "Email address when you subscribe to our newsletter" },
                  { title: "Website Usage Data", desc: "Information about your browsing activity, IP address, browser type, and pages visited" },
                  { title: "Cookies", desc: "Automatically collected through cookies and similar tracking technologies" },
                  { title: "Contact Inquiries", desc: "Information provided when you submit contact forms or inquiries" }
                ].map((item, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="text-neutral-700"
                  >
                    <strong>{item.title}:</strong> {item.desc}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Section 3 */}
            <div className="p-8 rounded-2xl bg-white border border-neutral-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">3. Use of Your Information</h2>
              <p className="text-neutral-700 leading-relaxed mb-6">We use the information we collect in the following ways:</p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Send you newsletters and promotional materials",
                  "Respond to your inquiries and provide customer support",
                  "Improve our website and services based on your feedback",
                  "Analyze website usage and user behavior",
                  "Comply with legal obligations",
                  "Prevent fraud and enhance security"
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-start gap-3 p-3 rounded-lg bg-amber-50 border border-amber-100"
                  >
                    <span className="text-amber-600 font-bold">✓</span>
                    <span className="text-neutral-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Section 4 */}
            <div className="p-8 rounded-2xl bg-white border border-neutral-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">4. Disclosure of Your Information</h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only when:
              </p>
              <ul className="space-y-3 ml-6">
                {[
                  "Required by law or legal process",
                  "Necessary to protect our rights and safety",
                  "Working with trusted service providers under strict confidentiality agreements",
                  "You have explicitly consented to the sharing"
                ].map((item, idx) => (
                  <li key={idx} className="text-neutral-700 flex items-center gap-2">
                    <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 5 */}
            <div className="p-8 rounded-2xl bg-white border border-neutral-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">5. Newsletter and Communication</h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                You can manage your communication preferences easily:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-neutral-700">✓ Click the "unsubscribe" link in any newsletter email</li>
                <li className="text-neutral-700">✓ Contact us directly at mahimhr01@gmail.com</li>
                <li className="text-neutral-700">✓ WhatsApp: +91 70461 27242</li>
              </ul>
            </div>

            {/* Section 6 */}
            <div className="p-8 rounded-2xl bg-white border border-neutral-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-amber-100 border border-amber-300">
                  <Lock className="w-6 h-6 text-amber-600" />
                </div>
                <h2 className="text-2xl font-bold text-neutral-900">6. Data Security</h2>
              </div>
              <p className="text-neutral-700 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            {/* Section 7 */}
            <div className="p-8 rounded-2xl bg-white border border-neutral-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">7. Your Privacy Rights</h2>
              <p className="text-neutral-700 leading-relaxed mb-6">Depending on your location, you may have the following rights:</p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Right to access your personal data",
                  "Right to correct inaccurate data",
                  "Right to request deletion of your data",
                  "Right to opt-out of marketing communications",
                  "Right to data portability",
                  "Right to lodge complaints"
                ].map((right, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="p-4 rounded-lg bg-amber-50 border border-amber-100 text-neutral-700"
                  >
                    {right}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Section 8 */}
            <div className="p-8 rounded-2xl bg-white border border-neutral-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">8. Cookies and Tracking</h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Our website uses cookies and similar technologies to enhance your browsing experience:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-neutral-700"><strong>Essential Cookies:</strong> Necessary for website functionality</li>
                <li className="text-neutral-700"><strong>Performance Cookies:</strong> Help us understand how visitors use our website</li>
                <li className="text-neutral-700"><strong>Analytical Cookies:</strong> Track user behavior and website performance</li>
              </ul>
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
              <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Questions About Privacy?</h3>
              <p className="text-neutral-700 mb-8 text-lg">Contact us anytime for privacy inquiries or to exercise your rights</p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-10">
                <motion.a
                  href="mailto:mahimhr01@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  className="p-6 rounded-xl bg-white border border-amber-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300"
                >
                  <Mail className="w-8 h-8 text-amber-600 mx-auto mb-3" />
                  <div className="font-semibold text-neutral-900 mb-1">Email</div>
                  <div className="text-sm text-neutral-600">mahimhr01@gmail.com</div>
                </motion.a>

                <motion.a
                  href="https://wa.me/917046127242"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="p-6 rounded-xl bg-white border border-amber-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300"
                >
                  <MessageCircle className="w-8 h-8 text-amber-600 mx-auto mb-3" />
                  <div className="font-semibold text-neutral-900 mb-1">WhatsApp</div>
                  <div className="text-sm text-neutral-600">+91 70461 27242</div>
                </motion.a>

                <motion.a
                  href="tel:+918238377000"
                  whileHover={{ scale: 1.05 }}
                  className="p-6 rounded-xl bg-white border border-amber-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300"
                >
                  <Phone className="w-8 h-8 text-amber-600 mx-auto mb-3" />
                  <div className="font-semibold text-neutral-900 mb-1">Phone</div>
                  <div className="text-sm text-neutral-600">+91 82383 77000</div>
                </motion.a>
              </div>
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
              By using our website and services, you acknowledge that you have read and understood this Privacy Policy.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
