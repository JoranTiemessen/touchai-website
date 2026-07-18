const stats = [
  { value: "40%", label: "van de werktijd gaat op aan taken die te automatiseren zijn", source: "McKinsey" },
  { value: "8×", label: "meer kans op conversie bij opvolging binnen 5 minuten", source: "Lead-response onderzoek" },
  { value: "€5.000", label: "kost een fulltime medewerker je gemiddeld per maand", source: "fully-loaded" },
];

export default function StatsBar() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden" style={{ background: "#0B1220" }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(74,142,187,0.14) 0%, transparent 60%)" }}
      />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <div className="text-5xl md:text-6xl font-bold tracking-[-0.03em] mb-2" style={{ fontFamily: "'Sora', sans-serif", color: "#7FB4DA" }}>
                {s.value}
              </div>
              <p className="text-[15px] leading-[1.6] mb-1" style={{ color: "rgba(255,255,255,0.75)" }}>{s.label}</p>
              <span className="text-xs uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.35)" }}>{s.source}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
