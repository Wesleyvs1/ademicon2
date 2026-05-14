"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { hasCookieConsent, useCookieConsentStatus } from "./CookieConsent";

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: Record<string, unknown>[];
    fbq: (...args: unknown[]) => void;
  }
}
export const GA4_ID = "G-XXXXXXXXXX";
export const GTM_ID = "GTM-P3WZNSH7";
export const PIXEL_ID = "XXXXXXXXXXXXXXX";

export const trackEvent = (eventName: string, properties?: Record<string, unknown>) => {
  if (typeof window !== "undefined" && hasCookieConsent()) {
    // GA4
    if (window.gtag) {
      window.gtag("event", eventName, properties);
    }
    // GTM DataLayer
    if (window.dataLayer) {
      window.dataLayer.push({ event: eventName, ...properties });
    }
    // Meta Pixel
    if (window.fbq) {
      if (eventName === "form_submission_success") {
        window.fbq("track", "Lead", properties);
      } else if (eventName === "whatsapp_click") {
        window.fbq("track", "Contact", properties);
      } else {
        window.fbq("trackCustom", eventName, properties);
      }
    }
  }
};

export default function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const canTrack = useCookieConsentStatus() === "accepted";

  useEffect(() => {
    if (!canTrack) return;
    if (pathname && window.gtag) {
      window.gtag("config", GA4_ID, {
        page_path: pathname,
      });
    }
    if (pathname && window.fbq) {
      window.fbq("track", "PageView");
    }
  }, [canTrack, pathname, searchParams]);

  if (!canTrack) return null;

  return (
    <>

      {/* Google Analytics (gtag.js) */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
        strategy="afterInteractive"
      />
      <Script
        id="ga4-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA4_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      {/* Meta Pixel */}
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${PIXEL_ID}');
            fbq('track', 'PageView');
          `,
        }}
      />
    </>
  );
}
