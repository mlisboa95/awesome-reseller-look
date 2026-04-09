import { createContext, useContext, useState, useCallback, ReactNode } from "react";

export type Language = "pt" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  // Header
  "nav.about": { pt: "A Mahvla", en: "About Us" },
  "nav.solutions": { pt: "Soluções", en: "Solutions" },
  "nav.partners": { pt: "Parceiros", en: "Partners" },
  "nav.atas": { pt: "Atas", en: "Price Records" },
  "nav.compliance": { pt: "Compliance", en: "Compliance" },
  "nav.portal": { pt: "Portal do Cliente", en: "Client Portal" },
  "header.email": { pt: "contato@mahvla.com.br", en: "contato@mahvla.com.br" },

  // Hero
  "hero.eyebrow": { pt: "Projeto. Execução. Entrega.", en: "Design. Execution. Delivery." },
  "hero.title1": { pt: "Tecnologia,", en: "Technology," },
  "hero.title2": { pt: "Integração", en: "Integration" },
  "hero.title3": { pt: "e Resultados.", en: "and Results." },
  "hero.cta1": { pt: "Nossas Soluções", en: "Our Solutions" },
  "hero.cta2": { pt: "Sobre a Mahvla", en: "About Mahvla" },

  // About
  "about.label": { pt: "Sobre Nós", en: "About Us" },
  "about.title": { pt: "Mais de duas décadas entregando com", en: "Over two decades delivering with" },
  "about.titleHighlight": { pt: "consistência", en: "consistency" },
  "about.description": {
    pt: "Fundado em 2004, o Grupo Mahvla é uma integradora de tecnologia que cresceu ao lado dos seus clientes. Nosso modelo é aprofundar parcerias de longo prazo, projeto a projeto, com proximidade técnica, método e transparência em cada etapa.",
    en: "Founded in 2004, Grupo Mahvla is a technology integrator that has grown alongside its clients. Our model is to deepen long-term partnerships, project by project, with technical proximity, methodology, and transparency at every stage.",
  },
  "about.stat1": { pt: "anos de experiência", en: "years of experience" },
  "about.stat2": { pt: "certificações ativas", en: "active certifications" },
  "about.stat3": { pt: "projetos entregues", en: "projects delivered" },
  "about.stat4": { pt: "clientes atendidos", en: "clients served" },

  // Services
  "services.label": { pt: "Nossas Soluções", en: "Our Solutions" },
  "services.title": { pt: "Soluções que", en: "Solutions that" },
  "services.titleHighlight": { pt: "integram", en: "integrate" },
  "services.s1.title": { pt: "Redes & Conectividade", en: "Networks & Connectivity" },
  "services.s1.desc": {
    pt: "Arquitetura, integração e operação de soluções de redes corporativas, abrangendo LAN/WLAN, WAN e MAN, SD-WAN, monitoramento de performance (NPM), operação de rede (NOC), telefonia IP e videoconferência.",
    en: "Architecture, integration and operation of corporate network solutions, covering LAN/WLAN, WAN and MAN, SD-WAN, performance monitoring (NPM), network operations (NOC), IP telephony and video conferencing.",
  },
  "services.s2.title": { pt: "Cibersegurança", en: "Cybersecurity" },
  "services.s2.desc": {
    pt: "Arquitetura, integração e operação de soluções de segurança, incluindo NGFW, WAF, EDR/XDR, ZTNA e SASE, gestão de identidades (IAM), acessos privilegiados (PAM), proteção de e-mail e colaboração.",
    en: "Architecture, integration and operation of security solutions, including NGFW, WAF, EDR/XDR, ZTNA and SASE, identity management (IAM), privileged access (PAM), email and collaboration protection.",
  },
  "services.s3.title": { pt: "Infraestrutura & Cloud", en: "Infrastructure & Cloud" },
  "services.s3.desc": {
    pt: "Arquitetura, integração e operação de ambientes on-premises, híbridos e em nuvem, incluindo infraestrutura hiperconvergente (HCI), storage, servidores, virtualização e containers.",
    en: "Architecture, integration and operation of on-premises, hybrid and cloud environments, including hyperconverged infrastructure (HCI), storage, servers, virtualization and containers.",
  },
  "services.s4.title": { pt: "Segurança Eletrônica & Cidades Inteligentes", en: "Electronic Security & Smart Cities" },
  "services.s4.desc": {
    pt: "Arquitetura, integração e operação de soluções de segurança eletrônica, incluindo CFTV, controle de acesso, leitura de placas (LPR), reconhecimento facial e soluções para cidades inteligentes.",
    en: "Architecture, integration and operation of electronic security solutions, including CCTV, access control, license plate reading (LPR), facial recognition and smart city solutions.",
  },
  "services.s5.title": { pt: "Suporte Especializado", en: "Specialized Support" },
  "services.s5.desc": {
    pt: "Operação assistida, suporte técnico 24/7 e contratos de sustentação com SLA garantido.",
    en: "Assisted operations, 24/7 technical support and maintenance contracts with guaranteed SLA.",
  },
  "services.s6.title": { pt: "Consultoria & Integração", en: "Consulting & Integration" },
  "services.s6.desc": {
    pt: "Diagnóstico, arquitetura e integração estratégica de tecnologias com foco em ROI comprovado.",
    en: "Diagnosis, architecture and strategic technology integration focused on proven ROI.",
  },

  // Why Us
  "whyus.label": { pt: "Por que a Mahvla", en: "Why Choose Us" },
  "whyus.title": { pt: "Por que nos", en: "Why" },
  "whyus.titleHighlight": { pt: "escolher?", en: "choose us?" },
  "whyus.r1.title": { pt: "Segurança & Confiança", en: "Security & Trust" },
  "whyus.r1.desc": {
    pt: "Programa robusto de compliance e certificações que garantem integridade em todas as operações.",
    en: "Robust compliance program and certifications ensuring integrity in all operations.",
  },
  "whyus.r2.title": { pt: "Expertise Técnica", en: "Technical Expertise" },
  "whyus.r2.desc": {
    pt: "Equipe com mais de 50 certificações ativas dos maiores fabricantes globais de tecnologia.",
    en: "Team with over 50 active certifications from the world's largest technology manufacturers.",
  },
  "whyus.r3.title": { pt: "Parceria de Longo Prazo", en: "Long-Term Partnership" },
  "whyus.r3.desc": {
    pt: "Modelo de relacionamento que prioriza proximidade técnica, método e transparência.",
    en: "Relationship model that prioritizes technical proximity, methodology, and transparency.",
  },
  "whyus.r4.title": { pt: "Entrega Completa", en: "Complete Delivery" },
  "whyus.r4.desc": {
    pt: "Da arquitetura à sustentação, conduzimos o ciclo completo com excelência na entrega.",
    en: "From architecture to ongoing support, we manage the complete cycle with delivery excellence.",
  },

  // Partners
  "partners.label": { pt: "15+ Parceiros Globais", en: "15+ Global Partners" },
  "partners.title": { pt: "Fabricantes", en: "Leading global" },
  "partners.titleHighlight": { pt: "líderes", en: "manufacturers" },
  "partners.titleEnd": { pt: "globais", en: "" },

  // Contact CTA
  "cta.badge": { pt: "Fale Conosco", en: "Let's Talk" },
  "cta.title": { pt: "Vamos falar sobre o seu", en: "Let's talk about your" },
  "cta.titleHighlight": { pt: "projeto?", en: "project?" },
  "cta.description": {
    pt: "Nossa equipe técnica está pronta para entender seu cenário, avaliar sua arquitetura e desenhar a integração certa para o seu ambiente.",
    en: "Our technical team is ready to understand your scenario, evaluate your architecture and design the right integration for your environment.",
  },
  "cta.button": { pt: "Falar com o Grupo Mahvla", en: "Talk to Grupo Mahvla" },

  // Footer
  "footer.office": { pt: "Sede Brasília", en: "Brasília Office" },
  "footer.contact": { pt: "Contato", en: "Contact" },
  "footer.copyright": { pt: "Todos os direitos reservados.", en: "All rights reserved." },
  "footer.privacy": { pt: "Política de Privacidade", en: "Privacy Policy" },

  // Compliance
  "compliance.title": { pt: "Nosso compromisso com a", en: "Our commitment to" },
  "compliance.titleHighlight": { pt: "ética", en: "ethics" },
  "compliance.desc1": {
    pt: "Na Mahvla, acreditamos que a integridade é o alicerce de todas as nossas relações. Mantemos um programa robusto de compliance que assegura conformidade com as mais rigorosas normas nacionais e internacionais.",
    en: "At Mahvla, we believe that integrity is the foundation of all our relationships. We maintain a robust compliance program that ensures conformity with the most rigorous national and international standards.",
  },
  "compliance.desc2": {
    pt: "Promovemos transparência, ética e responsabilidade em todas as nossas operações, garantindo que nossos parceiros e clientes possam confiar plenamente em nossa conduta.",
    en: "We promote transparency, ethics and responsibility in all our operations, ensuring that our partners and clients can fully trust our conduct.",
  },
  "compliance.report.title": { pt: "Reporte uma irregularidade", en: "Report an irregularity" },
  "compliance.report.subtitle": {
    pt: "Seu relato será tratado com absoluto sigilo e analisado de forma independente.",
    en: "Your report will be treated with absolute confidentiality and analyzed independently.",
  },
  "compliance.anonymous": { pt: "Enviar denúncia de forma anônima", en: "Submit report anonymously" },
  "compliance.name": { pt: "Nome", en: "Name" },
  "compliance.name.placeholder": { pt: "Seu nome", en: "Your name" },
  "compliance.email": { pt: "E-mail", en: "Email" },
  "compliance.reason": { pt: "Motivo", en: "Reason" },
  "compliance.reason.placeholder": { pt: "Selecione um motivo", en: "Select a reason" },
  "compliance.description": { pt: "Descrição", en: "Description" },
  "compliance.description.placeholder": {
    pt: "Descreva a irregularidade com o máximo de detalhes possível...",
    en: "Describe the irregularity with as much detail as possible...",
  },
  "compliance.submit": { pt: "Enviar denúncia", en: "Submit report" },
  "compliance.submitting": { pt: "Enviando...", en: "Submitting..." },
  "compliance.privacyNote": {
    pt: "Ao enviar, você concorda com nossa",
    en: "By submitting, you agree to our",
  },
  "compliance.certifications": { pt: "Certificações", en: "Certifications" },
  "compliance.comingSoon": { pt: "Em breve", en: "Coming soon" },
  "compliance.integrity": { pt: "Integridade", en: "Integrity" },
  "compliance.antisuborno": { pt: "Antissuborno", en: "Anti-bribery" },
  "compliance.quality": { pt: "Qualidade", en: "Quality" },
  "compliance.environmental": { pt: "Ambiental", en: "Environmental" },
  "compliance.toast.error.title": { pt: "Erro de validação", en: "Validation error" },
  "compliance.toast.error.desc": { pt: "Por favor, corrija os campos destacados.", en: "Please correct the highlighted fields." },
  "compliance.toast.success.title": { pt: "Denúncia enviada com sucesso", en: "Report submitted successfully" },
  "compliance.toast.success.desc": {
    pt: "Sua denúncia foi registrada e será analisada com total sigilo.",
    en: "Your report has been registered and will be analyzed with complete confidentiality.",
  },

  // Compliance reason options
  "reason.corruption": { pt: "Corrupção ou suborno", en: "Corruption or bribery" },
  "reason.fraud": { pt: "Fraude", en: "Fraud" },
  "reason.harassment": { pt: "Assédio moral ou sexual", en: "Moral or sexual harassment" },
  "reason.conflict": { pt: "Conflito de interesses", en: "Conflict of interest" },
  "reason.leak": { pt: "Vazamento de informações", en: "Information leak" },
  "reason.discrimination": { pt: "Discriminação", en: "Discrimination" },
  "reason.policy": { pt: "Descumprimento de políticas internas", en: "Violation of internal policies" },
  "reason.other": { pt: "Outro", en: "Other" },

  // Atas page
  "atas.title": { pt: "Atas de", en: "Price" },
  "atas.titleHighlight": { pt: "Registro de Preços", en: "Registration Records" },
  "atas.description": {
    pt: "Consulte as atas de registro de preços disponíveis para contratação direta por órgãos públicos. Documentos atualizados e em conformidade com a legislação vigente.",
    en: "Check the price registration records available for direct contracting by public agencies. Updated documents in compliance with current legislation.",
  },
  "atas.search": { pt: "Buscar atas...", en: "Search records..." },
  "atas.preparing": { pt: "Atas em preparação", en: "Records in preparation" },
  "atas.preparingDesc": {
    pt: "As atas de registro de preços estão sendo organizadas e serão disponibilizadas em breve para consulta e download.",
    en: "The price registration records are being organized and will be available soon for consultation and download.",
  },

  // Cases page
  "cases.title": { pt: "Cases de Sucesso", en: "Success Stories" },
  "cases.description": {
    pt: "Conheça nossos projetos e histórias de sucesso com nossos clientes.",
    en: "Discover our projects and success stories with our clients.",
  },
  "cases.comingSoon": {
    pt: "Em breve, cases de sucesso serão publicados aqui.",
    en: "Success stories will be published here soon.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("mahvla-lang");
    return (saved === "en" ? "en" : "pt") as Language;
  });

  const handleSetLanguage = useCallback((lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("mahvla-lang", lang);
  }, []);

  const t = useCallback((key: string): string => {
    return translations[key]?.[language] ?? key;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
