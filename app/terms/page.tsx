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
          Terms of Service
        </h1>
        <p className="text-sm text-gray-400 mb-12">Last updated: March 2026</p>

        <div className="prose prose-gray max-w-none space-y-10 text-gray-600 leading-[1.8]">

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>1. About Us</h2>
            <p>These Terms of Service govern the use of the website and services provided by Touch AI Agency, operated by Joran Tiemessen and Jesper Tiemessen, based in Amersfoort, the Netherlands. By using our website or engaging our services, you agree to these terms.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>2. Services</h2>
            <p>Touch AI Agency provides AI automation consulting and implementation services, including but not limited to:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>AI workflow automation</li>
              <li>Lead generation systems</li>
              <li>Custom AI chatbots and assistants</li>
              <li>Data pipeline automation</li>
              <li>AI strategy consulting</li>
            </ul>
            <p className="mt-3">The specific scope, deliverables, timeline, and pricing of each engagement are agreed upon individually before work begins.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>3. Bookings and Consultations</h2>
            <p>Free consultations can be booked via our website. These calls are non-binding and carry no obligation for either party. Touch AI Agency reserves the right to decline any engagement without providing a reason.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>4. Payment</h2>
            <p>Payment terms are specified in the individual service agreement or proposal. Unless otherwise agreed:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Invoices are due within 14 days of receipt</li>
              <li>Late payments may incur a statutory interest charge under Dutch law</li>
              <li>Work may be paused if payment is overdue by more than 14 days</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>5. Intellectual Property</h2>
            <p>Upon full payment, the client receives ownership of all custom deliverables created specifically for them. Touch AI Agency retains the right to reuse generic components, frameworks, and methodologies developed during the engagement. We may reference the client relationship in our portfolio unless otherwise agreed in writing.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>6. Confidentiality</h2>
            <p>Both parties agree to keep confidential any sensitive business information shared during the engagement. This obligation remains in effect for 2 years after the end of the engagement.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>7. Limitation of Liability</h2>
            <p>Touch AI Agency is not liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability in any case is limited to the amount paid for the specific service that gave rise to the claim.</p>
            <p className="mt-3">We do not guarantee specific results such as revenue increases or lead generation targets, as these depend on factors beyond our control.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>8. Cancellation</h2>
            <p>Either party may terminate an ongoing engagement with 14 days written notice. Work completed up to the point of cancellation will be invoiced at the agreed rate. Prepaid amounts for work not yet started will be refunded.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>9. Website Use</h2>
            <p>The content on this website is for informational purposes only. You may not copy, reproduce, or distribute any content from this website without our prior written permission. We reserve the right to change or remove content at any time without notice.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>10. Governing Law</h2>
            <p>These terms are governed by Dutch law. Any disputes will be submitted to the competent court in the Netherlands.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>11. Changes to These Terms</h2>
            <p>We may update these Terms of Service at any time. The most current version will always be available on this page. Continued use of our website or services after changes constitutes acceptance of the updated terms.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>12. Contact</h2>
            <p>Touch AI Agency<br />Amersfoort, Netherlands<br /><a href="mailto:info@touchaiagency.com" className="text-blue-500 hover:underline">info@touchaiagency.com</a></p>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
