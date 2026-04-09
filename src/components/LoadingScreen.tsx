import { useEffect, useState } from "react";
import logoMahvla from "@/assets/logo-mahvla-footer.png";

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 1200);
    const removeTimer = setTimeout(() => setIsLoading(false), 1700);
    return () => { clearTimeout(timer); clearTimeout(removeTimer); };
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-all duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div
        className="absolute w-[400px] h-[400px] rounded-full opacity-[0.08]"
        style={{
          background: "radial-gradient(circle, hsl(24, 100%, 50%) 0%, transparent 60%)",
          filter: "blur(80px)",
        }}
      />
      <div className="relative flex flex-col items-center gap-8">
        <img src={logoMahvla} alt="Mahvla" className="h-14 object-contain animate-pulse" />
        <div className="w-32 h-1 bg-border rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full animate-[loading_1.2s_ease-out_forwards]" />
        </div>
      </div>
      <style>{`@keyframes loading { 0% { width: 0; } 100% { width: 100%; } }`}</style>
    </div>
  );
};

export default LoadingScreen;
