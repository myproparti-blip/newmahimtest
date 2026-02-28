"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ClientLogos } from "@/components/client-logos"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Target, Lightbulb, Award, Shield, Zap, Building2, Home, BarChart3, Leaf, Users, Heart, Sparkles, ArrowRight, Briefcase, CheckCircle, Globe, Layers, Palette, Linkedin, Mail, Phone, Building } from "lucide-react"
import { motion } from "framer-motion"
import { useState, useMemo, useCallback } from "react"
import Image from "next/image"
import { KeyPersonCTA } from "@/components/key-person-cta"
import { TeamMemberCard } from "@/components/team-member-card"

export default function WelcomePage() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null)

    const setHoveredCardCallback = useCallback((value: number | null) => {
        setHoveredCard(value)
    }, [])

    const features = useMemo(() => [
        {
            icon: Target,
            title: "Strategic Excellence",
            description: "Delivering comprehensive architectural solutions that align with your vision, market demands, and long-term objectives"
        },
        {
            icon: Lightbulb,
            title: "Innovative Design",
            description: "Cutting-edge designs that leverage sustainable materials, advanced architecture techniques, and forward-thinking concepts"
        },
        {
            icon: Award,
            title: "Award-Winning Expertise",
            description: "Award-recognized professionals with 15+ years of experience in architectural design, advanced architecture techniques, and project management"
        },
        {
            icon: Shield,
            title: "Quality Assurance",
            description: "Every project meets rigorous standards of craftsmanship, precision, and attention to detail from concept through completion"
        },
        {
            icon: Building2,
            title: "Architecture Design",
            description: "Comprehensive architectural solutions for residential, commercial, and institutional projects with emphasis on functionality and aesthetics"
        },
        {
            icon: Globe,
            title: "Urban Design",
            description: "Strategic urban planning and master planning services that create vibrant, sustainable communities with balanced development"
        },
        {
            icon: Leaf,
            title: "Landscape Design",
            description: "Integrated landscape solutions that enhance outdoor spaces through thoughtful planning, greenery, and environmental sustainability"
        }
    ], [])

    const containerVariants = useMemo(() => ({
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    }), [])

    const itemVariants = useMemo(() => ({
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    }), [])

    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="relative overflow-hidden px-4 py-20 md:py-32 bg-gradient-to-b from-orange-50 to-white">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(234,88,12,0.05)_0%,transparent_50%)] pointer-events-none" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.6 }}
                                className="inline-flex items-center gap-3 px-4 py-2 mb-6 rounded-full bg-orange-100 border border-orange-200"
                            >
                                <span className="inline-block w-2 h-2 bg-orange-600 rounded-full"></span>
                                <span className="text-sm font-semibold text-orange-700">About Mahim Architect</span>
                            </motion.div>

                            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900 leading-tight">
                                Transforming Visions Into Reality
                            </h1>

                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                We translate ideas into meaningful architectural experiences. Through thoughtful design, precision detailing, and contextual sensitivity, we shape spaces that balance innovation with functionality—transforming concepts into built environments that inspire, endure, and elevate everyday living.
                            </p>
                        </motion.div>

                        {/* Right Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <Image
                                src="/images/vison.webp"
                                alt="Modern Architecture Design"
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="relative px-4 py-20 md:py-28 bg-white">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Why Partner With Us</h2>
                        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                            Strategic expertise, innovative design, and proven excellence across 500+ projects
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid md:grid-cols-3 lg:grid-cols-3 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {features.map((feature, index) => {
                            const Icon = feature.icon
                            return (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    onMouseEnter={() => setHoveredCard(index)}
                                    onMouseLeave={() => setHoveredCard(null)}
                                    className="group relative"
                                >
                                    <Card className="relative p-8 rounded-2xl bg-white border border-slate-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                                        <div className="relative z-10 flex items-start gap-4">
                                            <motion.div
                                                className="p-3 rounded-xl bg-orange-100 transition-all duration-300 flex-shrink-0"
                                                animate={hoveredCard === index ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                                            >
                                                <Icon className="w-6 h-6 text-orange-600" />
                                            </motion.div>
                                            <div className="flex-1">
                                                <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                                                <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
                                            </div>
                                        </div>
                                    </Card>
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </div>
            </section>

            {/* Services Showcase Section - Image Left */}
            <section className="relative px-4 py-20 md:py-28 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative h-96 md:h-[450px] rounded-2xl overflow-hidden order-2 md:order-1 shadow-2xl"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                                alt="Advanced Design Services"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </motion.div>

                        {/* Right Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="order-1 md:order-2"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Services & Expertise</h2>
                            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                Comprehensive architectural solutions tailored to your needs. From modern design to sustainable practices, we deliver excellence across every project.
                            </p>

                            <div className="space-y-4">
                                {[
                                    { icon: Building2, title: "Modern Architecture", desc: "Contemporary designs with cutting-edge materials" },
                                    { icon: Home, title: "Commercial Design", desc: "Professional environments that inspire" },
                                    { icon: Leaf, title: "Eco-Friendly Design", desc: "Sustainable architecture for tomorrow" }
                                ].map((service, idx) => {
                                    const Icon = service.icon
                                    return (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="flex gap-4 items-start"
                                        >
                                            <div className="p-2 rounded-lg bg-orange-100 flex-shrink-0">
                                                <Icon className="w-6 h-6 text-orange-600" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-slate-900">{service.title}</h3>
                                                <p className="text-slate-600 text-sm">{service.desc}</p>
                                            </div>
                                        </motion.div>
                                    )
                                })}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="relative px-4 py-20 md:py-28 bg-white">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Our Impact</h2>
                        <p className="text-slate-600 text-lg">Proven track record of excellence and client satisfaction</p>
                    </motion.div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { number: "500+", label: "Projects Completed", desc: "Successful deliveries" },
                            { number: "15+", label: "Years Experience", desc: "Industry expertise" },
                            { number: "98%", label: "Client Satisfaction", desc: "Happiness rate" },
                            { number: "25+", label: "Awards Won", desc: "Industry recognition" }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -8 }}
                            >
                                <Card className="relative p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-slate-50 border border-slate-200 hover:border-orange-300 text-center hover:shadow-lg transition-all duration-300">
                                    <div className="relative z-10">
                                        <motion.div
                                            className="text-5xl font-bold text-orange-600 mb-2"
                                            initial={{ scale: 0.5 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true }}
                                        >
                                            {stat.number}
                                        </motion.div>
                                        <div className="text-slate-900 font-semibold mb-1">{stat.label}</div>
                                        <p className="text-slate-600 text-sm">{stat.desc}</p>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vision Section - Image Right */}
            <section className="relative px-4 py-20 md:py-28 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-3 px-4 py-2 mb-6 rounded-full bg-blue-100 border border-blue-200">
                                <span className="inline-block w-2 h-2 bg-blue-600 rounded-full"></span>
                                <span className="text-sm font-semibold text-blue-700">Our Vision</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Global Leadership in Architecture</h2>

                            <p className="text-slate-700 leading-relaxed text-lg mb-8">
                                A commitment to shaping world-class environments through strategic thinking, advanced design methodologies, and cultural sensitivity. We deliver transformative architectural solutions that transcend borders, setting new standards in creativity, sustainability, and global impact.
                            </p>

                            <div className="space-y-4">
                                {["Innovation", "Sustainability", "Excellence"].map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="flex items-center gap-3"
                                    >
                                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                        <span className="font-semibold text-slate-900">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative h-96 md:h-[450px] rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <Image
                                src="/images/Virtual Tour/global2.jpg"
                                alt="Strategic Vision and Planning"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission Section - Image Left */}
            <section className="relative px-4 py-20 md:py-28 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative h-96 md:h-[450px] rounded-2xl overflow-hidden order-2 md:order-1 shadow-2xl"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop"
                                alt="Mission and Team Collaboration"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </motion.div>

                        {/* Right Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="order-1 md:order-2"
                        >
                            <div className="inline-flex items-center gap-3 px-4 py-2 mb-6 rounded-full bg-blue-100 border border-blue-200">
                                <span className="inline-block w-2 h-2 bg-blue-600 rounded-full"></span>
                                <span className="text-sm font-semibold text-blue-700">Our Mission</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Delivering Excellence Worldwide</h2>

                            <p className="text-slate-700 leading-relaxed text-lg mb-8">
                                To deliver comprehensive architectural and design solutions that exceed expectations through strategic planning, innovative solutions, and unwavering commitment to quality. We partner with clients globally to transform visions into reality while maintaining the highest standards of professional excellence and sustainable practice.
                            </p>

                            <div className="space-y-4">
                                {["Quality", "Innovation", "Sustainability"].map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="flex items-center gap-3"
                                    >
                                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                        <span className="font-semibold text-slate-900">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>


            {/* Core Values Section */}
            <section className="relative px-4 py-20 md:py-28 bg-slate-50">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Core Values</h2>
                        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                            The principles that guide our every decision and action
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: "Innovation", desc: "Advanced architecture and creative interior design shaping modern spaces.", icon: Lightbulb },
                            { title: "Integrity", desc: "Maintaining highest ethical standards in all relationships", icon: Shield },
                            { title: "Sustainability", desc: "Designing with environmental consciousness and responsibility", icon: Leaf },
                            { title: "Collaboration", desc: "Working seamlessly with clients and stakeholders", icon: Users },
                            { title: "Excellence", desc: "Pursuing perfection in every detail and execution", icon: Award },
                            { title: "Creativity", desc: "Discovering unique solutions that set new standards", icon: Sparkles }
                        ].map((value, index) => {
                            const Icon = value.icon
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    whileHover={{ y: -8 }}
                                >
                                    <Card className="relative p-8 rounded-2xl bg-white border border-slate-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300 h-full">
                                        <div className="flex items-start gap-4 mb-4">
                                            <motion.div
                                                className="p-3 rounded-xl bg-orange-100 flex-shrink-0"
                                                whileHover={{ scale: 1.1, rotate: 5 }}
                                            >
                                                <Icon className="w-6 h-6 text-orange-600" />
                                            </motion.div>
                                        </div>
                                        <h3 className="text-lg font-bold text-slate-900 mb-2">{value.title}</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">{value.desc}</p>
                                    </Card>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Process & Methodology Section - Architecture Inspired */}
            <section className="relative px-4 py-20 md:py-32 bg-white overflow-hidden">
                {/* Blueprint Grid Background */}
                <div className="absolute inset-0 opacity-3 pointer-events-none">
                    <div style={{
                        backgroundImage: "linear-gradient(0deg, transparent 24%, rgba(0,0,0,.05) 25%, rgba(0,0,0,.05) 26%, transparent 27%, transparent 74%, rgba(0,0,0,.05) 75%, rgba(0,0,0,.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0,0,0,.05) 25%, rgba(0,0,0,.05) 26%, transparent 27%, transparent 74%, rgba(0,0,0,.05) 75%, rgba(0,0,0,.05) 76%, transparent 77%, transparent)",
                        backgroundSize: "50px 50px"
                    }} className="absolute inset-0"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Header */}
                    <motion.div
                        className="text-center mb-20"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-2 tracking-tight">Our Proven Process</h2>
                        <div className="flex items-center justify-center gap-3 mt-6 mb-4">
                            <div className="h-px w-12 bg-orange-600"></div>
                            <p className="text-slate-600 text-sm uppercase tracking-widest font-semibold">ARCHITECTURAL METHODOLOGY</p>
                            <div className="h-px w-12 bg-orange-600"></div>
                        </div>
                        <p className="text-slate-600 text-lg max-w-3xl mx-auto mt-6">
                            A structured, transparent framework that guides your project from concept to completion with precision and excellence
                        </p>
                    </motion.div>

                    {/* Main Timeline */}
                    <div className="relative py-12">
                        {/* Vertical line for mobile, horizontal for desktop */}
                        <div className="hidden md:block absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" style={{ top: "60px" }}></div>
                        <div className="md:hidden absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent"></div>

                        <div className="grid md:grid-cols-5 gap-8 md:gap-4 auto-rows-fr">
                            {[
                                { num: "01", title: "Discovery & Analysis", desc: "Deep dive into project requirements, site analysis, client vision, and contextual understanding", icon: Target },
                                { num: "02", title: "Conceptualization", desc: "Strategic planning, design concepts, spatial planning, and feasibility assessment", icon: Lightbulb },
                                { num: "03", title: "Design Development", desc: "Detailed design solutions, technical drawings, material selection, and design refinement", icon: Palette },
                                {
                                    num: "04",
                                    title: "Architecture Design",
                                    desc: "Concept development, structural planning, facade design, spatial organization, and sustainable architectural solutions",
                                    icon: Building
                                }, { num: "05", title: "Delivery & Support", desc: "Construction support, quality assurance, project oversight, and client handover", icon: CheckCircle }
                            ].map((step, index) => {
                                const Icon = step.icon
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="relative md:pt-0 pt-8 md:pt-0 flex flex-col"
                                    >
                                        {/* Connector Node */}
                                        <motion.div
                                            className="hidden md:flex absolute left-1/2 -translate-x-1/2 -top-6 w-14 h-14 rounded-full bg-white border-2 border-slate-400 items-center justify-center"
                                            whileHover={{ scale: 1.15 }}
                                            transition={{ type: "spring", stiffness: 400 }}
                                        >
                                            <span className="text-sm font-bold text-orange-600">{step.num}</span>
                                        </motion.div>

                                        {/* Mobile node */}
                                        <motion.div
                                            className="md:hidden absolute left-0 top-0 w-24 h-10 rounded-r-full bg-orange-600 flex items-center justify-start pl-8"
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            <span className="text-white font-bold text-sm">{step.num}</span>
                                        </motion.div>

                                        {/* Card */}
                                        <motion.div
                                            whileHover={{ borderColor: "rgb(234, 88, 12)" }}
                                            transition={{ duration: 0.3 }}
                                            className="md:pt-8 md:mt-0 mt-0 flex-1 flex flex-col"
                                        >
                                            <div className="bg-white border-2 border-slate-300 rounded-lg p-7 hover:shadow-lg transition-shadow duration-300 hover:border-orange-500 group flex flex-col h-full">
                                                {/* Step Icon */}
                                                <motion.div
                                                    className="mb-5 inline-flex"
                                                    whileHover={{ scale: 1.1 }}
                                                >
                                                    <div className="p-3 bg-orange-100 rounded-lg">
                                                        <Icon className="w-6 h-6 text-orange-600" />
                                                    </div>
                                                </motion.div>

                                                {/* Title */}
                                                <h3 className="text-lg font-bold text-slate-900 mb-3 leading-tight">
                                                    {step.title}
                                                </h3>

                                                {/* Description */}
                                                <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-1">
                                                    {step.desc}
                                                </p>

                                                {/* Divider */}
                                                <div className="border-t border-slate-200 pt-4 mt-auto">
                                                    <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">PHASE {step.num}</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </div>


                </div>
            </section>


            {/* Founder Section */}
            <section className="py-24 lg:py-28 bg-gradient-to-b from-white to-neutral-50 w-full overflow-x-hidden">
                <div className="max-w-5xl mx-auto px-6 lg:px-12 w-full">
                    {/* Section Header */}
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-amber-600 font-semibold tracking-widest text-sm mb-4 uppercase">Leadership</p>
                        <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
                            Meet Our <span className="italic font-light text-neutral-600">Founder</span>
                        </h2>
                    </motion.div>

                    {/* Founder Card Box */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        {/* Main Layout */}
                        <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 items-start md:items-center mb-6">
                            {/* Image Section */}
                            <div className="relative w-full md:w-[300px] lg:w-[350px] h-64 sm:h-72 md:h-[300px] lg:h-[350px] flex-shrink-0 rounded-xl overflow-hidden bg-neutral-100 shadow-xl">
                                <Image
                                    src="/images/admin/01-HIGH-RESOLUTION-PHOTO-ASHISH-PATEL.jpg"
                                    alt="Ashish Patel"
                                    fill
                                    className="object-cover"
                                />
                                <Badge className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-amber-600 text-white font-semibold px-3 sm:px-4 py-1 text-xs sm:text-sm">
                                    Founder
                                </Badge>
                            </div>

                            {/* Content Section */}
                            <div className="flex-1 w-full">
                                {/* Name & Title */}
                                <div className="mb-4 sm:mb-6">
                                    <h3 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-2">Ashish Patel</h3>
                                    <p className="text-amber-600 font-bold text-xs sm:text-sm uppercase tracking-widest">Founder & Principal Architect</p>
                                </div>

                                {/* Experience */}
                                <div className="mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-neutral-200">
                                    <p className="text-xs text-neutral-600 font-bold uppercase tracking-widest mb-2">Experience</p>
                                    <p className="text-base sm:text-lg text-neutral-800 font-semibold">15+ Years in Architecture & Interior Design</p>
                                </div>

                                {/* Bio */}
                                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 font-medium">
                                    Since 2009, he has been managing and guiding architectural projects from concept development to execution, ensuring quality, creativity, and client satisfaction at every stage. His leadership has shaped the firm's strong foundation in design excellence and project management.                                </p>

                                {/* Social Links */}
                                <div className="flex gap-3 sm:gap-4 mb-4 sm:mb-6">
                                    <a href="https://in.linkedin.com/company/mahim-architects" target="_blank" rel="noopener noreferrer" className="p-2.5 sm:p-3 rounded-full bg-neutral-100 text-neutral-700 hover:bg-amber-100 hover:text-amber-600 transition-colors border border-neutral-200 hover:border-amber-300">
                                        <Linkedin className="w-4 sm:w-5 h-4 sm:h-5" />
                                    </a>
                                    <a href="mailto:mahimhr01@gmail.com" className="p-2.5 sm:p-3 rounded-full bg-neutral-100 text-neutral-700 hover:bg-amber-100 hover:text-amber-600 transition-colors border border-neutral-200 hover:border-amber-300">
                                        <Mail className="w-4 sm:w-5 h-4 sm:h-5" />
                                    </a>
                                    <a href="tel:+918238377000" className="p-2.5 sm:p-3 rounded-full bg-neutral-100 text-neutral-700 hover:bg-amber-100 hover:text-amber-600 transition-colors border border-neutral-200 hover:border-amber-300">
                                        <Phone className="w-4 sm:w-5 h-4 sm:h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </section>

            <KeyPersonCTA />
            <Footer />
        </main>
    )
	}