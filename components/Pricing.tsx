const CAL_URL = "https://calendar.app.google/7rRamUEnapLFZ2PS9";

const eenmalig = [
  "Bedrijfsscan: per afdeling in kaart waar de uren weglekken",
  "Agent-blauwdruk: welke agent welk lek oplost",
  "Bouw en koppeling op je bestaande systemen",
  "Training van je team, zodat het ook echt gebruikt wordt",
];

const maandelijks = [
  "Monitoring en onderhoud: we houden elke agent draaiend",
  "Maandelijkse optimalisatie op basis van echt gebruik",
  "Elke maand uitbreiding: je AI-team groeit mee",
  "Maandrapport met bespaarde uren per agent",
  "Adoptie en support, zodat je team blijft gebruiken",
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
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Een medewerker kost je al gauw{" "}
            <span style={{ color: "#6EADD4" }}>€5.000 per maand.</span>
          </h2>
          <p className="text-lg text-gray-500 leading-[1.7]">
            Salaris, werkgeverslasten, werkplek en verzuim. Nog los van de tijd om er één te vinden. Jouw AI-team kost daar een fractie van.
          </p>
        </div>

        {/* Wat je krijgt: eenmalig + maandelijks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {[
            { label: "Eenmalig", title: "De complete bouw", items: eenmalig },
            { label: "Maandelijks", title: "We houden het scherp en groeiend", items: maandelijks },
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
              <h3 className="text-xl font-bold text-gray-900 mb-6 tracking-[-0.01em]" style={{ fontFamily: "'Sora', sans-serif" }}>
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
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Een fulltime medewerker aan capaciteit terug, elke maand opnieuw.{" "}
            <span style={{ color: "#4A8EBB" }}>Voor een fractie van wat die medewerker zou kosten.</span>
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
            Vraag je gratis Bedrijfsscan aan
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <p className="mt-4 text-sm text-gray-400">
            De exacte investering bespreken we in je Bedrijfsscan, afgestemd op jouw bedrijf.
          </p>
          <p className="mt-2 text-sm font-semibold" style={{ color: "#3474A0" }}>
            We nemen maximaal 2 nieuwe implementaties per maand aan.
          </p>
        </div>
      </div>
    </section>
  );
}
