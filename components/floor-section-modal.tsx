"use client"

import Image from "next/image"
import { X, ArrowLeft } from "lucide-react"
import { useState } from "react"
import { PanoramaViewer } from "./panorama-viewer"

interface FloorSection {
  title: string
  image: string
  contentUrl?: string
}

interface FloorSectionModalProps {
  isOpen: boolean
  onClose: () => void
  project: {
    title: string
    floorSections: FloorSection[]
  } | null
}

export function FloorSectionModal({ isOpen, onClose, project }: FloorSectionModalProps) {
  const [selectedSection, setSelectedSection] = useState<FloorSection | null>(null)
  
  if (!project || !isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white">
      {/* Close Button */}
      <button
        onClick={() => {
          setSelectedSection(null)
          onClose()
        }}
        className="absolute top-4 right-4 z-50 bg-neutral-200 hover:bg-neutral-300 p-2 rounded-full transition-all"
      >
        <X className="w-5 h-5 text-neutral-900" />
      </button>

      {selectedSection ? (
        // Panorama View
        <div className="w-full h-full flex items-start justify-center pt-20 pb-8" style={{ overflowY: "auto", overflowX: "hidden" }}>
          <div className="w-full max-w-6xl px-8">
            <button
              onClick={() => setSelectedSection(null)}
              className="mb-6 flex items-center gap-2 text-amber-600 hover:text-amber-700 font-semibold transition-colors"
            >
              <ArrowLeft size={20} />
              Back
            </button>
            <h2 className="text-3xl font-bold text-neutral-900 mb-6 text-center">{selectedSection.title}</h2>
            <PanoramaViewer imageUrl={selectedSection.contentUrl || selectedSection.image} title={selectedSection.title} />
          </div>
        </div>
      ) : (
        // Grid View
        <div className="w-full h-full overflow-y-auto flex items-start justify-center pt-20 pb-8">
          <div className="w-full max-w-6xl px-8">
            {/* Back Button */}
            <button
              onClick={() => {
                setSelectedSection(null)
                onClose()
              }}
              className="mb-8 flex items-center gap-2 text-amber-600 hover:text-amber-700 font-semibold transition-colors"
            >
              <ArrowLeft size={20} />
              Back
            </button>
            {/* Title */}
            <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">{project.title}</h2>

            {/* Floor Sections Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.floorSections.map((section, index) => (
                <div
                  key={index}
                  className="flex flex-col cursor-pointer group"
                  onClick={() => setSelectedSection(section)}
                >
                  {/* Section Image */}
                  <div className="relative overflow-hidden rounded-lg bg-neutral-100 mb-4 group-hover:shadow-lg transition-all" style={{ aspectRatio: "4/3" }}>
                    <Image
                      src={section.image}
                      alt={section.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                      priority
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                      <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-semibold">360° View</span>
                    </div>
                  </div>
                  {/* Section Title */}
                  <h3 className="text-lg lg:text-xl font-semibold text-neutral-700 text-center tracking-wide">
                    {section.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}