import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Obrigado | Everton Cerbelo",
  description: "Recebemos sua solicitação. Continue no WhatsApp para agilizar sua análise."
};

const WHATSAPP_LINK = `https://wa.me/5541988526336?text=${encodeURIComponent("Olá, Everton! Acabei de enviar meus dados pelo site e quero continuar meu diagnóstico.")}`;

export default function ObrigadoPage() {
  return (
    <main className="min-h-screen bg-brand-gray-light px-6 py-20 md:py-28">
      <div className="max-w-2xl mx-auto bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-12 text-center">
        <p className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-red/10 text-brand-red text-sm font-semibold mb-6">
          Solicitação recebida
        </p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-brand-graphite leading-tight mb-4">
          Recebemos sua solicitação
        </h1>
        <p className="text-brand-gray text-lg mb-10">
          Agora fale com Everton no WhatsApp para agilizar sua análise.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-7 py-3.5 bg-brand-red hover:bg-brand-red-dark text-white rounded-xl font-semibold transition-colors shadow-lg shadow-brand-red/20"
          >
            Continuar no WhatsApp
          </a>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-7 py-3.5 bg-white border border-gray-200 text-brand-graphite rounded-xl font-semibold hover:bg-gray-50 transition-colors"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </main>
  );
}
