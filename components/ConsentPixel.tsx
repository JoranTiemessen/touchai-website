"use client";

import { useEffect, useState } from "react";

const PIXEL_ID = "980965491370039";
const KEY = "touchai-cookie-consent";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
  }
}

function loadPixel() {
  if (window.fbq) return;
  const s = document.createElement("script");
  s.async = true;
  s.src = "https://connect.facebook.net/en_US/fbevents.js";
  // Exact de stub uit de standaard Meta-snippet: zodra fbevents.js laadt en callMethod zet,
  // gaan latere aanroepen (zoals Lead op een klik) daarheen in plaats van de wachtrij in.
  type Stub = {
    (...args: unknown[]): void;
    callMethod?: { apply: (self: unknown, args: unknown) => void };
    push: unknown;
    loaded: boolean;
    version: string;
    queue: unknown[];
  };
  const fbq = function () {
    // eslint-disable-next-line prefer-rest-params
    if (fbq.callMethod) fbq.callMethod.apply(fbq, arguments);
    // eslint-disable-next-line prefer-rest-params
    else fbq.queue.push(arguments);
  } as Stub;
  fbq.push = fbq;
  fbq.loaded = true;
  fbq.version = "2.0";
  fbq.queue = [];
  window.fbq = fbq;
  if (!window._fbq) window._fbq = fbq;
  document.head.appendChild(s);
  window.fbq("init", PIXEL_ID);
  window.fbq("track", "PageView");
}

function read(): string | null {
  try { return localStorage.getItem(KEY); } catch { return null; }
}

export default function ConsentPixel() {
  const [ask, setAsk] = useState(false);

  useEffect(() => {
    const v = read();
    if (v === "yes") loadPixel();
    else if (v === null) setAsk(true);
  }, []);

  useEffect(() => {
    // Klik op een boekknop (Calendly) = Lead. Meet een klik, geen boeking.
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.('a[href*="calendly.com"]');
      if (a && window.fbq) window.fbq("track", "Lead");
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  const choose = (v: "yes" | "no") => {
    try { localStorage.setItem(KEY, v); } catch {}
    setAsk(false);
    if (v === "yes") loadPixel();
  };

  if (!ask) return null;
  return (
    <div
      role="dialog"
      aria-label="Cookies"
      className="fixed left-4 right-4 bottom-4 md:left-6 md:right-auto md:max-w-md z-50 rounded-2xl p-5 text-[14px] leading-relaxed text-gray-800"
      style={{ background: "rgba(255,255,255,0.97)", border: "1px solid rgba(11,18,32,0.08)", boxShadow: "0 12px 40px rgba(11,18,32,0.14)" }}
    >
      <p>
        We gebruiken een Meta-pixel om te meten welke advertenties tot een klik op &ldquo;Plan het gesprek&rdquo; leiden.
        Alleen met jouw toestemming.{" "}
        <a href="/privacy" className="underline">Privacybeleid</a>
      </p>
      <div className="mt-4 flex gap-3">
        <button
          onClick={() => choose("yes")}
          className="px-5 py-2.5 rounded-full text-white font-semibold text-[14px]"
          style={{ background: "linear-gradient(135deg, #6EADD4 0%, #4A8EBB 100%)" }}
        >
          Accepteren
        </button>
        <button
          onClick={() => choose("no")}
          className="px-5 py-2.5 rounded-full font-semibold text-[14px] text-gray-700"
          style={{ border: "1px solid rgba(11,18,32,0.18)" }}
        >
          Weigeren
        </button>
      </div>
    </div>
  );
}
