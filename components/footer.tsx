"use client"
import { motion } from "framer-motion"
import { Instagram, Mail, MessageCircle, ArrowUpRight, MapPin, Phone } from "lucide-react"
import { memo, useMemo } from "react"

const Footer = memo(function Footer() {
    const currentYear = useMemo(() => new Date().getFullYear(), [])

    const footerLinks = useMemo(() => ({
      Company: [
        { name: "About Us", href: "/welcome" },
        { name: "Design Strategy", href: "/design-strategy" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Key Person", href: "/key-person" },
      ],
      Support: [
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Terms of Service", href: "/terms-of-service" },
        { name: "Cookie Policy", href: "/cookie-policy" },
        { name: "FAQs", href: "/faqs" },
        { name: "Contact", href: "/support" },
      ],
    }), [])

    const socialLinks = useMemo(() => [
        { name: "WhatsApp", icon: MessageCircle, href: "https://wa.me/917046127242", target: "_blank" },
        { name: "Email", icon: Mail, href: "mailto:mahimhr01@gmail.com" },
        { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/mahim99arch?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", target: "_blank" },
    ], [])

    const contactInfo = useMemo(() => [
        { icon: Phone, text: "+91 82383 77000", href: "tel:+918238377000" },
        { icon: Mail, text: "mahimhr01@gmail.com", href: "mailto:mahimhr01@gmail.com" },
    ], [])

    return (
        <footer className="bg-gradient-to-b from-neutral-950 to-black border-t border-amber-500/20 text-white">
            <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-24">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
                    {/* Brand Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="lg:col-span-1"
                    >
                        <div className="mb-6">
                            <h3 className="text-3xl font-bold bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent mb-2">
                                Mahim Architect
                            </h3>
                            <div className="h-1 w-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full"></div>
                        </div>
                        <p className="text-gray-400 mb-8 leading-relaxed text-sm">
                            Transforming visions into magnificent architectural realities. We craft spaces that inspire and endure.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.name}
                                    href={social.href}
                                    target={social.target}
                                    rel={social.target === "_blank" ? "noopener noreferrer" : undefined}
                                    className="w-12 h-12 bg-amber-500/10 hover:bg-amber-500 border border-amber-500/30 hover:border-amber-500 rounded-full flex items-center justify-center text-amber-500 hover:text-white transition-all duration-300"
                                    whileHover={{ scale: 1.1, y: -3 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <social.icon size={20} />
                                    <span className="sr-only">{social.name}</span>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Links Sections */}
                    {Object.entries(footerLinks).map(([category, links], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h4 className="font-semibold text-white mb-6 text-lg relative pb-3">
                                {category}
                                <div className="absolute bottom-0 left-0 h-0.5 w-8 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full"></div>
                            </h4>
                            <ul className="space-y-3">
                                {links.map((link: any) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            target={link.target}
                                            rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
                                            className="text-gray-400 hover:text-amber-500 transition-colors duration-300 group flex items-center text-sm"
                                        >
                                            <span className="inline-block w-1.5 h-1.5 bg-amber-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                            {link.name}
                                            <ArrowUpRight
                                                size={14}
                                                className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                            />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}

                    {/* Contact Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="font-semibold text-white mb-6 text-lg relative pb-3">
                            Get In Touch
                            <div className="absolute bottom-0 left-0 h-0.5 w-8 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full"></div>
                        </h4>
                        <div className="space-y-4">
                            {contactInfo.map((info, idx) => (
                                <a
                                    key={idx}
                                    href={info.href}
                                    className="flex items-start gap-3 group text-sm text-gray-400 hover:text-amber-500 transition-colors duration-300"
                                >
                                    <info.icon size={20} className="text-amber-500 flex-shrink-0 mt-0.5" />
                                    <span className="group-hover:translate-x-1 transition-transform duration-300">{info.text}</span>
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent mb-8"></div>

                {/* Bottom Section */}
                <motion.div
                    className="flex flex-col md:flex-row items-center justify-between gap-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <p className="text-sm text-gray-500">
                        &copy; {currentYear} <span className="text-amber-500 font-semibold">Mahim Architect</span>. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm">
                        <a href="/privacy-policy" className="text-gray-500 hover:text-amber-500 transition-colors duration-300">
                            Privacy Policy
                        </a>
                        <a href="/terms-of-service" className="text-gray-500 hover:text-amber-500 transition-colors duration-300">
                            Terms of Service
                        </a>
                        <a href="/cookie-policy" className="text-gray-500 hover:text-amber-500 transition-colors duration-300">
                            Cookie Policy
                        </a>
                    </div>
                </motion.div>
            </div>
        </footer>
    )
})

Footer.displayName = "Footer"

export { Footer }
