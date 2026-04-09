import { createContext, useContext, useCallback, ReactNode } from "react";

interface LanguageContextType {
  language: "en";
  setLanguage: (lang: "en") => void;
  t: (key: string) => string;
}

const translations: Record<string, string> = {
  // Header
  "nav.about": "About Us",
  "nav.solutions": "Solutions",
  "nav.partners": "Partners",
  "nav.atas": "Price Records",
  "nav.compliance": "Compliance",
  "nav.portal": "Client Portal",

  // Hero
  "hero.eyebrow": "Design. Execution. Delivery.",
  "hero.title1": "Technology,",
  "hero.title2": "Integration",
  "hero.title3": "and Results.",
  "hero.cta1": "Our Solutions",
  "hero.cta2": "About Mahvla",

  // About
  "about.label": "About Us",
  "about.title": "Over two decades delivering with",
  "about.titleHighlight": "consistency",
  "about.description": "Founded in 2004, Mahvla Group LLC is a technology integrator that has grown alongside its clients. Our model is to deepen long-term partnerships, project by project, with technical proximity, methodology, and transparency at every stage.",
  "about.stat1": "years of experience",
  "about.stat2": "active certifications",
  "about.stat3": "projects delivered",
  "about.stat4": "clients served",

  // Services
  "services.label": "Our Solutions",
  "services.title": "Solutions that",
  "services.titleHighlight": "integrate",
  "services.s1.title": "Networks & Connectivity",
  "services.s1.desc": "Architecture, integration and operation of corporate network solutions, covering LAN/WLAN, WAN and MAN, SD-WAN, performance monitoring (NPM), network operations (NOC), IP telephony and video conferencing.",
  "services.s2.title": "Cybersecurity",
  "services.s2.desc": "Architecture, integration and operation of security solutions, including NGFW, WAF, EDR/XDR, ZTNA and SASE, identity management (IAM), privileged access (PAM), email and collaboration protection.",
  "services.s3.title": "Infrastructure & Cloud",
  "services.s3.desc": "Architecture, integration and operation of on-premises, hybrid and cloud environments, including hyperconverged infrastructure (HCI), storage, servers, virtualization and containers.",
  "services.s4.title": "Electronic Security & Smart Cities",
  "services.s4.desc": "Architecture, integration and operation of electronic security solutions, including CCTV, access control, license plate reading (LPR), facial recognition and smart city solutions.",
  "services.s5.title": "Specialized Support",
  "services.s5.desc": "Assisted operations, 24/7 technical support and maintenance contracts with guaranteed SLA.",
  "services.s6.title": "Consulting & Integration",
  "services.s6.desc": "Diagnosis, architecture and strategic technology integration focused on proven ROI.",

  // Why Us
  "whyus.label": "Why Choose Us",
  "whyus.title": "Why",
  "whyus.titleHighlight": "choose us?",
  "whyus.r1.title": "Security & Trust",
  "whyus.r1.desc": "Robust compliance program and certifications ensuring integrity in all operations.",
  "whyus.r2.title": "Technical Expertise",
  "whyus.r2.desc": "Team with over 50 active certifications from the world's largest technology manufacturers.",
  "whyus.r3.title": "Long-Term Partnership",
  "whyus.r3.desc": "Relationship model that prioritizes technical proximity, methodology, and transparency.",
  "whyus.r4.title": "Complete Delivery",
  "whyus.r4.desc": "From architecture to ongoing support, we manage the complete cycle with delivery excellence.",

  // Partners
  "partners.label": "15+ Global Partners",
  "partners.title": "Leading global",
  "partners.titleHighlight": "manufacturers",
  "partners.titleEnd": "",

  // Contact CTA
  "cta.badge": "Let's Talk",
  "cta.title": "Let's talk about your",
  "cta.titleHighlight": "project?",
  "cta.description": "Our technical team is ready to understand your scenario, evaluate your architecture and design the right integration for your environment.",
  "cta.button": "Talk to Mahvla Group",

  // Footer
  "footer.office": "Offices",
  "footer.contact": "Contact",
  "footer.copyright": "All rights reserved.",
  "footer.privacy": "Privacy Policy",

  // Compliance
  "compliance.title": "Our commitment to",
  "compliance.titleHighlight": "ethics",
  "compliance.desc1": "At Mahvla, we believe that integrity is the foundation of all our relationships. We maintain a robust compliance program that ensures conformity with the most rigorous national and international standards.",
  "compliance.desc2": "We promote transparency, ethics and responsibility in all our operations, ensuring that our partners and clients can fully trust our conduct.",
  "compliance.report.title": "Report an irregularity",
  "compliance.report.subtitle": "Your report will be treated with absolute confidentiality and analyzed independently.",
  "compliance.anonymous": "Submit report anonymously",
  "compliance.name": "Name",
  "compliance.name.placeholder": "Your name",
  "compliance.email": "Email",
  "compliance.reason": "Reason",
  "compliance.reason.placeholder": "Select a reason",
  "compliance.description": "Description",
  "compliance.description.placeholder": "Describe the irregularity with as much detail as possible...",
  "compliance.submit": "Submit report",
  "compliance.submitting": "Submitting...",
  "compliance.privacyNote": "By submitting, you agree to our",
  "compliance.certifications": "Certifications",
  "compliance.comingSoon": "Coming soon",
  "compliance.integrity": "Integrity",
  "compliance.antisuborno": "Anti-bribery",
  "compliance.quality": "Quality",
  "compliance.environmental": "Environmental",
  "compliance.toast.error.title": "Validation error",
  "compliance.toast.error.desc": "Please correct the highlighted fields.",
  "compliance.toast.success.title": "Report submitted successfully",
  "compliance.toast.success.desc": "Your report has been registered and will be analyzed with complete confidentiality.",

  // Compliance reasons
  "reason.corruption": "Corruption or bribery",
  "reason.fraud": "Fraud",
  "reason.harassment": "Moral or sexual harassment",
  "reason.conflict": "Conflict of interest",
  "reason.leak": "Information leak",
  "reason.discrimination": "Discrimination",
  "reason.policy": "Violation of internal policies",
  "reason.other": "Other",

  // Atas
  "atas.title": "Price",
  "atas.titleHighlight": "Registration Records",
  "atas.description": "Check the price registration records available for direct contracting by public agencies. Updated documents in compliance with current legislation.",
  "atas.search": "Search records...",
  "atas.preparing": "Records in preparation",
  "atas.preparingDesc": "The price registration records are being organized and will be available soon for consultation and download.",

  // Cases
  "cases.title": "Success Stories",
  "cases.description": "Discover our projects and success stories with our clients.",
  "cases.comingSoon": "Success stories will be published here soon.",
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const t = useCallback((key: string): string => {
    return translations[key] ?? key;
  }, []);

  return (
    <LanguageContext.Provider value={{ language: "en", setLanguage: () => {}, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
