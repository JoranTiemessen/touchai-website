const caseStudies = [
  {
    industry: "E-commerce",
    client: "Online Retail Brand",
    challenge:
      "Their support team was spending 6+ hours a day answering the same repetitive questions. Response times were slow and staff were burning out.",
    result: "80% of support handled automatically",
    resultDetail: "using a custom AI assistant that resolves FAQs, tracks orders, and escalates complex issues instantly.",
    metrics: [
      { value: "80%", label: "Queries automated" },
      { value: "6hrs", label: "Saved per day" },
      { value: "<2min", label: "Avg. response time" },
    ],
  },
  {
    industry: "B2B Services",
    client: "Consulting Firm",
    challenge:
      "Their sales team was spending hours per week on manual prospect research and outreach. Pipeline growth had stalled and follow-ups were falling through the cracks.",
    result: "3× more qualified leads per month",
    resultDetail: "using an AI outbound system that researches prospects, sends personalised outreach, and books meetings automatically.",
    metrics: [
      { value: "3×", label: "More qualified leads" },
      { value: "120+", label: "Hours saved/month" },
      { value: "4.2×", label: "Pipeline ROI" },
    ],
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="relative py-24 md:py-32 overflow-hidden" style={{ background: "rgba(250,252,255,0.95)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold tracking-wider uppercase mb-5"
            style={{
              background: "rgba(110,173,212,0.06)",
              borderColor: "rgba(110,173,212,0.25)",
              color: "#6EADD4",
            }}
          >
            Case Studies
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 tracking-[-0.03em] mb-4"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Real results from{" "}
            <span style={{ color: "#6EADD4" }}>real businesses</span>
          </h2>
          <p className="text-lg text-gray-500 leading-[1.7]">
            These are the outcomes clients see after deploying AI systems with Touch AI.
          </p>
        </div>

        {/* Case study cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {caseStudies.map((cs) => (
            <div
              key={cs.client}
              className="rounded-2xl overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.95)",
                boxShadow: "0 4px 6px rgba(110,173,212,0.06), 0 12px 40px rgba(110,173,212,0.09), 0 1px 2px rgba(0,0,0,0.04)",
                border: "1px solid rgba(110,173,212,0.12)",
              }}
            >
              <div className="p-7 md:p-8">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <div className="text-[11px] font-semibold tracking-wider uppercase" style={{ color: "#6EADD4" }}>{cs.industry}</div>
                    <div className="text-sm font-semibold text-gray-900 mt-0.5">{cs.client}</div>
                  </div>
                  <span className="text-[11px] font-medium text-gray-400 bg-gray-50 px-2.5 py-1 rounded-md border border-gray-100">
                    Real case
                  </span>
                </div>

                <div className="mb-5">
                  <div className="text-[11px] font-semibold tracking-wider uppercase text-gray-400 mb-1.5">The challenge</div>
                  <p className="text-sm text-gray-600 leading-relaxed">{cs.challenge}</p>
                </div>

                <div
                  className="rounded-xl p-5 mb-6"
                  style={{
                    background: "rgba(110,173,212,0.06)",
                    border: "1px solid rgba(110,173,212,0.14)",
                  }}
                >
                  <div className="text-[11px] font-semibold tracking-wider uppercase mb-1" style={{ color: "#6EADD4" }}>Result</div>
                  <div
                    className="text-lg font-bold text-gray-900 mb-1 tracking-[-0.01em]"
                    style={{ fontFamily: "'Sora', sans-serif" }}
                  >
                    {cs.result}
                  </div>
                  <p className="text-[13px] text-gray-500 leading-relaxed">{cs.resultDetail}</p>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {cs.metrics.map((metric) => (
                    <div key={metric.label} className="text-center">
                      <div
                        className="text-xl font-bold tracking-tight"
                        style={{ color: "#4A8EBB", fontFamily: "'Sora', sans-serif" }}
                      >
                        {metric.value}
                      </div>
                      <div className="text-[11px] text-gray-400 mt-0.5">{metric.label}</div>
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
