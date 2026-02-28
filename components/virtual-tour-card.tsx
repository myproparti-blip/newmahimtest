"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { useState } from "react"

interface VirtualTourCardProps {
  id: string
  title: string
  category: string
  image: string
  panoramaImage: string
  location?: string
  year?: string
  badge?: "Featured" | "360°" | "New"
  onViewTour?: () => void
}

export function VirtualTourCard({
  id,
  title,
  category,
  image,
  location,
  year,
  badge,
  onViewTour,
}: VirtualTourCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Card className="group overflow-hidden border-neutral-200/50 hover:border-neutral-300 transition-all duration-300 hover:shadow-2xl h-full flex flex-col">
        {/* Image Container */}
        <div
          className="relative overflow-hidden bg-neutral-100 cursor-pointer"
          style={{ aspectRatio: "4/3" }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={onViewTour}
        >
          <Image
            src={image}
            alt={title}
            fill
            className={`object-cover transition-transform duration-500 ${isHovered ? "scale-110" : "scale-100"}`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />


        </div>

        {/* Title Below Image */}
        <div className="p-4 text-center">
          <h3 className="text-sm lg:text-base font-medium text-neutral-700 tracking-wide">{title}</h3>
        </div>
      </Card>
    </motion.div>
  )
}