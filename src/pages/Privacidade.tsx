import { Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const Privacidade = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  const sections = [
    {
      title: "1. Introduction",
      content: "Mahvla Group LLC is committed to protecting the privacy and personal data of its clients, partners, and website visitors. This Privacy Policy describes how we collect, use, store, and protect your personal information in compliance with applicable data protection laws, including the California Consumer Privacy Act (CCPA) and other relevant U.S. regulations."
    },
    {
      title: "2. Data We Collect",
      content: "We may collect the following types of information:",
      list: [
        "Identification data: name, email address, phone number, job title, and company",
        "Browsing data: IP address, browser type, pages visited",
        "Cookies and similar technologies to enhance user experience",
        "Information voluntarily provided through contact forms"
      ]
    },
    {
      title: "3. How We Use Your Data",
      content: "We use your data to:",
      list: [
        "Provide and improve our services",
        "Respond to inquiries and requests",
        "Send relevant communications about our products and services",
        "Comply with legal and regulatory obligations",
        "Analyze website usage to improve the user experience"
      ]
    },
    {
      title: "4. Cookies",
      content: "We use cookies for the following purposes:",
      list: [
        "Essential cookies: required for the website to function properly",
        "Preference cookies: store your browsing preferences",
        "Analytical cookies: help us understand how you use the website"
      ],
      extra: "You can manage your cookie preferences through your browser settings."
    },
    {
      title: "5. Data Sharing",
      content: "We do not sell, rent, or share your personal information with third parties for marketing purposes. We may share data only with business partners who assist us in providing our services, always under confidentiality agreements and in compliance with applicable privacy laws."
    },
    {
      title: "6. Data Security",
      content: "We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. Our commitment to quality and security is reflected in our operational standards and certifications."
    },
    {
      title: "7. Your Rights",
      content: "Depending on your jurisdiction, you may have the right to:",
      list: [
        "Access and review your personal data",
        "Request correction of inaccurate or incomplete data",
        "Request deletion of your personal data",
        "Opt out of the sale or sharing of your personal information",
        "Withdraw consent at any time"
      ]
    },
    {
      title: "8. Contact",
      content: "To exercise your rights or ask questions about this Privacy Policy, please contact us:",
      contact: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div 
            ref={headerRef}
            className={`max-w-3xl mx-auto text-center mb-16 scroll-fade-up ${headerVisible ? 'visible' : ''}`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Privacy Compliant</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-foreground mb-4 leading-[1.1]">
              Privacy <span className="text-primary">Policy</span>
            </h1>
            
            <p className="text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Content */}
          <div 
            ref={contentRef}
            className={`max-w-3xl mx-auto space-y-6 scroll-fade-up ${contentVisible ? 'visible' : ''}`}
          >
            {sections.map((section, index) => (
              <div 
                key={index}
                className="p-6 md:p-8 rounded-2xl bg-card border border-border"
              >
                <h2 className="text-xl font-display font-bold text-foreground mb-4">
                  {section.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {section.content}
                </p>
                
                {section.list && (
                  <ul className="mt-4 space-y-2">
                    {section.list.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                
                {section.extra && (
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    {section.extra}
                  </p>
                )}
                
                {section.contact && (
                  <div className="mt-4 space-y-2">
                    <p className="text-foreground">
                      <span className="text-muted-foreground">Email:</span>{" "}
                      <a href="mailto:privacy@mahvla.com" className="text-primary hover:underline">
                        privacy@mahvla.com
                      </a>
                    </p>
                    <p className="text-foreground">
                      <span className="text-muted-foreground">Address:</span>{" "}
                      <span className="text-muted-foreground">5550 Glades Road, Suite 511, Boca Raton, FL 33431, United States</span>
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer showCta={false} />
    </div>
  );
};

export default Privacidade;
