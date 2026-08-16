"use client";

import { useState } from "react";

const CAL_URL = "https://calendar.app.google/7rRamUEnapLFZ2PS9";
const UURTARIEF = 55;

const stats = [
  { value: "Dag 10", label: "draait je eerste agent op je eigen werk" },
  { value: "60 dagen", label: "tot de rest van je agents draait" },
  { value: "90 min", label: "is alles wat het je aan tijd kost" },
];

export default function Hero() {
  const [keer, setKeer] = useState(20);
  const [min, setMin] = useState(20);
  const uurPerMaand = (keer * min * 52) / 12 / 60;
  const laag = Math.round((uurPerMaand * UURTARIEF * 0.75) / 100) * 100;
  const hoog = Math.round((uurPerMaand * UURTARIEF) / 100) * 100;
  const euro = (n: number) => "€" + n.toLocaleString("nl-NL");

  return (
    <section className="relative min-h-[92dvh] flex items-center pt-28 overflow-hidden">
      {/* dot-veld, bolvormig gemaskeerd */}
      <div className="dotfield" aria-hidden="true" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 65% 50% at 62% 42%, rgba(110,173,212,0.16) 0%, transparent 65%)",
        }}
      />

      <div className="relative w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-20 md:py-24">
        {/* label met hoekmarkeringen */}
        <div className="brackets label-mono inline-block mb-10" style={{ color: "#3474A0" }}>
          AI-agents voor het MKB
        </div>

        {/* asymmetrische kop: eerste regel links, tweede regel ingesprongen */}
        <h1
          className="font-bold text-gray-900 leading-[1.0] tracking-[-0.035em]"
          style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: "clamp(2.35rem, 5.2vw, 4.5rem)" }}
        >
          <span className="block">Focus op het echte werk.</span>
          <span className="block md:pl-[14%]" style={{ color: "#6EADD4" }}>
            Het terugkerende doen wij.
          </span>
        </h1>

        {/* tekst rechts uitgelijnd, tegenover de kop */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-5 md:col-start-8">
            <p className="text-[17px] text-gray-500 leading-[1.65]">
              Aanvragen, offertes, facturen, opvolging. Wij bouwen de agents die dat overnemen, op
              de systemen die je nu al gebruikt.{" "}
              <strong className="font-semibold text-gray-800">
                Werkt het niet binnen 60 dagen, dan krijg je je investering terug
              </strong>{" "}
              en blijven de agents staan.
            </p>

            <div className="mt-8 rounded-2xl card-elevated p-6">
              <div className="label-mono mb-4" style={{ color: "#3474A0" }}>
                Wat kost je drukste proces nu?
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <label htmlFor="keer" className="text-[15px] text-gray-600">Hoe vaak per week?</label>
                    <span className="tabular text-[15px] font-bold text-gray-900">{keer}×</span>
                  </div>
                  <input id="keer" type="range" min={5} max={100} value={keer}
                    onChange={(e) => setKeer(Number(e.target.value))}
                    className="roi-slider w-full"
                    style={{ background: `linear-gradient(90deg,#4A8EBB ${((keer - 5) / 95) * 100}%,#E5E7EB ${((keer - 5) / 95) * 100}%)` }} />
                </div>
                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <label htmlFor="min" className="text-[15px] text-gray-600">Hoeveel minuten per keer?</label>
                    <span className="tabular text-[15px] font-bold text-gray-900">{min} min</span>
                  </div>
                  <input id="min" type="range" min={5} max={90} value={min}
                    onChange={(e) => setMin(Number(e.target.value))}
                    className="roi-slider w-full"
                    style={{ background: `linear-gradient(90deg,#4A8EBB ${((min - 5) / 85) * 100}%,#E5E7EB ${((min - 5) / 85) * 100}%)` }} />
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-gray-100 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <div className="tabular text-3xl font-bold tracking-[-0.02em]" style={{ color: "#2A5E83", fontFamily: "'Inter Tight', sans-serif" }}>
                    {euro(laag)} – {euro(hoog)}
                  </div>
                  <div className="text-[13px] text-gray-400 mt-1">
                    per maand, bij €{UURTARIEF} per uur belast · {Math.round(uurPerMaand)} uur
                  </div>
                </div>
                <a href={CAL_URL} target="_blank" rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-brand-400 text-white font-semibold text-[15px] hover:bg-brand-500 active:scale-[0.98] transition-[background-color,transform] duration-150"
                  style={{ boxShadow: "0 8px 24px -10px rgba(42,94,131,0.75)" }}>
                  Plan het gesprek
                  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>

            <a href="#ai-team" className="inline-block mt-4 text-[15px] font-medium text-gray-500 hover:text-brand-500 link-underline transition-colors duration-200">
              Of kijk eerst waar het werk zit →
            </a>
          </div>
        </div>

        {/* cijfers in mono, op een lijn onderaan */}
        <div className="mt-20 pt-8 border-t border-gray-200/70 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-baseline gap-4">
              <div
                className="tabular text-2xl md:text-3xl font-semibold tracking-[-0.02em] whitespace-nowrap"
                style={{ color: "#2A5E83", fontFamily: "'Inter Tight', sans-serif" }}
              >
                {stat.value}
              </div>
              <div className="label-mono text-gray-400 leading-[1.5]" style={{ letterSpacing: "0.08em" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
