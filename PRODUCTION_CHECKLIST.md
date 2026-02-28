# Production-Ready Performance Checklist

## Phase 1: Bundle Optimization (Immediate)

### [ ] 1. Update Next.js Configuration
```bash
cp next.config.optimized.mjs next.config.mjs
npm run build
```

### [ ] 2. Implement Icon Optimization
Choose ONE approach:

**Option A: SVG Inline (Recommended - Fastest)**
```tsx
// components/icons/index.ts
export function ChevronDown() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  )
}

// Use: <ChevronDown /> instead of lucide-react
```

**Option B: Dynamic Import (If you must use lucide-react)**
```tsx
import dynamic from 'next/dynamic'

const ChevronDown = dynamic(() => 
  import('lucide-react').then(mod => ({ default: mod.ChevronDown })),
  { ssr: false }
)
```

**Option C: Icon Sprite Sheet (Best for many icons)**
- Use tools like `svgo` + `svgsprite` to create sprite sheets
- Load once, reference many times

### [ ] 3. Lazy Load Framer Motion Components

**For below-the-fold sections:**
```tsx
import dynamic from 'next/dynamic'

const AnimatedSection = dynamic(
  () => import('@/components/animated-section'),
  { ssr: true, loading: () => <div className="h-96" /> }
)
```

**For non-critical animations:**
```tsx
'use client'

import { useEffect, useState } from 'react'

export function LazyAnimationComponent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Load Framer Motion only when visible
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
      }
    })
    
    // Observe element...
  }, [])

  if (!isVisible) return <div>Static fallback</div>
  
  // Import dynamically here
  return <AnimatedContent />
}
```

### [ ] 4. Replace Heavy Animation Libraries

**Framer Motion Heavy Animations → CSS/Tailwind:**
```tsx
// ❌ BEFORE: Framer Motion - blocks main thread
<motion.div animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>

// ✅ AFTER: CSS Transition - hardware accelerated
<div className="animate-fade-in">
```

**New CSS Animations (add to globals.css):**
```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.5s ease-out;
}

.animate-slide-in-up {
  animation: slideInUp 0.5s ease-out;
}

/* Respect user preferences */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Phase 2: Code Splitting & Lazy Loading (Day 1)

### [ ] 5. Optimize Page Layout.tsx

```tsx
// app/layout.tsx
import Script from 'next/script'
import dynamic from 'next/dynamic'

// Keep critical
import { FloatingActionButton } from '@/components/floating-action-button'

// Lazy load analytics
const GoogleAnalytics = dynamic(
  () => import('@/components/google-analytics'),
  { ssr: false }
)

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        {/* Critical preconnects only */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
        <FloatingActionButton />
        <GoogleAnalytics />
        
        {/* Move analytics to lazyOnload */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TBCDEF9XYZ"
          strategy="lazyOnload"
        />
      </body>
    </html>
  )
}
```

### [ ] 6. Server-Side Render More Components

**Move from `'use client'` to Server Components:**
```tsx
// BEFORE: Client component
'use client'
import { Header } from '@/components/header'

// AFTER: Server component (default)
// No 'use client' directive
import { Header } from '@/components/header'

// Only use 'use client' for:
// - useState, useEffect, useContext
// - Event handlers (onClick, onChange)
// - Hooks like useScroll, useMotionTemplate
```

**Example conversion:**
```tsx
// components/hero-section-optimized.tsx (Server Component)
import Image from 'next/image'
import { metadata } from '@/app/layout'

export async function HeroSection() {
  return (
    <section className="relative h-screen">
      <Image
        src="/hero.jpg"
        alt="Hero"
        fill
        className="object-cover"
        priority // LCP optimization
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">Welcome</h1>
      </div>
    </section>
  )
}
```

### [ ] 7. Optimize Homepage (page.tsx)

```tsx
// app/page.tsx
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'

// Lazy load everything below the fold
const CollectionStrip = dynamic(() => 
  import('@/components/collection-strip').then(m => ({ default: m.CollectionStrip })),
  { ssr: true, loading: () => <div className="min-h-96 bg-neutral-100 animate-pulse" /> }
)

const MaterialsSection = dynamic(() => 
  import('@/components/materials-section').then(m => ({ default: m.MaterialsSection })),
  { ssr: true, loading: () => <div className="min-h-96 bg-neutral-100 animate-pulse" /> }
)

const Footer = dynamic(() => 
  import('@/components/footer').then(m => ({ default: m.Footer })),
  { ssr: true, loading: () => <div className="min-h-32 bg-neutral-100 animate-pulse" /> }
)

