import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { posts, getPost } from "../posts";

const CAL_URL = "https://calendar.app.google/7rRamUEnapLFZ2PS9";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} — Touch AI Agency`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      locale: "nl_NL",
    },
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: "Touch AI Agency" },
    publisher: { "@type": "Organization", name: "Touch AI Agency" },
  };

  return (
    <main className="relative bg-white">
      <Navbar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article className="relative pt-36 md:pt-44 pb-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back */}
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-400 hover:text-brand-500 transition-colors duration-200 mb-8">
            <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none">
              <path d="M12 7H2M6 3L2 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Terug naar blog
          </Link>

          {/* Meta */}
          <div className="flex items-center gap-3 mb-5">
            <span
              className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full"
              style={{ background: "rgba(110,173,212,0.10)", color: "#4A8EBB", border: "1px solid rgba(110,173,212,0.22)" }}
            >
              {post.category}
            </span>
            <span className="text-xs text-gray-400">{post.dateLabel} · {post.readingMinutes} min lezen</span>
          </div>

          {/* Title */}
          <h1
            className="text-3xl md:text-5xl font-bold text-gray-900 tracking-[-0.03em] leading-[1.1] mb-6"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            {post.title}
          </h1>
          <p className="text-lg text-gray-500 leading-[1.7] mb-10 pb-10 border-b border-gray-100">
            {post.description}
          </p>

          {/* Body */}
          <div className="space-y-5">
            {post.body.map((block, i) => {
              if (block.type === "h2") {
                return (
                  <h2
                    key={i}
                    className="text-2xl font-bold text-gray-900 tracking-[-0.02em] pt-6"
                    style={{ fontFamily: "'Sora', sans-serif" }}
                  >
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "ul") {
                return (
                  <ul key={i} className="space-y-3 pl-1">
                    {block.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-gray-600 leading-[1.8]">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-3" style={{ background: "#6EADD4" }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={i} className="text-gray-600 leading-[1.85] text-[17px]">
                  {block.text}
                </p>
              );
            })}
          </div>

          {/* CTA */}
          <div
            className="mt-14 rounded-3xl p-8 md:p-10 text-center"
            style={{
              background: "linear-gradient(135deg, rgba(110,173,212,0.10) 0%, rgba(74,142,187,0.07) 100%)",
              border: "1px solid rgba(110,173,212,0.18)",
            }}
          >
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 tracking-[-0.01em] mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>
              Benieuwd waar bij jou de uren weglekken?
            </h3>
            <p className="text-sm text-gray-500 leading-[1.7] max-w-md mx-auto mb-6">
              Doe de gratis Tijdlek-scan en zie zwart op wit wat repetitief werk je kost.
            </p>
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-white font-semibold text-[15px]"
              style={{ background: "linear-gradient(135deg, #6EADD4 0%, #4A8EBB 100%)", boxShadow: "0 6px 20px rgba(110,173,212,0.40)" }}
            >
              Doe de gratis Tijdlek-scan
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
