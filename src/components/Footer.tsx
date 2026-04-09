import { Mail, Phone, MapPin } from "lucide-react";
import { forwardRef } from "react";
import logoMahvla from "@/assets/logo-mahvla-footer.png";
import { useLanguage } from "@/contexts/LanguageContext";

interface FooterProps {
  showCta?: boolean;
}

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const Footer = forwardRef<HTMLElement, FooterProps>(({ showCta = true }, ref) => {
  const { t } = useLanguage();

  return (
    <footer ref={ref} id="contato" className="bg-background relative overflow-hidden border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo + tagline + social */}
          <div className="lg:col-span-2">
            <img src={logoMahvla} alt="Mahvla Group" className="h-20 w-auto mb-4" />
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md mb-5">
              Technology integration, from data center to cloud.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com/company/mahvla"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
            </div>
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
