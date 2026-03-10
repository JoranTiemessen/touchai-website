const stats = [
  { value: "80", unit: "hrs/mo", label: "Hours saved per client" },
  { value: "3×", unit: "", label: "More qualified leads" },
  { value: "<2", unit: "min", label: "Lead response time" },
  { value: "80%", unit: "", label: "Queries automated" },
];

const outcomes = [
  { title: "Onboarding automation", description: "New clients are onboarded automatically with zero manual steps." },
  { title: "Customer service agents", description: "AI handles support 24/7, escalating only when a human is truly needed." },
  { title: "Proposal & offer agents", description: "Generate tailored proposals in seconds based on client input and CRM data." },
  { title: "Automated follow-ups", description: "No lead goes cold. AI follows up at the right time with the right message." },
  { title: "Reporting & insights", description: "Weekly automated reports delivered to your inbox with zero manual effort." },
  { title: "Lead enrichment pipelines", description: "Automatically enrich prospect data from multiple sources before any outreach." },
];

export default function Results() {
  return (
    <section id="results" className="relative py-24 md:py-32" style={{ background: "rgba(255,255,255,0.94)" }}>
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 70% at 50% 0%, rgba(110,173,212,0.07) 0%, transparent 70%)",
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
                boxShadow: "0 4px 6px rgba(110,173,212,0.06), 0 10px 30px rgba(110,173,212,0.09), 0 1px 2px rgba(0,0,0,0.04)",
                border: "1px solid rgba(110,173,212,0.12)",
              }}
            >
              <div
                className="text-4xl md:text-5xl font-bold tracking-[-0.03em] leading-none"
                style={{ fontFamily: "'Sora', sans-serif", color: "#4A8EBB" }}
              >
                {stat.value}
              </div>
              {stat.unit && (
                <div className="text-base font-bold mt-0.5 mb-1" style={{ color: "#4A8EBB", fontFamily: "'Sora', sans-serif" }}>{stat.unit}</div>
              )}
              {!stat.unit && <div className="mb-2" />}
              <div
                className="text-sm font-semibold text-gray-600"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                {stat.label}
              </div>
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
                  className="w-2 h-2 rounded-full flex-shrink-0 mt-2"
                  style={{ background: "#6EADD4" }}
                />
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
