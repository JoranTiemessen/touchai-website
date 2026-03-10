import Image from "next/image";

const advisors = [
  {
    name: "Raymond Tiemessen",
    initials: "RT",
    photo: null,
    tagline: "Advisor — Finance, Technology & Innovation",
    location: "Amersfoort, Netherlands",
    bio: "Ondernemer met meer dan 30 jaar ervaring op het snijvlak van financiële dienstverlening, technologie en innovatie. Begonnen als kredietacceptant en hypotheekanalist, waarna verdere specialisatie volgde in projectmanagement binnen fintech, met focus op de verkoop en implementatie van Mortgage-Backed Securities (MBS) software voor banken, pensioenfondsen en verzekeraars. Naast activiteiten in de financiële sector mede-eigenaar en ontwikkelaar van een internetplatform. Mede-oprichter van een interdisciplinair laboratorium gericht op de ontwikkeling van duurzame materialen en recent mede-oprichter van een biotech spin-off die biologisch afbreekbare plastics ontwikkelt.",
    skills: [
      "Financial Services",
      "Fintech & MBS Software",
      "Venture Building",
      "Project Management",
      "Technology Innovation",
      "Sustainable Materials",
    ],
  },
];

export default function Advisors() {
  return (
    <section
      id="advisors"
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ background: "rgba(255,255,255,0.92)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold tracking-wider uppercase mb-5"
            style={{
              background: "rgba(110,173,212,0.06)",
              borderColor: "rgba(110,173,212,0.25)",
              color: "#6EADD4",
            }}
          >
            Advisory Board
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900 tracking-[-0.03em]"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Backed by{" "}
            <span style={{ color: "#6EADD4" }}>decades of experience</span>
          </h2>
        </div>

        {/* Advisor cards */}
        <div className="max-w-3xl mx-auto">
          {advisors.map((advisor) => (
            <div
              key={advisor.name}
              className="rounded-3xl p-8 md:p-10 flex flex-col gap-6"
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
                  className="w-20 h-20 rounded-2xl flex-shrink-0 overflow-hidden"
                  style={{ boxShadow: "0 8px 24px rgba(110,173,212,0.25)" }}
                >
                  {advisor.photo ? (
                    <Image
                      src={advisor.photo}
                      alt={advisor.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <div
                      className="w-full h-full flex items-center justify-center text-2xl font-bold text-white"
                      style={{ background: "linear-gradient(135deg, #6EADD4 0%, #4A8EBB 100%)" }}
                    >
                      {advisor.initials}
                    </div>
                  )}
                </div>
                <div>
                  <h3
                    className="text-2xl font-bold text-gray-900 tracking-[-0.02em]"
                    style={{ fontFamily: "'Sora', sans-serif" }}
                  >
                    {advisor.name}
                  </h3>
                  <p className="text-sm font-semibold mt-0.5" style={{ color: "#6EADD4" }}>
                    {advisor.tagline}
                  </p>
                  <div className="flex items-center gap-1.5 mt-1.5 text-xs text-gray-400">
                    <svg className="w-3 h-3" viewBox="0 0 16 16" fill="currentColor">
                      <path fillRule="evenodd" d="M8 1a5 5 0 00-3.536 8.536L8 13.07l3.536-3.534A5 5 0 008 1zm0 7a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {advisor.location}
                  </div>
                </div>
              </div>

              {/* Bio */}
              <p className="text-gray-600 leading-[1.75] text-base">{advisor.bio}</p>

              {/* Skills */}
              <div>
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
                  Expertise
                </div>
                <div className="flex flex-wrap gap-2">
                  {advisor.skills.map((skill) => (
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
          ))}
        </div>
      </div>
    </section>
  );
}
