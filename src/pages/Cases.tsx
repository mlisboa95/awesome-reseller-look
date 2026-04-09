import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Cases = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t("cases.title")}
            </h1>
            <p className="text-metallic-gray text-lg mb-12">
              {t("cases.description")}
            </p>
            
            <div className="grid gap-8">
              <div className="p-8 rounded-2xl bg-card/50 border border-border animate-border-glow card-gradient-overlay">
                <p className="text-muted-foreground text-center py-12">
                  {t("cases.comingSoon")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cases;
