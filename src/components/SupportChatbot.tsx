import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User, Minimize2, ArrowUp } from "lucide-react";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const ScrollToTopButton = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-44 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 shadow-lg ${
        showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Voltar ao topo"
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
};

const initialMessages: Message[] = [
  {
    id: 1,
    text: "Olá! 👋 Sou o assistente virtual da Mahvla. Como posso ajudar você hoje?",
    isBot: true,
    timestamp: new Date(),
  },
];

const quickReplies = [
  "Quero saber mais sobre soluções",
  "Preciso de suporte técnico",
  "Gostaria de um orçamento",
  "Falar com um especialista",
];

const botResponses: Record<string, string> = {
  "soluções": "Oferecemos soluções completas em Redes & Conectividade, Cibersegurança, Infraestrutura Cloud e Suporte Especializado. Qual área te interessa mais?",
  "suporte": "Para suporte técnico, você pode entrar em contato pelo email suporte@mahvla.com.br ou pelo telefone (61) 2191-4900. Nosso time está disponível 24/7!",
  "orçamento": "Ficaremos felizes em preparar uma proposta personalizada! Por favor, envie um email para contato@mahvla.com.br com os detalhes do seu projeto.",
  "especialista": "Posso conectar você com um de nossos especialistas! Entre em contato pelo telefone (61) 2191-4900 ou agende uma reunião pelo email contato@mahvla.com.br",
  "default": "Entendi! Para melhor atendê-lo, recomendo entrar em contato com nossa equipe pelo email contato@mahvla.com.br ou telefone (61) 2191-4900. Posso ajudar com mais alguma coisa?",
};

const SupportChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes("solução") || lowerMessage.includes("soluções") || lowerMessage.includes("serviço")) {
      return botResponses["soluções"];
    }
    if (lowerMessage.includes("suporte") || lowerMessage.includes("técnico") || lowerMessage.includes("ajuda")) {
      return botResponses["suporte"];
    }
    if (lowerMessage.includes("orçamento") || lowerMessage.includes("preço") || lowerMessage.includes("proposta") || lowerMessage.includes("custo")) {
      return botResponses["orçamento"];
    }
    if (lowerMessage.includes("especialista") || lowerMessage.includes("falar") || lowerMessage.includes("contato") || lowerMessage.includes("humano")) {
      return botResponses["especialista"];
    }
    
    return botResponses["default"];
  };

  const handleSendMessage = (text: string = inputValue) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: text.trim(),
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botMessage: Message = {
        id: Date.now() + 1,
        text: getBotResponse(text),
        isBot: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`
          fixed bottom-24 right-6 z-50
          w-14 h-14 rounded-full
          bg-gradient-to-br from-primary to-accent
          text-white shadow-lg
          flex items-center justify-center
          transition-all duration-300
          hover:scale-110 hover:shadow-[0_0_30px_hsla(200,100%,50%,0.5)]
          ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}
        `}
        aria-label="Abrir chat de suporte"
      >
        <MessageCircle className="w-6 h-6" />
        
        {/* Pulse animation */}
        <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30" />
      </button>

      {/* Scroll to top button */}
      <ScrollToTopButton />

      {/* Chat Window */}
      <div
        className={`
          fixed bottom-24 right-6 z-50
          w-[380px] max-w-[calc(100vw-3rem)]
          bg-card border border-border rounded-2xl
          shadow-2xl shadow-black/20
          transition-all duration-500 ease-out
          overflow-hidden
          ${isOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0 pointer-events-none'}
          ${isMinimized ? 'h-16' : 'h-[520px]'}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-primary to-accent text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold">Assistente Mahvla</h3>
              <p className="text-xs text-white/80">Online agora</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            >
              <Minimize2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Messages */}
            <div className="h-[340px] overflow-y-auto p-4 space-y-4 bg-background">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${message.isBot ? '' : 'flex-row-reverse'}`}
                >
                  <div
                    className={`
                      w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0
                      ${message.isBot ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'}
                    `}
                  >
                    {message.isBot ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                  </div>
                  <div
                    className={`
                      max-w-[70%] p-3 rounded-2xl text-sm
                      ${message.isBot 
                        ? 'bg-card border border-border text-foreground rounded-tl-none' 
                        : 'bg-primary text-white rounded-tr-none'
                      }
                    `}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="bg-card border border-border rounded-2xl rounded-tl-none p-3">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length <= 2 && (
              <div className="px-4 pb-2 flex flex-wrap gap-2">
                {quickReplies.map((reply) => (
                  <button
                    key={reply}
                    onClick={() => handleSendMessage(reply)}
                    className="px-3 py-1.5 text-xs font-medium bg-primary/10 text-primary border border-primary/30 rounded-full hover:bg-primary/20 transition-colors"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-border bg-card">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Digite sua mensagem..."
                  className="flex-1 px-4 py-2.5 bg-background border border-border rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                />
                <button
                  onClick={() => handleSendMessage()}
                  disabled={!inputValue.trim()}
                  className="px-4 py-2.5 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default SupportChatbot;
