import { useEffect, useRef, useState, ReactNode } from "react";

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  fadeIn?: boolean;
}

const ParallaxSection = ({ 
  children, 
  className = "", 
  speed = 0.15,
  fadeIn = true 
}: ParallaxSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementCenter = rect.top + rect.height / 2;
      const distanceFromCenter = elementCenter - windowHeight / 2;
      
      // Calculate parallax offset based on distance from viewport center
      setOffset(distanceFromCenter * speed);
      
      // Check visibility for fade-in effect
      if (rect.top < windowHeight * 0.85) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div
      ref={ref}
      className={`${className} ${fadeIn ? 'transition-all duration-700 ease-out' : ''}`}
      style={{
        transform: `translateY(${offset}px)`,
        opacity: fadeIn ? (isVisible ? 1 : 0) : 1,
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxSection;
