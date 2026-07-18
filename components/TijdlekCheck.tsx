"use client";

import { useState } from "react";

const CAL_URL = "https://calendar.app.google/7rRamUEnapLFZ2PS9";
const EUR_PER_HOUR = 31;
const WEEKS_PER_MONTH = 52 / 12;

const categories = [
  { key: "mail", label: "E-mail & klantvragen", agent: "Inbox-agent" },
  { key: "offertes", label: "Offertes opstellen", agent: "Offerte-agent" },
  { key: "admin", label: "Administratie & facturen", agent: "Administratie-agent" },
  { key: "meetings", label: "Meetings, planning & documenten", agent: "Assistent-agent" },
] as const;

const systemOptions = [
  "Gmail / Outlook",
  "WhatsApp",
  "CRM (HubSpot, Pipedrive…)",
  "Boekhoudpakket (Exact, Moneybird…)",
  "Agenda / planning",
  "Anders",
];

function euro(n: number) {
  return "€" + Math.round(n).toLocaleString("nl-NL");
}

function Slider({ value, min, max, onChange }: { value: number; min: number; max: number; onChange: (v: number) => void }) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <input
      type="range"
      min={min}
      max={max}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="roi-slider w-full"
      style={{ background: `linear-gradient(90deg, #4A8EBB ${pct}%, #E5E7EB ${pct}%)` }}
    />
  );
}

