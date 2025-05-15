import Contact from "@/components/home/Contact";
import CTA from "@/components/home/CTA";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import Testimonial from "@/components/home/Testimonial";

export default function page() {
  return (
    <>
      <Hero />
      <CTA />
      <Features />
      <Testimonial />
      <Contact />
    </>
  )
}
