import LeadForm from "@/components/LeadForm";

const afdelingen = ["Marketing", "Sales", "Operations", "Finance"];

const feiten = [
  { value: "Dag 10", label: "eerste agent draait op echt werk" },
  { value: "30 dagen", label: "of je investering terug" },
  { value: "Max 60 min", label: "kennismaking, de rest doen wij" },
];

function Feiten({ className = "" }: { className?: string }) {
  return (
    <div className={`${className} mt-10 pt-8 border-t border-gray-200/70 grid-cols-1 sm:grid-cols-3 gap-6`}>
      {feiten.map((f) => (
        <div key={f.value}>
          <div
            className="tabular text-2xl font-semibold tracking-[-0.02em] whitespace-nowrap"
            style={{ color: "#2A5E83", fontFamily: "'Inter Tight', sans-serif" }}
          >
            {f.value}
          </div>
          <div className="text-[14px] text-gray-500 mt-1 leading-[1.45]">{f.label}</div>
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative pt-28 md:pt-32 overflow-hidden">
      {/* dot-veld, bolvormig gemaskeerd */}
      <div className="dotfield" aria-hidden="true" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 65% 50% at 30% 32%, rgba(110,173,212,0.16) 0%, transparent 65%)" }}
      />

      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-14 items-start">
          <div className="lg:pt-8">
            <div className="brackets label-mono inline-block mb-9 ml-3.5" style={{ color: "#3474A0" }}>
              Volledig voor je gedaan, van bouw tot onderhoud
            </div>

            <h1
              className="font-bold text-gray-900 leading-[1.04] tracking-[-0.035em]"
              style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: "clamp(2.3rem, 4.6vw, 3.75rem)" }}
            >
              Wij nemen je terugkerende werk over.{" "}
              <span style={{ color: "#4A8EBB" }}>Compleet, van bouw tot onderhoud.</span>
            </h1>

            <p className="mt-6 text-[18px] text-gray-600 leading-[1.65] max-w-[52ch]">
              Een team AI-agents voor je marketing, sales, uitvoering en administratie. Wij bouwen ze, sluiten ze
              aan op <strong className="font-semibold text-gray-900">de systemen die je al gebruikt</strong> en
              houden ze draaiend. Geen losse tools, geen extra personeel, en je team hoeft niets te leren.
            </p>

            <ul className="mt-6 flex flex-wrap gap-y-2">
              {afdelingen.map((a, i) => (
                <li
                  key={a}
                  className={`text-[14.5px] font-bold leading-tight px-3.5 ${i === 0 ? "pl-0" : ""} ${
                    i < afdelingen.length - 1 ? "border-r border-gray-300" : ""
                  }`}
                  style={{ color: "#3474A0" }}
                >
                  {a}
                </li>
              ))}
            </ul>

            <Feiten className="hidden lg:grid" />
          </div>

          <LeadForm />
          <Feiten className="grid lg:hidden -mt-4" />
        </div>
      </div>
    </section>
  );
}
