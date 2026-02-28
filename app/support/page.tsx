"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { MessageCircle, Mail, Phone, Clock, MapPin, Globe, Headphones, FileText } from "lucide-react"

export default function SupportPage() {
  const supportChannels = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Quick messaging and direct communication",
      contact: "+91 70461 27242",
      link: "https://wa.me/917046127242",
      availability: "24/7"
    },
    {
      icon: Mail,
      title: "Email",
      description: "Detailed inquiries and documentation",
      contact: "mahimhr01@gmail.com",
      link: "mailto:mahimhr01@gmail.com",
      availability: "Response within 24 hours"
    },
    {
      icon: Phone,
      title: "Phone",
      description: "Direct phone consultation",
      contact: "+91 82383 77000",
      link: "tel:+918238377000",
      availability: "Business hours"
    }
  ]

  const supportServices = [
    {
      icon: Headphones,
      title: "Technical Support",
      description: "Help with project files, software compatibility, and technical documentation"
    },
    {
      icon: FileText,
      title: "Project Documentation",
      description: "Access to project files, drawings, specifications, and progress reports"
    },
    {
      icon: Clock,
      title: "Project Timeline Updates",
      description: "Regular updates on project progress and milestone achievements"
    },
    {
      icon: Globe,
      title: "Consultation Services",
      description: "Expert advice on design challenges and project optimization"
    }
  ]

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

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
            <span className="text-sm font-medium text-amber-900">We're Here to Help</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-neutral-900">
            Support & Assistance
          </h1>
          
          <p className="text-lg md:text-xl text-neutral-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Comprehensive support for your architectural projects and design needs
          </p>
        </motion.div>
      </section>

      {/* Contact Channels */}
      <section className="relative px-4 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Get in Touch</h2>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              Multiple ways to reach our support team
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          >
            {supportChannels.map((channel, index) => {
              const Icon = channel.icon
              return (
                <motion.a
                  key={index}
                  href={channel.link}
                  target={channel.link.startsWith("http") ? "_blank" : undefined}
                  rel={channel.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  variants={itemVariants}
                  className="group"
                >
                  <div className="relative h-full">
                    <div className="absolute inset-0 bg-amber-100 rounded-2xl opacity-0 group-hover:opacity-50 blur-xl transition-all duration-300" />
                    
                    <div className="relative p-8 rounded-2xl bg-white border border-neutral-200 group-hover:border-amber-400 group-hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                      <div className="p-4 rounded-xl bg-amber-100 border border-amber-300 w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-amber-600" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-neutral-900 mb-2">{channel.title}</h3>
                      <p className="text-neutral-600 text-sm mb-6 flex-1">{channel.description}</p>
                      
                      <div className="border-t border-neutral-200 pt-4">
                        <p className="text-lg font-semibold text-amber-600 mb-2">{channel.contact}</p>
                        <p className="text-xs text-neutral-500">Available: {channel.availability}</p>
                      </div>
                    </div>
                  </div>
                </motion.a>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Support Services */}
      <section className="relative px-4 py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Our Support Services</h2>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              Comprehensive assistance throughout your project lifecycle
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          >
            {supportServices.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-8 rounded-2xl bg-white border border-neutral-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex items-start gap-6">
                    <div className="p-4 rounded-xl bg-amber-100 border border-amber-300 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <Icon className="w-6 h-6 text-amber-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-neutral-600 leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Response Time Info */}
      <section className="relative px-4 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Response Times</h2>
            <p className="text-neutral-600 text-lg">
              We prioritize your inquiries and ensure timely responses
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { channel: "WhatsApp", time: "Immediate", detail: "Real-time messaging available 24/7" },
              { channel: "Email", time: "Within 24 hours", detail: "Detailed responses with documentation" },
              { channel: "Phone", time: "Within 2 hours", detail: "During business hours, 9 AM - 6 PM" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100"
              >
                <h3 className="text-lg font-bold text-neutral-900 mb-2">{item.channel}</h3>
                <p className="text-3xl font-bold text-amber-600 mb-2">{item.time}</p>
                <p className="text-neutral-600">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-4 py-20">
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
              <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Ready to Connect?</h3>
              <p className="text-neutral-700 mb-8 text-lg">Reach out to our team and let's discuss your project needs</p>
              
              <motion.a
                href="https://wa.me/917046127242"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-medium hover:shadow-lg hover:shadow-amber-600/50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start a Conversation
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
