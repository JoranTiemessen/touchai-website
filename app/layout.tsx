import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.touchaiagency.com"),
  title: "AI-agents voor het MKB · Touch AI Agency",
  description:
    "Wij halen het terugkerende werk uit je bedrijf met AI-agents, op de systemen die je al gebruikt. Eerste agent draait op dag 10. Werkt het niet binnen 30 dagen, dan krijg je je investering terug en blijven de agents staan.",
  openGraph: {
    title: "AI-agents voor het MKB · Touch AI Agency",
    description:
      "AI-agents die het werk overnemen dat elke week terugkomt. Eerste agent draait op dag 10, de rest binnen 30 dagen. Werkt het niet, dan krijg je je investering terug en blijven de agents staan.",
    type: "website",
    locale: "nl_NL",
    siteName: "Touch AI Agency",
  },
  twitter: { card: "summary_large_image" },
  other: {
    "facebook-domain-verification": "ixs06eiggfpfsjsypa3isy2v4xhp20",
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Touch AI Agency",
  url: "https://www.touchaiagency.com",
  logo: "https://www.touchaiagency.com/logo.png",
  email: "info@touchaiagency.com",
  description:
    "AI-agents die het terugkerende werk overnemen bij Nederlandse MKB-bedrijven, op de systemen die ze al gebruiken.",
  areaServed: "NL",
  founder: [
    { "@type": "Person", name: "Joran Tiemessen" },
    { "@type": "Person", name: "Jesper Tiemessen" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@500;600;700;800&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        {children}
      </body>
    </html>
  );
}
