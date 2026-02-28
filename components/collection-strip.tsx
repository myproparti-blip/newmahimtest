"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Reveal } from "./reveal"
import { ArrowRight } from "lucide-react"

interface Property {
    id: number
    name: string
    category: string
    location: string
    thumbnail: string
    images: string[]
    description: string
}

const DEMO_PROPERTIES: Property[] = [
    {
        id: 1,
        name: "Surat Diamond Bourse",
        category: "Commercial, High rise commercial",
        location: "SURAT, GUJARAT",
        thumbnail: "/images/portfolio/property-1-4.jpg",
        images: ["/images/portfolio/property-1-3.jpg", "/images/portfolio/property-1-4.jpg"],
        description: "Surat Diamond Bourse Office Interior Design As a leading role of Best Interior Designer, we design Diamond Office in Surat Diamond Bourse (SDB) the largest office building in this world located at Surat, Gujarat, India. With our knowledge and expertise team at Mahim Architect, we create a unique Diamond office interior design that is reflect every aspect of diamond business.",
    },
    {
        id: 2,
        name: "ANTILIA SKY",
        category: "Residential",
        location: "VARIAV, SURAT, GUJARAT.",
        thumbnail: "/images/portfolio/RIVERFRONT-min.jpg",
        images: ["/images/portfolio/RIVERFRONT_COMP.jpg", "/images/portfolio/RIVERFRONT-min.jpg"],
        description: "Modern high-rise apartment complex featuring spacious units, contemporary design, and community spaces.",
    },
    {
        id: 3,
        name: "Crystal Luxuria",
        category: "Highrise Residential Project",
        location: "Surat, Gujarat",
        thumbnail: "/images/portfolio/013_GATE_FRONT_TOP.jpg",
        images: ["/images/portfolio/013_GATE_FRONT_TOP.jpg"],
        description: "Elegant residential development with sophisticated architecture and premium living spaces.",
    },
    {
        id: 4,
        name: "PRAGATI THE WORLD",
        category: "Commercial",
        location: "Surat, Gujarat",
        thumbnail: "/images/portfolio/Cam-01-New-16-10-2022-02.jpg",
        images: ["/images/portfolio/Cam-01-New-16-10-2022-02.jpg"],
        description: "Modern commercial complex with architectural excellence and green spaces.",
    },
    {
        id: 5,
        name: "IT PARK 2",
        category: "Commercial",
        location: "YOGI CHOWK, NANA VARACCHA, SURAT, GUJARAT.",
        thumbnail: "/images/portfolio/IT-PARK-2-1.jpeg",
        images: ["/images/portfolio/IT-PARK-2-1.jpeg"],
        description: "Modern commercial complex with office spaces and retail outlets.",
    },
    {
        id: 6,
        name: "Vesu Bunglow",
        category: "BUNGLOW",
        location: "VESU, SURAT",
        thumbnail: "/images/portfolio/RESIZE.jpg",
        images: ["/images/portfolio/RESIZE.jpg"],
        description: "Spacious bungalow with modern design, landscaped gardens, and luxurious amenities.",
    },
    {
        id: 7,
        name: "Emerald Gardens",
        category: "BUNGLOW",
        location: "UTTRAN, SURAT",
        thumbnail: "/images/portfolio/FINAL.jpg",
        images: ["/images/portfolio/FINAL.jpg", "/images/portfolio/FINAL-870x434.jpg"],
        description: "Luxurious bungalow with lush gardens, elegant interiors, and premium amenities for a serene living experience.",
    },
    {
        id: 8,
        name: "Hari Om Bungalow",
        category: "BUNGLOW, Residential",
        location: "Piplod, Surat, Gujarat",
        thumbnail: "/images/portfolio/FINAL-ELEVATION-3D.jpg",
        images: ["/images/portfolio/FINAL-ELEVATION-3D.jpg"],
        description: "Elegant bungalow with modern design, spacious interiors, and landscaped gardens for a luxurious lifestyle.",
    },
    {
        id: 9,
        name: "SAJAN BUNGLOW",
        category: "BUNGLOW",
        location: "SURAT, GUJARAT",
        thumbnail: "/images/portfolio/NITINBHAI-01.png",
        images: ["/images/portfolio/NITINBHAI-01.png"],
        description: "Spacious bungalow with contemporary design, landscaped gardens, and premium amenities for a luxurious living experience.",
    },
    {
        id: 10,
        name: "AALEKH BUNGLOWS HOUSE, PLAYGROUND, GARDEN, GATE.",
        category: "Residential",
        location: "UTRAN, SURAT, GUJARAT,",
        thumbnail: "/images/portfolio/HOUSE-1.jpeg",
        images: ["/images/portfolio/HOUSE-1.jpeg", "/images/portfolio/PLAYGROUND-1.jpeg", "/images/portfolio/GARGEN-1.jpeg", "/images/portfolio/GATE.jpg"],
        description: "Spacious residential property with a house, playground, garden, and gate, designed for comfortable living and outdoor enjoyment.",
    },
]

