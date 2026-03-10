import Image from "next/image";

const team = [
  {
    name: "Joran Tiemessen",
    age: 25,
    initials: "JT",
    photo: "/joran.jpeg",
    tagline: "AI Strategy & Automation",
    role: "Co-Founder",
    bio: "Joran leads client strategy and AI system design at Touch AI. With a sharp eye for business processes, he identifies exactly where automation creates the most value, then builds it. He specialises in connecting AI tools to real business outcomes: more leads, less manual work, and systems that keep running 24/7.",
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
    photo: "/jesper.jpeg",
    tagline: "AI Development & Integration",
    role: "Co-Founder",
    bio: "Jesper handles the technical side: building, training, and deploying the AI systems that power client results. From custom chatbots to automated data pipelines, he turns complex AI capabilities into clean, reliable tools that non-technical teams can actually use. He works across Python, LLM APIs, and no-code platforms to ship fast and ship right.",
    skills: [
      "Custom AI Development",
      "LLM Integration",
      "Python Automation",
      "Chatbot Engineering",
      "Data Pipeline Automation",
      "System Integration",
    ],
  },
  {
    name: "Raymond Tiemessen",
    age: null,
    initials: "RT",
    photo: "/ray.jpeg",
    tagline: "Finance, Technology & Innovation",
    role: "Advisor",
    bio: "Raymond brings over 30 years of experience at the intersection of financial services, technology, and innovation to Touch AI. Starting as a credit analyst and mortgage specialist, he went on to lead fintech projects focused on Mortgage-Backed Securities software for banks, pension funds, and insurers. Beyond finance, he has co-founded an internet platform, launched an interdisciplinary lab for sustainable materials, and most recently co-founded a biotech spin-off developing biodegradable plastics. His combination of financial expertise, technology insight, and entrepreneurial track record gives Touch AI a strong foundation for scaling.",
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
            A family built on{" "}
            <span style={{ color: "#6EADD4" }}>building things</span>
          </h2>
          <p className="text-lg text-gray-500 leading-[1.7]">
            Touch AI is a family business. Joran and Jesper build and ship the AI systems. Their father Raymond brings decades of experience in finance, technology, and starting companies.
          </p>
        </div>

        {/* Team cards — founders side by side, advisor full width below */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {team.slice(0, 2).map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
        <TeamCard member={team[2]} wide />

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
            Why we started Touch AI
          </h3>
          <p className="text-gray-500 leading-[1.75] max-w-2xl mx-auto">
            We kept seeing the same thing: great businesses drowning in repetitive work while AI sat unused. We built Touch AI to close that gap. No jargon, no overpriced consultants, just practical automation that makes a visible difference from day one.
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

function TeamCard({ member, wide = false }: { member: typeof team[0]; wide?: boolean }) {
  return (
    <div
      className={`rounded-3xl p-8 md:p-10 flex flex-col gap-7 ${wide ? "lg:flex-row lg:gap-10" : ""}`}
      style={{
        background: "rgba(255,255,255,0.95)",
        boxShadow:
          "0 4px 6px rgba(110,173,212,0.06), 0 12px 40px rgba(110,173,212,0.10), 0 1px 2px rgba(0,0,0,0.04)",
        border: "1px solid rgba(110,173,212,0.12)",
      }}
    >
      {/* Avatar + name */}
      <div className={`flex items-center gap-5 ${wide ? "lg:flex-col lg:items-start lg:w-56 lg:flex-shrink-0" : ""}`}>
        <div
          className="w-20 h-20 rounded-2xl flex-shrink-0 overflow-hidden"
          style={{ boxShadow: "0 8px 24px rgba(110,173,212,0.30)" }}
        >
          {member.photo ? (
            <Image
              src={member.photo}
              alt={member.name}
              width={80}
              height={80}
              className="w-full h-full object-cover object-[center_20%]"
              style={{ transform: "scale(1.15)", transformOrigin: "center 25%" }}
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
            Amersfoort, Netherlands
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
