"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

export function VirtualTourHero() {
  return (
    <section className="relative w-full h-[500px] overflow-hidden bg-gradient-to-br from-neutral-900 to-neutral-800 pt-32">
      {/* Background Images */}
      <div className="absolute inset-0 flex gap-2">
        <div className="flex-1 relative overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop"
            alt="Panoramic view 1"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1 relative overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop"
            alt="Panoramic view 2"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <motion.div
        className="relative h-full flex flex-col items-center justify-center text-center text-white z-10 px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Badge className="mb-6 bg-amber-600 hover:bg-amber-700 text-white">EXPLORE 360°</Badge>
        <h1 className="text-6xl lg:text-7xl font-bold mb-6 leading-tight">Virtual Tour</h1>
        <p className="text-xl text-gray-200 max-w-2xl leading-relaxed">
          Experience our most stunning architectural designs in immersive 360° panoramic views. Explore every detail
          and dimension from the comfort of your home.
        </p>
      </motion.div>
    </section>
  )
}
