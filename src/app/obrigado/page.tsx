"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowLeft, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { trackEvent } from "@/components/Analytics";

export default function ThankYouPage() {
  useEffect(() => {
    trackEvent("thank_you_page_view", { page_title: "Obrigado" });
  }, []);

  return (
    <main className="min-h-screen bg-brand-cream flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white rounded-3xl p-8 md:p-12 shadow-2xl text-center border border-brand-gold/10">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", damping: 12, stiffness: 200 }}
          className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8"
        >
          <CheckCircle2 className="text-green-500" size={48} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-black text-brand-graphite mb-4"
        >
          Solicitação recebida com sucesso!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-brand-gray mb-8"
        >
          Obrigado pelo seu interesse. Everton Cerbelo entrará em contato em breve para realizar sua análise personalizada.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-100 hover:bg-gray-200 text-brand-graphite rounded-xl font-bold transition-all"
          >
            <ArrowLeft size={20} /> Voltar para o site
          </Link>
          <a
            href="https://wa.me/5541988526336"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-red hover:bg-brand-red-light text-white rounded-xl font-bold transition-all shadow-lg shadow-brand-red/20"
          >
            <MessageCircle size={20} /> Falar no WhatsApp agora
          </a>
        </motion.div>
      </div>
    </main>
  );
}
