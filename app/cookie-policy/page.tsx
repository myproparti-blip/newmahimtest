"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Cookie, Settings, Eye, AlertCircle, CheckCircle, Shield } from "lucide-react"

export default function CookiePolicyPage() {
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
      icon: Cookie,
      title: "What Are Cookies",
      content: "Small files stored on your device to enhance your browsing experience",
      id: "what"
    },
    {
      icon: Eye,
      title: "How We Use Them",
      content: "Understanding how cookies help us provide better services to you",
      id: "how"
    },
    {
      icon: Settings,
      title: "Your Control",
      content: "Managing your cookie preferences and browser settings",
      id: "control"
    }
  ]

  const cookieTypes = [
    {
      name: "Essential Cookies",
      description: "Necessary for the website to function properly. Enable core functionalities like page navigation and secure access to web areas.",
      examples: "Session tokens, authentication cookies"
    },
    {
      name: "Performance Cookies",
      description: "Help us understand how visitors interact with our website by collecting and reporting information anonymously.",
      examples: "Analytics cookies, tracking pixels"
    },
    {
      name: "Functional Cookies",
      description: "Remember your preferences and allow us to provide enhanced and more personalized features.",
      examples: "Language preferences, layout settings"
    },
    {
      name: "Marketing Cookies",
      description: "Track your visits to our website and other sites to deliver targeted advertisements relevant to you.",
      examples: "Advertising cookies, social media cookies"
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
            <span className="text-sm font-medium text-amber-900">Cookie Information</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-neutral-900">
            Cookie Policy
          </h1>
          
          <p className="text-lg md:text-xl text-neutral-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Understand how we use cookies and how you can control them.
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
                  <Cookie className="w-6 h-6 text-amber-600" />
                </div>
                <h2 className="text-2xl font-bold text-neutral-900">1. What Are Cookies?</h2>
              </div>
              <p className="text-neutral-700 leading-relaxed">
                Cookies are small text files that are stored on your device when you visit a website. They contain information about your browsing habits and preferences. Cookies are widely used to make websites work more efficiently and to provide reporting information to website owners.
              </p>
            </div>

            {/* Section 2 - Cookie Types */}
            <div className="p-8 rounded-2xl bg-white border border-neutral-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300">
              <h2 className="text-2xl font-bold text-neutral-900 mb-8">2. Types of Cookies We Use</h2>
              <div className="space-y-6">
                {cookieTypes.map((cookie, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-6 rounded-lg bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-100"
                  >
                    <h3 className="text-lg font-bold text-neutral-900 mb-2">{cookie.name}</h3>
                    <p className="text-neutral-700 mb-3">{cookie.description}</p>
                    <p className="text-sm text-neutral-600">
                      <strong>Examples:</strong> {cookie.examples}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Section 3 */}
            <div className="p-8 rounded-2xl bg-white border border-neutral-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-amber-100 border border-amber-300">
                  <Eye className="w-6 h-6 text-amber-600" />
                </div>
                <h2 className="text-2xl font-bold text-neutral-900">3. How We Use Cookies</h2>
              </div>
              <p className="text-neutral-700 leading-relaxed mb-6">
                We use cookies for various purposes to enhance your experience on our website:
              </p>
              <ul className="space-y-3 ml-6">
                {[
                  "Authentication and security to ensure you remain logged in and protected",
                  "Remembering your preferences and settings to personalize your experience",
                  "Analyzing how you use our website to help us improve our services",
                  "Serving targeted advertisements that may be of interest to you",
                  "Tracking the effectiveness of our marketing campaigns",
                  "Maintaining session information for smooth navigation"
                ].map((item, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="text-neutral-700 flex items-center gap-2"
                  >
                    <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Section 4 */}
            <div className="p-8 rounded-2xl bg-white border border-neutral-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-amber-100 border border-amber-300">
                  <Settings className="w-6 h-6 text-amber-600" />
                </div>
                <h2 className="text-2xl font-bold text-neutral-900">4. Managing Your Cookies</h2>
              </div>
              <p className="text-neutral-700 leading-relaxed mb-6">
                You have full control over cookies. Most browsers allow you to:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "View what cookies are set on your device",
                  "Delete cookies from your device",
                  "Block all cookies or specific types of cookies",
                  "Receive notifications when a cookie is being set",
                  "Clear browsing data when you close your browser"
                ].map((option, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="p-4 rounded-lg bg-amber-50 border border-amber-100 text-neutral-700 flex items-start gap-2"
                  >
                    <span className="text-amber-600 font-bold mt-1">✓</span>
                    <span>{option}</span>
                  </motion.div>
                ))}
              </div>
              <p className="text-neutral-700 leading-relaxed mt-6">
                <strong>Note:</strong> Disabling certain cookies may affect the functionality of our website and your user experience.
              </p>
            </div>

            {/* Section 5 */}
            <div className="p-8 rounded-2xl bg-white border border-neutral-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">5. Third-Party Cookies</h2>
              <p className="text-neutral-700 leading-relaxed mb-6">
                We may allow third-party service providers to place cookies on your device for the following purposes:
              </p>
              <ul className="space-y-3 ml-6">
                {[
                  "Analytics and website performance tracking",
                  "Social media integration and sharing features",
                  "Advertising networks for targeted marketing",
                  "Customer support and chat services"
                ].map((item, idx) => (
                  <li key={idx} className="text-neutral-700 flex items-center gap-2">
                    <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-neutral-700 leading-relaxed mt-6">
                These third parties have their own privacy policies governing their use of cookies.
              </p>
            </div>

            {/* Section 6 */}
            <div className="p-8 rounded-2xl bg-white border border-neutral-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-amber-100 border border-amber-300">
                  <Shield className="w-6 h-6 text-amber-600" />
                </div>
                <h2 className="text-2xl font-bold text-neutral-900">6. Cookie Consent</h2>
              </div>
              <p className="text-neutral-700 leading-relaxed mb-6">
                When you first visit our website, we will ask for your consent to use certain types of cookies. You can:
              </p>
              <ul className="space-y-3 ml-6">
                {[
                  "Accept all cookies and continue using the website",
                  "Reject non-essential cookies and use the website with minimal tracking",
                  "Customize your cookie preferences for specific types",
                  "Change your preferences at any time through our cookie settings"
                ].map((item, idx) => (
                  <li key={idx} className="text-neutral-700 flex items-center gap-2">
                    <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 7 */}
            <div className="p-8 rounded-2xl bg-white border border-neutral-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">7. Browser-Specific Instructions</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { browser: "Google Chrome", path: "Settings → Privacy and security → Cookies and other site data" },
                  { browser: "Mozilla Firefox", path: "Preferences → Privacy & Security → Cookies and Site Data" },
                  { browser: "Safari", path: "Preferences → Privacy → Cookies and website data" },
                  { browser: "Microsoft Edge", path: "Settings → Privacy → Cookies and other site permissions" }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="p-4 rounded-lg bg-amber-50 border border-amber-100"
                  >
                    <p className="font-bold text-neutral-900 mb-2">{item.browser}</p>
                    <p className="text-sm text-neutral-700">{item.path}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Section 8 */}
            <div className="p-8 rounded-2xl bg-white border border-neutral-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-amber-100 border border-amber-300">
                  <AlertCircle className="w-6 h-6 text-amber-600" />
                </div>
                <h2 className="text-2xl font-bold text-neutral-900">8. Policy Updates</h2>
              </div>
              <p className="text-neutral-700 leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our practices. We will notify you of any significant changes by posting the updated policy on our website with a revised "Last Updated" date. Your continued use of our website constitutes your acceptance of the updated Cookie Policy.
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
              <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Have Cookie Questions?</h3>
              <p className="text-neutral-700 mb-8 text-lg">Contact us for more information about our cookie practices</p>
              
              <motion.a
                href="https://wa.me/917046127242"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-medium hover:shadow-lg hover:shadow-amber-600/50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
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
              By using our website, you acknowledge that you have read and understood this Cookie Policy.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
