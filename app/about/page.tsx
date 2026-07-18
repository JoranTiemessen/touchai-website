import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollBackground from "@/components/ScrollBackground";

export const metadata: Metadata = {
  title: "Over ons — Touch AI Agency",
  description:
    "Touch AI is opgericht door de broers Joran en Jesper Tiemessen. We bouwen AI-agents die het repetitieve werk overnemen bij Nederlandse MKB-bedrijven. Meetbaar, op je eigen systemen, gegarandeerd.",
};

const CAL_URL = "https://calendar.app.google/7rRamUEnapLFZ2PS9";

const values = [
  {
    title: "Meetbaar boven mooi",
    desc: "We rekenen af op bespaarde uren tegen een nulmeting, niet op mooie dashboards of adviesrapporten.",
  },
  {
    title: "Op je eigen systemen",
    desc: "Geen migratie, geen nieuwe software leren. We bouwen op de tools die je nu al gebruikt.",
  },
  {
    title: "Adoptie eerst",
    desc: "Een agent die niemand gebruikt, bespaart nul uur. We trainen je team tot het dagelijks draait.",
  },
  {
    title: "Eigenaarschap bij jou",
    desc: "Alles wat we bouwen blijft van jou, ook als we uit elkaar gaan. Geen lock-in.",
  },
];

const team = [
  {
    name: "Joran Tiemessen",
    photo: "/joran.jpeg",
    role: "Mede-oprichter",
    tagline: "AI-strategie & automatisering",
    bio: "Joran leidt de klantstrategie en het ontwerp van de AI-systemen. Met een scherp oog voor bedrijfsprocessen ziet hij precies waar automatisering de meeste waarde oplevert, en bouwt het vervolgens. Hij verbindt AI aan concrete resultaten: meer tijd, minder handwerk, en systemen die 24/7 blijven draaien.",
  },
  {
    name: "Jesper Tiemessen",
    photo: "/jesper.jpeg",
    role: "Mede-oprichter",
    tagline: "AI-development & integratie",
    bio: "Jesper doet de technische kant: het bouwen, trainen en uitrollen van de AI-systemen die de resultaten leveren. Van maatwerk-agents tot geautomatiseerde datapijplijnen: hij maakt complexe AI tot betrouwbare tools die ook een niet-technisch team gewoon kan gebruiken.",
  },
];

