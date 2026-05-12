"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";

const COOKIE_CONSENT_KEY = "ademicon_cookie_consent";
type CookieConsentStatus = "accepted" | "declined" | null;

export const hasCookieConsent = () => {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(COOKIE_CONSENT_KEY) === "accepted";
};

const getCookieConsentStatus = (): CookieConsentStatus => {
  if (typeof window === "undefined") return null;

  const value = window.localStorage.getItem(COOKIE_CONSENT_KEY);
  return value === "accepted" || value === "declined" ? value : null;
};

const subscribeToCookieConsent = (callback: () => void) => {
  window.addEventListener("cookie-consent-updated", callback);
  window.addEventListener("storage", callback);

  return () => {
    window.removeEventListener("cookie-consent-updated", callback);
    window.removeEventListener("storage", callback);
  };
};

export const useCookieConsentStatus = () =>
  useSyncExternalStore(subscribeToCookieConsent, getCookieConsentStatus, () => null);

export default function CookieConsent() {
  const consentStatus = useCookieConsentStatus();
  const isVisible = consentStatus === null;

  const updateConsent = (value: "accepted" | "declined") => {
    window.localStorage.setItem(COOKIE_CONSENT_KEY, value);
    window.dispatchEvent(new CustomEvent("cookie-consent-updated", { detail: value }));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[100] px-4 pb-4 md:px-6 md:pb-6">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 rounded-2xl border border-white/10 bg-brand-graphite p-5 text-white shadow-2xl md:flex-row md:items-center md:justify-between">
        <div className="max-w-3xl">
          <p className="text-sm font-bold">Nós usamos cookies</p>
          <p className="mt-1 text-sm leading-relaxed text-gray-300">
            Usamos cookies para melhorar sua experiência, medir acessos e entender quais conteúdos ajudam mais. Você pode aceitar ou recusar os cookies de análise.
          </p>
          <Link href="/politica-privacidade" className="mt-2 inline-flex text-sm font-semibold text-[#ff8a00] hover:text-[#ffb347]">
            Política de privacidade
          </Link>
        </div>
        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
          <button
            type="button"
            onClick={() => updateConsent("declined")}
            className="rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-gray-200 transition-colors hover:bg-white/10"
          >
            Recusar
          </button>
          <button
            type="button"
            onClick={() => updateConsent("accepted")}
            className="rounded-xl bg-[#ff8a00] px-5 py-3 text-sm font-bold text-brand-graphite transition-colors hover:bg-[#ffb347]"
          >
            Aceitar cookies
          </button>
        </div>
      </div>
    </div>
  );
}
