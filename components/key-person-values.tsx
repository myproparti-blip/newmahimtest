"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Lightbulb,
  Users,
  Target,
  Leaf,
  Zap,
  Heart,
} from "lucide-react"

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We continuously push boundaries and explore new design methodologies to create forward-thinking architectural solutions.",
    color: "text-yellow-500",
    bgColor: "bg-yellow-50",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Our strength lies in teamwork and close partnerships with clients, consultants, and stakeholders throughout every project.",
    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    icon: Target,
    title: "Excellence",
    description:
      "We are committed to delivering outstanding quality in design, execution, and client service on every project we undertake.",
    color: "text-red-500",
    bgColor: "bg-red-50",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "Environmental responsibility is integral to our design philosophy, creating spaces that are both beautiful and ecologically conscious.",
    color: "text-green-500",
    bgColor: "bg-green-50",
  },
  {
    icon: Zap,
    title: "Efficiency",
    description:
      "We optimize resources and timelines while maintaining the highest standards of quality and attention to detail.",
    color: "text-purple-500",
    bgColor: "bg-purple-50",
  },
  {
    icon: Heart,
    title: "Integrity",
    description:
      "We uphold the highest ethical standards and maintain transparent communication with all our clients and partners.",
    color: "text-pink-500",
    bgColor: "bg-pink-50",
  },
]

export function KeyPersonValues() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Badge className="mb-4 bg-amber-600/20 text-amber-600 hover:bg-amber-600/30 border-amber-600/30">
            CORE VALUES
          </Badge>
          <h2 className="text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
            What We <span className="italic font-light text-neutral-600">Believe In</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Our core values guide every decision and shape our approach to architecture, design, and client relationships.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-neutral-200/50 hover:border-neutral-300 transition-all duration-300 hover:shadow-lg group">
                  <CardContent className="p-8">
                    {/* Icon */}
                    <div className={`mb-6 w-14 h-14 rounded-lg ${value.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-7 h-7 ${value.color}`} />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-neutral-900 mb-3 group-hover:text-amber-600 transition-colors">
                      {value.title}
                    </h3>

                    {/* Description */}
                    <p className="text-neutral-600 leading-relaxed text-sm">{value.description}</p>

                    {/* Accent Line */}
                    <div className="mt-6 h-1 w-12 bg-gradient-to-r from-amber-600 to-amber-400 rounded-full group-hover:w-full transition-all duration-300" />
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