export const metadata = {
  title: 'Best Interior Designer in Surat & Gujarat | Mahim Architects',
  description: 'Professional interior design and architecture services...',
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      
      <Suspense fallback={<div className="min-h-96 bg-neutral-100 animate-pulse" />}>
        <CollectionStrip />
      </Suspense>
      
      <Suspense fallback={<div className="min-h-96 bg-neutral-100 animate-pulse" />}>
        <MaterialsSection />
      </Suspense>
      
      <Suspense fallback={<div className="min-h-32 bg-neutral-100 animate-pulse" />}>
        <Footer />
      </Suspense>
    </main>
  )
}
```

---

## Phase 3: Runtime Optimization (Day 2)

### [ ] 8. Add Web Worker for Heavy Tasks
```tsx
// lib/worker.ts
if (typeof window !== 'undefined') {
  const worker = new Worker(new URL('@/lib/heavy-computation.worker.ts', import.meta.url))
  worker.onmessage = (event) => {
    console.log('Result:', event.data)
  }
}
```

### [ ] 9. Implement Request Animation Frame Limits
```tsx
// lib/useThrottledScroll.ts
export function useThrottledScroll(callback: Function, delay = 100) {
  useEffect(() => {
    let ticking = false
    
    const handleScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(() => {
          callback(window.scrollY)
          ticking = false
        })
      }
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [callback])
}
```

### [ ] 10. Enable Preloading for Critical Assets
```tsx
// app/layout.tsx
<head>
  <link rel="preload" as="font" href="/fonts/inter.woff2" crossOrigin="anonymous" />
  <link rel="preload" as="image" href="/logo.png" />
  <link rel="preload" href="/critical.css" as="style" />
</head>
```

---

## Phase 4: Verification & Testing (Day 3)

### [ ] 11. Measure Performance

**Build & Test:**
```bash
npm run build

# Check bundle size
npm run build | grep -E "^●|^\/"

# Local testing
npm run start

# GTmetrix testing
# 1. Go to gtmetrix.com
# 2. Enter your domain
# 3. Check TBT metric (should be < 150ms now)
```

**Browser DevTools Testing:**
```javascript
// Open DevTools Console and run:
performance.measureUserAgentSpecificMemory().then(result => {
  console.log('Memory:', (result.bytes / 1048576).toFixed(2), 'MB')
})

// Check Main Thread Activity
// 1. DevTools → Performance tab
// 2. Record 10 seconds
// 3. Look for yellow/red blocks (long tasks)
```

### [ ] 12. Implement Performance Monitoring

```tsx
// lib/analytics.ts
export function reportWebVitals(metric) {
  // Send to analytics
  const body = JSON.stringify(metric)
  
  if (navigator.sendBeacon) {
    navigator.sendBeacon('/api/vitals', body)
  } else {
    fetch('/api/vitals', { method: 'POST', body })
  }
}
```

### [ ] 13. Run Lighthouse CI
```bash
npm install -g @lhci/cli@^0.9.0
lhci autorun
```

---

## Expected Results After Optimization

| Metric | Before | After | Target |
|--------|--------|-------|--------|
| Performance | 86% | 95%+ | 95-99% |
| TBT | 239ms | <150ms | <150ms |
| LCP | 1.6s | 1.2-1.5s | <2.5s |
| CLS | 0 | 0 | <0.1 |
| FCP | 584ms | 400-500ms | <1.8s |
| Bundle Size | ~100KB | ~60KB | <80KB |

---

## Quick Implementation Order

1. **Day 1, Hour 1:** Update `next.config.mjs` + replace header.tsx
2. **Day 1, Hour 2:** Lazy load icons (SVG inline recommended)
3. **Day 1, Hour 3:** Convert non-critical components to Server Components
4. **Day 1, Hour 4:** Optimize page.tsx with better lazy loading
5. **Day 2, Hour 1:** Test with GTmetrix
6. **Day 2, Hour 2-3:** Fine-tune animations, bundle size
7. **Day 3:** Deploy & monitor

---

## DO NOT DO

❌ Don't use `framer-motion` for simple transitions (use CSS)
❌ Don't import all icons upfront (lazy load or inline SVG)
❌ Don't use `'use client'` for every component (SSR when possible)
❌ Don't load analytics scripts on init (use `lazyOnload`)
❌ Don't render animations that user will never see

---

## Additional Optimizations

### Image Optimization
```tsx
<Image
  src="/image.jpg"
  alt="description"
  width={1200}
  height={630}
  quality={75}
  priority={false} // Only true for hero images
/>
```

### CSS-in-JS Efficiency
```tsx
// ❌ AVOID: Object styles
const styles = { color: 'red', fontSize: '16px' }
<div style={styles} />

// ✅ USE: Tailwind classes
<div className="text-red-500 text-base" />
```

### Defer Non-Critical Scripts
```html
<script defer src="/non-critical.js"></script>
<script async src="/analytics.js"></script>
```

---

## Contacts & Resources

- [Next.js Performance Docs](https://nextjs.org/docs/app/building-your-application/optimizing)
- [Web Vitals Guide](https://web.dev/vitals/)
- [GTmetrix Recommendations](https://gtmetrix.com/)
- Your current score: Grade B (86%) → Target: Grade A (95%+)
