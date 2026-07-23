const steps = [
  {
    number: "01",
    when: "Week 1",
    title: "Bedrijfsscan",
    description:
      "Eén sessie van 2 uur. Binnen een week zwart op wit waar de uren in jouw bedrijf weglekken en wat elk lek per maand kost. Dat is de nulmeting, daar rekenen we ons straks op af.",
  },
  {
    number: "02",
    when: "Week 2",
    title: "Agent-blauwdruk",
    description:
      "Jouw AI-team op één pagina: welke agent welk lek oplost, hoeveel uur dat scheelt en welke systemen hij gebruikt. Jij weet exact wat er gebouwd wordt.",
  },
  {
    number: "03",
    when: "Eerste agent live in week 3",
    title: "Bouw en koppeling",
    description:
      "We starten met je grootste tijdvreter, gekoppeld op je bestaande systemen. Niks migreren. Daarna rollen we agent voor agent uit.",
  },
  {
    number: "04",
    when: "Doorlopend",
    title: "Team-adoptie",
    description:
      "We trainen je mensen tot elke agent dagelijks gebruikt wordt, want een ongebruikte agent bespaart nul uur. Jouw team is er max 2 uur per week mee bezig.",
  },
  {
    number: "05",
    when: "Elke maand",
    title: "Meting en uitbreiding",
    description:
      "Elke maand een rapport met bespaarde uren per agent, afgezet tegen de nulmeting. En we breiden je AI-team stap voor stap verder uit.",
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
            De AIOS-methode
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 tracking-[-0.03em] mb-4"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Zo pakken we het{" "}
            <span style={{ color: "#6EADD4" }}>aan</span>
          </h2>
          <p className="text-lg text-gray-500 leading-[1.7]">
            Eerst maken we je bedrijf AI-proof: we analyseren je processen en maken ze klaar. Daarna zetten we AI-agents per afdeling neer. Van kick-off naar resultaat in 60 dagen, met een meetbaar doel: 40 uur per week terug.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
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
            Doe de gratis Bedrijfsscan
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
