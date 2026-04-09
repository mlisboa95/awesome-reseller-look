import { ReactNode, useRef, useState } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glowOnHover?: boolean;
}

const GlassCard = ({ children, className = "", glowOnHover = true }: GlassCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        relative p-8 rounded-2xl
        bg-card/80 backdrop-blur-xl
        border border-border/50
        transition-all duration-500
        hover:border-primary/40
        hover:shadow-[0_8px_32px_hsla(200,100%,50%,0.15)]
        overflow-hidden
        ${className}
      `}
    >
      {/* Mouse-following glow effect */}
      {glowOnHover && isHovered && (
        <div
          className="absolute w-64 h-64 rounded-full pointer-events-none transition-opacity duration-300"
          style={{
            left: mousePosition.x - 128,
            top: mousePosition.y - 128,
            background: "radial-gradient(circle, hsla(200, 100%, 50%, 0.15) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
      )}
      
      {/* Glass reflection */}
      <div 
        className="absolute inset-0 rounded-2xl opacity-50 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, hsla(0, 0%, 100%, 0.1) 0%, transparent 50%, hsla(0, 0%, 0%, 0.1) 100%)",
        }}
      />
      
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GlassCard;
