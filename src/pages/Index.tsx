import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyUsSection from "@/components/WhyUsSection";
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
      {/* White page background — sep2 style */}
      <div className="min-h-screen bg-white relative">
        {/* Dark frame with rounded corners */}
        <div className="mx-3 md:mx-5 my-3 md:my-5 rounded-[1.25rem] bg-background overflow-hidden relative">
          {/* Animated SVG lines — contained within the frame */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 1440 5000"
              preserveAspectRatio="none"
              fill="none"
            >
              <defs>
                <path id="site-path-1" d="M 860 -40 C 930 300, 980 600, 1020 900 S 1110 1500, 1220 1900 C 1310 2200, 1200 2600, 1100 3000 S 1000 3500, 1100 4000 C 1200 4400, 1350 4600, 1440 5000" />
                <path id="site-path-2" d="M 760 -80 C 840 250, 900 550, 940 850 S 1020 1400, 1140 1800 C 1240 2100, 1150 2500, 1050 2900 S 950 3400, 1050 3900 C 1150 4300, 1300 4500, 1440 4900" />
                <path id="site-path-3" d="M 650 -120 C 740 200, 800 500, 840 800 S 920 1300, 1040 1700 C 1140 2000, 1080 2400, 980 2800 S 880 3300, 980 3800 C 1080 4200, 1250 4400, 1440 4800" />
                <path id="site-path-4" d="M 980 -30 C 1060 280, 1120 580, 1160 880 S 1230 1400, 1320 1800 C 1390 2100, 1280 2500, 1180 2900 S 1100 3400, 1200 3900 C 1300 4300, 1400 4500, 1480 5000" />
              </defs>

              {/* Base gray tracks */}
              <use href="#site-path-1" className="hero-track" />
              <use href="#site-path-2" className="hero-track" />
              <use href="#site-path-3" className="hero-track" />
              <use href="#site-path-4" className="hero-track hero-track-light" />

              {/* Moving orange segments */}
              <use href="#site-path-2" className="hero-accent hero-accent-orange hero-dash-1" />
              <use href="#site-path-4" className="hero-accent hero-accent-orange hero-dash-2" />

              {/* Moving blue segments */}
              <use href="#site-path-1" className="hero-accent hero-accent-blue hero-dash-3" />
              <use href="#site-path-3" className="hero-accent hero-accent-blue hero-dash-4" />
            </svg>
          </div>

          <Header />
          <main className="relative z-10">
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <WhyUsSection />
            <ContactCta />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Index;
