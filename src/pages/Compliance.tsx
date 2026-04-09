import { useState } from "react";
import { ShieldCheck, FileCheck, Leaf, ScrollText, Send } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { complianceFormSchema, complianceFormSchemaRequired, type ComplianceFormData } from "@/lib/validations";
import { useLanguage } from "@/contexts/LanguageContext";

const Compliance = () => {
  const { toast } = useToast();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const { ref: certsRef, isVisible: certsVisible } = useScrollAnimation();
  const { t } = useLanguage();

  const [isAnonymous, setIsAnonymous] = useState(false);
  const [formData, setFormData] = useState<ComplianceFormData>({
    name: "",
    email: "",
    reason: "",
    description: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ComplianceFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const complianceItems = [
    { icon: ScrollText, title: t("compliance.integrity"), subtitle: undefined, available: false },
    { icon: ShieldCheck, title: "ISO 37001", subtitle: t("compliance.antisuborno"), available: true },
    { icon: FileCheck, title: "ISO 9001", subtitle: t("compliance.quality"), available: true },
    { icon: Leaf, title: "ISO 14001", subtitle: t("compliance.environmental"), available: true },
  ];

  const reasonOptions = [
    t("reason.corruption"),
    t("reason.fraud"),
    t("reason.harassment"),
    t("reason.conflict"),
    t("reason.leak"),
    t("reason.discrimination"),
    t("reason.policy"),
    t("reason.other"),
  ];

  const validateForm = (): boolean => {
    const schema = isAnonymous ? complianceFormSchema : complianceFormSchemaRequired;
    const result = schema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ComplianceFormData, string>> = {};
      result.error.errors.forEach((error) => {
        const field = error.path[0] as keyof ComplianceFormData;
        fieldErrors[field] = error.message;
      });
      setErrors(fieldErrors);
      return false;
    }

    setErrors({});
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: t("compliance.toast.error.title"),
        description: t("compliance.toast.error.desc"),
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: t("compliance.toast.success.title"),
      description: t("compliance.toast.success.desc"),
    });

    setFormData({ name: "", email: "", reason: "", description: "" });
    setErrors({});
    setIsAnonymous(false);
    setIsSubmitting(false);
  };

  const handleInputChange = (field: keyof ComplianceFormData, value: string) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: undefined });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div 
            ref={contentRef}
            className={`grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16 scroll-fade-up ${contentVisible ? 'visible' : ''}`}
          >
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
                {t("compliance.title")} <span className="text-primary">{t("compliance.titleHighlight")}</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {t("compliance.desc1")}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("compliance.desc2")}
              </p>
            </div>

            <div>
              <div className="mb-3 text-center">
                <h2 className="text-2xl font-display font-bold text-foreground mb-2">
                  {t("compliance.report.title")}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {t("compliance.report.subtitle")}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 p-6 rounded-2xl bg-card border border-border">
                <div className="flex items-center space-x-3 p-3 rounded-xl bg-muted/50 border border-border">
                  <Checkbox
                    id="anonymous"
                    checked={isAnonymous}
                    onCheckedChange={(checked) => {
                      setIsAnonymous(checked as boolean);
                      if (checked) {
                        setErrors({ ...errors, name: undefined, email: undefined });
                      }
                    }}
                  />
                  <Label htmlFor="anonymous" className="text-sm font-medium cursor-pointer">
                    {t("compliance.anonymous")}
                  </Label>
                </div>

                {!isAnonymous && (
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t("compliance.name")}</Label>
                      <Input
                        id="name"
                        placeholder={t("compliance.name.placeholder")}
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className={`bg-background border-border ${errors.name ? 'border-destructive focus:ring-destructive/20' : ''}`}
                        maxLength={100}
                      />
                      {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t("compliance.email")}</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className={`bg-background border-border ${errors.email ? 'border-destructive focus:ring-destructive/20' : ''}`}
                        maxLength={255}
                      />
                      {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="reason">{t("compliance.reason")}</Label>
                  <select
                    id="reason"
                    value={formData.reason}
                    onChange={(e) => handleInputChange("reason", e.target.value)}
                    className={`w-full h-10 px-3 rounded-md bg-background border text-foreground text-sm focus:outline-none focus:ring-2 transition-colors ${
                      errors.reason 
                        ? 'border-destructive focus:ring-destructive/20' 
                        : 'border-border focus:ring-primary/20 focus:border-primary'
                    }`}
                  >
                    <option value="">{t("compliance.reason.placeholder")}</option>
                    {reasonOptions.map((reason) => (
                      <option key={reason} value={reason}>{reason}</option>
                    ))}
                  </select>
                  {errors.reason && <p className="text-xs text-destructive">{errors.reason}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">
                    {t("compliance.description")}
                    <span className="text-muted-foreground ml-2 text-xs font-normal">
                      ({formData.description.length}/2000)
                    </span>
                  </Label>
                  <Textarea
                    id="description"
                    placeholder={t("compliance.description.placeholder")}
                    value={formData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    rows={4}
                    maxLength={2000}
                    className={`bg-background border-border resize-none ${errors.description ? 'border-destructive focus:ring-destructive/20' : ''}`}
                  />
                  {errors.description && <p className="text-xs text-destructive">{errors.description}</p>}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-11 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      {t("compliance.submitting")}
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      {t("compliance.submit")}
                    </span>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  {t("compliance.privacyNote")}{" "}
                  <a href="/privacy" className="text-primary hover:underline">
                    {t("footer.privacy")}
                  </a>
                  .
                </p>
              </form>
            </div>
          </div>

          <div 
            ref={certsRef}
            className={`scroll-fade-up ${certsVisible ? 'visible' : ''}`}
          >
            <h2 className="text-xl font-display font-bold text-foreground mb-6 text-center">
              {t("compliance.certifications")}
            </h2>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {complianceItems.map((item) => (
                <div
                  key={item.title}
                  className={`group relative p-5 rounded-xl bg-card border border-border transition-all duration-300 text-center ${!item.available ? 'opacity-60' : ''}`}
                >
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-base font-display font-bold text-foreground mb-0.5">{item.title}</h3>
                    {item.subtitle && <p className="text-xs text-muted-foreground">{item.subtitle}</p>}
                    {!item.available && <p className="text-xs text-muted-foreground mt-1">{t("compliance.comingSoon")}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer showCta={false} />
    </div>
  );
};

export default Compliance;
