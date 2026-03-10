"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Funciones", href: "#funciones" },
    { label: "C\u00f3mo funciona", href: "#como-funciona" },
    { label: "Resultados", href: "#resultados" },
    { label: "Precios", href: "#precios" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-white/95 backdrop-blur-xl border-b border-gray-200/60"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-1.5">
            <div className="w-7 h-7 rounded-lg bg-brand-400 flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4">
                <path d="M10 3l6 4v6l-6 4-6-4V7l6-4z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
                <circle cx="10" cy="10" r="2.5" fill="white" opacity="0.9" />
              </svg>
            </div>
            <span
              className="text-[15px] font-bold text-gray-900 tracking-[-0.01em]"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              Smart Promo
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[13px] font-medium text-gray-500 hover:text-gray-900 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <a
              href="#precios"
              className="btn-primary inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-400 text-white text-[13px] font-medium hover:bg-brand-500 active:scale-[0.98] transition-all duration-150"
            >
              Empieza gratis
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-brand-400"
            aria-label="Abrir men\u00fa"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span
                className={`block h-0.5 bg-current transition-transform duration-300 origin-center ${
                  menuOpen ? "rotate-45 translate-y-[7.5px]" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-current transition-opacity duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-current transition-transform duration-300 origin-center ${
                  menuOpen ? "-rotate-45 -translate-y-[7.5px]" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-72 pb-4" : "max-h-0"
          }`}
          style={{ background: "white" }}
        >
          <div className="flex flex-col gap-1 pt-2 border-t border-gray-100">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-3 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#precios"
              onClick={() => setMenuOpen(false)}
              className="mt-2 text-center px-4 py-2.5 rounded-lg bg-brand-400 text-white text-sm font-medium hover:bg-brand-500 transition-colors duration-200"
            >
              Empieza gratis
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
