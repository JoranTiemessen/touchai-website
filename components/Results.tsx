const conditions = [
  {
    title: "De norm komt uit de Tijdlek-scan",
    desc: "Geen blinde 40 uur, maar de besparing die we samen vaststellen en aftekenen.",
  },
  {
    title: "De klok start bij livegang",
    desc: "De 60 dagen gaan in zodra je eerste agent draait, niet bij de kick-off.",
  },
  {
    title: "Gemeten en per agent afgetekend",
    desc: "Elke maand een rapport met bespaarde uren per agent, afgezet tegen de nulmeting.",
  },
  {
    title: "Je betaalt pas bij livegang",
    desc: "De maandelijkse investering start pas op het moment dat je eerste agent live staat.",
  },
];

export default function Results() {
  return (
    <section id="garantie" className="relative py-24 md:py-32 overflow-hidden" style={{ background: "rgba(255,255,255,0.94)" }}>
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 70% at 50% 0%, rgba(110,173,212,0.07) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Guarantee hero block */}
        <div className="relative rounded-3xl overflow-hidden bg-gray-950 p-8 md:p-14">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 60% 60% at 20% 0%, rgba(110,173,212,0.16) 0%, transparent 60%)" }}
          />
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(110,173,212,0.5), transparent)" }}
          />

          <div className="relative">
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold tracking-wider uppercase mb-7"
              style={{ background: "rgba(110,173,212,0.10)", borderColor: "rgba(110,173,212,0.30)", color: "#9FCAE3" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
              Onze garantie
            </div>

            <h2
              className="text-2xl md:text-4xl font-bold text-white tracking-[-0.02em] leading-[1.2] max-w-3xl"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              De besparing die we in de Tijdlek-scan vaststellen, staat er{" "}
              <span style={{ color: "#6EADD4" }}>binnen 60 dagen na livegang.</span>{" "}
              Of we werken kosteloos door tot het wél zo is.
            </h2>

            <div className="text-xs font-semibold tracking-wider uppercase mt-10 mb-5" style={{ color: "rgba(255,255,255,0.45)" }}>
              Onder deze voorwaarden
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {conditions.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "rgba(110,173,212,0.18)", border: "1px solid rgba(110,173,212,0.35)" }}
                  >
                    <svg className="w-3 h-3" viewBox="0 0 16 16" fill="none" style={{ color: "#9FCAE3" }}>
                      <path d="M4 8l3 3 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white" style={{ fontFamily: "'Sora', sans-serif" }}>
                      {item.title}
                    </div>
                    <p className="text-[13px] leading-[1.6] mt-0.5" style={{ color: "rgba(255,255,255,0.55)" }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-[13px] leading-[1.6] mt-8 pt-6 border-t border-white/10" style={{ color: "rgba(255,255,255,0.45)" }}>
              En alles wat we bouwen blijft van jou, ook als we uit elkaar gaan. Gebouwd op je bestaande systemen, geen migratie.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
