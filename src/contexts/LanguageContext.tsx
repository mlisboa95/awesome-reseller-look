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
  "nav.portal": "Get in Touch",

  // Hero
  "hero.eyebrow": "U.S. Technology Partner",
  "hero.title1": "Cybersecurity, cloud, and",
  "hero.title2": "networking.",
  "hero.support": "Mahvla Group LLC is the U.S. arm of a technology group with 20+ years delivering projects across the Americas.",
  "hero.support2": "We design, deploy, and manage solutions on AWS and on premises.",
  "hero.cta1": "Contact us",

  // About
  "about.label": "About Us",
  "about.title": "The U.S. arm of an established",
  "about.titleHighlight": "technology group.",
  "about.description": "Mahvla Group LLC is the U.S. entity of an established technology group with 20+ years of project delivery across the Americas. The 20-year track record belongs to the group; Mahvla Group LLC is its U.S. presence, headquartered in Boca Raton, Florida. We help organizations design, deploy, and manage cybersecurity, cloud infrastructure, and networking solutions on AWS, and procure software through AWS Marketplace as a Channel Partner.",
  "about.stat1": "years of group experience",
  "about.stat2": "active certifications",
  "about.stat3": "projects delivered",
  "about.stat4": "clients served",

  // Services
  "services.label": "What we do",
  "services.title": "What",
  "services.titleHighlight": "we do.",
  "services.s1.title": "Networks & Connectivity",
  "services.s1.desc": "Enterprise-grade network architecture spanning campus LAN/WLAN, WAN optimization, SD-WAN overlays, and unified communications. We deliver end-to-end visibility with NPM tooling and 24/7 NOC operations.",
  "services.s2.title": "Cybersecurity",
  "services.s2.desc": "Multi-layered defense strategies built around NGFW, WAF, EDR/XDR, and Zero Trust frameworks. We implement identity governance (IAM/PAM), SASE architectures, and threat detection pipelines aligned to NIST and CIS controls.",
  "services.s3.title": "Infrastructure & Cloud",
  "services.s3.desc": "Hybrid and multi-cloud environments engineered for performance and resilience, from hyperconverged platforms and enterprise storage to AWS workload migration, containerized deployments, and infrastructure-as-code automation.",
  "services.s4.title": "Physical Security & Smart Cities",
  "services.s4.desc": "Integrated surveillance ecosystems combining IP CCTV, biometric access control, LPR, and AI-powered analytics. Proven deployments across government facilities, critical infrastructure, and urban mobility projects.",
  "services.s5.title": "Local Support & Project Management",
  "services.s5.desc": "Dedicated technical teams providing assisted operations, proactive monitoring, and maintenance contracts with guaranteed SLAs, plus dedicated project management for end-to-end delivery.",
  "services.s6.title": "AWS Marketplace Procurement",
  "services.s6.desc": "Software procurement through AWS Marketplace via Channel Partner Private Offers (CPPO), simplifying licensing, billing, and contract negotiation for organizations standardizing on AWS.",

  // Why Us
  "whyus.label": "Why Choose Us",
  "whyus.title": "Why",
  "whyus.titleHighlight": "choose us?",
  "whyus.r1.title": "Security & Trust",
  "whyus.r1.desc": "Robust compliance framework and industry certifications ensuring integrity and transparency in all operations.",
  "whyus.r2.title": "Multi-Vendor Expertise",
  "whyus.r2.desc": "Team with 50+ active certifications from leading technology vendors, with deep expertise in cloud architecture and enterprise infrastructure.",
  "whyus.r3.title": "Long-Term Partnership",
  "whyus.r3.desc": "Relationship model that prioritizes technical proximity, methodology, and transparency.",
  "whyus.r4.title": "Complete Delivery",
  "whyus.r4.desc": "From architecture to ongoing support, we manage the complete lifecycle — with tailored procurement and vendor management.",

  // Partners
  "partners.label": "15+ Global Partners",
  "partners.title": "Leading technology",
  "partners.titleHighlight": "vendors",
  "partners.titleEnd": "",

  // Contact CTA
  "cta.badge": "Get in touch",
  "cta.title": "Ready to",
  "cta.titleHighlight": "start?",
  "cta.description": "Tell us about your environment and we will design the right solution and manage the entire delivery.",
  "cta.button": "Contact us",

  // Footer
  "footer.office": "Offices",
  "footer.contact": "Contact",
  "footer.copyright": "All rights reserved.",
  "footer.privacy": "Privacy Policy",

  // Compliance
  "compliance.title": "Our commitment to",
  "compliance.titleHighlight": "ethics",
  "compliance.desc1": "At Mahvla, integrity is the foundation of every relationship. We maintain a robust compliance program aligned with the highest national and international standards.",
  "compliance.desc2": "We promote transparency, ethics, and accountability across all operations, ensuring our partners and clients can fully trust our conduct.",
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
