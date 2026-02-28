"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const milestones = [
  {
    year: "2009",
    title: "Founded Mahim Architects",
    description: "Ashish Patel established Mahim with a vision to redefine contemporary architecture in India.",
    icon: "🏢",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    year: "2012",
    title: "First National Award",
    description: "Recognized for innovative design excellence and sustainable practices in architectural design.",
    icon: "🏆",
    color: "from-yellow-500 to-yellow-600",
    bgColor: "bg-yellow-50",
  },
  {
    year: "2015",
    title: "Expanded Team",
    description: "Grew the team to 20+ professionals including architects, designers, and engineers.",
    icon: "👥",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
  },
  {
    year: "2018",
    title: "International Recognition",
    description: "Won multiple international awards for innovative residential and commercial projects.",
    icon: "🌍",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    year: "2021",
    title: "Landmark Projects",
    description: "Completed 500+ projects spanning residential, commercial, and public spaces.",
    icon: "🎯",
    color: "from-pink-500 to-pink-600",
    bgColor: "bg-pink-50",
  },
  {
    year: "2024",
    title: "Global Expansion",
    description: "Expanded operations to multiple countries with a commitment to design excellence worldwide.",
    icon: "🚀",
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50",
  },
]

export function KeyPersonTimelineAlt() {
  return (
    <section className="py-24 lg:py-32 bg-white">
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

        {/* Horizontal Timeline */}
        <div className="relative mb-20">
          {/* Progress Line */}
          <motion.div
            className="absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            style={{ originX: 0 }}
          />

          {/* Timeline Items */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative z-10">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                {/* Circle Connector */}
                <motion.div
                  className="w-12 h-12 rounded-full bg-white border-4 border-amber-600 flex items-center justify-center text-xl mb-6 shadow-lg hover:scale-125 transition-transform cursor-pointer group"
                  whileHover={{ scale: 1.2 }}
                >
                  {milestone.icon}
                </motion.div>

                {/* Year Badge */}
                <Badge className="mb-4 bg-amber-600 hover:bg-amber-700 text-white whitespace-nowrap">
                  {milestone.year}
                </Badge>

                {/* Title */}
                <h3 className="text-center text-sm md:text-base font-bold text-neutral-900 mb-2 line-clamp-2">
                  {milestone.title}
                </h3>

                {/* Connector Dot */}
                <div className="w-2 h-2 rounded-full bg-amber-600 mb-3" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Detailed Cards Below Timeline */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full border-2 border-transparent hover:border-amber-600 transition-all duration-300 overflow-hidden group`}>
                {/* Color Top Bar */}
                <div className={`h-1 bg-gradient-to-r ${milestone.color}`} />

                <CardContent className="p-6">
                  {/* Icon & Year */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-lg ${milestone.bgColor} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}>
                      {milestone.icon}
                    </div>
                    <Badge className={`bg-gradient-to-r ${milestone.color} text-white hover:scale-105 transition-transform`}>
                      {milestone.year}
                    </Badge>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-neutral-900 mb-3 group-hover:text-amber-600 transition-colors">
                    {milestone.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                    {milestone.description}
                  </p>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-amber-600/20 to-transparent mb-4" />

                  {/* Learn More Link */}
                  <div className="flex items-center gap-2 text-amber-600 font-semibold text-sm group-hover:gap-3 transition-all cursor-pointer">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Summary */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {[
            { label: "Years Active", value: "15+" },
            { label: "Projects", value: "500+" },
            { label: "Awards", value: "25+" },
            { label: "Team Members", value: "50+" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-lg p-6 text-center border border-amber-200/50 hover:shadow-lg transition-all"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl font-bold text-amber-600 mb-2">{stat.value}</div>
              <p className="text-sm font-semibold text-neutral-700 uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
