const reassurances = [
  "Alles wat we bouwen blijft van jou, ook als we uit elkaar gaan.",
  "Gebouwd op je bestaande systemen. Geen migratie, geen gedoe.",
  "Elke maand een rapport: bespaarde uren per agent, zwart op wit.",
  "Max 2 nieuwe implementaties per maand, zodat elke klant onze volle aandacht krijgt.",
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
              Staat de besparing er niet binnen{" "}
              <span style={{ color: "#6EADD4" }}>90 dagen na de kick-off?</span>{" "}
              Dan werken wij kosteloos door tot het resultaat er wél staat.
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mt-10">
              {reassurances.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "rgba(110,173,212,0.18)", border: "1px solid rgba(110,173,212,0.35)" }}
                  >
                    <svg className="w-3 h-3" viewBox="0 0 16 16" fill="none" style={{ color: "#9FCAE3" }}>
                      <path d="M4 8l3 3 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-sm leading-[1.6]" style={{ color: "rgba(255,255,255,0.62)" }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
