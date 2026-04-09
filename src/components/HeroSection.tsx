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

        {/* Frame border with rounded corners — sep2 style */}
        <div className="absolute inset-3 md:inset-4 rounded-2xl border border-white/[0.12] pointer-events-none z-20" />

        {/* Animated SVG curved lines — sep2 style */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1440 900"
            preserveAspectRatio="none"
            fill="none"
          >
            {/* Main gray flowing curves — thick and visible like sep2 */}
            <path
              d="M700 -100 C750 150, 680 350, 720 500 C760 650, 850 750, 900 950"
              stroke="hsla(0, 0%, 45%, 0.25)"
              strokeWidth="2"
              className="hero-curve hero-curve-1"
            />
            <path
              d="M820 -80 C870 180, 800 320, 830 500 C860 680, 950 800, 1000 950"
              stroke="hsla(0, 0%, 45%, 0.2)"
              strokeWidth="2"
              className="hero-curve hero-curve-2"
            />
            <path
              d="M950 -60 C1000 200, 930 380, 970 520 C1010 660, 1100 780, 1150 950"
              stroke="hsla(0, 0%, 45%, 0.22)"
              strokeWidth="2"
              className="hero-curve hero-curve-3"
            />
            <path
              d="M1080 -40 C1130 180, 1060 350, 1100 500 C1140 650, 1220 780, 1280 950"
              stroke="hsla(0, 0%, 45%, 0.18)"
              strokeWidth="2"
              className="hero-curve hero-curve-4"
            />
            <path
              d="M1200 -20 C1250 220, 1180 400, 1220 550 C1260 700, 1340 800, 1400 950"
              stroke="hsla(0, 0%, 45%, 0.15)"
              strokeWidth="1.5"
              className="hero-curve hero-curve-5"
            />

            {/* Orange accent curve — prominent */}
            <path
              d="M780 -70 C830 200, 750 380, 800 530 C850 680, 920 800, 960 950"
              stroke="hsla(24, 100%, 50%, 0.3)"
              strokeWidth="2"
              className="hero-curve hero-curve-orange"
            />

            {/* Blue/cyan accent curve */}
            <path
              d="M1120 -30 C1170 250, 1100 420, 1150 580 C1200 740, 1300 840, 1380 950"
              stroke="hsla(200, 80%, 55%, 0.2)"
              strokeWidth="1.5"
              className="hero-curve hero-curve-blue"
            />

            {/* Extra subtle background curves for depth */}
            <path
              d="M600 -140 C650 100, 580 300, 620 460 C660 620, 740 740, 800 950"
              stroke="hsla(0, 0%, 42%, 0.12)"
              strokeWidth="1.5"
              className="hero-curve hero-curve-6"
            />
            <path
              d="M1300 0 C1350 250, 1280 420, 1320 580 C1360 740, 1420 840, 1440 950"
              stroke="hsla(0, 0%, 42%, 0.1)"
              strokeWidth="1.5"
              className="hero-curve hero-curve-1"
            />
          </svg>
        </div>

        {/* Subtle orange glow */}
        <div
          className="absolute top-1/3 left-0 w-[500px] h-[400px] opacity-[0.04]"
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
      </div>
    </section>
  );
};

export default HeroSection;
