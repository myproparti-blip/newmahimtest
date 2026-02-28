"use client"

import { useState, useMemo, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X, Filter } from "lucide-react"

interface Property {
  id: number
  name: string
  category: string
  location: string
  surfaceArea: string
  client?: string
  thumbnail: string
  images: string[]
  description: string
}

const DEMO_PROPERTIES: Property[] = [
  {
    id: 1,
    name: "SDB PANEL INTERIOR",
    category: "COMMERCIAL, HIGH RISE COMMERCIAL",
    location: "SURAT, GUJARAT",
    surfaceArea: "",
    thumbnail: "/images/portfolio/property-1-4.jpg",
    images: [
      
      "/images/portfolio/property-1-3.jpg",
      "/images/portfolio/property-1-4.jpg",
    ],
    description: "We proudly completed interior work at Surat Diamond Bourse (SDB), the world’s largest office building located in Surat, Gujarat. Our firm, Mahim Architect, was selected as one of only 15 approved architects permitted to execute interior projects inside this prestigious diamond trading hub. Being among the selected architects for such a landmark project reflects our expertise, trust, and design excellence.",
  },
  {
    id: 2,
    name: "ANTILIA SKY",
    category: "RESIDENTIAL",
    location: "VARIAV, SURAT, GUJARAT.",
    surfaceArea: "",
    thumbnail: "/images/portfolio/RIVERFRONT-min.jpg",
    images: [
      "/images/portfolio/RIVERFRONT_COMP.jpg",
      "/images/portfolio/RIVERFRONT-min.jpg",
    ],
    description: "Modern high-rise apartment complex featuring spacious units, contemporary design, and community spaces.",
  },
  {
    id: 3,
    name: "CRYSTAL LUXURIA",
    category: "HIGHRISE RESIDENTIAL PROJECT",
    location: "SURAT, GUJARAT",
    surfaceArea: "3,77,900 SQ.FT.",
    thumbnail: "/images/portfolio/013_GATE_FRONT_TOP.jpg",
    images: [
      "/images/portfolio/013_GATE_FRONT_TOP.jpg",
      
    ],
    description: "Elegant residential development with sophisticated architecture and premium living spaces.",
  },
  {
    id: 4,
    name: "PRAGATI THE WORLD",
    category: "COMMERCIAL",
    location: "SURAT, GUJARAT",
    surfaceArea: "",
    thumbnail: "/images/portfolio/Cam-01-New-16-10-2022-02.jpg",
    images: [
      "/images/portfolio/Cam-01-New-16-10-2022-02.jpg",
      
    ],
    description: "Modern commercial complex with architectural excellence and green spaces.",
  },
  {
    id: 5,
    name: "IT PARK 2",
    category: "COMMERCIAL",
    location: "YOGI CHOWK, NANA VARACCHA, SURAT, GUJARAT.",
    surfaceArea: "",
    thumbnail: "/images/portfolio/IT-PARK-2-1.jpeg",
    images: [
      "/images/portfolio/IT-PARK-2-1.jpeg",
         ],
    description: "Modern commercial complex with office spaces and retail outlets.",
  },
  {
    id: 6,
    name: "VESU BUNGALOW",
    category: "BUNGALOW",
    location: "VESU, SURAT",
    client: "RAJESH MODI",
    surfaceArea: "",
    thumbnail: "/images/portfolio/RESIZE.jpg",
    images: [
      "/images/portfolio/RESIZE.jpg",
    ],
    description: "Spacious bungalow with modern design, landscaped gardens, and luxurious amenities.",
  },
  {
    id: 7,
    name: "EMERALD GARDENS",
    category: "BUNGALOW",
    location: "UTTRAN, SURAT",
    client: "MANUBHAI",
    surfaceArea: "",
    thumbnail: "/images/portfolio/FINAL.jpg",
    images: [
      "/images/portfolio/FINAL.jpg",
      "/images/portfolio/FINAL-870x434.jpg",
      
    ],
    description: "Luxurious bungalow with lush gardens, elegant interiors, and premium amenities for a serene living experience.",
  },
  {
    id: 8,
    name: "HARI OM BUNGALOW",
    category: "BUNGALOW, RESIDENTIAL",
    location: "PIPLOD, SURAT, GUJARAT",
    surfaceArea: "",
    thumbnail: "/images/portfolio/FINAL-ELEVATION-3D.jpg",
    images: [
      "/images/portfolio/FINAL-ELEVATION-3D.jpg",
      
    ],
    description: "Elegant bungalow with modern design, spacious interiors, and landscaped gardens for a luxurious lifestyle.",
  },
  {
    id: 9,
    name: "SAJAN BUNGALOW",
    category: "BUNGALOW",
    location: "SURAT, GUJARAT",
    client: "NITINBHAI",
    surfaceArea: "",
    thumbnail: "/images/portfolio/NITINBHAI-01.png",
    images: [
      "/images/portfolio/NITINBHAI-01.png",
      
    ],
    description: "Spacious bungalow with contemporary design, landscaped gardens, and premium amenities for a luxurious living experience.",
  },
  {
    id: 10,
    name: "AALEKH BUNGLOWS HOUSE, PLAYGROUND, GARDEN, GATE.",
    category: "RESIDENTIAL",
    location: "UTRAN, SURAT, GUJARAT,",
    surfaceArea: "",
    thumbnail: "/images/portfolio/HOUSE-1.jpeg",
    images: [
      "/images/portfolio/HOUSE-1.jpeg",
      "/images/portfolio/PLAYGROUND-1.jpeg",
      "/images/portfolio/GARDEN-1.jpeg",
      "/images/portfolio/GATE.jpg",
    ],
    description: "Spacious residential property with a house, playground, garden, and gate, designed for comfortable living and outdoor enjoyment.",
  },
  {
    id: 11,
    name: "MOGUL HOUSE DIAMOND MERCHANT OFFICE",
    category: "Commercial, CORPORATE HOUSE",
    location: "MINI BAZAR, VARACCHA, SURAT, GUJARAT.",
    surfaceArea: "",
    thumbnail: "/images/portfolio/MOGAL-HOUSE-MINI-BAZAR.jpeg",
    images: [
      "/images/portfolio/MOGAL-HOUSE-MINI-BAZAR.jpeg",
      
    ],
    description: "Modern commercial office space designed for a diamond merchant, featuring contemporary architecture and functional interiors.",
  },
  {
    id: 12,
    name: "PRAGATI HOMES PRAGATI HOMES GATE",
    category: "RESIDENTIAL",
    location: "SURAT, GUJARAT",
    surfaceArea: "",
    thumbnail: "/images/portfolio/9-scaled.jpg",
    images: [
      "/images/portfolio/9-scaled.jpg",
    ],
    description: "State-of-the-art commercial spaces with advanced infrastructure and modern design aesthetics.",
  },
  {
    id: 13,
    name: "SAHJANAND VIHA LIVING-DINING ROOM, LIVING-SITTING ROOM, MASTER ROOM, PARENT ROOM",
    category: "RESIDENTIAL",
    location: "MOTA VARACCHA, SURAT, GUJARAT.",
    surfaceArea: "",
    thumbnail: "/images/portfolio/LIVING-DINING-ROOM-scaled.jpg",
    images: [
      "/images/portfolio/LIVING-DINING-ROOM-scaled.jpg",
      "/images/portfolio/LIVING-SITTING-ROOM-scaled.jpg",
      "/images/portfolio/MASTER-ROOM-scaled.jpg",
      "/images/portfolio/PARENT-ROOM.jpg",
    ],
    description: "Spacious residential property featuring a living-dining room, living-sitting room, master bedroom, and parent room, designed for comfortable family living with modern amenities.",
  },
  {
    id: 14,
    name: "BELA GAAM SCHOOL MAIN GATE AND VILLAGE GATE",
    category: "SCHOOL",
    location: "BELA GAAM, SAURASHTRA, GUJARAT",
    surfaceArea: "",
    thumbnail: "/images/portfolio/BELA-GAAM-SCHOOL-MAIN-GATE-1.jpeg",
    images: [
      "/images/portfolio/BELA-GAAM-SCHOOL-MAIN-GATE-1.jpeg",
      
    ],
    description: "School main gate and village gate with traditional design and secure access.",
  },
  {
    id: 15,
    name: "OUR INTERIOR OFFICE IN SDB SURAT DIAMOND BOURSE",
    category: "Commercial",
    location: "KHAJOD, SURAT, GUJARAT.",
    surfaceArea: "",
    thumbnail: "/images/portfolio/SDB-INTERIOR-OFFICE.jpeg",
    images: [
      "/images/portfolio/SDB-INTERIOR-OFFICE.jpeg",
     
    ],
    description: "Modern office interior design located in Surat Diamond Bourse, featuring contemporary aesthetics and functional workspaces.",
  },
  {
    id: 16,
    name: "THE MARINA (RESIDENTIAL SKYSCRAPER)",
    category: "Residential",
    location: "SURAT, GUJARAT",
    surfaceArea: "5,50,000 SQ.FT.",
    thumbnail: "/images/portfolio/abc.jpg",
    images: [
      "/images/portfolio/abc.jpg",
      
    ],
    description: "Luxurious residential skyscraper with panoramic views and sustainable living features.",
  },
  {
    id: 17,
    name: "PROPOSED GUJARAT HOUSING BOARD",
    category: "Commercial",
    location: "AHMEDABAD, GUJARAT",
    surfaceArea: "10,00,000 SQ.FT.",
    thumbnail: "/images/portfolio/Night-Cam-02.jpg",
    images: [
      "/images/portfolio/Night-Cam-02.jpg",
      "/images/portfolio/View_01-1.jpg",
      "/images/portfolio/Arial-View_01.jpg",
      "/images/portfolio/COVER-PAGE.jpg",
    ],
    description: "Proposed commercial development for Gujarat Housing Board, featuring modern architecture and sustainable design principles.",
  },
  {
    id: 18,
    name: "PROPOSED VARACCHA BANK",
    category: "CORPORATE HOUSE",
    location: "SURAT, GUJARAT",
    surfaceArea: "30,000 SQ.FT.",
    thumbnail: "/images/portfolio/02.jpg",
    images: [
      "/images/portfolio/02.jpg",
      
    ],
    description: "Proposed corporate office building for Varaccha Bank, designed with contemporary architecture and functional workspaces.",
  },
  {
    id: 19,
    name: "SILVER LUXURIA",
    category: "RESIDENTIAL",
    location: "AHMEDABAD, GUJARAT",
    surfaceArea: "",
    thumbnail: "/images/portfolio/Cam_013_Night.jpg",
    images: [
      "/images/portfolio/Cam_013_Night.jpg",
     
    ],
    description: "Modern residential towers located along a riverfront, offering scenic views and luxurious amenities.",
  },
  {
    id: 20,
    name: "AYODHYA NAGRI",
    category: "RESIDENTIAL",
    location: "SURAT, GUJARAT",
    surfaceArea: "5,70,000 SQ.FT.",
    thumbnail: "/images/portfolio/Cam-25-Night-001.jpg",
    images: [
      "/images/portfolio/Cam-27-Garden.jpg",
      "/images/portfolio/Cam-06-Gate-Entry-01-600x600.jpg",
      "/images/portfolio/Cam-32.jpg",
      "/images/portfolio/Cam-23-Top.jpg",
    ],
    description: "Large-scale residential development with a mix of housing types, community amenities, and green spaces for a vibrant neighborhood.",
  },
  {
    id: 21,
    name: "SILVER STATUS",
    category: "HIGHRISE RESIDENTIAL PROJECT",
    location: "SURAT, GUJARAT",
    surfaceArea: "2,47,800 SQ.FT.",
    thumbnail: "/images/portfolio/cam-001.jpg",
    images: [
      "/images/portfolio/cam-001.jpg",
    ],
    description: "Contemporary high-rise residential project with modern design, spacious units, and premium amenities for urban living.",
  },
  {
    id: 22,
    name: "JK ENCLAVE",
    category: "RESIDENTIAL LOW RISE BUILDING",
    location: "VAPI, GUJARAT",
    surfaceArea: "1,27,300 SQ.FT.",
    thumbnail: "/images/portfolio/Cam-02-03-02-19.jpg",
    images: [
      "/images/portfolio/Cam-02-03-02-19.jpg",
      
    ],
    description: "Well-designed residential low-rise building with contemporary design, spacious units, and premium amenities for comfortable living.",
  },
  {
    id: 23,
    name: "MAHIM ARCHITECT",
    category: "COMMERCIAL",
    location: "SURAT, GUJARAT",
    surfaceArea: "",
    thumbnail: "/images/portfolio/SHELL-ART.jpg",
    images: [
      "/images/portfolio/SHELL-ART.jpg",
    ],
    description: "Modern commercial office space designed for Mahim Architect, featuring contemporary architecture and functional workspaces.",
  },
  {
    id: 24,
    name: "SILENT ZONE",
    category: "RESIDENTIAL",
    location: "SURAT, GUJARAT",
    surfaceArea: "25,000 SQ.FT.",
    thumbnail: "/images/portfolio/corner_._compressed.jpg",
    images: [
      "/images/portfolio/corner_._compressed.jpg",
    ],
    description: "Tranquil residential community designed for peaceful living, featuring serene landscapes and quiet surroundings.",
  },
  {
    id: 25,
    name: "SHIV VILLA",
    category: "PRIVATE RESIDENCES",
    location: "VAPI, GUJARAT",
    surfaceArea: "38,700 SQ.FT.",
    thumbnail: "/images/portfolio/aadi.jpg",
    images: [
      "/images/portfolio/aadi.jpg",
    ],
    description: "Ultra-luxury residential property with exclusive amenities and premium finishes.",
  },
  {
    id: 26,
    name: "PRAVINBHAI SAHJANAND",
    category: "BUNGALOW",
    location: "SURAT, GUJARAT",
    surfaceArea: "9000 SQ.FT.",
    thumbnail: "/images/portfolio/Sahjanad-Relish-3.jpg",
    images: [
      "/images/portfolio/Sahjanad-Relish-3.jpg",
    ],
    description: "Spacious bungalow with modern design, landscaped gardens, and luxurious amenities for a serene living experience.",
  },
  {
    id: 27,
    name: "METAL ART",
    category: "ART INSTALLATION",
    location: "INDIA",
    surfaceArea: "",
    thumbnail: "/images/portfolio/METAL-ART.jpg",
    images: [
      "/images/portfolio/METAL-ART.jpg",
    ],
    description: "Large-scale metal art installation showcasing intricate craftsmanship and contemporary design, located in a public space for cultural enrichment.",
  },
  {
    id: 28,
    name: "GREEN SANCTUARY",
    category: "URBAN DESIGN",
    location: "AHMEDABAD, GUJARAT",
    surfaceArea: "126 ACRES",
    thumbnail: "/images/portfolio/design2222.jpg",
    images: [
      "/images/portfolio/design2222.jpg",
    ],
    description: "Sustainable urban design project featuring green spaces, pedestrian-friendly pathways, and eco-friendly infrastructure for a vibrant community.",
  },
  {
    id: 29,
    name: "RAJKUMAR UMIYADHAM",
    category: "BUNGALOW",
    location: "SURAT, GUJARAT",
    surfaceArea: "8500 SQ.FT.",
    thumbnail: "/images/portfolio/RAJKUMAR-7.jpg",
    images: [
      "/images/portfolio/RAJKUMAR-34.jpg",
      "/images/portfolio/RAJKUMAR-33.jpg",
      "/images/portfolio/RAJKUMAR-30.jpg",
      "/images/portfolio/RAJKUMAR-29.jpg",
            "/images/portfolio/RAJKUMAR-27.jpg",
      "/images/portfolio/RAJKUMAR-26.jpg",

    ],
    description: "Spacious bungalow with contemporary design, landscaped gardens, and premium amenities for a luxurious living experience.",
  },
  {
    id: 30,
    name: "SCAN TO BIM FOR COMMERCIAL BUILDING",
    category: "REVIT BIM",
    location: "MUMBAI, MAHARASHTRA",
    surfaceArea: "8,000 sq ft",
    thumbnail: "/images/portfolio/MILLENIUM-SQUARE.jpg",
    images: [
      "/images/portfolio/MILLENIUM-SQUARE.jpg",
    ],
    description: "Grand cultural center showcasing traditional architecture and modern exhibition spaces.",
  },
  {
    id: 31,
    name: "SILVER MAXIMA",
    category: "INTERIORS",
    location: "SURAT, GUJARAT",
    surfaceArea: "2500 SQ.FT.",
    thumbnail: "/images/portfolio/Silver-Maxima-4.jpg",
    images: [
      "/images/portfolio/Silver-Maxima-6.jpg",
      "/images/portfolio/Silver-Maxima-19.jpg",
      "/images/portfolio/Silver-Maxima-18.jpg",
      "/images/portfolio/Silver-Maxima-14.jpg",
      "/images/portfolio/Silver-Maxima-4.jpg",
      "/images/portfolio/Silver-Maxima-2.jpg",
      "/images/portfolio/Silver-Maxima-8.jpg",
      "/images/portfolio/Silver-Maxima-9.jpg",
      "/images/portfolio/Silver-Maxima-5.jpg",
      "/images/portfolio/Silver-Maxima-1.jpg",
    ],
    description: "Elegant interior design with premium finishes and contemporary aesthetics.",
  },
  {
    id: 32,
    name: "JK AVENUE",
    category: "RESIDENTIAL LOW RISE BUILDING",
    location: "VAPI, GUJARAT",
    surfaceArea: "2,13,500 SQ.FT.",
    thumbnail: "/images/portfolio/Cam-0222.jpg",
    images: [
      "/images/portfolio/Cam-0222.jpg",
    ],
    description: "Well-designed space with excellent functionality and elegant architectural elements.",
  },
  {
    id: 33,
    name: "SPECIFIC HOMES",
    category: "RESIDENTIAL",
    location: "SURAT, GUJARAT",
    surfaceArea: "",
    thumbnail: "/images/portfolio/corranar_F.jpg",
    images: [
      "/images/portfolio/corranar_F.jpg",
    ],
    description: "Contemporary residential development with modern design, spacious units, and premium amenities for urban living.",
  },
  {
    id: 34,
    name: "COORDINATION FOR SHOPPING CENTER",
    category: "REVIT BIM",
    location: "AHMEDABAD, GUJARAT",
    surfaceArea: "1,50,000 SQ.FT.",
    thumbnail: "/images/portfolio/METRO-MALL.jpg",
    images: [
      "/images/portfolio/METRO-MALL.jpg",
    ],
    description: "Comprehensive coordination for a modern shopping center with integrated BIM modeling and design.",
  },
  {
    id: 35,
    name: "BAMIYAN CULTURAL CENTER",
    category: "MASTER PLANNING",
    location: "AFGHANISTAN",
    surfaceArea: "",
    thumbnail: "/images/portfolio/Bamiyan-Cultural-Center-Afghanistan-2.jpg",
    images: [
      "/images/portfolio/Bamiyan-Cultural-Center-Afghanistan-2.jpg",
      "/images/portfolio/01-RECEPTION-INTERIOR.jpg",
      "/images/portfolio/001-SHEET-1.jpg",
      "/images/portfolio/02-LIBRARY-INTERIOR.jpg",
       "/images/portfolio/002-SHHET-2.jpg",
        "/images/portfolio/03-CLASSROOM-INTERIOR.jpg",
         "/images/portfolio/04-EXHIBITION-SPACE-INTERIOR1.jpg",
    ],
    description: "Cultural center designed to preserve and promote the heritage of Bamiyan, featuring exhibition spaces, a library, and classrooms for educational programs.",
  },
  {
    id: 36,
    name: "DREAM HERITAGE",
    category: "HIGHRISE RESIDENTIAL PROJECT",
    location: "SURAT, GUJARAT",
    surfaceArea: "1,40,000 SQ.FT.",
    thumbnail: "/images/portfolio/Cam_03.jpg",
    images: [
      "/images/portfolio/Cam_03.jpg",
    ],
    description: "Elegant high-rise residential project with modern amenities and premium finishes.",
  },
  {
    id: 37,
    name: "PREFULBHAI GOKULDHAM",
    category: "RESIDENTIAL",
    location: "SURAT, GUJARAT",
    surfaceArea: "12,000 SQ.FT.",
    thumbnail: "/images/portfolio/Corner-View_01.jpg",
    images: [
      "/images/portfolio/Corner-View_01.jpg",
    ],
    description: "Well-designed residential project with premium finishes and modern amenities.",
  },
  {
    id: 38,
    name: "SHREE NIVAS FLATS",
    category: "REVIT BIM",
    location: "SURAT, GUJARAT",
    client: "PREFULBHAI GOKULDHAM",
    surfaceArea: "5,500 SQ.FT.",
    thumbnail: "/images/portfolio/SHREE-NIVAS-FLATS.jpg",
    images: [
      "/images/portfolio/SHREE-NIVAS-FLATS.jpg",
      
    ],
    description: "Modern residential flats designed with BIM technology, featuring contemporary architecture and functional living spaces.",
  },
  {
    id: 39,
    name: "URMILA GARDEN-KASGANJ",
    category: " COMMERCIAL",
    location: "ALIGARH, DELHI",
    surfaceArea: "2,00,000 SQ.FT.",
    thumbnail: "/images/portfolio/231-870x434.jpg",
    images: [
      "/images/portfolio/231-870x434.jpg",
      "/images/portfolio/232-870x434.jpg",
      "/images/portfolio/233-870x434.jpg",
      
    ],
    description: "Large-scale commercial development featuring retail spaces, offices, and landscaped gardens for a vibrant business environment.",
  },
  {
    id: 40,
    name: "MARVEL HOMES",
    category: "RESIDENTIAL",
    location: "SURAT, GUJARAT",
    surfaceArea: "1,50,000 SQ.FT.",
    thumbnail: "/images/portfolio/PU01_night.jpg",
    images: [
      "/images/portfolio/PU01_night.jpg",
    ],
    description: "Luxury residential project with modern amenities and premium finishes.",
  },
  {
    id: 41,
    name: "PUNITBHAI GOKULDHAM",
    category: "RESIDENTIAL",
    location: "SURAT, GUJARAT",
    surfaceArea: "",
    thumbnail: "/images/portfolio/PUNITBHAI-GOKULDHAM.jpg",
    images: [
      "/images/portfolio/PUNITBHAI-GOKULDHAM.jpg",
      
    ],
    description: "Well-designed residential project with premium finishes and modern amenities for comfortable living.",
  },
  {
    id: 42,
    name: "GOLDEN SQUARE",
    category: "STRUCTURAL BIM FOR 23 STORIED BUILDING,Revit Bim",
    location: "AHMEDABAD, GUJARAT",
    surfaceArea: "1,00,000 SQ.FT.",
    thumbnail: "/images/portfolio/GOLDEN-SQUARE.jpg",
    images: [
      "/images/portfolio/GOLDEN-SQUARE.jpg",
    ],
    description: "Contemporary space featuring smart design elements and premium finishes.",
  },
  {
    id: 43,
    name: "GRAPHICS",
    category: "GRAPHICS",
    location: "",
    surfaceArea: "",
    thumbnail: "/images/portfolio/3-2-870x434.jpg",
    images: [
      "/images/portfolio/1-2-870x434.jpg",
      "/images/portfolio/3-2-870x434.jpg",
      "/images/portfolio/4-2-870x434.jpg",
      "/images/portfolio/2-2-870x434.jpg",
    ],
    description: "Collection of graphic designs showcasing architectural concepts, project presentations, and visual storytelling for various real estate developments.",
  },
  {
    id: 44,
    name: "WHITE PALACE",
    category: "RESIDENTIAL",
    location: "SURAT, GUJARAT",
    surfaceArea: "2,70,000 SQ.FT.",
    thumbnail: "/images/portfolio/Cam05.jpg",
    images: [
      "/images/portfolio/Cam05.jpg",
    ],
    description: "Elegant residential development with modern design, spacious units, and premium amenities for urban living.",
  },
  {
    id: 45,
    name: "BHAVESHBHAI ADITYA ",
    category: "PRIVATE RESIDENCES",
    location: "SURAT, GUJARAT",
    surfaceArea: "8,000 SQ.FT.",
    thumbnail: "/images/portfolio/evening.jpg",
    images: [
      "/images/portfolio/evening.jpg",
    ],
    description: "Luxurious residential property with exclusive amenities and premium finishes for a comfortable living experience.",
  },
  {
    id: 46,
    name: "WHITE HOUSE",
    category: "3D MODELLING FOR RESIDENTIAL BUNGALOW, Revit Bim",
    location: "SURAT, GUJARAT",
    surfaceArea: "5,500 SQ.FT.",
    thumbnail: "/images/portfolio/WHITE-HOUSE.jpg",
    images: [
      "/images/portfolio/WHITE-HOUSE.jpg",
    ],
    description: "Modern residential bungalow designed with BIM technology, featuring contemporary architecture and functional living spaces for a luxurious lifestyle.",
  },
  {
    id: 47,
    name: "FURNITURE",
    category: "FURNITURE DESIGN",
    location: "",
    surfaceArea: "",
    thumbnail: "/images/portfolio/d3 - Copy.jpg",
    images: [
      "/images/portfolio/aeb4d7adce88867735443f5c58437502 - Copy.jpg",
      "/images/portfolio/aee9e672cfa18134d14b1ad34a0b8b5b - Copy.jpg",
      "/images/portfolio/ea1ff4229b29cd66996cb375baf04a08.jpg",
      "/images/portfolio/Sri-Stool-Brown-Web-image - Copy.jpg",
      "/images/portfolio/d3 - Copy.jpg",
      "/images/portfolio/ac - Copy.jpg",
      "/images/portfolio/ab - Copy.jpg",
      "/images/portfolio/9f7ec2258a29755aff80f7f3dd287a5f.jpg",
      "/images/portfolio/01.jpg",
    ],
    description: "Collection of furniture designs showcasing contemporary aesthetics, functional elements, and premium finishes for residential and commercial spaces.",
  },
  {
    id: 48,
    name: "ALOK RESIDENCY",
    category: "RESIDENTIAL",
    location: "SURAT, GUJARAT",
    surfaceArea: "1,20,000 SQ.FT.",
    thumbnail: "/images/portfolio/ALOK3.jpg",
    images: [
      "/images/portfolio/ALOK3.jpg",
    ],
    description: "Modern residential development with contemporary design, spacious units, and premium amenities for comfortable urban living.",
  },
  {
    id: 49,
    name: "BIPINBHAI GOKULDHAM",
    category: "RESIDENTIAL",
    location: "SURAT, GUJARAT",
    surfaceArea: "10,000 SQ.FT.",
    thumbnail: "/images/portfolio/Gokuldham-8.jpg",
    images: [
      "/images/portfolio/Gokuldham-1-1.jpg",
      "/images/portfolio/Gokuldham-2-1.jpg",
      "/images/portfolio/Gokuldham-3-1.jpg",
      "/images/portfolio/Gokuldham-4-1.jpg",
      "/images/portfolio/Gokuldham-5-1.jpg",
      "/images/portfolio/Gokuldham-6-2.jpg",
      "/images/portfolio/Gokuldham-7-1.jpg",
      "/images/portfolio/Gokuldham-8-1.jpg",
      "/images/portfolio/Gokuldham-9-2.jpg",
      "/images/portfolio/Gokuldham-10-1.jpg",
      "/images/portfolio/Gokuldham-11-1.jpg",
      "/images/portfolio/Gokuldham-12-1.jpg",
      "/images/portfolio/Gokuldham-13-1.jpg",
      "/images/portfolio/Gokuldham-14-1.jpg",
      "/images/portfolio/Gokuldham-15-1.jpg",
      "/images/portfolio/Gokuldham-16-1.jpg",
      "/images/portfolio/Gokuldham-17-1.jpg",
      "/images/portfolio/Gokuldham-18-1.jpg",
      "/images/portfolio/Gokuldham-19-1.jpg",
      "/images/portfolio/Gokuldham-20-1.jpg",
      "/images/portfolio/Gokuldham-21-1.jpg",
      "/images/portfolio/Gokuldham-22-1.jpg",
      "/images/portfolio/Gokuldham-23-1.jpg",
      "/images/portfolio/Gokuldham-24-1.jpg",
    ],
    description: "Spacious residential property with modern design, landscaped gardens, and luxurious amenities for a serene living experience.",
  },
  {
    id: 50,
    name: "SAI ASTHA RESIDENCY",
    category: "ARCHITECTURAL BIM MODELLING FOR HIGHRISE BUILDING,Revit Bim",
    location: "SURAT, GUJARAT",
    surfaceArea: "10,000 SQ.FT.",
    thumbnail: "/images/portfolio/SAI-ASTHA-RESIDENCY.jpg",
    images: [
      "/images/portfolio/SAI-ASTHA-RESIDENCY.jpg",
    ],
    description: "Modern high-rise residential building designed with BIM technology, featuring contemporary architecture and functional living spaces for a luxurious lifestyle.",
  },
  {
    id: 51,
    name: "LIGHTING DESIGN PROJECT",
    category: "LIGHTING",
    location: "SURAT, GUJARAT",
    surfaceArea: "",
    thumbnail: "/images/portfolio/light_product.jpg",
    images: [
      "/images/portfolio/1-1-870x434.jpg",
      "/images/portfolio/2-1-870x434.jpg",
      "/images/portfolio/3-1-870x434.jpg",
      "/images/portfolio/4-1-870x434.jpg",
      "/images/portfolio/5-1-870x434.jpg",
      "/images/portfolio/6-1-870x434.jpg",
      "/images/portfolio/7-1-870x434.jpg",

    ],
    description: "Innovative space combining functionality with elegant architectural design.",
  },
  {
    id: 52,
    name: "AAVKAR RESIDENCY",
    category: "Residential",
    location: "SURAT, GUJARAT",
    surfaceArea: "1,50,000 SQ.FT.",
    thumbnail: "/images/portfolio/Cam_17.jpg",
    images: [
      "/images/portfolio/Cam_17.jpg",
    ],
    description: "Premium development offering excellent design quality and modern amenities.",
  },
]

