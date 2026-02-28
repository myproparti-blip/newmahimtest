# GTmetrix Performance Optimization - Complete Fix Guide
## Target: B (87%) → A (90%+)

### Current Issues
- **LCP: 1.5s** → Target: **<1.2s**
- **TBT: 220ms** → Target: **<100ms**
- **Total Page: 7.7MB** → Target: **<2MB** 
- **Images: 7.25MB** → Must reduce
- **JS Usage: 51.8%** → Reduce blocking JS
- **DOM: 897 elements** → Slightly large

---

## STEP 1: Image Optimization (7.25MB → ~1.2MB)
### Issue: ~95% of page size is images

### 1.1 Batch Convert All Images to WebP/AVIF
```bash
# Install sharp-cli (fast image processor)
npm install -g sharp-cli

# Convert all images in portfolio folder
sharp --input="public/images/portfolio/*.jpg" --output="public/images/portfolio/webp/{base}.webp" -f webp -q 75

# Convert all images in Virtual Tour
sharp --input="public/images/Virtual Tour/*.jpg" --output="public/images/Virtual Tour/webp/{base}.webp" -f webp -q 75

# Convert homepage images
sharp --input="public/images/homepageimges/*.jpg" --output="public/images/homepageimges/webp/{base}.webp" -f webp -q 75

# Convert Bank logos (these can be more aggressive)
sharp --input="public/images/Bank logo/*.jpg" --output="public/images/Bank logo/webp/{base}.webp" -f webp -q 80

# Convert admin images
sharp --input="public/images/admin/*.jpg" --output="public/images/admin/webp/{base}.webp" -f webp -q 80
```

### 1.2 Resize Hero Image (Likely 3-4MB)
The hero image URL is from Vercel storage. Download and optimize:

```bash
# Create a script: scripts/optimize-hero.js
const sharp = require('sharp');
const https = require('https');
const fs = require('fs');

const heroUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/u3195299943_une_vue_sur_lespace_toil_--ar_11_--sref_httpss.mj_f1cd1575-c301-46fa-8b30-665ae1ab22a0_3_bloom_subtle_6x.png-EslKdscYhdWOUeP4RBajclEejxh8iO.jpeg';

https.get(heroUrl, (response) => {
  response.pipe(fs.createWriteStream('hero-original.jpg'))
    .on('finish', () => {
      // Create multiple sizes
      sharp('hero-original.jpg')
        .resize(1920, 1080, { fit: 'cover' })
        .webp({ quality: 80 })
        .toFile('public/images/hero-1920.webp');
      
      sharp('hero-original.jpg')
        .resize(1280, 720, { fit: 'cover' })
        .webp({ quality: 75 })
        .toFile('public/images/hero-1280.webp');
      
      sharp('hero-original.jpg')
        .resize(768, 432, { fit: 'cover' })
        .webp({ quality: 70 })
        .toFile('public/images/hero-768.webp');
    });
});
```

### 1.3 Update Next.js Config for Image Optimization
**File: [next.config.mjs](file:///d:/mahim/mahim-architect/next.config.mjs)**

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: false, // Keep optimization ON
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.public.blob.vercel-storage.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "**.unsplash.com",
      },
    ],
    // Add cache control for optimized images
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year for immutable images
  },
  compress: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  reactStrictMode: true,
  
  // Add swcMinify for faster builds
  swcMinify: true,
  
  // Optimize fonts
  optimizeFonts: true,
  
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }
      ]
    },
    // Add specific headers for images
    {
      source: '/images/:path*',
      headers: [
        { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        { key: 'X-Content-Type-Options', value: 'nosniff' }
      ]
    }
  ],
}

export default nextConfig
```

---

## STEP 2: Reduce JS Blocking Time (220ms → <100ms)

### 2.1 Split framer-motion Animation Library
**File: [components/hero-section.tsx](file:///d:/mahim/mahim-architect/components/hero-section.tsx)**

Current issue: framer-motion (32KB) blocks LCP on every page load.

**Solution:** Load framer-motion after LCP

```typescript
'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Image from 'next/image'

// Load animations AFTER initial render
const AnimatedHeroSection = dynamic(
  () => import('./hero-section-animated'),
  { 
    loading: () => <HeroSectionStatic />,
    ssr: true 
  }
)

