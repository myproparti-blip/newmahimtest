"use client"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Lightbulb, Zap, Target, Layers, Users, Compass } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

export default function DesignStrategyPage() {
  const [activeProcess, setActiveProcess] = useState(0)

  const strategies = [
    {
      icon: Compass,
      title: "Discovery & Analysis",
      description: "Comprehensive analysis of site context, stakeholder needs, market trends, and regulatory requirements to establish a solid foundation",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Lightbulb,
      title: "Conceptualization",
      description: "Generative design thinking sessions to explore innovative solutions, spatial relationships, and aesthetic concepts",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Layers,
      title: "Refinement",
      description: "Detailed development of architectural designs including structural, mechanical, and aesthetic refinements",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Target,
      title: "Optimization",
      description: "Fine-tuning design elements for optimal functionality, sustainability, and aesthetic excellence",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Continuous engagement with clients, consultants, and stakeholders for feedback and alignment",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: Zap,
      title: "Implementation",
      description: "Seamless execution from design documentation through construction administration and project delivery",
      color: "from-rose-500 to-pink-500"
    }
  ]

  const processSteps = [
    {
      number: "01",
      title: "Research & Planning",
      description: "In-depth analysis of site context, building regulations, sustainability requirements, and architectural precedents to establish strategic parameters"
    },
    {
      number: "02",
      title: "Strategic Design",
      description: "Develop conceptual frameworks and design narratives that align with project objectives, user needs, and environmental considerations"
    },
    {
      number: "03",
      title: "Creative Execution",
      description: "Transform strategic concepts into detailed architectural documentation, 3D visualizations, and construction-ready drawings"
    },
    {
      number: "04",
      title: "Validation & Refinement",
      description: "Iterative refinement through stakeholder feedback, BIM coordination, and optimization for construction efficiency"
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-50 via-white to-neutral-50">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(217,119,6,0.08)_0%,transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(180,83,9,0.08)_0%,transparent_50%)] pointer-events-none" />

        <motion.div 
          className="max-w-4xl mx-auto text-center relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-amber-100 border border-amber-300">
            <span className="text-sm font-medium text-amber-900">Our Methodology</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-neutral-900">
            Design Strategy in Action
          </h1>

          <p className="text-lg md:text-xl text-neutral-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Strategic design thinking combined with innovative execution creates spaces that not only look extraordinary but function flawlessly
          </p>
        </motion.div>
      </section>

      {/* Strategy Grid */}
      <section className="relative px-4 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Our Design Approach</h2>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              A comprehensive strategy that balances creativity with pragmatism
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {strategies.map((strategy, index) => {
              const Icon = strategy.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl"
                >
                  <div className="absolute inset-0 bg-white border border-neutral-200" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${strategy.color} opacity-0 group-hover:opacity-10 transition-all duration-300`} />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral-100 opacity-0 group-hover:opacity-100 transition-all duration-300" />

                  <div className="relative p-8 h-full flex flex-col justify-between">
                    <div className={`p-4 rounded-xl bg-amber-100 w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-6 h-6 text-amber-600`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-neutral-900 mb-3">{strategy.title}</h3>
                      <p className="text-neutral-600 text-sm leading-relaxed">{strategy.description}</p>
                    </div>
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-400 to-amber-500 opacity-0 group-hover:opacity-5 rounded-full blur-2xl transition-all duration-300 -z-10`} />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="relative px-4 py-20 md:py-28">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Our Process</h2>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              Four strategic phases that transform ideas into reality
            </p>
          </motion.div>

          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group cursor-pointer"
                onMouseEnter={() => setActiveProcess(index)}
              >
                <div className="absolute -left-1 top-0 h-full w-1 bg-gradient-to-b from-amber-500 via-orange-500 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                
                <div className="relative p-8 rounded-2xl bg-white border border-neutral-200 group-hover:border-amber-400 group-hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-100/30 via-orange-100/30 to-amber-100/30 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  
                  <div className="relative z-10 flex items-center gap-6">
                    <div className="flex-shrink-0">
                      <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 border border-amber-300 group-hover:border-amber-400 transition-all duration-300">
                        <span className="text-2xl font-bold text-amber-600">
                          {step.number}
                        </span>
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-neutral-900 mb-2">{step.title}</h3>
                      <p className="text-neutral-600 text-base leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Principles */}
      <section className="relative px-4 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Design Principles</h2>
            <p className="text-neutral-600 text-lg">
              Core values that guide every design decision
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "User-Centric Design",
                description: "Every design decision is rooted in comprehensive user research, behavioral analysis, and accessibility considerations"
              },
              {
                title: "Innovation & Technology",
                description: "Leveraging BIM technology, parametric design, and digital fabrication for cutting-edge architectural solutions"
              },
              {
                title: "Spatial Excellence",
                description: "Creating harmonious spatial relationships that enhance functionality, flow, and user experience"
              },
              {
                title: "Sustainable Design",
                description: "Integrating energy efficiency, renewable materials, and environmental stewardship into every project"
              }
            ].map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-white border border-neutral-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300 group"
              >
                <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                  {principle.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">{principle.description}</p>
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
              <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Ready to Experience Next-Level Design?</h3>
              <p className="text-neutral-700 mb-8 text-lg">Let's collaborate to bring your architectural vision to life through strategic thinking and innovative execution</p>
              <motion.a
                href="https://wa.me/917046127242"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-medium hover:shadow-lg hover:shadow-amber-600/50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start a Project
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
