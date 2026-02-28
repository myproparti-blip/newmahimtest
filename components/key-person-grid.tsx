"use client"

import { motion } from "framer-motion"
import { TeamMemberCard } from "./team-member-card"
import { Separator } from "@/components/ui/separator"

const teamMembers = [
  {
    id: "1",
    name: "Ashish Patel",
    title: "Founder & Principal Architect",
    image: "/images/admin/01-HIGH-RESOLUTION-PHOTO-ASHISH-PATEL.jpg",
    bio: "With 15+ years of experience, Ashish leads Mahim with visionary architecture that blends sustainability with contemporary design. His creative leadership since 2009 has shaped the firm's philosophy of design excellence.",
    experience: "15+ Years in Architecture & Design",
    specialties: [
      "Residential Design",
      "Commercial Architecture",
      "Sustainable Design",
      "Urban Planning",
      "Interior Design",
    ],
    social: {
      linkedin: "https://linkedin.com",
      email: "mahimhr01@gmail.com",
      phone: "+91 82383 77000",
    },
    featured: true,
  },
  
]

export function KeyPersonGrid() {
  return (
    <section className="py-24 lg:py-22 bg-gradient-to-b from-white to-neutral-50">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-amber-600 font-semibold tracking-widest text-sm mb-4 uppercase">Our Team</p>
          <h2 className="text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
            Talented <span className="italic font-light text-neutral-600">Professionals</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            A diverse team of architects, designers, and specialists united by a passion for creating exceptional spaces
            and pushing the boundaries of design innovation.
          </p>
        </motion.div>

        <Separator className="mb-16" />

        {/* Featured Member (Ashish Patel) */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <TeamMemberCard {...teamMembers[0]} featured={true} />
          </motion.div>
        </div>

        <Separator className="mb-1" />

        {/* Team Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {teamMembers.slice(1).map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <TeamMemberCard {...member} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}