export default function TijdlekCheck() {
  const [step, setStep] = useState(0);
  const [team, setTeam] = useState(5);
  const [hours, setHours] = useState<Record<string, number>>({ mail: 4, offertes: 2, admin: 3, meetings: 2 });
  const [systems, setSystems] = useState<string[]>([]);
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const sumPP = Object.values(hours).reduce((a, b) => a + b, 0);
  const tijdlek = team * sumPP;
  const perMonth = Math.round(tijdlek * WEEKS_PER_MONTH * EUR_PER_HOUR);
  const ftes = (tijdlek / 40).toFixed(1).replace(".", ",");
  const biggest = categories.reduce((max, c) => (hours[c.key] > hours[max.key] ? c : max), categories[0]);

  const toggleSystem = (s: string) =>
    setSystems((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]));

  async function submit() {
    setSending(true);
    try {
      await fetch("/api/tijdlek-check", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, team, hours, systems, tijdlek, perMonth, ftes, grootsteLek: biggest.label }),
      });
    } catch {
      // negeer; toon toch bevestiging
    }
    setSent(true);
    setSending(false);
  }

  const inputSteps = 3;

  return (
    <section id="tijdlek-check" className="relative py-24 md:py-32 overflow-hidden" style={{ background: "#F7F6F3" }}>
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-xs font-bold tracking-[0.18em] uppercase mb-4" style={{ color: "#3474A0" }}>
            Gratis Tijdlek-check
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-5" style={{ fontFamily: "'Sora', sans-serif", color: "#0B1220" }}>
            Bereken je tijdlek in 30 seconden.
          </h2>
          <p className="text-lg text-gray-500 leading-[1.7]">
            Beantwoord 3 vragen en zie direct hoeveel tijd en geld er bij jou weglekt aan repetitief werk.
          </p>
        </div>

        {/* Card */}
        <div
          className="rounded-[28px] p-8 md:p-11"
          style={{ background: "#fff", border: "1px solid rgba(11,18,32,0.08)", boxShadow: "0 20px 60px rgba(11,18,32,0.10)" }}
        >
          {/* Progress (input steps only) */}
          {step < inputSteps && (
            <div className="mb-8">
              <div className="flex justify-between text-xs font-semibold text-gray-400 mb-2">
                <span>Stap {step + 1} van {inputSteps}</span>
              </div>
              <div className="h-1.5 rounded-full bg-gray-100 overflow-hidden">
                <div className="h-full rounded-full transition-all duration-300" style={{ width: `${((step + 1) / inputSteps) * 100}%`, background: "linear-gradient(90deg, #6EADD4, #4A8EBB)" }} />
              </div>
            </div>
          )}

          {/* Step 0: team */}
          {step === 0 && (
            <div>
              <label className="block text-lg font-bold mb-1" style={{ fontFamily: "'Sora', sans-serif", color: "#0B1220" }}>Hoe groot is je team?</label>
              <p className="text-sm text-gray-400 mb-7">Inclusief jijzelf en iedereen die meewerkt.</p>
              <div className="text-center mb-6">
                <span className="text-5xl font-bold" style={{ fontFamily: "'Sora', sans-serif", color: "#0B1220" }}>{team}</span>
                <span className="text-lg text-gray-400 ml-2">{team === 1 ? "persoon" : "mensen"}</span>
              </div>
              <Slider value={team} min={1} max={50} onChange={setTeam} />
              <div className="flex justify-between text-xs text-gray-400 mt-2.5"><span>1</span><span>50</span></div>
            </div>
          )}

          {/* Step 1: hours per category */}
          {step === 1 && (
            <div>
              <label className="block text-lg font-bold mb-1" style={{ fontFamily: "'Sora', sans-serif", color: "#0B1220" }}>Hoeveel uur per persoon per week?</label>
              <p className="text-sm text-gray-400 mb-7">Schat per onderdeel hoeveel tijd er weglekt aan repetitief werk.</p>
              <div className="space-y-6">
                {categories.map((c) => (
                  <div key={c.key}>
                    <div className="flex items-baseline justify-between mb-2.5">
                      <span className="text-[15px] font-semibold text-gray-800">{c.label}</span>
                      <span className="text-lg font-bold" style={{ fontFamily: "'Sora', sans-serif", color: "#0B1220" }}>{hours[c.key]} <span className="text-sm font-medium text-gray-400">uur</span></span>
                    </div>
                    <Slider value={hours[c.key]} min={0} max={10} onChange={(v) => setHours((h) => ({ ...h, [c.key]: v }))} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: systems */}
          {step === 2 && (
            <div>
              <label className="block text-lg font-bold mb-1" style={{ fontFamily: "'Sora', sans-serif", color: "#0B1220" }}>Welke systemen gebruik je?</label>
              <p className="text-sm text-gray-400 mb-7">Zo weten we waar we de agents op koppelen. Kies alles wat van toepassing is.</p>
              <div className="flex flex-wrap gap-2.5">
                {systemOptions.map((s) => {
                  const active = systems.includes(s);
                  return (
                    <button
                      key={s}
                      onClick={() => toggleSystem(s)}
                      className="px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-150"
                      style={active
                        ? { background: "linear-gradient(135deg, #4A8EBB 0%, #2A5E83 100%)", color: "#fff", border: "1px solid transparent" }
                        : { background: "#F7F6F3", color: "#475569", border: "1px solid rgba(11,18,32,0.08)" }}
                    >
                      {s}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step 3: result + email */}
          {step === 3 && (
            <div>
              <div className="relative rounded-2xl p-7 md:p-8 mb-6 overflow-hidden" style={{ background: "linear-gradient(155deg, #14263F 0%, #0A1220 100%)" }}>
                <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 50% at 100% 0%, rgba(74,142,187,0.16) 0%, transparent 60%)" }} />
                <div className="relative">
                  <div className="text-[11px] font-bold tracking-[0.18em] uppercase mb-5" style={{ color: "rgba(159,202,227,0.7)" }}>Jouw tijdlek</div>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div>
                      <div className="text-3xl md:text-4xl font-bold text-white tracking-[-0.02em]" style={{ fontFamily: "'Sora', sans-serif" }}>{tijdlek}<span className="text-lg text-white/50"> u</span></div>
                      <div className="text-xs text-white/55 mt-1">per week</div>
                    </div>
                    <div>
                      <div className="text-3xl md:text-4xl font-bold text-white tracking-[-0.02em]" style={{ fontFamily: "'Sora', sans-serif" }}>{euro(perMonth)}</div>
                      <div className="text-xs text-white/55 mt-1">per maand</div>
                    </div>
                    <div>
                      <div className="text-3xl md:text-4xl font-bold text-white tracking-[-0.02em]" style={{ fontFamily: "'Sora', sans-serif" }}>{ftes}</div>
                      <div className="text-xs text-white/55 mt-1">fulltime kracht</div>
                    </div>
                  </div>
                  <div className="rounded-xl px-4 py-3 text-sm" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)", color: "rgba(255,255,255,0.8)" }}>
                    Je grootste lek zit in <span className="font-bold text-white">{biggest.label.toLowerCase()}</span>. Dat lost onze <span className="font-bold" style={{ color: "#9FCAE3" }}>{biggest.agent}</span> op.
                  </div>
                </div>
              </div>

              {!sent ? (
                <div>
                  <p className="text-sm text-gray-500 mb-3">Ontvang je volledige tijdlek-rapport per mail en plan je gratis Tijdlek-scan.</p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jouw@bedrijf.nl"
                      className="flex-1 px-5 py-3.5 rounded-full text-[15px] outline-none"
                      style={{ background: "#F7F6F3", border: "1px solid rgba(11,18,32,0.10)" }}
                    />
                    <button
                      onClick={submit}
                      disabled={!email.includes("@") || sending}
                      className="px-6 py-3.5 rounded-full text-white font-semibold text-[15px] disabled:opacity-50 transition-opacity"
                      style={{ background: "linear-gradient(135deg, #6EADD4 0%, #4A8EBB 100%)", boxShadow: "0 4px 14px rgba(110,173,212,0.4)" }}
                    >
                      {sending ? "Versturen…" : "Stuur mijn rapport"}
                    </button>
                  </div>
                  <p className="text-xs text-gray-400 mt-3">Indicatie op basis van ~€31 per uur fully-loaded. Geen spam, je kunt je altijd uitschrijven.</p>
                </div>
              ) : (
                <div className="text-center py-2">
                  <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: "rgba(44,143,94,0.12)" }}>
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" style={{ color: "#2C8F5E" }}><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Sora', sans-serif", color: "#0B1220" }}>Check je mail</h3>
                  <p className="text-sm text-gray-500 mb-6 max-w-md mx-auto">Je rapport is onderweg. Plan meteen je gratis Tijdlek-scan, dan meten we je exacte lek zwart op wit.</p>
                  <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-white font-semibold text-[15px]" style={{ background: "linear-gradient(135deg, #6EADD4 0%, #4A8EBB 100%)", boxShadow: "0 6px 20px rgba(110,173,212,0.40)" }}>
                    Plan de gratis Tijdlek-scan
                    <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </a>
                </div>
              )}
            </div>
          )}

          {/* Nav buttons (not on result-after-sent) */}
          {!(step === 3 && sent) && (
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={() => setStep((s) => Math.max(0, s - 1))}
                className={`text-sm font-semibold text-gray-400 hover:text-gray-700 transition-colors ${step === 0 ? "invisible" : ""}`}
              >
                ← Terug
              </button>
              {step < inputSteps && (
                <button
                  onClick={() => setStep((s) => s + 1)}
                  className="px-7 py-3 rounded-full text-white font-semibold text-[15px]"
                  style={{ background: "linear-gradient(135deg, #6EADD4 0%, #4A8EBB 100%)", boxShadow: "0 4px 14px rgba(110,173,212,0.4)" }}
                >
                  {step === inputSteps - 1 ? "Bekijk mijn tijdlek" : "Volgende"}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
