'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'

// Lazy load below-the-fold components
const CollectionStrip = dynamic(() => import('@/components/collection-strip').then(mod => ({ default: mod.CollectionStrip })), {
  loading: () => <div className="min-h-96 bg-neutral-100" />,
  ssr: true,
})

const MaterialsSection = dynamic(() => import('@/components/materials-section').then(mod => ({ default: mod.MaterialsSection })), {
  loading: () => <div className="min-h-96 bg-neutral-100" />,
  ssr: true,
})

const EthosSection = dynamic(() => import('@/components/ethos-section').then(mod => ({ default: mod.EthosSection })), {
  loading: () => <div className="min-h-96 bg-neutral-100" />,
  ssr: true,
})

const NewsletterSection = dynamic(() => import('@/components/newsletter-section').then(mod => ({ default: mod.NewsletterSection })), {
  loading: () => <div className="min-h-96 bg-neutral-100" />,
  ssr: true,
})

const Footer = dynamic(() => import('@/components/footer').then(mod => ({ default: mod.Footer })), {
  loading: () => <div className="min-h-32 bg-neutral-100" />,
  ssr: true,
})

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <Suspense fallback={<div className="min-h-96 bg-neutral-100" />}>
        <CollectionStrip />
      </Suspense>
      <Suspense fallback={<div className="min-h-96 bg-neutral-100" />}>
        <MaterialsSection />
      </Suspense>
      <Suspense fallback={<div className="min-h-96 bg-neutral-100" />}>
        <EthosSection />
      </Suspense>
      <Suspense fallback={<div className="min-h-96 bg-neutral-100" />}>
        <NewsletterSection />
      </Suspense>
      <Suspense fallback={<div className="min-h-32 bg-neutral-100" />}>
        <Footer />
      </Suspense>
    </main>
  )
}
