import { useEffect, useState, useRef } from "react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

const stats: StatItem[] = [
  { 
    value: 22, 
    suffix: "+", 
    label: "anos de experiência",
    description: "no mercado de TI"
  },
  { 
    value: 50, 
    suffix: "+", 
    label: "certificações",
    description: "técnicas ativas"
  },
  { 
    value: 200, 
    suffix: "+", 
    label: "projetos",
    description: "entregues com sucesso"
  },
  { 
    value: 100, 
    suffix: "+", 
    label: "clientes",
    description: "atendidos"
  },
];

const AnimatedNumber = ({ value, suffix, isVisible }: { value: number; suffix: string; isVisible: boolean }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isVisible && !hasAnimated.current) {
      hasAnimated.current = true;
      const duration = 2000;
      const steps = 60;
      const stepValue = value / steps;
      const stepDuration = duration / steps;

      let current = 0;
      const timer = setInterval(() => {
        current += stepValue;
        if (current >= value) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(current));
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isVisible, value]);

  return (
    <span className="tabular-nums">
      {displayValue}{suffix}
    </span>
  );
};

const StatsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="numeros" className="py-12 md:py-16 relative overflow-hidden bg-[#050505]">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div 
          ref={ref}
          className={`flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 stagger-children ${isVisible ? 'visible' : ''}`}
        >
          {/* Section header - inline on desktop */}
          <div className="lg:max-w-xs flex-shrink-0">
            <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-2">
              Nossos Números
            </p>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white">
              Resultados comprovados
            </h2>
          </div>

          {/* Stats in horizontal row */}
          <div className="flex flex-wrap lg:flex-nowrap items-center gap-6 lg:gap-0">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="group relative flex items-center"
              >
                {/* Vertical separator */}
                {index > 0 && (
                  <div className="hidden lg:block w-px h-16 bg-white/10 mx-8" />
                )}
                
                <div className="text-center lg:text-left">
                  {/* Number */}
                  <div className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
                    <AnimatedNumber value={stat.value} suffix={stat.suffix} isVisible={isVisible} />
                  </div>
                  {/* Label */}
                  <p className="text-sm font-medium text-white/70">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
