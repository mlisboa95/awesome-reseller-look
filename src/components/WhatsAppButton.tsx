import { MessageCircle } from "lucide-react";
import { forwardRef } from "react";

const WhatsAppButton = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className="fixed bottom-6 right-6 z-50">
      {/* WhatsApp */}
      <a
        href="https://wa.me/556121914900"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-lg shadow-[#25D366]/30 hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/40 transition-all duration-300"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
});

WhatsAppButton.displayName = "WhatsAppButton";

export default WhatsAppButton;
