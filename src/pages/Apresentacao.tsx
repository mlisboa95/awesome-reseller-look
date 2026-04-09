import { useState, useEffect, useMemo } from "react";
import { ChevronLeft, ChevronRight, MapPin, Shield, Network, Cloud, Building2, Award, Briefcase, Server, ShieldCheck, FileCheck, BadgeCheck, Leaf, Mail, Phone, ArrowRight } from "lucide-react";

// Partner logos
import aristaLogo from "@/assets/partners/arista.jpg";
import checkpointLogo from "@/assets/partners/checkpoint.jpg";
import cyberarkLogo from "@/assets/partners/cyberark.jpg";
import exagridLogo from "@/assets/partners/exagrid.jpg";
import extremeLogo from "@/assets/partners/extreme.jpg";
import f5Logo from "@/assets/partners/f5.jpg";
import gigamonLogo from "@/assets/partners/gigamon.jpg";
import hpeLogo from "@/assets/partners/hpe.jpg";
import mitelLogo from "@/assets/partners/mitel.jpg";
import nutanixLogo from "@/assets/partners/nutanix.jpg";
import purestorageLogo from "@/assets/partners/purestorage.jpg";
import riverbedLogo from "@/assets/partners/riverbed.jpg";
import thalesLogo from "@/assets/partners/thales.jpg";
import trendLogo from "@/assets/partners/trend.jpg";
import veeamLogo from "@/assets/partners/veeam.jpg";
import logoMahvla from "@/assets/logo-mahvla-new.png";
import brazilMap from "@/assets/brazil-map.svg";

// Client logos
import serproLogo from "@/assets/clients/serpro.jpg";
import detranLogo from "@/assets/clients/detranap.jpg";
import mptoLogo from "@/assets/clients/mpto.jpg";
import metrodfLogo from "@/assets/clients/metrodf.jpg";
import pcdfLogo from "@/assets/clients/pcdf.jpg";
import dpfLogo from "@/assets/clients/dpf.jpg";
import tjesLogo from "@/assets/clients/tjes.jpg";
import ufgLogo from "@/assets/clients/ufg.jpg";
import tjtoLogo from "@/assets/clients/tjto.jpg";
import dpeLogo from "@/assets/clients/dpe.jpg";

const clientLogos = [
  { name: "Serpro", logo: serproLogo },
  { name: "Detran Amapá", logo: detranLogo },
  { name: "MP Tocantins", logo: mptoLogo },
  { name: "Metrô DF", logo: metrodfLogo },
  { name: "Polícia Civil DF", logo: pcdfLogo },
  { name: "Polícia Federal", logo: dpfLogo },
  { name: "TJ Espírito Santo", logo: tjesLogo },
  { name: "UFG", logo: ufgLogo },
  { name: "TJ Tocantins", logo: tjtoLogo },
  { name: "DPE Tocantins", logo: dpeLogo },
];

const partnerCategories = [
  {
    title: "Redes e Conectividade",
    icon: Network,
    partners: [
      { name: "Arista", logo: aristaLogo },
      { name: "Extreme", logo: extremeLogo },
      { name: "Gigamon", logo: gigamonLogo },
      { name: "HPE", logo: hpeLogo },
      { name: "Mitel", logo: mitelLogo },
      { name: "Riverbed", logo: riverbedLogo },
    ],
  },
  {
    title: "Cibersegurança",
    icon: Shield,
    partners: [
      { name: "Check Point", logo: checkpointLogo },
      { name: "CyberArk", logo: cyberarkLogo },
      { name: "F5", logo: f5Logo },
      { name: "Thales", logo: thalesLogo },
      { name: "Trend Micro", logo: trendLogo },
    ],
  },
  {
    title: "Infraestrutura e Dados",
    icon: Cloud,
    partners: [
      { name: "ExaGrid", logo: exagridLogo },
      { name: "HPE", logo: hpeLogo },
      { name: "Nutanix", logo: nutanixLogo },
      { name: "Pure Storage", logo: purestorageLogo },
      { name: "Veeam", logo: veeamLogo },
    ],
  },
];

