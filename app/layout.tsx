import type { Metadata } from "next";
import "./globals.css";
import PixelConsent from "@/components/PixelConsent";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.touchaiagency.com"),
  title: "Touch AI Agency · Wij nemen je terugkerende werk over",
  description:
    "Een team AI-agents dat je terugkerende werk overneemt. Wij bouwen ze, sluiten ze aan op de systemen die je al gebruikt en houden ze draaiend. Eerste agent op dag 10, alles live binnen 30 dagen of je investering terug.",
  openGraph: {
    title: "Touch AI Agency · Wij nemen je terugkerende werk over",
    description:
      "Een team AI-agents voor je marketing, sales, uitvoering en administratie. Compleet voor je gedaan, in je eigen systemen, binnen 30 dagen.",
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
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@500;600;700;800&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
        <PixelConsent />
      </body>
    </html>
  );
}
