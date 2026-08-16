"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Werkt het met mijn bestaande systemen?",
    a: "Ja. We koppelen de agents op de tools die je nu al gebruikt (Gmail, Outlook, WhatsApp, je CRM, je boekhoudpakket). Geen migratie, geen nieuwe software die je team moet leren.",
  },
  {
    q: "Ik heb hier geen tijd voor.",
    a: "Negentig minuten. Eén sessie waarin we samen de toegang regelen en je proces doorlopen. De voorbeelden die we nodig hebben halen we daarna zelf uit je systeem. Verder bouwen en koppelen wij alles.",
  },
  {
    q: "Onze data is een rommel.",
    a: "Dat is bijna altijd zo. We werken met twintig echte voorbeelden uit je eigen praktijk, niet met een schone database. Dit is geen dataproject.",
  },
  {
    q: "We hebben al eens iets met AI geprobeerd en het viel stil.",
    a: "Precies. Bouwen kan tegenwoordig iedereen, maar bijna niemand kijkt of het nog draait. Bij ons gaat er een melding af zodra er niets meer doorheen komt, en daar is de maandprijs voor.",
  },
  {
    q: "Is mijn data veilig?",
    a: "Ja. We werken op je eigen systemen en volgens de geldende privacywetgeving (AVG). Alles wat we bouwen blijft van jou, ook als we uit elkaar gaan.",
  },
  {
    q: "Hoe snel draait de eerste agent?",
    a: "Op dag 10, op je eigen echte werk en niet op een demo. De rest van de afgesproken agents draait binnen zestig dagen.",
  },
  {
    q: "Wat als het niet werkt?",
    a: "Dan kies jij: je investering terug, of wij werken kosteloos door tot het wel draait, met een grens van dertig dagen. In beide gevallen blijven de agents staan, inclusief documentatie en overdracht. En je betaalt sowieso de helft pas als de laatste agent draait.",
  },
  {
    q: "Straks zijn mijn mensen hun werk kwijt.",
    a: "Niemand hoeft weg. Het werk dat weggaat is het werk waar niemand voor is aangenomen: overtypen, doorsturen, nalopen.",
  },
  {
    q: "Wat kost het?",
    a: "Dat hangt af van hoeveel processen eruit kunnen, en dat weten we pas na het gesprek. Je hoort het bedrag in datzelfde gesprek, niet in een offerte drie dagen later.",
  },
  {
    q: "Voor welke bedrijven is dit?",
    a: "Nederlandse MKB-bedrijven vanaf ongeveer tien man waar elke week hetzelfde werk terugkomt. Zijn er minder dan vier van dat soort processen, dan zeggen we dat op het gesprek gewoon tegen je. We nemen maximaal 2 nieuwe trajecten per maand aan.",
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
          <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em]" style={{ fontFamily: "'Inter Tight', sans-serif", color: "#0B1220" }}>
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
                  <span className="text-[16px] font-bold" style={{ fontFamily: "'Inter Tight', sans-serif", color: "#0B1220" }}>{item.q}</span>
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
