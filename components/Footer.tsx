import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-950 text-white overflow-hidden">
      {/* Top accent line */}
      <div
        className="h-px w-full"
        style={{ background: "linear-gradient(90deg, transparent, rgba(110,173,212,0.5), transparent)" }}
      />

      {/* Background glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 60% at 50% 0%, rgba(110,173,212,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-10 h-10">
                <Image
                  src="/logo.png"
                  alt="Touch AI Agency"
                  fill
                  className="object-contain brightness-0 invert opacity-90"
                />
              </div>
              <span
                className="font-bold text-[15px] tracking-wide text-white leading-tight"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                TOUCH AI<br />
                <span className="text-brand-300 font-normal text-[11px] tracking-[0.12em] uppercase">Agency</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-[1.7] max-w-xs mb-6">
              We build AI systems that automate workflows, generate leads, and save
              businesses hundreds of hours every month.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/joran-tiemessen-729569162"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-400 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-brand-400"
                style={{ background: "rgba(255,255,255,0.06)" }}
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Nav columns */}
          <div>
            <h4
              className="text-sm font-semibold text-white mb-5 tracking-wide"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { label: "About", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "How It Works", href: "#how-it-works" },
                { label: "Case Studies", href: "#case-studies" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-brand-300 transition-colors duration-200 link-underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="text-sm font-semibold text-white mb-5 tracking-wide"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              Get In Touch
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://calendar.app.google/7rRamUEnapLFZ2PS9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-brand-300 transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@touchaiagency.com"
                  className="text-sm text-gray-400 hover:text-brand-300 transition-colors duration-200"
                >
                  info@touchaiagency.com
                </a>
              </li>
              <li>
                <a
                  href="https://calendar.app.google/7rRamUEnapLFZ2PS9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-300 hover:text-brand-200 transition-colors duration-200"
                >
                  Book Free Audit
                  <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            &copy; {currentYear} Touch AI Agency. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="/privacy" className="text-xs text-gray-600 hover:text-gray-400 transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="/terms" className="text-xs text-gray-600 hover:text-gray-400 transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
