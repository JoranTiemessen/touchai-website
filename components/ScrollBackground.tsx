"use client";

import { useEffect, useRef } from "react";

export default function ScrollBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animId: number;
    let startTime = performance.now();

    const animate = (now: number) => {
      const t = (now - startTime) / 1000; // seconds
      const y = window.scrollY;
      const el = containerRef.current;
      if (!el) { animId = requestAnimationFrame(animate); return; }

      const orbs = el.querySelectorAll<HTMLDivElement>("[data-orb]");

      orbs.forEach((orb) => {
        const speed = parseFloat(orb.dataset.speed ?? "0.1");
        const swayX = parseFloat(orb.dataset.swayx ?? "0");
        const swayY = parseFloat(orb.dataset.swayyamp ?? "0");
        const phase = parseFloat(orb.dataset.phase ?? "0");
        const freq = parseFloat(orb.dataset.freq ?? "0.3");

        const scrollY = y * speed;
        const sx = swayX * Math.sin(t * freq + phase);
        const sy = swayY * Math.cos(t * freq * 0.7 + phase);

        orb.style.transform = `translate(${sx}px, ${scrollY + sy}px)`;
      });

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
    >
      {/* Large top-left primary orb */}
      <div
        data-orb
        data-speed="0.18"
        data-swayx="28"
        data-swayyamp="18"
        data-phase="0"
        data-freq="0.22"
        className="absolute"
        style={{
          top: "-18vh",
          left: "-12vw",
          width: "72vw",
          height: "72vw",
          maxWidth: 950,
          maxHeight: 950,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(110,173,212,0.26) 0%, rgba(110,173,212,0.10) 40%, transparent 70%)",
          willChange: "transform",
        }}
      />

      {/* Top-right orb — drifts up */}
      <div
        data-orb
        data-speed="-0.12"
        data-swayx="-24"
        data-swayyamp="20"
        data-phase="1.4"
        data-freq="0.18"
        className="absolute"
        style={{
          top: "8vh",
          right: "-14vw",
          width: "58vw",
          height: "58vw",
          maxWidth: 750,
          maxHeight: 750,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(159,202,227,0.22) 0%, rgba(110,173,212,0.08) 45%, transparent 70%)",
          willChange: "transform",
        }}
      />

      {/* Mid-left floating orb */}
      <div
        data-orb
        data-speed="0.14"
        data-swayx="40"
        data-swayyamp="25"
        data-phase="2.8"
        data-freq="0.25"
        className="absolute"
        style={{
          top: "52vh",
          left: "-22vw",
          width: "62vw",
          height: "62vw",
          maxWidth: 820,
          maxHeight: 820,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(110,173,212,0.20) 0%, rgba(110,173,212,0.06) 50%, transparent 70%)",
          willChange: "transform",
        }}
      />

      {/* Mid-right orb */}
      <div
        data-orb
        data-speed="-0.08"
        data-swayx="-30"
        data-swayyamp="22"
        data-phase="0.7"
        data-freq="0.20"
        className="absolute"
        style={{
          top: "80vh",
          right: "-12vw",
          width: "52vw",
          height: "52vw",
          maxWidth: 680,
          maxHeight: 680,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(74,142,187,0.18) 0%, rgba(110,173,212,0.06) 50%, transparent 70%)",
          willChange: "transform",
        }}
      />

      {/* Bottom-center orb */}
      <div
        data-orb
        data-speed="0.10"
        data-swayx="20"
        data-swayyamp="15"
        data-phase="1.9"
        data-freq="0.16"
        className="absolute"
        style={{
          top: "138vh",
          left: "18vw",
          width: "62vw",
          height: "62vw",
          maxWidth: 820,
          maxHeight: 820,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(110,173,212,0.16) 0%, rgba(159,202,227,0.06) 50%, transparent 70%)",
          willChange: "transform",
        }}
      />

      {/* Small accent orb — fast sway */}
      <div
        data-orb
        data-speed="0.22"
        data-swayx="50"
        data-swayyamp="30"
        data-phase="3.5"
        data-freq="0.35"
        className="absolute"
        style={{
          top: "35vh",
          left: "55vw",
          width: "30vw",
          height: "30vw",
          maxWidth: 420,
          maxHeight: 420,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(110,173,212,0.18) 0%, rgba(110,173,212,0.04) 60%, transparent 75%)",
          willChange: "transform",
        }}
      />

      {/* Extra deep-page orb */}
      <div
        data-orb
        data-speed="-0.06"
        data-swayx="-35"
        data-swayyamp="28"
        data-phase="4.2"
        data-freq="0.19"
        className="absolute"
        style={{
          top: "200vh",
          right: "5vw",
          width: "55vw",
          height: "55vw",
          maxWidth: 720,
          maxHeight: 720,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(159,202,227,0.15) 0%, rgba(110,173,212,0.05) 50%, transparent 70%)",
          willChange: "transform",
        }}
      />
    </div>
  );
}