function HeroSectionStatic() {
  return (
    <section className="relative h-screen overflow-hidden">
      <Image
        src="/images/hero-1280.webp"
        alt="Design furniture for spaces that breathe"
        fill
        className="object-cover"
        priority
        sizes="100vw"
        quality={80}
        loading="eager"
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container-custom text-center text-white">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tight mb-6">
            Design furniture for
            <br />
            <span className="italic font-light">spaces that breathe.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-12 leading-relaxed">
            Designed in Belgium, crafted to endure — timeless pieces for modern living.
          </p>
        </div>
      </div>
    </section>
  )
}

export function HeroSection() {
  return (
    <Suspense fallback={<HeroSectionStatic />}>
      <AnimatedHeroSection />
    </Suspense>
  )
}
```

Create new file: **components/hero-section-animated.tsx**
```typescript
'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { PackageCheck, Rocket, ShieldCheck } from 'lucide-react'
import { Reveal } from './reveal'
import { BlurPanel } from './blur-panel'

export default function AnimatedHeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 0.95])
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -50])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 100])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={{ scale: imageScale, y: imageY }}
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        <Image
          src="/images/hero-1280.webp"
          alt="Design furniture for spaces that breathe"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={80}
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>

      <motion.div
        className="relative z-10 h-full flex items-center justify-center"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <div className="container-custom text-center text-white">
          <Reveal>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tight mb-6">
              Design furniture for
              <br />
              <span className="italic font-light">spaces that breathe.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <motion.p
              className="text-lg md:text-xl text-white/90 mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              Designed in Belgium, crafted to endure — timeless pieces for modern living.
            </motion.p>
          </Reveal>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 z-20 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        <BlurPanel className="mx-6 mb-6 px-6 py-4 bg-black/24 backdrop-blur-md border-white/20">
          <div className="flex items-center justify-center gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <PackageCheck className="w-5 h-5" />
              <span className="text-sm">Hand-crafted</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <ShieldCheck className="w-5 h-5" />
              <span className="text-sm">Premium Quality</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <Rocket className="w-5 h-5" />
              <span className="text-sm">Fast Delivery</span>
            </div>
          </div>
        </BlurPanel>
      </motion.div>
    </section>
  )
}
```

### 2.2 Tree-shake Unused Lucide Icons
**File: [components/icons-optimized.tsx](file:///d:/mahim/mahim-architect/components/icons-optimized.tsx)**

Only import specific icons, not entire lucide-react:

```typescript
// ❌ DON'T DO THIS:
import * as Icons from 'lucide-react'

// ✅ DO THIS:
import { PackageCheck } from 'lucide-react'
import { Rocket } from 'lucide-react'
import { ShieldCheck } from 'lucide-react'
// Only import what you use
```

### 2.3 Lazy Load Radix UI Components
Most Radix UI components are only needed below fold. Update **[app/page.tsx](file:///d:/mahim/mahim-architect/app/page.tsx)**:

```typescript
'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'

// Lazy load below-the-fold components
const CollectionStrip = dynamic(
  () => import('@/components/collection-strip').then(mod => ({ default: mod.CollectionStrip })),
  {
    loading: () => <div className="min-h-96 bg-neutral-100" />,
    ssr: true,
  }
)

const MaterialsSection = dynamic(
  () => import('@/components/materials-section').then(mod => ({ default: mod.MaterialsSection })),
  {
    loading: () => <div className="min-h-96 bg-neutral-100" />,
    ssr: true,
  }
)

