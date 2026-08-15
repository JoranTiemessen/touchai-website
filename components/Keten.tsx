"use client";

import { useState } from "react";

const stations = [
  { lb: "Aanvraag", m: true },
  { lb: "Offerte", m: true },
  { lb: "Akkoord", m: false },
  { lb: "Inplannen", m: false },
  { lb: "Uitvoeren", m: false },
  { lb: "Factuur", m: true },
  { lb: "Betaling", m: true },
  { lb: "Opvolging", m: true },
];

const processen = [
  { n: "01", t: "Aanvraag verwerken", s: "Binnenkomende aanvraag classificeren, verrijken en in je systeem zetten." },
  { n: "02", t: "Offerte of calculatie opstellen", s: "Uit de aanvraag, met jouw prijzen en voorwaarden, klaar voor akkoord." },
  { n: "03", t: "Persoonlijke opvolging", s: "Geen standaardherinnering, maar een bericht dat naar de situatie verwijst." },
  { n: "04", t: "Factuur opstellen en versturen", s: "Uit het CRM, geboekt in je administratie, zonder overtypen." },
  { n: "05", t: "Achter de betaling aan", s: "Vervaldatum voorbij, dan gaat er vanzelf een persoonlijk bericht uit." },
  { n: "06", t: "Weekrapport", s: "Maandagochtend staat er wat er door de agents heen is gegaan." },
];

const gesprek = [
  { van: "agent", tekst: "Je offerte voor Van Dijk staat sinds dinsdag open. Zal ik er vrijdag achteraan?" },
  { van: "jij", tekst: "Ja, doe maar." },
  { van: "agent", tekst: "Gedaan. Ik hou de reactie in de gaten en zet het in je weekrapport." },
];

export default function Keten() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="ai-team" className="relative py-24 md:py-32 overflow-hidden" style={{ background: "#F7F6F3" }}>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <div className="label-mono mb-4" style={{ color: "#3474A0" }}>Waar zit het werk</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-5" style={{ fontFamily: "'Sora', sans-serif", color: "#0B1220" }}>
            Van aanvraag tot betaling zitten er acht stappen.
          </h2>
          <p className="text-lg text-gray-500 leading-[1.7]">
            Bij de meeste bedrijven gaan er vijf met de hand. Elke rode stip is een plek waar iemand
            gegevens overneemt, natrekt of achteraan gaat. En elke rode stip kan een agent zijn.
          </p>
        </div>

        {/* de keten */}
        <div className="relative mb-16">
          <div className="hidden md:block absolute left-[6%] right-[6%] top-[27px] h-[3px] bg-gray-200" />
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-y-8">
            {stations.map((s) => (
              <div key={s.lb} className="relative text-center px-1">
                <div
                  className="w-[54px] h-[54px] rounded-full mx-auto mb-4 transition-transform duration-200 hover:scale-110"
                  style={
                    s.m
                      ? { background: "#C2413F", boxShadow: "0 0 0 10px rgba(194,65,63,0.12)" }
                      : { background: "#EDF1F5", border: "3px solid #E1E7EE" }
                  }
                />
                <div className={`text-[13px] font-bold uppercase tracking-wide ${s.m ? "text-gray-900" : "text-gray-400"}`}>
                  {s.lb}
                </div>
                {s.m && <div className="label-mono mt-2" style={{ color: "#C2413F", fontSize: 10 }}>met de hand</div>}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-10">
          {/* genummerde processen */}
          <div>
            <div className="label-mono mb-5" style={{ color: "#8A94A6" }}>Wat we daar weghalen</div>
            <div className="divide-y divide-gray-200 border-y border-gray-200">
              {processen.map((p) => {
                const isOpen = open === p.n;
                return (
                  <button
                    key={p.n}
                    onClick={() => setOpen(isOpen ? null : p.n)}
                    className="w-full text-left py-5 flex gap-5 items-start group focus-visible:outline-none"
                  >
                    <span className="label-mono pt-1 shrink-0" style={{ color: "#4A8EBB" }}>{p.n}</span>
                    <span className="flex-1">
                      <span className="block text-[19px] font-bold tracking-[-0.01em] text-gray-900 group-hover:text-brand-500 transition-colors duration-200"
                        style={{ fontFamily: "'Sora', sans-serif" }}>
                        {p.t}
                      </span>
                      <span
                        className="grid transition-[grid-template-rows] duration-300 ease-out"
                        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                      >
                        <span className="overflow-hidden">
                          <span className="block text-[15px] text-gray-500 leading-relaxed pt-2">{p.s}</span>
                        </span>
                      </span>
                    </span>
                    <span className={`text-gray-300 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>+</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* zo klinkt dat */}
          <div>
            <div className="label-mono mb-5" style={{ color: "#8A94A6" }}>Zo klinkt dat in de praktijk</div>
            <div className="card-elevated rounded-2xl p-6 md:p-7">
              <div className="flex items-center gap-2.5 pb-4 mb-5 border-b border-gray-100">
                <span className="w-2 h-2 rounded-full" style={{ background: "#2C8F5E" }} />
                <span className="text-[13px] font-semibold text-gray-500">Opvolg-agent · draait sinds 14 dagen</span>
              </div>
              <div className="space-y-3">
                {gesprek.map((g, i) => (
                  <div key={i} className={`flex ${g.van === "jij" ? "justify-end" : "justify-start"}`}>
                    <div
                      className="max-w-[85%] rounded-2xl px-4 py-3 text-[15px] leading-[1.5]"
                      style={
                        g.van === "jij"
                          ? { background: "#4A8EBB", color: "#fff", borderBottomRightRadius: 6 }
                          : { background: "#F1F3F7", color: "#0B1220", borderBottomLeftRadius: 6 }
                      }
                    >
                      {g.tekst}
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[13px] text-gray-400 mt-5 pt-4 border-t border-gray-100">
                Drie regels, en de offerte blijft niet liggen. Dat is één rode stip die weg is.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
