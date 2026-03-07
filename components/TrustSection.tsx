export default function TrustSection() {
  const companies = [
    "Acme Corp",
    "NexaTech",
    "Momentum",
    "Elevate Co.",
    "CoreScale",
    "Apex Digital",
  ];

  return (
    <section className="relative py-14 border-y border-brand-100 overflow-hidden" style={{ background: "rgba(255,255,255,0.88)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold tracking-[0.18em] uppercase text-gray-400 mb-10">
          Trusted by innovative businesses
        </p>

        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
            {companies.map((company, i) => (
              <div
                key={company}
                className="flex items-center gap-2.5 text-gray-300 hover:text-brand-300 transition-colors duration-300"
              >
                {/* Placeholder logo shape */}
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, rgba(110,173,212,0.15) 0%, rgba(110,173,212,0.06) 100%)",
                    border: "1px solid rgba(110,173,212,0.15)",
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                    <path
                      d={
                        i % 3 === 0
                          ? "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                          : i % 3 === 1
                          ? "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-6a4 4 0 100-8 4 4 0 000 8z"
                          : "M4 6h16M4 12h16M4 18h16"
                      }
                      stroke="rgba(110,173,212,0.6)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span
                  className="text-sm font-semibold tracking-wide"
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  {company}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
