import React from 'react';
import Link from 'next/link';

export default function RegulatoryDisclosuresPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-300 py-16 px-6 sm:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        
        {/* Header Section */}
        <div className="border-b border-neutral-800 pb-6">
          <h1 className="text-3xl font-bold text-white tracking-tight mb-2">REGULATORY DISCLOSURES</h1>
          <p className="text-sm text-neutral-500">EFFECTIVE DATE: July 19, 2026</p>
        </div>

        {/* Policy Body */}
        <div className="space-y-6 text-sm leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">1. Our Legal Status</h2>
            <p><strong>1.1</strong> The Startup Desk (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;) is a compliance consultancy registered with the Corporate Affairs Commission of Nigeria as a Business Name (RC: 9668977).</p>
            <p><strong>1.2 Regulatory Framework:</strong> <strong>We are not a law firm. We are not registered with, licensed by, or regulated by the Nigerian Bar Association or any legal professional body, and we do not hold ourselves out as one.</strong></p>
            <p><strong>1.3</strong> We do not provide legal advice, legal opinions, legal representation, or advocacy services of any kind, whether under Nigerian law or any other jurisdiction.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">2. Scope of Our Services</h2>
            <p><strong>2.1</strong> Our services are strictly limited to:</p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-400">
              <li>Compliance consulting and guidance on CAC, FIRS, and NDPA-related obligations.</li>
              <li>Preparation and submission of regulatory filings and documentation on your behalf, acting as your agent for administrative purposes.</li>
              <li>General compliance advisory, including audits and structured recommendations.</li>
              <li>Referral to appropriately licensed professionals where a matter falls outside our scope.</li>
            </ul>
            <p className="pt-2"><strong>2.2 Guidance Limit:</strong> Our advice and guidance reflect our understanding of applicable Nigerian regulatory requirements at the time given, based on publicly available regulatory guidance and our own compliance background. It should not be treated as a substitute for independent legal counsel on matters of legal interpretation, dispute, or litigation risk.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">3. When We Refer You Elsewhere</h2>
            <p><strong>3.1</strong> Where a matter you raise with us requires legal representation, contractual drafting beyond standard templates, litigation, or formal legal opinion, we will refer you to an appropriately licensed legal practitioner.</p>
            <p><strong>3.2</strong> We are not liable for the advice, actions, fees, or outcomes of any third-party lawyer or firm we refer you to. Any engagement you enter into with a referred practitioner is a separate agreement between you and them.</p>
            <p><strong>3.3</strong> We do not receive referral fees or commissions from legal practitioners we refer clients to, and our recommendations are based solely on our assessment of fit for your specific corporate matter.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">4. Our AI Chat Assistant</h2>
            <p><strong>4.1</strong> Our website features an AI-powered chat assistant intended to provide general guidance on our services, pricing tiers, and publicly available regulatory information.</p>
            <p><strong>4.2</strong> Responses from the assistant do not constitute legal or professional advice and should not be relied upon as a substitute for a formal engagement with our team.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">5. Regulatory Bodies We Interface With on Your Behalf</h2>
            <p><strong>5.1</strong> In the course of delivering our compliance services, we may submit filings, applications, or official correspondence to:</p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-400">
              <li>sector-specific regulators, where relevant to your engagement (e.g.,CAC, FIRS NAFDAC, CBN, NCC)</li>
            </ul>
            <p className="pt-2"><strong>5.2 Agency Disclaimer:</strong> We act as your agent for the purpose of these submissions. Ultimate legal responsibility for the accuracy of information submitted rests explicitly with you as the business owner, though we take reasonable care to ensure filings reflect the information you provide to us accurately.</p>
          </section>

          <section className="space-y-3 text-sm">
            <h2 className="text-lg font-semibold text-white">6. Complaints</h2>
            <p><strong>6.1</strong> If you have a concern about a service we&apos;ve delivered, please contact us directly at <a href="mailto:hello@thestartupdesk.com.ng" className="text-blue-400 hover:underline">hello@thestartupdesk.com.ng</a> in the first instance, per our dispute resolution process set out in our <Link href="/terms" className="text-blue-400 hover:underline font-medium">Terms of Service</Link>.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">7. Changes to This Disclosure</h2>
            <p><strong>7.1</strong> We may update this page from time to time to reflect changes in our services or regulatory environment. Material changes will be reflected by updating the effective date at the top of this document.</p>
          </section>

        </div>
      </div>
    </main>
  );
}
