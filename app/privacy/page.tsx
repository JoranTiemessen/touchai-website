import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <main className="relative bg-white">
      <Navbar />

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-24">
        <h1
          className="text-4xl md:text-5xl font-bold text-gray-900 tracking-[-0.03em] mb-4"
          style={{ fontFamily: "'Sora', sans-serif" }}
        >
          Privacybeleid
        </h1>
        <p className="text-sm text-gray-400 mb-12">Laatst bijgewerkt: juli 2026</p>

        <div className="prose prose-gray max-w-none space-y-10 text-gray-600 leading-[1.8]">

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>1. Wie we zijn</h2>
            <p>Touch AI Agency wordt gerund door Joran Tiemessen en Jesper Tiemessen, gevestigd in Amersfoort, Nederland. Wij bouwen AI-automatiseringssystemen voor bedrijven. Heb je vragen over dit beleid? Neem contact op via <a href="mailto:info@touchaiagency.com" className="text-blue-500 hover:underline">info@touchaiagency.com</a>.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>2. Welke gegevens we verzamelen</h2>
            <p>We kunnen de volgende persoonsgegevens verzamelen wanneer je onze website gebruikt of contact met ons opneemt:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Naam en e-mailadres (als je een contact- of boekingsformulier invult)</li>
              <li>Bedrijfsnaam en functie (als je die vrijwillig verstrekt)</li>
              <li>Gebruiksgegevens zoals bezochte pagina's, browsertype en IP-adres (via analysetools)</li>
              <li>Alle informatie die je vrijwillig deelt tijdens een gesprek of onboarding</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>3. Hoe we je gegevens gebruiken</h2>
            <p>We gebruiken je gegevens uitsluitend om:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Op je vragen te reageren en gesprekken in te plannen</li>
              <li>De diensten te leveren waarvoor je ons hebt ingeschakeld</li>
              <li>Relevante updates over onze diensten te sturen (alleen met je toestemming)</li>
              <li>Onze website en gebruikerservaring te verbeteren</li>
            </ul>
            <p className="mt-3">We verkopen, verhuren of verhandelen je persoonsgegevens niet aan derden.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>4. Grondslag (AVG)</h2>
            <p>We verwerken je persoonsgegevens op de volgende grondslagen:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li><strong>Overeenkomst:</strong> de verwerking is nodig om een dienstverleningsovereenkomst met je uit te voeren</li>
              <li><strong>Gerechtvaardigd belang:</strong> om onze diensten te verbeteren en op vragen te reageren</li>
              <li><strong>Toestemming:</strong> voor eventuele marketingcommunicatie, waar vereist</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>5. Bewaartermijn</h2>
            <p>We bewaren persoonsgegevens alleen zo lang als nodig is voor het doel waarvoor ze zijn verzameld, of zolang de wet dat vereist. Contact- en klantgegevens bewaren we maximaal 2 jaar na afloop van onze samenwerking, tenzij een langere bewaartermijn wettelijk verplicht is.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>6. Diensten van derden</h2>
            <p>We maken mogelijk gebruik van de volgende diensten van derden die je gegevens kunnen verwerken:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li><strong>Google Calendar</strong> (voor het inplannen van gesprekken)</li>
              <li><strong>Vercel</strong> (website-hosting)</li>
              <li><strong>Analysetools</strong> (om het websitegebruik te begrijpen)</li>
            </ul>
            <p className="mt-3">Deze partijen hebben hun eigen privacybeleid en verwerken gegevens conform de geldende wetgeving.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>7. Jouw rechten</h2>
            <p>Op grond van de AVG heb je het recht om:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>De persoonsgegevens die we van je hebben in te zien</li>
              <li>Correctie van onjuiste gegevens te vragen</li>
              <li>Verwijdering van je gegevens te vragen</li>
              <li>Bezwaar te maken tegen of de verwerking te beperken</li>
              <li>Je gegevens over te dragen (dataportabiliteit)</li>
              <li>Een klacht in te dienen bij de Autoriteit Persoonsgegevens</li>
            </ul>
            <p className="mt-3">Wil je een van deze rechten uitoefenen? Mail ons via <a href="mailto:info@touchaiagency.com" className="text-blue-500 hover:underline">info@touchaiagency.com</a>.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>8. Cookies</h2>
            <p>Onze website gebruikt mogelijk cookies om je browse-ervaring te verbeteren en het verkeer te analyseren. Je kunt cookies op elk moment uitschakelen in je browserinstellingen. We gebruiken geen cookies voor advertentiedoeleinden.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>9. Wijzigingen in dit beleid</h2>
            <p>We kunnen dit privacybeleid van tijd tot tijd bijwerken. Wijzigingen plaatsen we op deze pagina met een bijgewerkte datum. We raden je aan deze pagina regelmatig te bekijken.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>10. Contact</h2>
            <p>Touch AI Agency<br />Amersfoort, Nederland<br /><a href="mailto:info@touchaiagency.com" className="text-blue-500 hover:underline">info@touchaiagency.com</a></p>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
