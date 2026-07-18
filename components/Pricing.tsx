const CAL_URL = "https://calendar.app.google/7rRamUEnapLFZ2PS9";

const monthlyValue = [
  {
    title: "Monitoring & onderhoud",
    desc: "We houden elke agent draaiend en lossen problemen op vóór jij het merkt.",
  },
  {
    title: "Maandelijkse optimalisatie",
    desc: "Agents worden scherper op basis van echt gebruik.",
  },
  {
    title: "Elke maand uitbreiding",
    desc: "Een nieuwe of uitgebreide agent. Je AI-team groeit mee met je bedrijf.",
  },
  {
    title: "Maandrapport",
    desc: "Bespaarde uren per agent, afgezet tegen de nulmeting. Zwart op wit.",
  },
  {
    title: "Adoptie & support",
    desc: "We zorgen dat je team de agents blijft gebruiken. Ongebruikt is nul besparing.",
  },
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
            Salaris, werkgeverslasten, werkplek en verzuim. Nog los van de tijd om er überhaupt één te vinden. Jouw AI-team kost daar een fractie van.
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
              <span className="text-5xl md:text-6xl font-bold text-gray-900 tracking-[-0.03em]" style={{ fontFamily: "'Sora', sans-serif" }}>
                €1.500
              </span>
              <span className="text-lg font-medium text-gray-400">/mnd</span>
            </div>
            <p className="text-sm text-gray-500 leading-[1.7]">
              Monitoring, maandelijkse optimalisatie, uitbreiding en rapportage. Start pas op het moment dat je eerste agent live staat.
            </p>
          </div>
        </div>

        {/* ROI strip — netto framing */}
        <div
          className="rounded-3xl p-8 md:p-10 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1.3fr] items-center gap-6 md:gap-4 text-center"
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
              €1.500
            </div>
            <div className="text-[11px] font-semibold tracking-wider uppercase text-gray-400 mt-1">Kosten per maand</div>
          </div>
          <div className="text-3xl font-light text-brand-300 hidden md:block">=</div>
          <div
            className="rounded-2xl py-4 px-3"
            style={{ background: "linear-gradient(135deg, #6EADD4 0%, #4A8EBB 100%)" }}
          >
            <div className="text-2xl md:text-3xl font-bold text-white tracking-[-0.02em] whitespace-nowrap" style={{ fontFamily: "'Sora', sans-serif" }}>
              €3.500
            </div>
            <div className="text-[11px] font-semibold tracking-wider uppercase text-white/70 mt-1">Aan capaciteit terug, elke maand</div>
          </div>
        </div>

        {/* Wat je maandelijks krijgt */}
        <div
          className="mt-8 rounded-3xl p-8 md:p-10"
          style={{
            background: "rgba(255,255,255,0.96)",
            boxShadow: "0 4px 6px rgba(110,173,212,0.06), 0 14px 44px rgba(110,173,212,0.10), 0 1px 2px rgba(0,0,0,0.04)",
            border: "1px solid rgba(110,173,212,0.14)",
          }}
        >
          <div className="mb-7">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 tracking-[-0.02em]" style={{ fontFamily: "'Sora', sans-serif" }}>
              Wat je maandelijks krijgt
            </h3>
            <p className="text-sm text-gray-500 leading-[1.7] mt-1.5">
              De maandelijkse investering houdt je AI-team scherp en groeiend.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
            {monthlyValue.map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: "rgba(110,173,212,0.14)", border: "1px solid rgba(110,173,212,0.28)" }}
                >
                  <svg className="w-3 h-3" viewBox="0 0 16 16" fill="none" style={{ color: "#4A8EBB" }}>
                    <path d="M4 8l3 3 5-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900" style={{ fontFamily: "'Sora', sans-serif" }}>
                    {item.title}
                  </div>
                  <p className="text-[13px] text-gray-500 leading-[1.6] mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pitch line */}
        <div
          className="mt-8 rounded-3xl p-8 md:p-10 text-center"
          style={{
            background: "linear-gradient(135deg, rgba(110,173,212,0.10) 0%, rgba(74,142,187,0.07) 100%)",
            border: "1px solid rgba(110,173,212,0.18)",
          }}
        >
          <p
            className="text-lg md:text-2xl font-bold text-gray-900 tracking-[-0.01em] leading-[1.4] max-w-3xl mx-auto"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Jij houdt elke maand die besparing. Wij houden het draaiend, optimaliseren het en breiden het uit,{" "}
            <span style={{ color: "#4A8EBB" }}>voor €1.500 per maand.</span>
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
            Doe de gratis Tijdlek-scan
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <p className="mt-4 text-sm text-gray-400">
            Binnen 3 weken staat je eerste agent live. Binnen 90 dagen heb je een fulltime medewerker terug.
          </p>
          <p className="mt-2 text-sm font-semibold" style={{ color: "#3474A0" }}>
            We nemen maximaal 2 nieuwe implementaties per maand aan.
          </p>
        </div>
      </div>
    </section>
  );
}
