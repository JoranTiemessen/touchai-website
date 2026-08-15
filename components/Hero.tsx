"use client";

const CAL_URL = "https://calendar.app.google/7rRamUEnapLFZ2PS9";

const stats = [
  { value: "Dag 10", label: "draait je eerste agent op je eigen werk" },
  { value: "60 dagen", label: "tot de rest van je agents draait" },
  { value: "90 minuten", label: "is alles wat het je aan tijd kost" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-24 overflow-hidden bg-white">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% -10%, rgba(110,173,212,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold tracking-wider uppercase mb-8"
          style={{
            background: "rgba(110,173,212,0.06)",
            borderColor: "rgba(110,173,212,0.25)",
            color: "#6EADD4",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
          AI-agents voor het MKB
        </div>

        {/* Headline */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.05] tracking-[-0.03em] mb-7 max-w-4xl mx-auto"
          style={{ fontFamily: "'Sora', sans-serif" }}
        >
          Weer aan het werk{" "}
          <span style={{ color: "#6EADD4" }}>dat er echt toe doet.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-base md:text-lg text-gray-500 leading-relaxed mb-10 max-w-2xl mx-auto">
          Wij halen het terugkerende werk uit je bedrijf met AI-agents, op de systemen die je nu al gebruikt. <strong className="font-semibold text-gray-700">Werkt het niet binnen 60 dagen, dan krijg je je investering terug</strong> en blijven de agents staan.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={CAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-brand-400 text-white font-semibold text-[15px] hover:bg-brand-500 active:scale-[0.98] transition-all duration-150"
            style={{ boxShadow: "0 4px 14px rgba(110,173,212,0.4)" }}
          >
            Plan het gesprek
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#ai-team"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-gray-200 bg-white text-gray-600 font-medium text-[15px] hover:border-brand-200 hover:text-brand-400 active:scale-[0.98] transition-all duration-200"
          >
            Waar zit het werk?
          </a>
        </div>

        {/* Stats: full-width row */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <div key={stat.label} className={`text-center px-2 ${i > 0 ? "sm:border-l sm:border-gray-200" : ""}`}>
              <div
                className="text-4xl font-bold tracking-[-0.02em] mb-2"
                style={{ color: "#4A8EBB", fontFamily: "'Sora', sans-serif" }}
              >
                {stat.value}
              </div>
              <div className="text-sm text-gray-400 leading-[1.5] max-w-[16rem] mx-auto">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
