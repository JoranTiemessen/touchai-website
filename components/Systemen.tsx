"use client";

import { useState } from "react";

type Systeem = {
  n: string;
  naam: string;
  kort: string;
  stappen: [string, string, string];
  vervangt: string;
  draait: string;
  bij?: string;
  shot?: string;
};

const frontend: Systeem[] = [
  {
    n: "01", naam: "Aanvraag- en leadverwerking",
    kort: "Wat binnenkomt, staat verrijkt en gecontroleerd in je systeem.",
    stappen: ["Mail, formulier of lead komt binnen", "Classificeren, verrijken, dubbelen eruit", "Jij ziet alleen wat klopt"],
    vervangt: "Overtypen uit de mailbox, en aanvragen die tussen wal en schip vallen",
    draait: "Gmail of Outlook · je CRM · webformulier",
    bij: "een salesorganisatie en een interieurbouwer",
  },
  {
    n: "02", naam: "Offerte-agent",
    kort: "Een concept-offerte binnen het uur, met jouw prijzen.",
    stappen: ["Aanvraag is compleet", "Opstellen met jouw prijzen en voorwaarden", "Klaar voor akkoord met één klik"],
    vervangt: "Handmatig samenstellen uit oude offertes en prijslijsten",
    draait: "je CRM of planningssysteem · offertesjabloon",
    bij: "een vastgoedbeheerder",
  },
  {
    n: "03", naam: "Opvolg-agent",
    kort: "Niets blijft liggen, zonder dat het als een robot klinkt.",
    stappen: ["Offerte of aanvraag staat te lang open", "Persoonlijk bericht over mail of WhatsApp", "Reactie komt in je weekrapport"],
    vervangt: "De opvolging die er bij drukte als eerste bij inschiet",
    draait: "mail · WhatsApp · je CRM",
    bij: "een online opleider",
  },
];

const backend: Systeem[] = [
  {
    n: "04", naam: "Facturatie-agent",
    kort: "De factuur maakt zichzelf, jij keurt hem goed.",
    stappen: ["Opgeleverd of einde van de maand", "Factuur samenstellen uit het systeem", "Verstuurd en geboekt"],
    vervangt: "De maandelijkse factuurronde met de hand",
    draait: "je planning of CRM · boekhoudpakket",
    bij: "een vastgoedbeheerder",
  },
  {
    n: "05", naam: "Controle-agent",
    kort: "Klopt wat er binnenkomt met wat er hoort binnen te komen?",
    stappen: ["Bedragen, bonnen of transacties komen binnen", "Naast de bron leggen en verschillen zoeken", "Alleen de afwijkingen komen bij jou"],
    vervangt: "Steekproeven met de hand, en verschillen die pas maanden later opvallen",
    draait: "boekhoudpakket · export uit je systeem",
    bij: "een payment provider",
  },
  {
    n: "06", naam: "Signaal-agent",
    kort: "Wij zien het als iets stilvalt. Voordat jij het merkt.",
    stappen: ["Elk uur een controle op alles wat draait", "Wat bleef liggen, wat viel stil, wat faalde", "Melding in Slack, met wat er aan de hand is"],
    vervangt: "Ontdekken dat er iets stil ligt omdat een klant erover belt",
    draait: "alle agents · het register · Slack",
    bij: "een notariskantoor, en standaard bij al onze klanten",
  },
];

