"use client";

const CAL_URL = "https://calendar.app.google/7rRamUEnapLFZ2PS9";

const stats = [
  { value: "Dag 10", label: "draait je eerste agent op je eigen werk" },
  { value: "60 dagen", label: "tot de rest van je agents draait" },
  { value: "90 min", label: "is alles wat het je aan tijd kost" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[92dvh] flex items-center pt-28 overflow-hidden">
      {/* dot-veld, bolvormig gemaskeerd */}
      <div className="dotfield" aria-hidden="true" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 65% 50% at 62% 42%, rgba(110,173,212,0.16) 0%, transparent 65%)",
        }}
      />

      <div className="relative w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-20 md:py-24">
        {/* label met hoekmarkeringen */}
        <div className="brackets label-mono inline-block mb-10" style={{ color: "#3474A0" }}>
          AI-agents voor het MKB
        </div>

        {/* asymmetrische kop: eerste regel links, tweede regel ingesprongen */}
        <h1
          className="font-bold text-gray-900 leading-[0.94] tracking-[-0.04em]"
          style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(2.75rem, 7.2vw, 6.5rem)" }}
        >
          <span className="block">Weer aan het werk</span>
          <span className="block md:pl-[14%]" style={{ color: "#6EADD4" }}>
            dat er echt toe doet.
          </span>
        </h1>

        {/* tekst rechts uitgelijnd, tegenover de kop */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-5 md:col-start-8">
            <p className="text-[17px] text-gray-500 leading-[1.65]">
              Wij halen het terugkerende werk uit je bedrijf met AI-agents, op de systemen die je nu
              al gebruikt.{" "}
              <strong className="font-semibold text-gray-800">
                Werkt het niet binnen 60 dagen, dan krijg je je investering terug
              </strong>{" "}
              en blijven de agents staan.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href={CAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-brand-400 text-white font-semibold text-[15px] hover:bg-brand-500 active:scale-[0.98] transition-[background-color,transform] duration-150"
                style={{ boxShadow: "0 8px 24px -10px rgba(42,94,131,0.75)" }}
              >
                Plan het gesprek
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#ai-team"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-gray-200 bg-white/70 text-gray-600 font-medium text-[15px] hover:border-brand-300 hover:text-brand-500 active:scale-[0.98] transition-[color,border-color,transform] duration-200"
              >
                Waar zit het werk?
              </a>
            </div>
          </div>
        </div>

        {/* cijfers in mono, op een lijn onderaan */}
        <div className="mt-20 pt-8 border-t border-gray-200/70 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-baseline gap-4">
              <div
                className="tabular text-2xl md:text-3xl font-semibold tracking-[-0.02em] whitespace-nowrap"
                style={{ color: "#2A5E83", fontFamily: "'Sora', sans-serif" }}
              >
                {stat.value}
              </div>
              <div className="label-mono text-gray-400 leading-[1.5]" style={{ letterSpacing: "0.08em" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
