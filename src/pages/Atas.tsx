import { FileText, Calendar, Search, Download } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

const Atas = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div 
            ref={headerRef}
            className={`max-w-3xl mb-12 scroll-fade-up ${headerVisible ? 'visible' : ''}`}
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
              {t("atas.title")} <span className="text-primary">{t("atas.titleHighlight")}</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("atas.description")}
            </p>
          </div>

          <div 
            ref={contentRef}
            className={`scroll-fade-up ${contentVisible ? 'visible' : ''}`}
          >
            <div className="mb-8">
              <div className="relative max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder={t("atas.search")}
                  disabled
                  className="w-full h-12 pl-12 pr-4 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>
            </div>

            <div className="p-12 rounded-2xl bg-card border border-border">
              <div className="flex flex-col items-center justify-center text-center max-w-md mx-auto">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Calendar className="w-10 h-10 text-primary" />
                </div>
                
                <h3 className="text-xl font-display font-bold text-foreground mb-3">
                  {t("atas.preparing")}
                </h3>
                
                <p className="text-muted-foreground mb-6">
                  {t("atas.preparingDesc")}
                </p>

                <div className="w-full space-y-3 opacity-50">
                  {[1, 2, 3].map((i) => (
                    <div 
                      key={i}
                      className="flex items-center justify-between p-4 rounded-xl bg-muted/50 border border-border"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <FileText className="w-5 h-5 text-primary/50" />
                        </div>
                        <div className="text-left">
                          <div className="h-4 w-32 bg-muted rounded mb-1" />
                          <div className="h-3 w-24 bg-muted rounded" />
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Download className="w-4 h-4" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer showCta={false} />
    </div>
  );
};

export default Atas;
