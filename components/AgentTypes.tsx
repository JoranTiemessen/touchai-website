const agents = [
  { name: "E-mailbuddy", does: "Leest, sorteert en beantwoordt terugkerende mail. Jij keurt alleen nog goed.", hours: 6 },
  { name: "Personal Assistant", does: "Dagstart op maandag, weekrecap op vrijdag, documenten opstellen. Jouw overzicht van alles.", hours: 5 },
  { name: "To-do agent", does: "Haalt actiepunten uit mails en meetings en zet ze automatisch op de juiste lijst.", hours: 3 },
  { name: "Notulen-agent", does: "Elke meeting automatisch samengevat, actiepunten verdeeld over het team.", hours: 4 },
  { name: "Offerte-agent", does: "Van aanvraag naar concept-offerte in minuten in plaats van uren.", hours: 5 },
  { name: "Administratie-agent", does: "Facturen en bonnen inlezen, verwerken en klaarzetten in je boekhoudpakket.", hours: 6 },
  { name: "Afspraken-agent", does: "Plannen, bevestigen en reminders sturen. Nooit meer heen-en-weer mailen.", hours: 4 },
  { name: "Klantvragen-agent", does: "Beantwoordt de steeds terugkerende klantvragen via mail en WhatsApp.", hours: 7 },
];

const CAL_URL = "https://calendar.app.google/7rRamUEnapLFZ2PS9";

export default function AgentTypes() {
  return (
    <section
      id="ai-team"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, rgba(240,248,255,0.6) 0%, rgba(255,255,255,0.95) 100%)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 0% 30%, rgba(110,173,212,0.07) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 100% 70%, rgba(74,142,187,0.05) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold tracking-wider uppercase mb-5"
            style={{ background: "rgba(110,173,212,0.06)", borderColor: "rgba(110,173,212,0.25)", color: "#6EADD4" }}
          >
Dit krijg je, concreet
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 tracking-[-0.03em] mb-5"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Jouw AI-team,{" "}
            <span style={{ color: "#6EADD4" }}>agent voor agent</span>
          </h2>
          <p className="text-lg text-gray-500 leading-[1.7]">
            Geen abstract traject. Dit zijn de agents die we voor je bouwen, en wat ze je per week opleveren.
          </p>
        </div>

        {/* Agent table */}
        <div
          className="rounded-3xl overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.96)",
            boxShadow: "0 4px 6px rgba(110,173,212,0.06), 0 16px 50px rgba(110,173,212,0.10), 0 1px 2px rgba(0,0,0,0.04)",
            border: "1px solid rgba(110,173,212,0.14)",
          }}
        >
          {/* Column header - desktop only */}
          <div className="hidden md:grid grid-cols-[190px_1fr_92px] gap-4 px-8 py-4 border-b border-brand-100/70">
            <div className="text-[11px] font-semibold tracking-wider uppercase text-gray-400">Agent</div>
            <div className="text-[11px] font-semibold tracking-wider uppercase text-gray-400">Wat hij doet</div>
            <div className="text-[11px] font-semibold tracking-wider uppercase text-gray-400 text-right">Bespaart</div>
          </div>

          {agents.map((a) => (
            <div
              key={a.name}
              className="grid grid-cols-[1fr_auto] md:grid-cols-[190px_1fr_92px] gap-x-4 gap-y-1 px-6 md:px-8 py-5 border-b border-gray-100 last:border-0 hover:bg-brand-50/40 transition-colors duration-200"
            >
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#6EADD4" }} />
                <span className="text-[15px] font-bold text-gray-900" style={{ fontFamily: "'Sora', sans-serif" }}>
                  {a.name}
                </span>
              </div>
              <div
                className="text-[13px] md:text-sm font-bold text-brand-500 text-right md:hidden self-center"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                {a.hours} u/wk
              </div>
              <p className="col-span-2 md:col-span-1 text-sm text-gray-500 leading-[1.6] pl-4 md:pl-0">
                {a.does}
              </p>
              <div
                className="hidden md:block text-sm font-bold text-brand-500 text-right self-center whitespace-nowrap"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                {a.hours} u/wk
              </div>
            </div>
          ))}

          {/* Total row */}
          <div
            className="grid grid-cols-[1fr_auto] md:grid-cols-[190px_1fr_92px] gap-4 px-6 md:px-8 py-6 items-center"
            style={{ background: "linear-gradient(135deg, rgba(110,173,212,0.10) 0%, rgba(74,142,187,0.07) 100%)" }}
          >
            <div className="text-base font-bold text-gray-900" style={{ fontFamily: "'Sora', sans-serif" }}>
              Totaal
            </div>
            <div className="hidden md:block text-sm font-semibold text-gray-600">
              1 volledige FTE aan capaciteit terug
            </div>
            <div
              className="text-xl font-bold text-right whitespace-nowrap"
              style={{ fontFamily: "'Sora', sans-serif", color: "#4A8EBB" }}
            >
              40 u/wk
            </div>
            <div className="col-span-2 md:hidden text-sm font-semibold text-gray-600">
              1 volledige FTE aan capaciteit terug
            </div>
          </div>
        </div>

        {/* Footnote */}
        <p className="text-sm text-gray-400 leading-[1.7] mt-6 max-w-3xl mx-auto text-center">
          De besparing is opgeteld over je hele team. De exacte mix van agents stemmen we af op jouw bedrijf. Dat doen we in de Tijdlek-scan (stap 1). Alles wordt gebouwd op je bestaande systemen.
        </p>

        <div className="mt-10 text-center">
          <a
            href={CAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-brand-400 text-white font-semibold text-[15px] hover:bg-brand-500 active:scale-[0.98] transition-all duration-150"
            style={{ boxShadow: "0 4px 14px rgba(110,173,212,0.4)" }}
          >
            Doe de gratis Tijdlek-scan
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
