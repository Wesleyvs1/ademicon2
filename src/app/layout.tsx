import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Consórcio Ademicon com Everton Cerbelo | Simule seu consórcio",
  description:
    "Simule consórcio Ademicon com Everton Cerbelo, consultor licenciado em Piraquara - PR. Simulação de consórcio imobiliário, carta de crédito e compra planejada para imóvel, veículo e planejamento patrimonial.",
  keywords: [
    "consórcio Ademicon com Everton Cerbelo",
    "consultor Ademicon",
    "consultor licenciado Ademicon",
    "simulação de consórcio Ademicon",
    "simular consórcio Ademicon",
    "simulação de consórcio imobiliário",
    "simulação de carta de crédito",
    "consultor Ademicon em Piraquara",
    "consultor Ademicon no Paraná",
    "consórcio em Curitiba e região",
    "consórcio sem juros de financiamento",
    "comprar imóvel sem financiamento",
    "comprar carro sem financiamento",
    "planejamento para comprar imóvel",
    "consórcio imobiliário Ademicon",
    "consórcio de veículos Ademicon",
    "carta de crédito Ademicon",
    "Compra planejada",
    "Planejamento financeiro",
    "Construção de patrimônio",
    "planejamento patrimonial",
    "consultor financeiro em Piraquara",
    "Everton Cerbelo",
    "Everton Cerbelo Ademicon",
    "Consultor licenciado Ademicon"
  ]
};

import Analytics, { GTM_ID } from "@/components/Analytics";
import { Suspense } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased bg-white text-brand-graphite`}
      >
        <Suspense>
          <Analytics />
        </Suspense>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {children}
      </body>
    </html>
  );
}
