"use client"

import { Camera, Play } from 'lucide-react'
import Image from 'next/image'

const galleryImages = [
  { src: "/images/gym-1.jpg", alt: "Modern workout area", span: "col-span-2 row-span-2" },
  { src: "/images/gym-2.jpg", alt: "Premium equipment", span: "col-span-1 row-span-1" },
  { src: "/images/gym-3.jpg", alt: "Cardio section", span: "col-span-1 row-span-1" },
  { src: "/images/gym-4.jpg", alt: "Weight training area", span: "col-span-1 row-span-2" },
  { src: "/images/gym-5.jpg", alt: "Cross fitness zone", span: "col-span-1 row-span-1" },
  { src: "/images/gym-6.jpg", alt: "Personal training session", span: "col-span-1 row-span-1" },
]

export function GallerySection() {
  return (
    <section id="gallery" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 mb-6">
            <Camera className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary">Gallery</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 font-[family-name:var(--font-oswald)] tracking-tight">
            <span className="text-foreground">TAKE A </span>
            <span className="gold-text">VIRTUAL TOUR</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Explore our premium facilities and see why Royal Gold Fitness is the best gym in Madikeri
          </p>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${image.span}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-foreground font-medium">{image.alt}</p>
                </div>
              </div>
              {/* Play Button for first image */}
              {index === 0 && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="h-8 w-8 text-primary-foreground ml-1" />
                  </div>
                </div>
              )}
              {/* Gold Border on Hover */}
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-2xl transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
