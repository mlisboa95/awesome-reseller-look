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
    <section id="solucoes" className="relative flex flex-col">
      <div className="relative min-h-screen flex flex-col overflow-hidden bg-background">
        {/* Animated SVG curved lines — sep2 style */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1440 900"
            preserveAspectRatio="none"
            fill="none"
          >
            {/* Gray flowing curves */}
            <path
              d="M800 -100 Q900 200 850 400 Q800 600 900 900"
              stroke="hsla(0, 0%, 50%, 0.12)"
              strokeWidth="1.5"
              className="hero-curve hero-curve-1"
            />
            <path
              d="M900 -50 Q1000 250 950 450 Q900 650 1050 950"
              stroke="hsla(0, 0%, 50%, 0.08)"
              strokeWidth="1"
              className="hero-curve hero-curve-2"
            />
            <path
              d="M1000 -80 Q1100 180 1080 380 Q1060 580 1200 920"
              stroke="hsla(0, 0%, 50%, 0.1)"
              strokeWidth="1.5"
              className="hero-curve hero-curve-3"
            />
            <path
              d="M1100 -30 Q1200 220 1150 420 Q1100 620 1300 900"
              stroke="hsla(0, 0%, 50%, 0.06)"
              strokeWidth="1"
              className="hero-curve hero-curve-4"
            />

            {/* Orange accent curve */}
            <path
              d="M850 -60 Q950 250 920 480 Q890 710 980 950"
              stroke="hsla(24, 100%, 50%, 0.15)"
              strokeWidth="1.5"
              className="hero-curve hero-curve-orange"
            />

            {/* Blue/cyan accent curve */}
            <path
              d="M1050 -40 Q1150 300 1120 500 Q1090 700 1250 950"
              stroke="hsla(200, 80%, 55%, 0.12)"
              strokeWidth="1.5"
              className="hero-curve hero-curve-blue"
            />

            {/* Additional subtle curves for depth */}
            <path
              d="M750 -120 Q850 150 820 350 Q790 550 850 850"
              stroke="hsla(0, 0%, 45%, 0.06)"
              strokeWidth="1"
              className="hero-curve hero-curve-5"
            />
            <path
              d="M1150 0 Q1250 280 1200 500 Q1150 720 1350 950"
              stroke="hsla(0, 0%, 45%, 0.05)"
              strokeWidth="1"
              className="hero-curve hero-curve-6"
            />
          </svg>
        </div>

        {/* Subtle orange glow */}
        <div
          className="absolute top-1/3 left-0 w-[500px] h-[400px] opacity-[0.06]"
          style={{
            background: "radial-gradient(ellipse at center, hsl(24, 100%, 50%) 0%, transparent 70%)",
            filter: "blur(120px)",
          }}
        />

        {/* Frame / border effect — sep2 style */}
        <div className="absolute inset-0 pointer-events-none z-20">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
          <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-white/[0.06] via-white/[0.03] to-transparent" />
          <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-white/[0.06] via-white/[0.03] to-transparent" />
        </div>

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
        <div className="relative z-10 bg-background/50 backdrop-blur-sm">
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
      </div>
    </section>
  );
};

export default HeroSection;
