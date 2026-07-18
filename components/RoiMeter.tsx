"use client";

import { useState } from "react";

const CAL_URL = "https://calendar.app.google/7rRamUEnapLFZ2PS9";

const EUR_PER_HOUR = 31; // fully-loaded
const WEEKS_PER_MONTH = 52 / 12;

function euro(n: number) {
  return "€" + Math.round(n).toLocaleString("nl-NL");
}

export default function RoiMeter() {
  const [team, setTeam] = useState(5);
  const [hoursPP, setHoursPP] = useState(8);

  const hoursPerWeek = team * hoursPP;
  const perMonth = Math.round(hoursPerWeek * WEEKS_PER_MONTH * EUR_PER_HOUR);
  const ftes = (hoursPerWeek / 40).toFixed(1).replace(".", ",");

  const teamPct = ((team - 1) / 49) * 100;
  const hoursPct = ((hoursPP - 2) / 18) * 100;

  return (
    <section
      id="roi"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "#F7F6F3" }}
    >
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-bold tracking-[0.18em] uppercase mb-4" style={{ color: "#3474A0" }}>
            ROI-meter
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-5"
            style={{ fontFamily: "'Sora', sans-serif", color: "#0B1220" }}
          >
            Bereken je tijdlek in seconden.
          </h2>
          <p className="text-lg text-gray-500 leading-[1.7]">
            Schuif je teamgrootte en het aantal uur repetitief werk per persoon. We rekenen het live door naar uren, kosten en capaciteit.
          </p>
        </div>

        {/* Card */}
        <div
          className="rounded-[28px] overflow-hidden grid grid-cols-1 lg:grid-cols-2"
          style={{ boxShadow: "0 20px 60px rgba(11,18,32,0.12), 0 2px 8px rgba(0,0,0,0.05)" }}
        >
          {/* Inputs */}
          <div className="bg-white p-8 md:p-11 flex flex-col justify-center">
            <div className="mb-9">
              <div className="flex items-baseline justify-between mb-4">
                <label htmlFor="team" className="text-[15px] font-semibold text-gray-800">Teamgrootte</label>
                <span style={{ fontFamily: "'Sora', sans-serif" }}>
                  <span className="text-2xl font-bold" style={{ color: "#0B1220" }}>{team}</span>
                  <span className="text-sm font-medium text-gray-400 ml-1.5">{team === 1 ? "medewerker" : "medewerkers"}</span>
                </span>
              </div>
              <input
                id="team" type="range" min={1} max={50} value={team}
                onChange={(e) => setTeam(Number(e.target.value))}
                className="roi-slider w-full"
                style={{ background: `linear-gradient(90deg, #4A8EBB ${teamPct}%, #E5E7EB ${teamPct}%)` }}
              />
              <div className="flex justify-between text-xs text-gray-400 mt-2.5">
                <span>1</span><span>50</span>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline justify-between mb-4">
                <label htmlFor="hours" className="text-[15px] font-semibold text-gray-800">Repetitief werk p.p. / week</label>
                <span style={{ fontFamily: "'Sora', sans-serif" }}>
                  <span className="text-2xl font-bold" style={{ color: "#0B1220" }}>{hoursPP}</span>
                  <span className="text-sm font-medium text-gray-400 ml-1.5">uur</span>
                </span>
              </div>
              <input
                id="hours" type="range" min={2} max={20} value={hoursPP}
                onChange={(e) => setHoursPP(Number(e.target.value))}
                className="roi-slider w-full"
                style={{ background: `linear-gradient(90deg, #4A8EBB ${hoursPct}%, #E5E7EB ${hoursPct}%)` }}
              />
              <div className="flex justify-between text-xs text-gray-400 mt-2.5">
                <span>2 u</span><span>20 u</span>
              </div>
            </div>

            <div className="rounded-2xl px-5 py-4 text-sm leading-[1.6]" style={{ background: "#F3F4F7", color: "#64748B" }}>
              Werknemers besteden gemiddeld tot 40% van hun tijd aan repetitief werk. <span className="text-gray-400">(McKinsey)</span>
            </div>
          </div>

          {/* Results (dark) */}
          <div className="relative p-8 md:p-11 flex flex-col justify-center" style={{ background: "linear-gradient(155deg, #14263F 0%, #0A1220 100%)" }}>
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse 80% 50% at 100% 0%, rgba(74,142,187,0.16) 0%, transparent 60%)" }}
            />
            <div className="relative">
              <div className="text-[11px] font-bold tracking-[0.18em] uppercase mb-6" style={{ color: "rgba(159,202,227,0.7)" }}>
                Jouw tijdlek
              </div>

              <div className="grid grid-cols-2 gap-6 mb-7">
                <div>
                  <div className="flex items-baseline" style={{ fontFamily: "'Sora', sans-serif" }}>
                    <span className="text-5xl md:text-6xl font-bold text-white tracking-[-0.03em]">{hoursPerWeek}</span>
                    <span className="text-xl font-semibold text-white/50 ml-1">u</span>
                  </div>
                  <div className="text-sm text-white/55 mt-1.5">tijdlek per week</div>
                </div>
                <div>
                  <div className="text-5xl md:text-6xl font-bold text-white tracking-[-0.03em]" style={{ fontFamily: "'Sora', sans-serif" }}>
                    {ftes}
                  </div>
                  <div className="text-sm text-white/55 mt-1.5">fulltime kracht aan capaciteit</div>
                </div>
              </div>

              <div className="rounded-2xl p-6 mb-6" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)" }}>
                <div className="text-sm text-white/60 mb-1">Kosten van dit tijdlek</div>
                <div className="flex items-baseline mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>
                  <span className="text-5xl md:text-6xl font-bold text-white tracking-[-0.03em]">{euro(perMonth)}</span>
                  <span className="text-lg font-medium text-white/45 ml-1">/maand</span>
                </div>
                <p className="text-xs text-white/40 leading-[1.6]">
                  Indicatie op basis van circa €31 per uur fully-loaded. De exacte tijdlek meten we in de Tijdlek-scan.
                </p>
              </div>

              <a
                href={CAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 w-full px-6 py-4 rounded-full bg-white font-semibold text-[15px] hover:bg-white/90 active:scale-[0.98] transition-all duration-150"
                style={{ color: "#0A1220" }}
              >
                Meet mijn echte tijdlek gratis
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
