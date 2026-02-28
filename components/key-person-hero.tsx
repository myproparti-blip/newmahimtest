"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

export function KeyPersonHero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 pt-32 pb-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-6 lg:px-12">
        <motion.div
          className="text-center text-white mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge className="mb-6 bg-amber-600 hover:bg-amber-700 text-white">LEADERSHIP</Badge>
          <h1 className="text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Meet Our <span className="italic font-light">Leadership Team</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Visionary architects and designers driving innovation and excellence in every project we undertake.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {[
            { label: "Years Experience", value: "15+" },
            { label: "Projects Completed", value: "500+" },
            { label: "Team Members", value: "50+" },
            { label: "Awards Won", value: "25+" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 text-center hover:bg-white/20 transition-all"
            >
              <div className="text-3xl font-bold text-amber-600 mb-2">{stat.value}</div>
              <p className="text-gray-300 text-sm font-semibold uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
