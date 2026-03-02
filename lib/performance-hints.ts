/**
 * Performance Optimization Hints
 * Used to provide hints to the browser for resource hints and performance improvements
 */

export const preloadImages = (images: string[]) => {
  if (typeof window !== 'undefined') {
    images.forEach(src => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = src
      document.head.appendChild(link)
    })
  }
}

export const deferImages = (selector: string) => {
  if (typeof window !== 'undefined') {
    const images = document.querySelectorAll(selector)
    images.forEach(img => {
      if (img instanceof HTMLImageElement) {
        img.loading = 'lazy'
      }
    })
  }
}

export const supportsReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export const requestIdleTask = (callback: IdleRequestCallback): number => {
  if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
    return (window.requestIdleCallback as any)(callback)
  }
  return window.setTimeout(callback, 1) as any
}

export const cancelIdleTask = (id: number): void => {
  if (typeof window !== 'undefined' && 'cancelIdleCallback' in window) {
    (window.cancelIdleCallback as any)(id)
  } else {
    window.clearTimeout(id)
  }
}

export const prefetchRoute = (href: string) => {
  if (typeof window !== 'undefined') {
    const link = document.createElement('link')
    link.rel = 'prefetch'
    link.href = href
    document.head.appendChild(link)
  }
}
