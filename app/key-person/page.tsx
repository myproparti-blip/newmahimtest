"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { KeyPersonHero } from "@/components/key-person-hero"
import { KeyPersonGrid } from "@/components/key-person-grid"
import { KeyPersonValues } from "@/components/key-person-values"
import { KeyPersonJourney } from "@/components/key-person-journey"
import { KeyPersonCTA } from "@/components/key-person-cta"

export default function KeyPersonPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <KeyPersonHero />
      <KeyPersonGrid />
      <KeyPersonValues />
      <KeyPersonJourney />
      <KeyPersonCTA />
      <Footer />
    </main>
  )
}
