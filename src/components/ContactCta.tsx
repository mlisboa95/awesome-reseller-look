import { ArrowRight } from "lucide-react";
import ctaImage from "@/assets/cta-contact.jpg";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactCta = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useLanguage();

  return (
    <section className="py-14 md:py-20 relative z-10 bg-background overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6">
        <div
          ref={ref}
          className={`relative rounded-2xl overflow-hidden border border-border bg-card scroll-fade-up ${isVisible ? 'visible' : ''}`}
        >
          <div
            className="absolute top-0 right-0 w-[400px] h-[300px] opacity-10"
            style={{
              background: "radial-gradient(ellipse at center, hsl(200, 100%, 47%) 0%, transparent 60%)",
              filter: "blur(80px)",
            }}
          />

          <div className="grid md:grid-cols-[1fr,1.2fr] items-stretch">
            <div className="relative h-64 md:h-auto">
              <img src={ctaImage} alt="Especialista Mahvla" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/80 hidden md:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent md:hidden" />
            </div>

            <div className="relative z-10 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 leading-tight">
                {t("cta.title")} <span className="text-primary">{t("cta.titleHighlight")}</span>
              </h2>
              <div className="w-16 h-0.5 bg-primary mb-6" />
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                {t("cta.description")}
              </p>
              <div>
                <a
                  href="mailto:contato@mahvla.com.br"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 text-sm uppercase tracking-wider"
                >
                  {t("cta.button")}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCta;
