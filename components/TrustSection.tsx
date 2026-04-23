export default function TrustSection() {
  const companies = [
    { name: "Bookmatch", logo: "/logos/bookmatch.png" },
    { name: "Savvy Moves", logo: "/logos/savvy-moves.svg" },
    { name: "Smart Promo Marketing", logo: "/logos/smartpromo.png" },
    { name: "RS Luxury Services", logo: "/logos/rsluxury.png" },
  ];

  const loop = [...companies, ...companies];

  return (
    <section
      className="relative py-14 border-y border-brand-100 overflow-hidden"
      style={{ background: "rgba(255,255,255,0.88)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold tracking-[0.18em] uppercase text-gray-400 mb-10">
          Trusted by innovative businesses
        </p>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex w-max items-center gap-16 animate-marquee">
            {loop.map((c, i) => (
              <div
                key={`${c.name}-${i}`}
                className="flex items-center gap-3 shrink-0"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.logo}
                  alt={c.name}
                  className="h-10 w-auto max-w-[140px] object-contain opacity-90 hover:opacity-100 transition duration-300"
                />
                <span
                  className="text-sm font-semibold tracking-wide text-gray-500"
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  {c.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
