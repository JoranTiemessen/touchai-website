"use client";

import { useState } from "react";

type Case = {
  /** Vul naam + site zodra de klant schriftelijk akkoord is. Leeg = anoniem tonen. */
  naam?: string;
  site?: string;
  klant: string;
  sector: string;
  markt: string;
  situatie: string;
  gebouwd: string[];
  bewezen: string;
  gevonden: string;
};

const cases: Case[] = [
  {
    klant: "Een vastgoedbeheerder",
    sector: "Beheer van vakantiewoningen",
    markt: "Nederland en Spanje",
    situatie:
      "Aanvragen kwamen binnen via het formulier op de site en werden met de hand overgezet. Offertes werden per stuk samengesteld, facturen maandelijks handmatig opgebouwd uit het boekingssysteem.",
    gebouwd: [
      "De keten van binnenkomende aanvraag tot verstuurde factuur: formulier naar het CRM met AI-extractie, offerte met dynamische prijslogica, digitale ondertekening en onboarding",
      "Boekingen die vanuit het reserveringssysteem doorlopen naar planning en facturatie",
      "Een outreach-agent over drie bronnen, met scoring, tekst in twee talen en opvolging op dag 2, 5 en 10",
      "Een content-agent die wekelijks een artikel publiceert en verspreidt, in beide talen",
    ],
    bewezen:
      "Op 5 augustus end-to-end op de live site: formulier ingezonden, deal aangemaakt in het CRM, offerte automatisch gegenereerd en verstuurd. Eén keten, zonder tussenkomst.",
    gevonden:
      "Twee identieke offertes naar dezelfde klant, doordat twee paden op dezelfde milliseconde startten. Opgelost door de paden twintig seconden uit elkaar te trekken, met een gemeten marge in plaats van een gok. En een node die in 25 van de 25 runs faalde zonder ooit rood te worden.",
  },
  {
    klant: "Een online opleider",
    sector: "Opleidingen",
    markt: "Nederland",
    situatie:
      "Nieuwe aanmeldingen kregen een reeks berichten over mail en WhatsApp, met wachtmomenten ertussen. Wie afhaakte of stopte, moest handmatig uit de reeks worden gehaald.",
    gebouwd: [
      "Nurture-ketens over mail en WhatsApp, met wachtmomenten en een uitstap per stap",
      "Een controle die vóór elke verzending opnieuw kijkt of iemand nog benaderd mag worden",
      "Een melding zodra een keten stilvalt, in plaats van alleen bij een foutmelding",
    ],
    bewezen:
      "Sinds de meldingslaag erop zit, is stilte niet langer van succes te onderscheiden. Elke onderbroken keten komt binnen als signaal.",
    gevonden:
      "Zevenentwintig ketens die in dertien dagen stilvielen zonder dat iemand het merkte. En een uitschrijving die nooit aankwam, omdat het WhatsApp-nummer bij een andere app hing: de controle stond op de juiste plek, maar het veld werd nooit gevuld.",
  },
  {
    klant: "Een payment provider",
    sector: "Betaaldiensten voor e-commerce",
    markt: "Nederland",
    situatie:
      "Afrekeningen van de partner kwamen binnen als bestanden die met de hand werden nagelopen. Verschillen tussen wat er hoorde binnen te komen en wat er stond, vielen pas op als iemand er gericht naar zocht.",
    gebouwd: [
      "Inlezen en uitsplitsen van de afrekeningen per transactietype",
      "Automatisch naast de eigen administratie leggen, met alleen de afwijkingen als uitkomst",
      "Een vaste rekenbasis, vastgelegd in plaats van in een los bestand",
    ],
    bewezen:
      "De controle draait op de echte afrekeningen en levert alleen de verschillen op. Wat klopt, komt niet meer op iemands bureau.",
    gevonden:
      "Een bestand met GOUDEN REFERENTIE in de naam dat optelde tot €1.154,80, terwijl de geldende basis over alle transactietypes op €1.572,77 uitkwam. De naam bleef gouden, de inhoud niet. Een referentiebestand veroudert stiller dan code.",
  },
  {
    klant: "Een notariskantoor",
    sector: "Protestakten en incasso",
    markt: "Brazilië",
    situatie:
      "Financiële documenten kwamen per mail binnen als PDF. Iemand las ze uit, hernoemde ze, archiveerde ze en zette de gegevens in een sheet. Elke dag opnieuw, in twee documenttypes.",
    gebouwd: [
      "Intake vanuit de mailbox, met AI-extractie van de gegevens uit de PDF",
      "Automatisch archiveren in Drive en wegschrijven in een controleerbaar logboek",
      "Een review-rij voor alles waar het model niet zeker van is, zodat een mens alleen de twijfelgevallen ziet",
      "Een dagelijkse samenvatting om 18:00 lokale tijd naar één ontvanger",
    ],
    bewezen:
      "Draait dagelijks op echte documenten, bediend door niet-technische medewerkers. De pilot is opgeleverd en betaald, het volledige traject loopt.",
    gevonden:
      "De dagelijkse samenvatting gaat ook uit als er nul openstaande items zijn. Dat is bewust: een stille digest is niet te onderscheiden van een kapotte workflow, en dan merkt niemand het als hij ermee stopt.",
  },
  {
    klant: "Een interieurbouwer",
    sector: "Interieur op maat",
    markt: "Nederland",
    situatie:
      "Aanvragen via de site kwamen binnen in de mailbox en werden met de hand opgevolgd. Voor twee merken naast elkaar, met elk hun eigen route en eigen toon.",
    gebouwd: [
      "Een lead-funnel per merk: formulier binnen, lead vastgelegd, interne melding en daarna automatisch een bericht naar de klant",
      "WhatsApp als kanaal, met een goedgekeurde template en een wachtmoment ertussen",
      "Twee volledig gescheiden pijplijnen, zodat het ene merk het andere niet kan omgooien",
    ],
    bewezen:
      "Beide merken draaien op hun eigen keten. Een aanvraag krijgt binnen een minuut een eerste reactie.",
    gevonden:
      "Telefoonnummers werden genormaliseerd met een reeks vervangregels achter elkaar. Bij een nummer in 0031-notatie sloegen er twee tegelijk toe en miste het resultaat een cijfer. Een keten van replaces is geen normalisatie, dat is een reeks aannames die elkaar in de rug schieten.",
  },
];

