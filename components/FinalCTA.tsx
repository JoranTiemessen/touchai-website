const punten = [
  "Je procesplaat binnen 5 werkdagen",
  "Eerste agent draait op dag 10",
  "In je eigen accounts",
];

export default function FinalCTA() {
  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden bg-white">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 55% at 50% 0%, rgba(110,173,212,0.14) 0%, transparent 65%)" }}
      />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="label-mono mb-6" style={{ color: "#3474A0" }}>Het gesprek · 45 minuten</div>

        <h2
          className="text-4xl md:text-[56px] font-bold tracking-[-0.035em] leading-[1.05] text-gray-900"
          style={{ fontFamily: "'Inter Tight', sans-serif" }}
        >
          Klaar om dat werk
          <br />
          <span style={{ color: "#4A8EBB" }}>kwijt te raken?</span>
        </h2>

        <p className="text-lg md:text-xl text-gray-500 leading-[1.6] mt-7 max-w-2xl mx-auto">
          Vijfenveertig minuten. Wij vragen door, jij levert de cijfers. Binnen vijf werkdagen krijg
          je je eigen procesplaat: jouw keten van aanvraag tot betaling, met de plekken erin
          gemarkeerd waar het nu met de hand gaat. Ook als je verder niets met ons doet.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-x-8 gap-y-3 mt-9">
          {punten.map((p) => (
            <div key={p} className="flex items-center gap-2.5 text-[15px] text-gray-600">
              <span className="w-5 h-5 rounded-full grid place-items-center shrink-0" style={{ background: "rgba(44,143,94,0.14)" }}>
                <svg className="w-3 h-3" viewBox="0 0 16 16" fill="none" style={{ color: "#2C8F5E" }}>
                  <path d="M4 8l3 3 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              {p}
            </div>
          ))}
        </div>

        <a
          href="https://calendar.app.google/7rRamUEnapLFZ2PS9"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex items-center gap-3 px-9 py-5 rounded-full mt-10 text-white font-bold text-[17px] hover:opacity-95 active:scale-[0.98] transition-[opacity,transform] duration-200"
          style={{ background: "linear-gradient(135deg, #6EADD4 0%, #4A8EBB 100%)", boxShadow: "0 14px 34px -14px rgba(42,94,131,0.85)" }}
        >
          Plan het gesprek
          <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>

        <p className="mt-6 text-[15px] text-gray-400">
          Liever eerst even mailen? <a href="mailto:info@touchaiagency.com" className="link-underline font-semibold" style={{ color: "#3474A0" }}>info@touchaiagency.com</a>
        </p>

        <p className="mt-10 pt-8 text-[15px] text-gray-400 max-w-xl mx-auto" style={{ borderTop: "1px solid rgba(11,18,32,0.08)" }}>
          Voor Nederlandse MKB-bedrijven vanaf ongeveer tien man waar elke week hetzelfde werk
          terugkomt. We nemen maximaal twee nieuwe trajecten per maand aan.
        </p>
      </div>
    </section>
  );
}
