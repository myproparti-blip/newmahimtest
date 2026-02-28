"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface VirtualTourModalProps {
  isOpen: boolean
  onClose: () => void
  tour: {
    id: string
    title: string
    category: string
    location?: string
    year?: string
    image: string
    description?: string
    images360?: string[]
    interiors?: Array<{ name: string; image: string }>
  } | null
}

export function VirtualTourModal({ isOpen, onClose, tour }: VirtualTourModalProps) {
  const [imageIndex, setImageIndex] = useState(0)

  if (!tour || !isOpen) return null

  const images = tour.images360 || [tour.image]
  const imageCount = images.length

  const handleNext = () => {
    setImageIndex((prev) => (prev + 1) % imageCount)
  }

  const handlePrev = () => {
    setImageIndex((prev) => (prev - 1 + imageCount) % imageCount)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 bg-white/90 hover:bg-white p-2 rounded-full transition-all"
      >
        <X className="w-5 h-5 text-neutral-900" />
      </button>

      <div className="w-full h-full flex items-center justify-center">
        {/* Tour Image - Large */}
        <div className="relative w-full h-full max-w-5xl max-h-[90vh]">
          <div className="relative w-full h-full overflow-hidden rounded-lg bg-neutral-100">
            <Image
              src={images[imageIndex]}
              alt={`${tour.title} - Image ${imageIndex + 1}`}
              fill
              className="object-contain"
              priority
            />

            {/* Image Navigation */}
            <div className="absolute inset-0 flex items-center justify-between p-4">
              <Button
                size="icon"
                variant="ghost"
                className="bg-white/80 hover:bg-white text-neutral-900"
                onClick={handlePrev}
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="bg-white/80 hover:bg-white text-neutral-900"
                onClick={handleNext}
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-semibold">
              {imageIndex + 1} / {imageCount}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}