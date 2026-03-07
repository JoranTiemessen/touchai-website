const steps = [
  {
    number: "01",
    title: "Audit",
    description:
      "We analyze your workflows and identify high-impact automation opportunities with a free, no-obligation audit.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
        <path d="M20 4C11.163 4 4 11.163 4 20s7.163 16 16 16 16-7.163 16-16S28.837 4 20 4z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20 12v8l5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="28" cy="28" r="7" fill="white" stroke="currentColor" strokeWidth="1.5" />
        <path d="M25.5 28l2 2 3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Build",
    description:
      "We develop custom AI systems tailored to your exact business processes. No generic tools, everything purpose-built.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
        <rect x="6" y="10" width="28" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M13 17l3 3-3 3M20 23h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="32" cy="12" r="5" fill="white" stroke="currentColor" strokeWidth="1.5" />
        <path d="M30 12h4M32 10v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Deploy",
    description:
      "Your AI systems go live and run 24/7, continuously optimizing and improving performance over time.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
        <path d="M20 4L8 10v12c0 7 5.333 11.333 12 14 6.667-2.667 12-7 12-14V10L20 4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M14 20l4 4 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 md:py-32 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #f8fbfe 0%, #ffffff 100%)",
      }}
    >
      {/* Background accent */}
      <div
        className="absolute bottom-0 left-0 w-[600px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 60% at 0% 100%, rgba(110,173,212,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-600 text-xs font-semibold tracking-wider uppercase mb-5">
            The Process
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 tracking-[-0.03em] mb-5"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            From Audit to{" "}
            <span style={{ color: "#6EADD4" }}>Automation</span>
          </h2>
          <p className="text-lg text-gray-500 leading-[1.7]">
            A proven three-step process designed to get your AI systems live
            fast and generating ROI immediately.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-16 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px"
            style={{
              background: "linear-gradient(90deg, rgba(110,173,212,0.3) 0%, rgba(110,173,212,0.5) 50%, rgba(110,173,212,0.3) 100%)",
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {steps.map((step, i) => (
              <div key={step.title} className="flex flex-col items-center text-center md:items-center">
                {/* Step number + icon */}
                <div className="relative mb-8">
                  {/* Outer glow */}
                  <div
                    className="absolute inset-0 rounded-full blur-xl opacity-30"
                    style={{ background: "#6EADD4" }}
                  />
                  {/* Circle */}
                  <div
                    className="relative w-16 h-16 rounded-full flex items-center justify-center text-white z-10"
                    style={{
                      background: "linear-gradient(135deg, #6EADD4 0%, #4A8EBB 100%)",
                      boxShadow: "0 4px 20px rgba(110,173,212,0.4)",
                    }}
                  >
                    {step.icon}
                  </div>
                  {/* Step number badge */}
                  <div
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white border-2 border-white"
                    style={{ background: "#4A8EBB" }}
                  >
                    {i + 1}
                  </div>
                </div>

                {/* Content */}
                <div
                  className="text-[11px] font-bold tracking-[0.16em] uppercase text-brand-400 mb-2"
                >
                  Step {step.number}
                </div>
                <h3
                  className="text-2xl font-bold text-gray-900 mb-4 tracking-[-0.02em]"
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  {step.title}
                </h3>
                <p className="text-gray-500 leading-[1.7] text-sm max-w-xs">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="https://calendar.app.google/7rRamUEnapLFZ2PS9"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-brand-400 text-white font-semibold hover:bg-brand-500 active:scale-[0.98] transition-all duration-200"
            style={{ boxShadow: "0 6px 20px rgba(110,173,212,0.35)" }}
          >
            Start With a Free Audit
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
