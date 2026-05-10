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

// Instagram Posts
import postRankingApr from "@assets/blog/post-ranking-apr.png";
import postEvent from "@assets/blog/post-event.png";
import postSalesRecord from "@assets/blog/post-sales-record.png";

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
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-primary/20">
      {/* 1. Header fixo */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2 border-b border-slate-100' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => scrollTo('inicio')}>
            <div className={`transition-all duration-500 px-4 py-2 ${isScrolled ? 'bg-transparent' : 'bg-white rounded-2xl shadow-2xl shadow-black/20'}`}>
              <img src={logoNavbar} alt="Equipe Cerbelo - Ademicon" className="h-10 md:h-12 object-contain group-hover:scale-105 transition-transform duration-300" />
            </div>
          </div>
          
          {/* Desktop Nav */}
          <nav className={`hidden lg:flex items-center gap-8 text-sm font-bold uppercase tracking-wide transition-colors ${isScrolled ? 'text-slate-700' : 'text-white'}`}>
            <button onClick={() => scrollTo('inicio')} className="hover:text-primary transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all">Início</button>
            <button onClick={() => scrollTo('solucoes')} className="hover:text-primary transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all">Soluções</button>
            <button onClick={() => scrollTo('diferenciais')} className="hover:text-primary transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all">Por que Nós</button>
            <button onClick={() => scrollTo('gestor')} className="hover:text-primary transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all">Gestor</button>
            <button onClick={() => scrollTo('loja')} className="hover:text-primary transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all">Unidade</button>
          </nav>

          <div className="hidden lg:block">
            <Button asChild className="bg-primary hover:bg-primary/90 text-white gap-2 font-bold px-6 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="text-lg" />
                Consultoria Gratuita
              </a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`lg:hidden p-2 rounded-full transition-colors ${isScrolled ? 'text-slate-900 bg-slate-100' : 'text-white bg-white/10'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden absolute top-full left-0 right-0 glass shadow-2xl py-6 px-6 flex flex-col gap-5 border-t border-slate-100"
          >
            <button onClick={() => scrollTo('inicio')} className="text-left font-bold text-lg hover:text-primary">Início</button>
            <button onClick={() => scrollTo('solucoes')} className="text-left font-bold text-lg hover:text-primary">Soluções</button>
            <button onClick={() => scrollTo('diferenciais')} className="text-left font-bold text-lg hover:text-primary">Por que Nós</button>
            <button onClick={() => scrollTo('gestor')} className="text-left font-bold text-lg hover:text-primary">Gestor</button>
            <button onClick={() => scrollTo('loja')} className="text-left font-bold text-lg hover:text-primary">Localização</button>
            <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white gap-2 mt-2 h-12 text-lg font-bold">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
                Falar no WhatsApp
              </a>
            </Button>
          </motion.div>
        )}
      </header>

      {/* 2. Hero Section */}
      <section id="inicio" className="pt-32 pb-20 md:pt-48 md:pb-36 relative overflow-hidden bg-accent text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-accent via-accent/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-accent via-transparent to-transparent z-10" />
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
            src={heroBg} 
            alt="Ademicon Piraquara Background" 
            className="w-full h-full object-cover opacity-40 object-center" 
          />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-20">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-bold mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-secondary tracking-widest uppercase">Unidade Piraquara • Ademicon</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-8">
              Planeje seu futuro com <span className="text-primary underline decoration-secondary/30">segurança</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl leading-relaxed font-light">
              Soluções inteligentes em consórcio para quem deseja conquistar patrimônio com estratégia e sem juros.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-5">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white h-16 px-10 text-lg font-bold w-full sm:w-auto shadow-2xl shadow-primary/30 transform hover:-translate-y-1 transition-all">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="text-2xl mr-2" />
                  Simular agora no WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-16 px-10 text-lg font-bold w-full sm:w-auto bg-white/5 border-white/20 text-white hover:bg-white/10 hover:text-white backdrop-blur-sm">
                <button onClick={() => scrollTo('solucoes')}>
                  Nossas Soluções
                </button>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Instagram Feed */}
      <section id="instagram" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -ml-32 -mb-32"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2 mb-4">
              <div className="p-2 bg-pink-50 rounded-lg">
                <FaInstagram className="text-3xl text-pink-500" />
              </div>
              <a
                href="https://www.instagram.com/ademiconpiraquara/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-bold text-slate-800 hover:text-pink-500 transition-colors"
              >
                @ademiconpiraquara
              </a>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif font-bold text-accent mb-4">
              Acompanhe a <span className="text-primary">Equipe Cerbelo</span>
            </motion.h2>
            <motion.div variants={fadeInUp} className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-6"></motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {[
              {
                img: postRankingApr,
                tag: "Ranking Abril",
                text: "Daiana e Rodrigo conquistam o 1º Lugar! Excelência em consultoria e compromisso com o sucesso dos nossos clientes em Piraquara.",
                likes: "842",
                time: "2d",
              },
              {
                img: postEvent,
                tag: "Evento Elite",
                text: "Imersão e estratégia no Acelerador Ademicon. Preparação constante para oferecer o melhor planejamento do mercado.",
                likes: "1.1k",
                time: "5d",
              },
              {
                img: postSalesRecord,
                tag: "Recorde Vendas",
                text: "Marca histórica de 5.2 Milhões! Liderança absoluta e a confiança de quem busca o melhor para o seu futuro.",
                likes: "956",
                time: "1s",
              },
            ].map((post, i) => (
              <motion.a
                key={i}
                href="https://www.instagram.com/ademiconpiraquara/"
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeInUp}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer block shadow-xl"
              >
                <img 
                  src={post.img} 
                  alt={post.tag} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-5 md:p-6">
                  <div className="mb-3">
                    <span className="text-[10px] font-black text-white uppercase tracking-widest bg-primary px-3 py-1 rounded-full shadow-lg">
                      {post.tag}
                    </span>
                  </div>
                  <div>
                    <p className="text-white text-sm md:text-base leading-relaxed font-bold mb-3 drop-shadow-xl line-clamp-2">
                      {post.text}
                    </p>
                    <div className="flex items-center justify-between text-white/90 text-xs font-bold bg-black/20 backdrop-blur-sm p-2 rounded-lg border border-white/10">
                      <span className="flex items-center gap-1.5">
                        <span className="text-pink-500 text-lg">♥</span> {post.likes}
                      </span>
                      <span>{post.time}</span>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <FaInstagram className="text-white text-5xl transform scale-50 group-hover:scale-100 transition-transform duration-500" />
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. Autoridade da unidade */}
      <section className="py-20 bg-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col lg:flex-row items-center gap-16"
          >
            <motion.div variants={fadeInUp} className="lg:w-1/3 w-full flex justify-center">
              <div className="relative w-full max-w-sm">
                <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary via-secondary to-primary opacity-30 blur-xl animate-pulse" />
                <div className="relative bg-gradient-to-b from-[#1a2f45] to-accent rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl p-8">
                  <div className="flex justify-center mb-8">
                    <div className="bg-white p-4 rounded-2xl shadow-inner">
                      <img src={logo} alt="Equipe Cerbelo" className="w-48 object-contain" />
                    </div>
                  </div>
                  <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mb-6" />
                  <div className="flex items-center justify-center gap-4">
                    <span className="text-5xl font-black text-white italic">4.3</span>
                    <div className="flex flex-col">
                      <div className="flex text-secondary text-2xl">
                        {'★★★★'.split('').map((star, i) => <span key={i}>{star}</span>)}
                        <span className="opacity-30">★</span>
                      </div>
                      <span className="text-[10px] font-black text-white/60 uppercase tracking-[0.2em]">Avaliação Google Piraquara</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="lg:w-2/3 w-full grid grid-cols-1 sm:grid-cols-3 gap-8">
              <motion.div variants={fadeInUp} className="text-center sm:text-left group">
                <div className="w-12 h-1 bg-primary mb-4 group-hover:w-full transition-all duration-500"></div>
                <h3 className="text-5xl font-serif font-black text-white mb-2 italic">30+</h3>
                <p className="text-xs font-black text-secondary uppercase tracking-widest">Anos de Experiência Ademicon</p>
              </motion.div>
              <motion.div variants={fadeInUp} className="text-center sm:text-left group">
                <div className="w-12 h-1 bg-primary mb-4 group-hover:w-full transition-all duration-500"></div>
                <h3 className="text-5xl font-serif font-black text-white mb-2 italic">+15</h3>
                <p className="text-xs font-black text-secondary uppercase tracking-widest">Consultores de Elite</p>
              </motion.div>
              <motion.div variants={fadeInUp} className="text-center sm:text-left group">
                <div className="w-12 h-1 bg-primary mb-4 group-hover:w-full transition-all duration-500"></div>
                <h3 className="text-5xl font-serif font-black text-white mb-2 italic">100%</h3>
                <p className="text-xs font-black text-secondary uppercase tracking-widest">Regulado pelo Banco Central</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. Soluções */}
      <section id="solucoes" className="py-24 bg-slate-50 bg-mesh">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-primary font-black tracking-[0.3em] uppercase text-xs mb-4 block"
            >
              Planejamento Estratégico
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-accent mb-6 leading-tight">
              A solução ideal para cada <span className="text-primary italic">conquista</span>
            </h2>
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: <Building2 className="w-10 h-10 text-white" />,
                title: "Imóveis",
                color: "bg-accent",
                desc: "Compre, construa ou reforme seu imóvel sem pagar juros bancários.",
              },
              {
                icon: <Car className="w-10 h-10 text-white" />,
                title: "Veículos",
                color: "bg-primary",
                desc: "Troque de carro ou aumente sua frota com parcelas que cabem no bolso.",
              },
              {
                icon: <Briefcase className="w-10 h-10 text-white" />,
                title: "Serviços",
                color: "bg-accent-light",
                desc: "Realize cirurgias, festas ou estudos através de cartas de crédito.",
              },
              {
                icon: <TrendingUp className="w-10 h-10 text-white" />,
                title: "Investimento",
                color: "bg-secondary",
                desc: "Alavancagem financeira para criar renda passiva e multiplicar capital.",
              }
            ].map((sol, i) => (
              <motion.div key={i} variants={fadeInUp} className="group bg-white rounded-3xl p-10 border border-slate-100 shadow-xl hover:shadow-2xl hover:border-primary/20 transition-all duration-500 flex flex-col h-full relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-24 h-24 ${sol.color} opacity-5 rounded-bl-[4rem] group-hover:scale-150 transition-transform duration-700`}></div>
                <div className={`w-20 h-20 rounded-2xl ${sol.color} flex items-center justify-center mb-8 shadow-lg group-hover:rotate-6 transition-all duration-500`}>
                  {sol.icon}
                </div>
                <h4 className="text-2xl font-bold text-accent mb-4">{sol.title}</h4>
                <p className="text-slate-600 mb-8 leading-relaxed font-medium">{sol.desc}</p>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center font-black text-primary hover:text-accent transition-colors mt-auto text-sm uppercase tracking-widest">
                  Consultar Agora <ChevronRight className="w-5 h-5 ml-1" />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. Por que escolher */}
      <section id="diferenciais" className="py-28 bg-white relative overflow-hidden">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -ml-48"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <span className="text-primary font-black tracking-widest uppercase text-xs mb-4 block">Diferencial Equipe Cerbelo</span>
                <h3 className="text-4xl md:text-6xl font-serif font-bold text-accent mb-8 leading-[1.1]">
                  Não vendemos cotas.<br />Desenhamos <span className="text-primary italic">legados</span>.
                </h3>
                <p className="text-slate-600 text-xl mb-12 leading-relaxed">
                  Na Ademicon Piraquara, você encontra um ambiente consultivo onde seu projeto de vida é o centro. Somos reconhecidos pela transparência absoluta.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {[
                    { title: "Consultoria Real", desc: "Análise profunda do seu fluxo de caixa." },
                    { title: "Estratégia de Elite", desc: "Técnicas reais de alavancagem financeira." },
                    { title: "Pós-Venda Premium", desc: "Gestão completa do grupo até o final." },
                    { title: "Maior do Brasil", desc: "A solidez da maior administradora independente." }
                  ].map((item, i) => (
                    <motion.div key={i} variants={fadeInUp} className="flex gap-4">
                      <div className="mt-1 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                        <Award className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-accent mb-1">{item.title}</h4>
                        <p className="text-sm text-slate-500 leading-snug">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(232,0,29,0.2)] border-8 border-white group"
              >
                <img src={storeFront} alt="Fachada Ademicon Piraquara" className="w-full h-[600px] object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex items-end p-12">
                  <div className="glass p-8 rounded-3xl border-white/30">
                    <h4 className="text-2xl font-serif font-bold text-white mb-2 italic">Unidade Piraquara</h4>
                    <p className="text-white/90 font-medium">Um espaço moderno desenhado para transformar seus planos em realidade.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Gestor */}
      <section id="gestor" className="py-24 bg-accent relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform origin-top"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="bg-gradient-to-br from-[#1a2f45] to-accent rounded-[3rem] overflow-hidden shadow-2xl border border-white/5 flex flex-col md:flex-row">
            <div className="md:w-5/12 relative group">
              <img src={managerPhoto} alt="Everton Cerbelo" className="w-full h-full object-cover min-h-[500px] object-top group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-accent via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-10 left-10 text-white md:hidden">
                <h4 className="text-3xl font-serif font-black italic">Everton Cerbelo</h4>
                <p className="text-primary font-black uppercase tracking-widest text-xs">Gestor Regional</p>
              </div>
            </div>
            <div className="md:w-7/12 p-12 md:p-20 flex flex-col justify-center">
              <div className="hidden md:block mb-10">
                <span className="text-primary font-black uppercase tracking-[0.4em] text-xs mb-4 block">Liderança de Resultado</span>
                <h4 className="text-5xl font-serif font-black text-white mb-2 italic">Everton Cerbelo</h4>
                <div className="w-20 h-1.5 bg-primary rounded-full"></div>
              </div>
              
              <div className="relative">
                <svg className="absolute -top-10 -left-10 w-24 h-24 text-primary/10" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <blockquote className="text-2xl md:text-3xl font-serif text-slate-200 leading-relaxed mb-12 italic relative z-10">
                  "O planejamento é a ponte mais segura entre o sonho de hoje e o patrimônio de amanhã. Nossa missão é guiar você nessa travessia com excelência."
                </blockquote>
              </div>
              
              <div>
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white h-16 px-10 text-lg font-bold shadow-2xl shadow-primary/30">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    Falar diretamente com o Gestor
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Como funciona */}
      <section className="py-28 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-accent mb-6 italic">O caminho para sua conquista</h2>
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-8"></div>
            <p className="text-slate-600 text-xl font-medium">Um processo blindado, transparente e guiado pela nossa elite de consultores.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            <div className="hidden md:block absolute top-[30px] left-[10%] right-[10%] h-1 bg-slate-100 -z-10"></div>
            
            {[
              { num: "01", title: "Imersão", color: "bg-accent", desc: "Análise profunda dos seus objetivos financeiros." },
              { num: "02", title: "Estratégia", color: "bg-primary", desc: "Modelagem do plano de lances e grupo ideal." },
              { num: "03", title: "Gestão", color: "bg-accent", desc: "Acompanhamento mensal das assembleias." },
              { num: "04", title: "Entrega", color: "bg-secondary", desc: "Patrimônio consolidado. Chaves na mão." }
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-20 h-20 rounded-[2rem] ${step.color} shadow-2xl flex items-center justify-center text-2xl font-black text-white mb-8 border-4 border-white`}
                >
                  {step.num}
                </motion.div>
                <h4 className="text-2xl font-bold text-accent mb-4 uppercase tracking-wider">{step.title}</h4>
                <p className="text-slate-500 font-medium leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Depoimentos */}
      <section id="depoimentos" className="py-24 bg-mesh border-y border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4 block">Feedback Real</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-accent mb-6">Quem planeja, <span className="text-primary italic">celebra</span></h2>
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                text: "A Equipe Cerbelo montou um plano perfeito para o nosso orçamento. Sem juros abusivos, hoje estamos na nossa casa própria em Piraquara.",
                name: "Família Martins",
                initials: "FM"
              },
              {
                text: "Uso o consórcio Ademicon como investimento estratégico há 5 anos. A rentabilidade patrimonial guiada pelo Everton é excepcional.",
                name: "Carlos Alberto",
                initials: "CA"
              },
              {
                text: "Consegui renovar minha frota de transporte com um lance certeiro indicado pelo consultor. Atendimento técnico e muito profissional.",
                name: "Juliana Silva",
                initials: "JS"
              }
            ].map((test, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-slate-50 flex flex-col relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-[3rem]"></div>
                <div className="flex text-secondary text-xl mb-8">
                  {'★★★★★'.split('').map((s, idx) => <span key={idx}>{s}</span>)}
                </div>
                <p className="text-slate-700 italic mb-10 text-lg leading-relaxed flex-grow">"{test.text}"</p>
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-accent text-white flex items-center justify-center font-black text-xl italic shadow-lg border-b-4 border-primary">
                    {test.initials}
                  </div>
                  <div>
                    <h5 className="font-black text-accent text-lg">{test.name}</h5>
                    <p className="text-xs font-bold text-primary uppercase tracking-widest">Contemplado Piraquara</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Loja */}
      <section id="loja" className="py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-0 bg-accent rounded-[3.5rem] overflow-hidden shadow-2xl border border-white/5">
            <div className="lg:w-1/2 p-12 md:p-20 flex flex-col justify-center bg-gradient-to-br from-accent to-[#1a2f45]">
              <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-6 block">Nossa Sede</span>
              <h3 className="text-4xl md:text-5xl font-serif font-black text-white mb-10 leading-tight">Visite nossa<br /><span className="text-primary italic">Unidade Premium</span></h3>
              
              <div className="space-y-10 mb-12">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 shadow-inner group hover:bg-primary transition-all duration-300">
                    <MapPin className="w-6 h-6 text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="font-black text-white uppercase text-xs tracking-widest mb-2">Localização</h4>
                    <p className="text-slate-400 text-lg">R. Barão do Cerro Azul, 1869<br/>Piraquara - PR, 83301-010</p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 shadow-inner group hover:bg-primary transition-all duration-300">
                    <Clock className="w-6 h-6 text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="font-black text-white uppercase text-xs tracking-widest mb-2">Horário</h4>
                    <p className="text-slate-400 text-lg">Segunda a Sexta: 08:00 – 18:00<br/>Sábados: 08:00 – 12:00</p>
                  </div>
                </div>
              </div>
              
              <Button asChild size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white h-16 px-10 text-lg font-black shadow-xl">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="text-2xl mr-3" /> Agendar Consultoria Presencial
                </a>
              </Button>
            </div>
            
            <div className="lg:w-1/2 h-[500px] lg:h-auto relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.220556272554!2d-49.06649712386991!3d-25.430870933527266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce95e0c555555%3A0x6fb8f8a84615e45a!2sR.%20Bar%C3%A3o%20do%20Cerro%20Azul%2C%201869%20-%20Centro%2C%20Piraquara%20-%20PR%2C%2083301-010!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                className="contrast-125 saturate-50 brightness-90 grayscale-[0.3]"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none border-[12px] border-accent/20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Form/CTA */}
      <section id="contato" className="py-28 bg-accent text-white relative">
        <div className="absolute inset-0 bg-mesh opacity-20"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3.5rem] p-10 md:p-16 shadow-2xl shadow-black/50">
            <div className="lg:w-1/2 flex flex-col justify-center">
              <span className="text-primary font-black uppercase tracking-[0.4em] text-xs mb-6 block">Primeiro Passo</span>
              <h2 className="text-5xl md:text-7xl font-serif font-black mb-8 leading-tight italic">Mude seu jogo hoje.</h2>
              <p className="text-xl text-slate-300 mb-10 leading-relaxed font-light">Estamos com agenda aberta para 5 novos planejamentos estratégicos esta semana. Garanta o seu.</p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary transition-all duration-300">
                    <ShieldCheck className="w-6 h-6 text-primary group-hover:text-white" />
                  </div>
                  <span className="text-lg font-bold text-slate-200">Segurança Jurídica Total</span>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary transition-all duration-300">
                    <TrendingUp className="w-6 h-6 text-primary group-hover:text-white" />
                  </div>
                  <span className="text-lg font-bold text-slate-200">Foco em Rentabilidade Patrimonial</span>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 glass rounded-[2.5rem] p-10 text-slate-900 shadow-2xl relative">
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-primary rotate-12 flex items-center justify-center text-white font-black text-xs uppercase text-center p-2 rounded-2xl shadow-xl">Simulação Online</div>
              <h3 className="text-3xl font-serif font-black text-white mb-10 italic">Inicie sua Simulação</h3>
              <form className="space-y-6" onSubmit={(e) => {
                e.preventDefault();
                window.open(WHATSAPP_LINK, '_blank');
              }}>
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-2">Seu Nome</label>
                  <input type="text" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-bold" placeholder="Digite seu nome..." required />
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-2">Seu WhatsApp</label>
                  <input type="tel" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-bold" placeholder="(41) 90000-0000" required />
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-2">Objetivo</label>
                  <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-bold appearance-none cursor-pointer" required defaultValue="">
                    <option value="" disabled>Qual seu maior sonho?</option>
                    <option value="imovel">🏡 Casa ou Apartamento</option>
                    <option value="veiculo">🚗 Carro ou Frota</option>
                    <option value="investimento">📈 Investir Capital</option>
                  </select>
                </div>
                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white h-16 text-lg font-black mt-4 shadow-xl shadow-primary/30 group">
                  <FaWhatsapp className="text-2xl mr-3 group-hover:rotate-12 transition-transform" />
                  Gerar Simulação Agora
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Footer */}
      <footer className="bg-slate-950 text-slate-500 py-24 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-20">
            <div className="md:col-span-2">
              <img src={logo} alt="Ademicon Equipe Cerbelo" className="h-24 object-contain mb-8 filter brightness-110" />
              <p className="text-lg max-w-sm mb-10 leading-relaxed font-medium">
                Unidade Ademicon Piraquara - Equipe Cerbelo. Estratégia, transparência e conquistas reais.
              </p>
              <div className="flex gap-5">
                <a href="https://www.instagram.com/ademiconpiraquara/" target="_blank" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all border border-white/10">
                  <FaInstagram className="text-2xl" />
                </a>
                <a href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all border border-white/10">
                  <FaFacebook className="text-2xl" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-black mb-8 uppercase tracking-widest text-xs">Navegação</h4>
              <ul className="space-y-4 text-sm font-bold">
                <li><button onClick={() => scrollTo('inicio')} className="hover:text-primary transition-colors">Início</button></li>
                <li><button onClick={() => scrollTo('solucoes')} className="hover:text-primary transition-colors">Consórcios</button></li>
                <li><button onClick={() => scrollTo('gestor')} className="hover:text-primary transition-colors">Nossa Liderança</button></li>
                <li><button onClick={() => scrollTo('loja')} className="hover:text-primary transition-colors">Unidade Piraquara</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-black mb-8 uppercase tracking-widest text-xs">Atendimento</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li className="flex items-center gap-3"><MapPin className="w-4 h-4 text-primary" /> Piraquara - PR</li>
                <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-primary" /> (41) 3589-4699</li>
                <li className="pt-4">
                  <span className="block text-white font-black text-xs uppercase tracking-widest mb-2">Autorizado por</span>
                  <div className="bg-white/5 border border-white/10 p-2 rounded-lg inline-block">
                    <span className="text-white font-black italic text-xs">BANCO CENTRAL</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-10 border-t border-white/5 text-[10px] uppercase tracking-[0.2em] font-black text-slate-600 flex flex-col md:flex-row justify-between items-center gap-6">
            <p>CNPJ: 14.341.002/0001-44 • Todos os direitos reservados</p>
            <p>Desenvolvido com ❤️ pela Equipe Cerbelo</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
