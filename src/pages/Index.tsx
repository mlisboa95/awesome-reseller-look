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
              <path id="site-path-1" d="M 900 0 C 850 200, 750 400, 800 600 C 850 800, 1000 900, 1050 1100 C 1100 1300, 950 1500, 900 1700 C 850 1900, 950 2100, 1050 2300 C 1150 2500, 1200 2700, 1100 2900 C 1000 3100, 850 3300, 900 3500 C 950 3700, 1100 3900, 1200 4100 C 1300 4300, 1400 4500, 1440 4700" />
                <path id="site-path-2" d="M 800 0 C 750 180, 650 380, 700 580 C 750 780, 900 880, 950 1080 C 1000 1280, 850 1480, 800 1680 C 750 1880, 850 2080, 950 2280 C 1050 2480, 1100 2680, 1000 2880 C 900 3080, 750 3280, 800 3480 C 850 3680, 1000 3880, 1100 4080 C 1200 4280, 1300 4480, 1440 4600" />
                <path id="site-path-3" d="M 700 0 C 650 160, 550 360, 600 560 C 650 760, 800 860, 850 1060 C 900 1260, 750 1460, 700 1660 C 650 1860, 750 2060, 850 2260 C 950 2460, 1000 2660, 900 2860 C 800 3060, 650 3260, 700 3460 C 750 3660, 900 3860, 1000 4060 C 1100 4260, 1200 4460, 1440 4500" />
                <path id="site-path-4" d="M 1000 0 C 950 220, 850 420, 900 620 C 950 820, 1100 920, 1150 1120 C 1200 1320, 1050 1520, 1000 1720 C 950 1920, 1050 2120, 1150 2320 C 1250 2520, 1300 2720, 1200 2920 C 1100 3120, 950 3320, 1000 3520 C 1050 3720, 1200 3920, 1300 4120 C 1400 4320, 1440 4520, 1440 4800" />
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
