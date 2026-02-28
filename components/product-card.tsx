"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Eye, ShoppingCart } from "lucide-react"

interface ProductCardProps {
  product: {
    id: string
    name: string
    price: string
    image: string
    badge?: "New" | "Back in stock" | "Limited"
    materials: string[]
    swatches: { name: string; color: string }[]
    quickLookImages: string[]
    dimensions: string
  }
  onQuickLook: (product: any) => void
}

export function ProductCard({ product, onQuickLook }: ProductCardProps) {
  return (
    <motion.div
      className="group relative bg-white overflow-hidden border border-neutral-200/50 hover:border-neutral-300/80 transition-all duration-300"
      style={{
        borderRadius: "20px",
      }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      layout
    >
      {/* Badge */}
      {product.badge && (
        <motion.div
          className="absolute top-5 left-5 z-20"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <span
            className={cn(
              "px-4 py-1.5 text-xs font-bold rounded-full backdrop-blur-md",
              product.badge === "New" && "bg-green-500/90 text-white",
              product.badge === "Back in stock" && "bg-blue-500/90 text-white",
              product.badge === "Limited" && "bg-amber-600/90 text-white",
            )}
          >
            {product.badge}
          </span>
        </motion.div>
      )}

      {/* Product Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "25/36" }}>
        <div className="relative w-full h-full bg-neutral-100">
          <motion.div
            className="w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image
              src={product.image || "/placeholder.svg?height=600&width=400"}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </motion.div>

          {/* Overlay on Hover */}
          <motion.div
            className="absolute inset-0 bg-black/40 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <motion.button
              className="p-3 bg-white rounded-full text-neutral-900 hover:bg-amber-600 hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onQuickLook(product)}
            >
              <Eye size={20} />
            </motion.button>
            <motion.button
              className="p-3 bg-white rounded-full text-neutral-900 hover:bg-amber-600 hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ShoppingCart size={20} />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6 bg-white relative z-10">
        <div className="mb-4">
          <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-amber-600 transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-neutral-500 leading-relaxed">{product.materials.join(" • ")}</p>
        </div>

        {/* Swatches */}
        <div className="flex gap-2 mb-4">
          {product.swatches.slice(0, 3).map((swatch) => (
            <motion.div
              key={swatch.name}
              className="w-5 h-5 rounded-full border-2 border-neutral-200 cursor-pointer hover:border-neutral-400 transition-all"
              style={{ backgroundColor: swatch.color }}
              whileHover={{ scale: 1.2 }}
              title={swatch.name}
            />
          ))}
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-neutral-900">{product.price}</span>
          <motion.button
            className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold text-sm rounded-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Add
          </motion.button>
        </div>
      </div>

      {/* Divider Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent"></div>
    </motion.div>
  )
}
