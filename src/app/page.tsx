import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/how-it-works"
import WhyChooseUs from "@/components/home/why-choose-us"
import Testimonials from "@/components/home/testimonials"
import ContactForm from "@/components/home/contact"
import Chatbot from "@/components/chatbot"
import PricingPlans from "@/components/home/pricing-plans"
import FaqSection from "@/components/home/faq-section"
import Featured from "@/components/home/featured"
import BlogPreview from "@/components/home/blog-preview"
import CaseStudies from "@/components/home/case-studies"
import Stats from "@/components/home/stats"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Stats />
      <HowItWorks />
      <WhyChooseUs />
      <CaseStudies />
      <PricingPlans />
      <Testimonials />
      <FaqSection />
      <Featured />
      <BlogPreview />
      <ContactForm />
      <Chatbot />
    </main>
  )
}
