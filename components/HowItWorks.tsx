const steps = [
  {
    number: "01",
    title: "Free Strategy Call",
    description:
      "We start with a focused 30-minute call to understand your business, identify the highest-impact automation opportunities, and map out exactly what we'd build.",
  },
  {
    number: "02",
    title: "We Build Your System",
    description:
      "Our team designs and deploys your custom AI system, integrating it directly into your existing tools and workflows. You stay focused on your business while we handle the build.",
  },
  {
    number: "03",
    title: "Results From Day One",
    description:
      "Once live, your AI system runs 24/7. We monitor performance, refine where needed, and report back with clear metrics so you always know exactly what it's doing for you.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 md:py-32 overflow-hidden" style={{ background: "rgba(255,255,255,0.94)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold tracking-wider uppercase mb-5"
            style={{
              background: "rgba(110,173,212,0.06)",
              borderColor: "rgba(110,173,212,0.25)",
              color: "#6EADD4",
            }}
          >
            How It Works
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 tracking-[-0.03em] mb-4"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            From first call to{" "}
            <span style={{ color: "#6EADD4" }}>live in weeks</span>
          </h2>
          <p className="text-lg text-gray-500 leading-[1.7]">
            A simple, proven process that gets your AI system running fast, with zero disruption to your team.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step) => (
            <div key={step.title} className="relative">
              <div
                className="text-5xl font-bold tracking-[-0.03em] mb-4 select-none"
                style={{ color: "rgba(110,173,212,0.25)", fontFamily: "'Sora', sans-serif" }}
              >
                {step.number}
              </div>
              <h3
                className="text-xl font-bold text-gray-900 mb-3 tracking-[-0.02em]"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                {step.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 pt-10 border-t border-gray-100">
          <a
            href="https://calendar.app.google/7rRamUEnapLFZ2PS9"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-brand-400 text-white font-semibold text-[15px] hover:bg-brand-500 active:scale-[0.98] transition-all duration-150"
            style={{ boxShadow: "0 4px 14px rgba(110,173,212,0.4)" }}
          >
            Book a free strategy call
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
