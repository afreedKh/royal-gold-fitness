"use client"

import { Star, Award, Sparkles, Users, Dumbbell, ThumbsUp } from 'lucide-react'

const reasons = [
  {
    icon: Star,
    title: "5 Star Rated Gym",
    description: "Consistently rated 5 stars by 263+ happy members",
    stat: "5.0",
  },
  {
    icon: Award,
    title: "Certified Trainers",
    description: "Professional and certified fitness experts",
    stat: "10+",
  },
  {
    icon: Sparkles,
    title: "Clean & Spacious",
    description: "Hygienic, well-ventilated, and spacious facility",
    stat: "3000 sqft",
  },
  {
    icon: Users,
    title: "Friendly Atmosphere",
    description: "Supportive and motivating fitness community",
    stat: "500+",
  },
  {
    icon: Dumbbell,
    title: "Modern Equipment",
    description: "State-of-the-art machines and free weights",
    stat: "100+",
  },
  {
    icon: ThumbsUp,
    title: "Proven Results",
    description: "Track record of successful transformations",
    stat: "95%",
  },
]

export function WhyChooseSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 mb-6">
            <ThumbsUp className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary">Why Choose Us</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 font-[family-name:var(--font-oswald)] tracking-tight">
            <span className="text-foreground">WHY </span>
            <span className="gold-text">ROYAL GOLD</span>
            <span className="text-foreground">?</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Experience the difference at Madikeri&apos;s most trusted fitness destination
          </p>
        </div>
        
        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative glass-card rounded-2xl p-6 hover:border-primary/50 transition-all duration-500"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <reason.icon className="h-7 w-7 text-primary" />
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-foreground font-[family-name:var(--font-oswald)]">
                      {reason.title}
                    </h3>
                    <span className="text-xl font-bold gold-text font-[family-name:var(--font-oswald)]">
                      {reason.stat}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {reason.description}
                  </p>
                </div>
              </div>
              
              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-primary/0 group-hover:border-primary/30 transition-colors pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
