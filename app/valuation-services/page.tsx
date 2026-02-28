"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ClientLogos } from "@/components/client-logos"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
    Building2,
    Home,
    TrendingUp,
    FileText,
    DollarSign,
    CheckCircle,
    Map,
    Users,
    Award,
    Clock,
    Shield,
    Target
} from "lucide-react"
import { motion } from "framer-motion"
import { useState, useMemo, useCallback } from "react"
import dynamic from "next/dynamic"

const VirtualTourCTA = dynamic(() => import("@/components/virtual-tour-cta").then(mod => ({ default: mod.VirtualTourCTA })))
const KeyPersonCTA = dynamic(() => import("@/components/key-person-cta").then(mod => ({ default: mod.KeyPersonCTA })))

export default function ValuationServicesPage() {
    const [hoveredService, setHoveredService] = useState<number | null>(null)
    const [hoveredCommitment, setHoveredCommitment] = useState<number | null>(null)

    const setHoveredServiceCallback = useCallback((value: number | null) => {
        setHoveredService(value)
    }, [])

    const setHoveredCommitmentCallback = useCallback((value: number | null) => {
        setHoveredCommitment(value)
    }, [])

    const valuationAdvisoryServices = useMemo(() => [
        { title: "Market Valuation for Land / Building", icon: Building2 },
        { title: "Mortgage / Refinancing Valuations", icon: Home },
        { title: "Before You Buy & Before You Sell Valuation", icon: TrendingUp },
        { title: "Valuation for Taxation - Income Tax, Capital Gains Etc.", icon: DollarSign },
        { title: "Land Acquisitions Matters", icon: Map },
        { title: "Partnership Dissolution", icon: Users },
        { title: "Rental Assessment", icon: FileText },
        { title: "Stamp Duty Valuation", icon: Award }
    ], [])

    const realEstateServices = useMemo(() => [
        { title: "Development Strategies", icon: TrendingUp },
        { title: "Market Research", icon: FileText },
        { title: "Technical Assurance", icon: Shield },
        { title: "Project Feasibility", icon: CheckCircle },
        { title: "Investment Analysis", icon: DollarSign },
        { title: "Risk Assessment", icon: Award },
        { title: "Site Evaluation", icon: Map },
        { title: "Compliance Review", icon: Target }
    ], [])

    const propertyTypes = useMemo(() => [
        "Residential",
        "Commercial",
        "Retail",
        "Industrial",
        "Specialized Properties"
    ], [])

    const cities = useMemo(() => [
        "Surat", "Vadodara", "Ahmedabad", "Rajkot", "Mumbai",
        "Bardoli", "Dabhoi", "Gandhinagar", "Gondal", "Nagpur",
        "Navsari", "Naswdi", "Anand", "Dhrol",
        "Tapi", "Chhota Udepur", "Nadiad", "Chotila",
        "Bharuch", "Halol", "Dholka", "Kalawad",
        "Ankleshwar", "Godhara", "Viramgam", "Sardhar",
        "Narmada", "Dahod", "Kalol", "Padadhari"
    ], [])

    const commitments = useMemo(() => [
        {
            icon: Award,
            title: "Certified Valuers",
            description: "Qualified and experienced professionals with recognized certifications in real estate valuation"
        },
        {
            icon: Shield,
            title: "Unbiased Assessment",
            description: "Impartial valuation based on market data, comparable properties, and recognized methodologies"
        },
        {
            icon: Clock,
            title: "Timely Delivery",
            description: "Quick turnaround without compromising on accuracy and quality of valuation reports"
        },
        {
            icon: Target,
            title: "Precision & Accuracy",
            description: "Detailed analysis using advanced techniques and comprehensive market research"
        },
        {
            icon: FileText,
            title: "Professional Reports",
            description: "Comprehensive, well-documented valuation reports accepted by banks, courts, and authorities"
        },
        {
            icon: CheckCircle,
            title: "Quality Assured",
            description: "Rigorous verification process ensuring reliability and credibility of every valuation"
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
        <main className="min-h-screen bg-gradient-to-b from-neutral-50 via-white to-neutral-50">
            <Header />

            {/* Hero Section */}
            <section className="relative w-full h-[500px] overflow-hidden bg-gradient-to-br from-neutral-900 to-neutral-800 pt-32">
                {/* Background Images - Valuation Related */}
                <div className="absolute inset-0 flex gap-2">
                    <div
                        className="flex-1 relative overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800"
                        style={{ backgroundImage: "url('https://startbs.com/wp-content/uploads/2021/12/bus-evaluation.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
                    >
                        <div className="absolute inset-0 bg-blue-900/40" />

                    </div>
                    <div
                        className="flex-1 relative overflow-hidden bg-gradient-to-br from-emerald-900 via-cyan-900 to-emerald-800"
                        style={{ backgroundImage: "url('https://wheelercpa.com/wp-content/uploads/bizval.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
                    >



                    </div>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50" />

                {/* Content */}
                <motion.div
                    className="relative h-full flex flex-col items-center justify-center text-center text-white z-10 px-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block px-4 py-2 mb-6 rounded-full bg-amber-600 hover:bg-amber-700 text-white font-medium text-sm">
                        Professional Valuation Services
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Valuation Services
                    </h1>

                    <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        We carry out Valuation of all types of Residential, Commercial, Retail, Industrial & Specialized Properties. Expert assessment backed by market research and certified professionals.
                    </p>
                </motion.div>
            </section>



            {/* Geographic Coverage Section */}
            <section className="relative px-4 py-20 md:py-28 bg-gradient-to-br from-amber-50 via-white to-neutral-50">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Our Service Cities</h2>
                        <p className="text-neutral-600 text-lg max-w-3xl mx-auto">
                            Professional property valuation services available in these key locations
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
                        {cities.map((city, index) => (
                            <motion.div
                                 key={index}
                                 initial={{ opacity: 0, scale: 0.9 }}
                                 whileInView={{ opacity: 1, scale: 1 }}
                                 viewport={{ once: true }}
                                 transition={{ duration: 0.4, delay: index * 0.05 }}
                                 className="group p-2 md:p-3 rounded-lg bg-white border-2 border-neutral-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300 flex items-center justify-center text-center min-h-12 md:min-h-14"
                             >
                                 <span className="text-sm md:text-base font-bold text-neutral-900 group-hover:text-amber-600 transition-colors">
                                     {city}
                                 </span>
                             </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Nature of Services Section */}
            <section className="relative px-4 py-20 md:py-28 bg-white">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">Nature of Services</h2>
                        <p className="text-neutral-600 text-lg max-w-2xl mx-auto mb-8">
                            Comprehensive valuation solutions across diverse property types and assessment requirements
                        </p>

                        {/* Property Types */}
                        <div className="flex flex-wrap justify-center gap-3 mb-12">
                            {propertyTypes.map((type, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="px-6 py-2 rounded-full bg-amber-50 border border-amber-300 text-amber-900 font-medium"
                                >
                                    {type}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12 items-stretch">
                        {/* Valuation Advisory Services */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="p-8 rounded-2xl bg-gradient-to-br from-neutral-50 to-white border border-neutral-200 flex flex-col"
                        >
                            <h3 className="text-2xl font-bold text-neutral-900 mb-8 flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-amber-100">
                                    <DollarSign className="w-6 h-6 text-amber-600" />
                                </div>
                                Valuation Advisory Services
                            </h3>

                            <motion.ul
                                className="space-y-4"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                {valuationAdvisoryServices.map((service, index) => {
                                    const Icon = service.icon
                                    return (
                                        <motion.li
                                            key={index}
                                            variants={itemVariants}
                                            className="flex items-start gap-3 group"
                                        >
                                            <div className="p-2 rounded-lg bg-amber-100 group-hover:bg-amber-200 transition-colors duration-300 mt-1 flex-shrink-0">
                                                <Icon className="w-4 h-4 text-amber-600" />
                                            </div>
                                            <span className="text-neutral-700 group-hover:text-neutral-900 transition-colors duration-300">
                                                {service.title}
                                            </span>
                                        </motion.li>
                                    )
                                })}
                            </motion.ul>
                        </motion.div>

                        {/* Real Estate Services */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="p-8 rounded-2xl bg-gradient-to-br from-neutral-50 to-white border border-neutral-200 flex flex-col"
                        >
                            <h3 className="text-2xl font-bold text-neutral-900 mb-8 flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-amber-100">
                                    <Building2 className="w-6 h-6 text-amber-600" />
                                </div>
                                Real Estate Services
                            </h3>

                            <motion.ul
                                className="space-y-4"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                {realEstateServices.map((service, index) => {
                                    const Icon = service.icon
                                    return (
                                        <motion.li
                                            key={index}
                                            variants={itemVariants}
                                            className="flex items-start gap-3 group"
                                        >
                                            <div className="p-2 rounded-lg bg-amber-100 group-hover:bg-amber-200 transition-colors duration-300 mt-1 flex-shrink-0">
                                                <Icon className="w-4 h-4 text-amber-600" />
                                            </div>
                                            <span className="text-neutral-700 group-hover:text-neutral-900 transition-colors duration-300">
                                                {service.title}
                                            </span>
                                        </motion.li>
                                    )
                                })}
                            </motion.ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Valuation Services Gallery Section */}
            <section className="relative px-4 py-20 md:py-28 bg-white">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Valuation Services in Action</h2>
                        <p className="text-neutral-600 text-lg max-w-3xl mx-auto">
                            Professional valuation processes and methodologies that ensure accurate property assessments
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Financial Analysis",
                                description: "Comprehensive financial assessment and market valuation analysis",
                                icon: "📈"
                            },
                            {
                                title: "Market Research",
                                description: "In-depth market data collection and comparable property analysis",
                                icon: "🔍"
                            },
                            {
                                title: "Property Inspection",
                                description: "Professional site evaluation and structural assessment",
                                icon: "🏘️"
                            },
                            {
                                title: "Data Analysis",
                                description: "Advanced analytics and valuation computation techniques",
                                icon: "📊"
                            },
                            {
                                title: "Investment Evaluation",
                                description: "ROI analysis and investment portfolio assessment",
                                icon: "💼"
                            },
                            {
                                title: "Professional Documentation",
                                description: "Bank-approved and court-valid valuation reports",
                                icon: "📋"
                            }
                        ].map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group relative rounded-2xl overflow-hidden border-2 border-neutral-200 bg-white hover:border-amber-400 hover:shadow-lg transition-all duration-300 cursor-pointer"
                            >
                                <div className="p-8 min-h-64 flex flex-col justify-between">
                                    <div>
                                        <div className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-300">
                                            {service.icon}
                                        </div>
                                        <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                                            {service.title}
                                        </h3>
                                        <p className="text-neutral-700 leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Commitment Section */}
            <section className="relative px-4 py-20 md:py-28">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Our Commitment</h2>
                        <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
                            Delivering accurate, reliable, and professional valuation services with unmatched expertise
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid md:grid-cols-3 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {commitments.map((commitment, index) => {
                            const Icon = commitment.icon
                            return (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    onMouseEnter={() => setHoveredCommitment(index)}
                                    onMouseLeave={() => setHoveredCommitment(null)}
                                    className="group relative"
                                >
                                    <div className="absolute inset-0 bg-amber-100 rounded-2xl opacity-0 group-hover:opacity-50 blur-xl transition-all duration-300" />

                                    <div className="relative p-8 rounded-2xl bg-white border border-neutral-200 group-hover:border-amber-400 group-hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                                        <div className="p-3 rounded-lg bg-amber-100 w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                                            <Icon className="w-6 h-6 text-amber-600" />
                                        </div>

                                        <h3 className="text-lg font-bold text-neutral-900 mb-3">{commitment.title}</h3>
                                        <p className="text-neutral-600 text-sm leading-relaxed flex-1">{commitment.description}</p>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </div>
            </section>

            {/* Valuation Process Image Section */}
            <section className="relative px-4 py-20 md:py-28">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Our Valuation Process</h2>
                        <p className="text-neutral-600 text-lg max-w-3xl mx-auto leading-relaxed">
                            Our comprehensive three-step valuation methodology ensures accurate, reliable, and professional property assessments backed by market research and certified expertise.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        {/* Left: Content Cards */}
                        <motion.div
                            className="space-y-5"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.15,
                                        delayChildren: 0.2
                                    }
                                }
                            }}
                        >
                            {[
                                {
                                    step: "01",
                                    title: "Site Inspection",
                                    description: "Thorough on-site evaluation including property dimensions, condition, layout, structural integrity, and physical attributes.",
                                    tags: ["On-site Assessment", "Physical Inspection", "Measurements"],
                                    icon: Building2,
                                    color: "from-amber-50 to-amber-100",
                                    borderColor: "border-amber-300",
                                    numberBg: "bg-amber-600"
                                },
                                {
                                    step: "02",
                                    title: "Market Analysis",
                                    description: "Comprehensive research of comparable properties, recent transactions, and current market trends affecting property values.",
                                    tags: ["Comparable Analysis", "Market Trends", "Data Research"],
                                    icon: TrendingUp,
                                    color: "from-amber-50 to-amber-100",
                                    borderColor: "border-amber-300",
                                    numberBg: "bg-amber-600"
                                },
                                {
                                    step: "03",
                                    title: "Valuation Report",
                                    description: "Detailed professional report with complete methodology, analysis, supporting data, and final valuation conclusion.",
                                    tags: ["Professional Report", "Bank Approved", "Court Valid"],
                                    icon: FileText,
                                    color: "from-amber-50 to-amber-100",
                                    borderColor: "border-amber-300",
                                    numberBg: "bg-amber-600"
                                }
                            ].map((item, index) => {
                                const Icon = item.icon
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        className={`group relative overflow-hidden rounded-2xl border-2 ${item.borderColor} hover:shadow-xl transition-all duration-300 p-6 bg-gradient-to-br ${item.color}`}
                                    >
                                        <div className="absolute inset-0 bg-white/40 group-hover:bg-white/20 transition-all duration-300" />
                                        <div className="relative z-10">
                                            <div className="flex items-start gap-4 mb-3">
                                                <div className={`flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-full ${item.numberBg} text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                                    {item.step}
                                                </div>
                                                <Icon className="w-6 h-6 text-neutral-700 mt-1 opacity-60" />
                                            </div>
                                            <h3 className="text-xl font-bold text-neutral-900 mb-2">{item.title}</h3>
                                            <p className="text-neutral-700 text-sm leading-relaxed mb-4">{item.description}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {item.tags.map((tag, idx) => (
                                                    <motion.span
                                                        key={idx}
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        whileInView={{ opacity: 1, scale: 1 }}
                                                        viewport={{ once: true }}
                                                        transition={{ delay: idx * 0.05 }}
                                                        className="px-3 py-1 rounded-full bg-white/70 backdrop-blur-sm border border-current border-opacity-30 text-neutral-700 text-xs font-semibold hover:bg-white transition-colors duration-200 shadow-sm"
                                                    >
                                                        {tag}
                                                    </motion.span>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </motion.div>

                        {/* Right: Process Visual Steps */}
                        <motion.div
                            className="space-y-6"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            {/* Process Visualization - Professional Valuation Process Image */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="relative rounded-3xl overflow-hidden shadow-2xl h-96 md:h-[420px] bg-cover bg-center group"
                                style={{
                                    backgroundImage: "url('https://img.freepik.com/premium-photo/lifestyle-stock-photography-energy-performance[…]lized-energy-effi_997534-27581.jpg?semt=ais_hybrid&w=740&q=80')",
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                            >
                                {/* Overlay gradient for text readability */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

                                {/* Top corner badge */}
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold text-amber-600 shadow-lg">
                                    ✓ Verified
                                </div>
                            </motion.div>

                            {/* Stats Cards */}
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { number: "500+", label: "Properties Valued", icon: "🏢" },
                                    { number: "15+", label: "Years Experience", icon: "⭐" },
                                    { number: "100%", label: "Accuracy Rate", icon: "✓" },
                                    { number: "24hrs", label: "Quick Delivery", icon: "⚡" }
                                ].map((stat, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="relative rounded-xl bg-gradient-to-br from-white to-neutral-50 border-2 border-amber-200 p-4 hover:shadow-lg hover:border-amber-400 transition-all duration-300 group"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-all duration-300" />
                                        <div className="relative z-10 text-center">
                                            <div className="text-2xl mb-1">{stat.icon}</div>
                                            <p className="text-2xl font-bold text-amber-600">{stat.number}</p>
                                            <p className="text-xs text-neutral-700 leading-tight">{stat.label}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>



            {/* Services Showcase Section */}
            <section className="relative px-4 py-20 md:py-28 bg-gradient-to-br from-neutral-50 to-white">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="grid md:grid-cols-2 gap-12 items-stretch"
                    >
                        {/* Content */}
                        <motion.div
                            className="space-y-8 flex flex-col justify-center"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div>
                                <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">Specialized Valuation Expertise</h2>
                                <p className="text-neutral-600 text-lg leading-relaxed mb-8">
                                    Our team specializes in comprehensive property valuations across diverse sectors. Whether you need valuations for mortgage purposes, taxation, legal matters, or investment decisions, we provide detailed, accurate assessments backed by extensive market knowledge and certified expertise.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { label: "Property Types", value: "Residential, Commercial, Industrial", icon: "🏠" },
                                    { label: "Valuation Methods", value: "Market, Cost & Income Approach", icon: "📊" },
                                    { label: "Expertise Areas", value: "Pan-India Coverage - 30+ Cities", icon: "🗺️" },
                                    { label: "Report Quality", value: "Bank & Court Approved", icon: "✓" }
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1, duration: 0.5 }}
                                        className="p-4 rounded-lg bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300 group"
                                    >
                                        <div className="flex items-start gap-3">
                                            <span className="text-2xl group-hover:scale-125 transition-transform duration-300">{item.icon}</span>
                                            <div className="flex-1">
                                                <p className="text-sm text-amber-900 font-semibold mb-1">{item.label}</p>
                                                <p className="text-neutral-700 font-medium text-sm">{item.value}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="pt-4 border-t border-neutral-200">
                                <h4 className="font-bold text-neutral-900 mb-3">Our Expertise Includes:</h4>
                                <ul className="grid grid-cols-2 gap-3">
                                    {[
                                        "Residential Properties",
                                        "Commercial Buildings",
                                        "Retail Spaces",
                                        "Industrial Units",
                                        "Land Valuation",
                                        "Investment Properties"
                                    ].map((expertise, idx) => (
                                        <motion.li
                                            key={idx}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.05 }}
                                            className="flex items-center gap-2 text-neutral-700"
                                        >
                                            <div className="w-2 h-2 rounded-full bg-amber-600 flex-shrink-0" />
                                            {expertise}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        {/* Process Visualization - Professional Team Working */}
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl h-96 md:h-[420px] bg-cover bg-center"
                            style={{ backgroundImage: "url('https://koala.sh/api/image/v2-if51z-txrrp.jpg?width=1216&height=832&dream')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-black/10" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="relative px-4 py-20 md:py-28">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Why Choose Us</h2>
                        <p className="text-neutral-600 text-lg">
                            Decades of expertise combined with modern valuation methodologies
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Expert Valuers",
                                description: "Certified professionals with extensive experience in property valuation across diverse sectors and regions",
                                icon: Award
                            },
                            {
                                title: "Market Research",
                                description: "Comprehensive market analysis and comparative study ensuring accurate and fair property valuations",
                                icon: TrendingUp
                            },
                            {
                                title: "Legal Compliance",
                                description: "All valuations comply with regulatory requirements and are accepted by banks, courts, and government authorities",
                                icon: Shield
                            },
                            {
                                title: "Quick Turnaround",
                                description: "Efficient process delivery without compromising on quality and accuracy of valuation reports",
                                icon: Clock
                            }
                        ].map((benefit, index) => {
                            const Icon = benefit.icon
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="p-8 rounded-2xl bg-white border border-neutral-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300 group"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 rounded-lg bg-amber-100 border border-amber-300">
                                            <Icon className="w-6 h-6 text-amber-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">
                                                {benefit.title}
                                            </h3>
                                            <p className="text-neutral-600 leading-relaxed">{benefit.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Valuation Methodologies Section */}
            <section className="relative px-4 py-20 md:py-28 bg-gradient-to-br from-neutral-50 to-white">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Valuation Methodologies</h2>
                        <p className="text-neutral-600 text-lg max-w-3xl mx-auto">
                            We employ industry-recognized valuation approaches to ensure accuracy, consistency, and credibility in every assessment
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Market Approach",
                                description: "Comparative analysis using recent sales of similar properties in the same locality. Based on actual market transactions, this method reflects current market conditions and buyer preferences.",
                                points: ["Comparable Property Analysis", "Market Trend Analysis", "Location Adjustments", "Best for: Residential & Commercial"]
                            },
                            {
                                title: "Cost Approach",
                                description: "Calculates property value based on land value plus current cost of construction minus depreciation. Useful for new properties and development projects.",
                                points: ["Land Value Assessment", "Construction Cost Analysis", "Depreciation Calculation", "Best for: New Construction & Industrial"]
                            },
                            {
                                title: "Income Approach",
                                description: "Determines value based on potential income generation. Focuses on capitalization rate and rental income potential for investment properties.",
                                points: ["Rental Income Analysis", "Capitalization Rate", "Yield Calculation", "Best for: Commercial & Investment"]
                            }
                        ].map((method, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="p-8 rounded-3xl bg-white border-2 border-neutral-200 hover:border-amber-400 hover:shadow-xl transition-all duration-300 group"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center font-bold text-amber-600 text-lg">
                                        {index + 1}
                                    </div>
                                    <h3 className="text-2xl font-bold text-neutral-900 group-hover:text-amber-600 transition-colors">{method.title}</h3>
                                </div>
                                <p className="text-neutral-600 text-sm leading-relaxed mb-6">{method.description}</p>
                                <ul className="space-y-3">
                                    {method.points.map((point, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-neutral-700 text-sm">
                                            <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Valuation Benefits Section */}
            <section className="relative px-4 py-20 md:py-28 bg-white">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Why Professional Valuation Matters</h2>
                        <p className="text-neutral-600 text-lg max-w-3xl mx-auto">
                            Professional property valuation provides critical insights for informed decision-making and financial protection
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                icon: "💰",
                                title: "Financial Protection",
                                description: "Accurate valuations protect your financial interests and help avoid overpaying or undervaluing properties in transactions."
                            },
                            {
                                icon: "📊",
                                title: "Investment Decisions",
                                description: "Make informed investment decisions backed by comprehensive market analysis and property assessment data."
                            },
                            {
                                icon: "🏦",
                                title: "Bank & Loan Approval",
                                description: "Professional valuations are essential for mortgage approvals, refinancing, and loan applications from financial institutions."
                            },
                            {
                                icon: "⚖️",
                                title: "Legal & Tax Compliance",
                                description: "Certified valuations are required for tax assessments, inheritance disputes, insurance claims, and legal proceedings."
                            },
                            {
                                icon: "📈",
                                title: "Asset Management",
                                description: "Track property value changes over time for portfolio management, financial planning, and wealth assessment."
                            },
                            {
                                icon: "✅",
                                title: "Peace of Mind",
                                description: "Get credible, professionally-verified assessments accepted by courts, banks, and government authorities."
                            }
                        ].map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.05 }}
                                className="p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-white border-2 border-amber-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300 group"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="text-4xl flex-shrink-0">{benefit.icon}</div>
                                    <div>
                                        <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-amber-600 transition-colors">{benefit.title}</h3>
                                        <p className="text-neutral-600 leading-relaxed">{benefit.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Key Valuation Factors Section */}
            <section className="relative px-4 py-20 md:py-28 bg-gradient-to-br from-neutral-900 to-neutral-800">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Factors That Influence Property Valuation</h2>
                        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                            Our valuers consider multiple factors to determine accurate property assessments
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            "Location & Proximity to Amenities",
                            "Property Age & Condition",
                            "Size, Layout & Design",
                            "Market Trends & Demand",
                            "Legal Clearance & Ownership",
                            "Construction Quality",
                            "Accessibility & Transportation",
                            "Environmental Factors",
                            "Comparable Properties",
                            "Rental Income Potential",
                            "Government Policies",
                            "Future Development Plans"
                        ].map((factor, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                className="p-6 rounded-2xl bg-white/10 border border-white/20 hover:bg-white/20 hover:border-amber-400 transition-all duration-300 group"
                            >
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="w-6 h-6 text-amber-400 flex-shrink-0" />
                                    <p className="text-white font-medium group-hover:text-amber-300 transition-colors">{factor}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trusted by Section */}
            <section className="relative px-4 py-20 md:py-28 bg-white">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Trusted by Leading Organizations</h2>
                        <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
                            500+ clients across banking, finance, real estate, healthcare, education, and government sectors
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10">
                            {[
                                { name: "Sarya Shiksha Abhyan", category: "Education", logo: "SSA" },
                                { name: "Silver Group", category: "Industrial", logo: "SG" },
                                { name: "OMG - Madhav Group", category: "Manufacturing", logo: "OMG" },
                                { name: "Sudarshan Group", category: "Diversified", logo: "SUDARSHAN" },
                                { name: "Ambaliya Buildcon", category: "Real Estate", logo: "AB" },
                                { name: "Income Tax Department", category: "Government", logo: "ITD" },
                                { name: "Bank of Baroda", category: "Banking", logo: "BoB" },
                                { name: "Bank of India", category: "Banking", logo: "BoI" },
                                { name: "DHFL", category: "Finance", logo: "DHFL" },
                                { name: "LIC HFL", category: "Finance", logo: "LIC" },
                                { name: "Aadhar Housing Finance", category: "Finance", logo: "AHF" },
                                { name: "The Muthoot Group", category: "Finance & Jewellery", logo: "TMG" },
                                { name: "The Sarvodaya Sahakari Bank", category: "Co-operative Banking", logo: "TSSB" },
                                { name: "The Surat District Co-op Bank", category: "Co-operative", logo: "TSDCB" },
                                { name: "Goyal Gases", category: "Industrial", logo: "GG" },
                                { name: "JT Group", category: "Real Estate", logo: "JTG" },
                                { name: "G.B. Vaghani Hospital", category: "Healthcare", logo: "GBVH" },
                                { name: "Standard Road Makers", category: "Construction", logo: "SRM" }
                            ].map((client, index) => {
                                const LogoComponent = ClientLogos[client.logo as keyof typeof ClientLogos]
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: (index % 5) * 0.1 }}
                                        whileHover={{ y: -6 }}
                                    >
                                        <Card className="group relative rounded-3xl bg-white border-2 border-neutral-200 hover:border-amber-400 hover:shadow-2xl transition-all duration-300 overflow-hidden min-h-48 md:min-h-56 flex flex-col items-center justify-center p-6 md:p-8">
                                            <div className="relative z-10 flex flex-col items-center justify-center h-full w-full text-center gap-4">
                                                <div className="relative w-24 h-24 md:w-32 md:h-32 group-hover:scale-125 transition-transform duration-300 flex-shrink-0 flex items-center justify-center">
                                                    {LogoComponent && <LogoComponent />}
                                                </div>
                                                <p className="text-sm md:text-base font-bold text-neutral-900 group-hover:text-amber-600 transition-colors duration-300 line-clamp-2">
                                                    {client.name}
                                                </p>
                                                <Badge variant="outline" className="text-xs md:text-sm bg-white text-neutral-700 border-neutral-300 px-3 py-1">
                                                    {client.category}
                                                </Badge>
                                            </div>
                                        </Card>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </motion.div>
                </div>
            </section>

            <KeyPersonCTA />

            <Footer />
        </main>
    )
}