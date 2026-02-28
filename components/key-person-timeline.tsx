"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const milestones = [
  {
    year: "2009",
    title: "Founded Mahim Architects",
    description: "Ashish Patel established Mahim with a vision to redefine contemporary architecture in India.",
    icon: "🏢",
  },
  {
    year: "2012",
    title: "First National Award",
    description: "Recognized for innovative design excellence and sustainable practices in architectural design.",
    icon: "🏆",
  },
  {
    year: "2015",
    title: "Expanded Team",
    description: "Grew the team to 20+ professionals including architects, designers, and engineers.",
    icon: "👥",
  },
  {
    year: "2018",
    title: "International Recognition",
    description: "Won multiple international awards for innovative residential and commercial projects.",
    icon: "🌍",
  },
  {
    year: "2021",
    title: "Landmark Projects",
    description: "Completed 500+ projects spanning residential, commercial, and public spaces.",
    icon: "🎯",
  },
  {
    year: "2024",
    title: "Global Expansion",
    description: "Expanded operations to multiple countries with a commitment to design excellence worldwide.",
    icon: "🚀",
  },
]

export function KeyPersonTimeline() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-neutral-50 to-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Badge className="mb-4 bg-amber-600/20 text-amber-600 hover:bg-amber-600/30 border-amber-600/30">
            JOURNEY
          </Badge>
          <h2 className="text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
            Our <span className="italic font-light text-neutral-600">Story</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            From humble beginnings to industry leadership, our journey reflects unwavering commitment to design excellence.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute right-4 md:left-1/2 md:right-auto md:transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-600 to-amber-600/20" />

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-16">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex gap-4 md:gap-8 items-center ${index % 2 === 0 ? "flex-row md:flex-row" : "flex-row md:flex-row-reverse"}`}
              >
                {/* Content */}
                <div className="flex-1 md:flex-1 lg:flex-1">
                  <Card className={`border-neutral-200/50 hover:border-neutral-300 transition-all duration-300 ${index % 2 === 0 ? "ml-0 md:ml-auto" : "ml-0 md:mr-auto"}`}>
                    <CardContent className="p-6 md:p-8">
                      <Badge className="mb-4 bg-amber-600 hover:bg-amber-700 text-white text-xs md:text-sm">
                        {milestone.year}
                      </Badge>
                      <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
                        {milestone.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Center Circle */}
                <motion.div
                  className="relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-full bg-amber-600 flex items-center justify-center text-xl md:text-2xl border-4 border-white shadow-lg flex-shrink-0"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                >
                  {milestone.icon}
                </motion.div>

                {/* Spacer */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
