export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO
  dateLabel: string;
  readingMinutes: number;
  category: string;
  body: Block[];
};

export const posts: Post[] = [
  {
    slug: "hoeveel-tijd-kost-repetitief-werk",
    title: "Hoeveel tijd kost repetitief werk je team echt?",
    description:
      "Repetitief werk is de stilste kostenpost van het MKB. We laten zien waar de uren weglekken, hoe je het uitrekent, en hoe je die tijd terugwint met AI-agents.",
    date: "2026-07-14",
    dateLabel: "14 juli 2026",
    readingMinutes: 5,
    category: "Productiviteit",
    body: [
      { type: "p", text: "De meeste ondernemers weten precies wat hun grootste klant oplevert, maar niet hoeveel tijd hun team elke week kwijt is aan werk dat een computer zou kunnen doen. Juist daar lekt de meeste capaciteit weg, onzichtbaar en elke week opnieuw." },
      { type: "h2", text: "Waar de uren weglekken" },
      { type: "p", text: "Repetitief werk zit zelden in één grote taak. Het zijn tientallen kleine handelingen die samen een halve baan vullen:" },
      { type: "ul", items: [
        "Terugkerende mails en klantvragen lezen, sorteren en beantwoorden",
        "Offertes en documenten handmatig opstellen",
        "Facturen en bonnen overtypen in je boekhoudpakket",
        "Notulen uitwerken en actiepunten verdelen",
        "Afspraken plannen, bevestigen en reminders sturen",
      ]},
      { type: "p", text: "Volgens onderzoek van McKinsey besteden werknemers gemiddeld tot 40% van hun tijd aan taken die grotendeels te automatiseren zijn. Dat is bijna twee dagen per week, per persoon." },
      { type: "h2", text: "Reken het eens uit" },
      { type: "p", text: "Neem een team van zes mensen dat elk zo'n zeven uur per week aan repetitief werk kwijt is. Dat is 42 uur per week: meer dan een volledige fulltime medewerker. Op deze arbeidsmarkt een kracht die je niet eens makkelijk vindt, en die je al gauw €5.000 per maand kost (salaris, werkgeverslasten, werkplek en verzuim)." },
      { type: "p", text: "Het punt: die medewerker heb je eigenlijk al nodig. Alleen zit die capaciteit nu verstopt in de agenda's van je bestaande team." },
      { type: "h2", text: "Van tijdlek naar teruggewonnen tijd" },
      { type: "p", text: "Het goede nieuws is dat precies dit type werk zich uitstekend leent voor AI-agents. Een agent die je mail voorsorteert en beantwoordt, een agent die offertes opstelt, een agent die je administratie inleest: samen nemen ze het repetitieve werk over, zodat je team terug kan naar het werk waarvoor je ze hebt aangenomen." },
      { type: "h2", text: "Begin met meten" },
      { type: "p", text: "Je kunt pas terugwinnen wat je eerst hebt gemeten. Daarom start elk traject bij ons met een Tijdlek-scan: binnen een week zwart op wit waar de uren weglekken en wat elk lek per maand kost in euro's. Dat is je nulmeting, en meteen de basis voor de garantie." },
    ],
  },
  {
    slug: "ai-agency-vs-losse-tools",
    title: "AI-agency vs. losse AI-tools: wat levert écht op voor het MKB?",
    description:
      "Losse AI-tools klinken goedkoop, maar belanden vaak in de la. We vergelijken losse tools met een AI-agency eerlijk, zodat je weet wat er echt oplevert.",
    date: "2026-07-09",
    dateLabel: "9 juli 2026",
    readingMinutes: 6,
    category: "Strategie",
    body: [
      { type: "p", text: "Er is geen tekort aan AI-tools. Voor elke taak bestaat er wel een abonnement. Toch zien we bij MKB-bedrijven keer op keer hetzelfde: veel tools aangeschaft, weinig resultaat geboekt. Hoe kan dat?" },
      { type: "h2", text: "Losse tools: waarom ze vaak stranden" },
      { type: "ul", items: [
        "Ze staan los van je bestaande systemen, dus je blijft handmatig overtypen",
        "Niemand krijgt de tijd om ze goed in te richten en te leren gebruiken",
        "Na de eerste enthousiaste week zakt het gebruik in en bespaart de tool niks",
        "De 'besparing' wordt nooit gemeten, dus je weet niet of het iets oplevert",
      ]},
      { type: "p", text: "Een ongebruikte tool is geen besparing, maar een extra kostenpost. Dat is de stille kern van het probleem." },
      { type: "h2", text: "Wat een AI-agency anders doet" },
      { type: "p", text: "Een agency levert geen software, maar een resultaat. In de praktijk betekent dat:" },
      { type: "ul", items: [
        "Agents worden gekoppeld op de systemen die je al gebruikt, geen migratie",
        "Je krijgt maatwerk per proces, geen generieke tool die 'ook jouw geval' moet dekken",
        "Adoptie hoort erbij: je team wordt getraind tot het dagelijks draait",
        "De besparing wordt maandelijks gemeten en per agent afgetekend tegen de nulmeting",
      ]},
      { type: "h2", text: "De kosten eerlijk vergeleken" },
      { type: "p", text: "Losse tools lijken goedkoper: een paar tientjes per maand per stuk. Maar tel het echte plaatje op: meerdere abonnementen, de uren om ze in te richten, en de besparing die uitblijft omdat er niks gekoppeld of geadopteerd wordt. Een agency vraagt een hogere investering vooraf, maar rekent af op meetbare uren, met een garantie eraan." },
      { type: "h2", text: "Wanneer kies je wat" },
      { type: "p", text: "Wil je één afgebakende taak versneld hebben en heb je zelf de technische tijd? Een losse tool kan prima werken. Wil je structureel capaciteit terugwinnen over je hele bedrijf, zonder dat het jouw team weken kost? Dan levert een agency-aanpak meer op, juist omdat koppeling, adoptie en meting zijn ingebakken." },
    ],
  },
  {
    slug: "fulltime-medewerker-besparen-met-ai",
    title: "Zo bespaar je een fulltime medewerker met AI-agents",
    description:
      "Vier kern-agents nemen samen 40 uur repetitief werk per week over: een fulltime medewerker aan capaciteit terug, zonder er één aan te nemen. Zo werkt het.",
    date: "2026-07-02",
    dateLabel: "2 juli 2026",
    readingMinutes: 5,
    category: "AI Workforce",
    body: [
      { type: "p", text: "Een fulltime medewerker erbij, zonder er één aan te nemen. Het klinkt als een marketingbelofte, maar het is simpele rekenkunde zodra je repetitief werk verdeelt over gespecialiseerde AI-agents." },
      { type: "h2", text: "De vier kern-agents" },
      { type: "p", text: "In elk MKB-bedrijf zit het meeste repetitieve werk in vier hoeken. Daar zetten we vier agents op:" },
      { type: "ul", items: [
        "Inbox-agent: leest, sorteert en beantwoordt je mail én terugkerende klantvragen via mail en WhatsApp (13 uur per week)",
        "Assistent-agent: dagstart, weekrecap, documenten, meetings, actiepunten en afspraken (14 uur per week)",
        "Administratie-agent: facturen en bonnen inlezen, verwerken en klaarzetten in je boekhoudpakket (8 uur per week)",
        "Offerte-agent: van aanvraag naar concept-offerte in minuten, plus automatische opvolging (5 uur per week)",
      ]},
      { type: "h2", text: "Hoe het samen 40 uur wordt" },
      { type: "p", text: "Opgeteld nemen deze vier agents zo'n 40 uur repetitief werk per week over: een volledige fulltime medewerker aan capaciteit. De besparing is opgeteld over je hele team, dus je hoeft niet één iemand te ontslaan. Je wint tijd terug die nu verstopt zit in ieders agenda." },
      { type: "h2", text: "In 90 dagen live (de AIOS-methode)" },
      { type: "p", text: "We werken in vaste stappen: eerst een Tijdlek-scan (waar lekt de tijd weg), dan een agent-blauwdruk (welke agent lost welk lek op), daarna bouwen en koppelen we op je bestaande systemen. Je eerste agent staat binnen drie weken live. Vervolgens trainen we je team op adoptie en meten we elke maand de bespaarde uren." },
      { type: "h2", text: "Wat het kost en oplevert" },
      { type: "p", text: "De setup is eenmalig, met daarna een maandelijkse retainer voor monitoring, optimalisatie en uitbreiding. Afgezet tegen de kosten van een echte medewerker (al gauw €5.000 per maand) houd je netto capaciteit over, elke maand opnieuw. En omdat we afrekenen op de in de Tijdlek-scan vastgestelde besparing, met een garantie, weet je vooraf waar je aan toe bent." },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
