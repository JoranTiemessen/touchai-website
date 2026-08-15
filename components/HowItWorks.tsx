const steps = [
  {
    number: "01",
    when: "Dag 0 · 45 minuten",
    title: "Het gesprek",
    description:
      "Wij vragen door tot er vier tot zes processen op tafel liggen die eruit kunnen. In jouw woorden. Die lijst is meteen de opdracht: je weet precies wat je koopt voordat we beginnen.",
  },
  {
    number: "02",
    when: "Week 1 · 90 minuten",
    title: "Toegang en doorloop",
    description:
      "Eén sessie van anderhalf uur, via een videocall met scherm delen. We regelen samen de toegang en lopen je proces door. De voorbeelden die we nodig hebben halen we daarna zelf uit je systeem.",
  },
  {
    number: "03",
    when: "Dag 10",
    title: "De eerste agent draait",
    description:
      "Op je eigen echte werk, niet op een demo. Zo weet je binnen twee weken of dit werkt, in plaats van na twee maanden.",
  },
  {
    number: "04",
    when: "Dag 60 en daarna",
    title: "De rest draait, en blijft draaien",
    description:
      "De overige agents, aan elkaar geknoopt, met monitoring eronder. Koppelingen breken en systemen veranderen: wij zien het en lossen het op, voordat jij het merkt.",
  },
];

const CAL_URL = "https://calendar.app.google/7rRamUEnapLFZ2PS9";

export default function HowItWorks() {
  return (
    <section id="aanpak" className="relative py-24 md:py-32 overflow-hidden" style={{ background: "rgba(255,255,255,0.94)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold tracking-wider uppercase mb-5"
            style={{ background: "rgba(110,173,212,0.06)", borderColor: "rgba(110,173,212,0.25)", color: "#6EADD4" }}
          >
            Zo werkt het
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 tracking-[-0.03em] mb-4"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Zo pakken we het{" "}
            <span style={{ color: "#6EADD4" }}>aan</span>
          </h2>
          <p className="text-lg text-gray-500 leading-[1.7]">
            Wij komen niet met een mening over jouw bedrijf, wij vragen door tot duidelijk is welk werk eruit kan. Daarna bouwen we het, in je eigen accounts en op de systemen die je al gebruikt.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
          {steps.map((step) => (
            <div key={step.title} className="relative">
              <div
                className="text-5xl font-bold tracking-[-0.03em] mb-4 select-none"
                style={{ color: "rgba(110,173,212,0.25)", fontFamily: "'Sora', sans-serif" }}
              >
                {step.number}
              </div>
              <div
                className="inline-block text-[11px] font-semibold tracking-wider uppercase mb-2 px-2.5 py-1 rounded-full"
                style={{ background: "rgba(110,173,212,0.08)", color: "#4A8EBB", border: "1px solid rgba(110,173,212,0.18)" }}
              >
                {step.when}
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
            href={CAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-brand-400 text-white font-semibold text-[15px] hover:bg-brand-500 active:scale-[0.98] transition-all duration-150"
            style={{ boxShadow: "0 4px 14px rgba(110,173,212,0.4)" }}
          >
            Plan het gesprek
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
