"use client"

import { Button } from '@/components/ui/button'
import { HeroScene } from '@/components/three/scene'
import { ChevronDown, Phone, ArrowRight, Star } from 'lucide-react'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <HeroScene />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background z-10" />
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-pulse-glow">
            <Star className="h-4 w-4 text-primary fill-primary" />
            <span className="text-sm font-medium text-foreground">
              5.0 Rated • 263+ Happy Members
            </span>
            <Star className="h-4 w-4 text-primary fill-primary" />
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 font-[family-name:var(--font-oswald)] tracking-tight text-balance">
            <span className="block text-foreground">TRANSFORM</span>
            <span className="block gold-text">YOUR BODY</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Premium Gym in Madikeri with Professional Trainers, Modern Equipment & A Motivating Fitness Community
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 group"
              asChild
            >
              <Link href="#pricing">
                Join Now
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 text-foreground hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6"
              asChild
            >
              <a href="tel:+919513591395">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold gold-text font-[family-name:var(--font-oswald)]">5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold gold-text font-[family-name:var(--font-oswald)]">500+</div>
              <div className="text-sm text-muted-foreground">Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold gold-text font-[family-name:var(--font-oswald)]">10+</div>
              <div className="text-sm text-muted-foreground">Expert Trainers</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <Link href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <span className="text-sm">Scroll Down</span>
          <ChevronDown className="h-6 w-6" />
        </Link>
      </div>
    </section>
  )
}
