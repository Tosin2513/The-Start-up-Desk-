import React from 'react';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
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
          <h1 className="font-display text-3xl font-bold text-primary tracking-tight mb-2">PRIVACY POLICY</h1>
          <p className="text-sm text-muted-foreground">EFFECTIVE DATE: July 19, 2026</p>
        </div>

        {/* Policy Body */}
        <div className="space-y-6 text-sm leading-relaxed text-muted-foreground"> 
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">1. Our Approach to Privacy</h2>
            <p><strong>1.1</strong> The Startup Desk (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. This privacy policy sets out how we collect, store, process, transfer, share, and use data that identifies or is associated with you (&ldquo;personal information&rdquo;), and our use of cookies.</p>
            <p><strong>1.2 Regulatory Notice:</strong> The Startup Desk  is a compliance consultancy providing post-incorporation, tax, and data protection compliance services to early-stage Nigerian startups. <strong>We are not a law firm and do not provide legal representation or legal advice.</strong></p>
            <p><strong>1.3</strong> This privacy policy applies to our website, our contact forms, our AI chat assistant, and any client communications conducted in connection with our services.</p>
            <p><strong>1.4</strong> Before using our website or engaging our services, please ensure you have read and understood our collection, storage, use, and disclosure of your personal information as described below. By using our website or services, you accept and consent to the practices described in this policy.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">2. Personal Information We Collect and How We Use It</h2>
            <p><strong>2.1 Information you give to us:</strong> We collect personal information you voluntarily submit directly to us via our website forms, WhatsApp, phone, email, or our AI chat assistant. This includes information provided when you request a consultation, sign up for a service tier, or submit an enquiry.</p>
            <p><strong>2.2</strong> If you choose not to provide certain personal information, we may be unable to deliver the relevant service to you.</p>
            <p><strong>2.3</strong> The table at Annex 1 sets out the categories of personal information you provide directly, the purpose, the lawful basis we rely on, and applicable retention periods.</p>
            <p><strong>2.4</strong> We also automatically collect certain personal information about how you access and use our website.</p>
            <p><strong>2.5</strong> The table at Annex 2 sets out the categories of personal information collected automatically, the purpose, lawful basis, and retention periods.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">3. Disclosure of Your Personal Information</h2>
            <p><strong>3.1</strong> We do not sell your personal information. We only share it in the limited circumstances below.</p>
            <p><strong>3.2 Regulatory Filings:</strong> We may be required to disclose personal information in response to lawful requests by public authorities, including regulatory bodies such as the Corporate Affairs Commission (CAC), Federal Inland Revenue Service (FIRS), or the Nigeria Data Protection Commission (NDPC), where necessary to deliver the compliance filing services you have engaged us for.</p>
            <p><strong>3.3 Legal Protections:</strong> We may disclose personal information to comply with a legal obligation, enforce our Terms of Service, or protect the rights, property, or safety of The Startup Desk or our clients.</p>
            <p><strong>3.4 Third-Party Sub-processors:</strong> We work with a limited number of trusted third-party service providers who process personal data on our behalf:</p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-400">
              <li>Cloudflare: Website hosting, performance, and security infrastructure.</li>
              <li>Zoho Mail: Secure corporate business email communications.</li>
              <li>Tally.so / Formspree: Client intake and enquiry form processing.</li>
              <li>Secure payment processing (we do not process or store your card details).</li>
              <li>AssistLoop AI: Our AI-powered web chat assistant (see Section 9).</li>
              <li>Google Analytics: Anonymous website usage analytics (see Section 8).</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">4. Storing and Transferring Your Personal Information</h2>
            <p><strong>4.1 Security:</strong> We implement administrative, technical, and physical safeguards to protect your information. Where any account access credentials or corporate login details are shared for compliance tasks, you are responsible for keeping them confidential.</p>
            <p><strong>4.2 Risk Acknowledgment:</strong> While no transmission over the internet is completely secure, we take reasonable measures to protect your personal information. We cannot guarantee absolute security; any transmission is at your own risk.</p>
            <p><strong>4.3 Safeguards:</strong> Technical measures include access controls limiting data access to authorised personnel, secure handling of digital form submissions, and periodic review of our internal data-handling workflows.</p>
            <p><strong>4.4 Cross-Border Transfers:</strong> Your personal information is processed primarily within infrastructure operated by our third-party providers listed in Section 3.4, some of which operate global server networks (e.g., Cloudflare). Where your data is processed outside Nigeria as a result, we take reasonable steps to ensure it remains protected to a standard consistent with the Nigeria Data Protection Act 2023.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">5. Retaining Your Information</h2>
            <p><strong>5.1</strong> We retain personal information only as long as necessary to fulfil the purpose it was collected for, including our legitimate business interests and legal, statutory, or reporting obligations.</p>
            <p><strong>5.2 Execution Criteria:</strong> To determine retention periods, we consider the nature and sensitivity of the information, the potential risk of harm from unauthorised use, the specific purpose of processing, and statutory legal requirements. See Annexes 1 and 2 for data schedules.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">6. Your Rights Under the NDPA 2023</h2>
            <p><strong>6.1</strong> In accordance with the Nigeria Data Protection Act 2023, you possess the following statutory rights regarding your personal data:</p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-400">
              <li><strong>Right of Access:</strong> To obtain confirmation of, and direct access to, your personal information.</li>
              <li><strong>Right to Rectification:</strong> To correct inaccurate, outdated, or incomplete personal information.</li>
              <li><strong>Right to Erasure (&ldquo;Right to be Forgotten&rdquo;):</strong> To request deletion of your personal information where it is no longer necessary for the purpose collected.</li>
              <li><strong>Right to Restriction:</strong> To request that we pause or restrict the processing of your data in certain scenarios.</li>
              <li><strong>Right to Object:</strong> To object to processing on grounds relating to your particular situation, including direct marketing.</li>
              <li><strong>Right to Withdraw Consent:</strong> Where we rely on your explicit consent, you may withdraw it at any time without affecting the lawfulness of prior processing.</li>
              <li><strong>Right to Non-Discrimination:</strong> You will not be denied services or charged differently for exercising any of your privacy rights.</li>
            </ul>
            <p><strong>6.2 Exercise of Rights:</strong> To exercise any of these rights, contact us using the details in Section 12. We may request identity verification before actioning a request, and will respond within 30 days.</p>
            <p><strong>6.3 Statutory Declaration:</strong> We have not sold personal information shared by you in the 12 months preceding the effective date of this policy.</p>
            <p><strong>6.4 Regulatory Complaints:</strong> You have the right to lodge a complaint with the Nigeria Data Protection Commission (NDPC) if you believe our processing does not comply with local law. The NDPC can be contacted via their official portal at ndpc.gov.ng.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">7. Data Breach Response</h2>
            <p><strong>7.1</strong> In the event of a personal data breach likely to result in a risk to your rights and freedoms, we will notify the NDPC within 72 hours of becoming aware of the breach.</p>
            <p><strong>7.2</strong> Where a breach is likely to result in a high risk to your immediate rights and freedoms, we will notify you directly without undue delay, providing sufficient information to allow you to take immediate protective measures.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">8. Cookies and Tracking Tools</h2>
            <p><strong>8.1 Analytics:</strong> Our website uses Google Analytics, which sets cookies (including _ga and _gid) to help us understand how visitors interact with our site, such as pages visited, traffic channels, and general usage patterns. These cookies do not, by themselves, identify you personally.</p>
            <p><strong>8.2 First-Party Data Processing:</strong> To optimize performance and privacy, our tracking tags are served via a first-party Google Tag Gateway managed securely through Cloudflare. This ensures that analytics data is proxied directly via our domain framework rather than allowing direct third-party script intervention on your device.</p>
            <p><strong>8.3 Management:</strong> By continuing to use this website, you acknowledge and consent to this use of analytics cookies. You can disable cookies at any time via your browser settings. Doing so will not prevent you from contacting us or accessing our core services. <strong>See our full <a href="/cookies" className="text-blue-400 hover:underline">Cookie Policy</a> for complete management details.</strong></p>
            <p><strong>8.4</strong> We do not use third-party behavioral advertising cookies on this website.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">9. AI Assistant Disclaimer</h2>
            <p><strong>9.1 Guidance Only:</strong> Our website includes an AI-powered chat assistant (provided via AssistLoop) for rapid guidance regarding our services, compliance tiers, and pricing.</p>
            <p><strong>9.2 Legal Disclaimer:</strong> <strong>This assistant is not a lawyer, does not provide legal advice, and is not a substitute for professional counsel.</strong> Any conversation content is processed by our third-party chat infrastructure to generate real-time responses.</p>
            <p><strong>9.3 Information Guardrail:</strong> Please avoid sharing sensitive personal data, corporate bank details, credentials, or highly confidential trade secrets through the chat assistant that you would not want processed by an automated system.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">10. Our Policy Towards Children</h2>
            <p><strong>10.1</strong> The Startup Desk&rsquo;s services are strictly directed at corporate operators and individuals over 18 years of age. We do not knowingly collect personal information from minors. If you become aware that a minor has provided us with personal information, please contact us so we can purge the record.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">11. Changes to This Policy</h2>
            <p><strong>11.1</strong> We may update this policy from time to time to match changing regulatory standards or operational practices. Material updates will be reflected by modifying the effective date at the top of this page. Continued use of our website after changes are posted constitutes acceptance of the revised policy.</p>
          </section>

          <section className="space-y-3 text-sm">
            <h2 className="text-lg font-semibold text-white">12. Contacting Us</h2>
            <p><strong>12.1</strong> If you have questions, concerns, regulatory requests, or wishes regarding your personal information or this policy, please contact us directly at:</p>
            <p className="text-blue-400 font-medium">Email: hello@thestartupdesk.com.ng</p>
          </section>

          {/* Annex 1 Table */}
          <div className="pt-6 space-y-2">
            <h3 className="text-md font-bold text-white uppercase tracking-wider text-xs">ANNEX 1 - Information You Provide Directly</h3>
            <div className="overflow-x-auto border border-neutral-800 rounded-lg">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-neutral-900 text-white border-b border-neutral-800">
                    <th className="p-3 font-semibold">Category</th>
                    <th className="p-3 font-semibold">Purpose</th>
                    <th className="p-3 font-semibold">Lawful Basis</th>
                    <th className="p-3 font-semibold">Retention</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-800">
                  <tr>
                    <td className="p-3 font-medium text-white">Name</td>
                    <td className="p-3">Client identification and service delivery</td>
                    <td className="p-3">Performance of a Contract</td>
                    <td className="p-3">6 years post-engagement</td>
                  </tr>
                  <tr className="bg-neutral-900/40">
                    <td className="p-3 font-medium text-white">Email Address</td>
                    <td className="p-3">Communication and service delivery</td>
                    <td className="p-3">Performance of a Contract</td>
                    <td className="p-3">6 years post-engagement</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-white">Phone Number</td>
                    <td className="p-3">Direct communication regarding compliance</td>
                    <td className="p-3">Performance of a Contract</td>
                    <td className="p-3">6 years post-engagement</td>
                  </tr>
                  <tr className="bg-neutral-900/40">
                    <td className="p-3 font-medium text-white">Business Details</td>
                    <td className="p-3">Delivering CAC, FIRS, or NDPC compliance</td>
                    <td className="p-3">Contract & Legal Obligation</td>
                    <td className="p-3">6 years post-engagement</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-white">Payment Info</td>
                    <td className="p-3">Processing service payments (via Payment Processors)</td>
                    <td className="p-3">Performance of a Contract</td>
                    <td className="p-3">Per the payment processors terms (we don&rsquo;t store cards)</td>
                  </tr>
                  <tr className="bg-neutral-900/40">
                    <td className="p-3 font-medium text-white">Leads Data</td>
                    <td className="p-3">Responding to inquiries prior to engagement</td>
                    <td className="p-3">Legitimate Interest</td>
                    <td className="p-3">12 months from contact</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Annex 2 Table */}
          <div className="pt-4 space-y-2">
            <h3 className="text-md font-bold text-white uppercase tracking-wider text-xs">ANNEX 2 - Information Collected Automatically</h3>
            <div className="overflow-x-auto border border-neutral-800 rounded-lg">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-neutral-900 text-white border-b border-neutral-800">
                    <th className="p-3 font-semibold">Category</th>
                    <th className="p-3 font-semibold">Purpose</th>
                    <th className="p-3 font-semibold">Lawful Basis</th>
                    <th className="p-3 font-semibold">Retention</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-800">
                  <tr>
                    <td className="p-3 font-medium text-white">IP Address</td>
                    <td className="p-3">Website security and fraud prevention</td>
                    <td className="p-3">Legitimate Interest</td>
                    <td className="p-3">12 months</td>
                  </tr>
                  <tr className="bg-neutral-900/40">
                    <td className="p-3 font-medium text-white">Device Data</td>
                    <td className="p-3">Platform compatibility and UI stability</td>
                    <td className="p-3">Legitimate Interest</td>
                    <td className="p-3">12 months</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-white">Session Data</td>
                    <td className="p-3">Understanding website usage via Gateway</td>
                    <td className="p-3">Legitimate Interest / Consent</td>
                    <td className="p-3">Per Google Analytics standard settings</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}