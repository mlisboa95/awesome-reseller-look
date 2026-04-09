import { ArrowRight, Play } from "lucide-react";
import { useEffect, useState } from "react";
import heroVideo from "@/assets/hero-video.mp4";
import heroPoster from "@/assets/hero-poster.jpg";
import ScrollIndicator from "./ScrollIndicator";
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

  const videoOffset = scrollY * 0.3;
  const contentOpacity = Math.max(0, 1 - scrollY / 600);

  return (
    <section id="solucoes" className="relative flex flex-col">
      <div className="relative min-h-screen flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 scale-110"
          style={{ transform: `translateY(${videoOffset}px) scale(1.1)` }}
        >
          <video
            autoPlay loop muted playsInline preload="auto"
            poster={heroPoster}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: 'brightness(0.25) saturate(0.8) hue-rotate(-30deg)' }}
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          >
            <source src={heroVideo} type="video/mp4" onError={() => {}} />
          </video>
        </div>
        
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsla(220, 30%, 4%, 0.92) 0%, hsla(220, 20%, 6%, 0.8) 50%, hsla(200, 20%, 10%, 0.65) 100%)" }} />
        
        <div className="absolute top-1/4 right-0 w-[800px] h-[600px] opacity-40" style={{ background: "radial-gradient(ellipse at center, hsl(200, 100%, 47%) 0%, transparent 70%)", filter: "blur(120px)", animation: "float-glow 15s ease-in-out infinite" }} />
        <div className="absolute bottom-1/4 left-0 w-[600px] h-[400px] opacity-20" style={{ background: "radial-gradient(ellipse at center, hsl(210, 100%, 55%) 0%, transparent 70%)", filter: "blur(100px)", animation: "float-glow 20s ease-in-out infinite reverse" }} />

        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }} />

        <div className="w-full max-w-[1600px] relative z-10 mx-auto px-6 pt-32 pb-20" style={{ opacity: contentOpacity }}>
          <div className="max-w-4xl text-left">
            <TextReveal delay={200}>
              <span className="inline-flex items-center gap-3 text-sm font-semibold tracking-[0.25em] uppercase text-primary mb-8">
                <span className="w-10 h-px bg-primary"></span>
                {t("hero.eyebrow")}
              </span>
            </TextReveal>
            
            <TextReveal delay={400}>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.92] mb-12 tracking-tight">
                <span className="text-foreground block">{t("hero.title1")}</span>
                <span className="text-primary hero-glow inline-block">{t("hero.title2")}</span>
                <span className="text-foreground block">{t("hero.title3")}</span>
              </h1>
            </TextReveal>

            <TextReveal delay={800}>
              <div className="flex flex-col sm:flex-row gap-4">
                <MagneticButton strength={0.15}>
                  <RippleButton
                    href="#servicos"
                    className="cta-button inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-semibold rounded-xl text-primary-foreground"
                  >
                    {t("hero.cta1")}
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </RippleButton>
                </MagneticButton>
                
                <MagneticButton strength={0.15}>
                  <a
                    href="#sobre"
                    className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-medium rounded-xl border border-border text-foreground hover:bg-card hover:border-primary/50 hover:shadow-[0_0_30px_hsla(200,100%,47%,0.15)] transition-all duration-500"
                  >
                    <Play className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    {t("hero.cta2")}
                  </a>
                </MagneticButton>
              </div>
            </TextReveal>
          </div>
        </div>

        <ScrollIndicator />
        
        <div className="absolute bottom-0 left-0 right-0 h-40" style={{ background: "linear-gradient(to bottom, transparent, hsl(var(--background)))" }} />
      </div>
    </section>
  );
};

export default HeroSection;
