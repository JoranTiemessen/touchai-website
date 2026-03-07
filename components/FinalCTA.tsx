export default function FinalCTA() {
  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #6EADD4 0%, #4A8EBB 50%, #3474A0 100%)",
        }}
      />

      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Radial glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 20% 50%, rgba(255,255,255,0.12) 0%, transparent 60%), radial-gradient(ellipse 40% 40% at 80% 50%, rgba(255,255,255,0.08) 0%, transparent 60%)",
        }}
      />

      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full border border-white/10 -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full border border-white/10 translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/25 text-white/90 text-xs font-semibold tracking-wider uppercase mb-8 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          Free, No Obligation
        </div>

        {/* Headline */}
        <h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-[-0.03em] mb-6 leading-[1.06]"
          style={{ fontFamily: "'Sora', sans-serif" }}
        >
          Start Automating Your
          <br />
          Business Today
        </h2>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-white/75 leading-[1.7] mb-10 max-w-2xl mx-auto">
          Book a free AI automation audit and discover exactly how AI can
          transform your operations, no commitment required.
        </p>

        {/* What you get */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          {[
            "Identify top automation opportunities",
            "Custom AI roadmap for your business",
            "Clear ROI projection",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-white/80">
              <svg className="w-4 h-4 flex-shrink-0 text-white" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="7" fill="rgba(255,255,255,0.2)" />
                <path d="M5 8l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {item}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="https://calendar.app.google/7rRamUEnapLFZ2PS9"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-brand-500 font-bold text-base hover:bg-brand-50 active:scale-[0.98] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-3"
          style={{
            boxShadow: "0 8px 32px rgba(0,0,0,0.2), 0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          Book Your Free AI Audit
          <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
            <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>

        <p className="mt-5 text-sm text-white/50">
          Typical response within 24 hours. No spam, ever.
        </p>
      </div>
    </section>
  );
}
