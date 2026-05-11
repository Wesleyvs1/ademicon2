"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Target, 
  TrendingUp, 
  ShieldCheck, 
  CheckCircle2, 
  Building2, 
  Car, 
  Briefcase, 
  LineChart, 
  ChevronDown,
  ArrowUp
} from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

const WhatsappIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

const WHATSAPP_LINK = "https://wa.me/5541988526336?text=Ol%C3%A1%2C%20Everton!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20cons%C3%B3rcio%20Ademicon.%0A%0ATenho%20interesse%20em%20entender%20qual%20plano%20combina%20melhor%20com%20meu%20objetivo%20financeiro%20e%20gostaria%20de%20fazer%20uma%20simula%C3%A7%C3%A3o%20personalizada.";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [whatsapp, setWhatsapp] = useState("");

  const handlePhoneMask = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 11) value = value.substring(0, 11);
    
    value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
    value = value.replace(/(\d)(\d{4})$/, '$1-$2');
    
    setWhatsapp(value);
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="min-h-screen font-sans bg-white text-brand-graphite overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative py-12 md:py-20 lg:py-0 gradient-hero text-white min-h-[100dvh] flex items-center">
        <div className="absolute inset-0 bg-[url('/bg-pattern.svg')] opacity-10 bg-repeat"></div>
        <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            initial="hidden" animate="visible" variants={fadeIn}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex flex-wrap justify-center lg:justify-start gap-2 mb-6">
              <span className="px-3 py-1 bg-brand-red/20 text-brand-red-light border border-brand-red/30 rounded-full text-sm font-medium">
                Consultor licenciado Ademicon
              </span>
              <span className="px-3 py-1 bg-white/10 text-gray-300 border border-white/20 rounded-full text-sm font-medium">
                Planejamento financeiro personalizado
              </span>
              <span className="px-3 py-1 bg-white/10 text-gray-300 border border-white/20 rounded-full text-sm font-medium">
                Atendimento consultivo
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-black mb-6 leading-[1.05] tracking-tighter max-w-5xl">
              Invista com estratégia. <br className="hidden lg:block" />
              <span className="text-brand-red-light">Planeje seu futuro</span> com consórcio Ademicon.
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              Everton Cerbelo, consultor financeiro licenciado Ademicon, ajuda você a transformar objetivos em patrimônio através de uma compra planejada, segura e inteligente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#simulacao" className="w-full sm:w-auto px-8 py-4 bg-brand-red hover:bg-brand-red-light transition-colors text-white rounded-lg font-semibold text-lg flex items-center justify-center gap-2 shadow-lg shadow-brand-red/30">
                Quero fazer uma simulação <ArrowRight size={20} />
              </motion.a>
              <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white border-2 border-white transition-all text-white hover:text-brand-graphite rounded-lg font-bold text-lg flex items-center justify-center gap-2">
                <WhatsappIcon size={20} /> Falar com Everton
              </motion.a>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
            className="flex-1 w-full max-w-lg lg:max-w-none"
          >
            {/* Using a placeholder for Everton's photo, instruct user to replace */}
            <div className="relative w-full aspect-[4/5] sm:aspect-square md:aspect-[4/5] lg:aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-2xl mx-auto mt-8 lg:mt-0 max-w-[400px] lg:max-h-[80vh] lg:max-w-[60vh]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
              <Image 
                src="/everton1.png" 
                alt="Everton Cerbelo - Consultor Financeiro" 
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Seção de problema */}
      <section className="py-24 bg-brand-gray-light">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black mb-6 text-brand-graphite leading-[1.05] tracking-tighter">
              Você ainda está deixando seu dinheiro parado ou pagando juros altos?
            </h2>
            <p className="text-lg text-brand-gray">
              Muitas pessoas querem investir, comprar bens ou crescer financeiramente, mas acabam presas a financiamentos caros, falta de planejamento ou decisões impulsivas.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6"
          >
            {[
              { icon: TrendingUp, title: "Juros altos", desc: "Preso em financiamentos que limitam seu crescimento financeiro e atrasam a realização dos seus sonhos.", colSpan: "lg:col-span-2" },
              { icon: LineChart, title: "Falta de estratégia", desc: "Investir ou comprar bens sem um plano claro e seguro para o futuro.", colSpan: "lg:col-span-2" },
              { icon: Target, title: "Falta de planejamento", desc: "Tomar decisões financeiras por impulso, comprometendo a renda familiar.", colSpan: "lg:col-span-2" },
              { icon: Building2, title: "Dificuldade patrimonial", desc: "Não conseguir iniciar, formar ou alavancar seu patrimônio estruturado.", colSpan: "lg:col-span-2" },
              { icon: ShieldCheck, title: "Insegurança", desc: "Medo constante de tomar decisões financeiras erradas e perder dinheiro.", colSpan: "lg:col-span-2" },
              { icon: Briefcase, title: "Dinheiro parado", desc: "Deixar o capital sem render ou perder o poder de compra para a inflação.", colSpan: "lg:col-span-2" }
            ].map((dor, i) => (
              <motion.div 
                key={i} 
                variants={fadeIn} 
                className={`group relative overflow-hidden bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-1 flex flex-col justify-between ${dor.colSpan}`}
              >
                <div className="absolute -top-12 -right-12 opacity-[0.03] group-hover:opacity-[0.08] group-hover:scale-110 group-hover:-rotate-6 transition-all duration-700 pointer-events-none">
                  <dor.icon size={200} />
                </div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-50 to-red-100 border border-red-100 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500">
                    <dor.icon className="text-brand-red" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-brand-graphite group-hover:text-brand-red transition-colors duration-300">{dor.title}</h3>
                  <p className="text-gray-500 text-lg leading-relaxed">{dor.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. Seção de solução */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="flex-1"
            >
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-brand-graphite leading-[1.1] tracking-tighter">
                Consórcio: uma <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-gold">estratégia inteligente</span> para conquistar bens e patrimônio
              </h2>
              <p className="text-lg text-brand-gray mb-8">
                O consórcio deixou de ser apenas uma forma de comprar, para se tornar uma poderosa ferramenta de alavancagem. Pode ser usado para compra planejada, investimento, aquisição de imóveis, veículos, expansão patrimonial e organização financeira.
              </p>
              <ul className="space-y-4">
                {[
                  "Fugir dos juros abusivos",
                  "Planejar o futuro com previsibilidade",
                  "Formar patrimônio de forma disciplinada"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-brand-gold" size={24} />
                    <span className="text-lg font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="flex-1 w-full"
            >
              <div className="relative w-full aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl max-w-[400px] mx-auto lg:max-h-[80vh] lg:max-w-[64vh]">
                <div className="absolute inset-0 bg-brand-graphite/5"></div>
                <Image src="/everton2.png" alt="Estratégia Financeira" fill className="object-cover object-top" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Por que escolher a Ademicon */}
      <section className="py-24 bg-brand-graphite text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
              Por que escolher a Ademicon
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-16">
              A Ademicon é referência nacional em consórcios e soluções financeiras, oferecendo a segurança que você precisa para planejar seu futuro.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: ShieldCheck, title: "Marca consolidada", desc: "Credibilidade e solidez no mercado." },
              { icon: Target, title: "Compra planejada", desc: "Organização para alcançar seus objetivos." },
              { icon: Building2, title: "Diversidade", desc: "Opções para imóveis, veículos e serviços." },
              { icon: Briefcase, title: "Atendimento", desc: "Suporte com consultor licenciado." }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeIn} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6 text-brand-gold">
                  <item.icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. Conheça Everton Cerbelo */}
      <section className="py-24 bg-white" id="sobre">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="flex-1">
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-brand-graphite leading-[1.1] tracking-tighter">
                Everton Cerbelo: consultor financeiro <span className="text-brand-red">licenciado Ademicon</span>
              </h2>
              <p className="text-lg text-brand-gray mb-6 leading-relaxed">
                Everton Cerbelo é gestor e consultor financeiro licenciado pela Ademicon, atuando com foco em planejamento, consórcio e estratégias para formação de patrimônio.
              </p>
              <p className="text-lg text-brand-gray mb-8 leading-relaxed">
                Seu trabalho é orientar clientes que desejam investir com mais segurança, fugir dos juros abusivos e transformar sonhos em conquistas reais por meio de uma análise personalizada.
              </p>
              <div className="p-6 bg-gray-50 border-l-4 border-brand-red rounded-r-lg italic text-brand-gray text-lg">
                "Mais do que vender consórcio, o objetivo é construir uma estratégia para o seu futuro."
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="flex-1 w-full max-w-md lg:max-w-none"
            >
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl mx-auto max-w-[400px] lg:max-h-[80vh] lg:max-w-[60vh]">
                <Image src="/everton3.png" alt="Everton Cerbelo" fill className="object-cover object-top" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Benefícios */}
      <section className="py-24 bg-brand-gray-light">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Vantagens exclusivas do nosso modelo</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Planejamento financeiro personalizado",
              "Estratégia para curto, médio e longo prazo",
              "Alternativa aos juros de financiamento",
              "Possibilidade de aquisição de bens",
              "Construção de patrimônio",
              "Atendimento consultivo individual",
              "Simulação conforme seu objetivo",
              "Mais clareza para tomar decisões"
            ].map((benefit, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm flex items-start gap-4">
                <CheckCircle2 className="text-brand-red shrink-0" size={24} />
                <span className="font-medium text-brand-graphite">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Para quem é */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12">Essa estratégia é para você que deseja…</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              "Comprar um imóvel", "Comprar ou trocar de veículo", "Investir seu capital", "Formar patrimônio",
              "Planejar o futuro", "Expandir negócios", "Sair do aluguel", "Ter uma carta de crédito estratégica"
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 border border-gray-100 p-6 rounded-xl hover:border-brand-red/30 hover:bg-red-50/30 transition-colors flex items-center justify-center text-center font-medium h-full">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Tipos de consórcio */}
      <section className="py-24 bg-brand-graphite text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">Soluções em Consórcio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Building2, title: "Consórcio imobiliário", desc: "A casa própria, terreno ou imóvel na planta sem juros." },
              { icon: Car, title: "Consórcio de veículos", desc: "Carros novos, seminovos, motos ou veículos pesados." },
              { icon: LineChart, title: "Investimento", desc: "Rentabilidade e alavancagem com segurança." },
              { icon: Briefcase, title: "Para empresas", desc: "Frota, maquinário e expansão comercial." },
              { icon: TrendingUp, title: "Construção de patrimônio", desc: "Aumente seus ativos de forma programada." },
              { icon: Target, title: "Planejamento", desc: "Organização de capital para objetivos futuros." }
            ].map((tipo, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors group">
                <tipo.icon className="text-brand-gold mb-6" size={32} />
                <h3 className="text-xl font-bold mb-3">{tipo.title}</h3>
                <p className="text-gray-400 mb-6">{tipo.desc}</p>
                <a href="#simulacao" className="text-brand-gold group-hover:text-white transition-colors flex items-center gap-2 font-medium">
                  Simular agora <ArrowRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Processo */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold mb-16 text-center">Como funciona o atendimento</h2>
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-brand-red/20 -translate-x-1/2 hidden md:block"></div>
            {[
              { step: 1, title: "Você chama no WhatsApp", desc: "Iniciamos a conversa de forma rápida e sem compromisso." },
              { step: 2, title: "Entendemos seu objetivo", desc: "Uma análise do seu momento financeiro." },
              { step: 3, title: "Simulação personalizada", desc: "Criamos cenários reais baseados na sua necessidade." },
              { step: 4, title: "Estratégia alinhada", desc: "Você recebe o plano que melhor se adapta ao seu perfil." },
              { step: 5, title: "Decisão com clareza", desc: "Você decide com segurança e total entendimento." }
            ].map((step, i) => (
              <div key={i} className={`relative flex items-center mb-12 last:mb-0 ${i % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                <div className="w-1/2 hidden md:block"></div>
                <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-brand-red text-white flex items-center justify-center font-bold -translate-x-1/2 z-10 shadow-lg shadow-brand-red/30">
                  {step.step}
                </div>
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-brand-gray">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Autoridade & Chamada */}
      <section className="py-24 bg-brand-red text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 max-w-4xl mx-auto leading-tight">
            Descubra qual plano combina com seu objetivo financeiro
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto text-red-100">
            Receba uma análise personalizada e entenda como o consórcio pode ser usado para transformar seu capital em patrimônio.
          </p>
          <a href="#simulacao" className="inline-flex items-center justify-center px-8 py-5 bg-white text-brand-red rounded-lg font-bold text-xl hover:bg-gray-50 transition-colors shadow-2xl">
            Solicitar simulação pelo WhatsApp
          </a>
        </div>
      </section>

      {/* 12. FAQ */}
      <section className="py-24 bg-brand-gray-light">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">Perguntas Frequentes</h2>
          <div className="space-y-4">
            {[
              { q: "O que é consórcio?", a: "O consórcio é a união de pessoas com o mesmo objetivo de formar uma poupança comum para a compra de bens." },
              { q: "Consórcio é investimento?", a: "Sim, é uma forma de compra planejada e formação de patrimônio com alto potencial de alavancagem." },
              { q: "Qual a diferença entre consórcio e financiamento?", a: "No consórcio você não paga juros, apenas uma taxa de administração, tornando a aquisição muito mais econômica a médio e longo prazo." },
              { q: "Posso usar consórcio para comprar imóvel?", a: "Sim, para comprar, construir, reformar ou até mesmo quitar financiamentos." },
              { q: "Como faço uma simulação com Everton Cerbelo?", a: "Basta preencher o formulário ou clicar no botão de WhatsApp para iniciarmos o seu atendimento." }
            ].map((faq, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <button 
                  onClick={() => toggleFaq(i)}
                  className="w-full px-6 py-4 text-left font-semibold flex items-center justify-between hover:bg-gray-50"
                >
                  {faq.q}
                  <ChevronDown className={`transform transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4 text-brand-gray">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. Formulário de Lead */}
      <section id="simulacao" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-2xl">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
            <h2 className="text-4xl md:text-5xl font-black mb-8 text-center text-brand-graphite leading-[1.2] tracking-tighter">
              Receba sua <span className="text-brand-red">análise personalizada</span>
            </h2>
            <form className="space-y-6" onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const nome = formData.get("nome");
              const whatsapp = formData.get("whatsapp");
              const cidade = formData.get("cidade");
              const objetivo = formData.get("objetivo");
              const capital = formData.get("capital") || "Não informado";
              const prazo = formData.get("prazo");
              
              const text = encodeURIComponent(`Olá Everton, vim pelo site e gostaria de uma análise personalizada.\n\n*Meus dados:*\nNome: ${nome}\nWhatsApp: ${whatsapp}\nCidade: ${cidade}\nObjetivo: ${objetivo}\nPrazo: ${prazo}\nCapital: ${capital}`);
              window.open(`https://wa.me/5541988526336?text=${text}`, '_blank');
            }}>
              <div>
                <label className="block text-sm font-medium mb-2">Nome Completo</label>
                <input name="nome" type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">WhatsApp</label>
                <input 
                  name="whatsapp" 
                  type="tel" 
                  required 
                  value={whatsapp}
                  onChange={handlePhoneMask}
                  placeholder="(00) 00000-0000"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Cidade</label>
                <input name="cidade" type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Objetivo</label>
                  <select name="objetivo" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all bg-white">
                    <option>Imóvel</option>
                    <option>Veículo</option>
                    <option>Investimento</option>
                    <option>Empresa</option>
                    <option>Outro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Prazo desejado</label>
                  <select name="prazo" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all bg-white">
                    <option>Curto prazo (1 a 3 anos)</option>
                    <option>Médio prazo (3 a 5 anos)</option>
                    <option>Longo prazo (+5 anos)</option>
                    <option>Imediato (Urgente)</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Capital disponível <span className="text-gray-400 font-normal">(Opcional)</span></label>
                <select name="capital" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all bg-white">
                  <option value="">Selecione uma faixa...</option>
                  <option>Até R$ 50 mil</option>
                  <option>R$ 50 mil a R$ 150 mil</option>
                  <option>R$ 150 mil a R$ 300 mil</option>
                  <option>R$ 300 mil a R$ 500 mil</option>
                  <option>Acima de R$ 500 mil</option>
                </select>
              </div>
              <button type="submit" className="w-full py-4 bg-brand-red hover:bg-brand-red-dark text-white font-bold rounded-lg transition-colors text-lg">
                Receber análise personalizada
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 14. Footer */}
      <footer className="bg-brand-graphite text-gray-400 pt-12 pb-32 lg:pb-12 border-t border-white/10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-12 md:gap-6">
          <div className="w-full md:w-auto">
            <h3 className="text-white font-bold text-xl">Everton Cerbelo</h3>
            <p className="mb-4">Consultor financeiro licenciado Ademicon</p>
            <div className="text-sm space-y-2">
              <p>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">
                  WhatsApp: (41) 98852-6336
                </a>
              </p>
              <p>
                <a href="mailto:Evertonbc.ademilar@gmail.com" className="hover:text-brand-gold transition-colors">
                  E-mail: Evertonbc.ademilar@gmail.com
                </a>
              </p>
              <p className="max-w-xs leading-relaxed text-gray-500">
                Endereço: R. Barão do Cerro Azul, 1869 - Salas 16, 17 e 18 - Centro, Piraquara - PR, 83301-010
              </p>
            </div>
          </div>
          <div className="text-left md:text-right w-full md:max-w-sm text-sm">
            <p className="mb-4">"As informações desta página têm caráter informativo e consultivo. A contratação está sujeita à análise, disponibilidade de planos e regras da administradora."</p>
            <p>Instagram: <a href="https://instagram.com/cerbelo_everton" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:underline">@cerbelo_everton</a></p>
          </div>
        </div>
      </footer>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-4">
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 20 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-12 h-12 bg-brand-graphite text-white rounded-full flex items-center justify-center shadow-xl hover:bg-brand-red transition-colors"
              aria-label="Voltar ao topo"
            >
              <ArrowUp size={24} />
            </motion.button>
          )}
        </AnimatePresence>
        
        <motion.a 
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          href={WHATSAPP_LINK} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl"
          aria-label="Falar no WhatsApp"
        >
          <WhatsappIcon size={32} />
        </motion.a>
      </div>
    </main>
  );
}
