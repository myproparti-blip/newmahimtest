"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Globe, Smartphone, Layers, Share2, Eye } from "lucide-react"

const features = [
  {
    icon: Globe,
    title: "360° Panoramic Views",
    description: "Explore every angle of our designs with complete 360-degree panoramic imagery.",
  },
  {
    icon: Smartphone,
    title: "Mobile Optimized",
    description: "View tours seamlessly on any device - desktop, tablet, or smartphone.",
  },
  {
    icon: Zap,
    title: "High Resolution",
    description: "Crystal-clear images with zoom capabilities up to 3x magnification.",
  },
  {
    icon: Layers,
    title: "Interactive Navigation",
    description: "Intuitive drag-and-drop controls for smooth navigation through spaces.",
  },
  {
    icon: Share2,
    title: "Easy Sharing",
    description: "Share your favorite tours directly with colleagues and clients.",
  },
  {
    icon: Eye,
    title: "Expert Annotations",
    description: "Detailed descriptions highlighting key design elements and features.",
  },
]

export function VirtualTourFeatures() {
  return (
    <section className="py-24 bg-gradient-to-b from-neutral-50 to-white">
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
            TECHNOLOGY
          </Badge>
          <h2 className="text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
            Cutting-Edge <span className="italic font-light text-neutral-600">Visualization</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Our virtual tour platform combines the latest web technology with stunning photography to bring our
            architectural designs to life.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-neutral-200/50 hover:border-neutral-300 transition-all duration-300 hover:shadow-lg group">
                  <CardContent className="p-8">
                    {/* Icon */}
                    <div className="mb-6 w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center group-hover:bg-amber-600 transition-all duration-300">
                      <Icon className="w-6 h-6 text-amber-600 group-hover:text-white transition-colors" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-neutral-900 mb-3">{feature.title}</h3>

                    {/* Description */}
                    <p className="text-neutral-600 leading-relaxed text-sm">{feature.description}</p>
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
