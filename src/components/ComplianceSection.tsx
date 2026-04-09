import { ShieldCheck, FileCheck, Download, Leaf, ScrollText } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const complianceItems = [
  {
    icon: ScrollText,
    title: "Integridade",
    fileName: "documentos-integridade.pdf",
    available: false,
  },
  {
    icon: ShieldCheck,
    title: "ISO 37001",
    subtitle: "Antissuborno",
    fileName: "/docs/certificado-iso-37001.pdf",
    available: true,
  },
  {
    icon: FileCheck,
    title: "ISO 9001",
    subtitle: "Qualidade",
    fileName: "/docs/certificado-iso-9001.pdf",
    available: true,
  },
  {
    icon: Leaf,
    title: "ISO 14001",
    subtitle: "Ambiental",
    fileName: "/docs/certificado-iso-14001.pdf",
    available: true,
  },
];

const ComplianceSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();

  return (
    <section id="compliance" className="py-24 md:py-32 relative overflow-hidden bg-background">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`mb-16 md:mb-20 max-w-3xl scroll-fade-up ${headerVisible ? 'visible' : ''}`}
        >
          <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Certificações
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
            Conformidade e <span className="text-primary">excelência</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Nosso compromisso com segurança, privacidade e qualidade é respaldado por certificações internacionais.
          </p>
        </div>

        {/* Download Cards Grid */}
        <div 
          ref={gridRef}
          className={`grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 stagger-children ${gridVisible ? 'visible' : ''}`}
        >
          {complianceItems.map((item) => (
            item.available ? (
              <a
                key={item.title}
                href={item.fileName}
                download={item.title + ".pdf"}
                className="group relative p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-300 text-center"
              >
                {/* Hover effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-foreground mb-1">
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <p className="text-sm text-muted-foreground mb-4">{item.subtitle}</p>
                  )}
                  <div className="flex items-center justify-center gap-2 text-sm text-primary font-medium">
                    <Download className="w-4 h-4" />
                    Download
                  </div>
                </div>
              </a>
            ) : (
              <button
                key={item.title}
                onClick={() => {
                  alert(`${item.title}: arquivo será disponibilizado em breve`);
                }}
                className="group relative p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-300 text-center opacity-60"
              >
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">Em breve</p>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground font-medium">
                    <Download className="w-4 h-4" />
                    Download
                  </div>
                </div>
              </button>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;
