import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { 
  Building2, Car, Briefcase, TrendingUp, ShieldCheck, 
  Users, Award, ChevronRight, MapPin, Clock, Phone,
  Menu, X
} from "lucide-react";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import { Button } from "@/components/ui/button";

import logo from "@assets/logo.png";
import logoNavbar from "@assets/logo-navbar.png";
import storeFront from "@assets/storefront.png";
import managerPhoto from "@assets/manager.png";
import heroBg from "@assets/hero-bg.png";

const WHATSAPP_LINK = "https://wa.me/5541989999999";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* 1. Header fixo */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3' : 'bg-white py-5'}`}>
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('inicio')}>
            <img src={logoNavbar} alt="Equipe Cerbelo - Ademicon" className="h-14 md:h-16 object-contain" />
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-700">
            <button onClick={() => scrollTo('inicio')} className="hover:text-primary transition-colors">Início</button>
            <button onClick={() => scrollTo('solucoes')} className="hover:text-primary transition-colors">Soluções</button>
            <button onClick={() => scrollTo('diferenciais')} className="hover:text-primary transition-colors">Por que Nós</button>
            <button onClick={() => scrollTo('gestor')} className="hover:text-primary transition-colors">Gestor</button>
            <button onClick={() => scrollTo('depoimentos')} className="hover:text-primary transition-colors">Depoimentos</button>
            <button onClick={() => scrollTo('loja')} className="hover:text-primary transition-colors">Localização</button>
          </nav>

          <div className="hidden lg:block">
            <Button asChild className="bg-green-600 hover:bg-green-700 text-white gap-2 font-semibold">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="text-lg" />
                Falar com um Consultor
              </a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-slate-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-lg py-4 px-4 flex flex-col gap-4">
            <button onClick={() => scrollTo('inicio')} className="text-left font-medium p-2 hover:bg-slate-50 rounded-md">Início</button>
            <button onClick={() => scrollTo('solucoes')} className="text-left font-medium p-2 hover:bg-slate-50 rounded-md">Soluções</button>
            <button onClick={() => scrollTo('diferenciais')} className="text-left font-medium p-2 hover:bg-slate-50 rounded-md">Por que Nós</button>
            <button onClick={() => scrollTo('gestor')} className="text-left font-medium p-2 hover:bg-slate-50 rounded-md">Gestor</button>
            <button onClick={() => scrollTo('loja')} className="text-left font-medium p-2 hover:bg-slate-50 rounded-md">Localização</button>
            <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white gap-2 mt-2">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="text-lg" />
                Falar com um Consultor
              </a>
            </Button>
          </div>
        )}
      </header>

      {/* 2. Hero Section */}
      <section id="inicio" className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-10" />
          <img src={heroBg} alt="Investimento e Conquista" className="w-full h-full object-cover opacity-60 object-center" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-20">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium mb-6">
              <ShieldCheck className="w-4 h-4 text-secondary" />
              <span>Unidade Ademicon Piraquara • Atendimento consultivo • Planejamento personalizado</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6">
              Planeje seu futuro com <span className="text-secondary">segurança</span> através da Ademicon Piraquara
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
              Soluções inteligentes em consórcio e investimento para quem deseja conquistar imóveis, veículos e patrimônio com estratégia.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white h-14 px-8 text-base font-semibold w-full sm:w-auto">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="text-xl mr-2" />
                  Simular agora pelo WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 px-8 text-base font-semibold w-full sm:w-auto bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white">
                <button onClick={() => scrollTo('loja')}>
                  Conhecer a unidade
                </button>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Instagram Feed */}
      <section id="instagram" className="py-16 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-10"
          >
            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2 mb-3">
              <FaInstagram className="text-2xl text-pink-500" />
              <a
                href="https://www.instagram.com/ademiconpiraquara/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-slate-700 hover:text-pink-500 transition-colors"
              >
                @ademiconpiraquara
              </a>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-3">
              Acompanhe a Equipe Cerbelo
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-slate-500 max-w-xl mx-auto">
              Fique por dentro das novidades, dicas de investimento e conquistas dos nossos clientes.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4"
          >
            {[
              {
                bg: "from-[#0D1B2A] via-[#1a2f45] to-[#C9A84C]",
                tag: "Consórcio de Imóveis",
                text: "Realize o sonho da casa própria com planejamento e sem juros. Fale com um de nossos consultores hoje mesmo.",
                likes: "234",
                time: "2 dias atrás",
                icon: <Building2 className="w-8 h-8 text-[#C9A84C]" />,
              },
              {
                bg: "from-[#E8001D] via-[#b5001a] to-[#0D1B2A]",
                tag: "Consórcio de Veículos",
                text: "Seu próximo carro pode ser adquirido de forma inteligente. Consórcio Ademicon: sem entrada, sem juros.",
                likes: "189",
                time: "4 dias atrás",
                icon: <Car className="w-8 h-8 text-white" />,
              },
              {
                bg: "from-[#C9A84C] via-[#a07c30] to-[#0D1B2A]",
                tag: "Planejamento Patrimonial",
                text: "Crescimento patrimonial com estratégia. A Equipe Cerbelo te ajuda a conquistar mais com menos risco.",
                likes: "312",
                time: "5 dias atrás",
                icon: <TrendingUp className="w-8 h-8 text-white" />,
              },
              {
                bg: "from-[#0D1B2A] via-[#162336] to-[#E8001D]",
                tag: "Dica Financeira",
                text: "Você sabia que o consórcio é uma das formas mais seguras de investimento no Brasil? Autorizado pelo BACEN.",
                likes: "421",
                time: "1 semana atrás",
                icon: <ShieldCheck className="w-8 h-8 text-[#C9A84C]" />,
              },
              {
                bg: "from-[#1a2f45] via-[#0D1B2A] to-[#C9A84C]",
                tag: "Equipe Cerbelo",
                text: "Nossa equipe está pronta para transformar seus objetivos em conquistas reais. Agende uma consultoria gratuita.",
                likes: "278",
                time: "1 semana atrás",
                icon: <Users className="w-8 h-8 text-[#C9A84C]" />,
              },
              {
                bg: "from-[#E8001D] via-[#0D1B2A] to-[#C9A84C]",
                tag: "Unidade Piraquara",
                text: "Estamos em Piraquara/PR prontos para te atender. Venha nos visitar na R. Barão do Cerro Azul, 1869.",
                likes: "156",
                time: "2 semanas atrás",
                icon: <MapPin className="w-8 h-8 text-white" />,
              },
            ].map((post, i) => (
              <motion.a
                key={i}
                href="https://www.instagram.com/ademiconpiraquara/"
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeInUp}
                className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer block"
                data-testid={`card-instagram-${i}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${post.bg}`} />
                <div className="absolute inset-0 flex flex-col justify-between p-4 md:p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white/80 uppercase tracking-wider bg-black/20 px-2 py-1 rounded-full">
                      {post.tag}
                    </span>
                    {post.icon}
                  </div>
                  <div>
                    <p className="text-white text-xs md:text-sm leading-snug line-clamp-3 mb-2 font-medium drop-shadow">
                      {post.text}
                    </p>
                    <div className="flex items-center justify-between text-white/60 text-xs">
                      <span>♥ {post.likes} curtidas</span>
                      <span>{post.time}</span>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <FaInstagram className="text-white text-4xl opacity-0 group-hover:opacity-80 transition-opacity duration-300" />
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mt-8"
          >
            <a
              href="https://www.instagram.com/ademiconpiraquara/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-pink-400 text-pink-500 font-semibold hover:bg-pink-500 hover:text-white transition-all duration-300"
              data-testid="link-instagram-profile"
            >
              <FaInstagram className="text-lg" />
              Ver todos os posts no Instagram
            </a>
          </motion.div>
        </div>
      </section>

      {/* 3. Autoridade da unidade */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col lg:flex-row items-center gap-12"
          >
            <motion.div variants={fadeInUp} className="lg:w-1/3 w-full flex justify-center">
              <div className="relative w-full max-w-xs">
                {/* Outer glow ring */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-[#C9A84C] via-[#E8001D] to-[#C9A84C] opacity-40 blur-sm" />
                <div className="relative bg-gradient-to-b from-[#0D1B2A] to-[#162336] rounded-3xl border border-[#C9A84C]/40 overflow-hidden shadow-2xl">
                  {/* Logo frame */}
                  <div className="flex justify-center pt-8 pb-4 px-6">
                    <div className="rounded-2xl overflow-hidden shadow-lg ring-2 ring-[#C9A84C]/20">
                      <img src={logo} alt="Equipe Cerbelo - Ademicon Piraquara" className="w-56 object-contain block" />
                    </div>
                  </div>
                  {/* Divider */}
                  <div className="mx-6 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/50 to-transparent" />
                  {/* Rating */}
                  <div className="flex items-center justify-center gap-3 py-5 px-6">
                    <span className="text-4xl font-bold text-white tracking-tight">4,3</span>
                    <div className="flex flex-col gap-0.5">
                      <div className="flex text-amber-400 text-xl">
                        {'★★★★'.split('').map((star, i) => <span key={i}>{star}</span>)}
                        <span className="opacity-30">★</span>
                      </div>
                      <span className="text-xs font-semibold text-[#C9A84C] uppercase tracking-wider">no Google • 15 avaliações</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="lg:w-2/3 w-full grid grid-cols-1 sm:grid-cols-3 gap-6">
              <motion.div variants={fadeInUp} className="text-center sm:text-left border-l-2 border-primary/20 pl-6">
                <h3 className="text-3xl font-serif font-bold text-accent mb-2">Mais de 30</h3>
                <p className="text-sm text-slate-600 font-medium">Anos Ademicon no mercado</p>
              </motion.div>
              <motion.div variants={fadeInUp} className="text-center sm:text-left border-l-2 border-primary/20 pl-6">
                <h3 className="text-3xl font-serif font-bold text-accent mb-2">+15</h3>
                <p className="text-sm text-slate-600 font-medium">Consultores especializados</p>
              </motion.div>
              <motion.div variants={fadeInUp} className="text-center sm:text-left border-l-2 border-primary/20 pl-6">
                <h3 className="text-3xl font-serif font-bold text-accent mb-2">100%</h3>
                <p className="text-sm text-slate-600 font-medium">Das cotas com BACEN</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. Soluções */}
      <section id="solucoes" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-wider text-primary uppercase mb-3">Nossas Soluções</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-accent mb-6">
              Planejamento feito para sua realidade
            </h3>
            <p className="text-slate-600 text-lg">
              Oferecemos linhas de consórcio estruturadas para ampliação de patrimônio sem pagar juros abusivos.
            </p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                icon: <Building2 className="w-8 h-8 text-primary" />,
                title: "Consórcio de Imóveis",
                desc: "Compre, construa ou reforme seu imóvel residencial ou comercial de forma planejada e sem juros.",
              },
              {
                icon: <Car className="w-8 h-8 text-primary" />,
                title: "Consórcio de Veículos",
                desc: "Adquira carros, motos ou veículos pesados novos ou seminovos com prazos e parcelas flexíveis.",
              },
              {
                icon: <Briefcase className="w-8 h-8 text-primary" />,
                title: "Consórcio de Serviços",
                desc: "Realize viagens, cirurgias, festas ou pague estudos através de cartas de crédito planejadas.",
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-primary" />,
                title: "Investimento Patrimonial",
                desc: "Use o consórcio como alavancagem financeira para criar renda passiva e multiplicar seu capital.",
              }
            ].map((sol, i) => (
              <motion.div key={i} variants={fadeInUp} className="group bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-primary/20 flex flex-col h-full">
                <div className="w-16 h-16 rounded-xl bg-red-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {sol.icon}
                </div>
                <h4 className="text-xl font-bold text-accent mb-3">{sol.title}</h4>
                <p className="text-slate-600 mb-6 leading-relaxed flex-grow">{sol.desc}</p>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center font-semibold text-primary hover:text-accent transition-colors mt-auto">
                  Saiba mais <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. Por que escolher */}
      <section id="diferenciais" className="py-24 bg-accent text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary/20 via-accent to-accent opacity-50"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <h2 className="text-sm font-bold tracking-wider text-secondary uppercase mb-3">O Diferencial Equipe Cerbelo</h2>
                <h3 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                  Não vendemos cotas. Desenhamos o seu futuro.
                </h3>
                <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                  Na Ademicon Piraquara, você encontra um ambiente consultivo onde seu projeto de vida é o centro da estratégia. A Equipe Cerbelo é reconhecida pela transparência e pelo acompanhamento do início até a contemplação.
                </p>
                
                <div className="space-y-6">
                  {[
                    { title: "Atendimento Personalizado", desc: "Seu consultor entende seu fluxo de caixa antes de ofertar qualquer plano." },
                    { title: "Consultores Certificados", desc: "Profissionais treinados para criar estratégias de alavancagem patrimonial reais." },
                    { title: "Apoio Pós-Venda", desc: "Gestão completa do seu grupo e auxílio estratégico para lances nas assembleias." },
                    { title: "Maior Rede do Brasil", desc: "Parceria com a Ademicon, a maior administradora independente do país." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="mt-1 w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                        <div className="w-2 h-2 rounded-full bg-secondary"></div>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                        <p className="text-slate-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10"
              >
                <img src={storeFront} alt="Fachada Ademicon Piraquara" className="w-full h-[500px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/90 to-transparent flex items-end p-8">
                  <div>
                    <h4 className="text-2xl font-serif font-bold text-white mb-2">Venha tomar um café conosco</h4>
                    <p className="text-slate-300">Nossa estrutura em Piraquara foi feita para te receber com conforto.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Gestor */}
      <section id="gestor" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 flex flex-col md:flex-row">
            <div className="md:w-5/12 relative">
              <img src={managerPhoto} alt="Gestor da Unidade" className="w-full h-full object-cover min-h-[400px] object-top" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-accent/90 to-transparent p-6 text-white md:hidden">
                <h4 className="text-xl font-bold">Everton Cerbelo</h4>
                <p className="text-secondary font-medium">Gestor Regional Ademicon</p>
              </div>
            </div>
            <div className="md:w-7/12 p-8 md:p-16 flex flex-col justify-center">
              <div className="hidden md:block mb-8">
                <h4 className="text-3xl font-serif font-bold text-accent mb-2">Everton Cerbelo</h4>
                <p className="text-primary font-bold tracking-wide uppercase text-sm">Gestor Regional Ademicon Piraquara</p>
              </div>
              
              <svg className="w-12 h-12 text-slate-200 mb-6" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              
              <blockquote className="text-xl md:text-2xl font-serif text-slate-700 leading-relaxed mb-8 italic">
                "Acreditamos que o planejamento é a ponte mais segura entre os seus sonhos de hoje e o seu patrimônio de amanhã. Nossa equipe não descansa até ver a sua chave na mão."
              </blockquote>
              
              <div>
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    Falar com o Gestor
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Como funciona */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-accent mb-6">O caminho para a sua conquista</h2>
            <p className="text-slate-600 text-lg">Um processo simples, transparente e guiado pela nossa equipe em cada etapa.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>
            
            {[
              { num: "01", title: "Consultoria", desc: "Análise do seu objetivo e capacidade financeira." },
              { num: "02", title: "Estratégia", desc: "Escolha do melhor grupo e plano de lances." },
              { num: "03", title: "Assembleia", desc: "Acompanhamento mensal para sorteios e lances." },
              { num: "04", title: "Conquista", desc: "Carta de crédito liberada. O bem é seu!" }
            ].map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-white border-4 border-slate-50 shadow-md flex items-center justify-center text-xl font-bold text-primary mb-6 relative">
                  {step.num}
                  {i < 3 && <div className="hidden md:block absolute w-full h-0.5 bg-primary/20 top-1/2 -right-full -translate-y-1/2 -z-10"></div>}
                </div>
                <h4 className="text-xl font-bold text-accent mb-2">{step.title}</h4>
                <p className="text-slate-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Depoimentos */}
      <section id="depoimentos" className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-accent mb-6">Quem planeja, conquista</h2>
            <p className="text-slate-600 text-lg">Histórias reais de clientes que confiaram na Ademicon Piraquara.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "Tentamos financiamento e as taxas eram absurdas. A Equipe Cerbelo montou um plano perfeito para o nosso orçamento. Hoje estamos na nossa casa própria.",
                name: "Roberto e Mariana",
                loc: "Piraquara, PR",
                initials: "RM"
              },
              {
                text: "Uso o consórcio Ademicon como investimento há 5 anos. Sempre fui muito bem orientado pelo Anderson e equipe. A rentabilidade patrimonial é excelente.",
                name: "Carlos Eduardo",
                loc: "Pinhais, PR",
                initials: "CE"
              },
              {
                text: "Consegui trocar a frota da minha pequena empresa através de um grupo que o consultor me indicou. O lance foi certeiro. Atendimento nota 1000.",
                name: "Juliana Mendes",
                loc: "Piraquara, PR",
                initials: "JM"
              }
            ].map((test, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col"
              >
                <div className="flex text-amber-400 mb-6">
                  {'★★★★★'.split('').map((s, idx) => <span key={idx}>{s}</span>)}
                </div>
                <p className="text-slate-700 italic mb-8 min-h-[100px] flex-grow">"{test.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-bold font-serif">
                    {test.initials}
                  </div>
                  <div>
                    <h5 className="font-bold text-accent">{test.name}</h5>
                    <p className="text-sm text-slate-500">{test.loc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Loja */}
      <section id="loja" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12 bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 shadow-sm">
            <div className="lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <h2 className="text-sm font-bold tracking-wider text-primary uppercase mb-3">Nossa Unidade</h2>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-accent mb-8">Venha nos fazer uma visita</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900">Endereço</h4>
                    <p className="text-slate-600 mt-1">R. Barão do Cerro Azul, 1869<br/>Salas 16, 17 e 18 - Centro<br/>Piraquara - PR, 83301-010</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <Clock className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900">Horário de Atendimento</h4>
                    <p className="text-slate-600 mt-1">Segunda a Sexta: 08:00 – 18:00<br/>Sábado: 08:00 – 12:00</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900">Telefone</h4>
                    <a href="tel:+554135894699" className="text-primary font-semibold hover:underline mt-1 block">
                      (41) 3589-4699
                    </a>
                  </div>
                </div>
              </div>
              
              <Button asChild size="lg" className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="text-xl mr-2" /> Agendar uma visita
                </a>
              </Button>
            </div>
            
            <div className="lg:w-1/2 h-[400px] lg:h-auto">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.220556272554!2d-49.06649712386991!3d-25.430870933527266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce95e0c555555%3A0x6fb8f8a84615e45a!2sR.%20Bar%C3%A3o%20do%20Cerro%20Azul%2C%201869%20-%20Centro%2C%20Piraquara%20-%20PR%2C%2083301-010!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[0.2] contrast-[0.9] opacity-90"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Form/CTA */}
      <section id="contato" className="py-24 bg-accent text-white relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 blur-3xl rounded-full"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-white">Dê o primeiro passo hoje.</h2>
              <p className="text-xl text-slate-300 mb-8">Vagas limitadas para planejamento personalizado gratuito este mês. Fale com a Equipe Cerbelo e descubra a estratégia ideal para o seu patrimônio.</p>
              
              <div className="space-y-4 mb-8 hidden lg:block">
                <div className="flex items-center gap-3 text-slate-300">
                  <ShieldCheck className="w-5 h-5 text-secondary" />
                  <span>Seus dados estão seguros conosco</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <TrendingUp className="w-5 h-5 text-secondary" />
                  <span>Alavancagem com foco em resultados</span>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 bg-white rounded-2xl p-6 md:p-8 text-slate-900 shadow-xl">
              <h3 className="text-2xl font-bold text-accent mb-6 text-center">Inicie sua simulação</h3>
              <form className="space-y-4" onSubmit={(e) => {
                e.preventDefault();
                window.open(WHATSAPP_LINK, '_blank');
              }}>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Nome completo</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="Como prefere ser chamado?" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Telefone / WhatsApp</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="(41) 90000-0000" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Área de interesse</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" required defaultValue="">
                    <option value="" disabled>Selecione um objetivo</option>
                    <option value="imovel">Imóveis (Compra, Reforma, Construção)</option>
                    <option value="veiculo">Veículos (Carros, Motos, Pesados)</option>
                    <option value="servico">Serviços</option>
                    <option value="investimento">Investimento e Alavancagem</option>
                  </select>
                </div>
                <Button type="submit" size="lg" className="w-full bg-green-600 hover:bg-green-700 text-white h-14 text-base font-bold mt-4 shadow-md shadow-green-600/20">
                  <FaWhatsapp className="text-xl mr-2" />
                  Quero falar com um consultor
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Footer */}
      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <img src={logo} alt="Ademicon Equipe Cerbelo" className="h-28 object-contain mb-6" />
              <p className="text-sm max-w-sm mb-6 leading-relaxed">
                A Ademicon Piraquara - Equipe Cerbelo atua no mercado de consórcios e investimentos oferecendo planejamento financeiro seguro e transparente para a conquista dos seus maiores objetivos.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <FaInstagram className="text-xl" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <FaFacebook className="text-xl" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Links Rápidos</h4>
              <ul className="space-y-3 text-sm">
                <li><button onClick={() => scrollTo('inicio')} className="hover:text-primary transition-colors">Início</button></li>
                <li><button onClick={() => scrollTo('solucoes')} className="hover:text-primary transition-colors">Soluções em Consórcio</button></li>
                <li><button onClick={() => scrollTo('diferenciais')} className="hover:text-primary transition-colors">Por que a Equipe Cerbelo</button></li>
                <li><button onClick={() => scrollTo('gestor')} className="hover:text-primary transition-colors">Nosso Gestor</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contato</h4>
              <ul className="space-y-3 text-sm">
                <li>R. Barão do Cerro Azul, 1869</li>
                <li>Salas 16, 17 e 18 - Centro</li>
                <li>Piraquara - PR</li>
                <li className="pt-2">
                  <a href="tel:+554135894699" className="text-white font-semibold hover:text-primary transition-colors">(41) 3589-4699</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-900 text-xs text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p>Ademicon Consórcios e Investimentos. CNPJ: 14.341.002/0001-44. Autorizado pelo BACEN.</p>
            <p>&copy; {new Date().getFullYear()} Equipe Cerbelo. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
