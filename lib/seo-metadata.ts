import { Metadata } from "next"

const siteConfig = {
  name: "Mahim Architects",
  founder: "Ashish Patel",
  experience: "15 years",
  description: "Premium Residential & Commercial Architecture Services in Surat & Gujarat - Led by Ashish Patel",
  url: "https://mahimarchitect.com",
  city: "Surat",
  state: "Gujarat",
  country: "India",
  phone: "+91-XXXXXXXXXX", // Update with actual phone
  email: "hello@mahimarchitects.com", // Update with actual email
  address: "Surat, Gujarat, India",
}

export interface SeoMetadataParams {
  title: string
  description: string
  canonical?: string
  ogImage?: string
  ogType?: "website" | "article"
  noindex?: boolean
  keywords?: string
}

export function generateMetadata(params: SeoMetadataParams): Metadata {
  const {
    title,
    description,
    canonical = `${siteConfig.url}`,
    ogImage = `${siteConfig.url}/og-image.jpg`,
    ogType = "website",
    keywords,
  } = params

  return {
    title: `${title} | ${siteConfig.name}`,
    description,
    keywords,
    canonical,
    alternates: {
      canonical,
    },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url: canonical,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
          type: "image/jpeg",
        },
      ],
      type: ogType,
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [ogImage],
      site: "@mahimarchitects", // Update with actual Twitter handle
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
  }
}

// JSON-LD Schema helpers
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    description: siteConfig.description,
    image: `${siteConfig.url}/logo.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Surat, Gujarat",
      addressCity: siteConfig.city,
      addressState: siteConfig.state,
      addressCountry: siteConfig.country,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Surat",
      },
      {
        "@type": "State",
        name: "Gujarat",
      },
    ],
    knowsAbout: [
      "Residential Architecture",
      "Commercial Architecture",
      "Interior Design",
      "Building Design",
      "Architecture Consultation",
    ],
    priceRange: "₹₹₹",
    sameAs: [
      "https://www.facebook.com/mahimarchitects",
      "https://www.instagram.com/mahimarchitects",
      "https://www.linkedin.com/company/mahimarchitects",
    ],
  }
}

export function getProfessionSchema(title: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    description: description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Surat, Gujarat",
      addressCity: siteConfig.city,
      addressState: siteConfig.state,
      postalCode: "395001",
      addressCountry: "IN",
    },
    image: `${siteConfig.url}/og-image.jpg`,
    priceRange: "₹₹₹",
  }
}

export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function getFAQSchema(
  faqs: Array<{
    question: string
    answer: string
  }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

export const siteConfigData = siteConfig
