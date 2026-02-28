import type { Metadata } from "next"
import { generateMetadata as genMetadata } from "@/lib/seo-metadata"

export const metadata: Metadata = genMetadata({
  title: "Architect in Surat - Best Professional Architects",
  description:
    "Best architect in Surat for residential and commercial architecture. Professional architectural services, GMC approvals, design consultation. Call for free consultation.",
  canonical: "https://mahimarchitects.com/architect-in-surat",
  keywords: "architect in Surat, best architect Surat, architectural services Surat, home architect Surat",
})

export default function ArchitectInSuratLayout({ children }: { children: React.ReactNode }) {
  return children
}


