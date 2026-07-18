const tools = [
  "Gmail", "Outlook", "Microsoft 365", "Google Workspace",
  "WhatsApp", "Slack", "Teams", "HubSpot",
  "Pipedrive", "Exact", "Moneybird", "Notion",
];

export default function Integrations() {
  return (
    <section className="relative py-24 md:py-28 overflow-hidden bg-white">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-bold tracking-[0.18em] uppercase mb-4" style={{ color: "#3474A0" }}>
            Werkt op je eigen systemen
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-5" style={{ fontFamily: "'Sora', sans-serif", color: "#0B1220" }}>
            Geen migratie. Geen nieuwe software.
          </h2>
          <p className="text-lg text-gray-500 leading-[1.7]">
            We koppelen je AI-agents op de tools die je nu al gebruikt. Je team hoeft niets nieuws te leren.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {tools.map((t) => (
            <div
              key={t}
              className="flex items-center justify-center px-4 py-4 rounded-xl text-sm font-semibold text-gray-500 transition-colors duration-200 hover:text-gray-800"
              style={{ background: "#F7F6F3", border: "1px solid rgba(11,18,32,0.06)" }}
            >
              {t}
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-gray-400 mt-6">En elk ander systeem met een koppeling. Staat jouw tool er niet bij? We bouwen de koppeling.</p>
      </div>
    </section>
  );
}
