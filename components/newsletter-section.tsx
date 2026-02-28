"use client"

import { motion } from "framer-motion"
import { Building2, Pencil, Users, TrendingUp } from "lucide-react"
import { Reveal } from "./reveal"
import { AnimatedText } from "./animated-text"

export function NewsletterSection() {
    const features = [
        {
            icon: Building2,
            title: "Modern Architecture",
            description: "Innovative designs that blend aesthetics with functionality"
        },
        {
            icon: Pencil,
            title: "Detailed Planning",
            description: "Comprehensive architectural solutions tailored to your needs"
        },
        {
            icon: Users,
            title: "Expert Team",
            description: "Experienced architects dedicated to excellence"
        },
        {
            icon: TrendingUp,
            title: "Sustainable Design",
            description: "Eco-friendly solutions for a better future"
        }
    ]

    return (
        <section className="py-24 lg:py-40 bg-white">
            <div className="container-custom">
                <Reveal>
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16 lg:mb-20">
                            <h2 className="text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
                                <AnimatedText text="Why Choose " delay={0.2} />
                                <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-500">
                                    <AnimatedText text="Mahim Architect" delay={0.5} />
                                </span>
                                <AnimatedText text="?" delay={0.8} />
                            </h2>
                            <p className="text-lg lg:text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto">
                                We deliver exceptional architectural solutions backed by years of expertise and a commitment to excellence.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                            {features.map((feature, index) => {
                                const Icon = feature.icon
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="p-6 rounded-xl bg-gradient-to-br from-neutral-50 to-white border border-neutral-200 hover:border-amber-500 hover:shadow-lg transition-all duration-300"
                                    >
                                        <motion.div
                                            className="w-14 h-14 bg-gradient-to-br from-amber-100 to-amber-50 rounded-lg flex items-center justify-center mb-4"
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            <Icon className="w-7 h-7 text-amber-600" />
                                        </motion.div>
                                        <h3 className="text-lg font-bold text-neutral-900 mb-2">{feature.title}</h3>
                                        <p className="text-neutral-600 text-sm leading-relaxed">{feature.description}</p>
                                    </motion.div>
                                )
                            })}
                        </div>

                        <motion.div
                            className="mt-16 text-center"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-neutral-600 text-lg mb-6">
                                Ready to transform your vision into reality?
                            </p>
                            <motion.a
                                href="https://wa.me/918238377000?text=Hello%20Mahim%20Architect,%20I'm%20interested%20in%20your%20services"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-200"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Get Started Today
                            </motion.a>
                        </motion.div>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}
