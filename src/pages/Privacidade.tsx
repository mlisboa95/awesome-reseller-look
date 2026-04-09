import { Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const Privacidade = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  const sections = [
    {
      title: "1. Introdução",
      content: "O Grupo Mahvla está comprometido com a proteção da privacidade e dos dados pessoais de seus clientes, parceiros e visitantes. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018)."
    },
    {
      title: "2. Dados Coletados",
      content: "Podemos coletar os seguintes tipos de informações:",
      list: [
        "Dados de identificação: nome, e-mail, telefone, cargo e empresa",
        "Dados de navegação: endereço IP, tipo de navegador, páginas visitadas",
        "Cookies e tecnologias similares para melhorar a experiência do usuário",
        "Informações fornecidas voluntariamente através de formulários de contato"
      ]
    },
    {
      title: "3. Uso dos Dados",
      content: "Utilizamos seus dados para:",
      list: [
        "Fornecer e melhorar nossos serviços",
        "Responder a solicitações e dúvidas",
        "Enviar comunicações relevantes sobre nossos produtos e serviços",
        "Cumprir obrigações legais e regulatórias",
        "Analisar o uso do site para melhorar a experiência do usuário"
      ]
    },
    {
      title: "4. Cookies",
      content: "Utilizamos cookies para:",
      list: [
        "Cookies essenciais: necessários para o funcionamento do site",
        "Cookies de preferência: armazenam suas preferências de navegação",
        "Cookies analíticos: nos ajudam a entender como você usa o site"
      ],
      extra: "Você pode gerenciar suas preferências de cookies através das configurações do seu navegador."
    },
    {
      title: "5. Compartilhamento de Dados",
      content: "Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros para fins de marketing. Podemos compartilhar dados apenas com parceiros de negócios que nos auxiliam na prestação de serviços, sempre mediante acordos de confidencialidade e em conformidade com a LGPD."
    },
    {
      title: "6. Segurança dos Dados",
      content: "Implementamos medidas técnicas e organizacionais apropriadas para proteger seus dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição. Nossas certificações ISO 9001:2015, ISO 14001:2015 e ISO 37001:2017 refletem nosso compromisso com a qualidade e segurança."
    },
    {
      title: "7. Seus Direitos",
      content: "De acordo com a LGPD, você tem direito a:",
      list: [
        "Confirmar a existência de tratamento de seus dados",
        "Acessar seus dados pessoais",
        "Corrigir dados incompletos, inexatos ou desatualizados",
        "Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários",
        "Revogar o consentimento a qualquer momento"
      ]
    },
    {
      title: "8. Contato",
      content: "Para exercer seus direitos ou esclarecer dúvidas sobre esta Política de Privacidade, entre em contato conosco:",
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
              <span className="text-sm font-medium text-primary">LGPD Compliant</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-foreground mb-4 leading-[1.1]">
              Política de <span className="text-primary">Privacidade</span>
            </h1>
            
            <p className="text-muted-foreground">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
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
                      <span className="text-muted-foreground">E-mail:</span>{" "}
                      <a href="mailto:privacidade@mahvla.com.br" className="text-primary hover:underline">
                        privacidade@mahvla.com.br
                      </a>
                    </p>
                    <p className="text-foreground">
                      <span className="text-muted-foreground">Telefone:</span>{" "}
                      <a href="tel:+556121914900" className="text-primary hover:underline">
                        +55 (61) 2191-4900
                      </a>
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
