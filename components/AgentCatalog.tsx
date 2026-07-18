type Tag = "KERN" | "GELD" | null;

type Agent = { name: string; tag: Tag; hours?: number; desc: string };
type Department = { name: string; tagline: string; icon: React.ReactNode; agents: Agent[] };

const icon = (path: React.ReactNode) => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="#4A8EBB" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    {path}
  </svg>
);

const departments: Department[] = [
  {
    name: "Sales & opvolging",
    tagline: "Meer uit elke lead, tot getekende offerte.",
    icon: icon(<><path d="M3 17l6-6 4 4 7-7" /><path d="M17 8h4v4" /></>),
    agents: [
      { name: "Offerte-agent", tag: "KERN", hours: 5, desc: "Van aanvraag naar concept-offerte in minuten, plus automatische opvolging." },
      { name: "Opvolg-agent", tag: "GELD", desc: "Volgt leads en offertes automatisch op tot ze kopen. De grootste stille omzetlek gedicht." },
      { name: "Lead-kwalificatie-agent", tag: "GELD", desc: "Scoort en verdeelt elke inkomende lead, zodat je alleen met warme leads praat." },
      { name: "CRM-agent", tag: null, desc: "Houdt je CRM automatisch bij: notities, statussen en taken uit elk gesprek." },
      { name: "Reactivatie-agent", tag: "GELD", desc: "Heractiveert oude leads en oud-klanten uit je bestand." },
    ],
  },
  {
    name: "Marketing & content",
    tagline: "Meer bereik en warme leads.",
    icon: icon(<><path d="M3 11l14-7v16L3 13z" /><path d="M7 12v5a2 2 0 002 2h1" /></>),
    agents: [
      { name: "Content-agent", tag: "GELD", desc: "Van één bron (video of artikel) naar posts, nieuwsbrief en socials." },
      { name: "Nurture-agent", tag: "GELD", desc: "Warmt leads op met geautomatiseerde, waardevolle sequenties." },
      { name: "Reviews-agent", tag: "GELD", desc: "Vraagt automatisch reviews na elke klant. Meer social proof, meer inbound." },
      { name: "Campagne-agent", tag: null, desc: "Zet campagnes op, monitort de resultaten en rapporteert." },
    ],
  },
  {
    name: "Klantcontact",
    tagline: "Elke klantvraag beantwoord, 24/7.",
    icon: icon(<path d="M21 12a8 8 0 01-11.5 7.2L4 20l1-4.5A8 8 0 1121 12z" />),
    agents: [
      { name: "Inbox-agent", tag: "KERN", hours: 13, desc: "Leest, sorteert en beantwoordt je mail én terugkerende klantvragen via mail en WhatsApp. Jij keurt goed." },
      { name: "Ticket-agent", tag: null, desc: "Classificeert, beantwoordt en routeert tickets naar de juiste persoon." },
      { name: "Kennisbank-agent", tag: null, desc: "Eén plek waar klant én team direct antwoord vinden. Stop met zoeken." },
    ],
  },
  {
    name: "HR & team",
    tagline: "Werven en inwerken op de automaat.",
    icon: icon(<><circle cx="9" cy="8" r="3" /><path d="M3 20a6 6 0 0112 0" /><path d="M16 6a3 3 0 010 6" /><path d="M17 20a6 6 0 00-1.5-4" /></>),
    agents: [
      { name: "Onboarding-agent", tag: null, desc: "Werkt nieuwe medewerkers automatisch in volgens jouw draaiboek." },
      { name: "Recruitment-agent", tag: null, desc: "CV-screening, eerste kwalificatie en het inplannen van gesprekken." },
      { name: "Interne-kennisbank-agent", tag: null, desc: "Je team vindt zelf antwoorden op HR- en procesvragen." },
    ],
  },
  {
    name: "Operatie",
    tagline: "Het dagelijkse werk geregeld.",
    icon: icon(<><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" /></>),
    agents: [
      { name: "Assistent-agent", tag: "KERN", hours: 14, desc: "Dagstart, weekrecap, documenten, meetings, actiepunten en afspraken. Jouw overzicht van alles." },
      { name: "Rapportage-agent", tag: null, desc: "Data uit je tools samengevoegd tot een maandrapport of live dashboard." },
      { name: "Proces-agent", tag: null, desc: "Automatiseert terugkerende interne workflows." },
    ],
  },
  {
    name: "Finance & administratie",
    tagline: "Administratie en cashflow zonder handwerk.",
    icon: icon(<><path d="M4 20V10M10 20V4M16 20v-8M22 20H2" /></>),
    agents: [
      { name: "Administratie-agent", tag: "KERN", hours: 8, desc: "Facturen en bonnen inlezen, verwerken en klaarzetten in je boekhoudpakket." },
      { name: "Debiteuren-agent", tag: "GELD", desc: "Getrapte betaalherinneringen. Geld sneller binnen, betere cashflow." },
      { name: "Documentverwerking-agent", tag: null, desc: "Documenten en PDF's automatisch uitlezen naar je systeem." },
      { name: "Forecasting-agent", tag: null, desc: "Cashflow- en omzetprognoses op basis van je eigen data." },
    ],
  },
];

function Badge({ tag }: { tag: Exclude<Tag, null> }) {
  const styles =
    tag === "KERN"
      ? { background: "rgba(110,173,212,0.12)", color: "#3474A0", border: "1px solid rgba(110,173,212,0.30)" }
      : { background: "rgba(47,163,107,0.12)", color: "#2C8F5E", border: "1px solid rgba(47,163,107,0.28)" };
  return (
    <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full flex-shrink-0" style={styles}>
      {tag}
    </span>
  );
}

export default function AgentCatalog() {
  return (
    <section
      id="catalogus"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "rgba(255,255,255,0.94)" }}
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 70% at 50% 0%, rgba(110,173,212,0.06) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold tracking-wider uppercase mb-5"
            style={{ background: "rgba(110,173,212,0.06)", borderColor: "rgba(110,173,212,0.25)", color: "#6EADD4" }}
          >
            Agent-catalogus · per afdeling
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 tracking-[-0.03em] mb-5"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Voor elke afdeling een agent{" "}
            <span style={{ color: "#6EADD4" }}>die het werk overneemt.</span>
          </h2>
          <p className="text-lg text-gray-500 leading-[1.7]">
            De vier kern-agents vormen samen je fulltime medewerker (40 uur per week), dat is het gegarandeerde offer. Daarna groeit je AI-team mee: geld-agents die omzet opleveren, en uitbreidingen per afdeling wanneer je bedrijf daarom vraagt.
          </p>

          {/* Legend */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-7 text-[13px] text-gray-500">
            <span className="flex items-center gap-2">
              <Badge tag="KERN" /> in het offer
            </span>
            <span className="flex items-center gap-2">
              <Badge tag="GELD" /> levert omzet op
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#cbd5e1" }} /> uitbreiding wanneer je groeit
            </span>
          </div>
        </div>

        {/* Department cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {departments.map((dept) => (
            <div
              key={dept.name}
              className="rounded-3xl overflow-hidden flex flex-col"
              style={{
                background: "rgba(255,255,255,0.96)",
                boxShadow: "0 4px 6px rgba(110,173,212,0.06), 0 14px 44px rgba(110,173,212,0.09), 0 1px 2px rgba(0,0,0,0.04)",
                border: "1px solid rgba(110,173,212,0.14)",
              }}
            >
              {/* Department header */}
              <div
                className="flex items-start justify-between gap-3 px-6 md:px-7 py-5 border-b border-brand-100/70"
                style={{ background: "rgba(240,248,255,0.5)" }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "linear-gradient(135deg, rgba(110,173,212,0.14) 0%, rgba(110,173,212,0.05) 100%)", border: "1px solid rgba(110,173,212,0.20)" }}
                  >
                    {dept.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 tracking-[-0.01em]" style={{ fontFamily: "'Sora', sans-serif" }}>
                    {dept.name}
                  </h3>
                </div>
                <span className="text-xs text-gray-400 text-right leading-snug mt-1 max-w-[45%]">{dept.tagline}</span>
              </div>

              {/* Agent list */}
              <div className="px-6 md:px-7 py-2">
                {dept.agents.map((a) => (
                  <div key={a.name} className="py-4 border-b border-gray-100 last:border-0">
                    <div className="flex items-center justify-between gap-3 mb-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[15px] font-bold text-gray-900" style={{ fontFamily: "'Sora', sans-serif" }}>
                          {a.name}
                        </span>
                        {a.tag && <Badge tag={a.tag} />}
                      </div>
                      {a.hours != null && (
                        <span className="text-sm font-bold text-brand-500 whitespace-nowrap" style={{ fontFamily: "'Sora', sans-serif" }}>
                          {a.hours} u/wk
                        </span>
                      )}
                    </div>
                    <p className="text-[13px] text-gray-500 leading-[1.6]">{a.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
