"use client"

import { Dumbbell, Zap, Activity, Target, Weight, User } from 'lucide-react'

const facilities = [
  {
    icon: Weight,
    title: "Strength Training",
    description: "Complete range of free weights, machines, and power racks for building muscle and strength",
    highlight: "50+ Equipment"
  },
  {
    icon: Activity,
    title: "Cardio Machines",
    description: "State-of-the-art treadmills, ellipticals, and stationary bikes for cardiovascular fitness",
    highlight: "20+ Machines"
  },
  {
    icon: Zap,
    title: "Cross Fitness Area",
    description: "Dedicated space for high-intensity functional training and CrossFit workouts",
    highlight: "Open Area"
  },
  {
    icon: Target,
    title: "Functional Training",
    description: "TRX, battle ropes, medicine balls, and more for dynamic full-body workouts",
    highlight: "Full Setup"
  },
  {
    icon: Dumbbell,
    title: "Dumbbells & Free Weights",
    description: "Comprehensive dumbbell sets from 2.5kg to 50kg for all fitness levels",
    highlight: "2.5-50kg"
  },
  {
    icon: User,
    title: "Personal Training",
    description: "One-on-one sessions with certified trainers for personalized guidance and faster results",
    highlight: "Certified Coaches"
  },
]

export function FacilitiesSection() {
  return (
    <section id="facilities" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 mb-6">
            <Dumbbell className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary">Our Facilities</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 font-[family-name:var(--font-oswald)] tracking-tight">
            <span className="text-foreground">WORLD-CLASS </span>
            <span className="gold-text">EQUIPMENT</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Experience premium fitness with our state-of-the-art facilities designed for all your training needs
          </p>
        </div>
        
        {/* Facilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-8 hover:border-primary/50 transition-all duration-500 group hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <facility.icon className="h-8 w-8 text-primary" />
                </div>
                {/* Highlight Badge */}
                <div className="absolute -top-2 -right-2 px-2 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                  {facility.highlight}
                </div>
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold mb-3 text-foreground font-[family-name:var(--font-oswald)]">
                {facility.title}
              </h3>
              <p className="text-muted-foreground">
                {facility.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
