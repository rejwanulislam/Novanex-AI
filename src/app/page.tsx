import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import PricingSection from "@/components/sections/PricingSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TechStackSection from "@/components/sections/TechStackSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative z-[1]">
        <HeroSection />
        <ServicesSection />
        <TechStackSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
