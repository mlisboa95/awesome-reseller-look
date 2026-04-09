import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import TextReveal from "./TextReveal";
import MagneticButton from "./MagneticButton";
import RippleButton from "./RippleButton";
import { useLanguage } from "@/contexts/LanguageContext";

// Partner logos for the hero strip
import aristaLogo from "@/assets/partners/arista.jpg";
import checkpointLogo from "@/assets/partners/checkpoint.jpg";
import f5Logo from "@/assets/partners/f5.jpg";
import hpeLogo from "@/assets/partners/hpe.jpg";
import nutanixLogo from "@/assets/partners/nutanix.jpg";
import extremeLogo from "@/assets/partners/extreme.jpg";
import thalesLogo from "@/assets/partners/thales.jpg";
import trendLogo from "@/assets/partners/trend.jpg";

const heroPartners = [
  { name: "AWS", logo: null },
  { name: "F5", logo: f5Logo },
  { name: "Check Point", logo: checkpointLogo },
  { name: "Arista", logo: aristaLogo },
  { name: "HPE", logo: hpeLogo },
  { name: "Nutanix", logo: nutanixLogo },
  { name: "Extreme", logo: extremeLogo },
  { name: "Thales", logo: thalesLogo },
  { name: "Trend Micro", logo: trendLogo },
];

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const contentOpacity = Math.max(0, 1 - scrollY / 600);

  return (
    <section id="solucoes" className="relative flex flex-col min-h-screen">
      {/* Subtle orange glow */}
      <div
        className="absolute top-1/3 left-0 w-[500px] h-[400px] opacity-[0.04] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, hsl(24, 100%, 50%) 0%, transparent 70%)",
          filter: "blur(120px)",
        }}
      />

      {/* Main content */}
      <div
        className="flex-1 flex items-center w-full max-w-[1400px] mx-auto px-6 lg:px-12 pt-32 pb-12 relative z-10"
        style={{ opacity: contentOpacity }}
      >
        <div className="max-w-3xl text-left">
          <TextReveal delay={400}>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] mb-8 tracking-tight">
              <span className="text-foreground">{t("hero.title1")}</span>
              <br />
              <span className="text-primary hero-glow">{t("hero.title2")}</span>
            </h1>
          </TextReveal>

          <TextReveal delay={800}>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <MagneticButton strength={0.15}>
                <RippleButton
                  href="#servicos"
                  className="cta-button inline-flex items-center justify-center gap-3 px-7 py-3.5 text-sm font-semibold rounded-full text-primary-foreground"
                >
                  {t("hero.cta1")}
                  <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </RippleButton>
              </MagneticButton>

              <MagneticButton strength={0.15}>
                <a
                  href="#sobre"
                  className="group inline-flex items-center justify-center gap-3 px-7 py-3.5 text-sm font-medium rounded-full border border-border text-foreground hover:border-primary/50 transition-all duration-300"
                >
                  {t("hero.cta2")}
                  <span className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </a>
              </MagneticButton>
            </div>
          </TextReveal>
        </div>
      </div>

      {/* Partner logo strip at bottom of hero */}
      <div className="relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-6">
          <div className="flex items-center gap-8 md:gap-12 flex-wrap justify-start">
            {heroPartners.map((partner) =>
              partner.logo ? (
                <img
                  key={partner.name}
                  src={partner.logo}
                  alt={partner.name}
                  className="h-8 md:h-10 w-auto object-contain opacity-40 hover:opacity-80 transition-opacity duration-300 flex-shrink-0 grayscale"
                  draggable={false}
                />
              ) : (
                <span
                  key={partner.name}
                  className="flex-shrink-0 text-lg md:text-xl font-bold text-foreground/40 hover:text-foreground/80 transition-opacity duration-300 tracking-wide"
                >
                  ☁️ {partner.name}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
