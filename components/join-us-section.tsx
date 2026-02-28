"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, Loader2, X, CheckCircle, User, Mail, FileText, MessageSquare, Briefcase, BookOpen, Users } from "lucide-react"
import { Reveal } from "./reveal"
import { BlurPanel } from "./blur-panel"
import { AnimatedText } from "./animated-text"
import { toast } from "sonner"

export function JoinUsSection() {
    const [showForm, setShowForm] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
        internship: "",
        training: "",
        membership: "",
        interests: "",
        hrPosition: "",
        hrDepartment: "",
        employmentType: "",
        workLocation: ""
    })

    const resetForm = () => {
        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
            internship: "",
            training: "",
            membership: "",
            interests: "",
            hrPosition: "",
            hrDepartment: "",
            employmentType: "",
            workLocation: ""
        })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const validateForm = () => {
        const required = ["name", "email", "subject"]
        return required.every(field => formData[field as keyof typeof formData]?.trim())
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!validateForm()) {
            toast.error("Please fill in all required fields")
            return
        }

        setIsLoading(true)

        try {
            let messageContent = `
Full Name: ${formData.name}
Email: ${formData.email}
What brings you?: ${formData.subject}
`

            // Add subject-specific fields
            if (formData.subject === "hr") {
                messageContent += `
HR Position: ${formData.hrPosition || "Not specified"}
HR Department: ${formData.hrDepartment || "Not specified"}
`
            } else if (formData.subject === "association") {
                messageContent += `
Membership Type: ${formData.membership || "Not specified"}
`
            } else if (formData.subject === "valuation") {
                messageContent += `
Property Type: ${formData.workLocation || "Not specified"}
`
            } else if (formData.subject === "architecture" || formData.subject === "interior-design") {
                messageContent += `
Employment Type: ${formData.employmentType || "Not specified"}
`
            }

            // Add common fields for non-HR subjects
            if (formData.subject !== "hr") {
                messageContent += `
Program Interest: ${formData.training || "Not specified"}
`
            }

            messageContent += `
Skills & Interests:
${formData.interests || "Not specified"}

About You:
${formData.message || "Not specified"}
            `

            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject === "hr" ? "HR Application" : formData.subject,
                    message: messageContent,
                    type: 'join-us'
                })
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.error || data.details || 'Failed to send email')
            }

            toast.success("Application sent successfully!")
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
                internship: "",
                training: "",
                membership: "",
                interests: "",
                hrPosition: "",
                hrDepartment: "",
                employmentType: "",
                workLocation: ""
            })
            setShowForm(false)
            setShowSuccess(true)

            setTimeout(() => setShowSuccess(false), 5000)
        } catch (error) {
            console.error("Email send error:", error)
            toast.error(error instanceof Error ? error.message : "Failed to send your request. Please try again.")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <section className="py-16 sm:py-24 lg:py-40 bg-gradient-to-b from-white to-neutral-50 overflow-hidden">
            <div className="container-custom">
                <Reveal>
                    <div className="max-w-5xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
                        {/* Header */}
                        <div className="text-center mb-12 sm:mb-16 lg:mb-20 px-2 sm:px-0">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-4 sm:mb-6 leading-tight">
                                <AnimatedText text="Join Our " delay={0.2} />
                                <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-500">
                                    <AnimatedText text="Growing Team." delay={0.5} />
                                </span>
                            </h2>
                            <p className="text-base sm:text-lg md:text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto px-2 sm:px-0">
We invite aspiring professionals and trainees to join our growing team. Explore internships, training programs, and career opportunities in Architecture, Interior Design, and Valuation within a professional and innovative environment.                            </p>
                        </div>



                        {/* Main CTA Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
                            {/* Internship Card */}
                             <motion.div
                                 initial={{ opacity: 0, y: 20 }}
                                 whileInView={{ opacity: 1, y: 0 }}
                                 transition={{ duration: 0.5, delay: 0.1 }}
                                 viewport={{ once: true }}
                                 className="p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-white border border-neutral-200 hover:border-amber-500 hover:shadow-lg transition-all duration-300 cursor-pointer h-full flex flex-col"
                             >
                                 <div className="w-12 sm:w-14 h-12 sm:h-14 bg-amber-100 rounded-full flex items-center justify-center mb-4 sm:mb-5 flex-shrink-0">
                                     <Briefcase className="w-6 sm:w-7 h-6 sm:h-7 text-amber-600" />
                                 </div>
                                 <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-3">
                                     Internship Programs
                                 </h3>
                                 <p className="text-sm sm:text-base text-neutral-600 mb-6 flex-grow">
                            Gain hands-on experience on real architectural projects with direct mentorship from industry experts.
                            An ideal opportunity for students and freshers to start their professional journey.                                </p>
                                 <div 
                                     className="flex items-center text-amber-600 font-semibold group text-sm sm:text-base cursor-pointer hover:text-amber-700 transition-colors"
                                     onClick={() => {
                                         setFormData(prev => ({ ...prev, subject: "internship" }))
                                         setShowForm(true)
                                     }}
                                 >
                                     Apply Now
                                     <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                                 </div>
                             </motion.div>

                            {/* Training Card */}
                             <motion.div
                                 initial={{ opacity: 0, y: 20 }}
                                 whileInView={{ opacity: 1, y: 0 }}
                                 transition={{ duration: 0.5, delay: 0.2 }}
                                 viewport={{ once: true }}
                                 className="p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-white border border-neutral-200 hover:border-amber-500 hover:shadow-lg transition-all duration-300 cursor-pointer h-full flex flex-col"
                             >
                                 <div className="w-12 sm:w-14 h-12 sm:h-14 bg-amber-100 rounded-full flex items-center justify-center mb-4 sm:mb-5 flex-shrink-0">
                                     <BookOpen className="w-6 sm:w-7 h-6 sm:h-7 text-amber-600" />
                                 </div>
                                 <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-3">
                                     Training Courses
                                 </h3>
                                 <p className="text-sm sm:text-base text-neutral-600 mb-6 flex-grow">
                            Upgrade your skills with professional training in Interior Design, Architectural Design, and Valuation.
                            Become job-ready with industry-focused learning and professional certification.
                                 </p>
                                 <div 
                                     className="flex items-center text-amber-600 font-semibold group text-sm sm:text-base cursor-pointer hover:text-amber-700 transition-colors"
                                     onClick={() => {
                                         setFormData(prev => ({ ...prev, subject: "training" }))
                                         setShowForm(true)
                                     }}
                                 >
                                     Explore Courses
                                     <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                                 </div>
                             </motion.div>

                            {/* Association Card */}
                             <motion.div
                                 initial={{ opacity: 0, y: 20 }}
                                 whileInView={{ opacity: 1, y: 0 }}
                                 transition={{ duration: 0.5, delay: 0.3 }}
                                 viewport={{ once: true }}
                                 className="p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-white border border-neutral-200 hover:border-amber-500 hover:shadow-lg transition-all duration-300 cursor-pointer h-full flex flex-col"
                             >
                                 <div className="w-12 sm:w-14 h-12 sm:h-14 bg-amber-100 rounded-full flex items-center justify-center mb-4 sm:mb-5 flex-shrink-0">
                                     <Mail className="w-6 sm:w-7 h-6 sm:h-7 text-amber-600" />
                                 </div>
                                 <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-3">
                                     Association
                                 </h3>
                                 <p className="text-sm sm:text-base text-neutral-600 mb-6 flex-grow">
                            Join our professional network and work closely with experienced architects and industry leaders.
                            Apply now to grow your career through collaboration and networking.                                </p>
                                 <div 
                                     className="flex items-center text-amber-600 font-semibold group text-sm sm:text-base cursor-pointer hover:text-amber-700 transition-colors"
                                     onClick={() => {
                                         setFormData(prev => ({ ...prev, subject: "association" }))
                                         setShowForm(true)
                                     }}
                                 >
                                     Get in Touch
                                     <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                                 </div>
                             </motion.div>

                            {/* Architecture Card */}
                             <motion.div
                                 initial={{ opacity: 0, y: 20 }}
                                 whileInView={{ opacity: 1, y: 0 }}
                                 transition={{ duration: 0.5, delay: 0.4 }}
                                 viewport={{ once: true }}
                                 className="p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-white border border-neutral-200 hover:border-amber-500 hover:shadow-lg transition-all duration-300 cursor-pointer h-full flex flex-col"
                             >
                                 <div className="w-12 sm:w-14 h-12 sm:h-14 bg-amber-100 rounded-full flex items-center justify-center mb-4 sm:mb-5 flex-shrink-0">
                                     <Briefcase className="w-6 sm:w-7 h-6 sm:h-7 text-amber-600" />
                                 </div>
                                 <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-3">
                                     Architecture
                                 </h3>
                                 <p className="text-base sm:text-lg text-neutral-600 mb-6 flex-grow">
                            We are seeking talented and passionate Architects & Designers to join our team.
                            Work on innovative live projects, enhance your skills, and grow your career in a professional work environment.                                </p>
                                 <div 
                                     className="flex items-center text-amber-600 font-semibold group text-sm sm:text-base cursor-pointer hover:text-amber-700 transition-colors"
                                     onClick={() => {
                                         setFormData(prev => ({ ...prev, subject: "architecture" }))
                                         setShowForm(true)
                                     }}
                                 >
                                  Apply Now 
                                     <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                                 </div>
                             </motion.div>

                            {/* Valuation Card */}
                             <motion.div
                                 initial={{ opacity: 0, y: 20 }}
                                 whileInView={{ opacity: 1, y: 0 }}
                                 transition={{ duration: 0.5, delay: 0.5 }}
                                 viewport={{ once: true }}
                                 className="p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-white border border-neutral-200 hover:border-amber-500 hover:shadow-lg transition-all duration-300 cursor-pointer h-full flex flex-col"
                             >
                                 <div className="w-12 sm:w-14 h-12 sm:h-14 bg-amber-100 rounded-full flex items-center justify-center mb-4 sm:mb-5 flex-shrink-0">
                                     <FileText className="w-6 sm:w-7 h-6 sm:h-7 text-amber-600" />
                                 </div>
                                 <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-3">
                                     Valuation
                                 </h3>
                                 <p className="text-base sm:text-lg text-neutral-600 mb-6 flex-grow">
                            We are hiring skilled professionals in Property and Project Valuation.
                            Get the opportunity to work on detailed market analysis, valuation reports, and real-world projects with expert guidance.                                </p>
                                 <div 
                                     className="flex items-center text-amber-600 font-semibold group text-sm sm:text-base cursor-pointer hover:text-amber-700 transition-colors"
                                     onClick={() => {
                                         setFormData(prev => ({ ...prev, subject: "valuation" }))
                                         setShowForm(true)
                                     }}
                                 >
                                 Apply Now 
                                     <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                                 </div>
                             </motion.div>

                            {/* Interior Design Card */}
                             <motion.div
                                 initial={{ opacity: 0, y: 20 }}
                                 whileInView={{ opacity: 1, y: 0 }}
                                 transition={{ duration: 0.5, delay: 0.6 }}
                                 viewport={{ once: true }}
                                 className="p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-white border border-neutral-200 hover:border-amber-500 hover:shadow-lg transition-all duration-300 cursor-pointer h-full flex flex-col"
                             >
                                 <div className="w-12 sm:w-14 h-12 sm:h-14 bg-amber-100 rounded-full flex items-center justify-center mb-4 sm:mb-5 flex-shrink-0">
                                     <svg className="w-6 sm:w-7 h-6 sm:h-7 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
                                         <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                                     </svg>
                                 </div>
                                 <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-3">
                                     Interior Design
                                 </h3>
                                 <p className="text-base sm:text-lg text-neutral-600 mb-6 flex-grow">
                            We are looking for creative and detail-oriented Interior Designers.
                            Join us to work on premium residential and commercial interior projects and take your design career to the next level.                               </p>
                                 <div 
                                     className="flex items-center text-amber-600 font-semibold group text-sm sm:text-base cursor-pointer hover:text-amber-700 transition-colors"
                                     onClick={() => {
                                         setFormData(prev => ({ ...prev, subject: "interior-design" }))
                                         setShowForm(true)
                                     }}
                                 >
                                    Apply Now 
                                     <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                                 </div>
                             </motion.div>
                        </div>

                        {/* CTA Button */}
                        {!showForm && !showSuccess && (
                            <motion.div
                                className="text-center px-2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                <motion.button
                                    onClick={() => setShowForm(true)}
                                    className="px-6 sm:px-12 py-3 sm:py-4 bg-gradient-to-r from-amber-600 to-amber-500 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-200 text-sm sm:text-lg w-full sm:w-auto"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Start Your Journey With Us
                                </motion.button>
                            </motion.div>
                        )}
                    </div>
                </Reveal>
            </div>
            {/* Form Modal */}
            <AnimatePresence>
                {showForm && (
                    <motion.div
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => {
                            setShowForm(false)
                            resetForm()
                        }}
                    >
                        <motion.div
                            className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 w-full max-w-3xl shadow-2xl my-4 sm:my-auto max-h-[90vh] overflow-y-auto"
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ duration: 0.3 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => {
                                    setShowForm(false)
                                    resetForm()
                                }}
                                className="absolute top-3 sm:top-4 right-3 sm:right-4 text-neutral-400 hover:text-neutral-900 transition-colors"
                            >
                                <X size={24} className="sm:w-7 sm:h-7" />
                            </button>

                            {/* Form Header */}
                            <div className="mb-6 pr-8">
                                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-neutral-900 mb-1">Tell Us About Yourself</h3>
                                <p className="text-xs sm:text-sm lg:text-base text-neutral-600">
                                    We're excited to learn more about you and how we can work together.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* Name & Email Row */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                    {/* Name Field */}
                                    <div>
                                        <label className="block text-xs lg:text-sm font-semibold text-neutral-900 mb-1.5">
                                            <div className="flex items-center gap-2">
                                                <User size={14} className="text-amber-600" />
                                                Full Name <span className="text-red-500">*</span>
                                            </div>
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="John Doe"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-3 py-2 rounded-lg bg-neutral-50 border border-neutral-200 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100 transition-all"
                                        />
                                    </div>

                                    {/* Email Field */}
                                    <div>
                                        <label className="block text-xs lg:text-sm font-semibold text-neutral-900 mb-1.5">
                                            <div className="flex items-center gap-2">
                                                <Mail size={14} className="text-amber-600" />
                                                Email <span className="text-red-500">*</span>
                                            </div>
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="john@example.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-3 py-2 rounded-lg bg-neutral-50 border border-neutral-200 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100 transition-all"
                                        />
                                    </div>
                                </div>

                                {/* Subject & Dynamic Fields Row */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                    {/* Subject Field */}
                                    <div>
                                        <label className="block text-xs lg:text-sm font-semibold text-neutral-900 mb-1.5">
                                            <div className="flex items-center gap-2">
                                                <FileText size={14} className="text-amber-600" />
                                                What brings you? <span className="text-red-500">*</span>
                                            </div>
                                        </label>
                                        <select
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-3 py-2 rounded-lg bg-neutral-50 border border-neutral-200 text-sm text-neutral-900 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100 transition-all appearance-none cursor-pointer hover:border-amber-300"
                                        >
                                            <option value="">Select...</option>
                                            <option value="internship">Internship Programs</option>
                                            <option value="training">Training Courses</option>
                                            <option value="association">Association</option>
                                            <option value="interior-design">Interior Design</option>
                                            <option value="architecture">Architecture</option>
                                            <option value="valuation">Valuation</option>
                                        </select>
                                    </div>

                                    {/* Dynamic Fields based on subject */}
                                    {formData.subject === "internship" && (
                                        <div>
                                            <label className="block text-xs lg:text-sm font-semibold text-neutral-900 mb-1.5">
                                                <div className="flex items-center gap-2">
                                                    <Briefcase size={14} className="text-amber-600" />
                                                    Internship Type
                                                </div>
                                            </label>
                                            <select
                                                name="internship"
                                                value={formData.internship}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2 rounded-lg bg-neutral-50 border border-neutral-200 text-sm text-neutral-900 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100 transition-all appearance-none"
                                            >
                                                <option value="">Select...</option>
                                                <option value="full-time">Full-time</option>
                                                <option value="part-time">Part-time</option>
                                                <option value="remote">Remote</option>
                                            </select>
                                        </div>
                                    )}

                                    {formData.subject === "training" && (
                                        <div>
                                            <label className="block text-xs lg:text-sm font-semibold text-neutral-900 mb-1.5">
                                                <div className="flex items-center gap-2">
                                                    <BookOpen size={14} className="text-amber-600" />
                                                    Training Type
                                                </div>
                                            </label>
                                            <select
                                                name="employmentType"
                                                value={formData.employmentType}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2 rounded-lg bg-neutral-50 border border-neutral-200 text-sm text-neutral-900 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100 transition-all appearance-none"
                                            >
                                                <option value="">Select...</option>
                                                <option value="full-time">Full-time</option>
                                                <option value="part-time">Part-time</option>
                                                <option value="remote">Remote</option>
                                            </select>
                                        </div>
                                    )}

                                    {formData.subject === "architecture" && (
                                        <div>
                                            <label className="block text-xs lg:text-sm font-semibold text-neutral-900 mb-1.5">
                                                <div className="flex items-center gap-2">
                                                    <Briefcase size={14} className="text-amber-600" />
                                                    Work Type
                                                </div>
                                            </label>
                                            <select
                                                name="employmentType"
                                                value={formData.employmentType}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2 rounded-lg bg-neutral-50 border border-neutral-200 text-sm text-neutral-900 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100 transition-all appearance-none"
                                            >
                                                <option value="">Select...</option>
                                                <option value="full-time">Full-time</option>
                                                <option value="part-time">Part-time</option>
                                                <option value="remote">Remote</option>
                                            </select>
                                        </div>
                                    )}

                                    {formData.subject === "valuation" && (
                                        <div>
                                            <label className="block text-xs lg:text-sm font-semibold text-neutral-900 mb-1.5">
                                                <div className="flex items-center gap-2">
                                                    <FileText size={14} className="text-amber-600" />
                                                    Work Type
                                                </div>
                                            </label>
                                            <select
                                                name="workLocation"
                                                value={formData.workLocation}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2 rounded-lg bg-neutral-50 border border-neutral-200 text-sm text-neutral-900 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100 transition-all appearance-none"
                                            >
                                                <option value="">Select...</option>
                                              <option value="full-time">Full-time</option>
                                                <option value="part-time">Part-time</option>
                                                <option value="remote">Remote</option>
                                            </select>
                                        </div>
                                    )}

                                    {formData.subject === "association" && (
                                        <div>
                                            <label className="block text-xs lg:text-sm font-semibold text-neutral-900 mb-1.5">
                                                <div className="flex items-center gap-2">
                                                    <Mail size={14} className="text-amber-600" />
                                                    Membership Type
                                                </div>
                                            </label>
                                            <select
                                                name="membership"
                                                value={formData.membership || ""}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2 rounded-lg bg-neutral-50 border border-neutral-200 text-sm text-neutral-900 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100 transition-all appearance-none"
                                            >
                                                <option value="">Select...</option>
                                                <option value="individual">Individual Member</option>
                                                <option value="corporate">Corporate Member</option>
                                                <option value="student">Student Member</option>
                                            </select>
                                        </div>
                                    )}

                                    {formData.subject === "interior-design" && (
                                        <div>
                                            <label className="block text-xs lg:text-sm font-semibold text-neutral-900 mb-1.5">
                                                <div className="flex items-center gap-2">
                                                    <Briefcase size={14} className="text-amber-600" />
                                                    Work Type
                                                </div>
                                            </label>
                                            <select
                                                name="employmentType"
                                                value={formData.employmentType}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2 rounded-lg bg-neutral-50 border border-neutral-200 text-sm text-neutral-900 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100 transition-all appearance-none"
                                            >
                                                <option value="">Select...</option>
                                                <option value="full-time">Full-time</option>
                                                <option value="part-time">Part-time</option>
                                                <option value="remote">Remote</option>
                                            </select>
                                        </div>
                                    )}


                                </div>

                                {/* Additional Fields for non-HR subjects */}
                                {formData.subject && formData.subject !== "hr" && (
                                    <>
                                        {/* Training Interest */}
                                        <div>
                                            <label className="block text-xs lg:text-sm font-semibold text-neutral-900 mb-1.5">
                                                <div className="flex items-center gap-2">
                                                    <BookOpen size={14} className="text-amber-600" />
                                                    Program Interest
                                                </div>
                                            </label>
                                            <select
                                                name="training"
                                                value={formData.training}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2 rounded-lg bg-neutral-50 border border-neutral-200 text-sm text-neutral-900 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100 transition-all appearance-none cursor-pointer hover:border-amber-300"
                                                title="Select your training program interest or leave blank if unsure"
                                            >
                                                <option value="">Select a program...</option>
                                                <option value="interior-design">Interior Design</option>
                                                <option value="architecture">Architecture Services</option>
                                                <option value="valuation">Valuation Services</option>
                                            </select>
                                        </div>

                                        {/* Message & Interests Row */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                            {/* Additional Interests */}
                                            <div>
                                                <label className="block text-xs lg:text-sm font-semibold text-neutral-900 mb-1.5">
                                                    <div className="flex items-center gap-2">
                                                        <CheckCircle size={14} className="text-amber-600" />
                                                        Skills & Interests
                                                    </div>
                                                </label>
                                                <textarea
                                                    name="interests"
                                                    placeholder="Your skills, interests, focus areas..."
                                                    value={formData.interests}
                                                    onChange={handleChange}
                                                    rows={3}
                                                    className="w-full px-3 py-2 rounded-lg bg-neutral-50 border border-neutral-200 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100 transition-all resize-none"
                                                />
                                            </div>

                                            {/* Message Field */}
                                            <div>
                                                <label className="block text-xs lg:text-sm font-semibold text-neutral-900 mb-1.5">
                                                    <div className="flex items-center gap-2">
                                                        <MessageSquare size={14} className="text-amber-600" />
                                                        About You
                                                    </div>
                                                </label>
                                                <textarea
                                                    name="message"
                                                    placeholder="Background, experience, goals..."
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    rows={3}
                                                    className="w-full px-3 py-2 rounded-lg bg-neutral-50 border border-neutral-200 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100 transition-all resize-none"
                                                />
                                            </div>
                                        </div>
                                    </>
                                )}



                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-2 sm:py-2.5 px-4 sm:px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 text-xs sm:text-sm lg:text-base mt-2"
                                    whileHover={{ scale: !isLoading ? 1.02 : 1 }}
                                    whileTap={{ scale: !isLoading ? 0.98 : 1 }}
                                >
                                    {isLoading ? (
                                        <>
                                            <Loader2 size={14} className="sm:w-4 sm:h-4 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Check size={14} className="sm:w-4 sm:h-4" />
                                            {formData.subject === "hr" ? "Submit HR Application" : "Submit Application"}
                                        </>
                                    )}
                                </motion.button>

                                <p className="text-xs text-neutral-500 text-center mt-2">
                                    We respect your privacy and will only contact you about your application.
                                </p>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Success Modal */}
            <AnimatePresence>
                {showSuccess && (
                    <motion.div
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowSuccess(false)}
                    >
                        <motion.div
                            className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 w-full max-w-md shadow-2xl text-center"
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ duration: 0.3 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                                className="flex justify-center mb-4 sm:mb-6"
                            >
                                <div className="w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Check className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
                                </div>
                            </motion.div>

                            <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-2 sm:mb-3">Application Received!</h3>
                            <p className="text-neutral-600 text-base sm:text-lg mb-2">
                                Thank you for your interest in joining Mahim Architect.
                            </p>
                            <p className="text-neutral-500 text-sm sm:text-base mb-6 sm:mb-8">
                                Our team will review your application and get back to you soon at the email address provided.
                            </p>

                            <motion.button
                                onClick={() => setShowSuccess(false)}
                                className="w-full bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white font-bold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg transition-all duration-200 text-sm sm:text-base"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Close
                            </motion.button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}