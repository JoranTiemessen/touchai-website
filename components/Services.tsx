const pillars = [
  {
    kicker: "Besparing",
    value: "40 uur",
    unit: "per week",
    detail: "Eén volledige FTE aan capaciteit, opgeteld over je hele team.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <circle cx="24" cy="24" r="18" fill="rgba(110,173,212,0.12)" stroke="#6EADD4" strokeWidth="1.5" />
        <path d="M24 14v10l7 4" stroke="#6EADD4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    tag: null as string | null,
  },
  {
    kicker: "Snelheid",
    value: "3 weken",
    unit: "tot live",
    detail: "We starten met je grootste tijdvreter, zodat je direct resultaat ziet.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <path d="M26 6L10 27h11l-1 15 16-21H25l1-15z" fill="rgba(110,173,212,0.15)" stroke="#6EADD4" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    tag: "Grootste tijdvreter eerst",
  },
  {
    kicker: "Jouw tijd",
    value: "Max 2 uur",
    unit: "per week",
    detail: "Wij bouwen, jij keurt goed. Verder heb je er nauwelijks omkijken naar.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <rect x="8" y="10" width="32" height="28" rx="4" fill="rgba(110,173,212,0.10)" stroke="#6EADD4" strokeWidth="1.5" />
        <path d="M16 24l5 5 11-11" stroke="#6EADD4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    tag: null,
  },
];

export default function Services() {
  return (
    <section id="belofte" className="relative py-24 md:py-32 overflow-hidden" style={{ background: "rgba(255,255,255,0.88)" }}>
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none opacity-40"
        style={{
          background: "radial-gradient(ellipse 60% 60% at 100% 0%, rgba(110,173,212,0.1) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-600 text-xs font-semibold tracking-wider uppercase mb-5">
            Wat we voor je gaan doen
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 tracking-[-0.03em] mb-5"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Een AI-team dat het{" "}
            <span style={{ color: "#6EADD4" }}>repetitieve werk overneemt</span>
          </h2>
          <p className="text-lg text-gray-500 leading-[1.7]">
            Geen migratie, geen nieuwe software leren. We bouwen op de systemen die je nu al gebruikt. Jouw team gaat terug naar het werk waarvoor je ze hebt aangenomen.
          </p>
        </div>

        {/* Pillar cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((p) => (
            <div
              key={p.kicker}
              className="relative group card-elevated rounded-2xl p-8 hover:shadow-brand-lg transition-all duration-300 hover:-translate-y-1"
            >
              {p.tag && (
                <div className="absolute -top-3 left-8 px-3 py-1 rounded-full text-xs font-bold text-white"
                  style={{ background: "linear-gradient(90deg, #6EADD4, #4A8EBB)" }}>
                  {p.tag}
                </div>
              )}

              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                style={{
                  background: "linear-gradient(135deg, rgba(110,173,212,0.12) 0%, rgba(110,173,212,0.05) 100%)",
                  border: "1px solid rgba(110,173,212,0.2)",
                }}
              >
                {p.icon}
              </div>

              <div className="text-xs font-semibold tracking-wider uppercase text-brand-500 mb-2">
                {p.kicker}
              </div>
              <div className="flex items-baseline gap-2 mb-3">
                <span
                  className="text-3xl font-bold text-gray-900 tracking-[-0.02em]"
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  {p.value}
                </span>
                <span className="text-sm font-medium text-gray-400">{p.unit}</span>
              </div>
              <p className="text-gray-500 leading-[1.7] text-sm">
                {p.detail}
              </p>

              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(90deg, #6EADD4, #9FCAE3)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