export default function Cases() {
  const [actief, setActief] = useState(0);
  const c = cases[actief];

  return (
    <section id="cases" className="relative py-24 md:py-32 overflow-hidden bg-white">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <div className="label-mono mb-4" style={{ color: "#3474A0" }}>Uit de praktijk</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-5" style={{ fontFamily: "'Sora', sans-serif", color: "#0B1220" }}>
            Wat er bij anderen draait.
          </h2>
          <p className="text-lg text-gray-500 leading-[1.7]">
            Vijf lopende opdrachten, met wat er is gebouwd én wat we onderweg tegenkwamen.
            Klantnamen laten we weg zolang daar afspraken over lopen.
          </p>
        </div>

        <div className="flex gap-2 mb-8 flex-wrap">
          {cases.map((x, i) => (
            <button
              key={x.klant}
              onClick={() => setActief(i)}
              className={`px-5 py-3 rounded-full text-[15px] font-semibold transition-colors duration-200 ${
                i === actief ? "bg-brand-500 text-white" : "bg-gray-100 text-gray-500 hover:text-gray-800"
              }`}
            >
              {x.klant}
            </button>
          ))}
        </div>

        <div className="card-elevated rounded-3xl p-7 md:p-10">
          <div className="flex flex-wrap gap-x-8 gap-y-2 pb-7 mb-7 border-b border-gray-100">
            {[["Klant", c.naam || c.klant], ["Sector", c.sector], ["Markt", c.markt]].map(([k, v]) => (
              <div key={k}>
                <div className="label-mono mb-1" style={{ color: "#8A94A6" }}>{k}</div>
                <div className="text-[16px] font-semibold text-gray-800">
                  {v}
                  {k === "Klant" && c.site && (
                    <a href={`https://${c.site}`} target="_blank" rel="noopener noreferrer" className="ml-2 font-normal link-underline" style={{ color: "#3474A0" }}>
                      {c.site}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
            <div>
              <div className="label-mono mb-3" style={{ color: "#8A94A6" }}>De situatie</div>
              <p className="text-[16px] text-gray-600 leading-[1.65]">{c.situatie}</p>

              <div className="label-mono mb-3 mt-8" style={{ color: "#8A94A6" }}>Wat er nu draait</div>
              <ul className="space-y-3">
                {c.gebouwd.map((g) => (
                  <li key={g} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full grid place-items-center shrink-0 mt-0.5" style={{ background: "rgba(110,173,212,0.16)" }}>
                      <svg className="w-3 h-3" viewBox="0 0 16 16" fill="none" style={{ color: "#2A5E83" }}>
                        <path d="M4 8l3 3 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="text-[16px] text-gray-600 leading-[1.6]">{g}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="rounded-2xl p-6" style={{ background: "rgba(110,173,212,0.09)", border: "1px solid rgba(110,173,212,0.26)" }}>
                <div className="label-mono mb-3" style={{ color: "#2A5E83" }}>Bewezen op echte input</div>
                <p className="text-[16px] text-gray-700 leading-[1.6]">{c.bewezen}</p>
              </div>

              <div className="rounded-2xl p-6 mt-5" style={{ background: "#F7F6F3", border: "1px solid rgba(11,18,32,0.08)" }}>
                <div className="label-mono mb-3" style={{ color: "#B4761F" }}>Wat we onderweg vonden</div>
                <p className="text-[16px] text-gray-600 leading-[1.6]">{c.gevonden}</p>
                <p className="text-[14px] text-gray-400 mt-4 pt-4 border-t border-gray-200">
                  Dit staat er niet om eerlijk te lijken. Het is de reden dat er bij ons monitoring
                  op zit: precies dit soort dingen vallen anders nooit op.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
