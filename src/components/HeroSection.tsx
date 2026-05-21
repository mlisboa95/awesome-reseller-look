import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import TextReveal from "./TextReveal";
import MagneticButton from "./MagneticButton";
import RippleButton from "./RippleButton";
import { useLanguage } from "@/contexts/LanguageContext";

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

          <TextReveal delay={600}>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              {t("hero.support")}
            </p>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed mt-3">
              {t("hero.support2")}
            </p>
          </TextReveal>

          <TextReveal delay={800}>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <MagneticButton strength={0.15}>
                <RippleButton
                  href="mailto:contact@mahvla.com"
                  className="cta-button inline-flex items-center justify-center gap-3 px-7 py-3.5 text-sm font-semibold rounded-full text-primary-foreground"
                >
                  {t("hero.cta1")}
                  <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </RippleButton>
              </MagneticButton>
            </div>
          </TextReveal>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
