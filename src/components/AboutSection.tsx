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

  const differentiators = [
    "Multi-vendor certified team (50+ active certifications)",
    "Tailored procurement & vendor management",
    "On-prem, hybrid, and cloud delivery",
    "Dedicated project management & long-term support",
  ];

  return (
    <section id="sobre" className="py-14 md:py-20 relative z-10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          ref={headerRef}
          className={`max-w-3xl mb-10 scroll-fade-up ${headerVisible ? 'visible' : ''}`}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-primary/30 text-primary bg-primary/5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            {t("about.label")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight text-gray-900 mb-4 leading-[1.1]">
            {t("about.title")}{" "}
            <span className="text-primary">{t("about.titleHighlight")}</span>
          </h2>
          <p className="text-base md:text-lg text-gray-500 leading-relaxed max-w-2xl">
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

          {/* Differentiators row */}
          <div className="flex flex-wrap gap-3 pt-2">
            {differentiators.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium text-gray-600 bg-gray-100 border border-gray-200"
              >
                <span className="w-1 h-1 rounded-full bg-primary" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
