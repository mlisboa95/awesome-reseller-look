import useScrollAnimation from "@/hooks/useScrollAnimation";
import { useEffect, useState, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const AnimatedNumber = ({ value, suffix, isVisible }: { value: number; suffix: string; isVisible: boolean }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isVisible && !hasAnimated.current) {
      hasAnimated.current = true;
      const duration = 2000;
      const steps = 60;
      const stepValue = value / steps;
      const stepDuration = duration / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += stepValue;
        if (current >= value) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(current));
        }
      }, stepDuration);
      return () => clearInterval(timer);
    }
  }, [isVisible, value]);

  return <span className="tabular-nums">{displayValue}{suffix}</span>;
};

const AboutSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardRef, isVisible: cardVisible } = useScrollAnimation();
  const { t } = useLanguage();

  const stats = [
    { value: 22, suffix: "+", label: t("about.stat1") },
    { value: 50, suffix: "+", label: t("about.stat2") },
    { value: 200, suffix: "+", label: t("about.stat3") },
    { value: 100, suffix: "+", label: t("about.stat4") },
  ];

  return (
    <section id="sobre" className="py-10 md:py-14 relative z-10 overflow-hidden bg-background">
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] opacity-10"
        style={{
          background: "radial-gradient(ellipse at center, hsl(16, 85%, 55%) 0%, transparent 60%)",
          filter: "blur(120px)",
        }}
      />
      
      <div className="max-w-[1600px] mx-auto px-6 relative z-10">
        <div>
          <div>
            <div 
              ref={headerRef}
              className={`scroll-fade-up ${headerVisible ? 'visible' : ''}`}
            >
              <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-4">
                {t("about.label")}
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-foreground mb-8 leading-[1.1]">
                {t("about.title")} <span className="text-primary">{t("about.titleHighlight")}</span>
              </h2>
            </div>
            
            <div 
              ref={cardRef}
              className={`scroll-fade-up ${cardVisible ? 'visible' : ''}`}
              style={{ transitionDelay: '0.2s' }}
            >
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                {t("about.description")}
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-2">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center sm:text-left">
                    <div className="text-4xl md:text-5xl font-display font-bold text-primary tracking-tight">
                      <AnimatedNumber value={stat.value} suffix={stat.suffix} isVisible={cardVisible} />
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