export default function AboutPage() {
  return (
    <main className="relative" style={{ isolation: "isolate" }}>
      <ScrollBackground />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-16 md:pt-48 md:pb-20 overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold tracking-wider uppercase mb-7"
            style={{ background: "rgba(110,173,212,0.06)", borderColor: "rgba(110,173,212,0.25)", color: "#6EADD4" }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#6EADD4" }} />
            Over Touch AI
          </div>
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 leading-[1.06] tracking-[-0.03em] mb-6"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            AI die het werk doet.
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #6EADD4 0%, #4A8EBB 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Niet alleen het advies.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 leading-[1.7] max-w-2xl mx-auto">
            Touch AI is opgericht door de broers Joran en Jesper Tiemessen. We bouwen AI-agents die het repetitieve werk overnemen bij Nederlandse MKB-bedrijven, gebouwd op je eigen systemen en afgerekend op bespaarde uren.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="relative py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-3xl p-8 md:p-12"
            style={{
              background: "rgba(255,255,255,0.9)",
              boxShadow: "0 4px 6px rgba(110,173,212,0.06), 0 12px 40px rgba(110,173,212,0.10), 0 1px 2px rgba(0,0,0,0.04)",
              border: "1px solid rgba(110,173,212,0.12)",
            }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-[-0.02em] mb-5" style={{ fontFamily: "'Sora', sans-serif" }}>
              Waarom we Touch AI zijn begonnen
            </h2>
            <div className="space-y-5 text-gray-600 leading-[1.8]">
              <p>
                We zagen steeds hetzelfde: goede bedrijven die verzuipen in repetitief werk, terwijl AI ongebruikt bleef. Mails die zichzelf zouden kunnen beantwoorden, offertes die uren kosten, administratie die zich opstapelt. Werk dat moet gebeuren, maar niemand vooruit helpt.
              </p>
              <p>
                Tegelijk zagen we een markt vol AI-hype: workshops, adviesrapporten en losse tools die na een maand in de la belanden. Veel praten, weinig resultaat. Dat wilden we anders doen.
              </p>
              <p>
                Dus bouwen we geen adviezen, maar een AI Workforce: een team agents dat het werk daadwerkelijk overneemt, op de systemen die je al hebt. We rekenen af op bespaarde uren, met een garantie eraan. Geen jargon, geen lock-in, gewoon een fulltime medewerker aan capaciteit terug.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold tracking-wider uppercase mb-5"
              style={{ background: "rgba(110,173,212,0.06)", borderColor: "rgba(110,173,212,0.25)", color: "#6EADD4" }}
            >
              Waar we in geloven
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-[-0.03em]" style={{ fontFamily: "'Sora', sans-serif" }}>
              Vier principes die ons werk sturen
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="rounded-2xl p-8"
                style={{
                  background: "rgba(255,255,255,0.9)",
                  boxShadow: "0 4px 6px rgba(110,173,212,0.06), 0 10px 30px rgba(110,173,212,0.08), 0 1px 2px rgba(0,0,0,0.04)",
                  border: "1px solid rgba(110,173,212,0.12)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 text-sm font-bold text-white"
                  style={{ background: "linear-gradient(135deg, #6EADD4 0%, #4A8EBB 100%)", fontFamily: "'Sora', sans-serif" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 tracking-[-0.01em]" style={{ fontFamily: "'Sora', sans-serif" }}>
                  {v.title}
                </h3>
                <p className="text-sm text-gray-500 leading-[1.7]">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="relative py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold tracking-wider uppercase mb-5"
              style={{ background: "rgba(110,173,212,0.06)", borderColor: "rgba(110,173,212,0.25)", color: "#6EADD4" }}
            >
              Het team
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-[-0.03em] mb-5" style={{ fontFamily: "'Sora', sans-serif" }}>
              Twee broers, één missie
            </h2>
            <p className="text-lg text-gray-500 leading-[1.7]">
              Klein en hands-on. Je werkt direct met de mensen die je AI-team ontwerpen en bouwen.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-3xl p-8 md:p-10 flex flex-col gap-6"
                style={{
                  background: "rgba(255,255,255,0.92)",
                  boxShadow: "0 4px 6px rgba(110,173,212,0.06), 0 12px 40px rgba(110,173,212,0.10), 0 1px 2px rgba(0,0,0,0.04)",
                  border: "1px solid rgba(110,173,212,0.12)",
                }}
              >
                <div className="flex items-center gap-5">
                  <div
                    className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0"
                    style={{ boxShadow: "0 8px 24px rgba(110,173,212,0.35)" }}
                  >
                    <Image
                      src={member.photo}
                      alt={member.name}
                      width={160}
                      height={160}
                      className="w-full h-full object-cover object-[center_18%]"
                    />
                  </div>
                  <div>
                    <span
                      className="text-xs font-bold px-2 py-0.5 rounded-full"
                      style={{ background: "rgba(110,173,212,0.10)", color: "#4A8EBB", border: "1px solid rgba(110,173,212,0.20)" }}
                    >
                      {member.role}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 tracking-[-0.02em] mt-1.5" style={{ fontFamily: "'Sora', sans-serif" }}>
                      {member.name}
                    </h3>
                    <div className="text-sm font-semibold mt-0.5" style={{ color: "#6EADD4" }}>{member.tagline}</div>
                  </div>
                </div>
                <p className="text-gray-600 leading-[1.75] text-base">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-3xl p-10 md:p-14 text-center"
            style={{
              background: "linear-gradient(135deg, rgba(110,173,212,0.10) 0%, rgba(74,142,187,0.07) 100%)",
              border: "1px solid rgba(110,173,212,0.18)",
            }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-[-0.02em] mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>
              Benieuwd waar bij jou de uren weglekken?
            </h2>
            <p className="text-gray-500 leading-[1.7] max-w-xl mx-auto mb-8">
              Doe de gratis Tijdlek-scan. Binnen een week zwart op wit waar je tijd verdwijnt en welke agents dat oplossen.
            </p>
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full text-white font-semibold text-base"
              style={{ background: "linear-gradient(135deg, #6EADD4 0%, #4A8EBB 100%)", boxShadow: "0 6px 20px rgba(110,173,212,0.40)" }}
            >
              Doe de gratis Tijdlek-scan
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
