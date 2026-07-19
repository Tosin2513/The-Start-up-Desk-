import React from 'react';

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-300 py-16 px-6 sm:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        
        {/* Header Section */}
        <div className="border-b border-neutral-800 pb-6">
          <h1 className="text-3xl font-bold text-white tracking-tight mb-2">COOKIE POLICY</h1>
          <p className="text-sm text-neutral-500">EFFECTIVE DATE: July 19, 2026</p>
        </div>

        {/* Policy Body */}
        <div className="space-y-6 text-sm leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">1. What This Policy Covers</h2>
            <p><strong>1.1</strong> This Cookie Policy explains how The Startup Desk (&ldquo;we,&rdquo; &ldquo;our,&rdquo; &ldquo;us&rdquo;) uses cookies and similar tracking technologies on our website, and the choices available to you regarding their use.</p>
            <p><strong>1.2</strong> This policy should be read alongside our Privacy Policy, which explains more broadly how we collect and use personal information.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">2. What Are Cookies</h2>
            <p><strong>2.1</strong> Cookies are small text files placed on your device when you visit a website. They allow the site, or a trusted third party, to recognise your device and remember certain information about your visit &mdash; such as your interface preferences or how you navigated the site.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">3. Cookies We Use</h2>
            <p><strong>3.1</strong> We use only one category of cookies on this website: analytics cookies, delivered via Google Analytics.</p>
            
            {/* Table Injection */}
            <div className="pt-2 overflow-x-auto border border-neutral-800 rounded-lg">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-neutral-900 text-white border-b border-neutral-800">
                    <th className="p-3 font-semibold">Cookie</th>
                    <th className="p-3 font-semibold">Set By</th>
                    <th className="p-3 font-semibold">Purpose</th>
                    <th className="p-3 font-semibold">Typical Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-800">
                  <tr>
                    <td className="p-3 font-medium text-white">`_ga`</td>
                    <td className="p-3">Google Analytics</td>
                    <td className="p-3">Distinguishes unique website visitors anonymously.</td>
                    <td className="p-3">Up to 2 years</td>
                  </tr>
                  <tr className="bg-neutral-900/40">
                    <td className="p-3 font-medium text-white">`_gid`</td>
                    <td className="p-3">Google Analytics</td>
                    <td className="p-3">Distinguishes unique website visitors anonymously.</td>
                    <td className="p-3">24 hours</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="pt-2"><strong>3.2</strong> These cookies help us understand how visitors use our website &mdash; for example, which pages are visited most, how long visitors stay, and how they arrive at our site. This information is aggregated and does not, by itself, identify you personally.</p>
            <p><strong>3.3</strong> We strictly do not use:</p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-400">
              <li>Behavioral advertising or retargeting cookies</li>
              <li>Third-party outbound marketing trackers</li>
              <li>Social media tracking pixels</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">4. Other Infrastructure Processing</h2>
            <p><strong>4.1 Infrastructure:</strong> Our website is hosted via Cloudflare, which may process technical request data (such as IP addresses) as part of standard web security and content delivery &mdash; this is infrastructure-level processing, not a cookie database, and does not track you across other external sites for marketing purposes.</p>
            <p><strong>4.2 AI Assistant:</strong> If you interact with our AI chat assistant (powered by AssistLoop), it may use session-based technical identifiers to maintain your active conversation sequence. This data is used solely to operate the live chat engine window.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">5. Your Choices</h2>
            <p><strong>5.1 Controls:</strong> You can control or disable cookies at any time through your browser settings. Most browsers allow you to:</p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-400">
              <li>View what cookies are actively stored on your physical device</li>
              <li>Delete cookies individually or purge them entirely</li>
              <li>Block cookies from specific or all websites going forward</li>
            </ul>
            <p><strong>5.2 Non-Discrimination:</strong> If you disable analytics cookies, our website will continue to function normally &mdash; you will not lose access to any content, forms, or consultancy tiers. You will simply no longer be included in our anonymised usage analytics models.</p>
            <p><strong>5.3</strong> Because we do not use cookies for advertising, marketing, or cross-site profiling tracking, there is no &ldquo;personalised experience&rdquo; layout you would lose by disabling them.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">6. Consent Framework</h2>
            <p><strong>6.1</strong> By continuing to browse this website, you consent to our use of analytics cookies as described above.</p>
            <p><strong>6.2</strong> If you do not consent, please disable cookies in your browser panel before continuing to use the site, per the details in Section 5.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">7. Changes to This Policy</h2>
            <p><strong>7.1</strong> We may update this Cookie Policy from time to time to reflect changes in the tools we deploy or applicable data laws. Material changes will be reflected by updating the effective date at the top of this document.</p>
          </section>

          <section className="space-y-3 text-sm">
            <h2 className="text-lg font-semibold text-white">8. Contact Us</h2>
            <p><strong>8.1</strong> If you have questions about this policy or our data habits, contact us directly at:</p>
            <p className="text-blue-400 font-medium">Email: hello@thestartupdesk.com.ng</p>
          </section>

        </div>
      </div>
    </main>
  );
}