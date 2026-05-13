"use client";

import { AnimatePresence, motion } from "framer-motion";
import { 
  ArrowRight, 
  Target, 
  TrendingUp, 
  ShieldCheck, 
  CheckCircle2, 
  Landmark,
  Building2, 
  Car, 
  Briefcase, 
  LineChart, 
  Tags,
  Trophy,
  Factory,
  BadgeCheck,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Star,
  UserCheck,
  Mail,
  Home as HomeIcon,
  X
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ChangeEvent } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { trackEvent } from "@/components/Analytics";

const WhatsappIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

const WHATSAPP_BASE = "https://wa.me/5541988526336?text=";
const createWhatsAppLink = (message: string) => `${WHATSAPP_BASE}${encodeURIComponent(message)}`;
const WHATSAPP_LINK = createWhatsAppLink("Olá, Everton! Vim pelo site e gostaria de receber um diagnóstico personalizado.");

const OBJECTIVE_WHATSAPP_MESSAGES = {
  imovel: "Olá, Everton! Vim pelo site e quero planejar a compra de um imóvel.",
  veiculo: "Olá, Everton! Vim pelo site e quero planejar a compra de um veículo.",
  patrimonio: "Olá, Everton! Vim pelo site e quero entender uma estratégia para construir patrimônio.",
  empresa: "Olá, Everton! Vim pelo site e quero avaliar uma estratégia para minha empresa."
} as const;

const ANALYSIS_DELIVERABLES = [
  "Entendimento do seu objetivo financeiro",
  "Avaliação do melhor prazo para sua estratégia",
  "Comparação entre compra planejada e financiamento",
  "Simulação adequada ao seu perfil",
  "Próximo passo recomendado com clareza"
] as const;

const OPPORTUNITY_CARDS = [
  {
    icon: Building2,
    segment: "Imóvel",
    group: "12184",
    credit: "R$ 80.000,00",
    originalInstallment: "de R$ 451,60",
    installment: "R$ 269,84",
    currentLabel: "Parcela liberada",
    term: "220 meses",
    status: "Grupo em andamento",
    supplementalText: "",
    message: "Olá, Everton! Vim pelo site e gostaria de consultar a oportunidade de imóvel com crédito de R$ 80.000,00."
  },
  {
    icon: Car,
    segment: "Auto",
    group: "1707",
    credit: "R$ 40.000,00",
    originalInstallment: "de R$ 516,44",
    installment: "R$ 278,88",
    currentLabel: "Parcela liberada",
    term: "90 meses",
    status: "Grupo em andamento",
    supplementalText: "",
    message: "Olá, Everton! Vim pelo site e gostaria de consultar a oportunidade de auto com crédito de R$ 40.000,00."
  },
  {
    icon: Briefcase,
    segment: "Serviços",
    group: "60",
    credit: "R$ 15.000,00",
    originalInstallment: "",
    installment: "R$ 305,69",
    currentLabel: "Parcela liberada",
    term: "49 meses",
    status: "Grupo em andamento",
    supplementalText: "Plano com parcelas lineares",
    message: "Olá, Everton! Vim pelo site e gostaria de consultar a oportunidade de serviços com crédito de R$ 15.000,00."
  },
  {
    icon: Target,
    segment: "Bens móveis",
    group: "10100",
    credit: "R$ 102.180,00",
    originalInstallment: "de R$ 1.982,77",
    installment: "R$ 1.336,11",
    currentLabel: "Condição atual",
    term: "91 meses",
    status: "Grupo em andamento",
    supplementalText: "",
    message: "Olá, Everton! Vim pelo site e gostaria de consultar a oportunidade de bens móveis com crédito de R$ 102.180,00."
  }
] as const;

const RESULT_IMAGES = [
  {
    src: "/resultados-reais/resultado-04.jpeg",
    alt: "Exemplo compartilhado de compra contemplada e Pix recebido"
  },
  {
    src: "/resultados-reais/resultado-02.jpeg",
    alt: "Exemplo compartilhado de compra contemplada"
  },
  {
    src: "/resultados-reais/resultado-03.jpeg",
    alt: "Exemplo compartilhado de contemplação"
  },
  {
    src: "/resultados-reais/resultado-07.jpeg",
    alt: "Exemplo compartilhado de cliente contemplado"
  },
  {
    src: "/resultados-reais/resultado-01.jpeg",
    alt: "Exemplo compartilhado de resultado real"
  },
  {
    src: "/resultados-reais/resultado-05.jpeg",
    alt: "Exemplo compartilhado de oportunidade"
  },
  {
    src: "/resultados-reais/resultado-06.jpeg",
    alt: "Exemplo compartilhado de operação"
  }
] as const;

const SHOW_ABOUT_SECTION = false;

type PartnerLogo = {
  name: string;
  src: string;
  darkTile?: boolean;
  isTall?: boolean;
};

type PartnerCategory = {
  icon: typeof Landmark;
  title: string;
  desc: string;
  logos: PartnerLogo[];
};

