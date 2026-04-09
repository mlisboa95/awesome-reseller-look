import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { forwardRef } from "react";
import logoMahvla from "@/assets/logo-mahvla-footer.png";
import { useLanguage } from "@/contexts/LanguageContext";

interface FooterProps {
  showCta?: boolean;
}

const Footer = forwardRef<HTMLElement, FooterProps>(({ showCta = true }, ref) => {
  const { t } = useLanguage();

  return (
    <footer ref={ref} id="contato" className="bg-[#0a0a0a] text-white relative overflow-hidden">
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] opacity-15"
        style={{
          background: "radial-gradient(ellipse at center, hsl(200, 100%, 47%) 0%, transparent 60%)",
          filter: "blur(100px)",
        }}
      />
      
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <img src={logoMahvla} alt="Mahvla Grupo" className="h-24 w-auto mb-6" />
          </div>

          <div>
            <h4 className="text-primary font-display font-semibold text-lg mb-6">
              {t("footer.office")}
            </h4>
            <address className="not-italic text-white/60 text-sm leading-relaxed space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p>SRTVS Qd 701 Cj. L N. 38</p>
                  <p>Bloco 01, Salas 8, 9 e 10</p>
                  <p>Asa Sul, Brasília - DF</p>
                  <p className="text-white/40 mt-1">CEP: 70340-906</p>
                </div>
              </div>
            </address>
          </div>

          <div>
            <h4 className="text-primary font-display font-semibold text-lg mb-6">
              {t("footer.contact")}
            </h4>
            <div className="space-y-4">
              <a href="mailto:contato@mahvla.com.br" className="flex items-center gap-3 text-white/70 text-sm hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                contato@mahvla.com.br
              </a>
              <a href="mailto:suporte@mahvla.com.br" className="flex items-center gap-3 text-white/70 text-sm hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                suporte@mahvla.com.br
              </a>
              <a href="tel:+556121914900" className="flex items-center gap-3 text-white/70 text-sm hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                +55 (61) 2191-4900
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} Grupo Mahvla — {t("footer.copyright")}
          </p>
          <div className="flex items-center gap-6">
            <a href="/privacidade" className="text-white/50 text-sm font-medium hover:text-primary transition-colors underline underline-offset-4">
              {t("footer.privacy")}
            </a>
            <a 
              href="https://portal.office.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-white/50 text-sm font-medium hover:text-primary transition-colors underline underline-offset-4"
            >
              Mahvla Corp
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
