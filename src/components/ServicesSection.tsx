import { ShieldCheck, Network, CloudCog, HeadsetIcon, Cog, Camera } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

const ServicesSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();
  const { t } = useLanguage();

  const services = [
    { icon: ShieldCheck, title: t("services.s2.title"), description: t("services.s2.desc") },
    { icon: CloudCog, title: t("services.s3.title"), description: t("services.s3.desc") },
    { icon: Network, title: t("services.s1.title"), description: t("services.s1.desc") },
    { icon: Cog, title: t("services.s6.title"), description: t("services.s6.desc") },
    { icon: HeadsetIcon, title: t("services.s5.title"), description: t("services.s5.desc") },
    { icon: Camera, title: t("services.s4.title"), description: t("services.s4.desc") },
  ];

  return (
    <section id="servicos" className="py-14 md:py-20 relative overflow-hidden bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div
          ref={headerRef}
          className={`max-w-3xl mb-10 scroll-fade-up ${headerVisible ? 'visible' : ''}`}
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">
            {t("services.label")}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight text-gray-900 leading-[1.1]">
            {t("services.title")}{" "}
            <span className="text-primary">{t("services.titleHighlight")}</span>
          </h2>
        </div>

        <div
          ref={gridRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 rounded-2xl overflow-hidden stagger-children ${gridVisible ? 'visible' : ''}`}
        >
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-7 group"
            >
              <service.icon className="w-7 h-7 text-primary mb-5" />
              <h3 className="text-lg font-display font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
