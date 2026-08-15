// Vervang de placeholders hieronder door echte quotes zodra je ze hebt.
// Zet `real: true` per item dat een echte quote is; placeholders tonen dan niet meer.
type Testimonial = { quote: string; name: string; role: string; initials: string; real?: boolean };

const testimonials: Testimonial[] = [
  { quote: "Hier komt binnenkort een echt klantverhaal met een concreet resultaat.", name: "Jouw klant", role: "Functie, Bedrijf", initials: "??" },
  { quote: "Ruimte voor een quote over de tijd en euro's die zijn bespaard.", name: "Jouw klant", role: "Functie, Bedrijf", initials: "??" },
  { quote: "Plek voor een verhaal over hoe het team weer aan het echte werk toekomt.", name: "Jouw klant", role: "Functie, Bedrijf", initials: "??" },
];

export default function Testimonials() {
  const showingPlaceholders = !testimonials.some((t) => t.real);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-white">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-bold tracking-[0.18em] uppercase mb-4" style={{ color: "#3474A0" }}>
            Wat klanten zeggen
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-5" style={{ fontFamily: "'Sora', sans-serif", color: "#0B1220" }}>
            Resultaten die tellen
          </h2>
          {showingPlaceholders && (
            <p className="text-sm text-gray-400">Klantverhalen volgen binnenkort.</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl p-7 flex flex-col"
              style={{
                background: "#fff",
                border: "1px solid rgba(11,18,32,0.07)",
                boxShadow: "0 1px 2px rgba(11,18,32,0.04), 0 8px 30px rgba(11,18,32,0.05)",
                opacity: t.real ? 1 : 0.7,
              }}
            >
              <svg className="w-8 h-8 mb-4" viewBox="0 0 24 24" fill="none" style={{ color: "#C7D6E6" }}>
                <path d="M10 7H6a2 2 0 00-2 2v3a2 2 0 002 2h2v3H5m13-10h-4a2 2 0 00-2 2v3a2 2 0 002 2h2v3h-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="text-[15px] leading-[1.7] flex-1" style={{ color: t.real ? "#334155" : "#94A3B8" }}>
                {t.quote}
              </p>
              <div className="flex items-center gap-3 mt-6 pt-5 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white" style={{ background: "linear-gradient(135deg, #6EADD4 0%, #4A8EBB 100%)" }}>
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-bold" style={{ color: "#0B1220" }}>{t.name}</div>
                  <div className="text-xs text-gray-400">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
