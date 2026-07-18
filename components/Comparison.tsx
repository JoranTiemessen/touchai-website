const cols = ["AI Workforce", "Vaste medewerker", "Freelancer", "Losse AI-tools"];

type Cell = string | boolean;
const rows: { label: string; values: Cell[] }[] = [
  { label: "Kosten per maand", values: ["vanaf €1.500", "± €5.000", "hoog per uur", "laag, maar los"] },
  { label: "Inzetbaar in", values: ["3 weken", "maanden werven", "dagen", "direct, zelf inrichten"] },
  { label: "Werkt 24/7", values: [true, false, false, false] },
  { label: "Schaalbaar per taak", values: [true, false, "beperkt", "beperkt"] },
  { label: "Kennis blijft in je bedrijf", values: [true, true, false, "deels"] },
  { label: "Meetbaar + garantie", values: [true, false, false, false] },
];

function Value({ v, highlight }: { v: Cell; highlight: boolean }) {
  if (typeof v === "boolean") {
    return v ? (
      <span className="inline-flex w-6 h-6 rounded-full items-center justify-center" style={{ background: highlight ? "rgba(255,255,255,0.18)" : "rgba(44,143,94,0.12)" }}>
        <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" style={{ color: highlight ? "#fff" : "#2C8F5E" }}>
          <path d="M4 8l3 3 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    ) : (
      <span className="inline-flex w-6 h-6 rounded-full items-center justify-center" style={{ background: "rgba(11,18,32,0.05)" }}>
        <svg className="w-3 h-3 text-gray-300" viewBox="0 0 16 16" fill="none"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
      </span>
    );
  }
  return <span className={`text-sm font-semibold ${highlight ? "text-white" : "text-gray-700"}`}>{v}</span>;
}

export default function Comparison() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-white">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-bold tracking-[0.18em] uppercase mb-4" style={{ color: "#3474A0" }}>
            De eerlijke vergelijking
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-5" style={{ fontFamily: "'Sora', sans-serif", color: "#0B1220" }}>
            Waarom een AI Workforce?
          </h2>
          <p className="text-lg text-gray-500 leading-[1.7]">
            Extra capaciteit nodig? Zo verhoudt een AI Workforce zich tot de alternatieven.
          </p>
        </div>

        <div className="overflow-x-auto -mx-4 px-4">
          <div className="min-w-[720px]">
            {/* header */}
            <div className="grid grid-cols-[1.4fr_1.2fr_1fr_1fr_1fr] gap-3 mb-3">
              <div />
              {cols.map((c, i) => (
                <div
                  key={c}
                  className="rounded-2xl px-4 py-4 text-center text-sm font-bold"
                  style={i === 0
                    ? { background: "linear-gradient(135deg, #4A8EBB 0%, #2A5E83 100%)", color: "#fff", fontFamily: "'Sora', sans-serif" }
                    : { background: "#F7F6F3", color: "#475569", fontFamily: "'Sora', sans-serif" }}
                >
                  {c}
                </div>
              ))}
            </div>

            {/* rows */}
            <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(11,18,32,0.07)" }}>
              {rows.map((row, ri) => (
                <div key={row.label} className={`grid grid-cols-[1.4fr_1.2fr_1fr_1fr_1fr] gap-3 items-center px-3 py-4 ${ri % 2 === 0 ? "bg-white" : "bg-[#FAFAF8]"}`}>
                  <div className="text-sm font-semibold text-gray-800 pl-2">{row.label}</div>
                  {row.values.map((v, ci) => (
                    <div
                      key={ci}
                      className="text-center py-1 rounded-lg"
                      style={ci === 0 ? { background: "linear-gradient(135deg, #4A8EBB 0%, #2A5E83 100%)", paddingTop: 8, paddingBottom: 8 } : {}}
                    >
                      <Value v={v} highlight={ci === 0} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
