const agents = [
  {
    id: "inbound",
    label: "AI Inbound Agents",
    tagline: "Never miss a lead again",
    description:
      "AI agents that handle incoming inquiries, qualify leads in real time, and route conversations to the right person, 24/7 without human intervention.",
    useCases: ["Instant lead qualification", "Automated support replies", "Appointment booking", "FAQ handling"],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-7 h-7">
        <circle cx="24" cy="24" r="16" fill="rgba(110,173,212,0.1)" stroke="#6EADD4" strokeWidth="1.5" />
        <path d="M16 24h16M24 16v16" stroke="#6EADD4" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="24" cy="24" r="4" fill="#6EADD4" opacity="0.3" />
        <path d="M32 16l-3 3M16 32l3-3" stroke="#6EADD4" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
    color: "#6EADD4",
  },
  {
    id: "outbound",
    label: "AI Outbound Agents",
    tagline: "Your sales team that never sleeps",
    description:
      "Automated agents that find prospects, send personalised outreach, follow up at the right moment, and book meetings directly into your calendar.",
    useCases: ["Prospect research & enrichment", "Personalised cold outreach", "Automated follow-up sequences", "Meeting scheduling"],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-7 h-7">
        <path d="M10 24h28M30 16l8 8-8 8" stroke="#6EADD4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="14" cy="24" r="4" fill="rgba(110,173,212,0.15)" stroke="#6EADD4" strokeWidth="1.2" />
        <path d="M38 12l-2 2M38 36l-2-2" stroke="#6EADD4" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
    color: "#4A8EBB",
  },
  {
    id: "content",
    label: "AI Content Agents",
    tagline: "Content at scale, without the effort",
    description:
      "Agents that auto-generate proposals, social posts, reports, and newsletters, on-brand and ready to publish, triggered by your existing workflows.",
    useCases: ["Proposal & offer generation", "Social media automation", "Weekly report drafting", "Email campaign writing"],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-7 h-7">
        <rect x="8" y="10" width="32" height="28" rx="4" fill="rgba(110,173,212,0.1)" stroke="#6EADD4" strokeWidth="1.5" />
        <path d="M14 18h20M14 24h14M14 30h10" stroke="#6EADD4" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="36" cy="30" r="5" fill="rgba(110,173,212,0.2)" stroke="#6EADD4" strokeWidth="1.2" />
        <path d="M34 30l1.5 1.5L38 28" stroke="#6EADD4" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    color: "#6EADD4",
  },
  {
    id: "custom",
    label: "Custom AI Workflows",
    tagline: "Built exactly for your business",
    description:
      "End-to-end automation pipelines tailored to your specific processes: from data extraction and enrichment to multi-step decision flows and system integrations.",
    useCases: ["CRM & tool integrations", "Data pipeline automation", "Multi-step decision logic", "Internal process automation"],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-7 h-7">
        <rect x="6" y="6" width="12" height="12" rx="2.5" fill="rgba(110,173,212,0.15)" stroke="#6EADD4" strokeWidth="1.5" />
        <rect x="30" y="6" width="12" height="12" rx="2.5" fill="rgba(110,173,212,0.15)" stroke="#6EADD4" strokeWidth="1.5" />
        <rect x="18" y="30" width="12" height="12" rx="2.5" fill="rgba(110,173,212,0.15)" stroke="#6EADD4" strokeWidth="1.5" />
        <path d="M18 12h12M12 18v6a6 6 0 006 6M36 18v6a6 6 0 01-6 6" stroke="#6EADD4" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    color: "#4A8EBB",
  },
];

export default function AgentTypes() {
  return (
    <section
      id="agents"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, rgba(240,248,255,0.6) 0%, rgba(255,255,255,0.95) 100%)" }}
    >
      {/* Background accents */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 0% 50%, rgba(110,173,212,0.07) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 100% 50%, rgba(74,142,187,0.05) 0%, transparent 60%)",
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
            Agent Types
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 tracking-[-0.03em] mb-5"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            The right agent{" "}
            <span style={{ color: "#6EADD4" }}>for every job</span>
          </h2>
          <p className="text-lg text-gray-500 leading-[1.7]">
            We deploy specialised AI agents that handle specific parts of your business, so each one is optimised for exactly what it needs to do.
          </p>
        </div>

        {/* Agent grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {agents.map((agent) => (
            <div
              key={agent.id}
              className="group relative rounded-2xl p-8 overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.95)",
                boxShadow:
                  "0 4px 6px rgba(110,173,212,0.06), 0 12px 40px rgba(110,173,212,0.09), 0 1px 2px rgba(0,0,0,0.04)",
                border: "1px solid rgba(110,173,212,0.12)",
              }}
            >
              {/* Top bar accent */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{
                  background: `linear-gradient(90deg, transparent, ${agent.color}80, transparent)`,
                }}
              />

              {/* Icon + label */}
              <div className="flex items-start gap-5 mb-5">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, rgba(110,173,212,0.12) 0%, rgba(110,173,212,0.05) 100%)",
                    border: "1px solid rgba(110,173,212,0.18)",
                  }}
                >
                  {agent.icon}
                </div>
                <div>
                  <h3
                    className="text-xl font-bold text-gray-900 tracking-[-0.02em]"
                    style={{ fontFamily: "'Sora', sans-serif" }}
                  >
                    {agent.label}
                  </h3>
                  <p className="text-sm font-semibold mt-0.5" style={{ color: agent.color }}>
                    {agent.tagline}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-500 leading-[1.75] text-sm mb-6">{agent.description}</p>

              {/* Use cases */}
              <div className="flex flex-wrap gap-2">
                {agent.useCases.map((uc) => (
                  <span
                    key={uc}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                    style={{
                      background: "rgba(110,173,212,0.08)",
                      color: "#4A8EBB",
                      border: "1px solid rgba(110,173,212,0.16)",
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: agent.color }}
                    />
                    {uc}
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
