import { FileText } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const Terms = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: "By accessing and using the Mahvla Group LLC website and services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you should not use our website or services."
    },
    {
      title: "2. Services",
      content: "Mahvla Group LLC provides technology integration services including, but not limited to, network infrastructure, cybersecurity, cloud and hybrid environments, physical security, managed operations, and consulting. The scope of services for each engagement is defined in individual agreements between Mahvla and the client."
    },
    {
      title: "3. Use of Website",
      content: "You agree to use this website only for lawful purposes. You may not:",
      list: [
        "Use the website in any way that violates applicable laws or regulations",
        "Attempt to gain unauthorized access to any part of the website or its systems",
        "Use the website to transmit harmful, offensive, or misleading content",
        "Reproduce, distribute, or modify any content without prior written consent"
      ]
    },
    {
      title: "4. Intellectual Property",
      content: "All content on this website — including text, graphics, logos, images, and software — is the property of Mahvla Group LLC or its licensors and is protected by applicable intellectual property laws. Unauthorized use of any materials may violate copyright, trademark, and other laws."
    },
    {
      title: "5. Limitation of Liability",
      content: "Mahvla Group LLC provides this website and its content on an \"as is\" basis. To the fullest extent permitted by law, we disclaim all warranties, express or implied. We shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of or inability to use our website or services."
    },
    {
      title: "6. Third-Party Links",
      content: "Our website may contain links to third-party websites or services. Mahvla Group LLC is not responsible for the content, privacy practices, or availability of those external sites. Accessing third-party links is at your own risk."
    },
    {
      title: "7. Confidentiality",
      content: "Any information shared between Mahvla and its clients during service engagements is treated as confidential, subject to the terms of applicable non-disclosure or service agreements."
    },
    {
      title: "8. Modifications",
      content: "Mahvla Group LLC reserves the right to update or modify these Terms of Service at any time without prior notice. Continued use of the website following any changes constitutes acceptance of the revised terms."
    },
    {
      title: "9. Governing Law",
      content: "These Terms of Service are governed by and construed in accordance with the laws of the State of Florida, United States, without regard to its conflict of law principles."
    },
    {
      title: "10. Contact",
      content: "If you have questions about these Terms of Service, please contact us:",
      contact: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div 
            ref={headerRef}
            className={`max-w-3xl mx-auto text-center mb-16 scroll-fade-up ${headerVisible ? 'visible' : ''}`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <FileText className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Legal</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-foreground mb-4 leading-[1.1]">
              Terms of <span className="text-primary">Service</span>
            </h1>
            
            <p className="text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

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
                
                {section.contact && (
                  <div className="mt-4 space-y-2">
                    <p className="text-foreground">
                      <span className="text-muted-foreground">Email:</span>{" "}
                      <a href="mailto:legal@mahvla.com" className="text-primary hover:underline">
                        legal@mahvla.com
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

export default Terms;