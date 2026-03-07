const team = [
  {
    name: "Joran Tiemessen",
    age: 25,
    initials: "JT",
    tagline: "AI Strategy & Automation",
    bio: "Joran leads client strategy and AI system design at Touch AI. With a sharp eye for business processes, he identifies exactly where automation creates the most value — then builds it. He specialises in connecting AI tools to real business outcomes: more leads, less manual work, and systems that keep running 24/7.",
    skills: [
      "AI Workflow Automation",
      "Process Optimisation",
      "Client Strategy",
      "Lead Generation Systems",
      "Claude & GPT API Integration",
      "Business Analysis",
    ],
  },
  {
    name: "Jesper Tiemessen",
    age: 22,
    initials: "JT",
    tagline: "AI Development & Integration",
    bio: "Jesper handles the technical side — building, training, and deploying the AI systems that power client results. From custom chatbots to automated data pipelines, he turns complex AI capabilities into clean, reliable tools that non-technical teams can actually use. He works across Python, LLM APIs, and no-code platforms to ship fast and ship right.",
    skills: [
      "Custom AI Development",
      "LLM Integration",
      "Python Automation",
      "Chatbot Engineering",
      "Data Pipeline Automation",
      "System Integration",
    ],
  },
];

export default function About() {
  return (
    <section
      id="about"
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
            The Team
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 tracking-[-0.03em] mb-5"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Built by two brothers{" "}
            <span style={{ color: "#6EADD4" }}>from Amersfoort</span>
          </h2>
          <p className="text-lg text-gray-500 leading-[1.7]">
            Touch AI was founded by Joran and Jesper Tiemessen — two Dutch brothers with one shared obsession: making AI work for real businesses, not just on paper.
          </p>
        </div>

        {/* Team cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
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
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-2xl font-bold text-white flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, #6EADD4 0%, #4A8EBB 100%)",
                    boxShadow: "0 8px 24px rgba(110,173,212,0.35)",
                  }}
                >
                  {member.initials}
                </div>
                <div>
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
                    <span className="text-gray-300">·</span>
                    <span className="text-sm text-gray-400">{member.age} years old</span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-1.5 text-xs text-gray-400">
                    <svg className="w-3 h-3" viewBox="0 0 16 16" fill="currentColor">
                      <path fillRule="evenodd" d="M8 1a5 5 0 00-3.536 8.536L8 13.07l3.536-3.534A5 5 0 008 1zm0 7a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    Amersfoort, Netherlands
                  </div>
                </div>
              </div>

              {/* Bio */}
              <p className="text-gray-600 leading-[1.75] text-base">{member.bio}</p>

              {/* Skills */}
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
          ))}
        </div>

        {/* Why we started strip */}
        <div
          className="mt-10 rounded-3xl p-8 md:p-10 text-center"
          style={{
            background: "linear-gradient(135deg, rgba(110,173,212,0.08) 0%, rgba(74,142,187,0.06) 100%)",
            border: "1px solid rgba(110,173,212,0.15)",
          }}
        >
          <h3
            className="text-2xl md:text-3xl font-bold text-gray-900 tracking-[-0.02em] mb-4"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Why we started Touch AI
          </h3>
          <p className="text-gray-500 leading-[1.75] max-w-2xl mx-auto">
            We kept seeing the same thing: great businesses drowning in repetitive work while AI sat unused. We built Touch AI to close that gap — no jargon, no overpriced consultants, just practical automation that makes a visible difference from day one.
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
            Book a free call with us
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
