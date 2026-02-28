"use client"

import { useEffect, useRef } from "react"
import { SWFPlayer } from "./swf-player"

declare global {
  interface Window {
    pannellum: any
  }
}

interface PanoramaViewerProps {
  imageUrl: string
  title?: string
}

export function PanoramaViewer({ imageUrl, title }: PanoramaViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isSWF = imageUrl.toLowerCase().endsWith(".swf")
  const isVideo = /\.(mp4|webm|mov|avi)$/i.test(imageUrl)

  

  // Return SWF player for SWF files
  if (isSWF) {
    return <SWFPlayer src={imageUrl} title={title} />
  }

  useEffect(() => {
    if (!containerRef.current) return

    // Load pannellum script for image files
    if (!window.pannellum) {
      const script = document.createElement("script")
      script.src = "https://cdn.pannellum.org/2.5/pannellum.js"
      script.async = true
      script.onload = () => {
        initPannellum()
      }
      document.head.appendChild(script)

      // Load pannellum CSS
      const link = document.createElement("link")
      link.rel = "stylesheet"
      link.href = "https://cdn.pannellum.org/2.5/pannellum.css"
      document.head.appendChild(link)
    } else {
      initPannellum()
    }

    function initPannellum() {
      if (containerRef.current && window.pannellum) {
        window.pannellum.viewer(containerRef.current.id, {
          type: "equirectangular",
          panorama: imageUrl,
          autoLoad: true,
          showControls: true,
          mouseZoom: true,
          showFullscreenCtrl: true,
          keyboardZoom: true,
          title: title,
        })
      }
    }
  }, [imageUrl, title])

  return (
    <div
      ref={containerRef}
      id="panorama-viewer"
      style={{
        width: "100%",
        height: "500px",
        backgroundColor: "#f3f4f6",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        position: "relative",
      }}
    />
  )
}
