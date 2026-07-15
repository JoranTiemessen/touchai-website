import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Touch AI Agency · Bespaar een volledige FTE met AI",
  description:
    "Met The AI Leap installeren wij een team AI-agents (je AI Workforce) op je bestaande systemen dat een volledige FTE aan werk overneemt. 40 uur per week terug, binnen 90 dagen gegarandeerd.",
  openGraph: {
    title: "Touch AI Agency · Jouw AI Workforce",
    description:
      "Bespaar €3.000–5.000 per maand aan loonkosten. Een team AI-agents dat het repetitieve werk overneemt. Eerste agent live in 3 weken.",
    type: "website",
    locale: "nl_NL",
  },
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
          href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
