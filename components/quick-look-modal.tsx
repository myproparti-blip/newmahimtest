"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { X } from "lucide-react"
import { BlurPanel } from "./blur-panel"

interface QuickLookModalProps {
    product: any
    isOpen: boolean
    onClose: () => void
}

export function QuickLookModal({ product, isOpen, onClose }: QuickLookModalProps) {
    const [selectedSwatch, setSelectedSwatch] = useState(0)

    if (!product) return null

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

                    {/* Modal */}
                    <motion.div
                        className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                    >
                        <BlurPanel className="bg-white backdrop-blur-xl border border-neutral-200/60 shadow-2xl rounded-3xl overflow-hidden">
                            <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                                {/* Image Gallery - Left Side (3 columns) */}
                                <div className="lg:col-span-2 p-4 border-r border-neutral-100/50 bg-gradient-to-b from-neutral-50 to-white flex items-center justify-center">
                                    <motion.div
                                        className="relative w-full aspect-square rounded-2xl overflow-hidden bg-neutral-100 shadow-lg"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        <Image
                                            src={product.image || "https://images.unsplash.com/photo-1600581573870-d178a90f170e?w=600&h=800&fit=crop"}
                                            alt={product.name}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            priority
                                            unoptimized={false}
                                        />
                                    </motion.div>
                                </div>

                                {/* Product Details - Right Side (3 columns) */}
                                <div className="lg:col-span-3 p-6 lg:p-8 flex flex-col">
                                    {/* Header with Close Button */}
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="flex-1">
                                            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">{product.name}</h2>
                                            <div className="flex flex-wrap gap-2 mb-0">
                                                {product.materials.map((material: string, idx: number) => (
                                                    <span key={idx} className="px-3 py-1.5 bg-amber-100 text-amber-900 text-xs font-bold rounded-lg">
                                                        {material}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <motion.button
                                            className="p-2 hover:bg-neutral-100 rounded-full transition-colors duration-200 flex-shrink-0 ml-4"
                                            onClick={onClose}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <X size={24} className="text-neutral-900" />
                                        </motion.button>
                                    </div>

                                    <div className="space-y-4 flex-1">
                                        {/* Features */}
                                        <div className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200">
                                            <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wide mb-3 flex items-center gap-2">
                                                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                                                PROJECT HIGHLIGHTS
                                            </h4>
                                            <ul className="space-y-1.5 text-xs">
                                                {product.highlights && product.highlights.map((highlight: string, idx: number) => (
                                                    <li key={idx} className="flex items-start gap-2 text-neutral-700">
                                                        <span className="text-blue-600 font-bold flex-shrink-0 mt-0.5">•</span>
                                                        <span>{highlight}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* View Portfolio CTA */}
                                    <Link href="/portfolio" onClick={onClose}>
                                        <motion.button
                                            className="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white py-3 rounded-xl font-bold text-sm hover:shadow-xl transition-all duration-300 mt-4"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            Explore Full Portfolio
                                        </motion.button>
                                    </Link>
                                </div>
                            </div>
                        </BlurPanel>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