export function CollectionStrip() {
    const containerRef = useRef<HTMLDivElement>(null)
    const scrollContainerRef = useRef<HTMLDivElement>(null)
    const [scrollPosition, setScrollPosition] = useState(0)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    })

    const x = useTransform(scrollYProgress, [0, 1], [0, -100])

    const itemWidth = 300 // card width
    const itemHeight = 500 // card height - portrait style
    const itemGap = 20 // gap between cards
    const totalItemWidth = itemWidth + itemGap
    const visibleCards = 5 // Show 5 cards
    const visibleWidth = visibleCards * itemWidth + (visibleCards - 1) * itemGap // Width of 5 cards + gaps

    // Duplicate properties for seamless infinite loop
    const extendedProperties = [...DEMO_PROPERTIES, ...DEMO_PROPERTIES]
    const totalScrollableWidth = extendedProperties.length * itemWidth + (extendedProperties.length - 1) * itemGap

    // Auto scroll effect - slide from right to left (one card at a time)
    useEffect(() => {
        const interval = setInterval(() => {
            setScrollPosition((prev) => {
                const nextPosition = prev - totalItemWidth
                // Seamlessly loop when reaching middle (original length)
                const singleCycleWidth = DEMO_PROPERTIES.length * itemWidth + (DEMO_PROPERTIES.length - 1) * itemGap
                if (nextPosition <= -singleCycleWidth) {
                    return 0
                }
                return nextPosition
            })
        }, 4000)

        return () => clearInterval(interval)
    }, [totalItemWidth])

    return (
        <section ref={containerRef} className="py-24 lg:py-40 overflow-hidden bg-gradient-to-b from-white to-neutral-50">
            <div className="mb-20">
                <Reveal>
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="max-w-3xl">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <p className="text-amber-600 font-semibold tracking-widest text-sm mb-4 uppercase">Featured Works</p>
                                <h2 className="text-5xl lg:text-6xl text-neutral-900 mb-6 font-bold">Our Projects</h2>
                                <p className="text-lg text-neutral-600 leading-relaxed">
                                    Discover our latest architectural masterpieces through an auto-scrolling carousel showcasing five featured projects at a time.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </Reveal>
            </div>

            <div className="relative w-full flex justify-center px-8 lg:px-16">
                {/* Fixed window showing exactly 5 cards */}
                <div
                    className="overflow-hidden pr-8"
                    style={{ width: `${visibleWidth + 40}px` }}
                >
                    <motion.div
                        ref={scrollContainerRef}
                        className="flex gap-6"
                        animate={{ x: scrollPosition }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        style={{
                            width: `${totalScrollableWidth}px`,
                        }}
                    >
                        {extendedProperties.map((property, index) => (
                            <motion.div
                                key={`${property.id}-${index >= DEMO_PROPERTIES.length ? 'dup' : 'orig'}`}
                                className="flex-shrink-0 group cursor-pointer flex flex-col rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
                                style={{ width: `${itemWidth}px`, height: `${itemHeight}px` }}
                                whileHover={{ y: -12 }}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05, duration: 0.5 }}
                            >
                                {/* Image Section - 75% height */}
                                <div className="relative w-full overflow-hidden flex-1">
                                    <motion.div
                                        className="relative w-full h-full"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <Image
                                            src={property.thumbnail}
                                            alt={property.name}
                                            fill
                                            className="object-cover"
                                            sizes="300px"
                                            priority={index < 5}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400" />
                                    </motion.div>

                                    {/* Text Overlay on Image */}
                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <motion.h3
                                            className="text-2xl font-bold text-white text-center drop-shadow-lg line-clamp-2 px-3"
                                            initial={{ opacity: 0.9 }}
                                            whileHover={{ opacity: 1, scale: 1.05 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {property.name}
                                        </motion.h3>
                                    </div>
                                </div>

                                {/* Bottom Section - 25% height */}
                                <div className="px-4 py-4 flex flex-col justify-between flex-shrink-0 bg-white">
                                    <p className="text-neutral-600 text-xs font-medium line-clamp-1 mb-3">{property.category}</p>
                                    <Link href={`/portfolio?category=${encodeURIComponent(property.category)}`}>
                                        <motion.button
                                            className="w-full py-2.5 bg-black hover:bg-amber-600 text-white font-semibold text-sm rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            Explore
                                            <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                                        </motion.button>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
