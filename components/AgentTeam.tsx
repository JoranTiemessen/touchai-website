const agents = [
  {
    naam: "Marketing-agent",
    tag: "Trekt nieuwe aanvragen binnen",
    taken: [
      "Leads uit je ads, je site en je socials opvangen",
      "Verrijken, kwalificeren en bij de juiste persoon leggen",
      "Nurture-mails en appjes die vanzelf doorlopen",
    ],
  },
  {
    naam: "Sales-agent",
    tag: "Volgt op tot er een ja ligt",
    taken: [
      "Aanvragen uitlezen en compleet in je CRM zetten",
      "Offertes klaarzetten op je eigen prijzen en voorwaarden",
      "Opvolgen op het juiste moment en afspraken inboeken",
    ],
  },
  {
    naam: "Operations-agent",
    tag: "Houdt de uitvoering lopend",
    taken: [
      "Nieuwe klanten onboarden en de planning bijwerken",
      "Statusupdates sturen zonder dat iemand erachteraan zit",
      "Binnenkomende vragen uitlezen, beantwoorden of doorzetten",
    ],
  },
  {
    naam: "Finance-agent",
    tag: "Bewaakt de cijfers",
    taken: [
      "Facturen aanmaken en herinneringen versturen",
      "Bonnen en inkoopfacturen controleren en wegboeken",
      "Rapportages en een seintje als de cashflow schuurt",
    ],
  },
];

export default function AgentTeam() {
  return (
    <section id="agents" className="relative py-24 md:py-32 overflow-hidden bg-white">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <div className="label-mono mb-4" style={{ color: "#3474A0" }}>Wat je krijgt</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em]" style={{ fontFamily: "'Inter Tight', sans-serif", color: "#0B1220" }}>
            Geen losse tool, maar <span style={{ color: "#4A8EBB" }}>een ploeg die samenwerkt.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {agents.map((a) => (
            <div key={a.naam} className="card-base rounded-2xl p-7 md:p-8">
              <h3 className="text-[21px] font-bold tracking-[-0.015em] text-gray-900" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                {a.naam}
              </h3>
              <p className="text-[15px] font-semibold mt-1 mb-5" style={{ color: "#3474A0" }}>{a.tag}</p>
              <ul className="space-y-2.5 pt-5 border-t border-gray-100">
                {a.taken.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-[15.5px] text-gray-600 leading-[1.5]">
                    <span className="w-5 h-5 rounded-full grid place-items-center shrink-0 mt-0.5" style={{ background: "rgba(110,173,212,0.16)" }}>
                      <svg className="w-3 h-3" viewBox="0 0 16 16" fill="none" style={{ color: "#2A5E83" }}>
                        <path d="M4 8l3 3 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-10 text-[17px] text-gray-600 leading-[1.7] max-w-3xl">
          Ze geven werk aan elkaar door.{" "}
          <strong className="font-semibold text-gray-900">
            Een aanvraag die binnenkomt wordt een offerte, die offerte wordt opgevolgd, en wat verkocht is wordt
            gefactureerd
          </strong>
          , zonder dat iemand het tussendoor hoeft over te typen. En alles draait in de systemen die je al
          gebruikt: je mail, WhatsApp, je CRM en je boekhoudpakket.
        </p>
      </div>
    </section>
  );
}
