import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/sections/hero'
import { AboutSection } from '@/components/sections/about'
import { FacilitiesSection } from '@/components/sections/facilities'
import { WhyChooseSection } from '@/components/sections/why-choose'
import { GallerySection } from '@/components/sections/gallery'
import { PricingSection } from '@/components/sections/pricing'
import { TestimonialsSection } from '@/components/sections/testimonials'
import { ContactSection } from '@/components/sections/contact'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FacilitiesSection />
      <WhyChooseSection />
      <GallerySection />
      <PricingSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
