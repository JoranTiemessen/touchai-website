type Tag = "KERN" | "GELD" | null;

type Agent = { name: string; tag: Tag };
type Department = { name: string; tagline: string; icon: React.ReactNode; agents: Agent[] };

const icon = (path: React.ReactNode) => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="#3474A0" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    {path}
  </svg>
);

const departments: Department[] = [
  {
    name: "Sales & opvolging",
    tagline: "Meer uit elke lead, tot getekende offerte",
    icon: icon(<><path d="M3 17l6-6 4 4 7-7" /><path d="M17 8h4v4" /></>),
    agents: [
      { name: "Offerte-agent", tag: "KERN" },
      { name: "Opvolg-agent", tag: "GELD" },
      { name: "Lead-kwalificatie-agent", tag: "GELD" },
      { name: "CRM-agent", tag: null },
      { name: "Reactivatie-agent", tag: "GELD" },
    ],
  },
  {
    name: "Marketing & content",
    tagline: "Meer bereik en warme leads",
    icon: icon(<><path d="M3 11l14-7v16L3 13z" /><path d="M7 12v5a2 2 0 002 2h1" /></>),
    agents: [
      { name: "Content-agent", tag: "GELD" },
      { name: "Nurture-agent", tag: "GELD" },
      { name: "Reviews-agent", tag: "GELD" },
      { name: "Campagne-agent", tag: null },
    ],
  },
  {
    name: "Klantcontact",
    tagline: "Elke klantvraag beantwoord, 24/7",
    icon: icon(<path d="M21 12a8 8 0 01-11.5 7.2L4 20l1-4.5A8 8 0 1121 12z" />),
    agents: [
      { name: "Inbox-agent", tag: "KERN" },
      { name: "Ticket-agent", tag: null },
      { name: "Kennisbank-agent", tag: null },
    ],
  },
  {
    name: "HR & team",
    tagline: "Werven en inwerken op de automaat",
    icon: icon(<><circle cx="9" cy="8" r="3" /><path d="M3 20a6 6 0 0112 0" /><path d="M16 6a3 3 0 010 6" /><path d="M17 20a6 6 0 00-1.5-4" /></>),
    agents: [
      { name: "Onboarding-agent", tag: null },
      { name: "Recruitment-agent", tag: null },
      { name: "Interne-kennisbank-agent", tag: null },
    ],
  },
  {
    name: "Operatie",
    tagline: "Het dagelijkse werk geregeld",
    icon: icon(<><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" /></>),
    agents: [
      { name: "Assistent-agent", tag: "KERN" },
      { name: "Rapportage-agent", tag: null },
      { name: "Proces-agent", tag: null },
    ],
  },
  {
    name: "Finance & administratie",
    tagline: "Administratie en cashflow zonder handwerk",
    icon: icon(<><path d="M4 20V10M10 20V4M16 20v-8M22 20H2" /></>),
    agents: [
      { name: "Administratie-agent", tag: "KERN" },
      { name: "Debiteuren-agent", tag: "GELD" },
      { name: "Documentverwerking-agent", tag: null },
      { name: "Forecasting-agent", tag: null },
    ],
  },
];

const chipStyle = { background: "#F1F3F7", color: "#475569", border: "1px solid rgba(71,85,105,0.10)" };

export default function AgentCatalog() {
  return (
    <section id="ai-team" className="relative py-24 md:py-32 overflow-hidden" style={{ background: "#F7F6F3" }}>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14">
          <div className="text-xs font-bold tracking-[0.18em] uppercase mb-4" style={{ color: "#3474A0" }}>
            Je AI-team
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold tracking-[-0.03em] leading-[1.08] max-w-3xl mb-6"
            style={{ fontFamily: "'Sora', sans-serif", color: "#0B1220" }}
          >
            Per afdeling een agent voor elk terugkerend proces.
          </h2>
          <p className="text-lg text-gray-500 leading-[1.7] max-w-2xl">
            Geen chatbot, geen cursus, geen los experiment. Wij bouwen het, implementeren het en zorgen dat je team ermee werkt. Je kiest per afdeling welke agents je inzet en breidt uit wanneer je wilt.
          </p>
        </div>

        {/* Department cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {departments.map((dept) => (
            <div
              key={dept.name}
              className="rounded-2xl p-7 flex flex-col"
              style={{
                background: "#ffffff",
                border: "1px solid rgba(11,18,32,0.07)",
                boxShadow: "0 1px 2px rgba(11,18,32,0.04), 0 8px 30px rgba(11,18,32,0.05)",
              }}
            >
              <div className="flex items-start gap-3.5 mb-6">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "#EEF2F7", border: "1px solid rgba(52,116,160,0.10)" }}
                >
                  {dept.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold tracking-[-0.01em]" style={{ fontFamily: "'Sora', sans-serif", color: "#0B1220" }}>
                    {dept.name}
                  </h3>
                  <p className="text-sm text-gray-400 leading-snug mt-0.5">{dept.tagline}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {dept.agents.map((a) => (
                  <span
                    key={a.name}
                    className="text-[13px] font-semibold px-3 py-1.5 rounded-lg"
                    style={chipStyle}
                  >
                    {a.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
