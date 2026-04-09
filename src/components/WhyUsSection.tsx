import { Shield, Cpu, Heart, Target } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

const WhyUsSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();
  const { t } = useLanguage();

  const reasons = [
    {
      icon: Shield,
      title: t("whyus.r1.title"),
      description: t("whyus.r1.desc"),
    },
    {
      icon: Cpu,
      title: t("whyus.r2.title"),
      description: t("whyus.r2.desc"),
    },
    {
      icon: Heart,
      title: t("whyus.r3.title"),
      description: t("whyus.r3.desc"),
    },
    {
      icon: Target,
      title: t("whyus.r4.title"),
      description: t("whyus.r4.desc"),
    },
  ];

  return (
    <section className="py-20 md:py-28 relative z-10 bg-background overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-14 scroll-fade-up ${headerVisible ? 'visible' : ''}`}
        >
          <span className="badge-pill mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            {t("whyus.label")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight text-foreground leading-[1.1]">
            {t("whyus.title")}{" "}
            <span className="text-primary">{t("whyus.titleHighlight")}</span>
          </h2>
        </div>

        <div
          ref={gridRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children ${gridVisible ? 'visible' : ''}`}
        >
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="group p-7 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all duration-300 card-hover text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/15 transition-colors">
                <reason.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-display font-bold text-foreground mb-3">{reason.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
