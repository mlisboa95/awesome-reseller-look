import aristaLogo from "@/assets/partners/arista.jpg";
import checkpointLogo from "@/assets/partners/checkpoint.jpg";
import cyberarkLogo from "@/assets/partners/cyberark.jpg";
import exagridLogo from "@/assets/partners/exagrid.jpg";
import extremeLogo from "@/assets/partners/extreme.jpg";
import f5Logo from "@/assets/partners/f5.jpg";
import gigamonLogo from "@/assets/partners/gigamon.jpg";
import hpeLogo from "@/assets/partners/hpe.jpg";
import mitelLogo from "@/assets/partners/mitel.jpg";
import nutanixLogo from "@/assets/partners/nutanix.jpg";
import purestorageLogo from "@/assets/partners/purestorage.jpg";
import riverbedLogo from "@/assets/partners/riverbed.jpg";
import thalesLogo from "@/assets/partners/thales.jpg";
import trendLogo from "@/assets/partners/trend.jpg";
import veeamLogo from "@/assets/partners/veeam.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const partners = [
  { name: "Arista", logo: aristaLogo },
  { name: "Check Point", logo: checkpointLogo },
  { name: "CyberArk", logo: cyberarkLogo },
  { name: "ExaGrid", logo: exagridLogo },
  { name: "Extreme Networks", logo: extremeLogo },
  { name: "F5", logo: f5Logo },
  { name: "Gigamon", logo: gigamonLogo },
  { name: "HPE", logo: hpeLogo },
  { name: "Mitel", logo: mitelLogo },
  { name: "Nutanix", logo: nutanixLogo },
  { name: "Pure Storage", logo: purestorageLogo },
  { name: "Riverbed", logo: riverbedLogo },
  { name: "Thales", logo: thalesLogo },
  { name: "Trend Micro", logo: trendLogo },
  { name: "Veeam", logo: veeamLogo },
];

const PartnersCarousel = () => {
  const allPartners = [...partners, ...partners];
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="parceiros" className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div
        ref={ref}
        className={`max-w-[1400px] mx-auto px-6 lg:px-12 mb-10 text-center scroll-fade-up ${isVisible ? 'visible' : ''}`}
      >
        <span className="badge-pill mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          {t("partners.label")}
        </span>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold tracking-tight text-foreground">
          {t("partners.title")}{" "}
          <span className="text-primary">{t("partners.titleHighlight")}</span>{" "}
          {t("partners.titleEnd")}
        </h2>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex animate-scroll-left-slow"
          style={{ width: 'max-content' }}
        >
          {allPartners.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex-shrink-0 px-6 md:px-10 flex items-center justify-center h-20 group"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                loading="lazy"
                decoding="async"
                className="h-[50px] md:h-[60px] w-auto object-contain opacity-40 hover:opacity-90 transition-all duration-500 hover:scale-110 grayscale hover:grayscale-0"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersCarousel;
