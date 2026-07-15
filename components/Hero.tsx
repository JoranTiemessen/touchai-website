"use client";

const CAL_URL = "https://calendar.app.google/7rRamUEnapLFZ2PS9";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-16 overflow-hidden bg-white">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 70% -10%, rgba(110,173,212,0.10) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-3xl">
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
            AI Workforce · voor het MKB
          </div>

          {/* Headline */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.05] tracking-[-0.03em] mb-6"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Bespaar een volledige FTE.
            <br />
            <span style={{ color: "#6EADD4" }}>Zonder iemand aan te nemen.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base md:text-lg text-gray-500 leading-relaxed mb-10 max-w-xl">
            Dat is <strong className="font-semibold text-gray-700">€3.000 tot €5.000 per maand</strong> aan loonkosten die je niet hoeft te maken. Geen vage AI-adviezen, maar een team AI-agents dat wij bouwen op de systemen die je nu al gebruikt. Jouw team stopt met repetitief werk.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-brand-400 text-white font-semibold text-[15px] hover:bg-brand-500 active:scale-[0.98] transition-all duration-150"
              style={{ boxShadow: "0 4px 14px rgba(110,173,212,0.4)" }}
            >
              Plan een gratis gesprek
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#ai-team"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-gray-200 bg-white text-gray-600 font-medium text-[15px] hover:border-brand-200 hover:text-brand-400 active:scale-[0.98] transition-all duration-200"
            >
              Bekijk je AI-team
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 flex flex-wrap gap-x-10 gap-y-4">
            {[
              { value: "40 u", label: "bespaard per week, 1 volledige FTE" },
              { value: "3 wkn", label: "tot je eerste agent live staat" },
              { value: "90 dgn", label: "resultaat gegarandeerd, of we werken gratis door" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-baseline gap-2 max-w-[15rem]">
                <span
                  className="text-2xl font-bold tracking-tight whitespace-nowrap"
                  style={{ color: "#4A8EBB", fontFamily: "'Sora', sans-serif" }}
                >
                  {stat.value}
                </span>
                <span className="text-sm text-gray-400">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
