"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

export function FloatingActionButton() {
  return (
    <motion.a
      href="https://wa.me/917046127242"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <MessageCircle size={24} />
    </motion.a>
  )
}
