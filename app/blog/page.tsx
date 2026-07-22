import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPublishedPosts } from "./posts";

// Vernieuw elk uur zodat date-gated posts automatisch op hun publicatiedag verschijnen.
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blog · Touch AI Agency",
  description:
    "Inzichten over AI-automatisering voor het MKB: waar de uren weglekken, hoe je repetitief werk terugwint, en hoe je een AI Workforce inzet die het werk overneemt.",
};

export default function BlogIndex() {
  return (
    <main className="relative bg-white">
      <Navbar />

      <section className="relative pt-40 pb-14 md:pt-48 md:pb-16 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 50% at 70% -10%, rgba(110,173,212,0.10) 0%, transparent 70%)" }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold tracking-wider uppercase mb-7"
            style={{ background: "rgba(110,173,212,0.06)", borderColor: "rgba(110,173,212,0.25)", color: "#6EADD4" }}
          >
            Inzichten
          </div>
          <h1
            className="text-5xl sm:text-6xl font-bold text-gray-900 leading-[1.06] tracking-[-0.03em] mb-6"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Blog
          </h1>
          <p className="text-lg md:text-xl text-gray-500 leading-[1.7] max-w-2xl mx-auto">
            Praktische inzichten over AI-automatisering voor het MKB. Geen hype, wel resultaat.
          </p>
        </div>
      </section>

      <section className="relative pb-28 md:pb-36">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {getPublishedPosts().map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-3xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "rgba(255,255,255,0.96)",
                  boxShadow: "0 4px 6px rgba(110,173,212,0.06), 0 12px 40px rgba(110,173,212,0.09), 0 1px 2px rgba(0,0,0,0.04)",
                  border: "1px solid rgba(110,173,212,0.14)",
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full"
                    style={{ background: "rgba(110,173,212,0.10)", color: "#4A8EBB", border: "1px solid rgba(110,173,212,0.22)" }}
                  >
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-400">{post.readingMinutes} min lezen</span>
                </div>
                <h2
                  className="text-xl font-bold text-gray-900 tracking-[-0.01em] mb-3 leading-snug group-hover:text-brand-500 transition-colors duration-200"
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  {post.title}
                </h2>
                <p className="text-sm text-gray-500 leading-[1.7] mb-6 flex-1">{post.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">{post.dateLabel}</span>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-500">
                    Lees meer
                    <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