function Kaart({ s }: { s: Systeem }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`card-base rounded-2xl overflow-hidden transition-colors duration-200 ${open ? "border-brand-300" : ""}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left p-6 md:p-7 flex items-start gap-4 focus-visible:outline-none"
      >
        <span className="label-mono pt-1.5 shrink-0" style={{ color: "#4A8EBB" }}>{s.n}</span>
        <span className="flex-1">
          <span className="block text-[21px] font-bold tracking-[-0.015em] text-gray-900" style={{ fontFamily: "'Sora', sans-serif" }}>
            {s.naam}
          </span>
          <span className="block text-[15px] text-gray-500 mt-1.5 leading-relaxed">{s.kort}</span>
        </span>
        <span className={`text-2xl leading-none text-gray-300 transition-transform duration-300 ${open ? "rotate-45" : ""}`}>+</span>
      </button>

      <div className="grid transition-[grid-template-rows] duration-300 ease-out" style={{ gridTemplateRows: open ? "1fr" : "0fr" }}>
        <div className="overflow-hidden">
          <div className="px-6 md:px-7 pb-7 pt-1">
            <div className="rounded-xl p-5" style={{ background: "#F7F6F3", border: "1px solid rgba(11,18,32,0.06)" }}>
              {s.stappen.map((st, i) => (
                <div key={i} className="flex items-start gap-3.5 py-2">
                  <span
                    className="w-6 h-6 rounded-full shrink-0 grid place-items-center text-[11px] font-bold mt-0.5"
                    style={i === 2
                      ? { background: "#4A8EBB", color: "#fff" }
                      : { background: "rgba(110,173,212,0.16)", color: "#2A5E83" }}
                  >
                    {i + 1}
                  </span>
                  <span className={`text-[15px] leading-[1.5] ${i === 2 ? "font-semibold text-gray-900" : "text-gray-600"}`}>{st}</span>
                </div>
              ))}
            </div>

            <dl className="mt-5 space-y-3">
              <div>
                <dt className="label-mono mb-1" style={{ color: "#8A94A6" }}>Vervangt</dt>
                <dd className="text-[15px] text-gray-600 leading-relaxed">{s.vervangt}</dd>
              </div>
              <div>
                <dt className="label-mono mb-1" style={{ color: "#8A94A6" }}>Draait op</dt>
                <dd className="text-[15px] text-gray-600 leading-relaxed">{s.draait}</dd>
              </div>
              {s.bij && (
                <div>
                  <dt className="label-mono mb-1" style={{ color: "#3474A0" }}>Draait nu bij</dt>
                  <dd className="text-[15px] font-semibold text-gray-800 leading-relaxed">{s.bij}</dd>
                </div>
              )}
            </dl>

            {s.shot && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={s.shot} alt={`Schermafdruk van de ${s.naam}`} className="mt-5 w-full rounded-xl border border-gray-100" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Systemen() {
  return (
    <section id="systemen" className="relative py-24 md:py-32 overflow-hidden bg-white">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <div className="label-mono mb-4" style={{ color: "#3474A0" }}>De systemen</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-5" style={{ fontFamily: "'Sora', sans-serif", color: "#0B1220" }}>
            De zes die we het vaakst bouwen.
          </h2>
          <p className="text-lg text-gray-500 leading-[1.7]">
            Elke agent heeft dezelfde vorm: één trigger, één keten, één uitkomst. Klik er een open
            en je ziet precies wat er gebeurt. Welke bij jou iets opleveren, blijkt uit het gesprek.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-5">
          <div>
            <div className="label-mono mb-4 pb-3 border-b border-gray-200" style={{ color: "#8A94A6" }}>
              Frontend · wat de klant raakt
            </div>
            <div className="space-y-5">
              {frontend.map((s) => <Kaart key={s.n} s={s} />)}
            </div>
          </div>
          <div>
            <div className="label-mono mb-4 pb-3 border-b border-gray-200" style={{ color: "#8A94A6" }}>
              Backend · wat intern draait
            </div>
            <div className="space-y-5">
              {backend.map((s) => <Kaart key={s.n} s={s} />)}
            </div>
          </div>
        </div>

        {/* de uitzondering als aanbod, niet als disclaimer */}
        <div className="mt-8 rounded-2xl p-6 md:p-8" style={{ border: "1px dashed rgba(74,142,187,0.45)", background: "rgba(110,173,212,0.05)" }}>
          <div className="flex flex-col md:flex-row md:items-start gap-5">
            <span className="label-mono pt-1.5 shrink-0" style={{ color: "#4A8EBB" }}>07</span>
            <div className="flex-1">
              <h3 className="text-[21px] font-bold tracking-[-0.015em] text-gray-900" style={{ fontFamily: "'Sora', sans-serif" }}>
                Iets wat hier niet bij staat
              </h3>
              <p className="text-[15px] text-gray-500 mt-1.5 leading-relaxed max-w-2xl">
                Jij noemt een proces dat elke week terugkomt → wij kijken of het te bouwen valt →
                als het kan, bouwen we het op dezelfde manier, met dezelfde garantie.
              </p>
              <p className="text-[14px] text-gray-400 mt-3">
                Vervangt de aanname dat jouw proces te specifiek is. Draait op wat je nu al gebruikt.
              </p>
            </div>
          </div>
        </div>

        <p className="mt-10 text-[15px] text-gray-400 max-w-3xl">
          Alles draait op de systemen die je al gebruikt: Gmail of Outlook, WhatsApp, je CRM, je
          boekhoudpakket en je planning. Geen migratie, geen nieuwe software.
        </p>
      </div>
    </section>
  );
}
