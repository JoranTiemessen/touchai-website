const stats = [
  {
    value: "200+",
    unit: "hrs/mo",
    label: "Hours saved per client",
    description: "On average, our automation systems free up over 200 manual hours every month.",
  },
  {
    value: "3×",
    unit: "",
    label: "More qualified leads",
    description: "AI outbound and inbound agents consistently triple pipeline volume within 60 days.",
  },
  {
    value: "<2",
    unit: "min",
    label: "Lead response time",
    description: "Inbound agents respond and qualify new leads instantly, day or night.",
  },
  {
    value: "80%",
    unit: "",
    label: "Queries handled automatically",
    description: "AI assistants resolve the majority of customer questions without human input.",
  },
];

const outcomes = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#6EADD4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Onboarding automation",
    description: "New clients are onboarded automatically with zero manual steps.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="#6EADD4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Customer service agents",
    description: "AI handles support 24/7, escalating only when a human is truly needed.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="#6EADD4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="#6EADD4" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Proposal & offer agents",
    description: "Generate tailored proposals in seconds based on client input and CRM data.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" stroke="#6EADD4" strokeWidth="1.5" />
        <path d="M12 6v6l4 2" stroke="#6EADD4" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Automated follow-ups",
    description: "No lead goes cold. AI follows up at exactly the right time with the right message.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="#6EADD4" strokeWidth="1.5" />
        <path d="M8 21h8M12 17v4" stroke="#6EADD4" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7 8h3M7 11h5M14 8l2 3-2 3" stroke="#6EADD4" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Reporting & insights",
    description: "Weekly automated reports delivered to your inbox with zero manual effort.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="#6EADD4" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="9" cy="7" r="4" stroke="#6EADD4" strokeWidth="1.5" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="#6EADD4" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Lead enrichment pipelines",
    description: "Automatically enrich prospect data from multiple sources before any outreach.",
  },
];

export default function Results() {
  return (
    <section
      id="results"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "rgba(255,255,255,0.94)" }}
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 70% at 50% 0%, rgba(110,173,212,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold tracking-wider uppercase mb-5"
            style={{
              background: "rgba(110,173,212,0.06)",
              borderColor: "rgba(110,173,212,0.25)",
              color: "#6EADD4",
            }}
          >
            Results We Generate
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 tracking-[-0.03em] mb-5"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Numbers that{" "}
            <span style={{ color: "#6EADD4" }}>speak for themselves</span>
          </h2>
          <p className="text-lg text-gray-500 leading-[1.7]">
            These are the real outcomes our clients see after implementing AI systems with Touch AI.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 text-center"
              style={{
                background: "rgba(255,255,255,0.95)",
                boxShadow:
                  "0 4px 6px rgba(110,173,212,0.06), 0 10px 30px rgba(110,173,212,0.09), 0 1px 2px rgba(0,0,0,0.04)",
                border: "1px solid rgba(110,173,212,0.12)",
              }}
            >
              <div
                className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-1"
                style={{ fontFamily: "'Sora', sans-serif", color: "#6EADD4" }}
              >
                {stat.value}
                {stat.unit && (
                  <span className="text-2xl md:text-3xl text-brand-300 ml-0.5">{stat.unit}</span>
                )}
              </div>
              <div
                className="text-sm font-bold text-gray-900 mb-2"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                {stat.label}
              </div>
              <p className="text-xs text-gray-400 leading-[1.6]">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Outcomes grid */}
        <div
          className="rounded-3xl p-8 md:p-10"
          style={{
            background: "linear-gradient(135deg, rgba(110,173,212,0.06) 0%, rgba(74,142,187,0.04) 100%)",
            border: "1px solid rgba(110,173,212,0.14)",
          }}
        >
          <h3
            className="text-xl font-bold text-gray-900 mb-8 tracking-[-0.02em]"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            What we automate for you
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {outcomes.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-xl p-4"
                style={{
                  background: "rgba(255,255,255,0.7)",
                  border: "1px solid rgba(110,173,212,0.10)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(110,173,212,0.10)",
                    border: "1px solid rgba(110,173,212,0.18)",
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <div
                    className="text-sm font-bold text-gray-900 mb-1"
                    style={{ fontFamily: "'Sora', sans-serif" }}
                  >
                    {item.title}
                  </div>
                  <p className="text-xs text-gray-500 leading-[1.6]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
