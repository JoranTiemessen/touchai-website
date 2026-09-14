import Image from "next/image";

const oprichters = [
  {
    naam: "Joran Tiemessen",
    foto: "/joran.jpeg",
    rol: "Strategie en systeemontwerp",
    tekst: "Voert het gesprek en bepaalt welk werk eruit kan. Hij zet de lijst op waar je ons op afrekent.",
  },
  {
    naam: "Jesper Tiemessen",
    foto: "/jesper.jpeg",
    rol: "Techniek, bouwen en uitrollen",
    tekst: "Bouwt de agents, sluit ze aan op je systemen en houdt ze draaiend. Ook na dag dertig.",
  },
];

export default function Oprichters() {
  return (
    <section id="team" className="relative py-24 md:py-32 overflow-hidden bg-white">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="label-mono mb-4" style={{ color: "#3474A0" }}>Wie je spreekt</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-5" style={{ fontFamily: "'Inter Tight', sans-serif", color: "#0B1220" }}>
            Je praat <span style={{ color: "#4A8EBB" }}>direct met de oprichters.</span>
          </h2>
          <p className="text-lg text-gray-500 leading-[1.7]">
            Touch AI wordt gerund door de broers Joran en Jesper Tiemessen. Geen salesteam en geen
            accountmanager: in het gesprek zit je met een van ons tweeën aan tafel, en dezelfde twee bouwen het
            daarna en blijven je aanspreekpunt.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-x-20 gap-y-12">
          {oprichters.map((o) => (
            <div key={o.naam} className="max-w-[280px] text-center flex flex-col items-center">
              <div className="relative w-[168px] h-[168px] md:w-[196px] md:h-[196px] rounded-full overflow-hidden"
                style={{ boxShadow: "0 0 0 1px rgba(110,173,212,0.25), 0 14px 32px -14px rgba(11,18,32,0.34)" }}>
                <Image src={o.foto} alt={o.naam} fill sizes="196px" className="object-cover" style={{ objectPosition: "center 20%" }} />
              </div>
              <h3 className="text-[21px] font-bold tracking-[-0.015em] text-gray-900 mt-6" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                {o.naam}
              </h3>
              <div className="label-mono mt-1.5 mb-3" style={{ color: "#3474A0" }}>{o.rol}</div>
              <p className="text-[15.5px] text-gray-500 leading-[1.6]">{o.tekst}</p>
            </div>
          ))}
        </div>

        <p className="text-center mt-12">
          <a href="/about" className="link-underline text-[15px] font-semibold" style={{ color: "#3474A0" }}>
            Meer over ons →
          </a>
        </p>
      </div>
    </section>
  );
}
