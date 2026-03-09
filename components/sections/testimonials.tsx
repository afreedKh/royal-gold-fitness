"use client"

import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Member since 2022",
    content: "One of the best gyms in town with excellent cleanliness and quality coaching. The trainers are very professional and the equipment is top-notch. Highly recommend!",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Member since 2023",
    content: "Great environment and motivating trainers. I've achieved my fitness goals faster than I expected. The atmosphere is very positive and everyone is supportive.",
    rating: 5,
  },
  {
    name: "Arun Hegde",
    role: "Member since 2021",
    content: "Amazing facility with top equipment for all muscle groups. The gym is spacious, well-ventilated, and the staff is always helpful. Best gym in Madikeri!",
    rating: 5,
  },
  {
    name: "Meera Patel",
    role: "Member since 2023",
    content: "I was looking for a premium gym experience and Royal Gold delivered beyond expectations. Clean, modern, and the personal training sessions are exceptional.",
    rating: 5,
  },
  {
    name: "Kiran Rao",
    role: "Member since 2022",
    content: "The best investment I made for my health. The trainers create personalized workout plans and the results speak for themselves. 5 stars all the way!",
    rating: 5,
  },
  {
    name: "Deepa Nair",
    role: "Member since 2024",
    content: "As a beginner, I was nervous about joining a gym. But the friendly staff and supportive community made me feel welcome from day one. Love this place!",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 mb-6">
            <Quote className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary">Testimonials</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 font-[family-name:var(--font-oswald)] tracking-tight">
            <span className="text-foreground">WHAT OUR </span>
            <span className="gold-text">MEMBERS SAY</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Join 263+ happy members who have transformed their lives at Royal Gold Fitness
          </p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 group"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="h-8 w-8 text-primary/30" />
              </div>
              
              {/* Content */}
              <p className="text-foreground/90 mb-6 leading-relaxed">
                &quot;{testimonial.content}&quot;
              </p>
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-primary fill-primary" />
                ))}
              </div>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
