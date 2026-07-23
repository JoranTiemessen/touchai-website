import Image from "next/image";

const team = [
  {
    name: "Joran Tiemessen",
    age: 25,
    initials: "JT",
    photo: "/joran.jpeg",
    tagline: "AI-strategie & automatisering",
    role: "Mede-oprichter",
    bio: "Joran leidt de klantstrategie en het ontwerp van de AI-systemen bij Touch AI. Met een scherp oog voor bedrijfsprocessen ziet hij precies waar automatisering de meeste waarde oplevert, en bouwt het vervolgens. Hij verbindt AI aan concrete resultaten: meer tijd, minder handwerk, en systemen die 24/7 blijven draaien.",
    skills: [
      "AI-workflow automatisering",
      "Procesoptimalisatie",
      "Klantstrategie",
      "Leadgeneratie-systemen",
      "Claude & GPT API-integratie",
      "Bedrijfsanalyse",
    ],
  },
  {
    name: "Jesper Tiemessen",
    age: 22,
    initials: "JT",
    photo: "/jesper.jpeg",
    tagline: "AI-development & integratie",
    role: "Mede-oprichter",
    bio: "Jesper doet de technische kant: het bouwen, trainen en uitrollen van de AI-systemen die de resultaten leveren. Van maatwerk-agents tot geautomatiseerde datapijplijnen: hij maakt complexe AI tot betrouwbare tools die ook een niet-technisch team gewoon kan gebruiken. Hij werkt met Python, LLM-API's en no-code om snel én goed te leveren.",
    skills: [
      "Maatwerk AI-development",
      "LLM-integratie",
      "Python-automatisering",
      "Agent-engineering",
      "Datapijplijn-automatisering",
      "Systeemintegratie",
    ],
  },
];

export default function Advisors() {
  return (
    <section
      id="team"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "rgba(255,255,255,0.88)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold tracking-wider uppercase mb-5"
            style={{
              background: "rgba(110,173,212,0.06)",
              borderColor: "rgba(110,173,212,0.25)",
              color: "#6EADD4",
            }}
          >
            Het team
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 tracking-[-0.03em] mb-5"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Twee broers,{" "}
            <span style={{ color: "#6EADD4" }}>één missie</span>
          </h2>
          <p className="text-lg text-gray-500 leading-[1.7]">
            Touch AI wordt gerund door de broers Joran en Jesper Tiemessen. Samen ontwerpen, bouwen en leveren ze de AI-systemen die een echt verschil maken in hoe onze klanten werken.
          </p>
        </div>

        {/* Team cards - founders side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {team.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>

        {/* Why we started strip */}
        <div
          className="mt-8 rounded-3xl p-8 md:p-10 text-center"
          style={{
            background: "linear-gradient(135deg, rgba(110,173,212,0.08) 0%, rgba(74,142,187,0.06) 100%)",
            border: "1px solid rgba(110,173,212,0.15)",
          }}
        >
          <h3
            className="text-2xl md:text-3xl font-bold text-gray-900 tracking-[-0.02em] mb-4"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Waarom we Touch AI zijn begonnen
          </h3>
          <p className="text-gray-500 leading-[1.75] max-w-2xl mx-auto">
            We zagen steeds hetzelfde: goede bedrijven die verzuipen in repetitief werk, terwijl AI ongebruikt bleef. Touch AI dicht dat gat. Geen jargon, geen dure consultants, gewoon praktische automatisering die vanaf dag één een zichtbaar verschil maakt.
          </p>
          <a
            href="https://calendar.app.google/7rRamUEnapLFZ2PS9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 mt-8 px-7 py-3.5 rounded-full text-white font-semibold text-base"
            style={{
              background: "linear-gradient(135deg, #6EADD4 0%, #4A8EBB 100%)",
              boxShadow: "0 6px 20px rgba(110,173,212,0.40)",
            }}
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

function TeamCard({ member }: { member: typeof team[0] }) {
  return (
    <div
      className="rounded-3xl p-8 md:p-10 flex flex-col gap-7"
      style={{
        background: "rgba(255,255,255,0.95)",
        boxShadow:
          "0 4px 6px rgba(110,173,212,0.06), 0 12px 40px rgba(110,173,212,0.10), 0 1px 2px rgba(0,0,0,0.04)",
        border: "1px solid rgba(110,173,212,0.12)",
      }}
    >
      {/* Avatar + name */}
      <div className="flex items-center gap-5">
        <div
          className="w-28 h-28 md:w-32 md:h-32 rounded-2xl flex-shrink-0 overflow-hidden"
          style={{ boxShadow: "0 8px 24px rgba(110,173,212,0.30)" }}
        >
          {member.photo ? (
            <Image
              src={member.photo}
              alt={member.name}
              width={160}
              height={160}
              className="w-full h-full object-cover object-[center_18%]"
            />
          ) : (
            <div
              className="w-full h-full flex items-center justify-center text-2xl font-bold text-white"
              style={{ background: "linear-gradient(135deg, #6EADD4 0%, #4A8EBB 100%)" }}
            >
              {member.initials}
            </div>
          )}
        </div>
        <div>
          <div className="flex items-center gap-2 mb-0.5">
            <span
              className="text-xs font-bold px-2 py-0.5 rounded-full"
              style={{
                background: "rgba(110,173,212,0.10)",
                color: "#4A8EBB",
                border: "1px solid rgba(110,173,212,0.20)",
              }}
            >
              {member.role}
            </span>
          </div>
          <h3
            className="text-2xl font-bold text-gray-900 tracking-[-0.02em]"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            {member.name}
          </h3>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-sm font-semibold" style={{ color: "#6EADD4" }}>
              {member.tagline}
            </span>
          </div>
          <div className="flex items-center gap-1.5 mt-1.5 text-xs text-gray-400">
            <svg className="w-3 h-3" viewBox="0 0 16 16" fill="currentColor">
              <path fillRule="evenodd" d="M8 1a5 5 0 00-3.536 8.536L8 13.07l3.536-3.534A5 5 0 008 1zm0 7a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            Amersfoort, Nederland
          </div>
        </div>
      </div>

      {/* Bio + skills */}
      <div className="flex flex-col gap-6 flex-1">
        <p className="text-gray-600 leading-[1.75] text-base">{member.bio}</p>
        <div>
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
            Expertise
          </div>
          <div className="flex flex-wrap gap-2">
            {member.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 rounded-full text-xs font-semibold"
                style={{
                  background: "rgba(110,173,212,0.10)",
                  color: "#4A8EBB",
                  border: "1px solid rgba(110,173,212,0.20)",
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