export default function PortfolioPage() {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [activeCategory, setActiveCategory] = useState<string>("All")
  const [isAutoSliding, setIsAutoSliding] = useState(true)

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = new Set<string>()
    DEMO_PROPERTIES.forEach((prop) => {
      prop.category.split(",").forEach((cat) => {
        cats.add(cat.trim())
      })
    })
    return ["All", ...Array.from(cats).sort()]
  }, [])

  // Filter properties by category
  const filteredProperties = useMemo(() => {
    if (activeCategory === "All") return DEMO_PROPERTIES
    return DEMO_PROPERTIES.filter((prop) =>
      prop.category.split(",").some((cat) => cat.trim() === activeCategory)
    )
  }, [activeCategory])

  // Auto-slide images
  useEffect(() => {
    if (!selectedProperty || !isAutoSliding || selectedProperty.images.length <= 1) {
      return
    }

    const timer = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === selectedProperty.images.length - 1 ? 0 : prev + 1
      )
    }, 4000) // 4 seconds per slide

    return () => clearInterval(timer)
  }, [selectedProperty, isAutoSliding])

  const handlePrevImage = () => {
    setIsAutoSliding(false)
    if (selectedProperty) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProperty.images.length - 1 : prev - 1
      )
    }
    // Resume auto-slide after 10 seconds
    setTimeout(() => setIsAutoSliding(true), 10000)
  }

  const handleNextImage = () => {
    setIsAutoSliding(false)
    if (selectedProperty) {
      setCurrentImageIndex((prev) =>
        prev === selectedProperty.images.length - 1 ? 0 : prev + 1
      )
    }
    // Resume auto-slide after 10 seconds
    setTimeout(() => setIsAutoSliding(true), 10000)
  }

  const handleThumbnailClick = (index: number) => {
    setIsAutoSliding(false)
    setCurrentImageIndex(index)
    // Resume auto-slide after 10 seconds
    setTimeout(() => setIsAutoSliding(true), 10000)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <Header />
      
      <section className="pt-40 pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-20">
          <div className="space-y-4 mb-10">
           
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 tracking-tighter leading-tight">
              Architectural<br className="hidden sm:block" /> Excellence
            </h1>
            <div className="w-32 h-1.5 bg-gradient-to-r from-black via-gray-800 to-transparent mt-6"></div>
          </div>
          <p className="text-lg text-gray-600 max-w-4xl leading-relaxed">
            Award-winning design and architecture across residential, commercial, and institutional spaces. Each project represents our commitment to innovation, sustainability, and timeless elegance.
          </p>
        </div>

        {/* Category Filter - Premium */}
        <div className="mb-16">
          <div className="flex items-center gap-2 sm:gap-3 mb-6">
            <Filter size={18} className="text-gray-600 flex-shrink-0" />
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray-700 whitespace-nowrap">Filter by Category</span>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3 sm:px-6 py-2 sm:py-2.5 rounded-full font-medium text-xs sm:text-sm transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-black text-white shadow-lg scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-4">
            Showing {filteredProperties.length} of {DEMO_PROPERTIES.length} projects
          </p>
        </div>

        {/* Gallery Grid - Modern Masonry */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-max">
          {filteredProperties.map((property) => (
            <div
              key={property.id}
              onClick={() => {
                setSelectedProperty(property)
                setCurrentImageIndex(0)
              }}
              className="group cursor-pointer h-full"
            >
              <div className="relative h-64 sm:h-72 w-full overflow-hidden rounded-xl bg-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <Image
                  src={property.thumbnail}
                  alt={property.name}
                  fill
                  priority={false}
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
              <div className="pt-5">
                <h3 className="font-semibold text-gray-900 text-base group-hover:text-black transition-colors line-clamp-2">{property.name}</h3>
                <p className="text-sm text-gray-500 mt-1 group-hover:text-gray-700 transition-colors line-clamp-1">{property.category}</p>
                <p className="text-xs text-gray-400 mt-2">{property.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal Detail View - Modern Fullscreen */}
      {selectedProperty && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[95vh] overflow-hidden shadow-2xl flex flex-col animate-in zoom-in-95 duration-300">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProperty(null)}
              className="absolute top-6 right-6 p-2.5 bg-white/90 hover:bg-white rounded-full hover:shadow-lg transition-all duration-200 z-10 group"
            >
              <X size={24} className="text-gray-900 group-hover:rotate-90 transition-transform duration-300" />
            </button>

            <div className="flex flex-col lg:flex-row gap-10 p-10 overflow-y-auto flex-1">
              {/* Main Image Section */}
              <div className="flex-1 min-w-0">
                <div className="sticky top-8 space-y-6">
                  {/* Main Image with Badge */}
                  <div>
                    <div className="absolute top-12 left-10 z-20">
                      <span className="text-xs font-bold uppercase tracking-widest text-white bg-black/70 backdrop-blur-sm px-4 py-2 rounded-full">
                        {selectedProperty.category.split(",")[0].trim()}
                      </span>
                    </div>
                    <div className="relative h-96 sm:h-[520px] w-full bg-gray-200 rounded-2xl overflow-hidden shadow-2xl">
                      <Image
                        src={selectedProperty.images[currentImageIndex]}
                        alt={`${selectedProperty.name} - Image ${currentImageIndex + 1}`}
                        fill
                        priority
                        className="object-cover transition-all duration-500"
                      />
                    </div>
                  </div>

                  {/* Image Navigation */}
                  {selectedProperty.images.length > 1 && (
                    <div className="space-y-4">
                      {/* Thumbnail Grid */}
                      <div className="flex gap-3 overflow-x-auto pb-2">
                        {selectedProperty.images.map((image, index) => (
                          <button
                            key={index}
                            onClick={() => handleThumbnailClick(index)}
                            className={`flex-shrink-0 h-24 w-24 rounded-xl overflow-hidden border-2 transition-all duration-300 hover:shadow-lg ${
                              index === currentImageIndex ? "border-black shadow-lg scale-110" : "border-gray-300 hover:border-gray-400 opacity-60 hover:opacity-100"
                            }`}
                          >
                            <Image
                              src={image}
                              alt={`Thumbnail ${index + 1}`}
                              width={96}
                              height={96}
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                      </div>

                      {/* Navigation Buttons & Auto-Slide Indicator */}
                      <div className="flex justify-between items-center">
                        <button
                          onClick={handlePrevImage}
                          className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-all duration-200 hover:shadow-md hover:scale-110"
                        >
                          <ChevronLeft size={22} className="text-gray-900" />
                        </button>
                        
                        <div className="text-center flex flex-col items-center gap-2">
                          <span className="text-xs font-semibold text-gray-600">
                            {currentImageIndex + 1} / {selectedProperty.images.length}
                          </span>
                          {isAutoSliding && selectedProperty.images.length > 1 && (
                            <div className="flex gap-1">
                              {selectedProperty.images.map((_, idx) => (
                                <div
                                  key={idx}
                                  className={`h-1.5 rounded-full transition-all duration-500 ${
                                    idx === currentImageIndex ? "w-6 bg-black" : "w-1.5 bg-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                          )}
                        </div>

                        <button
                          onClick={handleNextImage}
                          className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-all duration-200 hover:shadow-md hover:scale-110"
                        >
                          <ChevronRight size={22} className="text-gray-900" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Project Details */}
              <div className="flex-1 min-w-0 flex flex-col justify-between">
                {/* Content */}
                <div>
                  {/* Title and Category */}
                  <div className="mb-12">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h2 className="text-5xl font-bold text-gray-900 leading-tight">{selectedProperty.name}</h2>
                    </div>
                    <div className="w-16 h-1.5 bg-gradient-to-r from-black to-transparent"></div>
                  </div>
                  
                  {/* Project Info Grid */}
                  <div className="mb-12">
                    <h3 className="text-xs font-bold text-gray-700 uppercase tracking-widest mb-6">Project Details</h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                      <div>
                        <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-2">Location</p>
                        <p className="text-lg text-gray-900 font-semibold">{selectedProperty.location}</p>
                      </div>
                      
                      {selectedProperty.client && (
                        <div>
                          <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-2">Client</p>
                          <p className="text-lg text-gray-900 font-semibold">{selectedProperty.client}</p>
                        </div>
                      )}
                      
                      {selectedProperty.surfaceArea && (
                        <div>
                          <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-2">Surface Area</p>
                          <p className="text-lg text-gray-900 font-semibold">{selectedProperty.surfaceArea}</p>
                        </div>
                      )}

                      <div>
                        <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-2">Category</p>
                        <p className="text-lg text-gray-900 font-semibold">{selectedProperty.category}</p>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-12 pb-8 border-b border-gray-200">
                    <h3 className="text-xs font-bold text-gray-700 uppercase tracking-widest mb-4">About This Project</h3>
                    <p className="text-gray-700 leading-relaxed text-base">{selectedProperty.description}</p>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setSelectedProperty(null)}
                  className="w-full bg-black text-white py-4 rounded-xl hover:shadow-xl transition-all duration-300 font-semibold hover:bg-gray-900 text-base"
                >
                  Close Project
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}