import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import TextReveal from "./TextReveal";
import MagneticButton from "./MagneticButton";
import RippleButton from "./RippleButton";
import { useLanguage } from "@/contexts/LanguageContext";

// Partner logos (SVG/PNG, white on transparent)
import awsLogo from "@/assets/partners/aws.svg";
import checkpointLogo from "@/assets/partners/checkpoint.svg";
import everpureLogo from "@/assets/partners/everpure.svg";
import exagridLogo from "@/assets/partners/exagrid.svg";
import extremeLogo from "@/assets/partners/extreme.svg";
import gigamonLogo from "@/assets/partners/gigamon.png";
import hpeLogo from "@/assets/partners/hpe.svg";
import nutanixLogo from "@/assets/partners/nutanix.svg";
import riverbedLogo from "@/assets/partners/riverbed.svg";
import veeamLogo from "@/assets/partners/veeam.svg";

// Alphabetical order, with individual height tuning for visual balance
const heroPartners = [
  { name: "AWS", logo: awsLogo, h: "h-7 md:h-8" },
  { name: "Check Point", logo: checkpointLogo, h: "h-7 md:h-8" },
  { name: "Everpure", logo: everpureLogo, h: "h-5 md:h-6" },
  { name: "ExaGrid", logo: exagridLogo, h: "h-5 md:h-6" },
  { name: "Extreme Networks", logo: extremeLogo, h: "h-5 md:h-6" },
  { name: "Gigamon", logo: gigamonLogo, h: "h-5 md:h-6" },
  { name: "HPE", logo: hpeLogo, h: "h-5 md:h-6" },
  { name: "Nutanix", logo: nutanixLogo, h: "h-5 md:h-6" },
  { name: "Riverbed", logo: riverbedLogo, h: "w-32 md:w-40" },
  { name: "Veeam", logo: veeamLogo, h: "w-32 md:w-40" },
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

  // Duplicate for seamless loop
  const doubled = [...heroPartners, ...heroPartners];

  return (
    <section id="solucoes" className="relative flex flex-col">
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
        className="flex-1 flex items-center w-full max-w-[1400px] mx-auto px-6 lg:px-12 pt-40 md:pt-44 pb-8 relative z-10"
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
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
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

      {/* Partner carousel — contained within hero dark area */}
      <div className="relative z-10 overflow-hidden">
        <div className="py-6">
          <div
            className="flex animate-scroll-left-slow"
            style={{ width: "max-content" }}
          >
            {doubled.map((partner, i) => (
              <div
                key={`${partner.name}-${i}`}
                className="flex-shrink-0 px-6 md:px-10 flex items-center justify-center h-14"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className={`${partner.h} w-auto object-contain opacity-90`}
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
