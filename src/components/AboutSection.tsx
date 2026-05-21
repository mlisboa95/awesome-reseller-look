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
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();
  const { t } = useLanguage();

  const stats = [
    { value: 22, suffix: "+", label: t("about.stat1") },
    { value: 50, suffix: "+", label: t("about.stat2") },
    { value: 200, suffix: "+", label: t("about.stat3") },
    { value: 100, suffix: "+", label: t("about.stat4") },
  ];

  return (
    <section id="sobre" className="py-14 md:py-20 relative z-10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          ref={headerRef}
          className={`max-w-3xl mb-10 scroll-fade-up ${headerVisible ? 'visible' : ''}`}
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">
            {t("about.label")}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight text-gray-900 mb-4 leading-[1.1]">
            {t("about.title")}{" "}
            <span className="text-primary">{t("about.titleHighlight")}</span>
          </h2>
          <p className="text-base md:text-lg text-gray-500 leading-relaxed max-w-3xl">
            {t("about.description")}
          </p>
        </div>

        <div
          ref={statsRef}
          className={`space-y-6 scroll-fade-up ${statsVisible ? 'visible' : ''}`}
          style={{ transitionDelay: '0.2s' }}
        >
          {/* Stats row */}
          <div className="flex items-center">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex-1 py-4 ${i > 0 ? 'border-l border-gray-200 pl-6 md:pl-8' : ''}`}
              >
                <div className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-1">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} isVisible={statsVisible} />
                </div>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
