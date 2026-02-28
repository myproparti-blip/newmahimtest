"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Linkedin, Mail, Phone, ArrowRight, X } from "lucide-react"
import { useState } from "react"

interface TeamMemberCardProps {
  id: string
  name: string
  title: string
  image: string
  bio: string
  experience: string
  specialties: string[]
  social?: {
    linkedin?: string
    email?: string
    phone?: string
  }
  featured?: boolean
}

export function TeamMemberCard({
  id,
  name,
  title,
  image,
  bio,
  experience,
  specialties,
  social,
  featured = false,
}: TeamMemberCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [showProfile, setShowProfile] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={featured ? "md:col-span-2" : ""}
    >
      <Card
        className={`h-full overflow-hidden border-neutral-200/50 hover:border-neutral-300 transition-all duration-300 hover:shadow-2xl group ${
          featured ? "lg:grid lg:grid-cols-2 gap-0" : ""
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Section */}
        <div
          className={`relative overflow-hidden bg-neutral-100 ${
            featured ? "h-96 md:h-full" : "h-80"
          }`}
        >
          <Image
            src={image}
            alt={name}
            fill
            className={`object-cover transition-transform duration-500 ${
              isHovered ? "scale-110" : "scale-100"
            }`}
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Featured Badge */}
          {featured && (
            <Badge className="absolute top-4 left-4 bg-amber-600 hover:bg-amber-700 text-white z-10">
              Founder
            </Badge>
          )}
        </div>

        {/* Content Section */}
        <CardContent className={`flex flex-col justify-between ${featured ? "p-10" : "p-8"}`}>
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3
                  className={`${
                    featured ? "text-3xl" : "text-2xl"
                  } font-bold text-neutral-900 mb-1 group-hover:text-amber-600 transition-colors`}
                >
                  {name}
                </h3>
                <p className="text-amber-600 font-semibold text-sm uppercase tracking-widest">{title}</p>
              </div>
            </div>

            {/* Experience */}
            <div className="mb-6 pb-6 border-b border-neutral-200/50">
              <p className="text-sm text-neutral-600 mb-2 font-semibold uppercase tracking-widest">
                Experience
              </p>
              <p className="text-neutral-700 font-medium">{experience}</p>
            </div>
          </div>

          {/* Bio */}
          <p className={`text-neutral-600 leading-relaxed mb-6 ${featured ? "text-base" : "text-sm"}`}>{bio}</p>

          {/* Specialties */}
          <div className="mb-8">
            <p className="text-sm font-semibold text-neutral-700 mb-3 uppercase tracking-widest">Specialties</p>
            <div className="flex flex-wrap gap-2">
              {specialties.map((specialty) => (
                <Badge
                  key={specialty}
                  variant="outline"
                  className="bg-amber-50 border-amber-200 text-amber-700 hover:bg-amber-100"
                >
                  {specialty}
                </Badge>
              ))}
            </div>
          </div>

          {/* Social Links */}
          {social && (
            <div className="flex gap-3 mb-6 pt-6 border-t border-neutral-200/50">
              {social.linkedin && (
                <Button size="icon" variant="ghost" asChild className="hover:text-amber-600">
                  <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
              )}
              {social.email && (
                <Button size="icon" variant="ghost" asChild className="hover:text-amber-600">
                  <a href={`mailto:${social.email}`}>
                    <Mail className="w-5 h-5" />
                  </a>
                </Button>
              )}
              {social.phone && (
                <Button size="icon" variant="ghost" asChild className="hover:text-amber-600">
                  <a href={`tel:${social.phone}`}>
                    <Phone className="w-5 h-5" />
                  </a>
                </Button>
              )}
            </div>
          )}

          {/* CTA Button */}
          <Button 
            onClick={() => setShowProfile(true)}
            className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg group/btn transition-all duration-300">
            View Profile
            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
          </CardContent>
          </Card>

          {/* Profile Modal */}
          <AnimatePresence>
          {showProfile && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowProfile(false)}
          >
            <motion.div
              className="bg-white rounded-3xl w-full max-w-4xl shadow-2xl"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header with Close Button */}
              <div className="sticky top-0 bg-white border-b border-neutral-200 p-6 flex justify-between items-center rounded-t-3xl">
                <h2 className="text-3xl font-bold text-neutral-900">{name}</h2>
                <button
                  onClick={() => setShowProfile(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X size={28} />
                </button>
              </div>

              {/* Content */}
              <div className="p-8 lg:grid lg:grid-cols-2 gap-8">
                {/* Image */}
                <div className="relative h-96 rounded-2xl overflow-hidden bg-neutral-100 mb-8 lg:mb-0">
                  <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Details */}
                <div className="flex flex-col">
                  {/* Title */}
                  <p className="text-amber-600 font-bold text-lg uppercase tracking-widest mb-4">{title}</p>

                  {/* Experience */}
                  <div className="mb-8">
                    <h3 className="text-sm font-bold text-neutral-700 uppercase tracking-widest mb-3">Experience</h3>
                    <p className="text-lg font-semibold text-neutral-900">{experience}</p>
                  </div>

                  {/* Bio */}
                  <div className="mb-8">
                    <h3 className="text-sm font-bold text-neutral-700 uppercase tracking-widest mb-3">About</h3>
                    <p className="text-neutral-600 leading-relaxed text-base">{bio}</p>
                  </div>

                  {/* Specialties */}
                  <div className="mb-8">
                    <h3 className="text-sm font-bold text-neutral-700 uppercase tracking-widest mb-3">Specialties</h3>
                    <div className="flex flex-wrap gap-2">
                      {specialties.map((specialty) => (
                        <Badge
                          key={specialty}
                          className="bg-amber-100 border-amber-300 text-amber-800 hover:bg-amber-200 rounded-full px-3 py-1"
                        >
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  {social && (
                    <div className="flex gap-4 pt-6 border-t border-neutral-200">
                      {social.linkedin && (
                        <a
                          href={social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-full bg-neutral-100 text-neutral-700 hover:bg-amber-100 hover:text-amber-600 transition-colors"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                      {social.email && (
                        <a
                          href={`mailto:${social.email}`}
                          className="p-3 rounded-full bg-neutral-100 text-neutral-700 hover:bg-amber-100 hover:text-amber-600 transition-colors"
                        >
                          <Mail className="w-5 h-5" />
                        </a>
                      )}
                      {social.phone && (
                        <a
                          href={`tel:${social.phone}`}
                          className="p-3 rounded-full bg-neutral-100 text-neutral-700 hover:bg-amber-100 hover:text-amber-600 transition-colors"
                        >
                          <Phone className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
          )}
          </AnimatePresence>
          </motion.div>
          )
          }