const PARTNER_CATEGORIES: readonly PartnerCategory[] = [
  {
    icon: Landmark,
    title: "Parceiros financeiros",
    desc: "Instituições e plataformas que reforçam a estrutura, segurança e credibilidade do ecossistema Ademicon.",
    logos: [
      { name: "BTG Pactual", src: "/parceiros/btg-pactual.svg" },
      { name: "Banco BV", src: "/parceiros/banco-bv.svg" },
      { name: "PicPay", src: "/parceiros/picpay.svg" },
      { name: "Fibra Corretora", src: "/parceiros/fibra-corretora-oficial.png", isTall: true }
    ]
  },
  {
    icon: Tags,
    title: "Parceiros de marcas",
    desc: "Parcerias comerciais que aproximam a Ademicon de grandes públicos e fortalecem sua presença nacional.",
    logos: [
      { name: "Big Brother Brasil", src: "/parceiros/big-brother-brasil.png" },
      { name: "Mitsubishi Motors", src: "/parceiros/mitsubishi-motors.svg", isTall: true },
      { name: "Compre Náutica", src: "/parceiros/compre-nautica-oficial.png" },
      { name: "PopCon Grupo Massa", src: "/parceiros/popcon-grupo-massa.png" }
    ]
  },
  {
    icon: Trophy,
    title: "Clubes e esporte",
    desc: "A presença da Ademicon no esporte reforça conexão, confiança e relacionamento com diferentes públicos.",
    logos: [
      { name: "Flamengo", src: "/parceiros/flamengo.svg", isTall: true },
      { name: "São Paulo FC", src: "/parceiros/sao-paulo-fc.svg", isTall: true },
      { name: "Coritiba", src: "/parceiros/coritiba.svg", isTall: true },
      { name: "Juventude", src: "/parceiros/juventude.svg", isTall: true },
      { name: "Rio Open", src: "/parceiros/rio-open-oficial.png", isTall: true }
    ]
  },
  {
    icon: Factory,
    title: "Indústria e veículos",
    desc: "Parcerias com marcas relevantes do setor automotivo e industrial fortalecem soluções para diferentes objetivos.",
    logos: [
      { name: "New Holland", src: "/parceiros/new-holland.png" },
      { name: "Iveco", src: "/parceiros/iveco-oficial.png" },
      { name: "Mitsubishi Motors", src: "/parceiros/mitsubishi-motors.svg", isTall: true }
    ]
  },
  {
    icon: BadgeCheck,
    title: "Consórcios licenciados",
    desc: "Produtos e frentes comerciais que conectam a Ademicon a públicos apaixonados por grandes marcas.",
    logos: [
      { name: "Consórcio do Peixe", src: "/parceiros/consorcio-santos.png", isTall: true },
      { name: "Consórcio Vitória", src: "/parceiros/consorcio-vitoria.png", isTall: true },
      { name: "Consórcio Palmeiras", src: "/parceiros/consorcio-palmeiras.png", isTall: true }
    ]
  }
];

const TRUST_PILLARS = [
  {
    title: "Segurança",
    desc: "Mais de 30 anos de história e credibilidade."
  },
  {
    title: "Experiência",
    desc: "Atuação consolidada no mercado de consórcios."
  },
  {
    title: "Solidez",
    desc: "Parcerias que fortalecem confiança."
  },
  {
    title: "Transparência",
    desc: "Processos claros do início ao fim."
  },
  {
    title: "Planejamento",
    desc: "Soluções para diferentes objetivos."
  }
] as const;

const FAQ_ITEMS = [
  {
    q: "O que é uma estratégia de compra planejada?",
    a: "É uma forma de organizar a conquista de bens com previsibilidade, sem entrar em juros altos de financiamento. Você define objetivo, prazo e faixa de valor para avançar com mais segurança."
  },
  {
    q: "Qual a diferença entre compra planejada e financiamento?",
    a: "No financiamento, o custo final costuma subir por causa dos juros compostos. Na compra planejada, você segue um plano com parcelas e taxa de administração, o que tende a tornar o processo mais equilibrado no longo prazo."
  },
  {
    q: "Posso usar essa estratégia para comprar imóvel ou veículo?",
    a: "Sim. É possível planejar a compra de imóvel, veículo, terreno, reforma e outros objetivos patrimoniais. A análise personalizada ajuda a ajustar o plano ao seu momento financeiro."
  },
  {
    q: "Como funciona a contemplação?",
    a: "A contemplação pode ocorrer por sorteio nas assembleias ou por lance, conforme as regras do grupo. Com orientação consultiva, você entende os cenários e escolhe a melhor estratégia para o seu perfil."
  },
  {
    q: "É seguro fazer com a Ademicon?",
    a: "Sim. A Ademicon é uma administradora autorizada e fiscalizada pelo Banco Central. Os grupos seguem regras do setor, com estrutura formal para dar mais transparência e segurança ao cliente."
  },
  {
    q: "Serve para quem quer investir e construir patrimônio?",
    a: "Serve, principalmente para quem busca disciplina e visão de médio e longo prazo. A estratégia pode apoiar a formação patrimonial com planejamento e decisões mais conscientes."
  },
  {
    q: "Como faço uma análise com Everton Cerbelo?",
    a: "É simples: você chama no WhatsApp ou preenche o formulário da página. Everton entende seu objetivo, avalia possibilidades e monta uma orientação personalizada para o seu caso."
  }
] as const;

