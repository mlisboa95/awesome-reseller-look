import { useEffect, useMemo, useState, useCallback } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PartnersCarousel from "@/components/PartnersCarousel";
import GeoDivider from "@/components/GeoDivider";
import ContactCta from "@/components/ContactCta";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import WhatsAppButton from "@/components/WhatsAppButton";

// Floating particles component for subtle movement
const FloatingParticles = ({ count = 20 }: { count?: number }) => {
  const particles = useMemo(() => 
    [...Array(count)].map((_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 25 + 20,
      delay: Math.random() * 10,
      opacity: Math.random() * 0.15 + 0.05,
    })), [count]
  );

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-primary"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            opacity: particle.opacity,
            animation: `float-particle-main ${particle.duration}s ease-in-out ${particle.delay}s infinite`,
          }}
        />
      ))}
      <style>{`
        @keyframes float-particle-main {
          0%, 100% { 
            transform: translate(0, 0) scale(1);
            opacity: 0.05;
          }
          25% { 
            transform: translate(20px, -30px) scale(1.1);
            opacity: 0.15;
          }
          50% { 
            transform: translate(-15px, -60px) scale(0.9);
            opacity: 0.08;
          }
          75% { 
            transform: translate(25px, -30px) scale(1.05);
            opacity: 0.12;
          }
        }
      `}</style>
    </div>
  );
};

// Parallax wrapper with smooth scroll-based movement
const ParallaxWrapper = ({ 
  children, 
  speed = 0.1,
  className = "" 
}: { 
  children: React.ReactNode; 
  speed?: number;
  className?: string;
}) => {
  const [offset, setOffset] = useState(0);

  const handleScroll = useCallback(() => {
    setOffset(window.scrollY * speed);
  }, [speed]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div 
      className={className}
      style={{ 
        transform: `translateY(${offset}px)`,
        willChange: 'transform'
      }}
    >
      {children}
    </div>
  );
};

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
          
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100);
    }
  }, [location.hash]);

  return (
    <>
      <LoadingScreen />
      <div className="min-h-screen bg-background relative overflow-hidden">
        {/* Parallax Background Orbs */}
        <ParallaxWrapper speed={-0.05} className="fixed inset-0 pointer-events-none z-0">
          <div 
            className="absolute top-[10%] left-[5%] w-[500px] h-[500px] rounded-full opacity-[0.03]"
            style={{
              background: "radial-gradient(circle, hsl(200, 100%, 50%) 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />
          <div 
            className="absolute top-[50%] right-[10%] w-[400px] h-[400px] rounded-full opacity-[0.04]"
            style={{
              background: "radial-gradient(circle, hsl(200, 100%, 45%) 0%, transparent 70%)",
              filter: "blur(100px)",
            }}
          />
          <div 
            className="absolute bottom-[20%] left-[30%] w-[600px] h-[600px] rounded-full opacity-[0.025]"
            style={{
              background: "radial-gradient(circle, hsl(210, 100%, 50%) 0%, transparent 70%)",
              filter: "blur(120px)",
            }}
          />
        </ParallaxWrapper>

        {/* Subtle dot pattern */}
        <div 
          className="fixed inset-0 pointer-events-none opacity-[0.015] z-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(0, 0%, 50%) 1px, transparent 0)`,
            backgroundSize: '48px 48px'
          }}
        />
        
        <Header />
        <main className="relative z-10">
          <HeroSection />
          <AboutSection />
          <GeoDivider />
          <div className="relative">
            <ParallaxWrapper speed={-0.015}>
              <ServicesSection />
            </ParallaxWrapper>
          </div>
          <GeoDivider flip />
          <PartnersCarousel />
          <ContactCta />
        </main>
        <Footer />
        
        {/* Floating WhatsApp Button */}
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Index;
