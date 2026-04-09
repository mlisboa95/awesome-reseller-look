import useScrollAnimation from "@/hooks/useScrollAnimation";
import { useEffect, useState, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Clock, Award, Briefcase, Users } from "lucide-react";

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
    { value: 22, suffix: "+", label: t("about.stat1"), icon: Clock },
    { value: 50, suffix: "+", label: t("about.stat2"), icon: Award },
    { value: 200, suffix: "+", label: t("about.stat3"), icon: Briefcase },
    { value: 100, suffix: "+", label: t("about.stat4"), icon: Users },
  ];

  return (
    <section id="sobre" className="py-20 md:py-28 relative z-10 bg-background">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Centered badge + heading — sep2 style */}
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 scroll-fade-up ${headerVisible ? 'visible' : ''}`}
        >
          <span className="badge-pill mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            {t("about.label")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
            {t("about.title")}{" "}
            <span className="text-primary">{t("about.titleHighlight")}</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            {t("about.description")}
          </p>
        </div>

        {/* Stats row — sep2 style with icons */}
        <div
          ref={statsRef}
          className={`grid grid-cols-2 lg:grid-cols-4 gap-6 scroll-fade-up ${statsVisible ? 'visible' : ''}`}
          style={{ transitionDelay: '0.2s' }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative p-6 rounded-2xl border border-border bg-card text-center group hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-display font-bold text-foreground mb-1">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} isVisible={statsVisible} />
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
