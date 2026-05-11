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
  ArrowUp,
  MessageCircle,
  Star,
  UserCheck,
  Mail
} from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

const WhatsappIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

const WHATSAPP_BASE = "https://wa.me/5541988526336?text=";
const WHATSAPP_LINK = `${WHATSAPP_BASE}${encodeURIComponent("Olá, Everton! Vim pelo site e gostaria de receber uma simulação personalizada de consórcio Ademicon.")}`;

const whatsappByType = (type: string) => `${WHATSAPP_BASE}${encodeURIComponent(`Olá, Everton! Vim pelo site e tenho interesse em ${type}. Gostaria de receber uma simulação personalizada.`)}`;

// Conversion tracking - prepared for GA4, Meta Pixel, Google Ads
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const trackEvent = (eventName: string, params?: Record<string, string>) => {
  const w = typeof window !== "undefined" ? (window as unknown as Record<string, unknown>) : null;
  if (w?.gtag) (w.gtag as (...args: unknown[]) => void)("event", eventName, params);
  if (w?.fbq) (w.fbq as (...args: unknown[]) => void)("track", eventName, params);
  console.log(`[Track] ${eventName}`, params);
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
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
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleFaq = useCallback((index: number) => {
    setOpenFaq(prev => prev === index ? null : index);
  }, []);

  return (
    <main className="min-h-screen font-sans bg-white text-brand-graphite overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative py-16 md:py-24 lg:py-0 gradient-hero text-white min-h-[100dvh] flex items-center">
        <div className="absolute inset-0 bg-[url('/bg-pattern.svg')] opacity-5 bg-repeat"></div>
        <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial="hidden" animate="visible" variants={fadeIn}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex flex-wrap justify-center lg:justify-start gap-2 mb-8">
              <span className="glass-badge px-3 py-1 text-gray-300 rounded-full text-xs font-medium tracking-wide uppercase">
                Consultor licenciado Ademicon
              </span>
              <span className="glass-badge px-3 py-1 text-gray-400 rounded-full text-xs font-medium tracking-wide uppercase">
                Atendimento personalizado
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-8 leading-[1.15] tracking-tight max-w-2xl mx-auto lg:mx-0">
              Invista com estratégia.{" "}
              <br className="hidden sm:block" />
              Construa <span className="text-brand-red-light">patrimônio</span> com planejamento.
            </h1>
            <p className="text-base lg:text-lg text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Com o consórcio Ademicon, você faz uma compra planejada, segura e inteligente. Everton Cerbelo, consultor financeiro licenciado, monta a estratégia ideal para o seu objetivo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.a 
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} 
                href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
                onClick={() => trackEvent("whatsapp_click", { location: "hero_cta" })}
                className="w-full sm:w-auto px-8 py-4 bg-brand-red hover:bg-brand-red-dark transition-colors text-white rounded-xl font-semibold text-base flex items-center justify-center gap-3 shadow-lg shadow-brand-red/20"
                id="hero-whatsapp-cta"
              >
                <WhatsappIcon size={20} /> Receber análise no WhatsApp
              </motion.a>
              <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} href="#simulacao" className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/15 transition-all text-gray-300 hover:text-white rounded-xl font-semibold text-base flex items-center justify-center gap-2">
                Preencher formulário <ArrowRight size={18} />
              </motion.a>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
            className="flex-1 w-full max-w-lg lg:max-w-none"
          >
            <div className="relative mx-auto max-w-[380px] lg:max-w-[420px]">
              <div className="photo-frame rounded-2xl">
                <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10"></div>
                  <Image 
                    src="/everton1.png" 
                    alt="Everton Cerbelo - Consultor Financeiro Ademicon" 
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute bottom-4 left-4 right-4 z-20">
                    <div className="glass-badge rounded-xl px-4 py-3 flex items-center gap-3">
                      <div className="w-8 h-8 bg-brand-red/20 rounded-full flex items-center justify-center">
                        <ShieldCheck size={16} className="text-brand-red-light" />
                      </div>
                      <div>
                        <p className="text-white text-sm font-semibold leading-tight">Everton Cerbelo</p>
                        <p className="text-gray-400 text-xs">Consultor licenciado Ademicon</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
              { icon: Briefcase, title: "Dinheiro parado", desc: "Deixar o capital sem uma estratégia clara de planejamento e aquisição patrimonial.", colSpan: "lg:col-span-2" }
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
                Consórcio: uma <span className="text-brand-red">estratégia inteligente</span> para conquistar bens e patrimônio
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
              <div className="relative max-w-[380px] mx-auto">
                <div className="photo-frame rounded-2xl">
                  <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden">
                    <Image src="/everton2.png" alt="Estratégia Financeira" fill className="object-cover object-top" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Por que escolher a Ademicon */}
      <section className="py-24 bg-brand-graphite text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1] tracking-tighter">
              Por que escolher a <span className="text-brand-red-light">Ademicon</span>
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
      <section className="py-24 bg-brand-cream" id="sobre">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="flex-1 w-full max-w-md lg:max-w-none"
            >
              <div className="relative max-w-[360px] mx-auto">
                <div className="photo-frame rounded-2xl">
                  <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden">
                    <Image src="/everton3.png" alt="Everton Cerbelo" fill className="object-cover object-top" />
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="flex-1">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-brand-graphite leading-[1.15] tracking-tight">
                Everton Cerbelo
              </h2>
              <p className="text-lg text-brand-gray mb-6 leading-relaxed">
                Gestor e consultor financeiro licenciado pela Ademicon, atuando com foco em planejamento, consórcio e estratégias para formação de patrimônio.
              </p>
              <p className="text-lg text-brand-gray mb-8 leading-relaxed">
                Seu trabalho é orientar clientes que desejam investir com mais segurança, fugir dos juros abusivos e transformar sonhos em conquistas reais por meio de uma análise personalizada.
              </p>
              <ul className="space-y-3 mb-8">
                {["Atendimento consultivo e personalizado", "Especialista em compra planejada", "Consultor licenciado Ademicon", "Foco em construção patrimonial"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-brand-graphite">
                    <CheckCircle2 className="text-brand-red shrink-0" size={20} />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="p-5 bg-white border-l-4 border-brand-gold rounded-r-xl italic text-brand-gray">
                "Mais do que vender consórcio, o objetivo é construir uma estratégia para o seu futuro."
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
              <motion.div 
                key={i} 
                whileHover={{ y: -5, boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.05)" }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4 transition-all duration-300 hover:border-brand-red/10 group cursor-default"
              >
                <CheckCircle2 className="text-brand-red shrink-0 group-hover:scale-110 transition-transform duration-300" size={24} />
                <span className="font-medium text-brand-graphite group-hover:text-brand-red transition-colors duration-300">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Para quem é */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/[0.03] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-gold/[0.04] rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-brand-red/10 text-brand-red rounded-full text-sm font-semibold mb-4">
              Perfil ideal
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-brand-graphite leading-[1.1] tracking-tighter">
              Essa estratégia é para você que deseja…
            </h2>
            <p className="text-lg text-brand-gray max-w-2xl mx-auto">
              Não importa o momento financeiro. Se você tem um objetivo, existe um plano sob medida para alcançá-lo.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          >
            {[
              { icon: Building2, title: "Comprar um imóvel", desc: "Casa própria, terreno, apartamento ou imóvel de investimento." },
              { icon: Car, title: "Trocar de veículo", desc: "Carro novo, seminovo, moto ou veículo utilitário." },
              { icon: LineChart, title: "Investir seu capital", desc: "Use o consórcio como ferramenta de alavancagem patrimonial." },
              { icon: TrendingUp, title: "Formar patrimônio", desc: "Construa ativos de forma programada e disciplinada." },
              { icon: Target, title: "Planejar o futuro", desc: "Organize suas finanças com previsibilidade e segurança." },
              { icon: Briefcase, title: "Expandir negócios", desc: "Frota, maquinário e infraestrutura para sua empresa crescer." },
              { icon: ShieldCheck, title: "Sair do aluguel", desc: "Pare de pagar aluguel e conquiste o seu espaço próprio." },
              { icon: CheckCircle2, title: "Carta de crédito estratégica", desc: "Tenha poder de compra à vista com planejamento inteligente." }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className="group relative bg-gray-50/80 border border-gray-100 p-8 rounded-2xl hover:border-brand-red/30 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col items-center text-center overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-red/5 via-transparent to-brand-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className="relative z-10 w-14 h-14 bg-gradient-to-br from-red-50 to-red-100 border border-red-100 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-brand-red/10 transition-all duration-500">
                  <item.icon className="text-brand-red" size={26} />
                </div>
                <h3 className="relative z-10 text-lg font-bold text-brand-graphite mb-2 group-hover:text-brand-red transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="relative z-10 text-sm text-brand-gray leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mt-16">
            <p className="text-brand-gray mb-6 text-lg">Se identificou? Fale com Everton e descubra o melhor plano para você.</p>
            <a
              href="#simulacao"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-red hover:bg-brand-red-light text-white rounded-xl font-bold text-lg transition-colors shadow-lg shadow-brand-red/20"
            >
              Solicitar simulação gratuita <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* 8. Tipos de consórcio — CTAs individuais */}
      <section className="py-24 bg-brand-graphite text-white">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-[1.1] tracking-tighter">
              Qual é o seu <span className="text-brand-red-light">objetivo</span>?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Escolha o tipo de consórcio ideal para você e receba uma simulação personalizada.
            </p>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Building2, title: "Consórcio imobiliário", desc: "Casa própria, terreno, imóvel na planta, construção ou reforma — tudo sem juros de financiamento.", cta: "Simular imóvel", type: "consórcio imobiliário" },
              { icon: Car, title: "Consórcio de veículos", desc: "Carro novo, seminovo, moto ou veículo pesado com parcelas que cabem no seu planejamento.", cta: "Simular veículo", type: "consórcio de veículo" },
              { icon: Briefcase, title: "Consórcio para empresas", desc: "Expansão comercial, frota, maquinário ou infraestrutura para o crescimento do seu negócio.", cta: "Simular empresa", type: "consórcio para empresa" },
              { icon: TrendingUp, title: "Consórcio como estratégia", desc: "Use o consórcio como ferramenta de planejamento financeiro para formação e diversificação de patrimônio.", cta: "Simular estratégia", type: "consórcio como estratégia de patrimônio" }
            ].map((tipo, i) => (
              <motion.div key={i} variants={fadeIn} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:border-brand-red/30 transition-all duration-300 group flex flex-col">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-red/20 transition-colors duration-300">
                  <tipo.icon className="text-brand-gold group-hover:text-brand-red-light transition-colors" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{tipo.title}</h3>
                <p className="text-gray-400 mb-8 flex-1 text-sm leading-relaxed">{tipo.desc}</p>
                <a 
                  href={whatsappByType(tipo.type)} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("whatsapp_click", { location: "tipo_consorcio", tipo: tipo.type })}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-red hover:bg-brand-red-dark text-white rounded-xl font-semibold transition-colors text-sm shadow-lg shadow-brand-red/10"
                  id={`cta-tipo-${i}`}
                >
                  <WhatsappIcon size={18} /> {tipo.cta}
                </a>
              </motion.div>
            ))}
          </motion.div>
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
      <section className="py-24 bg-brand-graphite text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-6 max-w-3xl mx-auto leading-tight tracking-tight">
            Descubra qual plano de consórcio Ademicon combina com seu objetivo
          </h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto text-gray-400">
            Receba uma análise personalizada e entenda como o consórcio pode ser usado para compra planejada, construção de patrimônio e planejamento financeiro.
          </p>
          <motion.a 
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
            onClick={() => trackEvent("whatsapp_click", { location: "cta_autoridade" })}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-red hover:bg-brand-red-dark text-white rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg shadow-brand-red/20 hover:shadow-xl hover:shadow-brand-red/30"
            id="cta-autoridade"
          >
            <WhatsappIcon size={22} /> Receber análise no WhatsApp
          </motion.a>
        </div>
      </section>

      {/* 12. FAQ — SEO otimizado */}
      <section className="py-24 bg-brand-gray-light">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-center tracking-tighter">Perguntas <span className="text-brand-red">frequentes</span></h2>
            <p className="text-center text-brand-gray mb-12 text-lg">Tudo o que você precisa saber sobre consórcio Ademicon antes de dar o próximo passo.</p>
          </motion.div>
          <div className="space-y-4">
            {[
              { q: "O que é consórcio e como funciona?", a: "O consórcio é uma modalidade de compra planejada onde um grupo de pessoas contribui mensalmente para um fundo comum. Periodicamente, participantes são contemplados por sorteio ou lance e recebem uma carta de crédito para adquirir o bem desejado. Não há cobrança de juros — apenas uma taxa de administração, tornando o consórcio muito mais econômico que um financiamento tradicional." },
              { q: "Qual a diferença entre consórcio e financiamento?", a: "A principal diferença é o custo. No financiamento, você paga juros compostos que podem dobrar o valor do bem. No consórcio Ademicon, não há juros — apenas uma taxa de administração diluída nas parcelas. Além disso, o consórcio funciona como uma ferramenta de planejamento financeiro, incentivando a disciplina na formação de patrimônio." },
              { q: "Posso usar o consórcio para comprar imóvel?", a: "Sim. O consórcio imobiliário Ademicon permite comprar casa, apartamento, terreno, imóvel na planta, construir ou reformar. Também é possível usar a carta de crédito para quitar um financiamento imobiliário já existente, reduzindo significativamente o custo total." },
              { q: "O consórcio Ademicon é seguro?", a: "Sim. A Ademicon é uma das maiores administradoras de consórcio do Brasil, autorizada e fiscalizada pelo Banco Central. Todos os grupos são regulamentados e o seu dinheiro fica protegido em fundo administrado conforme as normas do setor." },
              { q: "Como funciona a contemplação?", a: "A contemplação pode acontecer de duas formas: por sorteio mensal (realizado nas assembleias do grupo) ou por lance (onde você pode ofertar um valor para antecipar sua carta de crédito). Cada grupo tem suas regras específicas, e o consultor Everton Cerbelo pode orientar sobre a melhor estratégia para o seu caso." },
              { q: "Posso usar o consórcio para investir?", a: "Sim. Muitas pessoas utilizam o consórcio como ferramenta de planejamento financeiro e formação de patrimônio. Com uma carta de crédito, é possível adquirir bens que tendem a valorizar, como imóveis, utilizando a disciplina do consórcio como uma estratégia de organização financeira de médio e longo prazo." },
              { q: "Como faço uma simulação com Everton Cerbelo?", a: "Simples: clique no botão de WhatsApp em qualquer lugar desta página ou preencha o formulário de simulação. Everton Cerbelo, consultor financeiro licenciado Ademicon, vai analisar seu objetivo e montar um plano personalizado para você." }
            ].map((faq, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <button 
                  onClick={() => toggleFaq(i)}
                  className="w-full px-6 py-5 text-left font-bold flex items-center justify-between hover:bg-gray-50 text-lg"
                >
                  {faq.q}
                  <ChevronDown className={`shrink-0 ml-4 transform transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-brand-gray leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. Seção de Confiança */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-red/10 text-brand-red rounded-full text-sm font-semibold mb-6">
                <UserCheck size={18} /> Consultor licenciado
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-6 text-brand-graphite leading-[1.1] tracking-tighter">
                Você será atendido por um <span className="text-brand-red">consultor licenciado Ademicon</span>
              </h2>
              <p className="text-lg text-brand-gray leading-relaxed mb-6">
                Everton Cerbelo acompanha você de forma consultiva, analisando seu objetivo, seu prazo e o melhor caminho para transformar planejamento em patrimônio.
              </p>
              <ul className="space-y-3">
                {["Atendimento personalizado e individual", "Simulações ajustadas ao seu perfil financeiro", "Acompanhamento do início ao fim do processo"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-brand-graphite">
                    <CheckCircle2 className="text-brand-red shrink-0" size={20} />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-shrink-0 w-full max-w-[280px]">
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/everton3.png" alt="Everton Cerbelo - Consultor Ademicon" fill className="object-cover object-top" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 14. Prova Social — Avaliações Reais */}
      <section className="py-20 bg-brand-gray-light">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-4">O que nossos clientes dizem</h2>
            <p className="text-brand-gray text-lg">Avaliações reais de clientes que planejaram com a Ademicon.</p>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { 
                name: "Ronaldo Quirino", 
                role: "Comércio de Hortifrutigranjeiro",
                text: "Melhor empresa de consórcios do Brasil, já comprei 3 veículos com a ademicon, prazos curtos, sem tanta burocracia e com uma entrega e segurança incrível! Todas as cartas contempladas num curto espaço de tempo graças ao acompanhamento do consultor!!",
                initials: "RQ",
                link: "https://share.google/ByE3RJsNitYHFNIKY"
              },
              { 
                name: "Elioenai Souza Silva", 
                role: "Cliente Ademicon",
                text: "Sem dúvidas a maior empresa do ramo de consorcio e investimento do pais, 100% confiável, entrega o que promete e tem a equipe mais preparada para auxiliar na escolha da melhor forma de investir nosso capital.",
                initials: "ES",
                link: "https://share.google/5xiCK2FRdpqinr5ok"
              },
              { 
                name: "Claudio Almeida", 
                role: "Cliente Ademicon",
                text: "Posso afirmar com toda segurança que o consórcio Ademicon é uma das melhores escolhas que já fiz. A empresa oferece credibilidade, solidez e um atendimento diferenciado, sempre com transparência e respeito ao cliente. Além disso, as soluções são flexíveis e permitem conquistar imóveis, veículos e serviços de forma planejada e inteligente, sem os altos juros de um financiamento tradicional.",
                initials: "CA",
                link: "https://share.google/FQcTTr0VBv8AnpCDZ"
              }
            ].map((review, i) => (
              <motion.div key={i} variants={fadeIn} className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm flex flex-col">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, s) => <Star key={s} size={16} className="text-brand-gold fill-brand-gold" />)}
                </div>
                <p className="text-brand-gray italic mb-6 leading-relaxed flex-1">&quot;{review.text}&quot;</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-red/10 text-brand-red rounded-full flex items-center justify-center text-sm font-bold">{review.initials}</div>
                    <div>
                      <p className="font-bold text-brand-graphite text-sm">{review.name}</p>
                      <p className="text-xs text-gray-400">{review.role}</p>
                    </div>
                  </div>
                  <a 
                    href={review.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-xs text-brand-red hover:underline font-medium shrink-0"
                    title="Ver avaliação original no Google"
                  >
                    Verificar ↗
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 15. Formulário de Lead */}
      <section id="simulacao" className="py-24 gradient-form">
        <div className="container mx-auto px-6 max-w-xl">
          <div className="bg-white p-6 md:p-12 rounded-2xl shadow-2xl overflow-hidden">
            <h2 className="text-xl md:text-3xl font-extrabold mb-3 text-center text-brand-graphite leading-[1.2] tracking-tight">
              Receba sua <span className="text-brand-red">análise personalizada</span>
            </h2>
            <p className="text-center text-brand-gray mb-8 text-sm">Preencha seus dados e receba uma simulação diretamente no WhatsApp.</p>
            <form className="space-y-5" onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const honeypot = formData.get("honeypot_field");
              if (honeypot) return;

              const nome = formData.get("nome");
              const wpp = formData.get("whatsapp");
              const objetivo = formData.get("objetivo");
              const valor = formData.get("valor") || "Não informado";
              
              trackEvent("form_submit", { objetivo: String(objetivo), valor: String(valor) });

              const text = encodeURIComponent(`Olá Everton, vim pelo site e gostaria de uma simulação personalizada.\n\n*Meus dados:*\nNome: ${nome}\nWhatsApp: ${wpp}\nObjetivo: ${objetivo}\nValor aproximado: ${valor}`);
              window.open(`https://wa.me/5541988526336?text=${text}`, '_blank');
            }}>
              <div aria-hidden="true" className="absolute left-[-9999px] top-[-9999px]">
                <input type="text" name="honeypot_field" tabIndex={-1} autoComplete="off" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-brand-graphite">Nome</label>
                <input name="nome" type="text" required placeholder="Seu nome completo" className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-brand-graphite">WhatsApp</label>
                <input 
                  name="whatsapp" type="tel" required 
                  value={whatsapp} onChange={handlePhoneMask}
                  placeholder="(00) 00000-0000"
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all" 
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-brand-graphite">Qual seu objetivo?</label>
                <select name="objetivo" className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all bg-white">
                  <option>Comprar imóvel</option>
                  <option>Comprar veículo</option>
                  <option>Formar patrimônio</option>
                  <option>Expandir empresa</option>
                  <option>Planejamento financeiro</option>
                  <option>Outro</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-brand-graphite">Valor aproximado desejado</label>
                <select name="valor" className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all bg-white">
                  <option>Até R$ 50 mil</option>
                  <option>R$ 50 mil a R$ 150 mil</option>
                  <option>R$ 150 mil a R$ 300 mil</option>
                  <option>R$ 300 mil a R$ 500 mil</option>
                  <option>Acima de R$ 500 mil</option>
                </select>
              </div>
              <button 
                type="submit" 
                id="form-submit-btn"
                className="w-full py-4 px-4 bg-brand-red hover:bg-brand-red-dark text-white font-bold rounded-xl transition-colors text-base md:text-lg flex items-center justify-center gap-2 md:gap-3 shadow-lg shadow-brand-red/20"
              >
                <WhatsappIcon size={20} className="shrink-0" /> <span className="leading-tight">Receber análise no WhatsApp</span>
              </button>
              <p className="text-xs text-gray-400 text-center">Seus dados serão usados apenas para contato consultivo sobre sua simulação. Nenhuma informação é armazenada.</p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-graphite text-gray-400 pt-16 pb-32 lg:pb-16 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-12">
            {/* Col 1: Everton */}
            <div>
              <h3 className="text-white font-bold text-lg mb-1">Everton Cerbelo</h3>
              <p className="text-sm mb-6">Consultor financeiro licenciado Ademicon</p>
              <div className="space-y-3 text-sm">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors">
                  <WhatsappIcon size={16} className="text-brand-gold" /> (41) 98852-6336
                </a>
                <a href="mailto:Evertonbc.ademilar@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors">
                  <Mail size={16} className="text-brand-gold" /> Evertonbc.ademilar@gmail.com
                </a>
                <a href="https://instagram.com/cerbelo_everton" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors">
                  <span className="text-brand-gold text-base">@</span> cerbelo_everton
                </a>
              </div>
            </div>
            {/* Col 2: Atendimento */}
            <div>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Atendimento</h4>
              <p className="text-sm leading-relaxed">
                R. Barão do Cerro Azul, 1869<br />
                Salas 16, 17 e 18 - Centro<br />
                Piraquara - PR, 83301-010
              </p>
            </div>
            {/* Col 3: Aviso Legal */}
            <div>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Aviso legal</h4>
              <p className="text-xs leading-relaxed text-gray-500">
                As informações desta página têm caráter informativo e consultivo. A contratação está sujeita à análise, disponibilidade de planos e regras da administradora.
              </p>
            </div>
          </div>
          <div className="border-t border-white/5 pt-6 text-xs text-gray-600 text-center">
            Desenvolvido pela <a href="https://iris-agency.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">agência Iris</a>
          </div>
        </div>
      </footer>

      {/* Floating Buttons */}
      <div className="fixed bottom-24 md:bottom-6 right-6 z-[60] flex flex-col items-center gap-4">
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
          onClick={() => trackEvent("whatsapp_click", { location: "floating_button" })}
          className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl"
          aria-label="Falar no WhatsApp"
          id="floating-whatsapp"
        >
          <WhatsappIcon size={32} />
        </motion.a>
      </div>
    </main>
  );
}
