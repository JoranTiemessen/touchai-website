const voorwaarden = [
  { n: "01", t: "Toegang binnen 5 werkdagen", s: "Anders kunnen we niet bouwen en loopt de klok voor niets." },
  { n: "02", t: "Eén vast aanspreekpunt", s: "Iemand die knopen mag doorhakken als er een vraag is." },
  { n: "03", t: "Anderhalf uur van je tijd", s: "Eén sessie bij jou op kantoor. Meer vragen we niet." },
  { n: "04", t: "Je mensen gebruiken ze ook", s: "Loopt er niets doorheen, dan is er niets te meten." },
];

export default function Results() {
  return (
    <section id="garantie" className="relative py-24 md:py-32 overflow-hidden" style={{ background: "#F7F6F3" }}>
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="label-mono mb-4" style={{ color: "#3474A0" }}>De garantie</div>
          <h2
            className="text-4xl md:text-[52px] font-bold tracking-[-0.03em] leading-[1.08] text-gray-900"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            De agents die we samen afspreken, draaien binnen 60 dagen op{" "}
            <span style={{ color: "#4A8EBB" }}>je eigen echte werk.</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-500 leading-[1.6] mt-6">
            Concreet: minstens 80% van het werk loopt er in de laatste twee weken daadwerkelijk
            doorheen. Dat lees je af in het overzicht dat je van ons krijgt.
          </p>
        </div>

        {/* de tweesprong */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <div className="rounded-2xl p-7 md:p-8 bg-white" style={{ border: "1px solid rgba(11,18,32,0.08)" }}>
            <div className="label-mono mb-4" style={{ color: "#2C8F5E" }}>Lukt dat</div>
            <p className="text-[22px] md:text-[26px] font-bold tracking-[-0.02em] leading-[1.25] text-gray-900"
               style={{ fontFamily: "'Sora', sans-serif" }}>
              Dan draait het werk, en betaal je de tweede helft.
            </p>
            <p className="text-[16px] text-gray-500 leading-[1.6] mt-4">
              De eerste helft betaal je bij de start, de tweede pas als de laatste agent draait.
            </p>
          </div>

          <div className="rounded-2xl p-7 md:p-8" style={{ background: "#fff", border: "2px solid rgba(74,142,187,0.55)", boxShadow: "0 18px 44px -26px rgba(42,94,131,0.45)" }}>
            <div className="label-mono mb-4" style={{ color: "#C2413F" }}>Lukt dat niet</div>
            <p className="text-[22px] md:text-[26px] font-bold tracking-[-0.02em] leading-[1.25] text-gray-900"
               style={{ fontFamily: "'Sora', sans-serif" }}>
              Dan kies jij.
            </p>
            <div className="mt-5 space-y-3">
              {[
                ["A", "Je investering terug", "Alle eenmalige bedragen, binnen 14 dagen."],
                ["B", "Wij werken kosteloos door", "Tot het wel draait, met een grens van 30 dagen."],
              ].map(([l, t, s]) => (
                <div key={l} className="flex items-start gap-3.5">
                  <span className="w-7 h-7 rounded-lg shrink-0 grid place-items-center text-[13px] font-bold"
                        style={{ background: "rgba(110,173,212,0.16)", color: "#2A5E83" }}>{l}</span>
                  <span>
                    <span className="block text-[17px] font-bold text-gray-900">{t}</span>
                    <span className="block text-[15px] text-gray-500 leading-[1.5] mt-0.5">{s}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* wat er in beide gevallen geldt */}
        <div className="rounded-2xl p-7 md:p-8 mb-12" style={{ background: "rgba(110,173,212,0.09)", border: "1px solid rgba(110,173,212,0.28)" }}>
          <p className="text-[20px] md:text-[24px] font-bold tracking-[-0.015em] text-gray-900 leading-[1.3]"
             style={{ fontFamily: "'Sora', sans-serif" }}>
            In beide gevallen blijven de agents staan.
          </p>
          <p className="text-[16px] text-gray-600 leading-[1.6] mt-3 max-w-3xl">
            Inclusief documentatie en overdracht, in je eigen accounts. Wat we gebouwd hebben blijft
            van jou, ook als je je geld terugvraagt. Je kunt ons er morgen uit halen zonder dat er
            iets stopt.
          </p>
        </div>

        <div>
          <div className="label-mono mb-5" style={{ color: "#8A94A6" }}>Wat wij van jou vragen</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-7">
            {voorwaarden.map((v) => (
              <div key={v.n} className="pt-4" style={{ borderTop: "2px solid rgba(11,18,32,0.10)" }}>
                <div className="label-mono mb-2" style={{ color: "#4A8EBB" }}>{v.n}</div>
                <div className="text-[17px] font-bold text-gray-900 leading-[1.3] mb-1.5"
                     style={{ fontFamily: "'Sora', sans-serif" }}>{v.t}</div>
                <p className="text-[15px] text-gray-500 leading-[1.55]">{v.s}</p>
              </div>
            ))}
          </div>
          <p className="text-[15px] text-gray-400 mt-8">
            Gebeurt dat niet, dan kunnen we het niet meten en vervalt de garantie.
          </p>
        </div>
      </div>
    </section>
  );
}
