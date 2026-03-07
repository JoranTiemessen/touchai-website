"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "About", href: "#about" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-brand-100 shadow-brand-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 md:h-28">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative w-20 h-20 flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Touch AI Agency"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span
                className="text-2xl font-bold text-gray-900 tracking-[-0.02em]"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                TOUCH AI
              </span>
              <span
                className="text-sm font-semibold text-brand-400 tracking-[0.18em] uppercase"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                Agency
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="link-underline text-sm font-medium text-gray-600 hover:text-brand-400 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <a
              href="https://calendar.app.google/7rRamUEnapLFZ2PS9"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-400 text-white text-sm font-semibold hover:bg-brand-500 active:bg-brand-600 transition-colors duration-200"
              style={{ boxShadow: "0 4px 14px rgba(110,173,212,0.4)" }}
            >
              Book Free Audit
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-brand-400 hover:bg-brand-50 transition-colors duration-200 focus-visible:outline-brand-400 focus-visible:outline-2"
            aria-label="Toggle menu"
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
        >
          <div className="flex flex-col gap-1 pt-2 border-t border-brand-100">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-3 py-2.5 text-sm font-medium text-gray-600 hover:text-brand-400 hover:bg-brand-50 rounded-lg transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://calendar.app.google/7rRamUEnapLFZ2PS9"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-2 btn-primary text-center px-5 py-2.5 rounded-full bg-brand-400 text-white text-sm font-semibold hover:bg-brand-500 transition-colors duration-200"
            >
              Book Free Audit
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
