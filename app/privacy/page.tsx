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
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-400 mb-12">Last updated: March 2026</p>

        <div className="prose prose-gray max-w-none space-y-10 text-gray-600 leading-[1.8]">

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>1. Who We Are</h2>
            <p>Touch AI Agency is operated by Joran Tiemessen and Jesper Tiemessen, based in Amersfoort, the Netherlands. We build AI automation systems for businesses. For questions about this policy, contact us at <a href="mailto:info@touchaiagency.com" className="text-blue-500 hover:underline">info@touchaiagency.com</a>.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>2. What Data We Collect</h2>
            <p>We may collect the following personal data when you use our website or contact us:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Name and email address (when you fill in a contact or booking form)</li>
              <li>Company name and role (when provided voluntarily)</li>
              <li>Usage data such as pages visited, browser type, and IP address (via analytics tools)</li>
              <li>Any information you voluntarily provide during a consultation or onboarding</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>3. How We Use Your Data</h2>
            <p>We use your data solely to:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Respond to your inquiries and schedule consultations</li>
              <li>Deliver the services you have engaged us for</li>
              <li>Send relevant updates about our services (only with your consent)</li>
              <li>Improve our website and user experience</li>
            </ul>
            <p className="mt-3">We do not sell, rent, or trade your personal data to any third party.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>4. Legal Basis (GDPR)</h2>
            <p>We process your personal data on the following legal grounds:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li><strong>Contract:</strong> processing is necessary to fulfil a service agreement with you</li>
              <li><strong>Legitimate interest:</strong> to improve our services and respond to inquiries</li>
              <li><strong>Consent:</strong> for any marketing communications, where required</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>5. Data Retention</h2>
            <p>We retain personal data only as long as necessary for the purpose it was collected, or as required by law. Contact and client data is kept for a maximum of 2 years after the end of our engagement, unless a longer retention period is legally required.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>6. Third-Party Services</h2>
            <p>We may use the following third-party tools that may process your data:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li><strong>Google Calendar</strong> (for booking consultations)</li>
              <li><strong>Vercel</strong> (website hosting)</li>
              <li><strong>Analytics tools</strong> (to understand website usage)</li>
            </ul>
            <p className="mt-3">These parties have their own privacy policies and process data in accordance with applicable law.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>7. Your Rights</h2>
            <p>Under the GDPR, you have the right to:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to or restrict processing</li>
              <li>Data portability</li>
              <li>Lodge a complaint with the Dutch Data Protection Authority (Autoriteit Persoonsgegevens)</li>
            </ul>
            <p className="mt-3">To exercise any of these rights, email us at <a href="mailto:info@touchaiagency.com" className="text-blue-500 hover:underline">info@touchaiagency.com</a>.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>8. Cookies</h2>
            <p>Our website may use cookies to improve your browsing experience and analyse traffic. You can disable cookies in your browser settings at any time. We do not use cookies for advertising purposes.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>9. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date. We recommend checking this page periodically.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>10. Contact</h2>
            <p>Touch AI Agency<br />Amersfoort, Netherlands<br /><a href="mailto:info@touchaiagency.com" className="text-blue-500 hover:underline">info@touchaiagency.com</a></p>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
