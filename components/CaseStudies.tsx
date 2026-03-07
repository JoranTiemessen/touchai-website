const caseStudies = [
  {
    industry: "Operations",
    client: "E-commerce Brand",
    challenge:
      "Spent 20+ hours per week on manual order processing, inventory updates, and supplier communication.",
    result: "Saved 120 hours per month",
    resultDetail: "using AI workflow automation across order management, inventory sync, and supplier emails.",
    metrics: [
      { value: "120h", label: "Saved / month" },
      { value: "98%", label: "Error reduction" },
      { value: "3 weeks", label: "To deploy" },
    ],
    gradient: "from-brand-400/10 to-brand-300/5",
    iconBg: "rgba(110,173,212,0.12)",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-5 h-5">
        <path d="M6 8h20l-2 14H8L6 8z" stroke="#6EADD4" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="12" cy="26" r="2" stroke="#6EADD4" strokeWidth="1.5" />
        <circle cx="22" cy="26" r="2" stroke="#6EADD4" strokeWidth="1.5" />
        <path d="M4 4h3l1 4" stroke="#6EADD4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    industry: "Sales",
    client: "B2B SaaS Company",
    challenge:
      "Sales team spent 60% of their time on manual prospecting with inconsistent outreach quality.",
    result: "Increased qualified leads by 3×",
    resultDetail: "using an AI outreach system that finds, enriches, and contacts ideal-fit prospects automatically.",
    metrics: [
      { value: "3×", label: "More leads" },
      { value: "60%", label: "Less prospecting time" },
      { value: "4.2×", label: "Pipeline growth" },
    ],
    gradient: "from-brand-300/10 to-brand-200/5",
    iconBg: "rgba(110,173,212,0.12)",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-5 h-5">
        <path d="M4 28L14 18M14 18l4 4 8-14" stroke="#6EADD4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="26" cy="8" r="3" stroke="#6EADD4" strokeWidth="1.5" />
        <circle cx="14" cy="18" r="2" fill="#6EADD4" />
      </svg>
    ),
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="relative py-24 md:py-32 overflow-hidden" style={{ background: "rgba(255,255,255,0.88)" }}>
      {/* Accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(110,173,212,0.3), transparent)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-600 text-xs font-semibold tracking-wider uppercase mb-5">
            Results
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 tracking-[-0.03em] mb-5"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Real Outcomes for{" "}
            <span style={{ color: "#6EADD4" }}>Real Businesses</span>
          </h2>
          <p className="text-lg text-gray-500 leading-[1.7]">
            Every engagement is measured by business impact, not just delivery.
          </p>
        </div>

        {/* Case study cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((cs) => (
            <div
              key={cs.client}
              className="card-elevated rounded-2xl overflow-hidden hover:shadow-brand-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Top gradient strip */}
              <div
                className="h-1.5 w-full"
                style={{ background: "linear-gradient(90deg, #6EADD4, #9FCAE3)" }}
              />

              <div className="p-8 md:p-10">
                {/* Industry tag + client */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center"
                      style={{ background: cs.iconBg, border: "1px solid rgba(110,173,212,0.2)" }}
                    >
                      {cs.icon}
                    </div>
                    <div>
                      <div className="text-xs font-semibold tracking-wider uppercase text-brand-400">{cs.industry}</div>
                      <div className="text-sm font-semibold text-gray-900">{cs.client}</div>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-gray-400 bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
                    Case Study
                  </span>
                </div>

                {/* Challenge */}
                <div className="mb-6">
                  <div className="text-xs font-bold tracking-wider uppercase text-gray-400 mb-2">Challenge</div>
                  <p className="text-gray-600 text-sm leading-[1.7]">{cs.challenge}</p>
                </div>

                {/* Result highlight */}
                <div
                  className="rounded-xl p-5 mb-6"
                  style={{
                    background: "linear-gradient(135deg, rgba(110,173,212,0.08) 0%, rgba(110,173,212,0.03) 100%)",
                    border: "1px solid rgba(110,173,212,0.15)",
                  }}
                >
                  <div className="text-xs font-bold tracking-wider uppercase text-brand-500 mb-1">Result</div>
                  <div
                    className="text-xl font-bold text-gray-900 mb-1 tracking-[-0.02em]"
                    style={{ fontFamily: "'Sora', sans-serif" }}
                  >
                    {cs.result}
                  </div>
                  <p className="text-sm text-gray-500 leading-[1.6]">{cs.resultDetail}</p>
                </div>

                {/* Metrics row */}
                <div className="grid grid-cols-3 gap-4">
                  {cs.metrics.map((metric) => (
                    <div key={metric.label} className="text-center">
                      <div
                        className="text-xl font-bold text-brand-400 tracking-tight"
                        style={{ fontFamily: "'Sora', sans-serif" }}
                      >
                        {metric.value}
                      </div>
                      <div className="text-xs text-gray-400 mt-0.5">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
