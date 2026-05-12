import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade | Everton Cerbelo Ademicon",
  description:
    "Política de privacidade e uso de cookies do site Everton Cerbelo, consultor licenciado Ademicon."
};

export default function PoliticaPrivacidadePage() {
  return (
    <main className="min-h-screen bg-white text-brand-graphite">
      <section className="bg-brand-graphite px-6 py-16 text-white md:py-24">
        <div className="mx-auto max-w-4xl">
          <Link href="/" className="mb-8 inline-flex text-sm font-semibold text-[#ff8a00] hover:text-[#ffb347]">
            Voltar para o site
          </Link>
          <h1 className="text-3xl font-black tracking-tight md:text-5xl">Política de privacidade</h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-300">
            Esta página explica como tratamos informações enviadas pelo site e como usamos cookies para melhorar a experiência de navegação.
          </p>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="mx-auto max-w-4xl space-y-10 text-brand-gray">
          <div>
            <h2 className="text-2xl font-black text-brand-graphite">Dados coletados</h2>
            <p className="mt-3 leading-relaxed">
              Ao preencher formulários ou clicar em botões de contato, podemos receber informações como nome, WhatsApp, cidade, objetivo de compra planejada e valor aproximado desejado. Esses dados são usados apenas para atendimento consultivo e retorno ao interessado.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-brand-graphite">Uso das informações</h2>
            <p className="mt-3 leading-relaxed">
              As informações fornecidas ajudam Everton Cerbelo a entender o objetivo do visitante, preparar uma orientação personalizada e facilitar o contato por WhatsApp ou e-mail. Não vendemos seus dados pessoais.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-brand-graphite">Cookies e análise</h2>
            <p className="mt-3 leading-relaxed">
              O site pode usar cookies e ferramentas de análise, como Google Analytics, Google Tag Manager e Meta Pixel, para medir visitas, entender interações e melhorar campanhas. Esses recursos só são carregados quando você aceita os cookies no aviso exibido no site.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-brand-graphite">Compartilhamento</h2>
            <p className="mt-3 leading-relaxed">
              Dados podem ser compartilhados apenas com ferramentas necessárias para comunicação, análise de navegação, mensuração de campanhas e atendimento. Esse compartilhamento ocorre conforme as políticas das plataformas utilizadas.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-brand-graphite">Seus direitos</h2>
            <p className="mt-3 leading-relaxed">
              Você pode solicitar correção, atualização ou exclusão dos seus dados de contato. Também pode recusar cookies de análise no aviso de consentimento exibido no site.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-brand-graphite">Contato</h2>
            <p className="mt-3 leading-relaxed">
              Para dúvidas sobre privacidade, entre em contato pelo e-mail{" "}
              <a href="mailto:Evertonbc.ademilar@gmail.com" className="font-semibold text-brand-red hover:underline">
                Evertonbc.ademilar@gmail.com
              </a>
              .
            </p>
          </div>

          <p className="border-t border-gray-200 pt-8 text-sm text-gray-500">
            Última atualização: 12 de maio de 2026.
          </p>
        </div>
      </section>
    </main>
  );
}
