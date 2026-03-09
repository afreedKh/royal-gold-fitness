"use client"

import { Button } from '@/components/ui/button'
import { Check, Crown, Zap, Star } from 'lucide-react'
import Link from 'next/link'

const plans = [
  {
    name: "Basic Plan",
    price: "₹999",
    period: "/month",
    description: "Perfect for beginners starting their fitness journey",
    features: [
      "Full gym access",
      "Basic equipment usage",
      "Locker facility",
      "Fitness assessment",
      "Group workout sessions",
    ],
    icon: Zap,
    popular: false,
  },
  {
    name: "Standard Plan",
    price: "₹1,499",
    period: "/month",
    description: "Our most popular plan for dedicated fitness enthusiasts",
    features: [
      "Everything in Basic",
      "All equipment access",
      "Diet consultation",
      "Progress tracking",
      "Access to all group classes",
      "Free parking",
    ],
    icon: Crown,
    popular: true,
  },
  {
    name: "Personal Training",
    price: "Custom",
    period: " Price",
    description: "One-on-one training with certified professionals",
    features: [
      "Everything in Standard",
      "Personal trainer (1-on-1)",
      "Customized workout plan",
      "Nutrition planning",
      "Weekly progress reports",
      "Priority booking",
    ],
    icon: Star,
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 mb-6">
            <Crown className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary">Membership Plans</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 font-[family-name:var(--font-oswald)] tracking-tight">
            <span className="text-foreground">CHOOSE YOUR </span>
            <span className="gold-text">PLAN</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Flexible membership options designed to fit your fitness goals and budget
          </p>
        </div>
        
        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative glass-card rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 ${
                plan.popular ? 'border-primary/50 scale-105 md:scale-110' : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <plan.icon className="h-7 w-7 text-primary" />
              </div>
              
              {/* Plan Name */}
              <h3 className="text-xl font-bold mb-2 text-foreground font-[family-name:var(--font-oswald)]">
                {plan.name}
              </h3>
              
              {/* Price */}
              <div className="mb-4">
                <span className="text-4xl font-bold gold-text font-[family-name:var(--font-oswald)]">
                  {plan.price}
                </span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>
              
              {/* Description */}
              <p className="text-sm text-muted-foreground mb-6">
                {plan.description}
              </p>
              
              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-foreground">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              {/* CTA Button */}
              <Button
                className={`w-full ${
                  plan.popular
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                    : 'bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground'
                }`}
                asChild
              >
                <Link href="#contact">Get Started</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
