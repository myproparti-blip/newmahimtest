import type { Metadata } from "next"
import { generateMetadata as genMetadata } from "@/lib/seo-metadata"

export const metadata: Metadata = genMetadata({
  title: "Architecture Firm in Gujarat - Professional Services",
  description:
    "Leading architecture firm in Gujarat providing residential and commercial design services across Surat, Ahmedabad, and all major cities. Expert architects for your project.",
  canonical: "https://mahimarchitects.com/architect-in-gujarat",
  keywords: "architecture firm Gujarat, architect Gujarat, architecture services Gujarat",
})

export default function ArchitectInGujaratLayout({ children }: { children: React.ReactNode }) {
  return children
}