const solutionCategories = [
  {
    title: "Redes e Conectividade",
    icon: Network,
    items: ["Switching e Routing corporativo", "Wi-Fi corporativo e alta densidade", "WAN, SD-WAN e otimização", "Observabilidade de rede", "Telefonia IP e videoconferência"],
  },
  {
    title: "Cibersegurança",
    icon: ShieldCheck,
    items: ["Firewall NGFW e segmentação", "Segurança de aplicações (WAF)", "Proteção de endpoint (EDR/XDR)", "Segurança de e-mail", "Segurança em ambientes cloud"],
  },
  {
    title: "Infraestrutura e Dados",
    icon: Server,
    items: ["Infraestrutura hiperconvergente", "Servidores e armazenamento", "Backup e recuperação", "Proteção contra ransomware", "Continuidade de negócios"],
  },
];

const locationMarkers = [
  { city: "Brasília", state: "DF", top: "52%", left: "47%", isHQ: true },
  { city: "Boa Vista", state: "RR", top: "8%", left: "30%", isHQ: false },
  { city: "Campo Grande", state: "MS", top: "66%", left: "33%", isHQ: false },
  { city: "Cuiabá", state: "MT", top: "52%", left: "33%", isHQ: false },
  { city: "Goiânia", state: "GO", top: "56%", left: "44%", isHQ: false },
  { city: "João Pessoa", state: "PB", top: "32%", left: "82%", isHQ: false },
  { city: "Macapá", state: "AP", top: "12%", left: "48%", isHQ: false },
  { city: "Maceió", state: "AL", top: "40%", left: "82%", isHQ: false },
  { city: "Natal", state: "RN", top: "28%", left: "82%", isHQ: false },
  { city: "Palmas", state: "TO", top: "42%", left: "50%", isHQ: false },
  { city: "Porto Velho", state: "RO", top: "35%", left: "22%", isHQ: false },
  { city: "Vitória", state: "ES", top: "60%", left: "72%", isHQ: false },
];

const highlights = [
  { icon: Award, value: "22", label: "Anos de Experiência" },
  { icon: BadgeCheck, value: "50+", label: "Certificações Ativas" },
  { icon: Briefcase, value: "200+", label: "Projetos Entregues" },
];

const isoHighlights = [
  { icon: FileCheck, label: "ISO 9001" },
  { icon: Leaf, label: "ISO 14001" },
  { icon: ShieldCheck, label: "ISO 37001" },
];

// Floating particles component
const FloatingParticles = ({ count = 25 }: { count?: number }) => {
  const particles = useMemo(() => 
    [...Array(count)].map((_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 25 + 20,
      delay: Math.random() * 10,
      opacity: Math.random() * 0.3 + 0.1,
    })), [count]
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-primary"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            opacity: particle.opacity,
            animation: `float-particle ${particle.duration}s ease-in-out ${particle.delay}s infinite`,
          }}
        />
      ))}
      <style>{`
        @keyframes float-particle {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.1; }
          25% { transform: translate(20px, -30px) scale(1.1); opacity: 0.3; }
          50% { transform: translate(-15px, -60px) scale(0.9); opacity: 0.15; }
          75% { transform: translate(25px, -30px) scale(1.05); opacity: 0.25; }
        }
      `}</style>
    </div>
  );
};

