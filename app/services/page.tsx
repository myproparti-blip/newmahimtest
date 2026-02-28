"use client"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { 
  CheckCircle, 
  Users, 
  Briefcase, 
  Zap, 
  Shield, 
  Handshake,
  Heart,
  Star,
  TrendingUp,
  Eye,
  Building2,
  Lightbulb,
  Palette,
  Layout,
  Package,
  TrendingUp as Trends,
  Hammer
} from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState(0)
  const [hoveredCommitment, setHoveredCommitment] = useState<number | null>(null)

  const allServices = [
    { icon: Building2, title: "Architecture", category: "Design" },
    { icon: Zap, title: "Revit BIM Service", category: "BIM" },
    { icon: Layout, title: "Outsourcing", category: "Support" },
    { icon: Package, title: "Furniture", category: "Interior" },
    { icon: Hammer, title: "Engineering", category: "Technical" },
    { icon: Layout, title: "BIM Drafting", category: "BIM" },
    { icon: Lightbulb, title: "PMC", category: "Management" },
    { icon: Zap, title: "Lighting", category: "Design" },
    { icon: Building2, title: "Construction", category: "Build" },
    { icon: Layout, title: "BIM Modelling", category: "BIM" },
    { icon: Briefcase, title: "Valuation", category: "Analysis" },
    { icon: Palette, title: "Graphics", category: "Visual" },
    { icon: Building2, title: "Structure Design", category: "Technical" },
    { icon: Layout, title: "Architectural BIM", category: "BIM" },
    { icon: Users, title: "Consultancy", category: "Advisory" },
    { icon: Package, title: "Product Design", category: "Design" },
    { icon: Building2, title: "Master Planning", category: "Planning" },
    { icon: Layout, title: "Structural BIM", category: "BIM" },
    { icon: Zap, title: "Virtual Tour", category: "Digital" },
    { icon: Building2, title: "Urban Design", category: "Planning" },
    { icon: Zap, title: "3D Visualization", category: "Visual" },
    { icon: Building2, title: "Landscape Design", category: "Design" },
    { icon: Briefcase, title: "MEP Services", category: "Technical" },
    { icon: Layout, title: "Interior Design", category: "Interior" },
    { icon: Palette, title: "Exhibition Design", category: "Design" },
    { icon: Layout, title: "Packaging", category: "Design" },
    { icon: Layout, title: "Revit Family Creation", category: "BIM" },
    { icon: Palette, title: "Fashion Design", category: "Design" }
  ]

  const mainServices = [
    {
      icon: Briefcase,
      title: "Comprehensive Services",
      description: "Fully integrated architectural and design solutions covering every aspect of your project from initial concept through final execution",
      features: ["Master Planning", "BIM Services", "Interior Design", "Structural Engineering", "Construction Management"]
    },
    {
      icon: Zap,
      title: "Technical Excellence",
      description: "State-of-the-art digital tools and advanced methodologies including Revit BIM, parametric design, and 3D visualization",
      features: ["Revit BIM Modeling", "3D Visualization & Rendering", "Advanced Documentation", "Structural Design", "MEP Coordination"]
    },
    {
      icon: Palette,
      title: "Creative & Aesthetic Design",
      description: "Transformative design solutions that balance innovation with functionality across diverse architectural disciplines",
      features: ["Landscape Architecture", "Interior Design", "Urban Planning", "Exhibition Design", "Product Design"]
    },
    {
      icon: Building2,
      title: "Complete Project Delivery",
      description: "Full-spectrum services from strategic planning through construction administration with continuous quality oversight",
      features: ["Strategic Masterplanning", "Construction Management", "Project Consultancy", "Client Representation", "Quality Assurance"]
    }
  ]

  const commitments = [
    {
      icon: Heart,
      title: "Client-First Approach",
      description: "Transparent communication and collaborative decision-making throughout every project phase, ensuring your vision is prioritized",
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: CheckCircle,
      title: "Industry Expertise",
      description: "Decades of combined professional experience across diverse project types, scales, and architectural styles",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Handshake,
      title: "Trusted Partnership",
      description: "We function as extension of your team, invested in long-term success and relationship building beyond project completion",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Star,
      title: "Design Excellence",
      description: "Meticulously crafted solutions that exceed industry standards, ensuring your project becomes a landmark achievement",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: TrendingUp,
      title: "Innovation Leadership",
      description: "Continuous investment in cutting-edge technologies, methodologies, and sustainable design practices",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      icon: Eye,
      title: "Quality Assurance",
      description: "Rigorous quality control at every stage, from design documentation to construction execution and final delivery",
      gradient: "from-pink-500 to-rose-500"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_45%,rgba(217,119,6,0.08)_0%,transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_55%,rgba(180,83,9,0.08)_0%,transparent_50%)] pointer-events-none" />

        <motion.div 
          className="max-w-4xl mx-auto text-center relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-amber-100 border border-amber-300">
            <span className="text-sm font-medium text-amber-900">Professional Support</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-neutral-900">
            Our Services & Commitment
          </h1>

          <p className="text-lg md:text-xl text-neutral-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Comprehensive architectural services backed by integrated expertise, credible professionals, and unwavering commitment to excellence
          </p>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="relative px-4 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">What We Offer</h2>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              Integrated services and expertise to bring your vision to life
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {mainServices.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  onClick={() => setSelectedService(index)}
                  className={`group relative cursor-pointer transition-all duration-300 ${
                    selectedService === index ? 'ring-2 ring-amber-500' : ''
                  }`}
                >
                  <div className="absolute inset-0 bg-amber-100 rounded-2xl opacity-0 group-hover:opacity-50 blur-xl transition-all duration-300" />
                  
                  <div className="relative p-8 rounded-2xl bg-white border border-neutral-200 group-hover:border-amber-400 group-hover:shadow-lg transition-all duration-300 h-full">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-amber-100 border border-amber-300 group-hover:border-amber-400 transition-all duration-300">
                        <Icon className="w-6 h-6 text-amber-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-neutral-900 flex-1">{service.title}</h3>
                    </div>
                    
                    <p className="text-neutral-600 mb-6 leading-relaxed">{service.description}</p>
                    
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center gap-2 text-sm text-neutral-700"
                        >
                          <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* All Services Grid Section */}
      <section className="relative px-4 py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Complete Service Portfolio</h2>
            <p className="text-neutral-600 text-lg max-w-3xl mx-auto">
              Explore our full range of professional services covering all aspects of architectural and design excellence
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {allServices.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-amber-100 rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition-all duration-300" />
                  <div className="relative p-6 rounded-xl bg-white border border-neutral-200 group-hover:border-amber-400 group-hover:shadow-lg transition-all duration-300 text-center h-full flex flex-col items-center justify-center">
                    <Icon className="w-8 h-8 text-amber-600 mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-sm font-semibold text-neutral-900 leading-tight">{service.title}</h3>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="relative px-4 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Our Commitment to You</h2>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              Clear, credible, and reliable – these are the foundations of our relationship with every client
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {commitments.map((commitment, index) => {
              const Icon = commitment.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  onMouseEnter={() => setHoveredCommitment(index)}
                  onMouseLeave={() => setHoveredCommitment(null)}
                  className="relative group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${commitment.gradient} rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-all duration-300`} />
                  
                  <div className={`relative p-8 rounded-2xl bg-white border border-neutral-200 group-hover:border-amber-400 group-hover:shadow-lg transition-all duration-300 h-full flex flex-col`}>
                    <div className={`p-4 rounded-xl bg-amber-100 w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-6 h-6 text-amber-600`} />
                    </div>
                    
                    <h3 className="text-xl font-bold text-neutral-900 mb-3">{commitment.title}</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed flex-1">{commitment.description}</p>
                    
                    {hoveredCommitment === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4 pt-4 border-t border-neutral-200 text-amber-600 text-sm font-medium flex items-center gap-2"
                      >
                        <span>Learn more</span>
                        <span>→</span>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative px-4 py-20 md:py-28">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Why Partner With Us</h2>
            <p className="text-neutral-600 text-lg">
              Proven expertise paired with unwavering commitment to your success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Integrated Services",
                description: "Complete architectural solutions from concept to execution, eliminating the need for multiple vendors",
                icon: Briefcase
              },
              {
                title: "Expert Team",
                description: "Award-winning architects and designers with extensive experience across diverse project types",
                icon: Users
              },
              {
                title: "Proven Track Record",
                description: "Hundreds of successful projects delivered on time and within budget across various sectors",
                icon: TrendingUp
              },
              {
                title: "Innovation-Driven",
                description: "Cutting-edge design solutions utilizing latest technologies and sustainable practices",
                icon: Zap
              }
            ].map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-white border border-neutral-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-amber-100 border border-amber-300">
                      <Icon className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      <p className="text-neutral-600 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
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
              <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Ready to Get Started?</h3>
              <p className="text-neutral-700 mb-8 text-lg">Let's discuss how our integrated expertise can bring your vision to life</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <motion.a
                  href="https://wa.me/917046127242"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-4 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-medium hover:shadow-lg hover:shadow-amber-600/50 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule Consultation
                </motion.a>
                <Link href="/portfolio">
                  <motion.button 
                    className="px-10 py-4 rounded-lg border-2 border-amber-600 text-amber-600 font-medium hover:bg-amber-50 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Portfolio
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
