import { ArrowRight } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactCta = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28 relative z-10 bg-card overflow-hidden">
      {/* Subtle orange glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] opacity-[0.06]"
        style={{
          background: "radial-gradient(ellipse at center, hsl(24, 100%, 50%) 0%, transparent 60%)",
          filter: "blur(120px)",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          ref={ref}
          className={`text-center max-w-2xl mx-auto scroll-fade-up ${isVisible ? 'visible' : ''}`}
        >
          <span className="badge-pill mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            {t("cta.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
            {t("cta.title")}{" "}
            <span className="text-primary">{t("cta.titleHighlight")}</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
            {t("cta.description")}
          </p>
          <a
            href="mailto:contato@mahvla.com.br"
            className="cta-button inline-flex items-center gap-3 px-8 py-4 font-semibold rounded-full text-primary-foreground text-sm uppercase tracking-wider"
          >
            {t("cta.button")}
            <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <ArrowRight className="w-4 h-4" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactCta;
