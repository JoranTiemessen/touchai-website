const CAL_URL = "https://calendar.app.google/7rRamUEnapLFZ2PS9";

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
            Een medewerker kost je{" "}
            <span style={{ color: "#6EADD4" }}>€5.000 per maand.</span>{" "}
            Als je die al kunt vinden.
          </h2>
          <p className="text-lg text-gray-500 leading-[1.7]">
            Jouw AI-team kost een fractie daarvan en levert elke maand opnieuw op.
          </p>
        </div>

        {/* Price cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Setup */}
          <div
            className="rounded-3xl p-8 md:p-10"
            style={{
              background: "rgba(255,255,255,0.96)",
              boxShadow: "0 4px 6px rgba(110,173,212,0.06), 0 14px 44px rgba(110,173,212,0.10), 0 1px 2px rgba(0,0,0,0.04)",
              border: "1px solid rgba(110,173,212,0.14)",
            }}
          >
            <div className="text-xs font-semibold tracking-wider uppercase text-gray-400 mb-4">Eenmalig</div>
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-5xl md:text-6xl font-bold text-gray-900 tracking-[-0.03em]" style={{ fontFamily: "'Sora', sans-serif" }}>
                €7.500
              </span>
            </div>
            <p className="text-sm text-gray-500 leading-[1.7]">
              Tijdlek-scan, blauwdruk en de complete bouw van jouw AI-team, inclusief training van je medewerkers.
            </p>
          </div>

          {/* Monthly */}
          <div
            className="relative rounded-3xl p-8 md:p-10 overflow-hidden"
            style={{
              background: "linear-gradient(160deg, #ffffff 0%, rgba(240,248,255,0.7) 100%)",
              boxShadow: "0 8px 40px rgba(110,173,212,0.18), 0 2px 6px rgba(0,0,0,0.05)",
              border: "1px solid rgba(110,173,212,0.28)",
            }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-0.5"
              style={{ background: "linear-gradient(90deg, #6EADD4, #9FCAE3)" }}
            />
            <div className="text-xs font-semibold tracking-wider uppercase text-brand-500 mb-4">Maandelijks</div>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-2xl font-semibold text-gray-400 tracking-tight" style={{ fontFamily: "'Sora', sans-serif" }}>vanaf</span>
              <span className="text-5xl md:text-6xl font-bold text-gray-900 tracking-[-0.03em]" style={{ fontFamily: "'Sora', sans-serif" }}>
                €500
              </span>
              <span className="text-lg font-medium text-gray-400">/mnd</span>
            </div>
            <p className="text-sm text-gray-500 leading-[1.7]">
              Meting, doorontwikkeling en uitbreiding. Start pas op het moment dat je eerste agent live staat.
            </p>
          </div>
        </div>

        {/* ROI strip */}
        <div
          className="rounded-3xl p-8 md:p-10 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1.2fr] items-center gap-6 md:gap-4 text-center"
          style={{
            background: "linear-gradient(135deg, rgba(110,173,212,0.08) 0%, rgba(74,142,187,0.05) 100%)",
            border: "1px solid rgba(110,173,212,0.16)",
          }}
        >
          <div>
            <div className="text-2xl md:text-3xl font-bold text-gray-900 tracking-[-0.02em]" style={{ fontFamily: "'Sora', sans-serif" }}>
              €5.000
            </div>
            <div className="text-[11px] font-semibold tracking-wider uppercase text-gray-400 mt-1">Besparing per maand</div>
          </div>
          <div className="text-3xl font-light text-brand-300 hidden md:block">−</div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-gray-900 tracking-[-0.02em]" style={{ fontFamily: "'Sora', sans-serif" }}>
              €500
            </div>
            <div className="text-[11px] font-semibold tracking-wider uppercase text-gray-400 mt-1">Kosten per maand</div>
          </div>
          <div className="text-3xl font-light text-brand-300 hidden md:block">=</div>
          <div
            className="rounded-2xl py-4 px-2"
            style={{ background: "linear-gradient(135deg, #6EADD4 0%, #4A8EBB 100%)" }}
          >
            <div className="text-2xl md:text-3xl font-bold text-white tracking-[-0.02em]" style={{ fontFamily: "'Sora', sans-serif" }}>
              €4.500 terug
            </div>
            <div className="text-[11px] font-semibold tracking-wider uppercase text-white/70 mt-1">Netto, elke maand opnieuw</div>
          </div>
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
            Doe de gratis Tijdlek-scan
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <p className="mt-4 text-sm text-gray-400">
            Binnen 3 weken staat je eerste agent live. Binnen 90 dagen heb je een volledige FTE terug.
          </p>
        </div>
      </div>
    </section>
  );
}
