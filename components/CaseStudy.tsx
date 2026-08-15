// Vervang de placeholders door een echte case zodra je er een hebt.
const caseData = {
  real: false,
  client: "Voorbeeldbedrijf",
  industry: "Branche",
  challenge: "Beschrijf hier de situatie: hoeveel tijd ging er verloren aan repetitief werk en wat kostte dat.",
  approach: "Beschrijf welke agents zijn ingezet en hoe ze zijn gekoppeld op de bestaande systemen.",
  result: "Beschrijf het resultaat in tijd en euro's, afgezet tegen de nulmeting.",
  metrics: [
    { value: "···", label: "uur bespaard per week" },
    { value: "···", label: "per maand bespaard" },
    { value: "···", label: "weken tot live" },
  ],
};

export default function CaseStudy() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden" style={{ background: "transparent" }}>
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-bold tracking-[0.18em] uppercase mb-4" style={{ color: "#3474A0" }}>
            Case study
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em]" style={{ fontFamily: "'Sora', sans-serif", color: "#E8EEF6" }}>
            Van tijdverlies naar resultaat
          </h2>
          {!caseData.real && <p className="text-sm text-slate-500 mt-4">De eerste uitgewerkte case volgt binnenkort.</p>}
        </div>

        <div
          className="rounded-3xl overflow-hidden"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(150,190,225,0.14)", boxShadow: "0 1px 2px rgba(11,18,32,0.04), 0 12px 44px rgba(11,18,32,0.06)", opacity: caseData.real ? 1 : 0.75 }}
        >
          {/* metrics */}
          <div className="grid grid-cols-3 divide-x divide-gray-100" style={{ background: "linear-gradient(135deg, rgba(74,142,187,0.06) 0%, rgba(42,94,131,0.04) 100%)" }}>
            {caseData.metrics.map((m) => (
              <div key={m.label} className="p-6 md:p-8 text-center">
                <div className="text-3xl md:text-4xl font-bold tracking-[-0.02em]" style={{ fontFamily: "'Sora', sans-serif", color: "#2A5E83" }}>{m.value}</div>
                <div className="text-xs text-slate-400 mt-1.5 leading-snug">{m.label}</div>
              </div>
            ))}
          </div>

          {/* body */}
          <div className="p-8 md:p-10">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-sm font-bold" style={{ color: "#E8EEF6" }}>{caseData.client}</span>
              <span className="text-slate-600">·</span>
              <span className="text-sm text-slate-500">{caseData.industry}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { t: "De uitdaging", d: caseData.challenge },
                { t: "Onze aanpak", d: caseData.approach },
                { t: "Het resultaat", d: caseData.result },
              ].map((b) => (
                <div key={b.t}>
                  <div className="text-[11px] font-bold tracking-wider uppercase text-slate-500 mb-2">{b.t}</div>
                  <p className="text-sm text-slate-300 leading-[1.7]">{b.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
