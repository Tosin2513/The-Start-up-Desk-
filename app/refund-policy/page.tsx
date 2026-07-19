import React from 'react';
import Link from 'next/link';

export default function RefundPolicyPage() {
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
          <h1 className="font-display text-3xl font-bold text-primary tracking-tight mb-2">REFUND &amp; CANCELLATION POLICY</h1>
          <p className="text-sm text-muted-foreground">EFFECTIVE DATE: July 19, 2026</p>
          <p className="text-xs text-muted-foreground mt-2 italic">This Refund &amp; Cancellation Policy forms part of our Terms of Service and should be read alongside them.</p>
        </div>

        {/* Policy Body — Stays open to wrap all sections perfectly */}
        <div className="space-y-6 text-sm leading-relaxed text-muted-foreground">
             
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-primary">1. Overview</h2>
            <p><strong>1.1</strong> We want you to be clear on what to expect before you pay us. This policy sets out how refunds and cancellations work across our three service tiers.</p>
            <p><strong>1.2 Reversibility Limit:</strong> Because our services involve regulatory work and filings submitted to the CAC and other statutory bodies, some stages of an engagement are not reversible once completed. This policy explains exactly where that line sits for each tier.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-primary">2. For anyone about to register (One-Off Engagement)</h2>
            <p><strong>2.1</strong> This is a fixed-scope, one-off engagement covering CAC pre and post-incorporation filing, statutory registers setup, and related deliverables as described on our Services page.</p>
            <p><strong>2.2 Before Work Begins:</strong> If you cancel before we have started any filing, documentation, or submission work on your behalf, you are entitled to a full refund, less any third-party statutory fees already paid on your behalf (e.g., CAC filing fees), which are non-refundable once submitted to the relevant regulator.</p>
            <p><strong>2.3 Once Work Has Begun:</strong> If work has commenced but is not yet complete, we will refund the portion of fees corresponding to work not yet performed, at our reasonable assessment.</p>
            <p><strong>2.4 Submission Rule:</strong> Once a filing has been submitted to a regulator (CAC, FIRS, etc.), that specific filing fee and the associated service fee become non-refundable, as the submission cannot be reversed or undone by us.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-primary">3. For newly registered businesses (Subscription)</h2>
            <p><strong>3.1</strong> This is billed monthly in advance.</p>
            <p><strong>3.2 Cancellation Timing:</strong> You may cancel your Monitoring subscription at any time. Cancellation will take effect at the end of your current billing cycle. we do not provide partial-month refunds for the cycle already in progress.</p>
            <p><strong>3.3 Payments After Cancellation:</strong> No further payments will be collected after cancellation takes effect. Any compliance monitoring, reminders, or filings already completed during an active billing cycle are considered delivered and are not refundable.</p>
            <p><strong>3.4 Grace Period:</strong> If you wish to cancel, notify us at <a href="mailto:hello@thestartupdesk.com.ng" className="text-blue-400 hover:underline">hello@thestartupdesk.com.ng</a> or via WhatsApp at least 5 business days before your next billing date to avoid being charged for the following cycle.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-primary">4. For scaling or regulated businesses (Custom Scope)</h2>
            <p><strong>4.1</strong> Custom engagements are scoped and quoted individually before work begins, with payment terms including any deposit, milestone, or upfront structure, confirmed in writing as part of your engagement.</p>
            <p><strong>4.2 Scoped Assessment:</strong> Refunds for Advisory engagements are assessed against work actually delivered at the point of cancellation, as set out in your specific engagement agreement. Where no specific terms were agreed in writing, the general principles in Section 2 (work-in-progress refunded, completed/submitted work non-refundable) apply.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-primary text-red-400">5. What is Non Refundable</h2>
            <p><strong>5.1</strong> Regardless of tier, the following are strictly non-refundable once incurred:</p>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground/80">
              <li>Statutory or government filing fees already paid to a regulator (such as CAC, FIRS, or NDPC) on your behalf.</li>
              <li>Payment processor fees charged by Payment processor on the original transaction metadata.</li>
              <li>Work already completed and delivered to you (e.g., a finished documentation draft, filed corporate return, or completed compliance audit report).</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-primary">6. How Refunds Are Processed</h2>
            <p><strong>6.1 Processing Windows:</strong> Approved refunds are processed back to the original payment method within 10 business days of approval, subject to Payment processor's own processing timelines, which sit entirely outside our control.</p>
            <p><strong>6.2 Requests:</strong> To request a formal refund, contact us directly at <a href="mailto:hello@thestartupdesk.com.ng" className="text-blue-400 hover:underline">hello@thestartupdesk.com.ng</a> with your payment transaction reference and the core reason for the request.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-primary">7. Disputes</h2>
            <p><strong>7.1</strong> If you disagree with a refund assessment decision, please refer directly to the dispute resolution process set out in Section 13 of our <Link href="/terms" className="text-blue-400 hover:underline font-medium">Terms of Service</Link>. We respectfully ask that you raise it with our team directly first before pursuing any external legal avenues.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-primary">8. Changes to This Policy</h2>
            <p><strong>8.1</strong> We may update this policy from time to time. Material updates will be reflected by modifying the effective date at the top of this page and will not apply retroactively to engagements already active or paid for under a previous version of this text.</p>
          </section>

        </div>
      </div>
    </main>
  );
}