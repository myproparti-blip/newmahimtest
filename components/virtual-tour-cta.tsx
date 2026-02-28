"use client"

import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play } from "lucide-react"

export function VirtualTourCTA() {
  const router = useRouter()

  const handleStartExploring = () => {
    router.push("/virtual-tour")
  }

  const handleWatchDemo = () => {
    // You can update this URL to your actual demo video
    window.open("https://www.youtube.com/embed/your-demo-video-id", "_blank")
  }

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-r from-neutral-900 to-neutral-800 text-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Badge className="mb-6 bg-amber-600 hover:bg-amber-700 text-white">IMMERSIVE EXPERIENCE</Badge>

          <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Ready to Explore Our Designs?
          </h2>

          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Take a step into the future of architectural visualization. Our 360° virtual tours let you experience
            every detail of our projects from anywhere in the world.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleStartExploring}
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg rounded-lg group cursor-pointer"
            >
              Start Exploring
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={handleWatchDemo}
              variant="outline"
              className="border-white text-black hover:bg-white/10 px-8 py-6 text-lg rounded-lg group cursor-pointer"
            >
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
