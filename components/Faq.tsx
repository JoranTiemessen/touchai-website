"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Werkt het met mijn bestaande systemen?",
    a: "Ja. We koppelen de agents op de tools die je nu al gebruikt (Gmail, Outlook, WhatsApp, je CRM, je boekhoudpakket). Geen migratie, geen nieuwe software die je team moet leren.",
  },
  {
    q: "Wat als ik geen technische kennis heb?",
    a: "Dat hoeft ook niet. Wij bouwen, koppelen en trainen alles. Jij keurt goed en gebruikt de agents in je vertrouwde omgeving. Je team is er maximaal een paar uur per week mee bezig.",
  },
  {
    q: "Is mijn data veilig?",
    a: "Ja. We werken op je eigen systemen en volgens de geldende privacywetgeving (AVG). Alles wat we bouwen blijft van jou, ook als we uit elkaar gaan.",
  },
  {
    q: "Hoe snel staat de eerste agent live?",
    a: "Binnen 3 weken. We starten met je grootste tijdvreter, zodat je direct resultaat ziet. Daarna rollen we agent voor agent uit.",
  },
  {
    q: "Wat als het resultaat er niet is?",
    a: "Dan werken we kosteloos door tot de in de Tijdlek-scan vastgestelde besparing er staat, binnen 90 dagen na livegang. Je betaalt de retainer bovendien pas vanaf het moment dat je eerste agent live staat.",
  },
  {
    q: "Voor welke bedrijven is dit?",
    a: "Nederlandse MKB-bedrijven vanaf 5 medewerkers waar de eigenaar zelf meewerkt en dagelijks de pijn van repetitief werk voelt. We nemen maximaal 2 nieuwe implementaties per maand aan.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden" style={{ background: "#F7F6F3" }}>
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-bold tracking-[0.18em] uppercase mb-4" style={{ color: "#3474A0" }}>
            Veelgestelde vragen
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em]" style={{ fontFamily: "'Sora', sans-serif", color: "#0B1220" }}>
            Alles wat je wilt weten
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className="rounded-2xl overflow-hidden"
                style={{ background: "#fff", border: "1px solid rgba(11,18,32,0.07)" }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-[16px] font-bold" style={{ fontFamily: "'Sora', sans-serif", color: "#0B1220" }}>{item.q}</span>
                  <span
                    className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300"
                    style={{ background: "#EEF2F7", transform: isOpen ? "rotate(45deg)" : "none" }}
                  >
                    <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" style={{ color: "#3474A0" }}>
                      <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                <div className="grid transition-all duration-300 ease-out" style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}>
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-[15px] text-gray-500 leading-[1.7]">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
