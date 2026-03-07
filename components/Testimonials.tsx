const testimonials = [
  {
    quote:
      "Touch AI completely transformed how we handle our operations. What used to take our team 3 days now runs automatically overnight. The ROI was visible within the first week.",
    name: "Sarah M.",
    role: "COO",
    avatar: "SM",
    rating: 5,
  },
  {
    quote:
      "Our lead pipeline exploded after implementing their AI outreach system. We went from 20 qualified leads per month to over 80. The system finds better prospects than we ever could manually.",
    name: "James R.",
    role: "VP of Sales",
    avatar: "JR",
    rating: 5,
  },
  {
    quote:
      "The AI assistant handles 80% of our customer support tickets. Response times dropped from hours to seconds. Our customers are happier and our support team can focus on complex issues.",
    name: "Priya K.",
    role: "Founder",
    avatar: "PK",
    rating: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 1l1.76 3.57L14 5.24l-3 2.92.71 4.13L8 10.19l-3.71 2.1.71-4.13-3-2.92 4.24-.67L8 1z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #f8fbfe 0%, #f0f8fd 50%, #f8fbfe 100%)",
      }}
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 50%, rgba(110,173,212,0.06) 0%, transparent 60%), radial-gradient(circle at 70% 50%, rgba(110,173,212,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-brand-200 text-brand-600 text-xs font-semibold tracking-wider uppercase mb-5 shadow-brand-sm">
            Client Stories
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 tracking-[-0.03em] mb-5"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            What Our Clients{" "}
            <span style={{ color: "#6EADD4" }}>Say</span>
          </h2>
          <p className="text-lg text-gray-500 leading-[1.7]">
            Don&apos;t take our word for it. Hear from businesses already running on AI.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="card-floating rounded-2xl p-7 flex flex-col gap-5 hover:shadow-brand-xl transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Quote mark */}
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-brand-400 flex-shrink-0"
                style={{ background: "rgba(110,173,212,0.1)" }}
              >
                <svg viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                  <path d="M3 7c0-2.2 1.8-4 4-4V1C3.13 1 1 3.13 1 7v6h6V7H3zm9 0c0-2.2 1.8-4 4-4V1c-3.87 0-6 2.13-6 6v6h6V7h-4z" />
                </svg>
              </div>

              {/* Stars */}
              <StarRating count={t.rating} />

              {/* Quote */}
              <p className="text-gray-600 text-sm leading-[1.75] flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-brand-100">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #6EADD4, #4A8EBB)" }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
