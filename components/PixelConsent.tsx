"use client";

import { useEffect, useState } from "react";

/* Meta Pixel, pas na toestemming. Zonder NEXT_PUBLIC_META_PIXEL_ID laadt er niets en
   verschijnt er ook geen cookiebalk. */
const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || "";

type Fbq = {
  (...args: unknown[]): void;
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[][];
  push: unknown;
  loaded: boolean;
  version: string;
};

function laadPixel() {
  if (!PIXEL_ID || window.fbq) return;
  const n = function (...args: unknown[]) {
    if (n.callMethod) n.callMethod(...args);
    else n.queue.push(args);
  } as Fbq;
  n.queue = [];
  n.push = n;
  n.loaded = true;
  n.version = "2.0";
  window.fbq = n;
  (window as unknown as Record<string, unknown>)._fbq = n;

  const s = document.createElement("script");
  s.async = true;
  s.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(s);

  n("init", PIXEL_ID);
  n("track", "PageView");
}

export default function PixelConsent() {
  const [toon, setToon] = useState(false);

  useEffect(() => {
    if (!PIXEL_ID) return;
    let keuze: string | null = null;
    try {
      keuze = localStorage.getItem("tai_consent");
    } catch {}
    if (keuze === "yes") laadPixel();
    else if (keuze === null) setToon(true);
  }, []);

  function kies(waarde: "yes" | "no") {
    try {
      localStorage.setItem("tai_consent", waarde);
    } catch {}
    setToon(false);
    if (waarde === "yes") laadPixel();
  }

  if (!PIXEL_ID || !toon) return null;

  return (
    <div role="dialog" aria-label="Cookies"
      className="fixed left-4 right-4 bottom-4 z-[90] mx-auto max-w-3xl card-floating rounded-2xl p-5 flex flex-wrap items-center gap-4">
      <p className="flex-1 min-w-[230px] text-[14px] text-gray-600 leading-[1.5]">
        We gebruiken cookies, waaronder de Meta Pixel, om onze advertenties te meten en te verbeteren. Lees meer
        in ons{" "}
        <a href="/privacy" className="underline" style={{ color: "#3474A0" }}>privacybeleid</a>.
      </p>
      <div className="flex gap-2">
        <button type="button" onClick={() => kies("no")}
          className="px-4 py-2.5 rounded-full border border-gray-200 text-[14px] font-semibold text-gray-700 hover:border-gray-400 transition-colors duration-150">
          Alleen noodzakelijk
        </button>
        <button type="button" onClick={() => kies("yes")}
          className="px-4 py-2.5 rounded-full bg-brand-600 text-white text-[14px] font-semibold hover:bg-brand-700 transition-colors duration-150">
          Accepteren
        </button>
      </div>
    </div>
  );
}
