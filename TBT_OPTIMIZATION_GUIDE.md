# Total Blocking Time (TBT) Optimization Guide - 239ms → <150ms

## Current Situation
- **Performance: 86%** → Target: **95-99%**
- **TBT: 239ms** → Target: **<150ms** (Main issue!)
- **LCP: 1.6s** (Good - < 2.5s)
- **CLS: 0** (Perfect)

---

## 1. ROOT CAUSES OF HIGH TBT

### A. Framer Motion Bundle (Heavy!)
- **Current**: Loading full Framer Motion on every page
- **Impact**: 39KB gzipped, expensive animations on main thread
- **Solution**: Lazy load, reduce animation complexity

### B. Lucide React Icons (Bloat!)
- **Current**: Importing 50+ icons globally
- **Impact**: Tree-shaking doesn't work well with older bundlers
- **Solution**: Dynamic imports, icon sprite sheet, or SVG inlining

### C. Client-Side Rendering
- **Current**: Many components marked `'use client'`
- **Impact**: Hydration overhead, large JS payload
- **Solution**: Move to Server Components, minimize hydration

### D. Unnecessary Animations
- **Current**: Animations on hover, scroll, transitions everywhere
- **Impact**: requestAnimationFrame() blocks main thread
- **Solution**: Reduce animations, use CSS transforms, prefers-reduced-motion

---

## 2. IMMEDIATE ACTIONS (< 2 hours)

### ✅ Action 1: Update Next.js Config
Replace your `next.config.mjs` with the optimized version provided:
```bash
# Backup current config
cp next.config.mjs next.config.backup.mjs

# Use optimized config
cp next.config.optimized.mjs next.config.mjs
```

**Benefits:**
- Separate vendor bundles (framer-motion, lucide-react isolated)
- Tree-shaking optimization
- Better code splitting

### ✅ Action 2: Lazy Load Heavy Libraries

**Before:**
```tsx
import { motion } from 'framer-motion'

export default function Header() {
  return <motion.div>...</motion.div>
}
```

**After (Dynamic Import):**
```tsx
import dynamic from 'next/dynamic'

const MotionDiv = dynamic(() => import('framer-motion').then(m => ({ default: m.motion.div })), {
  ssr: false
})

export default function Header() {
  return <MotionDiv>...</MotionDiv>
}
```

### ✅ Action 3: Lazy Load Lucide Icons

**Before:**
```tsx
import { ChevronDown, Users, Mail, Heart, Star } from 'lucide-react'

export default function Nav() {
  return (
    <>
      <ChevronDown />
      <Users />
      <Mail />
    </>
  )
}
```

**After (Load on demand):**
```tsx
import dynamic from 'next/dynamic'

const ChevronDown = dynamic(() => import('lucide-react').then(m => ({ default: m.ChevronDown })), {
  ssr: false
})

const Users = dynamic(() => import('lucide-react').then(m => ({ default: m.Users })), {
  ssr: false
})

const Mail = dynamic(() => import('lucide-react').then(m => ({ default: m.Mail })), {
  ssr: false
})
```

**OR Better - Icon SVG Inline:**
```tsx
// components/icons/ChevronDown.tsx
export function ChevronDown() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  )
}
```

### ✅ Action 4: Reduce Header Component Animations

Replace heavy motion animations with CSS-only animations:

