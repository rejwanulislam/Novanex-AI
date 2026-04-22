import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import TechStackSection from "@/components/sections/TechStackSection";
import ProcessSection from "@/components/sections/ProcessSection";
import SecuritySection from "@/components/sections/SecuritySection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import AboutSection from "@/components/sections/AboutSection";
import PricingSection from "@/components/sections/PricingSection";
import CTABanner from "@/components/sections/CTABanner";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <ComparisonSection />
        <ProcessSection />
        <ProjectsSection />
        <TechStackSection />
        <SecuritySection />
        <TestimonialsSection />
        <AboutSection />
        <PricingSection />
        <CTABanner />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
