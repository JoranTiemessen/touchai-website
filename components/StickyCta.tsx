"use client";

import { useEffect, useState } from "react";

const CAL_URL = "https://calendar.app.google/7rRamUEnapLFZ2PS9";

export default function StickyCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`md:hidden fixed left-0 right-0 bottom-0 z-40 px-4 pb-[calc(env(safe-area-inset-bottom)+12px)] pt-3 transition-transform duration-300 ${show ? "translate-y-0" : "translate-y-full"}`}
      style={{ background: "rgba(255,255,255,0.92)", backdropFilter: "blur(10px)", borderTop: "1px solid rgba(11,18,32,0.08)" }}
    >
      <a
        href={CAL_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-full text-white font-semibold text-[15px]"
        style={{ background: "linear-gradient(135deg, #6EADD4 0%, #4A8EBB 100%)", boxShadow: "0 6px 20px rgba(110,173,212,0.40)" }}
      >
        Doe de gratis Tijdlek-scan
        <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </div>
  );
}
