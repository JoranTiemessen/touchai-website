"use client";

import { useEffect, useRef, useState } from "react";

/* Zelfde webhook en payload als de advertentiepagina, zodat n8n één intake houdt. */
const WEBHOOK_URL = "https://n8n.srv1592480.hstgr.cloud/webhook/touchai-lead-intake";
const BOOKING_URL = "https://calendar.app.google/7rRamUEnapLFZ2PS9";

const QUESTIONS = 5; // paneel 0 tot en met 4
const CONFIRM = 5; // bevestiging plus agenda
const MIN_PROCESSEN = 4; // de bar waarop we meten, niet waarop we blokkeren
const STAP_NAAM = ["naam", "email", "medewerkers", "werk", "bedrijf", "bevestiging"];

const OMVANG = [
  { label: "1, alleen ik", ok: false },
  { label: "2 tot 9", ok: false },
  { label: "10 tot 25", ok: true },
  { label: "26 tot 100", ok: true },
  { label: "meer dan 100", ok: true },
];

const CHIPS = [
  "Aanvragen overtypen",
  "Offertes samenstellen",
  "Leads opvolgen",
  "Factureren",
  "Achter betalingen aan",
  "Bonnen controleren",
  "Planning rondbellen",
];

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

type Omvang = (typeof OMVANG)[number];
type Velden = { naam: string; email: string; werk: string; bedrijf: string; telefoon: string };

function utm(): Record<string, string> {
  const p = new URLSearchParams(window.location.search);
  const o: Record<string, string> = {};
  ["utm_source", "utm_medium", "utm_campaign", "utm_adset", "utm_ad", "utm_term", "utm_content"].forEach((k) => {
    const v = p.get(k);
    if (v) o[k] = v;
  });
  return o;
}

function post(body: object, keepalive = true) {
  return fetch(WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    keepalive,
    body: JSON.stringify(body),
  });
}

// Lead-score in plaats van een ja-nee-vlag: gaat mee naar n8n en als parameter naar Meta.
function leadScore(omvang: string, aantalProcessen: number, tekstLengte: number) {
  let pm = 0;
  if (omvang === "meer dan 100" || omvang === "26 tot 100") pm = 4;
  else if (omvang === "10 tot 25") pm = 3;
  else if (omvang === "2 tot 9") pm = 1;

  let pp = 0;
  if (aantalProcessen >= 6 || tekstLengte >= 160) pp = 4;
  else if (aantalProcessen >= 4 || tekstLengte >= 90) pp = 3;
  else if (aantalProcessen >= 2 || tekstLengte >= 40) pp = 1;

  const score = pm + pp;
  const tier = score >= 7 ? "A" : score >= 5 ? "B" : score >= 3 ? "C" : "D";
  return { score, tier };
}

// Haalt een snelkeuze weer uit het open veld als hij wordt uitgezet.
function haalWeg(tekst: string, label: string) {
  const delen = tekst.split(",").map((s) => s.trim());
  const i = delen.findIndex((s) => s.toLowerCase() === label.toLowerCase());
  if (i === -1) return tekst;
  delen.splice(i, 1);
  const rest = delen.filter(Boolean).join(", ");
  return rest ? rest.charAt(0).toUpperCase() + rest.slice(1) : "";
}

const inputBase =
  "w-full px-4 py-3.5 rounded-xl border bg-white text-[16px] text-gray-900 placeholder:text-gray-400 outline-none transition-[border-color,box-shadow] duration-150 focus:border-brand-500 focus:shadow-[0_0_0_3px_rgba(110,173,212,0.22)]";
const knop =
  "btn-primary w-full mt-5 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-brand-600 text-white font-semibold text-[16px] hover:bg-brand-700 active:scale-[0.98] transition-[background-color,transform] duration-150 disabled:opacity-60";
const vraag = "text-[20px] font-bold tracking-[-0.02em] text-gray-900";
const notitie = "text-[14.5px] text-gray-500 mt-1 mb-4 leading-[1.5]";
const label = "block text-[13px] font-semibold text-gray-700 mb-1.5";

