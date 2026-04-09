import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyUsSection from "@/components/WhyUsSection";
import PartnersCarousel from "@/components/PartnersCarousel";
import ContactCta from "@/components/ContactCta";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          const headerOffset = 120;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }, 100);
    }
  }, [location.hash]);

  return (
    <>
      <LoadingScreen />
      <div className="min-h-screen bg-background relative">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <WhyUsSection />
          <PartnersCarousel />
          <ContactCta />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
