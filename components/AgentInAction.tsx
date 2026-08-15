export default function AgentInAction() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden" style={{ background: "#F7F6F3" }}>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <div>
            <div className="text-xs font-bold tracking-[0.18em] uppercase mb-4" style={{ color: "#3474A0" }}>
              Zo ziet het eruit
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] leading-[1.1] mb-6" style={{ fontFamily: "'Sora', sans-serif", color: "#0B1220" }}>
              De agent doet het werk. Jij keurt alleen nog goed.
            </h2>
            <p className="text-lg text-gray-500 leading-[1.7] mb-6">
              Geen zwarte doos. Je agents werken in je eigen inbox en WhatsApp: ze lezen mee, stellen een antwoord voor, en wachten op jouw akkoord. Zodra je ze vertrouwt, zet je ze op de automaat.
            </p>
            <ul className="space-y-3">
              {["Voorstellen in seconden, in jouw tone of voice", "Jij houdt de controle met één klik goedkeuren", "Volledig automatisch zodra je er klaar voor bent"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-600">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(74,142,187,0.14)" }}>
                    <svg className="w-3 h-3" viewBox="0 0 16 16" fill="none" style={{ color: "#3474A0" }}>
                      <path d="M4 8l3 3 5-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-[15px] leading-[1.6]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Mock chat */}
          <div
            className="rounded-3xl overflow-hidden"
            style={{ background: "#ffffff", border: "1px solid rgba(11,18,32,0.08)", boxShadow: "0 20px 60px rgba(11,18,32,0.12)" }}
          >
            {/* header */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100">
              <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "#25D366" }}>
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#fff"><path d="M12 2a10 10 0 00-8.5 15.3L2 22l4.8-1.5A10 10 0 1012 2z" /></svg>
              </div>
              <div>
                <div className="text-sm font-bold" style={{ color: "#0B1220" }}>Klantvraag via WhatsApp</div>
                <div className="text-xs" style={{ color: "#25D366" }}>Inbox-agent · online</div>
              </div>
            </div>

            {/* bubbles */}
            <div className="p-5 space-y-4" style={{ background: "#F7F6F3" }}>
              <div className="flex justify-start">
                <div className="max-w-[80%] rounded-2xl rounded-tl-sm px-4 py-2.5 text-sm text-gray-700" style={{ background: "#fff", boxShadow: "0 1px 2px rgba(0,0,0,0.06)" }}>
                  Hoi! Staat mijn bestelling al klaar? Ordernummer 1042.
                </div>
              </div>

              <div className="rounded-2xl p-4" style={{ background: "#fff", border: "1px solid rgba(74,142,187,0.25)" }}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-md" style={{ background: "#EAF2FB", color: "#2A5E83" }}>Concept</span>
                  <span className="text-xs text-gray-400">Inbox-agent stelt voor</span>
                </div>
                <p className="text-sm text-gray-700 leading-[1.6]">
                  Hoi! Je bestelling 1042 staat klaar voor verzending. Je ontvangt vandaag nog de track &amp; trace per mail. Fijne dag! 📦
                </p>
                <div className="flex gap-2 mt-4">
                  <button className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full text-white text-sm font-semibold" style={{ background: "#25D366" }}>
                    <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none"><path d="M4 8l3 3 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    Goedkeuren &amp; versturen
                  </button>
                  <button className="px-4 py-2 rounded-full text-sm font-semibold text-gray-500" style={{ background: "#F1F3F7" }}>Bewerken</button>
                </div>
              </div>

              <div className="text-center text-xs text-gray-400 pt-1">Jij houdt de controle. Eén klik en het is verstuurd.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