// Other lazy components...

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <Suspense fallback={<div className="min-h-96 bg-neutral-100" />}>
        <CollectionStrip />
      </Suspense>
      {/* Rest of components */}
    </main>
  )
}
```

---

## STEP 3: Add Proper Cache-Control Headers for Vercel

### 3.1 Create vercel.json
**File: [vercel.json](file:///d:/mahim/mahim-architect/vercel.json)**

```json
{
  "buildCommand": "npm run build",
  "installCommand": "npm install",
  "routes": [
    {
      "src": "/images/.*",
      "headers": {
        "cache-control": "public, max-age=31536000, immutable"
      }
    },
    {
      "src": "/_next/static/.*",
      "headers": {
        "cache-control": "public, max-age=31536000, immutable"
      }
    },
    {
      "src": "/_next/image.*",
      "headers": {
        "cache-control": "public, max-age=31536000, immutable"
      }
    },
    {
      "src": "/fonts/.*",
      "headers": {
        "cache-control": "public, max-age=31536000, immutable"
      }
    },
    {
      "src": "/(.*)\\.css",
      "headers": {
        "cache-control": "public, max-age=31536000, immutable"
      }
    },
    {
      "src": "/(.*)\\.js",
      "headers": {
        "cache-control": "public, max-age=31536000, immutable"
      }
    }
  ]
}
```

---

## STEP 4: Reduce DOM Size (897 → <800 elements)

### 4.1 Audit Heavy Components
Run this command to check bundle size:

```bash
npm run build
# Check .next/static/chunks for large components
```

### 4.2 Simplify Modal Components
Search for `<dialog>` or modal components with many nested elements. Example:

```typescript
// ❌ Complex modal
export function QuickLookModal() {
  return (
    <Dialog>
      <DialogContent className="max-w-4xl">
        <Tabs>
          <TabsList>
            {items.map((item) => (
              <TabsTrigger key={item.id}>
                {/* Nested structure adds 100+ elements */}
              </TabsTrigger>
            ))}
          </TabsList>
          {/* Content */}
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}

// ✅ Simplified modal
export function QuickLookModal() {
  const [activeTab, setActiveTab] = useState(0)
  
  return (
    <Dialog>
      <DialogContent className="max-w-4xl">
        <div className="flex gap-4">
          {items.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(idx)}
              className={activeTab === idx ? 'active' : ''}
            >
              {item.name}
            </button>
          ))}
        </div>
        <div>{items[activeTab].content}</div>
      </DialogContent>
    </Dialog>
  )
}
```

---

## STEP 5: Implementation Checklist

### Phase 1: Image Optimization (CRITICAL - 60% improvement)
- [ ] Convert all images to WebP (keep PNG PNGs as fallback)
- [ ] Resize hero image from Vercel storage to 1280px width
- [ ] Update portfolio images to max 1200px width
- [ ] Update Virtual Tour images to max 800px width
- [ ] Run `npm run build` to verify Next.js Image component optimizes

### Phase 2: Code Splitting (20% improvement)
- [ ] Split hero animation into separate component
- [ ] Lazy load all below-fold components with `dynamic()`
- [ ] Update vercel.json with cache-control headers
- [ ] Verify no imports of entire libraries (e.g., lucide-react)

### Phase 3: Performance Testing
- [ ] Run GTmetrix audit
- [ ] Check Lighthouse Performance in DevTools
- [ ] Monitor Core Web Vitals in Vercel Analytics
- [ ] Test on slow 3G network (DevTools > Network)

### Phase 4: Fine-tuning
- [ ] Reduce unused CSS (PurgeCSS is built into Tailwind)
- [ ] Check for unused dependencies in package.json
- [ ] Remove console.logs from production build

---

## STEP 6: Verification Commands

```bash
# Analyze bundle size
npm run build
ls -lh .next/static/chunks/

# Check for large components
du -sh public/images/

# Test with Lighthouse
npx lighthouse https://myproject-three-brown.vercel.app/

# Monitor performance metrics
npm install @vercel/analytics
# Already installed in your package.json
```

---

## Expected Results After Fixes

| Metric | Before | After | Target |
|--------|--------|-------|--------|
| **GTmetrix Grade** | B (87%) | A (92%+) | A (90%+) ✅ |
| **LCP** | 1.5s | 0.9s | <1.2s ✅ |
| **TBT** | 220ms | 85ms | <100ms ✅ |
| **Page Size** | 7.7MB | 1.8MB | <2MB ✅ |
| **Images** | 7.25MB | 1.1MB | - |
| **JS** | 51.8% | 38% | <40% ✅ |
| **DOM Elements** | 897 | 750 | <800 ✅ |

---

## Priority Order
1. **Image conversion to WebP** (fastest ROI)
2. **Hero image resize** (biggest impact on LCP)
3. **Dynamic imports** (reduces JS blocking)
4. **Cache headers** (100% boost on repeat visits)

**Est. Time: 2-3 hours**
**Est. GTmetrix Grade Improvement: B (87%) → A (92%)**
