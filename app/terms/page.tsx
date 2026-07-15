import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsOfService() {
  return (
    <main className="relative bg-white">
      <Navbar />

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-24">
        <h1
          className="text-4xl md:text-5xl font-bold text-gray-900 tracking-[-0.03em] mb-4"
          style={{ fontFamily: "'Sora', sans-serif" }}
        >
          Algemene voorwaarden
        </h1>
        <p className="text-sm text-gray-400 mb-12">Laatst bijgewerkt: juli 2026</p>

        <div className="prose prose-gray max-w-none space-y-10 text-gray-600 leading-[1.8]">

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>1. Over ons</h2>
            <p>Deze algemene voorwaarden zijn van toepassing op het gebruik van de website en de diensten van Touch AI Agency, gerund door Joran Tiemessen en Jesper Tiemessen, gevestigd in Amersfoort, Nederland. Door onze website te gebruiken of onze diensten af te nemen, ga je akkoord met deze voorwaarden.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>2. Diensten</h2>
            <p>Touch AI Agency levert advies en implementatie op het gebied van AI-automatisering, waaronder maar niet beperkt tot:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>AI-workflow automatisering</li>
              <li>Leadgeneratie-systemen</li>
              <li>Maatwerk AI-agents en assistenten</li>
              <li>Datapijplijn-automatisering</li>
              <li>AI-strategie advies</li>
            </ul>
            <p className="mt-3">De precieze scope, opleverpunten, planning en prijs van elk traject worden vooraf per opdracht afgesproken voordat het werk begint.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>3. Gesprekken en Tijdlek-scan</h2>
            <p>Een gratis Tijdlek-scan of kennismakingsgesprek kun je via onze website inplannen. Deze gesprekken zijn vrijblijvend en verplichten geen van beide partijen tot iets. Touch AI Agency behoudt zich het recht voor om een opdracht zonder opgaaf van reden te weigeren.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>4. Betaling</h2>
            <p>Betalingsvoorwaarden staan in de individuele overeenkomst of offerte. Tenzij anders overeengekomen:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Facturen dienen binnen 14 dagen na ontvangst te worden voldaan</li>
              <li>Bij te late betaling kan de wettelijke rente in rekening worden gebracht</li>
              <li>Werkzaamheden kunnen worden gepauzeerd als een betaling meer dan 14 dagen openstaat</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>5. Intellectueel eigendom</h2>
            <p>Na volledige betaling wordt de klant eigenaar van alle maatwerk die specifiek voor hem is gebouwd. Touch AI Agency behoudt het recht om generieke componenten, frameworks en methodieken die tijdens het traject zijn ontwikkeld, opnieuw te gebruiken. We mogen de samenwerking benoemen in onze portfolio, tenzij schriftelijk anders is afgesproken.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>6. Vertrouwelijkheid</h2>
            <p>Beide partijen houden gevoelige bedrijfsinformatie die tijdens het traject wordt gedeeld vertrouwelijk. Deze verplichting blijft van kracht tot 2 jaar na afloop van de samenwerking.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>7. Aansprakelijkheid en garantie</h2>
            <p>Touch AI Agency is niet aansprakelijk voor indirecte, incidentele of gevolgschade die voortvloeit uit het gebruik van onze diensten. Onze totale aansprakelijkheid is in elk geval beperkt tot het bedrag dat is betaald voor de specifieke dienst die aanleiding gaf tot de claim.</p>
            <p className="mt-3">De resultaatgarantie die we bij een traject afgeven (het afgesproken aantal bespaarde uren binnen 90 dagen, of we werken kosteloos door) staat los van deze aansprakelijkheidsbeperking en wordt per opdracht schriftelijk vastgelegd.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>8. Opzegging</h2>
            <p>Beide partijen kunnen een lopend traject beëindigen met een schriftelijke opzegtermijn van 14 dagen. Werk dat tot het moment van opzegging is uitgevoerd, wordt tegen het afgesproken tarief gefactureerd. Vooruitbetaalde bedragen voor nog niet gestart werk worden terugbetaald.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>9. Gebruik van de website</h2>
            <p>De content op deze website is uitsluitend informatief. Je mag geen content van deze website kopiëren, verveelvoudigen of verspreiden zonder onze voorafgaande schriftelijke toestemming. We behouden ons het recht voor om content op elk moment zonder aankondiging te wijzigen of te verwijderen.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>10. Toepasselijk recht</h2>
            <p>Op deze voorwaarden is Nederlands recht van toepassing. Eventuele geschillen worden voorgelegd aan de bevoegde rechter in Nederland.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>11. Wijzigingen in deze voorwaarden</h2>
            <p>We kunnen deze algemene voorwaarden op elk moment bijwerken. De meest actuele versie staat altijd op deze pagina. Blijf je onze website of diensten gebruiken na een wijziging, dan geldt dat als acceptatie van de bijgewerkte voorwaarden.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>12. Contact</h2>
            <p>Touch AI Agency<br />Amersfoort, Nederland<br /><a href="mailto:info@touchaiagency.com" className="text-blue-500 hover:underline">info@touchaiagency.com</a></p>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
