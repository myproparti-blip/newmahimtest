"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronDown } from "lucide-react"

const categories = ["All", "Residential", "Commercial", "Luxury", "Modern", "Contemporary"]
const years = ["All Years", "2024", "2023", "2022", "2021"]

interface VirtualTourFilterProps {
  onCategoryChange?: (category: string) => void
  onYearChange?: (year: string) => void
}

export function VirtualTourFilter({ onCategoryChange, onYearChange }: VirtualTourFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedYear, setSelectedYear] = useState("All Years")

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    onCategoryChange?.(category)
  }

  const handleYearChange = (year: string) => {
    setSelectedYear(year)
    onYearChange?.(year)
  }

  return (
    <motion.div
      className="w-full space-y-6 mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Category Filter */}
      <div>
        <h3 className="text-sm font-semibold text-neutral-700 mb-4 uppercase tracking-widest">Category</h3>
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`rounded-full transition-all ${
                selectedCategory === category
                  ? "bg-amber-600 hover:bg-amber-700 text-white border-amber-600"
                  : "border-neutral-300 text-neutral-700 hover:border-amber-600 hover:text-amber-600"
              }`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Year Filter */}
      <div>
        <h3 className="text-sm font-semibold text-neutral-700 mb-4 uppercase tracking-widest">Year</h3>
        <div className="flex flex-wrap gap-3">
          {years.map((year) => (
            <Button
              key={year}
              variant={selectedYear === year ? "default" : "outline"}
              className={`rounded-full transition-all ${
                selectedYear === year
                  ? "bg-amber-600 hover:bg-amber-700 text-white border-amber-600"
                  : "border-neutral-300 text-neutral-700 hover:border-amber-600 hover:text-amber-600"
              }`}
              onClick={() => handleYearChange(year)}
            >
              {year}
            </Button>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
