import { ShieldCheck, Network, CloudCog, HeadsetIcon, Cog, ArrowRight, Camera } from "lucide-react";
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
      tags: "LAN • WLAN • WAN • MAN • SD-WAN • NPM • NOC • VoIP",
      description: t("services.s1.desc"),
    },
    {
      icon: ShieldCheck,
      title: t("services.s2.title"),
      tags: "NGFW • WAF • EDR/XDR • ZTNA • SASE • IAM • PAM",
      description: t("services.s2.desc"),
    },
    {
      icon: CloudCog,
      title: t("services.s3.title"),
      tags: "HCI • Storage • Servers • Virtualização • Containers • Object Storage",
      description: t("services.s3.desc"),
    },
    {
      icon: Camera,
      title: t("services.s4.title"),
      tags: "CFTV • Controle de Acesso • LPR • Reconhecimento Facial • Smart City",
      description: t("services.s4.desc"),
    },
    {
      icon: HeadsetIcon,
      title: t("services.s5.title"),
      tags: "NOC • SOC • Sustentação • SLA",
      description: t("services.s5.desc"),
    },
    {
      icon: Cog,
      title: t("services.s6.title"),
      tags: "Assessment • Arquitetura • Projetos • PMO",
      description: t("services.s6.desc"),
    },
  ];

  return (
    <section id="servicos" className="py-10 md:py-14 relative overflow-hidden bg-background">
      <div 
        className="absolute bottom-0 right-0 w-[600px] h-[400px] opacity-10"
        style={{
          background: "radial-gradient(ellipse at center, hsl(200, 100%, 50%) 0%, transparent 60%)",
          filter: "blur(100px)",
        }}
      />
      
      <div className="max-w-[1600px] mx-auto px-6 relative z-10">
        <div 
          ref={headerRef}
          className={`mb-10 md:mb-12 scroll-fade-up ${headerVisible ? 'visible' : ''}`}
        >
          <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            {t("services.label")}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight text-foreground max-w-3xl leading-[1.1]">
            {t("services.title")} <span className="text-primary">{t("services.titleHighlight")}</span>
          </h2>
        </div>

        <div 
          ref={gridRef}
          className={`stagger-children ${gridVisible ? 'visible' : ''}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-4">
            {services.slice(0, 4).map((service) => (
              <div
                key={service.title}
                className="group relative p-6 rounded-xl bg-background border border-border hover:border-primary/40 transition-all duration-500"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-foreground mb-1">{service.title}</h3>
                  <p className="text-xs font-medium text-primary/80 mb-3 leading-relaxed">{service.tags}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-4">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.slice(4).map((service) => (
              <div
                key={service.title}
                className="group relative p-5 rounded-xl bg-background border border-border hover:border-primary/40 transition-all duration-500"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-bold text-foreground mb-1">{service.title}</h3>
                    <p className="text-xs font-medium text-primary/80 mb-2">{service.tags}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
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
