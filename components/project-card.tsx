"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Eye, Share2 } from "lucide-react"

interface ProjectCardProps {
    project: {
        id: string
        name: string
        price: string
        image: string
        badge?: "New" | "Back in stock" | "Limited"
        materials: string[]
        swatches: { name: string; color: string }[]
        quickLookImages: string[]
        dimensions: string
    }
    onQuickLook: (project: any) => void
}

export function ProjectCard({ project, onQuickLook }: ProjectCardProps) {
    return (
        <motion.div
            className="group relative bg-white overflow-hidden rounded-2xl border border-neutral-200/50 hover:border-neutral-300/80 transition-all duration-500 hover:shadow-2xl flex flex-col h-full"
            whileHover={{ y: -8 }}
        >
            {/* Badge */}
            {project.badge && (
                <div className="absolute top-4 left-4 z-20">
                    <motion.span
                        className={cn(
                            "px-3 py-1.5 text-xs font-bold rounded-full backdrop-blur-md inline-block shadow-lg uppercase tracking-wider",
                            project.badge === "New" && "bg-emerald-500/95 text-white",
                            project.badge === "Back in stock" && "bg-blue-500/95 text-white",
                            project.badge === "Limited" && "bg-amber-500/95 text-white",
                        )}
                        whileHover={{ scale: 1.05 }}
                    >
                        {project.badge}
                    </motion.span>
                </div>
            )}

            {/* Project Image Container */}
            <div className="relative overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-200 flex-grow" style={{ aspectRatio: "8/7" }}>
                <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                />

                {/* Overlay on Hover */}
                <motion.div
                    className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4 backdrop-blur-xs"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                >
                    <motion.button
                        className="p-3 bg-white rounded-full text-neutral-900 hover:bg-amber-500 hover:text-white transition-all duration-300 shadow-lg border-2 border-white/20"
                        onClick={() => onQuickLook(project)}
                        aria-label="Quick look"
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Eye size={20} />
                    </motion.button>
                    <motion.button
                        className="p-3 bg-white rounded-full text-neutral-900 hover:bg-amber-500 hover:text-white transition-all duration-300 shadow-lg border-2 border-white/20"
                        aria-label="Share"
                        whileHover={{ scale: 1.15, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Share2 size={20} />
                    </motion.button>
                </motion.div>
            </div>

            {/* Project Info */}
            <div className="p-5 bg-white space-y-4 flex-shrink-0">
                <div className="space-y-2">
                    <h3 className="text-base font-bold text-neutral-900 group-hover:text-amber-600 transition-colors duration-300 line-clamp-2">
                        {project.name}
                    </h3>
                    <p className="text-xs text-neutral-500 font-medium line-clamp-2">{project.materials.join(" • ")}</p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-neutral-100">
                    {/* Status */}
                    <div className="flex items-center gap-2">
                        <motion.div
                            className="w-2.5 h-2.5 rounded-full bg-amber-500"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                        ></motion.div>
                        <span className="text-xs font-semibold text-neutral-700 uppercase tracking-wide">{project.price}</span>
                    </div>

                    {/* Color Swatches */}
                    <div className="flex gap-2.5">
                        {project.swatches.slice(0, 2).map((swatch, idx) => (
                            <motion.div
                                key={swatch.name}
                                className="w-4 h-4 rounded-lg border-2 border-neutral-300 cursor-pointer transition-all hover:border-amber-500 hover:shadow-md"
                                style={{ backgroundColor: swatch.color }}
                                title={swatch.name}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                            />
                        ))}
                        {project.swatches.length > 2 && (
                            <div className="w-4 h-4 rounded-lg bg-gradient-to-br from-neutral-300 to-neutral-400 flex items-center justify-center text-[8px] font-bold text-white cursor-pointer hover:shadow-md" title={`+${project.swatches.length - 2} more`}>
                                +
                            </div>
                        )}
                    </div>
                </div>

                {/* CTA Button */}
                <motion.button
                    className="w-full py-2.5 bg-gradient-to-r from-neutral-900 to-neutral-800 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-xs rounded-lg transition-all duration-300 hover:shadow-lg uppercase tracking-wider active:scale-95 mt-2"
                    onClick={() => onQuickLook(project)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.95 }}
                >
                    View Details
                </motion.button>
            </div>
        </motion.div>
    )
}