const Apresentacao = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const totalSlides = 6;

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const nextSlide = () => goToSlide((currentSlide + 1) % totalSlides);
  const prevSlide = () => goToSlide((currentSlide - 1 + totalSlides) % totalSlides);

  // Keyboard and touch navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); nextSlide(); }
      else if (e.key === "ArrowLeft") prevSlide();
    };

    let touchStartX = 0;
    const handleTouchStart = (e: TouchEvent) => { touchStartX = e.changedTouches[0].screenX; };
    const handleTouchEnd = (e: TouchEvent) => {
      const diff = touchStartX - e.changedTouches[0].screenX;
      if (Math.abs(diff) > 50) diff > 0 ? nextSlide() : prevSlide();
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [currentSlide, isAnimating]);

  const slideClasses = (index: number) => `
    absolute inset-0 flex items-center justify-center p-6 md:p-12 lg:p-16 transition-all duration-600
    ${currentSlide === index ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
  `;

  const animateIn = (index: number, delay: number = 0) => `
    transition-all duration-700 
    ${currentSlide === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
  `;

  return (
    <div className="fixed inset-0 bg-background overflow-hidden select-none">
      {/* Background Effects */}
      <FloatingParticles count={30} />
      
      {/* Gradient Orbs */}
      <div 
        className="absolute w-[800px] h-[800px] rounded-full opacity-20 blur-[150px] transition-all duration-[2000ms]"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 60%)",
          top: currentSlide % 2 === 0 ? "-20%" : "30%",
          left: currentSlide % 2 === 0 ? "-10%" : "50%",
        }}
      />
      <div 
        className="absolute w-[600px] h-[600px] rounded-full opacity-15 blur-[120px] transition-all duration-[2500ms]"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)",
          bottom: currentSlide % 3 === 0 ? "0%" : "30%",
          right: currentSlide % 2 === 0 ? "-5%" : "40%",
        }}
      />

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Noise Texture */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Slide Indicators */}
      <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        {[...Array(totalSlides)].map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className="group relative touch-manipulation"
            aria-label={`Ir para slide ${i + 1}`}
          >
            <div
              className={`w-1.5 transition-all duration-500 rounded-full ${
                currentSlide === i
                  ? "h-10 bg-gradient-to-b from-primary to-primary/50 shadow-lg shadow-primary/30"
                  : "h-5 bg-muted-foreground/30 group-hover:bg-muted-foreground/50"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 bottom-8 z-50 p-3 rounded-full bg-card/50 backdrop-blur border border-border hover:bg-card hover:border-primary/50 transition-all touch-manipulation"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-5 h-5 text-foreground" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 bottom-8 z-50 p-3 rounded-full bg-card/50 backdrop-blur border border-border hover:bg-card hover:border-primary/50 transition-all touch-manipulation"
        aria-label="Próximo slide"
      >
        <ChevronRight className="w-5 h-5 text-foreground" />
      </button>

      {/* Slide Counter */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 text-sm text-muted-foreground font-medium">
        <span className="text-primary">{String(currentSlide + 1).padStart(2, '0')}</span>
        <span className="mx-2">/</span>
        <span>{String(totalSlides).padStart(2, '0')}</span>
      </div>

      {/* ===== SLIDES ===== */}
      
      {/* Slide 1: Intro */}
      <div className={slideClasses(0)}>
        <div className="text-center max-w-5xl mx-auto">
          <div className={animateIn(0)} style={{ transitionDelay: '100ms' }}>
            <img src={logoMahvla} alt="Grupo Mahvla" className="h-20 md:h-28 mx-auto mb-8" />
          </div>

          <h1 className={`text-4xl md:text-7xl lg:text-8xl font-display font-bold mb-6 tracking-tight ${animateIn(0)}`} style={{ transitionDelay: '200ms' }}>
            <span className="text-foreground">Apresentação</span>
            <br />
            <span className="text-primary">Institucional</span>
          </h1>

          <p className={`text-lg md:text-2xl text-muted-foreground mb-12 font-light max-w-2xl mx-auto ${animateIn(0)}`} style={{ transitionDelay: '300ms' }}>
            Há 22 anos gerando resultados com tecnologia
          </p>

          <div className={`flex flex-wrap justify-center gap-6 md:gap-10 mb-10 ${animateIn(0)}`} style={{ transitionDelay: '400ms' }}>
            {highlights.map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-3 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <item.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">{item.value}</div>
                <div className="text-xs md:text-sm text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>

          <div className={`flex flex-wrap justify-center gap-3 ${animateIn(0)}`} style={{ transitionDelay: '500ms' }}>
            {isoHighlights.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-card/80 backdrop-blur rounded-full px-4 py-2 border border-border">
                <item.icon className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide 2: Partners */}
      <div className={slideClasses(1)}>
        <div className="max-w-7xl w-full mx-auto">
          <h2 className={`text-3xl md:text-5xl lg:text-6xl font-display font-bold text-center mb-10 md:mb-14 ${animateIn(1)}`}>
            <span className="text-foreground">Nossos</span> <span className="text-primary">Parceiros</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {partnerCategories.map((category, idx) => (
              <div
                key={category.title}
                className={`group relative ${animateIn(1)}`}
                style={{ transitionDelay: `${150 + idx * 100}ms` }}
              >
                <div className="absolute -inset-1 bg-primary/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                
                <div className="relative bg-card/80 backdrop-blur-xl rounded-2xl p-5 md:p-6 border border-border hover:border-primary/40 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-3 rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/25">
                      <category.icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-semibold text-base md:text-lg text-foreground">
                      {category.title}
                    </h3>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    {category.partners.map((partner) => (
                      <div
                        key={partner.name}
                        className="bg-background rounded-xl p-2.5 flex items-center justify-center hover:bg-muted transition-colors group/logo"
                      >
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="h-8 md:h-10 w-auto object-contain group-hover/logo:scale-110 transition-transform"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide 3: Solutions */}
      <div className={slideClasses(2)}>
        <div className="max-w-7xl w-full mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className={`text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-3 ${animateIn(2)}`}>
              <span className="text-foreground">Nossas</span> <span className="text-primary">Soluções</span>
            </h2>
            <p className={`text-base md:text-lg text-muted-foreground max-w-2xl mx-auto ${animateIn(2)}`} style={{ transitionDelay: '100ms' }}>
              Ecossistema de soluções que atendem as necessidades tecnológicas da sua empresa
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {solutionCategories.map((category, idx) => (
              <div
                key={category.title}
                className={`group relative ${animateIn(2)}`}
                style={{ transitionDelay: `${150 + idx * 100}ms` }}
              >
                <div className="absolute -inset-1 bg-primary/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                
                <div className="relative h-full bg-card/80 backdrop-blur-xl rounded-2xl p-5 md:p-6 border border-border hover:border-primary/40 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-3 rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/25">
                      <category.icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-bold text-base md:text-lg text-foreground">
                      {category.title}
                    </h3>
                  </div>
                  
                  <ul className="space-y-2.5">
                    {category.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide 4: National Presence */}
      <div className={slideClasses(3)}>
        <div className="max-w-7xl w-full mx-auto">
          <h2 className={`text-3xl md:text-5xl lg:text-6xl font-display font-bold text-center mb-8 md:mb-12 ${animateIn(3)}`}>
            <span className="text-foreground">Presença</span> <span className="text-primary">Nacional</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className={`relative ${animateIn(3)}`} style={{ transitionDelay: '150ms' }}>
              <div className="relative w-full max-w-sm mx-auto aspect-square">
                <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full" />
                
                <img
                  src={brazilMap}
                  alt="Mapa do Brasil"
                  className="w-full h-full object-contain relative z-10"
                  style={{ filter: "brightness(0) invert(1) opacity(0.2)" }}
                />

                {locationMarkers.filter(loc => loc.isHQ).map((loc) => (
                  <div key={loc.city} className="absolute z-20" style={{ top: loc.top, left: loc.left }}>
                    <div className="relative">
                      <div className="w-5 h-5 bg-primary rounded-full animate-ping absolute opacity-40" />
                      <div className="w-5 h-5 bg-primary rounded-full relative z-10 shadow-lg shadow-primary/50 flex items-center justify-center">
                        <Building2 className="w-3 h-3 text-primary-foreground" />
                      </div>
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] font-bold px-2 py-0.5 rounded whitespace-nowrap">
                        SEDE
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={`space-y-5 ${animateIn(3)}`} style={{ transitionDelay: '250ms' }}>
              <div className="bg-gradient-to-r from-primary/20 to-transparent rounded-2xl p-5 border-l-4 border-primary">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-primary text-primary-foreground">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Sede Principal</p>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-foreground">Brasília - DF</h3>
                  </div>
                </div>
              </div>

              <p className="text-base md:text-lg text-muted-foreground">
                Atuação em <span className="text-primary font-bold">12 estados</span> com entregas em todo território nacional
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {locationMarkers.filter(l => !l.isHQ).map((location) => (
                  <div
                    key={location.city}
                    className="flex items-center gap-2 bg-card/80 backdrop-blur rounded-lg px-3 py-2 border border-border"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                    <span className="text-xs text-foreground">
                      {location.city} <span className="text-muted-foreground">- {location.state}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide 5: Clients */}
      <div className={slideClasses(4)}>
        <div className="max-w-7xl w-full mx-auto">
          <div className="text-center mb-8 md:mb-10">
            <h2 className={`text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-3 ${animateIn(4)}`}>
              <span className="text-foreground">Nossos</span> <span className="text-primary">Clientes</span>
            </h2>
            <p className={`text-base md:text-lg text-muted-foreground ${animateIn(4)}`} style={{ transitionDelay: '100ms' }}>
              Atendemos órgãos públicos e empresas de grande porte em todo Brasil
            </p>
          </div>

          <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4 ${animateIn(4)}`} style={{ transitionDelay: '200ms' }}>
            {clientLogos.map((client, idx) => (
              <div
                key={client.name}
                className="group relative"
                style={{ transitionDelay: `${250 + idx * 50}ms` }}
              >
                <div className="absolute -inset-1 bg-primary/30 rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500" />
                
                <div className="relative bg-white rounded-xl p-3 md:p-4 shadow-lg group-hover:shadow-primary/20 transition-all duration-300 group-hover:-translate-y-1 aspect-[4/3] flex items-center justify-center">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-w-full max-h-full w-auto h-auto object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className={`mt-8 flex items-center justify-center gap-3 text-muted-foreground text-sm ${animateIn(4)}`} style={{ transitionDelay: '300ms' }}>
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary/50" />
            <span className="text-primary font-medium">+200 projetos entregues</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary/50" />
          </div>
        </div>
      </div>

      {/* Slide 6: CTA */}
      <div className={slideClasses(5)}>
        <div className="text-center max-w-3xl mx-auto">
          <div className={animateIn(5)} style={{ transitionDelay: '100ms' }}>
            <img src={logoMahvla} alt="Grupo Mahvla" className="h-16 md:h-20 mx-auto mb-8" />
          </div>

          <h2 className={`text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 ${animateIn(5)}`} style={{ transitionDelay: '200ms' }}>
            Vamos <span className="text-primary">conversar?</span>
          </h2>

          <p className={`text-lg md:text-xl text-muted-foreground mb-10 ${animateIn(5)}`} style={{ transitionDelay: '300ms' }}>
            Fale com nossos especialistas e descubra como podemos ajudar sua organização
          </p>

          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 ${animateIn(5)}`} style={{ transitionDelay: '400ms' }}>
            <a
              href="mailto:contato@mahvla.com.br"
              className="inline-flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/25"
            >
              <Mail className="w-5 h-5" />
              contato@mahvla.com.br
            </a>
            <a
              href="tel:+556121914900"
              className="inline-flex items-center gap-3 px-6 py-3 bg-card border border-border text-foreground font-medium rounded-xl hover:bg-muted hover:border-primary/50 transition-all"
            >
              <Phone className="w-5 h-5 text-primary" />
              (61) 2191-4900
            </a>
          </div>

          <div className={`text-sm text-muted-foreground ${animateIn(5)}`} style={{ transitionDelay: '500ms' }}>
            SRTVS Qd 701 Cj. L N. 38, Bloco 01, Salas 8, 9 e 10 — Brasília/DF
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apresentacao;