export default function LeadForm() {
  const [cur, setCur] = useState(0);
  const [v, setV] = useState<Velden>({ naam: "", email: "", werk: "", bedrijf: "", telefoon: "" });
  const [omvang, setOmvang] = useState<Omvang | null>(null);
  const [processen, setProcessen] = useState<string[]>([]);
  const [fout, setFout] = useState("");
  const [foutVeld, setFoutVeld] = useState<string | null>(null);
  const [bezig, setBezig] = useState(false);
  const [boekUrl, setBoekUrl] = useState(BOOKING_URL);

  const honeypot = useRef<HTMLInputElement>(null);
  const stapRef = useRef<HTMLDivElement>(null);
  const sessie = useRef("");
  const gezien = useRef<Record<string, boolean>>({});
  const partialSent = useRef(false);
  const leadSent = useRef(false);
  const eersteRender = useRef(true);

  function sessieId() {
    if (sessie.current) return sessie.current;
    try {
      const k = sessionStorage.getItem("tai_sid");
      sessie.current = k || Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 10);
      if (!k) sessionStorage.setItem("tai_sid", sessie.current);
    } catch {
      sessie.current = Date.now().toString(36);
    }
    return sessie.current;
  }

  // Elke stap één keer loggen, zodat je in n8n ziet bij welke vraag de funnel lekt.
  function trackStap(i: number) {
    const naam = STAP_NAAM[i];
    if (gezien.current[naam]) return;
    gezien.current[naam] = true;
    post({
      stage: "step",
      stap: naam,
      stap_nr: i + 1,
      sessie: sessieId(),
      ts: new Date().toISOString(),
      utm: utm(),
      page: window.location.href,
    }).catch(() => {});
  }

  useEffect(() => {
    // Stap 1 telt pas bij de eerste klik in het formulier: op de homepage ziet iedere
    // bezoeker het formulier, en een paginaweergave is nog geen funnel-start.
    if (eersteRender.current) {
      eersteRender.current = false;
      return;
    }
    trackStap(cur);
    const el = stapRef.current?.querySelector<HTMLInputElement | HTMLTextAreaElement>("input, textarea");
    if (el) setTimeout(() => el.focus({ preventScroll: true }), 60);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cur]);

  function zet(veld: keyof Velden, waarde: string) {
    setV((prev) => ({ ...prev, [veld]: waarde }));
    if (foutVeld === veld) {
      setFout("");
      setFoutVeld(null);
    }
  }

  function meld(veld: string, tekst: string) {
    setFout(tekst);
    setFoutVeld(veld);
    document.getElementById(`lf-${veld}`)?.focus();
    return false;
  }

  function valideer() {
    const eisen: Record<number, (keyof Velden)[]> = { 0: ["naam"], 1: ["email"], 3: ["werk"], 4: ["bedrijf"] };
    for (const k of eisen[cur] || []) {
      const waarde = v[k].trim();
      if (!waarde) {
        return meld(k, k === "werk" ? "Schrijf kort op welk werk elke week terugkomt." : "Vul dit veld even in om verder te gaan.");
      }
      if (k === "email" && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(waarde)) {
        return meld(k, "Controleer je e-mailadres, daar lijkt iets niet te kloppen.");
      }
    }
    if (cur === 4 && v.telefoon.trim() && v.telefoon.replace(/\D/g, "").length < 9) {
      return meld("telefoon", "Dat telefoonnummer lijkt niet compleet. Laat hem leeg als je liever niet gebeld wordt.");
    }
    setFout("");
    setFoutVeld(null);
    return true;
  }

  function verzamel(o: Omvang | null) {
    const werk = v.werk.trim();
    const sc = leadScore(o?.label ?? "", processen.length, werk.length);
    return {
      naam: v.naam.trim(),
      email: v.email.trim(),
      werk,
      bedrijf: v.bedrijf.trim(),
      telefoon: v.telefoon.trim(),
      aantal_mensen: o?.label,
      aantal_mensen_ok: o ? o.ok : undefined,
      processen,
      aantal_processen: processen.length,
      score: sc.score,
      tier: sc.tier,
      sessie: sessieId(),
    };
  }

  function verder(o: Omvang | null = omvang) {
    const d = verzamel(o);
    // Partial lead zodra naam en e-mail binnen zijn, ook als iemand daarna afhaakt.
    if (cur >= 1 && !partialSent.current && d.naam && d.email) {
      partialSent.current = true;
      post({ ...d, stage: "partial", utm: utm(), page: window.location.href }).catch(() => {});
    }
    if (cur < QUESTIONS - 1) setCur(cur + 1);
    else afronden(d);
  }

  async function afronden(d: ReturnType<typeof verzamel>) {
    const genoeg = processen.length >= MIN_PROCESSEN || d.werk.length >= 60;
    const gekwalificeerd = d.aantal_mensen_ok === true && genoeg;

    // UTM's mee naar de boeking, zodat in de agenda te zien is welke advertentie het gesprek opleverde.
    const q = new URLSearchParams(utm()).toString();
    setBoekUrl(BOOKING_URL + (q ? "?" + q : ""));

    if (honeypot.current?.value) {
      setCur(CONFIRM);
      return;
    }

    if (window.fbq && !leadSent.current) {
      try {
        window.fbq("track", "Lead", { gekwalificeerd, tier: d.tier, score: d.score, aantal_processen: processen.length });
        leadSent.current = true;
      } catch {}
    }

    setBezig(true);
    try {
      await post({ ...d, gekwalificeerd, stage: "complete", utm: utm(), page: window.location.href }, false);
    } catch {}
    setBezig(false);
    setCur(CONFIRM);

    // Optimalisatie-event: alleen voor wie aan de bar voldoet, anders traint Meta op leads die nooit kopen.
    if (window.fbq && gekwalificeerd) {
      try {
        window.fbq("track", "Schedule", { tier: d.tier, score: d.score, aantal_processen: processen.length });
      } catch {}
    }
  }

  function volgende() {
    if (valideer()) verder();
  }

  function enter(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      volgende();
    }
  }

  function kiesOmvang(o: Omvang) {
    setOmvang(o);
    verder(o);
  }

  function toggleChip(chip: string) {
    setFout("");
    setFoutVeld(null);
    if (processen.includes(chip)) {
      setProcessen(processen.filter((p) => p !== chip));
      setV((prev) => ({ ...prev, werk: haalWeg(prev.werk, chip) }));
    } else {
      setProcessen([...processen, chip]);
      setV((prev) => {
        const h = prev.werk.trim();
        return { ...prev, werk: h ? h.replace(/[.\s]+$/, "") + ", " + chip.toLowerCase() : chip };
      });
    }
  }

  const rand = (veld: string) => (foutVeld === veld ? "border-[#C2413F]" : "border-gray-200");
  const klaar = cur === CONFIRM;
  const voornaam = v.naam.trim().split(" ")[0];

  return (
    <div id="gesprek" className="card-floating rounded-3xl p-6 sm:p-8 scroll-mt-28">
      <p className="text-[22px] font-bold tracking-[-0.025em] text-gray-900" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
        Plan het oriëntatiegesprek
      </p>
      <p className="text-[15px] text-gray-500 mt-1 mb-6">
        Vijf korte vragen. Daarna kies je direct een moment, maximaal zestig minuten.
      </p>

      <div className="h-[3px] rounded-full bg-brand-50 overflow-hidden">
        <div
          className="h-full bg-brand-500 transition-[width] duration-300"
          style={{ width: `${klaar ? 100 : ((cur + 1) / QUESTIONS) * 100}%` }}
        />
      </div>
      <p className="label-mono text-right mt-2.5 mb-6" style={{ color: "#8A94A6" }}>
        {klaar ? "Klaar" : `Stap ${cur + 1} van ${QUESTIONS}`}
      </p>

      <form noValidate autoComplete="on" onSubmit={(e) => e.preventDefault()} onFocusCapture={() => trackStap(0)}>
        <input
          ref={honeypot}
          type="text"
          name="company_website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute -left-[9999px] w-px h-px"
        />

        <div ref={stapRef}>
          {cur === 0 && (
            <div>
              <h3 className={vraag}>Wat is je naam?</h3>
              <div className="mt-4">
                <label className={label} htmlFor="lf-naam">Voor- en achternaam</label>
                <input id="lf-naam" name="naam" type="text" autoComplete="name" value={v.naam}
                  onChange={(e) => zet("naam", e.target.value)} onKeyDown={enter}
                  placeholder="Bijvoorbeeld Sanne de Vries" className={`${inputBase} ${rand("naam")}`} />
              </div>
              <button type="button" className={knop} onClick={volgende}>Volgende</button>
            </div>
          )}

          {cur === 1 && (
            <div>
              <h3 className={vraag}>Waar mogen we het naartoe sturen?</h3>
              <p className={notitie}>Je krijgt de bevestiging en de agenda-uitnodiging op dit adres.</p>
              <label className={label} htmlFor="lf-email">E-mailadres</label>
              <input id="lf-email" name="email" type="email" autoComplete="email" value={v.email}
                onChange={(e) => zet("email", e.target.value)} onKeyDown={enter}
                placeholder="jij@bedrijf.nl" className={`${inputBase} ${rand("email")}`} />
              <button type="button" className={knop} onClick={volgende}>Volgende</button>
            </div>
          )}

          {cur === 2 && (
            <div>
              <h3 className={vraag}>Hoeveel mensen werken er?</h3>
              <p className={notitie}>Eén klik, dan ben je door.</p>
              <div className="flex flex-col gap-2">
                {OMVANG.map((o) => {
                  const sel = omvang?.label === o.label;
                  return (
                    <button key={o.label} type="button" onClick={() => kiesOmvang(o)} aria-pressed={sel}
                      className={`w-full flex items-center justify-between gap-3 text-left px-4 py-3.5 rounded-xl border text-[15.5px] transition-colors duration-150 ${
                        sel ? "border-brand-500 bg-brand-50 font-semibold text-gray-900" : "border-gray-200 bg-white text-gray-800 hover:border-brand-500 hover:bg-brand-50"
                      }`}>
                      {o.label}
                      <span aria-hidden="true" className={sel ? "text-brand-600" : "text-gray-300"}>›</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {cur === 3 && (
            <div>
              <h3 className={vraag}>Welk werk komt bij jullie elke week terug?</h3>
              <p className={notitie}>Tik aan wat past, en vul aan in je eigen woorden.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {CHIPS.map((c) => {
                  const sel = processen.includes(c);
                  return (
                    <button key={c} type="button" onClick={() => toggleChip(c)} aria-pressed={sel}
                      className={`px-3.5 py-2 rounded-full border text-[14px] transition-colors duration-150 ${
                        sel ? "bg-brand-50 border-brand-500 text-brand-700 font-semibold" : "bg-white border-gray-200 text-gray-600 hover:border-brand-500 hover:text-brand-600"
                      }`}>
                      {c}
                    </button>
                  );
                })}
              </div>
              <label className={label} htmlFor="lf-werk">In je eigen woorden</label>
              <textarea id="lf-werk" name="werk" value={v.werk} onChange={(e) => zet("werk", e.target.value)}
                placeholder="Bijvoorbeeld: elke week zetten we een stuk of dertig aanvragen met de hand over, en de facturatie doen we aan het eind van de maand handmatig."
                className={`${inputBase} ${rand("werk")} min-h-[112px] resize-y leading-[1.5]`} />
              <button type="button" className={knop} onClick={volgende}>Volgende</button>
            </div>
          )}

          {cur === 4 && (
            <div>
              <h3 className={vraag}>Laatste vraag.</h3>
              <p className={notitie}>Dan kijken we vast wat je nu draait, zodat we het gesprek niet aan uitleg kwijt zijn.</p>
              <label className={label} htmlFor="lf-bedrijf">Bedrijfsnaam en website</label>
              <input id="lf-bedrijf" name="bedrijf" type="text" autoComplete="organization" value={v.bedrijf}
                onChange={(e) => zet("bedrijf", e.target.value)} onKeyDown={enter}
                placeholder="Bijvoorbeeld De Vries Installatie, devries.nl" className={`${inputBase} ${rand("bedrijf")}`} />
              <div className="mt-4">
                <label className={label} htmlFor="lf-telefoon">
                  Telefoonnummer <span className="font-normal text-gray-400">optioneel</span>
                </label>
                <input id="lf-telefoon" name="telefoon" type="tel" autoComplete="tel" value={v.telefoon}
                  onChange={(e) => zet("telefoon", e.target.value)} onKeyDown={enter}
                  placeholder="06 12 34 56 78" className={`${inputBase} ${rand("telefoon")}`} />
              </div>
              <button type="button" className={knop} onClick={volgende} disabled={bezig}>
                {bezig ? "Even geduld" : "Naar de agenda"}
              </button>
            </div>
          )}

          {klaar && (
            <div>
              <div className="w-11 h-11 rounded-full grid place-items-center text-white text-xl mb-5" style={{ background: "#2C8F5E" }} aria-hidden="true">
                ✓
              </div>
              <h3 className="text-[22px] font-bold tracking-[-0.025em] text-gray-900">
                Helder{voornaam ? `, ${voornaam}` : ""}. Kies nu je moment.
              </h3>
              <p className="text-[16px] text-gray-600 mt-3 leading-[1.6]">
                We lopen samen je keten van aanvraag tot betaling door en zetten op papier wat eruit kan.
              </p>
              <p className="text-[14.5px] text-gray-500 mt-4 pl-3.5 py-1 leading-[1.55]" style={{ borderLeft: "2px solid #4A8EBB" }}>
                De bevestiging staat zo vanzelf in je inbox. Precies het soort systeem dat we ook voor jou bouwen.
              </p>
              <a href={boekUrl} target="_blank" rel="noopener noreferrer" className={`${knop} py-4 text-[17px]`}>
                Kies je moment in de agenda
              </a>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between mt-4 min-h-[20px]">
          {cur > 0 && !klaar ? (
            <button type="button" onClick={() => { setCur(cur - 1); setFout(""); setFoutVeld(null); }}
              className="text-[14px] text-gray-500 hover:text-gray-900 transition-colors duration-150">
              ‹ Terug
            </button>
          ) : <span />}
        </div>

        <p className="text-[13.5px] mt-2 min-h-[18px]" style={{ color: "#C2413F" }} role="status" aria-live="polite">
          {fout}
        </p>

        <p className="text-[12.5px] text-gray-400 mt-2 leading-[1.5]">
          Geen verplichtingen en geen verkooppraatje. Je praat met een van de twee oprichters, niet met een
          salesteam. Wat je invult bewaren we vanaf de tweede stap, ook als je niet afrondt. Zie het{" "}
          <a href="/privacy" className="underline hover:text-gray-600">privacybeleid</a>.
        </p>
      </form>
    </div>
  );
}
