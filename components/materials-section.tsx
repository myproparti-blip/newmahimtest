"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Reveal } from "./reveal"
import { cn } from "@/lib/utils"

const materials = [
    {
        id: "lunar",
        name: "Skyline",
        description: "Contemporary twin-tower residential design with balanced symmetry and vertical elegance",
        fullDescription: "A modern high-rise composition defined by clean vertical lines and harmonious proportions. The design integrates landscaped courtyards and green balconies to create a refined urban living experience that feels both structured and serene.",
        image: "/images/homepageimges/03.jpg",
        backgroundImage: "/images/homepageimges/03.jpg",
        tint: "bg-gray-100",
        colorCode: "#A9A9A9",
    },
    {
        id: "pistachio",
        name: "Botanical",
        description: "Natural green interior with warm architectural elements and contemporary styling",
        fullDescription: "A sophisticated green palette that captures natural warmth and architectural elegance. Perfect for creating inviting living spaces with a modern, refined edge.",
        image: "/images/homepageimges/cam_26_eve.jpg",
        backgroundImage: "/images/homepageimges/cam_26_eve.jpg",
        tint: "bg-green-50",
        colorCode: "#9DC183",
    },
    {
        id: "martian",
        name: "Exhibition",
        description: "Bold exhibition space with contemporary art installations and dynamic energy",
        fullDescription: "A striking palette that brings vibrancy and movement to gallery and exhibition spaces. Creates a dramatic backdrop for showcasing art and innovative design.",
        image: "/images/homepageimges/04-EXHIBITION-SPACE-INTERIOR1.jpg",
        backgroundImage: "/images/homepageimges/04-EXHIBITION-SPACE-INTERIOR1.jpg",
        tint: "bg-red-50",
        colorCode: "#C41E3A",
    },
    {
        id: "obsidian",
        name: "Elegant",
        description: "Soft blue children’s bedroom with playful wall accents and contemporary minimal design",
        fullDescription: "A calm pastel palette combined with clean-lined furniture creates a serene yet playful environment. Decorative wall graphics and soft textures add character, while natural light enhances the room’s airy and comfortable atmosphere.",
        image: "/imgages/homepageimges/23.jpg",
        backgroundImage: "/images/homepageimges/23.jpg",
        tint: "bg-gray-900",
        colorCode: "#0B0E11",
    },
    {
        id: "sage",
        name: "Resort",
        description: "Luxury beachfront villa with warm timber architecture and resort-style outdoor living",
        fullDescription: "A tropical-inspired residence defined by rich wooden textures, open verandas, and seamless indoor–outdoor flow. The infinity-edge pool and ocean-facing deck create a relaxed, resort-like atmosphere that blends comfort, craftsmanship, and coastal serenity.",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&h=500&fit=crop",
        backgroundImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop",
        tint: "bg-emerald-50",
        colorCode: "#6B8E23",
    },
    {
        id: "ivory",
        name: "Villa",
        description: "Modern waterfront residence with sculpted forms and tranquil landscape integration",
        fullDescription: "A contemporary villa designed with clean geometric volumes and expansive glazing. The landscaped garden, wooden bridge & waterside pavilion create a peaceful retreat that balances modern sophistication .",
        image: "/images/homepageimges/view-cop04_.jpg",
        backgroundImage: "/images/homepageimges/view-cop04_.jpg",
        tint: "bg-amber-50",
        colorCode: "#FFFFF0",
    },
]

