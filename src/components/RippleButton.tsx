import { useState, ReactNode } from "react";

interface RippleButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
}

interface Ripple {
  x: number;
  y: number;
  id: number;
}

const RippleButton = ({ children, className = "", onClick, href }: RippleButtonProps) => {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newRipple: Ripple = { x, y, id: Date.now() };
    setRipples((prev) => [...prev, newRipple]);
    
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 800);

    onClick?.();
  };

  const Component = href ? 'a' : 'button';

  return (
    <Component
      href={href}
      onClick={handleClick}
      className={`relative overflow-hidden ${className}`}
    >
      {children}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute bg-white/30 rounded-full animate-ripple pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
    </Component>
  );
};

export default RippleButton;
