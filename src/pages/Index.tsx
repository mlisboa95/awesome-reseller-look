import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";

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
      <div className="min-h-screen bg-white relative pt-3 md:pt-5">
        {/* Dark hero frame — sep2 style with white border all around */}
        <div className="mx-3 md:mx-5 rounded-[1.25rem] bg-background overflow-hidden relative">
          <Header />

          {/* Animated SVG lines — contained within the hero frame */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 1440 900"
              preserveAspectRatio="none"
              fill="none"
            >
              <defs>
                <path id="hero-path-1" d="M 860 -40 C 930 110, 980 220, 1020 330 S 1110 560, 1220 640 C 1310 700, 1390 700, 1480 700" />
                <path id="hero-path-2" d="M 760 -80 C 840 90, 900 220, 940 360 S 1020 600, 1140 700 C 1240 780, 1360 780, 1480 780" />
                <path id="hero-path-3" d="M 650 -120 C 740 80, 800 220, 840 380 S 920 650, 1040 780 C 1140 890, 1280 910, 1480 910" />
                <path id="hero-path-4" d="M 980 -30 C 1060 120, 1120 240, 1160 340 S 1230 500, 1320 560 C 1390 610, 1450 610, 1520 610" />
              </defs>

              <use href="#hero-path-1" className="hero-track" />
              <use href="#hero-path-2" className="hero-track" />
              <use href="#hero-path-3" className="hero-track" />
              <use href="#hero-path-4" className="hero-track hero-track-light" />

              <use href="#hero-path-2" className="hero-accent hero-accent-orange hero-dash-1" />
              <use href="#hero-path-4" className="hero-accent hero-accent-orange hero-dash-2" />

              <use href="#hero-path-1" className="hero-accent hero-accent-blue hero-dash-3" />
              <use href="#hero-path-3" className="hero-accent hero-accent-blue hero-dash-4" />
            </svg>
          </div>

          <HeroSection />
        </div>

        {/* White sections below hero */}
        <main>
          <AboutSection />
          <ServicesSection />
          
          <ContactCta />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