export function MaterialsSection() {
     const [activeMaterial, setActiveMaterial] = useState("lunar")

    const activeMaterialData = materials.find((m) => m.id === activeMaterial) || materials[0]

    const AnimatedText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
        return (
            <span>
                {text.split("").map((char, index) => (
                    <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: delay + index * 0.03,
                            ease: [0.21, 0.47, 0.32, 0.98],
                        }}
                        style={{ display: char === " " ? "inline" : "inline-block" }}
                    >
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                ))}
            </span>
        )
    }

    return (
        <section className="relative min-h-screen md:min-h-screen flex items-center justify-center overflow-hidden" id="materials">
            {/* Background Images */}
            <div className="absolute inset-0 z-0">
                {materials.map((material) => (
                    <motion.div
                        key={material.id}
                        className="absolute inset-0 w-full h-full"
                        initial={{ opacity: material.id === activeMaterial ? 1 : 0 }}
                        animate={{ opacity: material.id === activeMaterial ? 1 : 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                        <img
                            src={material.backgroundImage || "/placeholder.svg"}
                            alt={`${material.name} interior scene`}
                            className="w-full h-full object-cover"
                            loading="eager"
                        />
                    </motion.div>
                ))}
                {/* Overlay - darker on mobile for better text contrast */}
                <div className="absolute inset-0 bg-black/30 sm:bg-black/20" />
            </div>

            <div className="absolute top-[40px] left-0 right-0 z-10 px-4 sm:px-0">
                <div className="container-custom text-white">
                    <Reveal>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                            <div>
                                 <AnimatePresence mode="wait">
                                     <motion.h2
                                         key={activeMaterial}
                                         initial={{ opacity: 0, y: 20 }}
                                         animate={{ opacity: 1, y: 0 }}
                                         exit={{ opacity: 0, y: -20 }}
                                         transition={{ duration: 0.3, ease: "easeInOut" }}
                                         className="font-bold mb-4 text-4xl sm:text-5xl lg:text-6xl"
                                     >
                                         <AnimatedText text={activeMaterialData.name} delay={0.2} />
                                     </motion.h2>
                                 </AnimatePresence>
                                 <AnimatePresence mode="wait">
                                     <motion.p
                                         key={`desc-${activeMaterial}`}
                                         initial={{ opacity: 0, y: 10 }}
                                         animate={{ opacity: 1, y: 0 }}
                                         exit={{ opacity: 0, y: -10 }}
                                         transition={{ duration: 0.3 }}
                                         className="text-base sm:text-lg text-white/90 leading-relaxed max-w-xl"
                                     >
                                         {activeMaterialData.description}
                                     </motion.p>
                                 </AnimatePresence>
                             </div>

                            <AnimatePresence mode="wait">
                                 <motion.div
                                     key={`card-${activeMaterial}`}
                                     initial={{ opacity: 0, x: 20 }}
                                     animate={{ opacity: 1, x: 0 }}
                                     exit={{ opacity: 0, x: -20 }}
                                     transition={{ duration: 0.3 }}
                                     className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/20 h-fit"
                                 >
                                     <h3 className="text-sm font-semibold text-white/70 uppercase tracking-wider mb-4">Material Details</h3>
                                     <p className="text-sm text-white/80 leading-relaxed">
                                         {activeMaterialData.fullDescription}
                                     </p>
                                 </motion.div>
                             </AnimatePresence>
                        </div>
                    </Reveal>
                </div>
            </div>

            <div className="absolute bottom-24 sm:bottom-8 left-4 sm:left-8 z-10 max-w-md hidden">
                <Reveal delay={0.3}>
                    <blockquote className="pl-0 py-4">
                        <p className="text-xl text-white leading-relaxed italic lg:text-base font-medium">
                            "We believe in creating furniture that transcends trends—pieces that become more beautiful with age,
                            carrying stories and memories through generations."
                        </p>
                        <footer className="mt-4 text-sm text-white/70">— KATACHI Studio</footer>
                    </blockquote>
                </Reveal>
            </div>

            <div className="absolute bottom-8 left-0 right-0 z-10 px-4">
                <div className="container-custom">
                    <Reveal delay={0.1}>
                        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                            {materials.map((material) => (
                                <motion.button
                                    key={material.id}
                                    className={cn(
                                        "px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-full font-medium transition-all duration-300 backdrop-blur-md",
                                        activeMaterial === material.id
                                            ? "bg-white text-neutral-900"
                                            : "bg-white/20 text-white hover:bg-white/30",
                                    )}
                                    onClick={() => setActiveMaterial(material.id)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {material.name}
                                </motion.button>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}
