import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.touchaiagency.com"),
  title: "Touch AI Agency · Weer aan het werk dat er echt toe doet",
  description:
    "Wij halen het terugkerende werk uit je bedrijf met AI-agents, op de systemen die je al gebruikt. Eerste agent draait op dag 10. Werkt het niet binnen 60 dagen, dan krijg je je investering terug en blijven de agents staan.",
  openGraph: {
    title: "Touch AI Agency · AI-agents die het terugkerende werk overnemen",
    description:
      "AI-agents die het werk overnemen dat elke week terugkomt. Eerste agent draait op dag 10, de rest binnen 60 dagen. Werkt het niet, dan krijg je je investering terug en blijven de agents staan.",
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
          href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600&family=Azeret+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
