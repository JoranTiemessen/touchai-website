"use client";

import { useState } from "react";

const CAL_URL = "https://calendar.app.google/7rRamUEnapLFZ2PS9";

// ~€5.000/mnd fully-loaded ÷ ~160 productieve uren ≈ €31/uur
const EUR_PER_HOUR = 31;
const WEEKS_PER_MONTH = 4.33;

function euro(n: number) {
  return "€" + Math.round(n).toLocaleString("nl-NL");
}

export default function RoiMeter() {
  const [team, setTeam] = useState(6);
  const [hoursPP, setHoursPP] = useState(7);

  const hoursPerWeek = team * hoursPP;
  const perMonth = Math.round((hoursPerWeek * WEEKS_PER_MONTH * EUR_PER_HOUR) / 50) * 50;
  const ftes = (hoursPerWeek / 40).toFixed(1).replace(".", ",");

  return (
    <section
      id="roi"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, rgba(240,248,255,0.6) 0%, rgba(255,255,255,0.95) 100%)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 20% 0%, rgba(110,173,212,0.08) 0%, transparent 60%)" }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold tracking-wider uppercase mb-5"
            style={{ background: "rgba(110,173,212,0.06)", borderColor: "rgba(110,173,212,0.25)", color: "#6EADD4" }}
          >
            ROI-calculator
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 tracking-[-0.03em] mb-5"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Reken je{" "}
            <span style={{ color: "#6EADD4" }}>tijdlek uit.</span>
          </h2>
          <p className="text-lg text-gray-500 leading-[1.7]">
            Werknemers besteden gemiddeld tot 40% van hun tijd aan repetitief werk (McKinsey). Schuif hieronder en zie wat dat jou kost.
          </p>
        </div>

        {/* Calculator card */}
        <div
          className="rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-[1.1fr_1fr]"
          style={{
            background: "rgba(255,255,255,0.96)",
            boxShadow: "0 8px 40px rgba(110,173,212,0.16), 0 2px 6px rgba(0,0,0,0.05)",
            border: "1px solid rgba(110,173,212,0.18)",
          }}
        >
          {/* Inputs */}
          <div className="p-8 md:p-10">
            {/* Team size */}
            <div className="mb-10">
              <div className="flex items-baseline justify-between mb-3">
                <label htmlFor="team" className="text-sm font-semibold text-gray-700">Teamgrootte</label>
                <span className="text-2xl font-bold" style={{ fontFamily: "'Sora', sans-serif", color: "#4A8EBB" }}>
                  {team} {team === 1 ? "persoon" : "mensen"}
                </span>
              </div>
              <input
                id="team"
                type="range"
                min={1}
                max={50}
                value={team}
                onChange={(e) => setTeam(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer accent-brand-400"
                style={{ background: `linear-gradient(90deg, #6EADD4 ${((team - 1) / 49) * 100}%, #e2e8f0 ${((team - 1) / 49) * 100}%)` }}
              />
              <div className="flex justify-between text-[11px] text-gray-400 mt-2">
                <span>1</span>
                <span>50+</span>
              </div>
            </div>

            {/* Hours per person */}
            <div>
              <div className="flex items-baseline justify-between mb-3">
                <label htmlFor="hours" className="text-sm font-semibold text-gray-700">Uur repetitief werk p.p. / week</label>
                <span className="text-2xl font-bold" style={{ fontFamily: "'Sora', sans-serif", color: "#4A8EBB" }}>
                  {hoursPP} uur
                </span>
              </div>
              <input
                id="hours"
                type="range"
                min={2}
                max={20}
                value={hoursPP}
                onChange={(e) => setHoursPP(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer accent-brand-400"
                style={{ background: `linear-gradient(90deg, #6EADD4 ${((hoursPP - 2) / 18) * 100}%, #e2e8f0 ${((hoursPP - 2) / 18) * 100}%)` }}
              />
              <div className="flex justify-between text-[11px] text-gray-400 mt-2">
                <span>2</span>
                <span>20</span>
              </div>
            </div>
          </div>

          {/* Results */}
          <div
            className="p-8 md:p-10 flex flex-col justify-center relative overflow-hidden"
            style={{ background: "linear-gradient(150deg, #4A8EBB 0%, #2A5E83 100%)" }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse 70% 50% at 100% 0%, rgba(255,255,255,0.10) 0%, transparent 60%)" }}
            />
            <div className="relative">
              <div className="text-[11px] font-semibold tracking-wider uppercase text-white/60 mb-1">Jouw tijdlek</div>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-5xl font-bold text-white tracking-[-0.03em]" style={{ fontFamily: "'Sora', sans-serif" }}>
                  tot {hoursPerWeek}
                </span>
                <span className="text-lg font-medium text-white/70">uur / week</span>
              </div>

              <div className="space-y-4 pt-6 border-t border-white/15">
                <div className="flex items-baseline justify-between">
                  <span className="text-sm text-white/70">Kost je per maand</span>
                  <span className="text-2xl font-bold text-white" style={{ fontFamily: "'Sora', sans-serif" }}>tot {euro(perMonth)}</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="text-sm text-white/70">Aan capaciteit</span>
                  <span className="text-2xl font-bold text-white" style={{ fontFamily: "'Sora', sans-serif" }}>{ftes} fulltime kracht</span>
                </div>
              </div>

              <a
                href={CAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2.5 w-full px-6 py-3.5 rounded-full bg-white text-brand-700 font-semibold text-[15px] hover:bg-white/90 active:scale-[0.98] transition-all duration-150"
              >
                Meet je exacte tijdlek
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-gray-400 mt-5 max-w-xl mx-auto">
          Indicatie op basis van ~€31 per uur (fully-loaded). Je exacte tijdlek en besparing meten we zwart op wit in de gratis Tijdlek-scan.
        </p>
      </div>
    </section>
  );
}
