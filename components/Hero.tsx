"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden mesh-bg pt-20">
      {/* Background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large circle top-left */}
        <div
          className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(110,173,212,0.35) 0%, transparent 70%)",
          }}
        />
        {/* Circle bottom-right */}
        <div
          className="absolute -bottom-48 -right-32 w-[700px] h-[700px] rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(circle, rgba(110,173,212,0.3) 0%, transparent 70%)",
          }}
        />
        {/* Right: floating grid dots */}
        <svg
          className="absolute top-1/4 right-0 opacity-[0.08] w-64 h-64 text-brand-300"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {Array.from({ length: 8 }).map((_, row) =>
            Array.from({ length: 8 }).map((_, col) => (
              <circle
                key={`${row}-${col}`}
                cx={col * 26 + 8}
                cy={row * 26 + 8}
                r="2"
                fill="rgba(110,173,212,0.35)"
              />
            ))
          )}
        </svg>

        {/* Left: mirrored dot grid */}
        <svg
          className="absolute bottom-1/3 left-0 opacity-[0.07] w-56 h-56 hidden md:block"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {Array.from({ length: 8 }).map((_, row) =>
            Array.from({ length: 8 }).map((_, col) => (
              <circle
                key={`l-${row}-${col}`}
                cx={col * 26 + 8}
                cy={row * 26 + 8}
                r="2"
                fill="rgba(110,173,212,0.35)"
              />
            ))
          )}
        </svg>

        {/* Left: hexagonal AI network — complements the circular one on the right */}
        <div
          className="absolute top-1/4 -left-10 md:-left-16 lg:-left-20 w-64 h-64 md:w-80 md:h-80 animate-float hidden md:block opacity-70"
          style={{ animationDelay: "1.3s" }}
        >
          <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Outer hexagon ring */}
            <path d="M200 20 L356 110 L356 290 L200 380 L44 290 L44 110 Z"
              stroke="rgba(110,173,212,0.15)" strokeWidth="1.5" />
            {/* Inner hexagon — dashed, mirrors the dashed inner circle on the right */}
            <path d="M200 68 L314 133 L314 267 L200 332 L86 267 L86 133 Z"
              stroke="rgba(110,173,212,0.10)" strokeWidth="1" strokeDasharray="7 5" />
            {/* Center node glow */}
            <circle cx="200" cy="200" r="60" fill="rgba(110,173,212,0.07)" stroke="rgba(110,173,212,0.28)" strokeWidth="1.5" />
            {/* Radial lines center → outer vertices */}
            <path d="M200 200 L200 20 M200 200 L356 110 M200 200 L356 290 M200 200 L200 380 M200 200 L44 290 M200 200 L44 110"
              stroke="rgba(110,173,212,0.18)" strokeWidth="1.5" strokeLinecap="round" />
            {/* Selective cross-connections between non-adjacent vertices */}
            <path d="M200 20 L44 290 M356 110 L44 290 M356 290 L44 110"
              stroke="rgba(110,173,212,0.08)" strokeWidth="1.5" strokeLinecap="round" />
            {/* Outer vertex nodes */}
            <circle cx="200" cy="20"  r="5" fill="rgba(110,173,212,0.50)" />
            <circle cx="356" cy="110" r="4" fill="rgba(110,173,212,0.40)" />
            <circle cx="356" cy="290" r="5" fill="rgba(110,173,212,0.50)" />
            <circle cx="200" cy="380" r="5" fill="rgba(110,173,212,0.50)" />
            <circle cx="44"  cy="290" r="4" fill="rgba(110,173,212,0.40)" />
            <circle cx="44"  cy="110" r="4" fill="rgba(110,173,212,0.40)" />
            {/* Centre node — same style as right graphic */}
            <circle cx="200" cy="200" r="12" fill="rgba(110,173,212,0.60)" />
            <circle cx="200" cy="200" r="6"  fill="rgba(110,173,212,0.90)" />
          </svg>
        </div>

        {/* Abstract tech shapes — right side circular graphic */}
        <div
          className="absolute top-1/3 right-8 md:right-16 lg:right-24 w-72 h-72 md:w-96 md:h-96 animate-float opacity-80"
          style={{ animationDelay: "0s" }}
        >
          <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Outer ring */}
            <circle cx="200" cy="200" r="190" stroke="rgba(110,173,212,0.15)" strokeWidth="1.5" />
            <circle cx="200" cy="200" r="150" stroke="rgba(110,173,212,0.10)" strokeWidth="1" strokeDasharray="8 6" />
            {/* Center brain/circuit icon */}
            <circle cx="200" cy="200" r="60" fill="rgba(110,173,212,0.08)" stroke="rgba(110,173,212,0.3)" strokeWidth="1.5" />
            {/* Circuit lines */}
            <path d="M200 140 L200 80 M200 260 L200 320 M140 200 L80 200 M260 200 L320 200" stroke="rgba(110,173,212,0.2)" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M157 157 L113 113 M243 157 L287 113 M157 243 L113 287 M243 243 L287 287" stroke="rgba(110,173,212,0.15)" strokeWidth="1.5" strokeLinecap="round" />
            {/* Nodes */}
            <circle cx="200" cy="80" r="5" fill="rgba(110,173,212,0.5)" />
            <circle cx="200" cy="320" r="5" fill="rgba(110,173,212,0.5)" />
            <circle cx="80" cy="200" r="5" fill="rgba(110,173,212,0.5)" />
            <circle cx="320" cy="200" r="5" fill="rgba(110,173,212,0.5)" />
            <circle cx="113" cy="113" r="4" fill="rgba(110,173,212,0.4)" />
            <circle cx="287" cy="113" r="4" fill="rgba(110,173,212,0.4)" />
            <circle cx="113" cy="287" r="4" fill="rgba(110,173,212,0.4)" />
            <circle cx="287" cy="287" r="4" fill="rgba(110,173,212,0.4)" />
            {/* Inner node */}
            <circle cx="200" cy="200" r="12" fill="rgba(110,173,212,0.6)" />
            <circle cx="200" cy="200" r="6" fill="rgba(110,173,212,0.9)" />
          </svg>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-600 text-xs font-semibold tracking-wider uppercase mb-8 animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
            AI Automation Agency
          </div>

          {/* Headline */}
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 leading-[1.06] tracking-[-0.03em] mb-6 animate-fade-up"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Automate Your
            <br />
            <span
              className="relative inline-block"
              style={{
                background: "linear-gradient(135deg, #6EADD4 0%, #4A8EBB 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Business With AI
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-lg md:text-xl text-gray-500 leading-[1.7] mb-10 max-w-xl animate-fade-up delay-100"
          >
            We build AI systems that automate workflows, generate leads, and
            save your team <strong className="font-semibold text-gray-700">hundreds of hours</strong> every
            month.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-200">
            <a
              href="https://calendar.app.google/7rRamUEnapLFZ2PS9"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-brand-400 text-white font-semibold text-base hover:bg-brand-500 active:scale-[0.98] transition-all duration-200 group"
              style={{ boxShadow: "0 6px 20px rgba(110,173,212,0.45), 0 2px 8px rgba(0,0,0,0.08)" }}
            >
              Book Your Free AI Audit
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full border border-brand-200 bg-white text-gray-700 font-semibold text-base hover:border-brand-400 hover:text-brand-500 hover:bg-brand-50 active:scale-[0.98] transition-all duration-200"
            >
              See How It Works
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                <path d="M8 3v10M3 8l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Social proof mini stats */}
          <div className="mt-14 flex flex-wrap gap-x-10 gap-y-6 animate-fade-up delay-300">
            {[
              { value: "120+", label: "Hours saved / month" },
              { value: "3×", label: "Lead increase average" },
              { value: "24/7", label: "AI systems running" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-2xl font-bold text-brand-400 tracking-tight"
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
