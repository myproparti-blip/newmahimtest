"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Star, Award, Users, Building2, Lightbulb, Target } from "lucide-react"

const professionalReviews = [
  {
    title: "Visionary Leadership",
    icon: Lightbulb,
    color: "text-amber-600",
    bgColor: "bg-amber-100",
    borderColor: "border-amber-300",
  },
  {
    title: "Award-Winning Design",
    icon: Award,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    borderColor: "border-blue-300",
  },
  {
    title: "Expert Team Leadership",
    icon: Users,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    borderColor: "border-purple-300",
  },
  {
    title: "Project Excellence",
    icon: Building2,
    color: "text-emerald-600",
    bgColor: "bg-emerald-100",
    borderColor: "border-emerald-300",
  },
  {
    title: "Sustainable Innovation",
    icon: Target,
    color: "text-rose-600",
    bgColor: "bg-rose-100",
    borderColor: "border-rose-300",
  },
  {
    title: "Global Impact",
    icon: Star,
    color: "text-cyan-600",
    bgColor: "bg-cyan-100",
    borderColor: "border-cyan-300",
  },
]

export function KeyPersonJourney() {
  return (
    <section className="py-24 lg:py-22 bg-gradient-to-b from-white via-neutral-50 to-white">
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
            EXPERTISE & ACHIEVEMENTS
          </Badge>
          <h2 className="text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
            What Sets Us <span className="italic font-light text-neutral-600">Apart</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Mahim Architects excels across multiple dimensions of architectural practice
          </p>
        </motion.div>

        {/* Chips/Tags Grid */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 lg:gap-6 max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {professionalReviews.map((review, index) => {
            const IconComponent = review.icon
            return (
              <motion.div
                key={review.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -4 }}
              >
                <div
                  className={`flex items-center gap-3 px-6 lg:px-8 py-4 rounded-full border-2 ${review.borderColor} ${review.bgColor} hover:shadow-lg transition-all duration-300 group cursor-pointer`}
                >
                  <motion.div
                    whileHover={{ rotate: 20, scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <IconComponent className={`w-5 h-5 lg:w-6 lg:h-6 ${review.color}`} />
                  </motion.div>
                  <span className="font-semibold text-sm lg:text-base text-neutral-900 group-hover:text-amber-700 transition-colors">
                    {review.title}
                  </span>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Divider */}
        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto my-16"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        />

        {/* Statistics Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="text-center"
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-4xl lg:text-5xl font-bold text-amber-600 mb-2">500+</div>
            <p className="text-neutral-700 font-semibold">Projects Delivered</p>
          </motion.div>

          <motion.div
            className="text-center"
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-4xl lg:text-5xl font-bold text-amber-600 mb-2">50+</div>
            <p className="text-neutral-700 font-semibold">Expert Team Members</p>
          </motion.div>

          <motion.div
            className="text-center"
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-4xl lg:text-5xl font-bold text-amber-600 mb-2">15+</div>
            <p className="text-neutral-700 font-semibold">Years of Excellence</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}