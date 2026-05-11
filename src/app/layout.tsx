import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Invista com estratégia através do consórcio Ademicon com Everton Cerbelo",
  description: "Planeje seus investimentos com Everton Cerbelo, consultor financeiro licenciado Ademicon. Simule consórcio para imóvel, veículo, patrimônio e objetivos financeiros de curto, médio e longo prazo.",
  keywords: [
    "Consórcio Ademicon",
    "Consultor Ademicon",
    "Consultor financeiro",
    "Consórcio para investimento",
    "Investimento em consórcio",
    "Compra planejada",
    "Planejamento financeiro",
    "Consórcio imobiliário",
    "Consórcio de veículos",
    "Construção de patrimônio",
    "Investimento de curto prazo",
    "Investimento de longo prazo",
    "Alavancagem patrimonial",
    "Estratégia financeira",
    "Everton Cerbelo",
    "Everton Cerbelo Ademicon",
    "Consultor licenciado Ademicon"
  ]
};

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
        {children}
      </body>
    </html>
  );
}
