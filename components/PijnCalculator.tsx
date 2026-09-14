"use client";

import { useState } from "react";

const UURTARIEF = 55;

/* Rekent de pijn voor, niet de prijs. Stond eerder in de hero. */
export default function PijnCalculator() {
  const [keer, setKeer] = useState(20);
  const [min, setMin] = useState(20);
  const uurPerMaand = (keer * min * 52) / 12 / 60;
  const laag = Math.round((uurPerMaand * UURTARIEF * 0.75) / 100) * 100;
  const hoog = Math.round((uurPerMaand * UURTARIEF) / 100) * 100;
  const euro = (n: number) => "€" + n.toLocaleString("nl-NL");

  return (
    <div className="mt-8 rounded-3xl card-elevated p-7 md:p-9 max-w-3xl mx-auto">
      <div className="label-mono mb-5" style={{ color: "#3474A0" }}>
        Wat kost je drukste proces nu?
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="flex items-baseline justify-between mb-2">
            <label htmlFor="keer" className="text-[15px] text-gray-600">Hoe vaak per week?</label>
            <span className="tabular text-[15px] font-bold text-gray-900">{keer}×</span>
          </div>
          <input id="keer" type="range" min={5} max={100} value={keer}
            onChange={(e) => setKeer(Number(e.target.value))}
            className="roi-slider w-full"
            style={{ background: `linear-gradient(90deg,#4A8EBB ${((keer - 5) / 95) * 100}%,#E5E7EB ${((keer - 5) / 95) * 100}%)` }} />
        </div>
        <div>
          <div className="flex items-baseline justify-between mb-2">
            <label htmlFor="min" className="text-[15px] text-gray-600">Hoeveel minuten per keer?</label>
            <span className="tabular text-[15px] font-bold text-gray-900">{min} min</span>
          </div>
          <input id="min" type="range" min={5} max={90} value={min}
            onChange={(e) => setMin(Number(e.target.value))}
            className="roi-slider w-full"
            style={{ background: `linear-gradient(90deg,#4A8EBB ${((min - 5) / 85) * 100}%,#E5E7EB ${((min - 5) / 85) * 100}%)` }} />
        </div>
      </div>

      <div className="mt-7 pt-6 border-t border-gray-100">
        <div className="tabular text-3xl md:text-4xl font-bold tracking-[-0.02em]" style={{ color: "#2A5E83", fontFamily: "'Inter Tight', sans-serif" }}>
          {euro(laag)} tot {euro(hoog)}
        </div>
        <div className="text-[13px] text-gray-400 mt-1">
          per maand aan loon, bij €{UURTARIEF} per uur belast · {Math.round(uurPerMaand)} uur
        </div>
      </div>
    </div>
  );
}
