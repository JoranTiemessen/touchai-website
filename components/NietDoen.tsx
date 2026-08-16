const nee = [
  { t: "Losse chatbots op je website", s: "Een venster rechtsonder dat vragen half beantwoordt lost geen werk op. Wij zitten in het proces, niet op de gevel." },
  { t: "Trainingen en workshops", s: "Wij bouwen. Je team hoeft niets te leren, want het werkt in de systemen die ze al gebruiken." },
  { t: "Een strategierapport", s: "Geen document met aanbevelingen. Je krijgt een lijst met processen en daarna draaiende agents." },
  { t: "Trajecten onder de vier processen", s: "Dan valt er te weinig te automatiseren en kan het voor ons allebei niet uit. Dat zeggen we in het gesprek, niet achteraf." },
  { t: "Migreren naar nieuwe software", s: "We koppelen op wat er staat. Je hoeft niets te vervangen en niets over te zetten." },
  { t: "Bouwen zonder monitoring", s: "Een agent zonder bewaking valt stil zonder dat iemand het merkt. Die leveren we niet op." },
];

export default function NietDoen() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden" style={{ background: "#F7F6F3" }}>
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <div className="label-mono mb-4" style={{ color: "#3474A0" }}>Even eerlijk</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-5" style={{ fontFamily: "'Sora', sans-serif", color: "#0B1220" }}>
            Wat we niet doen.
          </h2>
          <p className="text-lg text-gray-500 leading-[1.7]">
            Het scheelt ons allebei een gesprek waarin blijkt dat we iets anders bedoelden.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
          {nee.map((n) => (
            <div key={n.t} className="flex items-start gap-4">
              <span className="w-7 h-7 rounded-full grid place-items-center shrink-0 mt-0.5" style={{ background: "rgba(11,18,32,0.06)" }}>
                <svg className="w-3.5 h-3.5 text-gray-400" viewBox="0 0 16 16" fill="none">
                  <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
              <div>
                <div className="text-[19px] font-bold text-gray-900 tracking-[-0.01em] mb-1.5" style={{ fontFamily: "'Sora', sans-serif" }}>
                  {n.t}
                </div>
                <p className="text-[15.5px] text-gray-500 leading-[1.6]">{n.s}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
