export default function FinalCTA() {
  return (
    <section id="contact" className="relative py-24 md:py-32 bg-gray-950 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(110,173,212,0.10) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(110,173,212,0.4), transparent)" }}
      />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold tracking-wider uppercase mb-8"
          style={{
            background: "rgba(110,173,212,0.08)",
            borderColor: "rgba(110,173,212,0.25)",
            color: "#9FCAE3",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
          Gratis kennismaking
        </div>

        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-[-0.03em] mb-5 leading-[1.1]"
          style={{ fontFamily: "'Sora', sans-serif" }}
        >
          Klaar voor een
          <br />
          <span style={{ color: "#6EADD4" }}>volledige FTE terug?</span>
        </h2>

        <p className="text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.5)" }}>
          Plan een gratis gesprek van 30 minuten. We laten je precies zien welke agents het meeste opleveren en wat we voor je zouden bouwen. Volledig vrijblijvend.
        </p>

        <p className="text-sm mb-10 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.38)" }}>
          Voor Nederlandse MKB-bedrijven vanaf 5 medewerkers waar de eigenaar zelf meewerkt en dagelijks de pijn van repetitief werk voelt.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          {[
            "Vrijblijvend",
            "Eerste agent live in 3 weken",
            "Gebouwd op je eigen systemen",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
              <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 16 16" fill="none" style={{ color: "#6EADD4" }}>
                <path d="M4 8l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {item}
            </div>
          ))}
        </div>

        <a
          href="https://calendar.app.google/7rRamUEnapLFZ2PS9"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-white font-semibold text-[15px] hover:opacity-90 active:scale-[0.98] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-3"
          style={{
            background: "linear-gradient(135deg, #6EADD4 0%, #4A8EBB 100%)",
            boxShadow: "0 6px 20px rgba(110,173,212,0.35)",
          }}
        >
          Plan een gratis gesprek
          <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>

        <p className="mt-5 text-[13px]" style={{ color: "rgba(255,255,255,0.25)" }}>
          info@touchaiagency.com
        </p>
      </div>
    </section>
  );
}
