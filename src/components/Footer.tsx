import { Mail, Phone, MapPin } from "lucide-react";
import { forwardRef } from "react";
import logoMahvla from "@/assets/logo-mahvla-footer.png";
import { useLanguage } from "@/contexts/LanguageContext";

interface FooterProps {
  showCta?: boolean;
}

const Footer = forwardRef<HTMLElement, FooterProps>(({ showCta = true }, ref) => {
  const { t } = useLanguage();

  return (
    <footer ref={ref} id="contato" className="bg-background relative overflow-hidden border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo + tagline + social */}
          <div className="lg:col-span-2">
            <img src={logoMahvla} alt="Mahvla Group" className="h-20 w-auto" />
          </div>

          {/* Offices */}
          <div>
            <h4 className="text-primary font-display font-semibold text-base mb-6">
              {t("footer.office")}
            </h4>
            <address className="not-italic text-muted-foreground text-sm leading-relaxed space-y-5">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-foreground font-medium mb-1">Boca Raton, FL</p>
                  <p>5550 Glades Road, Suite 511</p>
                  <p>Boca Raton, FL 33431</p>
                  <p>United States</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-foreground font-medium mb-1">Brasília, DF</p>
                  <p>SRTVS Qd 701 Cj. L N. 38</p>
                  <p>Bloco 01, Salas 8, 9 e 10</p>
                  <p>Asa Sul, Brasília - DF, Brazil</p>
                </div>
              </div>
            </address>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-primary font-display font-semibold text-base mb-6">
              {t("footer.contact")}
            </h4>
            <div className="space-y-4">
              <a href="mailto:contact@mahvla.com" className="flex items-center gap-3 text-muted-foreground text-sm hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                contact@mahvla.com
              </a>
              <a href="mailto:support@mahvla.com" className="flex items-center gap-3 text-muted-foreground text-sm hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                support@mahvla.com
              </a>
              <a href="tel:+556121914900" className="flex items-center gap-3 text-muted-foreground text-sm hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                +55 (61) 2191-4900
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground/60 text-sm">
            © {new Date().getFullYear()} Mahvla Group LLC — {t("footer.copyright")}
          </p>
          <div className="flex items-center gap-6">
            <a href="/privacy" className="text-muted-foreground/60 text-sm hover:text-primary transition-colors underline underline-offset-4">
              {t("footer.privacy")}
            </a>
            <a href="/terms" className="text-muted-foreground/60 text-sm hover:text-primary transition-colors underline underline-offset-4">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