```tsx
// components/header-optimized.tsx
"use client"

import { useState, useEffect, useRef, useMemo, useCallback, memo } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

// Inline SVG icons instead of lucide-react
const IconChevronDown = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
)

const IconMail = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
  </svg>
)

const Header = memo(function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [connectDropdownOpen, setConnectDropdownOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const connectDropdownRef = useRef<HTMLDivElement>(null)

  // Optimize scroll listener
  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20)
          ticking = false
        })
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (connectDropdownRef.current && !connectDropdownRef.current.contains(event.target as Node)) {
        setConnectDropdownOpen(false)
      }
    }

    if (connectDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      return () => document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [connectDropdownOpen])

  const navItems = useMemo(() => [
    { label: "VIRTUAL TOUR", href: "/virtual-tour" },
    { label: "PORTFOLIO", href: "/portfolio" },
    { label: "VALUATION SERVICES", href: "/valuation-services" },
    { label: "JOIN US", href: "/join-us" },
  ], [])

  const connectMenuItems = useMemo(() => [
    { label: "WhatsApp", href: "https://wa.me/917046127242", description: "Chat with us" },
    { label: "Email", href: "mailto:mahimhr01@gmail.com", description: "Send an email" },
    { label: "Instagram", href: "https://instagram.com/mahim99arch", description: "Follow us" },
  ], [])

  return (
    <header
      className={cn(
        "fixed top-4 left-4 right-4 z-50 transition-all duration-500 px-6 lg:px-8 py-3 rounded-3xl",
        isScrolled
          ? "bg-black/85 backdrop-blur-2xl border border-amber-500/40 shadow-2xl"
          : "bg-black/70 backdrop-blur-xl border border-amber-500/20 shadow-xl",
      )}
    >
      <div className="flex items-center justify-between gap-3">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 hidden sm:flex items-center">
          <Image
            src="/images/comp logo/logoo.png"
            alt="MAHIM Architect"
            width={80}
            height={32}
            className="h-auto"
            style={{ backgroundColor: "transparent" }}
          />
        </Link>

        {/* Desktop Navigation - No motion animations, CSS transitions only */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6 flex-1 justify-center">
          <Link href="/" className={cn(
            "text-xs lg:text-sm font-semibold transition-colors duration-300 whitespace-nowrap",
            pathname === "/" ? "text-amber-400" : "text-gray-300 hover:text-amber-400"
          )}>
            HOME
          </Link>

          <Link href="/welcome" className={cn(
            "text-xs lg:text-sm font-semibold transition-colors duration-300 whitespace-nowrap",
            pathname === "/welcome" ? "text-amber-400" : "text-gray-300 hover:text-amber-400"
          )}>
            ABOUT US
          </Link>

          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className={cn(
              "text-xs lg:text-sm font-semibold transition-colors duration-300 whitespace-nowrap",
              pathname === item.href ? "text-amber-400" : "text-gray-300 hover:text-amber-400"
            )}>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Connect Button */}
        <div ref={connectDropdownRef} className="relative hidden sm:flex">
          <button
            onClick={() => setConnectDropdownOpen(!connectDropdownOpen)}
            className="px-4 py-2 rounded-full border border-amber-500/60 text-amber-400 text-sm font-semibold hover:bg-amber-500/15 transition-all duration-300 flex items-center gap-2"
          >
            <IconMail />
            <span>Connect</span>
          </button>

          {/* Dropdown - CSS only, no Framer Motion */}
          {connectDropdownOpen && (
            <div className="absolute top-full right-0 mt-4 w-56 bg-black/95 backdrop-blur-xl border border-amber-500/30 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
              {connectMenuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label !== "Email" ? "_blank" : undefined}
                  rel={item.label !== "Email" ? "noopener noreferrer" : undefined}
                  onClick={() => setConnectDropdownOpen(false)}
                  className="flex items-start gap-4 px-6 py-3.5 text-sm text-gray-300 hover:bg-amber-500/15 transition-colors duration-200 border-b border-amber-500/10 last:border-b-0"
                >
                  <div className="text-amber-400 flex-shrink-0 mt-0.5">
                    <IconMail />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-gray-200 group-hover:text-amber-400 transition-colors">
                      {item.label}
                    </div>
                    <div className="text-xs text-gray-500">
                      {item.description}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Mobile Logo */}
        <Link href="/" className="md:hidden flex-shrink-0">
          <Image
            src="/images/comp logo/logoo.png"
            alt="MAHIM Architect"
            width={60}
            height={24}
            className="h-auto"
          />
        </Link>

        {/* Mobile Menu Button - CSS animation only */}
        <button
          className="md:hidden flex flex-col gap-1 w-6 h-6 justify-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className={cn(
            "w-5 h-0.5 bg-amber-500 rounded-full transition-all duration-300",
            mobileMenuOpen ? "rotate-45 translate-y-2" : ""
          )} />
          <div className={cn(
            "w-4 h-0.5 bg-amber-500 rounded-full transition-all duration-300",
            mobileMenuOpen ? "opacity-0" : "opacity-100"
          )} />
          <div className={cn(
            "w-5 h-0.5 bg-amber-500 rounded-full transition-all duration-300",
            mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
          )} />
        </button>
      </div>

      {/* Mobile Menu - CSS only */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-4 right-4 mt-4 bg-black/95 backdrop-blur-xl border border-amber-500/30 rounded-2xl shadow-2xl overflow-hidden md:hidden animate-in fade-in zoom-in-95 duration-200">
          <div className="p-4 max-h-96 overflow-y-auto">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block">
              <div className={cn(
                "px-4 py-3 text-sm font-semibold rounded-lg transition-colors",
                pathname === "/" ? "text-amber-400 bg-amber-500/15" : "text-gray-300 hover:text-amber-400 hover:bg-amber-500/15"
              )}>
                HOME
              </div>
            </Link>
            <Link href="/welcome" onClick={() => setMobileMenuOpen(false)} className="block">
              <div className={cn(
                "px-4 py-3 text-sm font-semibold rounded-lg transition-colors",
                pathname === "/welcome" ? "text-amber-400 bg-amber-500/15" : "text-gray-300 hover:text-amber-400 hover:bg-amber-500/15"
              )}>
                ABOUT US
              </div>
            </Link>
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} onClick={() => setMobileMenuOpen(false)} className="block">
                <div className={cn(
                  "px-4 py-3 text-sm font-semibold rounded-lg transition-colors",
                  pathname === item.href ? "text-amber-400 bg-amber-500/15" : "text-gray-300 hover:text-amber-400 hover:bg-amber-500/15"
                )}>
                  {item.label}
                </div>
              </Link>
            ))}
            <div className="border-t border-amber-500/20 my-2" />
            {connectMenuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.label !== "Email" ? "_blank" : undefined}
                rel={item.label !== "Email" ? "noopener noreferrer" : undefined}
                onClick={() => setMobileMenuOpen(false)}
                className="block"
              >
                <div className="px-4 py-3 text-sm font-semibold text-gray-300 hover:text-amber-400 hover:bg-amber-500/15 rounded-lg transition-colors">
                  {item.label}
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
})

Header.displayName = "Header"

export { Header }
