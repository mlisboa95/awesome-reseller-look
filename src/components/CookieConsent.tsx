import { useState, useEffect } from "react";
import { X } from "lucide-react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Show banner after a small delay
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-card border-t border-white/30 animate-fade-in">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm text-white/80">
            Utilizamos cookies para melhorar sua experiência de navegação. Ao continuar, você concorda com nossa{" "}
            <a href="/privacidade" className="text-accent hover:underline">
              Política de Privacidade
            </a>
            .
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handleDecline}
            className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors"
          >
            Recusar
          </button>
          <button
            onClick={handleAccept}
            className="px-6 py-2 text-sm font-medium rounded-md bg-accent text-white hover:bg-accent/90 transition-all duration-300"
          >
            Aceitar
          </button>
        </div>
        <button
          onClick={handleDecline}
          className="absolute top-2 right-2 md:static p-1 text-white/50 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
