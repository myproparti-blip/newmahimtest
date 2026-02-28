"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { VirtualTourHero } from "@/components/virtual-tour-hero"
import { VirtualTourGallery } from "@/components/virtual-tour-gallery"
import { VirtualTourFeatures } from "@/components/virtual-tour-features"
import { VirtualTourCTA } from "@/components/virtual-tour-cta"

export default function VirtualTourPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <VirtualTourHero />
     
      <VirtualTourGallery />
      <VirtualTourFeatures />
      <VirtualTourCTA />
      <Footer />
    </main>
  )
}
