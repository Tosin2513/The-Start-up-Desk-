import React from 'react';
import Link from 'next/link';

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-background text-foreground py-16 px-6 sm:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        
        {/* Navigation Return Hook */}
        <div className="flex items-center justify-between text-xs font-medium">
          <Link href="/" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
            ← Back to Home
          </Link>
          <span className="text-muted-foreground/60">Compliance Hub</span>
        </div>

        {/* Header Section */}
        <div className="border-b border-border pb-6">
          <h1 className="font-display text-3xl font-bold text-primary tracking-tight mb-2">TERMS OF SERVICE</h1>
          <p className="text-sm text-muted-foreground">EFFECTIVE DATE: July 19, 2026</p>
        </div>

        {/* Policy Body */}
        <div className="space-y-6 text-sm leading-relaxed text-muted-foreground">
          
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">Interpretation &amp; Definitions</h2>
            <p><strong>Interpretation:</strong> The following definitions shall have the same meaning regardless of whether they appear in singular or plural.</p>
            <p><strong>Definitions:</strong> For the purposes of these Terms of Service:</p>
            <ul className="list-disc pl-5 space-y-2 text-neutral-400">
              <li><strong>Account</strong> means access granted to you to engage with our services, whether via our website, WhatsApp, email, or in-person/virtual communication.</li>
              <li><strong>Company</strong> (referred to as &ldquo;the Company,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) refers to The Startup Desk, a compliance consultancy.</li>
              <li><strong>Country</strong> refers to Nigeria.</li>
              <li><strong>Content</strong> refers to text, documents, images, or other information posted, uploaded, or otherwise made available by you in connection with our services.</li>
              <li><strong>Service</strong> refers to the compliance consulting services offered by The Startup Desk, including our Launch, Monitoring, and Advisory tiers, our website, and our AI chat assistant.</li>
              <li><strong>Terms of Service</strong> (also &ldquo;Terms&rdquo;) means this agreement forming the entire understanding between you and the Company regarding use of the Service.</li>
              <li><strong>You</strong> means the individual, or the company or legal entity on whose behalf that individual is acting, engaging our Service.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">1. Acknowledgment</h2>
            <p><strong>1.1</strong> These Terms govern your use of our Service and the agreement between you and the Company.</p>
            <p><strong>1.2</strong> Your access to and use of the Service is conditioned on your acceptance of these Terms. By accessing or using the Service, you agree to be bound by them. If you disagree with any part, you may not use the Service.</p>
            <p><strong>1.3</strong> You represent that you are over the age of 18. We do not knowingly provide services to persons under 18.</p>
            <p><strong>1.4</strong> Your use of the Service is also conditioned on your acceptance of our Privacy Policy and Cookie Policy, which describe how we collect, use, and disclose your personal information.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white text-red-400">2. Nature of Our Services Important Disclaimer</h2>
            <p><strong>2.1</strong> The Startup Desk is a compliance consultancy. <strong>We are not a law firm. We do not provide legal advice, legal representation, or legal opinions of any kind.</strong></p>
            <p><strong>2.2</strong> Our services are limited to compliance consulting, documentation preparation, regulatory filing assistance, and related advisory work as described on our website and in your specific engagement.</p>
            <p><strong>2.3</strong> Where a matter requires legal representation, litigation, or formal legal advice, we will refer you to a licensed legal practitioner. We are not responsible or liable for the advice, actions, or services provided by any third-party lawyer or firm we refer you to.</p>
            <p><strong>2.4</strong> Nothing on our website, in our communications, or provided by our AI chat assistant constitutes legal advice.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">3. Accounts and Information Accuracy</h2>
            <p><strong>3.1</strong> When engaging our services, you must provide accurate, complete, and current information. Failure to do so may result in delays, errors in filings made on your behalf, or termination of the engagement.</p>
            <p><strong>3.2</strong> You are responsible for safeguarding any account credentials or access details provided to you and must notify us immediately of any unauthorised use.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">4. Acceptable Use</h2>
            <p>In accessing and using our Service, you agree that you will not:</p>
            <ol className="list-alpha pl-5 space-y-1 text-neutral-400">
              <li>a) Use the Service for any unlawful purpose or in violation of applicable law or regulation;</li>
              <li>b) Upload or transmit content that is harmful, offensive, defamatory, or infringes the rights of any third party;</li>
              <li>c) Attempt to gain unauthorised access to any part of our systems or another user&apos;s information;</li>
              <li>d) Interfere with or disrupt the integrity or performance of our website or Service;</li>
              <li>e) Impersonate any person or entity, or misrepresent your affiliation with any business;</li>
              <li>f) Use the Service to transmit unsolicited communications or spam; or</li>
              <li>g) Attempt to reverse engineer, copy, or replicate any part of our platform or proprietary materials.</li>
            </ol>
            <p className="pt-1">Any breach may result in immediate termination of your engagement with us.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">5. Content Responsibility</h2>
            <p><strong>5.1</strong> You are solely responsible for any content, documents, or information you provide to us in connection with your engagement. By submitting content, you represent that you have the right to do so and that it does not violate the rights of any third party or applicable law.</p>
            <p><strong>5.2</strong> We reserve the right to decline to act on, or to request clarification of, any content or instruction we reasonably believe to be inaccurate, unlawful, or outside the scope of our services.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">6. Confidentiality</h2>
            <p><strong>6.1</strong> All information you share with us in connection with our services will be treated as confidential and will not be disclosed to any third party except as described in our Privacy Policy, as required by law, or as necessary to fulfil regulatory filings on your behalf.</p>
            <p><strong>6.2</strong> This confidentiality obligation survives the conclusion of your engagement with us.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">7. Intellectual Property</h2>
            <p><strong>7.1</strong> You retain ownership of all documents and materials you provide to us.</p>
            <p><strong>7.2</strong> By sharing such materials, you grant The Startup Desk a limited, non-exclusive licence to use them solely for the purpose of delivering the services you have engaged us for.</p>
            <p><strong>7.3</strong> Guides, templates, checklists, and other resources made available on our website or Resources Hub that are not produced specifically for your engagement remain the intellectual property of The Startup Desk and may not be reproduced or redistributed without our written permission.</p>
            <p><strong>7.4</strong> Where materials are produced specifically in connection with an engagement (e.g., a bespoke compliance audit report), ownership of that specific deliverable vests in you upon full payment and conclusion of the engagement.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">8. Payment Terms</h2>
            <p><strong>8.1</strong> Payment for our services is made via Payment Links, or by direct bank transfer to our designated account where agreed in writing.</p>
            <p><strong>8.2</strong> Launch is a one-off payment due prior to commencement of work. Monitoring is billed monthly on a subscription basis. Advisory engagements are scoped and quoted individually, with payment terms confirmed in writing before work begins.</p>
            <p><strong>8.3</strong> All fees are denominated in Nigerian Naira unless otherwise agreed in writing.</p>
            <p><strong>8.4</strong> Our refund and cancellation terms are set out in our separate Refund &amp; Cancellation Policy, which forms part of these Terms.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">9. Service Availability</h2>
            <p><strong>9.1</strong> We aim to keep our website and communication channels available at all times, but access may occasionally be affected by maintenance or circumstances beyond our reasonable control.</p>
            <p><strong>9.2</strong> We are not liable for delays or inconvenience arising from temporary unavailability of our website, WhatsApp, email, or third-party tools (including our payment processor or AI chat assistant) where such unavailability is outside our reasonable control.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">10. Limitation of Liability</h2>
            <p><strong>10.1</strong> To the fullest extent permitted by applicable law, The Startup Desk shall not be liable for any indirect, incidental, consequential, or special damages arising out of or in connection with your use of our Service.</p>
            <p><strong>10.2</strong> Our total liability in connection with any engagement shall not exceed the total fees paid by you for that specific engagement.</p>
            <p><strong>10.3</strong> We are not liable for penalties, fines, or losses arising from inaccurate or incomplete information provided by you, or from delays caused by third parties including regulatory bodies (CAC, FIRS, NDPC) or our technology providers.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">11. Termination</h2>
            <p><strong>11.1</strong> We reserve the right to suspend or terminate an engagement where:</p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-400">
              <li>a) You are in breach of these Terms;</li>
              <li>b) Payment for services rendered has not been made;</li>
              <li>c) We are required to do so by law or regulatory obligation; or</li>
              <li>d) The scope of work has been fully delivered and the engagement has formally concluded.</li>
            </ul>
            <p className="pt-1"><strong>11.2</strong> Upon termination, your personal information will be retained in accordance with our Privacy Policy. Any outstanding deliverables will be made available to you prior to closure of the engagement.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">12. Governing Law</h2>
            <p><strong>12.1</strong> These Terms are governed by the laws of the Federal Republic of Nigeria.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">13. Dispute Resolution</h2>
            <p><strong>13.1</strong> If you have a concern or dispute arising from these Terms or your use of our Service, you agree to first notify us in writing and allow us 30 days to resolve the matter informally.</p>
            <p><strong>13.2</strong> If unresolved after that period, either party may refer the matter to a competent court of jurisdiction in Nigeria. Nothing in this clause prevents either party from seeking urgent injunctive or interim relief where necessary.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">14. Severability</h2>
            <p><strong>14.1</strong> If any provision of these Terms is held unenforceable or invalid, that provision will be interpreted to achieve its objective to the greatest extent possible under applicable law, and the remaining provisions will continue in full force and effect.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">15. Changes to These Terms</h2>
            <p><strong>15.1</strong> We reserve the right to modify these Terms at any time. Where a change is material, we will make reasonable efforts to provide at least 30 days&apos; notice before it takes effect.</p>
            <p><strong>15.2</strong> Continued use of our Service after revised Terms take effect constitutes acceptance of the revised Terms. If you do not agree, please discontinue use of our Service.</p>
          </section>

          <section className="space-y-3 text-sm">
            <h2 className="text-lg font-semibold text-white">16. Contact Us</h2>
            <p>If you have questions about these Terms, contact us at:</p>
            <p className="text-blue-400 font-medium">Email: hello@thestartupdesk.com.ng</p>
          </section>

        </div>
      </div>
    </main>
  );
}