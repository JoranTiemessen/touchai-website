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
      { type: "h2", text: "Van tijdverlies naar teruggewonnen tijd" },
      { type: "p", text: "Het goede nieuws is dat precies dit type werk zich uitstekend leent voor AI-agents. Een agent die je mail voorsorteert en beantwoordt, een agent die offertes opstelt, een agent die je administratie inleest: samen nemen ze het repetitieve werk over, zodat je team terug kan naar het werk waarvoor je ze hebt aangenomen." },
      { type: "h2", text: "Begin met meten" },
      { type: "p", text: "Je kunt pas terugwinnen wat je eerst hebt gemeten. Daarom start elk traject bij ons met een Bedrijfsscan: binnen een week zwart op wit waar de uren weglekken en wat elk lek per maand kost in euro's. Dat is je nulmeting, en meteen de basis voor de garantie." },
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
      { type: "h2", text: "In 60 dagen live (de AIOS-methode)" },
      { type: "p", text: "We werken in vaste stappen: eerst een Bedrijfsscan (waar lekt de tijd weg), dan een agent-blauwdruk (welke agent lost welk lek op), daarna bouwen en koppelen we op je bestaande systemen. Je eerste agent staat binnen drie weken live. Vervolgens trainen we je team op adoptie en meten we elke maand de bespaarde uren." },
      { type: "h2", text: "Wat het kost en oplevert" },
      { type: "p", text: "De setup is eenmalig, met daarna een maandelijkse retainer voor monitoring, optimalisatie en uitbreiding. Afgezet tegen de kosten van een echte medewerker (al gauw €5.000 per maand) houd je netto capaciteit over, elke maand opnieuw. En omdat we afrekenen op de in de Bedrijfsscan vastgestelde besparing, met een garantie, weet je vooraf waar je aan toe bent." },
    ],
  },
  {
    slug: "wat-kost-een-medewerker-echt",
    title: "Wat kost een medewerker écht? (fully-loaded uitgelegd)",
    description:
      "Een medewerker kost veel meer dan zijn brutosalaris. We rekenen de fully-loaded kosten voor: salaris, werkgeverslasten, werkplek en verzuim. Al gauw €5.000 per maand.",
    date: "2026-07-21",
    dateLabel: "21 juli 2026",
    readingMinutes: 5,
    category: "Kosten",
    body: [
      { type: "p", text: "Vraag een ondernemer wat een medewerker kost en je hoort meestal het brutosalaris. Maar dat is nog niet de helft van het verhaal. De echte, fully-loaded kosten liggen fors hoger, en juist die bepalen of een extra kracht rendabel is." },
      { type: "h2", text: "Wat zit er allemaal in?" },
      { type: "p", text: "Bovenop het brutosalaris betaal je als werkgever een flinke stapel extra kosten:" },
      { type: "ul", items: [
        "Werkgeverslasten: sociale premies, pensioenbijdrage en verzekeringen",
        "Vakantiegeld en eventuele dertiende maand",
        "Werkplek: laptop, software, bureau, kantoorruimte",
        "Verzuim en vervanging bij ziekte",
        "Werving, onboarding en opleiding",
      ]},
      { type: "p", text: "Bij elkaar opgeteld komt een modale MKB-medewerker al gauw uit op €5.000 per maand aan werkelijke kosten. Voor specialistische of ervaren krachten ligt dat nog hoger." },
      { type: "h2", text: "En dan moet je die persoon nog vinden" },
      { type: "p", text: "De kosten zijn één ding. Op de huidige arbeidsmarkt is het vaak nog lastiger om überhaupt de juiste persoon te vinden en te behouden. Vacatures staan maanden open, en een verkeerde aanname kost dubbel." },
      { type: "h2", text: "Waarom dit ertoe doet" },
      { type: "p", text: "Als je weet wat een medewerker écht kost, wordt de rekensom van automatisering ineens helder. Een AI Workforce die 40 uur repetitief werk per week overneemt, levert dezelfde capaciteit als een fulltime kracht, tegen een fractie van die €5.000 per maand. En je hoeft niemand te werven." },
      { type: "p", text: "Wil je precies weten hoeveel capaciteit er bij jou verstopt zit in repetitief werk? Dat meten we in de gratis Bedrijfsscan." },
    ],
  },
  {
    slug: "ai-agent-vs-freelancer-vs-vaste-kracht",
    title: "AI-agent vs. freelancer vs. vaste kracht: de eerlijke vergelijking",
    description:
      "Extra capaciteit nodig? We vergelijken een AI-agent, een freelancer en een vaste medewerker eerlijk op kosten, snelheid, schaalbaarheid en betrouwbaarheid.",
    date: "2026-07-28",
    dateLabel: "28 juli 2026",
    readingMinutes: 6,
    category: "Vergelijking",
    body: [
      { type: "p", text: "Je hebt meer capaciteit nodig. De klassieke keuze: iemand aannemen of een freelancer inhuren. Sinds kort is er een derde optie: een AI-agent. Hoe verhouden ze zich echt?" },
      { type: "h2", text: "Vaste kracht" },
      { type: "p", text: "Betrouwbaar en betrokken, maar duur (al gauw €5.000 per maand fully-loaded), traag te werven, en niet schaalbaar per taak. Bij ziekte of vertrek valt de capaciteit weg." },
      { type: "h2", text: "Freelancer" },
      { type: "p", text: "Flexibeler en sneller inzetbaar, maar duur per uur, beperkt beschikbaar, en de kennis vertrekt weer zodra de opdracht klaar is. Voor terugkerend werk loopt de rekening snel op." },
      { type: "h2", text: "AI-agent" },
      { type: "p", text: "Neemt terugkerend werk 24/7 over tegen een fractie van de kosten, schaalt per taak, en de kennis blijft in je bedrijf. Minder geschikt voor werk dat menselijk oordeel of fysieke aanwezigheid vraagt, daar blijft je team juist voor vrij." },
      { type: "h2", text: "De eerlijke conclusie" },
      { type: "ul", items: [
        "Strategisch, creatief of relatiewerk: mens (vast of freelance)",
        "Terugkerend, regelgebaseerd werk (mail, offertes, administratie): AI-agent",
        "De beste mix: AI neemt het repetitieve over, je mensen doen het werk waar ze goed in zijn",
      ]},
      { type: "p", text: "Het is dus geen of-of. Een AI Workforce haalt de sleur uit de agenda van je bestaande team, zodat je pas hoeft aan te nemen als het echt om mensenwerk gaat." },
    ],
  },
  {
    slug: "7-processen-mkb-automatiseren",
    title: "7 processen in het MKB die je vandaag kunt automatiseren",
    description:
      "Van mail tot offertes tot administratie: dit zijn 7 concrete processen die AI-agents in het MKB direct kunnen overnemen, met de tijdwinst per proces.",
    date: "2026-08-04",
    dateLabel: "4 augustus 2026",
    readingMinutes: 6,
    category: "Automatisering",
    body: [
      { type: "p", text: "Automatisering klinkt abstract, tot je ziet welke concrete taken vandaag al uit handen kunnen. Dit zijn zeven processen die in vrijwel elk MKB-bedrijf tijd opslokken, en die een AI-agent kan overnemen." },
      { type: "h2", text: "1. Mail en klantvragen" },
      { type: "p", text: "Terugkerende mail en klantvragen via mail en WhatsApp lezen, sorteren en beantwoorden. Jij keurt alleen nog goed. Goed voor zo'n 13 uur per week." },
      { type: "h2", text: "2. Offertes opstellen en opvolgen" },
      { type: "p", text: "Van aanvraag naar concept-offerte in minuten, plus automatische opvolging tot de klant tekent. Geen offerte blijft meer liggen." },
      { type: "h2", text: "3. Administratie verwerken" },
      { type: "p", text: "Facturen en bonnen inlezen, verwerken en klaarzetten in je boekhoudpakket. Einde aan het overtypen." },
      { type: "h2", text: "4. Meetings en notulen" },
      { type: "p", text: "Elke meeting automatisch samengevat, met actiepunten verdeeld en op de juiste lijst gezet." },
      { type: "h2", text: "5. Afspraken plannen" },
      { type: "p", text: "Plannen, bevestigen en reminders sturen. Nooit meer heen-en-weer mailen over een datum." },
      { type: "h2", text: "6. Leads opvolgen en kwalificeren" },
      { type: "p", text: "Inkomende leads scoren, verdelen en automatisch opvolgen, zodat je alleen met warme leads praat." },
      { type: "h2", text: "7. Rapportage" },
      { type: "p", text: "Data uit je tools samengevoegd tot een maandrapport of live dashboard, zonder handwerk." },
      { type: "p", text: "Welke van deze zeven kost jou het meeste tijd? In de gratis Bedrijfsscan zetten we het per proces zwart op wit." },
    ],
  },
  {
    slug: "wat-is-een-ai-workforce",
    title: "Wat is een AI Workforce (en waarom losse chatbots falen)",
    description:
      "Een AI Workforce is meer dan een chatbot. We leggen uit wat het is, hoe een team AI-agents samenwerkt op je bestaande systemen, en waarom losse tools stranden.",
    date: "2026-08-11",
    dateLabel: "11 augustus 2026",
    readingMinutes: 5,
    category: "AI Workforce",
    body: [
      { type: "p", text: "De term AI Workforce valt steeds vaker, maar wat is het precies? En waarom werkt het wél waar losse chatbots en tools blijven steken?" },
      { type: "h2", text: "Van losse tool naar samenwerkend team" },
      { type: "p", text: "Een chatbot doet één ding, los van de rest van je bedrijf. Een AI Workforce is een team van gespecialiseerde agents die elk een deel van het werk overnemen en samen een volledige rol invullen: mail, offertes, administratie, planning en meer, gekoppeld op de systemen die je al gebruikt." },
      { type: "h2", text: "Waarom losse chatbots falen" },
      { type: "ul", items: [
        "Ze staan los van je systemen, dus je blijft handmatig schakelen",
        "Ze dekken één taak, terwijl je werk uit tientallen kleine taken bestaat",
        "Niemand richt ze goed in of adopteert ze, dus het gebruik zakt in",
        "De besparing wordt nooit gemeten, dus niemand weet of het werkt",
      ]},
      { type: "h2", text: "Wat een AI Workforce anders maakt" },
      { type: "p", text: "Omdat de agents op je bestaande systemen draaien en samenwerken, nemen ze het werk end-to-end over in plaats van één stukje. En omdat adoptie en meting zijn ingebakken, blijft de besparing ook echt staan. Zo wordt AI geen speeltje, maar capaciteit." },
      { type: "p", text: "Bij Touch AI vormen vier kern-agents samen je fulltime medewerker (40 uur per week), en breidt je AI-team per afdeling uit wanneer je groeit." },
    ],
  },
  {
    slug: "offerte-agent-sneller-offreren",
    title: "Van offerte-aanvraag naar getekend in minuten: de offerte-agent",
    description:
      "Trage offertes kosten je deals. Ontdek hoe een offerte-agent van aanvraag naar concept-offerte gaat in minuten, met automatische opvolging tot de handtekening.",
    date: "2026-08-18",
    dateLabel: "18 augustus 2026",
    readingMinutes: 5,
    category: "Sales",
    body: [
      { type: "p", text: "De snelste offerte wint vaak de deal. Toch blijven offertes in het MKB dagen liggen, simpelweg omdat er geen tijd voor is. Precies daar helpt een offerte-agent." },
      { type: "h2", text: "Het probleem met handmatig offreren" },
      { type: "p", text: "Een offerte opstellen kost al snel een uur: gegevens verzamelen, prijzen opzoeken, tekst schrijven, opmaken. En dan moet je nog opvolgen. Bij drukte schuift dat door, en een lauwe lead koelt af." },
      { type: "h2", text: "Hoe de offerte-agent werkt" },
      { type: "p", text: "De agent haalt de aanvraaggegevens op, stelt op basis van je eigen prijzen en templates een concept-offerte op in minuten, en zet die klaar zodat jij alleen nog controleert en verstuurt." },
      { type: "h2", text: "Opvolgen zonder eraan te denken" },
      { type: "p", text: "Na verzending volgt de agent automatisch op met de juiste timing en toon, tot de klant reageert of tekent. Geen enkele offerte verdwijnt meer in de vergetelheid, wat direct de grootste stille omzetlek dicht." },
      { type: "h2", text: "Wat het oplevert" },
      { type: "ul", items: [
        "Sneller offreren, dus meer deals gewonnen op snelheid",
        "Consistente, professionele offertes zonder tikfouten",
        "Automatische opvolging, dus hogere conversie op je pijplijn",
      ]},
      { type: "p", text: "De offerte-agent is een van de vier kern-agents in het Touch AI offer. Benieuwd wat hij bij jou oplevert? Doe de gratis Bedrijfsscan." },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

// Alleen posts waarvan de publicatiedatum is bereikt (date-gated drip),
// nieuwste eerst. Wordt bij elke (wekelijkse) redeploy opnieuw geëvalueerd.
export function getPublishedPosts() {
  const today = new Date().toISOString().slice(0, 10);
  return posts
    .filter((p) => p.date <= today)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}
