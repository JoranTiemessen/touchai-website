const CAL_URL = "https://calendar.app.google/7rRamUEnapLFZ2PS9";

const eenmalig = [
  "Het gesprek en de lijst met processen die eruit kunnen",
  "Toegang en koppelingen op je bestaande systemen",
  "De afgesproken agents, live op je eigen echte werk",
  "Monitoring, een overzicht per agent en een melding bij stilte",
  "Documentatie en overdracht, alles in je eigen accounts",
];

const maandelijks = [
  "Monitoring en storingsherstel: wij zien het voordat jij het merkt",
  "Aanpassing zodra een koppeling, systeem of model verandert",
  "Eén optimalisatieronde per maand",
  "Maandrapport: wat is er door de agents heen gegaan",
  "Support en vragen tussendoor",
];

export default function Pricing() {
  return (
    <section
      id="prijs"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, rgba(240,248,255,0.6) 0%, rgba(255,255,255,0.95) 100%)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 80% 0%, rgba(110,173,212,0.08) 0%, transparent 60%)" }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold tracking-wider uppercase mb-5"
            style={{ background: "rgba(110,173,212,0.06)", borderColor: "rgba(110,173,212,0.25)", color: "#6EADD4" }}
          >
            De investering
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 tracking-[-0.03em] mb-5"
            style={{ fontFamily: "'Inter Tight', sans-serif" }}
          >
            Wat het kost, hoor je{" "}
            <span style={{ color: "#6EADD4" }}>in het gesprek.</span>
          </h2>
          <p className="text-lg text-gray-500 leading-[1.7]">
Het hangt af van hoeveel processen eruit kunnen, en dat weten we pas als we ze samen benoemd hebben. Je hoort het bedrag in datzelfde gesprek, niet in een offerte drie dagen later.
          </p>
        </div>

        {/* Wat je krijgt: eenmalig + maandelijks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {[
            { label: "Eenmalig", title: "De complete bouw", items: eenmalig },
            { label: "Maandelijks", title: "Wij houden het draaiend", items: maandelijks },
          ].map((col) => (
            <div
              key={col.label}
              className="rounded-3xl p-8 md:p-10"
              style={{
                background: "rgba(255,255,255,0.96)",
                boxShadow: "0 4px 6px rgba(110,173,212,0.06), 0 14px 44px rgba(110,173,212,0.10), 0 1px 2px rgba(0,0,0,0.04)",
                border: "1px solid rgba(110,173,212,0.14)",
              }}
            >
              <div className="text-xs font-semibold tracking-wider uppercase text-brand-500 mb-2">{col.label}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 tracking-[-0.01em]" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                {col.title}
              </h3>
              <div className="space-y-3.5">
                {col.items.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(110,173,212,0.14)", border: "1px solid rgba(110,173,212,0.28)" }}>
                      <svg className="w-3 h-3" viewBox="0 0 16 16" fill="none" style={{ color: "#4A8EBB" }}>
                        <path d="M4 8l3 3 5-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-600 leading-[1.6]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Value statement (no prices) */}
        <div
          className="rounded-3xl p-8 md:p-10 text-center"
          style={{
            background: "linear-gradient(135deg, rgba(110,173,212,0.10) 0%, rgba(74,142,187,0.07) 100%)",
            border: "1px solid rgba(110,173,212,0.18)",
          }}
        >
          <p
            className="text-lg md:text-2xl font-bold text-gray-900 tracking-[-0.01em] leading-[1.4] max-w-3xl mx-auto"
            style={{ fontFamily: "'Inter Tight', sans-serif" }}
          >
            Je betaalt de helft bij de start en de helft als de laatste agent draait.{" "}
            <span style={{ color: "#4A8EBB" }}>Werkt het niet, dan krijg je je investering terug en blijven de agents staan.</span>
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href={CAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2.5 px-7 py-4 rounded-full text-white font-semibold text-base hover:opacity-95 active:scale-[0.98] transition-all duration-200"
            style={{ background: "linear-gradient(135deg, #6EADD4 0%, #4A8EBB 100%)", boxShadow: "0 6px 20px rgba(110,173,212,0.40)" }}
          >
            Plan het gesprek
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <p className="mt-4 text-sm text-gray-400">
            Eén prijs voor het geheel, afgestemd op het aantal processen dat we overnemen.
          </p>
          <p className="mt-2 text-sm font-semibold" style={{ color: "#3474A0" }}>
            We nemen maximaal 2 nieuwe trajecten per maand aan.
          </p>
        </div>
      </div>
    </section>
  );
}
