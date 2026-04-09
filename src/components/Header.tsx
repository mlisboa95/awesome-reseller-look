import { Menu, X, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logoMahvla from "@/assets/logo-mahvla-footer.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useLanguage();

  const navLinks = [
    { label: t("nav.about"), href: "#sobre", isExternal: false },
    { label: t("nav.solutions"), href: "#servicos", isExternal: false },
    { label: t("nav.compliance"), href: "/compliance", isExternal: true },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/" + href);
    } else {
      scrollToSection(href);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`z-50 transition-all duration-500 ${
        scrolled
          ? 'fixed top-0 left-0 right-0 bg-white shadow-sm border-b border-gray-200/60'
          : 'absolute top-0 left-0 right-0 bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center py-3">
        <a
          href="/"
          onClick={(e) => {
            if (location.pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="flex items-center gap-3 group"
        >
          <img
            src={logoMahvla}
            alt="Mahvla Group"
            className={`h-[5.8rem] md:h-[6.5rem] w-auto transition-all duration-300 group-hover:opacity-80 ${
              scrolled ? 'brightness-0' : ''
            }`}
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8 ml-auto mr-8">
          {navLinks.map((link) => (
            <div key={link.label}>
              {link.isExternal ? (
                <Link
                  to={link.href}
                  className={`text-sm font-medium transition-colors duration-300 relative group ${
                    scrolled ? 'text-gray-600 hover:text-gray-900' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              ) : (
                <a
                  href={link.href}
                  onClick={(e) => handleSectionClick(e, link.href)}
                  className={`text-sm font-medium transition-colors duration-300 cursor-pointer relative group ${
                    scrolled ? 'text-gray-600 hover:text-gray-900' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              )}
            </div>
          ))}
        </nav>

        {/* CTA button */}
        <div className="hidden lg:flex items-center">
          <a
            href="mailto:contact@mahvla.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
          >
            {t("nav.portal")}
            <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
              <Mail className="w-3 h-3" />
            </span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`lg:hidden ml-auto p-2 transition-colors ${
            scrolled ? 'text-gray-600 hover:text-gray-900' : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          lg:hidden absolute top-full left-0 right-0
          ${scrolled ? 'bg-white border-b border-gray-200' : 'bg-background/95 backdrop-blur-xl border-b border-border'}
          transition-all duration-300 overflow-hidden
          ${mobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <nav className="max-w-[1400px] mx-auto px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            link.isExternal ? (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-lg font-medium transition-colors py-2 ${
                  scrolled ? 'text-gray-600 hover:text-gray-900' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleSectionClick(e, link.href)}
                className={`text-lg font-medium transition-colors py-2 ${
                  scrolled ? 'text-gray-600 hover:text-gray-900' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.label}
              </a>
            )
          ))}
          <a
            href="mailto:contact@mahvla.com"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold rounded-full bg-primary text-primary-foreground mt-4"
          >
            {t("nav.portal")}
            <Mail className="w-4 h-4" />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
