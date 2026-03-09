"use client"

import { Award, Users, Sparkles, Heart, Target, Trophy } from 'lucide-react'

const features = [
  {
    icon: Award,
    title: "Certified Trainers",
    description: "Professional trainers with years of experience to guide your fitness journey"
  },
  {
    icon: Sparkles,
    title: "Clean Environment",
    description: "Hygienic and well-maintained facility for a safe workout experience"
  },
  {
    icon: Users,
    title: "Friendly Community",
    description: "A motivating and supportive fitness community to keep you inspired"
  },
  {
    icon: Target,
    title: "Modern Equipment",
    description: "State-of-the-art machines and equipment for effective training"
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 mb-6">
              <Trophy className="h-4 w-4 text-primary" />
              <span className="text-sm text-primary">About Us</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-[family-name:var(--font-oswald)] tracking-tight">
              <span className="text-foreground">ONE OF THE </span>
              <span className="gold-text">BEST GYMS</span>
              <span className="text-foreground"> IN MADIKERI</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 text-pretty">
              Royal Gold Fitness is more than just a gym – it&apos;s a transformation center. Located in the heart of Madikeri, Karnataka, we provide a premium fitness experience with professional trainers, modern equipment, and a motivating atmosphere that helps you achieve your fitness goals.
            </p>
            
            <p className="text-muted-foreground mb-8 text-pretty">
              Whether you&apos;re a beginner starting your fitness journey or an experienced athlete looking for the next challenge, our certified trainers are here to guide you every step of the way. Join our community of 500+ members who have transformed their lives at Royal Gold Fitness.
            </p>
            
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-background bg-secondary flex items-center justify-center"
                  >
                    <Heart className="h-4 w-4 text-primary" />
                  </div>
                ))}
              </div>
              <div>
                <div className="font-semibold text-foreground">263+ Reviews</div>
                <div className="text-sm text-muted-foreground">5.0 Star Rating</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Feature Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground font-[family-name:var(--font-oswald)]">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
