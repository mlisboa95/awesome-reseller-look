import { ShieldCheck, Network, CloudCog, HeadsetIcon, Cog, Camera, ArrowRight } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

const ServicesSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();
  const { t } = useLanguage();

  const services = [
    {
      icon: Network,
      title: t("services.s1.title"),
      tags: "LAN • WLAN • SD-WAN • NOC • VoIP",
      description: t("services.s1.desc"),
    },
    {
      icon: ShieldCheck,
      title: t("services.s2.title"),
      tags: "NGFW • WAF • EDR/XDR • ZTNA • SASE",
      description: t("services.s2.desc"),
    },
    {
      icon: CloudCog,
      title: t("services.s3.title"),
      tags: "HCI • Storage • Cloud • Containers",
      description: t("services.s3.desc"),
    },
    {
      icon: Camera,
      title: t("services.s4.title"),
      tags: "CCTV • Access Control • LPR • Smart City",
      description: t("services.s4.desc"),
    },
  ];

  const otherServices = [
    {
      icon: HeadsetIcon,
      title: t("services.s5.title"),
      description: t("services.s5.desc"),
    },
    {
      icon: Cog,
      title: t("services.s6.title"),
      description: t("services.s6.desc"),
    },
  ];

  return (
    <section id="servicos" className="py-20 md:py-28 relative overflow-hidden bg-card">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-14 scroll-fade-up ${headerVisible ? 'visible' : ''}`}
        >
          <span className="badge-pill mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            {t("services.label")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight text-foreground leading-[1.1]">
            {t("services.title")}{" "}
            <span className="text-primary">{t("services.titleHighlight")}</span>
          </h2>
        </div>

        {/* Main service cards — sep2 style */}
        <div
          ref={gridRef}
          className={`stagger-children ${gridVisible ? 'visible' : ''}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            {services.map((service) => (
              <div
                key={service.title}
                className="group relative p-7 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all duration-400 card-hover"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="service-card-arrow">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-xs font-medium text-primary/70 mb-3 tracking-wide">{service.tags}</p>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Other services — compact row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {otherServices.map((service) => (
              <div
                key={service.title}
                className="group relative p-6 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all duration-400 card-hover"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors duration-300">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-display font-bold text-foreground mb-1">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                  <div className="service-card-arrow flex-shrink-0">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
