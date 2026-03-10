const services = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <rect x="6" y="6" width="14" height="14" rx="3" fill="rgba(110,173,212,0.15)" stroke="#6EADD4" strokeWidth="1.5" />
        <rect x="28" y="6" width="14" height="14" rx="3" fill="rgba(110,173,212,0.15)" stroke="#6EADD4" strokeWidth="1.5" />
        <rect x="6" y="28" width="14" height="14" rx="3" fill="rgba(110,173,212,0.15)" stroke="#6EADD4" strokeWidth="1.5" />
        <rect x="28" y="28" width="14" height="14" rx="3" fill="rgba(110,173,212,0.15)" stroke="#6EADD4" strokeWidth="1.5" />
        <path d="M20 13h8M13 20v8M35 20v8M20 35h8" stroke="#6EADD4" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="24" cy="24" r="3" fill="#6EADD4" />
      </svg>
    ),
    title: "AI Workflow Automation",
    description:
      "Automate repetitive business processes using AI-powered systems that work 24/7 without supervision.",
    benefit: "Eliminate manual work and reclaim 80+ hours per month",
    tag: "Most popular",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <circle cx="24" cy="16" r="8" fill="rgba(110,173,212,0.15)" stroke="#6EADD4" strokeWidth="1.5" />
        <path d="M10 38c0-7.732 6.268-14 14-14s14 6.268 14 14" stroke="#6EADD4" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="36" cy="30" r="5" fill="rgba(110,173,212,0.2)" stroke="#6EADD4" strokeWidth="1.5" />
        <path d="M36 27v3l2 2" stroke="#6EADD4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M42 24l2-2M30 24l-2-2M44 30h2M28 30h-2M42 36l2 2M30 36l-2 2" stroke="#6EADD4" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
    title: "AI Lead Generation Systems",
    description:
      "AI agents that autonomously find, qualify, and contact potential clients, filling your pipeline automatically.",
    benefit: "3× your qualified leads without extra headcount",
    tag: null,
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <rect x="6" y="10" width="36" height="28" rx="4" fill="rgba(110,173,212,0.1)" stroke="#6EADD4" strokeWidth="1.5" />
        <circle cx="24" cy="38" r="3" fill="rgba(110,173,212,0.3)" />
        <path d="M18 38h12" stroke="#6EADD4" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 18h4M14 23h8M14 28h6" stroke="#6EADD4" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="32" cy="22" r="5" fill="rgba(110,173,212,0.2)" stroke="#6EADD4" strokeWidth="1.5" />
        <path d="M30 22l1.5 1.5L34 20" stroke="#6EADD4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "AI Chatbots & Assistants",
    description:
      "AI systems that handle customer support, lead qualification, and internal tasks around the clock.",
    benefit: "Handle 80% of customer queries automatically",
    tag: null,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 overflow-hidden" style={{ background: "rgba(255,255,255,0.88)" }}>
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none opacity-40"
        style={{
          background: "radial-gradient(ellipse 60% 60% at 100% 0%, rgba(110,173,212,0.1) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-600 text-xs font-semibold tracking-wider uppercase mb-5">
            What We Build
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 tracking-[-0.03em] mb-5"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            AI Systems Built for{" "}
            <span style={{ color: "#6EADD4" }}>Real Results</span>
          </h2>
          <p className="text-lg text-gray-500 leading-[1.7]">
            Every system we build is custom-engineered around your workflows, not off-the-shelf tools.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative group card-elevated rounded-2xl p-8 hover:shadow-brand-lg transition-all duration-300 hover:-translate-y-1"
            >
              {service.tag && (
                <div className="absolute -top-3 left-8 px-3 py-1 rounded-full text-xs font-bold text-white"
                  style={{ background: "linear-gradient(90deg, #6EADD4, #4A8EBB)" }}>
                  {service.tag}
                </div>
              )}

              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                style={{
                  background: "linear-gradient(135deg, rgba(110,173,212,0.12) 0%, rgba(110,173,212,0.05) 100%)",
                  border: "1px solid rgba(110,173,212,0.2)",
                }}
              >
                {service.icon}
              </div>

              <h3
                className="text-xl font-bold text-gray-900 mb-3 tracking-[-0.02em]"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                {service.title}
              </h3>
              <p className="text-gray-500 leading-[1.7] text-sm mb-6">
                {service.description}
              </p>

              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(110,173,212,0.15)" }}>
                  <svg className="w-2.5 h-2.5" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5l2 2 4-4" stroke="#6EADD4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-xs font-semibold text-brand-500">{service.benefit}</span>
              </div>

              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(90deg, #6EADD4, #9FCAE3)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
