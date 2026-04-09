import { ChevronDown } from "lucide-react";

const ScrollIndicator = () => {
  const handleClick = () => {
    const statsSection = document.getElementById("sobre");
    if (statsSection) {
      const headerOffset = 120;
      const elementPosition = statsSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <button
      onClick={handleClick}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors duration-300 group cursor-pointer"
      aria-label="Scroll para ver mais"
    >
      <span className="text-xs font-medium tracking-wider uppercase opacity-70 group-hover:opacity-100 transition-opacity">
        Descubra mais
      </span>
      <div className="relative w-6 h-10 rounded-full border-2 border-white/30 group-hover:border-white/50 transition-colors">
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1 h-2 rounded-full bg-white/70 animate-scroll-mouse" />
      </div>
      <ChevronDown className="w-5 h-5 animate-bounce-slow opacity-60 group-hover:opacity-100" />

      <style>{`
        @keyframes scroll-mouse {
          0%, 100% {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
          }
          50% {
            transform: translateX(-50%) translateY(12px);
            opacity: 0.3;
          }
        }

        .animate-scroll-mouse {
          animation: scroll-mouse 1.5s ease-in-out infinite;
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(4px);
          }
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </button>
  );
};

export default ScrollIndicator;
