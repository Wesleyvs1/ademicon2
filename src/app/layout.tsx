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

import Analytics from "@/components/Analytics";
import CookieConsent from "@/components/CookieConsent";
import { Suspense } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P3WZNSH7');`,
          }}
        />
        {/* Google Analytics (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-0T5L0V5VE0"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-0T5L0V5VE0');
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-white text-brand-graphite`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P3WZNSH7"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Suspense>
          <Analytics />
        </Suspense>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
