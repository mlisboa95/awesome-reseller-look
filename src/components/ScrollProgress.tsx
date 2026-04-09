import { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setProgress(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-1 bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-primary via-primary to-accent transition-all duration-150 ease-out"
        style={{ 
          width: `${progress}%`,
          boxShadow: '0 0 20px hsla(200, 100%, 50%, 0.5), 0 0 40px hsla(200, 100%, 50%, 0.3)'
        }}
      />
    </div>
  );
};

export default ScrollProgress;
