const punten = [
  {
    n: "01",
    t: "Wij bepalen mee waar de winst zit",
    s: "Je hoeft niet van tevoren te weten wat je wil automatiseren. Wij lopen je keten door en zeggen waar de meeste tijd blijft liggen, ook als dat iets anders is dan waarvoor je binnenkwam.",
  },
  {
    n: "02",
    t: "Wij komen zelf met het volgende voorstel",
    s: "Zodra de eerste agents draaien zien we in de cijfers waar het daarna schuurt. Dat melden we uit onszelf, met een voorstel erbij, in plaats van te wachten tot jij belt.",
  },
  {
    n: "03",
    t: "Volledig done for you",
    s: "Wij bouwen, testen, sluiten aan en houden het draaiend. Jij levert alleen de toegang en het oordeel: een kennismaking, één sessie van anderhalf uur om de toegang te regelen, en tussendoor een paar korte momenten om knopen door te hakken. Geen projectrol, geen training, geen nieuw systeem dat je team moet leren.",
  },
  {
    n: "04",
    t: "Wij blijven na de oplevering",
    s: "Koppelingen breken en leveranciers veranderen hun software. Wij zien dat in de monitoring en lossen het op voordat jij het merkt. Dat zit in het traject, niet in een meerwerkbon.",
  },
];

export default function Groeipartner() {
  return (
    <section id="aanpak-partner" className="relative py-24 md:py-32 overflow-hidden" style={{ background: "#F7F6F3" }}>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <div className="label-mono mb-4" style={{ color: "#3474A0" }}>Meer dan een agency</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-5" style={{ fontFamily: "'Inter Tight', sans-serif", color: "#0B1220" }}>
            Een groeipartner <span style={{ color: "#4A8EBB" }}>die meedenkt</span>, niet een leverancier die afvinkt.
          </h2>
          <p className="text-lg text-gray-500 leading-[1.7]">
            De meeste agencies bouwen wat je vraagt en sturen een factuur. Wij kijken naar je hele bedrijf en
            komen zelf met voorstellen als we zien dat er ergens geld of tijd blijft liggen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden bg-white" style={{ border: "1px solid rgba(11,18,32,0.08)" }}>
          {punten.map((p, i) => (
            <div
              key={p.n}
              className={`p-7 md:p-9 ${i < 3 ? "border-b" : ""} ${i % 2 === 0 ? "md:border-r" : ""} ${i >= 2 ? "md:border-b-0" : ""}`}
              style={{ borderColor: "rgba(11,18,32,0.08)" }}
            >
              <div className="label-mono mb-3" style={{ color: "#4A8EBB" }}>{p.n}</div>
              <h3 className="text-[21px] font-bold tracking-[-0.015em] text-gray-900 mb-2.5" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                {p.t}
              </h3>
              <p className="text-[15.5px] text-gray-500 leading-[1.65]">{p.s}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-[17px] text-gray-600 leading-[1.7] max-w-3xl">
          <strong className="font-semibold text-gray-900">Eén vast aanspreekpunt, en dat zijn wij zelf.</strong>{" "}
          Geen accountmanager die de vraag doorzet, geen ticketsysteem: je appt de oprichter die je systeem
          gebouwd heeft. En alles draait in jouw eigen accounts, op jouw eigen abonnementen. Stop je met ons,
          dan blijft het staan.
        </p>
      </div>
    </section>
  );
}