// Conversion tracking - prepared for GA4, Meta Pixel, Google Ads
// Conversion tracking moved to @/components/Analytics.tsx

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function Home() {
  const router = useRouter();
  const [activeResultIndex, setActiveResultIndex] = useState(0);
  const [isResultModalOpen, setIsResultModalOpen] = useState(false);

  const activeResultImage = RESULT_IMAGES[activeResultIndex];
  const showPreviousResult = () => {
    setActiveResultIndex((current) => (current === 0 ? RESULT_IMAGES.length - 1 : current - 1));
  };
  const showNextResult = () => {
    setActiveResultIndex((current) => (current === RESULT_IMAGES.length - 1 ? 0 : current + 1));
  };

  const objectiveCards = [
    {
      icon: Building2,
      title: "Consórcio imobiliário",
      desc: "Casa própria, terreno, imóvel na planta, construção ou reforma, tudo sem juros de financiamento.",
      cta: "Descobrir meu melhor caminho",
      tracking: "imovel",
      link: createWhatsAppLink(OBJECTIVE_WHATSAPP_MESSAGES.imovel)
    },
    {
      icon: Car,
      title: "Consórcio de veículos",
      desc: "Carro novo, seminovo, moto ou veículo pesado com parcelas que cabem no seu planejamento.",
      cta: "Receber diagnóstico personalizado",
      tracking: "veiculo",
      link: createWhatsAppLink(OBJECTIVE_WHATSAPP_MESSAGES.veiculo)
    },
    {
      icon: Briefcase,
      title: "Consórcio para empresas",
      desc: "Expansão comercial, frota, maquinário ou infraestrutura para o crescimento do seu negócio.",
      cta: "Planejar minha empresa",
      tracking: "empresa",
      link: createWhatsAppLink(OBJECTIVE_WHATSAPP_MESSAGES.empresa)
    },
    {
      icon: TrendingUp,
      title: "Consórcio como estratégia",
      desc: "Use o consórcio como ferramenta de planejamento financeiro para formação e diversificação de patrimônio.",
      cta: "Fazer minha análise patrimonial",
      tracking: "patrimonio",
      link: createWhatsAppLink(OBJECTIVE_WHATSAPP_MESSAGES.patrimonio)
    }
  ] as const;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FinancialService",
        name: "Everton Cerbelo - Consultor Ademicon",
        description:
          "Consultor financeiro licenciado Ademicon em Piraquara - PR, com atendimento consultivo para simulação de consórcio, compra planejada e construção de patrimônio.",
        telephone: "+55-41-98852-6336",
        email: "Evertonbc.ademilar@gmail.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "R. Barão do Cerro Azul, 1869, Salas 16, 17 e 18 - Centro",
          addressLocality: "Piraquara",
          addressRegion: "PR",
          postalCode: "83301-010",
          addressCountry: "BR"
        },
        areaServed: ["Piraquara", "Curitiba", "Paraná"],
        sameAs: ["https://instagram.com/cerbelo_everton"]
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQ_ITEMS.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a
          }
        }))
      }
    ]
  };

  const handlePhoneMask = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.currentTarget.value.replace(/\D/g, "");
    if (value.length > 11) value = value.substring(0, 11);
    value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
    value = value.replace(/(\d)(\d{4})$/, '$1-$2');
    e.currentTarget.value = value;
  };

  return (
    <main className="min-h-screen font-sans bg-white text-brand-graphite overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c")
        }}
      />
      {/* 1. Hero Section */}
      <section id="hero" className="relative py-16 md:py-24 lg:py-0 gradient-hero text-white min-h-[100dvh] flex items-center">
        <div className="absolute inset-0 bg-[url('/bg-pattern.svg')] opacity-5 bg-repeat"></div>
        <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:-mt-16">
          <motion.div 
            initial="hidden" animate="visible" variants={fadeIn}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex flex-wrap justify-center lg:justify-start gap-2 mb-8">
              <span className="glass-badge px-3 py-1 text-gray-300 rounded-full text-xs font-medium tracking-wide uppercase">
                Consultor licenciado Ademicon
              </span>
              <span className="glass-badge px-3 py-1 text-gray-400 rounded-full text-xs font-medium tracking-wide uppercase">
                Consultor Ademicon em Piraquara - PR
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-8 leading-[1.15] tracking-tight max-w-2xl mx-auto lg:mx-0">
              Invista com estratégia.{" "}
              <br className="hidden sm:block" />
              Construa <span className="text-brand-red-light">patrimônio</span> com planejamento.
            </h1>
            <p className="text-base lg:text-lg text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Com uma análise personalizada, Everton Cerbelo ajuda você a entender o melhor caminho para investir com estratégia, planejar suas conquistas e construir patrimônio com mais clareza, segurança e visão de futuro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.a 
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} 
                href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
                onClick={() => trackEvent("whatsapp_click", { location: "hero_cta" })}
                className="w-full sm:w-auto px-8 py-4 bg-brand-red hover:bg-brand-red-dark transition-colors text-white rounded-xl font-semibold text-base flex items-center justify-center gap-3 shadow-lg shadow-brand-red/20"
                id="hero-whatsapp-cta"
              >
                <WhatsappIcon size={20} /> Receber diagnóstico personalizado
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
              {/* Design Spell: Multi-layered Aurora Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[105%] z-0 pointer-events-none opacity-80">
                <div className="absolute inset-0 bg-brand-red-dark/25 blur-[140px] rounded-[100%] animate-pulse-slow"></div>
                <div className="absolute inset-12 bg-brand-gold/15 blur-[100px] rounded-[100%] animate-float" style={{ animationDelay: '2s' }}></div>
              </div>
              <div className="photo-frame rounded-2xl relative z-10">
                <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10"></div>
                  <Image 
                    src="/everton1.png" 
                    alt="Everton Cerbelo - Consultor Financeiro Ademicon" 
                    fill
                    priority
                    quality={82}
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 90vw, 420px"
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
                O consórcio deixou de ser apenas uma forma de comprar, para se tornar uma poderosa ferramenta de planejamento patrimonial. Pode ser usado para compra planejada, aquisição de imóveis, veículos, expansão patrimonial e organização financeira.
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
                    <Image
                      src="/everton2.png"
                      alt="Everton Cerbelo explicando estratégia financeira personalizada"
                      fill
                      loading="lazy"
                      quality={78}
                      sizes="(max-width: 1024px) 85vw, 380px"
                      className="object-cover object-top"
                    />
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
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            className="max-w-4xl mx-auto mb-16"
          >
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

      {/* 5. Parceiros e grandes marcas */}
      <section className="py-24 bg-[#111111] text-white relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-red/30 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-4xl mx-auto text-center mb-14"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-red/10 border border-brand-red/20 text-brand-red-light rounded-full text-xs font-bold uppercase tracking-[0.18em] mb-6">
              Confiança institucional
            </span>
            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-[1.08] tracking-tighter">
              A força de grandes parceiros por trás da <span className="text-brand-red-light">Ademicon</span>
            </h2>
            <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A Ademicon constrói sua trajetória com parcerias institucionais, financeiras, esportivas e comerciais que reforçam segurança, solidez e confiança para quem deseja planejar o futuro.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto"
          >
            {PARTNER_CATEGORIES.map((category) => (
              <motion.div
                key={category.title}
                variants={fadeIn}
                className={`bg-white/[0.055] border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-xl shadow-2xl shadow-black/10 ${
                  category.title === "Consórcios licenciados" ? "lg:col-span-2" : ""
                }`}
              >
                <div className="flex items-start gap-4 mb-7">
                  <div className="w-12 h-12 rounded-2xl bg-brand-red/15 border border-brand-red/25 text-brand-red-light flex items-center justify-center shrink-0">
                    <category.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{category.desc}</p>
                  </div>
                </div>
                <div className={`grid grid-cols-2 gap-3 ${
                  category.logos.length <= 3 ? "sm:grid-cols-3" : "sm:grid-cols-4"
                }`}>
                  {category.logos.map((logo) => (
                    <div
                      key={logo.name}
                      className={`min-h-24 rounded-xl border px-3 py-4 flex items-center justify-center text-center transition-transform duration-300 hover:-translate-y-0.5 ${
                        logo.darkTile
                          ? "bg-brand-graphite border-white/10"
                          : "bg-white border-white/10 shadow-inner shadow-black/5"
                      }`}
                    >
                      <Image
                        src={logo.src}
                        alt={`Logo ${logo.name}`}
                        width={180}
                        height={88}
                        loading="lazy"
                        unoptimized
                        className={`w-full object-contain ${logo.isTall ? "max-h-16" : "max-h-12"}`}
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-6xl mx-auto mt-8 rounded-2xl overflow-hidden border border-brand-gold/20 bg-gradient-to-r from-[#5c0609] via-[#7d0a0f] to-[#3a0507] shadow-2xl shadow-brand-red/10"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
              {TRUST_PILLARS.map((pillar, index) => (
                <div
                  key={pillar.title}
                  className={`p-6 text-center ${index > 0 ? "border-t sm:border-t-0 sm:border-l" : ""} border-white/15`}
                >
                  <ShieldCheck className="text-brand-gold mx-auto mb-3" size={28} />
                  <h3 className="text-sm font-black uppercase tracking-wide text-brand-gold mb-2">{pillar.title}</h3>
                  <p className="text-xs text-white/85 leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <p className="text-xs text-gray-500 text-center max-w-3xl mx-auto mt-6 leading-relaxed">
            Referência institucional da Ademicon. O uso de marcas deve seguir materiais e autorizações oficiais disponibilizados pela administradora.
          </p>
        </div>
      </section>

      {/* 5. Conheça Everton Cerbelo */}
      {SHOW_ABOUT_SECTION ? (
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
                    <Image
                      src="/everton3.png"
                      alt="Everton Cerbelo em atendimento consultivo"
                      fill
                      loading="lazy"
                      quality={78}
                      sizes="(max-width: 1024px) 85vw, 360px"
                      className="object-cover object-top"
                    />
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
                Seu trabalho é orientar clientes de Piraquara, Curitiba, região metropolitana e todo o Paraná que desejam fugir dos juros abusivos e transformar sonhos em conquistas reais por meio de uma análise personalizada.
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
                &quot;Mais do que vender consórcio, o objetivo é construir uma estratégia para o seu futuro.&quot;
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      ) : null}

      {/* 6. Benefícios */}
      <section className="hidden py-24 bg-brand-gray-light">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Vantagens do consórcio Ademicon para planejamento financeiro</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Planejamento financeiro personalizado",
              "Estratégia para curto, médio e longo prazo",
              "Alternativa aos juros de financiamento",
              "Possibilidade de aquisição de bens",
              "Construção de patrimônio",
              "Atendimento consultivo individual",
              "Diagnóstico conforme seu objetivo",
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
      <section className="hidden py-24 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/[0.03] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-gold/[0.04] rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} 
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-brand-red/10 text-brand-red rounded-full text-sm font-semibold mb-4">
              Perfil ideal
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-brand-graphite leading-[1.1] tracking-tighter">
              Consórcio para imóvel, veículo, empresa e construção de patrimônio
            </h2>
            <p className="text-lg text-brand-gray max-w-2xl mx-auto">
              Não importa o momento financeiro. Se você tem um objetivo, existe um plano sob medida para alcançá-lo.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
          >
            {[
              { icon: Building2, title: "Comprar um imóvel", desc: "Casa própria, terreno, apartamento ou imóvel de investimento." },
              { icon: Car, title: "Trocar de veículo", desc: "Carro novo, seminovo, moto ou veículo utilitário." },
              { icon: LineChart, title: "Investir seu capital", desc: "Use o consórcio como uma ferramenta estratégica de planejamento patrimonial." },
              { icon: TrendingUp, title: "Formar patrimônio", desc: "Construa ativos de forma programada e disciplinada." },
              { icon: Target, title: "Planejar o futuro", desc: "Organize suas finanças com previsibilidade e segurança." },
              { icon: Briefcase, title: "Expandir negócios", desc: "Frota, maquinário e infraestrutura para sua empresa crescer." },
              { icon: ShieldCheck, title: "Sair do aluguel", desc: "Pare de pagar aluguel e conquiste o seu espaço próprio." },
              { icon: CheckCircle2, title: "Carta de crédito estratégica", desc: "Tenha poder de compra à vista com planejamento inteligente." }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className="group relative overflow-hidden bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-1 flex flex-col justify-between"
              >
                {/* Watermark icon background */}
                <div className="absolute -top-12 -right-12 opacity-[0.03] group-hover:opacity-[0.08] group-hover:scale-110 group-hover:-rotate-6 transition-all duration-700 pointer-events-none">
                  <item.icon size={200} />
                </div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-50 to-red-100 border border-red-100 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500">
                    <item.icon className="text-brand-red" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-brand-graphite group-hover:text-brand-red transition-colors duration-300">{item.title}</h3>
                  <p className="text-gray-500 text-lg leading-relaxed">{item.desc}</p>
                </div>
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
              Fazer minha análise patrimonial <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* 8. Tipos de consórcio — CTAs individuais */}
      <section id="consorcios" className="py-24 bg-brand-graphite text-white">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} 
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-[1.1] tracking-tighter">
              Escolha seu objetivo e receba uma <span className="text-brand-red-light">análise personalizada</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Imóvel, veículo, empresa ou construção patrimonial: Everton Cerbelo ajuda você a entender o melhor caminho para planejar sua próxima conquista.
            </p>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {objectiveCards.map((tipo, i) => (
              <motion.div key={i} variants={fadeIn} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:border-brand-red/30 transition-all duration-300 group flex flex-col">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-red/20 transition-colors duration-300">
                  <tipo.icon className="text-brand-gold group-hover:text-brand-red-light transition-colors" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{tipo.title}</h3>
                <p className="text-gray-400 mb-8 flex-1 text-sm leading-relaxed">{tipo.desc}</p>
                <a 
                  href={tipo.link}
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("whatsapp_click", { location: "tipo_consorcio", tipo: tipo.tracking })}
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

      {/* Atendimento, analise e presenca local */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_0.65fr] gap-12 items-center mb-12">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-red/10 text-brand-red rounded-full text-sm font-semibold mb-6">
                  <UserCheck size={18} /> Consultor licenciado
                </div>
                <h2 className="text-3xl md:text-5xl font-black mb-6 text-brand-graphite leading-[1.08] tracking-tighter">
                  Atendimento consultivo para transformar <span className="text-brand-red">planejamento em pr&oacute;ximo passo</span>
                </h2>
                <p className="text-lg text-brand-gray leading-relaxed">
                  Everton Cerbelo acompanha voc&ecirc; de forma personalizada, entende seu objetivo, avalia prazo e perfil financeiro e orienta o caminho mais adequado para avan&ccedil;ar com clareza.
                </p>
              </div>
              <div className="w-full max-w-[280px] lg:max-w-[320px] mx-auto">
                <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/everton3.png"
                    alt="Everton Cerbelo - Consultor Ademicon"
                    fill
                    loading="lazy"
                    quality={78}
                    sizes="(max-width: 1024px) 70vw, 320px"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="rounded-2xl border border-gray-100 bg-brand-gray-light p-6">
                <CheckCircle2 className="text-brand-red mb-4" size={24} />
                <h3 className="text-lg font-extrabold text-brand-graphite mb-2">Atendimento individual</h3>
                <p className="text-sm text-brand-gray leading-relaxed">
                  Diagn&oacute;stico ajustado ao seu momento, com acompanhamento do in&iacute;cio ao fim.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-100 bg-brand-gray-light p-6">
                <CheckCircle2 className="text-brand-red mb-4" size={24} />
                <h3 className="text-lg font-extrabold text-brand-graphite mb-2">O que voc&ecirc; recebe</h3>
                <p className="text-sm text-brand-gray leading-relaxed">
                  Entendimento do objetivo, compara&ccedil;&atilde;o de cen&aacute;rios, simula&ccedil;&atilde;o adequada e pr&oacute;ximo passo recomendado.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-100 bg-brand-gray-light p-6">
                <CheckCircle2 className="text-brand-red mb-4" size={24} />
                <h3 className="text-lg font-extrabold text-brand-graphite mb-2">Atendimento local</h3>
                <p className="text-sm text-brand-gray leading-relaxed">
                  Suporte para Piraquara, Curitiba, regi&atilde;o metropolitana, Paran&aacute; e outros estados por WhatsApp ou presencial com agenda.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="hidden py-24 bg-white">
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
                {["Atendimento personalizado e individual", "Diagnósticos ajustados ao seu perfil financeiro", "Acompanhamento do início ao fim do processo"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-brand-graphite">
                    <CheckCircle2 className="text-brand-red shrink-0" size={20} />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-shrink-0 w-full max-w-[280px]">
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/everton3.png"
                  alt="Everton Cerbelo - Consultor Ademicon"
                  fill
                  loading="lazy"
                  quality={78}
                  sizes="(max-width: 1024px) 70vw, 280px"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 9. Processo */}
      <section className="hidden py-24 bg-white">
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

      {/* 9.2 Resultados reais e oportunidades disponíveis */}
      <section id="resultados" className="py-28 md:py-32 bg-brand-graphite text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(216,35,31,0.12),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_34%)] pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="max-w-4xl mx-auto text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-black leading-[1.08] tracking-tighter mb-6">
              Resultados reais e oportunidades disponíveis
            </h2>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Veja exemplos de resultados compartilhados e algumas oportunidades por segmento para quem deseja planejar, investir e construir patrimônio com estratégia.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-14 items-center mb-24"
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] md:max-w-[420px] mx-auto lg:mx-0">
              <div className="pointer-events-none hidden md:block">
                <motion.div
                  animate={{ opacity: [0.55, 1, 0.55], x: [0, 4, 0], scale: [1, 1.04, 1] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -left-14 top-[28%] z-20"
                >
                  <ArrowRight
                    size={34}
                    className="text-brand-red-light drop-shadow-[0_0_10px_rgba(255,91,87,0.9)] rotate-[-18deg] md:scale-110 lg:scale-125"
                  />
                </motion.div>
                <motion.div
                  animate={{ opacity: [0.45, 0.9, 0.45], x: [0, -5, 0], y: [0, -2, 0], scale: [1, 1.03, 1] }}
                  transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: 0.35 }}
                  className="absolute -right-14 top-[62%] z-20"
                >
                  <ArrowRight
                    size={36}
                    className="text-brand-red-light drop-shadow-[0_0_12px_rgba(255,91,87,0.95)] rotate-[162deg] md:scale-110 lg:scale-125"
                  />
                </motion.div>
              </div>
              <div className="absolute -inset-5 rounded-[2.2rem] bg-brand-red/12 blur-2xl"></div>
              <div className="relative w-full rounded-[2rem] border border-white/12 bg-gradient-to-br from-white/[0.11] to-white/[0.04] p-3 shadow-[0_24px_52px_rgba(0,0,0,0.45)]">
                <div className="w-full rounded-[1.55rem] border border-brand-red/16 bg-[#101114] p-2">
                  <div className="relative w-full aspect-[9/14] overflow-hidden rounded-[1.25rem] bg-black">
                    <div className="pointer-events-none absolute left-1/2 top-2 z-10 h-1.5 w-20 -translate-x-1/2 rounded-full bg-white/20"></div>
                    <button
                      type="button"
                      onClick={() => setIsResultModalOpen(true)}
                      className="absolute inset-0 cursor-zoom-in"
                      aria-label="Abrir imagem do resultado em tela cheia"
                    >
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeResultImage.src}
                          initial={{ opacity: 0, scale: 1.015 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.992 }}
                          transition={{ duration: 0.34, ease: "easeInOut" }}
                          className="absolute inset-0"
                        >
                          <Image
                            src={activeResultImage.src}
                            alt={activeResultImage.alt}
                            fill
                            loading="lazy"
                            quality={82}
                            sizes="(max-width: 1024px) 88vw, 420px"
                            className="object-cover transition-transform duration-700 hover:scale-[1.015]"
                          />
                        </motion.div>
                      </AnimatePresence>
                    </button>
                    <button
                      type="button"
                      onClick={showPreviousResult}
                      className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
                      aria-label="Ver resultado anterior"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      type="button"
                      onClick={showNextResult}
                      className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
                      aria-label="Ver próximo resultado"
                    >
                      <ChevronRight size={24} />
                    </button>
                    <div className="absolute left-0 right-0 bottom-4 z-10 flex items-center justify-center gap-2">
                      {RESULT_IMAGES.map((image, index) => (
                        <button
                          key={image.src}
                          type="button"
                          onClick={() => setActiveResultIndex(index)}
                          className="h-2 rounded-full transition-all"
                          aria-label={`Ver resultado ${index + 1}`}
                        >
                          <motion.span
                            animate={{
                              width: index === activeResultIndex ? 28 : 8,
                              opacity: index === activeResultIndex ? 1 : 0.55,
                              backgroundColor: index === activeResultIndex ? "#d8231f" : "rgba(255,255,255,0.55)"
                            }}
                            transition={{ duration: 0.28, ease: "easeInOut" }}
                            className="block h-2 rounded-full"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-7 md:p-10 shadow-xl shadow-black/20">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-red/15 border border-brand-red/25 mb-7">
                <CheckCircle2 className="text-brand-red-light" size={26} />
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-5">
                Contemplações e resultados reais
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Exemplos reais compartilhados demonstram como o planejamento pode abrir caminhos para novas conquistas financeiras. Cada caso depende das condições do grupo, perfil e regras da administradora.
              </p>
              <p className="text-xs text-gray-500 border-t border-white/10 pt-5">
                Resultados individuais não garantem prazos, contemplações ou retornos específicos.
              </p>
            </div>
          </motion.div>

          <div className="mb-24 relative">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_35%,rgba(216,35,31,0.1),transparent_64%)]"></div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10"
            >
              <div>
                <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-3">
                  Menores oportunidades por segmento
                </h3>
                <p className="text-gray-400 max-w-2xl">
                  Condições consultivas organizadas para comparação rápida, com confirmação direta no atendimento.
                </p>
              </div>
              <span className="text-xs text-gray-500 border border-white/10 rounded-full px-4 py-2 w-fit">
                Disponibilidade sujeita a confirmação
              </span>
            </motion.div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
            >
              {OPPORTUNITY_CARDS.map((opportunity) => (
                <motion.div
                  key={opportunity.segment}
                  variants={fadeIn}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] via-white/[0.045] to-brand-red/[0.05] p-6 pt-7 shadow-xl shadow-black/15 transition-all duration-350 hover:-translate-y-1.5 hover:border-white/20 hover:shadow-[0_20px_46px_rgba(216,35,31,0.12)] flex flex-col"
                >
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_50%_120%,rgba(216,35,31,0.14),transparent_58%)]"></div>
                  <div className="flex items-center justify-between gap-4 mb-7">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center group-hover:bg-brand-red/20 transition-colors shrink-0">
                        <opportunity.icon className="text-brand-red-light" size={24} />
                      </div>
                      <h4 className="text-xl font-bold truncate">{opportunity.segment}</h4>
                    </div>
                    <span className="text-xs text-gray-400">Grupo {opportunity.group}</span>
                  </div>

                  <div className="mb-7 text-center">
                    <p className="text-xs uppercase tracking-[0.14em] text-gray-500 mb-2">Crédito</p>
                    <p className="text-3xl font-black tracking-tight leading-none">{opportunity.credit}</p>
                  </div>

                  <div className="rounded-2xl bg-white/[0.025] border border-brand-red/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] px-4 py-4 mb-5">
                    <p className="text-xs text-gray-400 mb-3 uppercase tracking-[0.12em]">Condição atual</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-2 items-end">
                      <div className="text-left min-w-0 sm:border-r sm:border-white/10 sm:pr-3">
                        <p className="text-[11px] text-gray-500 mb-1">Parcela original</p>
                        {opportunity.originalInstallment ? (
                          <p className="text-sm sm:text-base text-gray-400 line-through break-words">{opportunity.originalInstallment}</p>
                        ) : (
                          <p className="text-sm text-gray-400">{opportunity.supplementalText}</p>
                        )}
                      </div>
                      <div className="text-left sm:text-right min-w-0">
                        <p className="text-[11px] text-gray-400 mb-1">{opportunity.currentLabel}</p>
                        <p className="font-extrabold leading-tight">
                          <span className="text-white/90 text-base sm:text-sm md:text-base">por </span>
                          <span className="text-[#ff7a74] text-[1.65rem] sm:text-[1.9rem] lg:text-[1.75rem] xl:text-[1.9rem] tracking-tight break-words">
                            {opportunity.installment}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm text-gray-300 mb-7 flex-1">
                    <div className="flex justify-between gap-4 pb-3 border-b border-white/8">
                      <span className="text-gray-500">Prazo</span>
                      <span className="font-semibold text-white">{opportunity.term}</span>
                    </div>
                    <div className="flex justify-between gap-4 pb-3 border-b border-white/8">
                      <span className="text-gray-500">Status</span>
                      <span className="font-semibold text-white text-right">{opportunity.status}</span>
                    </div>
                  </div>
                  <a
                    href={createWhatsAppLink(opportunity.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent("whatsapp_click", { location: "oportunidade_card", segmento: opportunity.segment })}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-gradient-to-b from-[#de3933] to-[#bc221e] hover:from-[#e34a44] hover:to-[#bc221e] text-white rounded-xl font-semibold transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_10px_20px_rgba(188,34,30,0.2)] hover:-translate-y-0.5 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_14px_24px_rgba(188,34,30,0.25)]"
                  >
                    <WhatsappIcon size={18} /> Consultar condições
                  </a>
                  <p className="mt-3 text-[11px] text-gray-500 text-center">Disponibilidade sujeita à análise</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="rounded-3xl border border-brand-red/25 bg-gradient-to-r from-brand-red/18 via-white/[0.06] to-white/[0.03] p-7 md:p-10 text-center shadow-2xl shadow-black/20"
          >
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-4">
              Quer saber qual oportunidade combina com seu objetivo?
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Fale com Everton Cerbelo e receba uma análise personalizada conforme seu perfil, prazo e objetivo financeiro.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("whatsapp_click", { location: "resultados_cta" })}
              className="inline-flex w-full sm:w-auto items-center justify-center gap-3 px-8 py-4 bg-brand-red hover:bg-brand-red-dark text-white rounded-xl font-semibold transition-colors shadow-lg shadow-brand-red/20"
            >
              <WhatsappIcon size={20} /> Falar com Everton no WhatsApp
            </a>
          </motion.div>

          <p className="text-[11px] md:text-xs text-gray-500 leading-relaxed text-center max-w-5xl mx-auto mt-8">
            Valores, parcelas, prazos, grupos e disponibilidade podem sofrer alteração sem aviso prévio. As informações são exemplos consultivos e dependem das regras do grupo, administradora e condições vigentes no momento da contratação. Consulte Everton Cerbelo para confirmar as condições atualizadas.
          </p>
        </div>
      </section>

      {/* 9.5 O que você recebe */}
      {/* 6. Como funciona */}
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

      <section className="hidden py-20 bg-brand-cream">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="bg-white border border-gray-100 rounded-3xl p-8 md:p-10 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-extrabold text-brand-graphite mb-4 tracking-tight">O que você recebe na análise</h2>
            <p className="text-brand-gray mb-8">Na sua análise personalizada, você recebe:</p>
            <ul className="space-y-4">
              {ANALYSIS_DELIVERABLES.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-red shrink-0 mt-0.5" size={20} />
                  <span className="text-brand-graphite font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* 12. FAQ — SEO otimizado */}
      <section id="faq" className="py-24 bg-brand-gray-light">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-center tracking-tight">Dúvidas <span className="text-brand-red">frequentes</span></h2>
            <p className="text-center text-brand-gray mb-12 text-lg">Entenda os principais pontos antes de tomar uma decisão com clareza e segurança.</p>
          </motion.div>
          <div className="space-y-4">
            {FAQ_ITEMS.map((faq, i) => (
              <details open={i === 0} key={i} name="faq-ademicon" className="group bg-white/95 border border-gray-100 rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(15,23,42,0.04)] open:shadow-[0_6px_20px_rgba(15,23,42,0.07)] transition-shadow [&_summary::-webkit-details-marker]:hidden">
                <summary className="w-full px-7 py-6 text-left font-semibold flex items-center justify-between hover:bg-gray-50/70 text-lg cursor-pointer list-none">
                  {faq.q}
                  <ChevronDown className="shrink-0 ml-4 transform transition-transform duration-300 ease-out group-open:rotate-180 text-brand-gray" />
                </summary>
                <div className="px-7 pb-6 text-brand-gray leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-brand-graphite font-semibold mb-4">Ainda ficou com dúvida?</p>
            <p className="text-brand-gray mb-6">Fale diretamente com Everton e receba uma orientação personalizada.</p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("whatsapp_click", { location: "faq_cta" })}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-brand-red hover:bg-brand-red-dark text-white rounded-xl font-semibold transition-colors shadow-lg shadow-brand-red/20"
            >
              <WhatsappIcon size={18} /> Conversar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* 13. Seção de Confiança */}
      <section className="hidden py-24 bg-white">
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
                {["Atendimento personalizado e individual", "Diagnósticos ajustados ao seu perfil financeiro", "Acompanhamento do início ao fim do processo"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-brand-graphite">
                    <CheckCircle2 className="text-brand-red shrink-0" size={20} />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-shrink-0 w-full max-w-[280px]">
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/everton3.png"
                  alt="Everton Cerbelo - Consultor Ademicon"
                  fill
                  loading="lazy"
                  quality={78}
                  sizes="(max-width: 1024px) 70vw, 280px"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 13.5 Atendimento local */}
      <section className="hidden py-20 bg-brand-gray-light">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-brand-graphite mb-4">
              Atendimento em Piraquara, Curitiba e todo o Paraná
            </h2>
            <p className="text-brand-gray text-lg leading-relaxed">
              Everton Cerbelo atende clientes de Piraquara, Curitiba, região metropolitana e outros estados, com orientação personalizada por WhatsApp e atendimento presencial mediante agendamento.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 14. Prova Social — Avaliações Reais */}
      <section id="avaliacoes" className="py-20 bg-brand-gray-light">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-4">O que nossos clientes dizem</h2>
            <p className="text-brand-gray text-lg">Experiências reais de clientes que buscaram planejamento, atendimento e clareza na tomada de decisão.</p>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { 
                name: "Ronaldo Quirino", 
                role: "Cliente Ademicon",
                text: "Melhor empresa de consórcios do Brasil, já comprei 3 veículos com a Ademicon, sem tanta burocracia e com muito suporte durante todo o processo.",
                initials: "RQ",
                link: "https://share.google/ByE3RJsNitYHFNIKY"
              },
              { 
                name: "Elioenai Souza Silva", 
                role: "Cliente Ademicon",
                text: "Sem dúvidas uma das maiores empresas do ramo de consórcio e investimento do país, com equipe preparada para auxiliar na escolha da melhor forma de investir nosso capital.",
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
              <motion.div key={i} variants={fadeIn} className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm flex flex-col h-full">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, s) => <Star key={s} size={16} className="text-brand-gold fill-brand-gold" />)}
                </div>
                <p className="text-brand-gray italic mb-8 leading-relaxed flex-1">&quot;{review.text}&quot;</p>
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-red/10 text-brand-red rounded-full flex items-center justify-center text-sm font-bold shrink-0">{review.initials}</div>
                    <div>
                      <p className="font-bold text-brand-graphite text-sm leading-tight">{review.name}</p>
                      <p className="text-[11px] text-gray-400 leading-tight mt-1">{review.role}</p>
                    </div>
                  </div>
                  <a 
                    href={review.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-xs text-brand-red hover:underline font-medium shrink-0 flex items-center gap-1"
                    title="Ver avaliação original no Google"
                  >
                    Verificar <ArrowRight size={10} className="-rotate-45" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <p className="text-xs text-brand-gray text-center mt-6 max-w-4xl mx-auto">
            As experiências podem variar conforme perfil, plano, regras do grupo e prazo de contemplação.
          </p>
        </div>
      </section>

      {/* 15. Formulário de Lead */}
      <section id="simulacao" className="pt-24 pb-36 md:pb-24 gradient-form">
        <div className="container mx-auto px-6 max-w-2xl">
          <div className="bg-white p-6 md:p-12 rounded-2xl shadow-2xl overflow-hidden">
            <h2 className="text-xl md:text-3xl font-extrabold mb-3 text-center text-brand-graphite leading-[1.2] tracking-tight">
              Receba sua <span className="text-brand-red">análise personalizada</span>
            </h2>
            <p className="text-center text-brand-gray mb-8 text-sm">Preencha seus dados e receba um diagnóstico personalizado diretamente no WhatsApp.</p>
            <form className="space-y-5" onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const honeypot = formData.get("honeypot_field");
              if (honeypot) return;

              const nome = formData.get("nome");
              const wpp = formData.get("whatsapp");
              const objetivo = formData.get("objetivo");
              const valor = formData.get("valor") || "Não informado";
              const cidade = formData.get("cidade");
               
              trackEvent("form_submission_success", { objetivo: String(objetivo), valor: String(valor), cidade: String(cidade) });

              const message = `Olá Everton, vim pelo site e gostaria de um diagnóstico personalizado.\n\n*Meus dados:*\nNome: ${nome}\nWhatsApp: ${wpp}\nCidade: ${cidade}\nObjetivo: ${objetivo}\nValor aproximado: ${valor}`;
              window.open(createWhatsAppLink(message), "_blank", "noopener,noreferrer");
              router.push("/obrigado");
            }}>
              <div aria-hidden="true" className="absolute left-[-9999px] top-[-9999px]">
                <input type="text" name="honeypot_field" tabIndex={-1} autoComplete="off" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-brand-graphite">Nome</label>
                  <input name="nome" type="text" required placeholder="Seu nome completo" className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-brand-graphite">WhatsApp</label>
                  <input 
                    name="whatsapp" type="tel" required 
                    onChange={handlePhoneMask}
                    placeholder="(00) 00000-0000"
                    inputMode="numeric"
                    maxLength={15}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all" 
                  />
                </div>
              </div>
              <div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-brand-graphite">Cidade</label>
                  <input name="cidade" type="text" required placeholder="Sua cidade" className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-brand-graphite">Qual seu objetivo?</label>
                <select name="objetivo" className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all bg-white cursor-pointer">
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
                <select name="valor" className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all bg-white cursor-pointer">
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
                className="w-full py-4 px-4 bg-brand-red hover:bg-brand-red-dark text-white font-bold rounded-xl transition-colors text-base md:text-lg flex items-center justify-center gap-2 md:gap-3 shadow-lg shadow-brand-red/20 cursor-pointer"
              >
                <WhatsappIcon size={20} className="shrink-0" /> <span className="leading-tight">Receber diagnóstico personalizado</span>
              </button>
              <p className="text-xs text-gray-400 text-center">Seus dados serão usados apenas para contato consultivo sobre seu diagnóstico. Nenhuma informação é armazenada.</p>
            </form>
          </div>
        </div>
      </section>

      {/* 9. CTA final forte */}
      <section className="py-24 bg-brand-graphite text-white text-center">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-[1.08] tracking-tighter">
              Pronto para planejar sua próxima conquista com mais clareza?
            </h2>
            <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Fale com Everton Cerbelo no WhatsApp e receba uma orientação consultiva para entender o caminho mais adequado ao seu objetivo, prazo e perfil financeiro.
            </p>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("whatsapp_click", { location: "final_strong_cta" })}
              className="inline-flex w-full sm:w-auto items-center justify-center gap-3 px-8 py-4 bg-brand-red hover:bg-brand-red-dark text-white rounded-xl font-semibold text-lg transition-colors shadow-lg shadow-brand-red/25"
            >
              <WhatsappIcon size={22} /> Falar com Everton agora
            </motion.a>
          </motion.div>
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
            Desenvolvido pela <a href="https://iris-agency.vercel.app/" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#ff8a00] hover:text-[#ffb347] transition-colors">agência Iris</a>
            <span className="mx-2 text-gray-700">|</span>
            <Link href="/politica-privacidade" className="hover:text-white transition-colors">Política de privacidade</Link>
          </div>
        </div>
      </footer>

      {isResultModalOpen ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] bg-black/90 backdrop-blur-sm px-4 py-6 md:p-8 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label="Imagem ampliada de resultado real"
          onClick={() => setIsResultModalOpen(false)}
        >
          <button
            type="button"
            onClick={() => setIsResultModalOpen(false)}
            className="absolute right-4 top-4 md:right-8 md:top-8 z-20 w-11 h-11 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-brand-red transition-colors"
            aria-label="Fechar imagem ampliada"
          >
            <X size={24} />
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPreviousResult();
            }}
            className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-brand-red transition-colors"
            aria-label="Ver resultado anterior"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNextResult();
            }}
            className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-brand-red transition-colors"
            aria-label="Ver próximo resultado"
          >
            <ChevronRight size={28} />
          </button>
          <motion.div
            initial={{ scale: 0.96, y: 12 }}
            animate={{ scale: 1, y: 0 }}
            className="relative w-full max-w-[min(92vw,520px)] h-[82dvh]"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={activeResultImage.src}
              alt={activeResultImage.alt}
              fill
              quality={92}
              sizes="(max-width: 768px) 92vw, 520px"
              className="object-contain"
            />
          </motion.div>
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
            {RESULT_IMAGES.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  setActiveResultIndex(index);
                }}
                className="h-2 rounded-full transition-all"
                aria-label={`Ver resultado ${index + 1}`}
              >
                <motion.span
                  animate={{
                    width: index === activeResultIndex ? 28 : 8,
                    opacity: index === activeResultIndex ? 1 : 0.55,
                    backgroundColor: index === activeResultIndex ? "#d8231f" : "rgba(255,255,255,0.55)"
                  }}
                  transition={{ duration: 0.28, ease: "easeInOut" }}
                  className="block h-2 rounded-full"
                />
              </button>
            ))}
          </div>
        </motion.div>
      ) : null}

      {/* Floating Buttons */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-[60] flex-col items-center gap-4">
        
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

      {/* Mobile Floating Anchor Menu */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[55] md:hidden w-[90%] max-w-[400px]">
        <div className="bg-white/90 backdrop-blur-md border border-gray-200/50 shadow-2xl shadow-black/10 rounded-full px-6 py-4 flex items-center justify-between">
          <a href="#hero" className="flex flex-col items-center gap-1 text-gray-500 hover:text-brand-red transition-colors w-16">
            <HomeIcon size={20} />
            <span className="text-[10px] font-semibold tracking-wide uppercase">Início</span>
          </a>
          <a href="#consorcios" className="flex flex-col items-center gap-1 text-gray-500 hover:text-brand-red transition-colors w-16">
            <Target size={20} />
            <span className="text-[10px] font-semibold tracking-wide uppercase">Planos</span>
          </a>
          <a href="#resultados" className="flex flex-col items-center gap-1 text-gray-500 hover:text-brand-red transition-colors w-16">
            <Star size={20} />
            <span className="text-[10px] font-semibold tracking-wide uppercase">Resultados</span>
          </a>
          <a href="#simulacao" className="flex flex-col items-center gap-1 text-brand-red hover:text-brand-red-dark transition-colors w-16 relative">
            <div className="absolute -top-1 -right-2 w-2 h-2 bg-brand-gold rounded-full animate-pulse"></div>
            <MessageCircle size={20} />
            <span className="text-[10px] font-bold tracking-wide uppercase">Análise</span>
          </a>
        </div>
      </div>
    </main>
  );
}
