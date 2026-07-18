import type { Metadata } from "next"
import { MessageCircle } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { whatsappLink } from "@/lib/site"

export const metadata: Metadata = {
  title: "Services — The Startup Desk",
  description:
    "CAC, FIRS, NDPA, sector licensing — whatever stage you're at, there's a clear path to getting compliant and staying that way.",
}

const comparison = [
  { label: "Best for", pre: "Not yet registered", post: "Newly registered", advisory: "Scaling / regulated" },
  { label: "Commitment", pre: "One-off", post: "One-off or monthly", advisory: "Project-based" },
  { label: "Starting price", pre: "₦50,000", post: "₦12,000/mo or ₦40,000", advisory: "Custom scope" },
]

export default function ServicesPage() {
  return (
    <main className="min-h-svh bg-background">
      <div className="relative overflow-hidden">
        {/* subtle geometric backdrop */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary/5" />
          <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-accent/10" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-8 lg:px-8">
          <SiteHeader />

          {/* page header */}
          <div className="mx-auto max-w-3xl py-16 text-center md:py-20">
            <span
              className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3.5 py-1.5 text-xs font-medium text-muted-foreground"
              style={{ animationDelay: "60ms" }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Pricing &amp; tiers
            </span>
            <h1
              className="animate-fade-in-up mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance text-foreground sm:text-5xl"
              style={{ animationDelay: "140ms" }}
            >
              Every regulation your business needs to deal with handled in one place.
            </h1>
            <p
              className="animate-fade-in-up mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-muted-foreground"
              style={{ animationDelay: "220ms" }}
            >
              CAC, FIRS, NDPA, sector licensing, whatever stage you&apos;re at, there&apos;s a clear path to getting compliant and staying that way.
            </p>
          </div>
        </div>
      </div>

      {/* Tiers Section */}
      <section className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          
          {/* Tier 1: Pre-Incorporation */}
          <div className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-accent">For anyone about to register</span>
              <h3 className="mt-2 font-display text-xl font-bold text-foreground">Start right, not just fast.</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Before you even get your CAC certificate, decisions get made that follow your company for years: structure, share allocation, and categories. Getting this right avoids expensive fixes later.
              </p>
              <ul className="mt-6 space-y-2.5 text-sm text-foreground border-t border-border/60 pt-4">
                <li className="flex items-start gap-2">✔ Name availability &amp; reservation</li>
                <li className="flex items-start gap-2">✔ Structure &amp; share guidance</li>
                <li className="flex items-start gap-2">✔ Full CAC registration filing</li>
                <li className="flex items-start gap-2">✔ Post-registration roadmap</li>
              </ul>
            </div>
            <div className="mt-8">
              <p className="text-sm text-muted-foreground">From <span className="text-2xl font-bold text-foreground">₦50,000</span></p>
              <a
                href={whatsappLink("Hi, I'd like pricing for Pre-Incorporation services")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:brightness-105"
              >
                <MessageCircle className="h-4 w-4" /> For Futher Inquiries
              </a>
            </div>
          </div>

          {/* Tier 2: Post-Incorporation */}
          <div className="flex flex-col rounded-2xl border-2 border-accent bg-card p-6 shadow-md justify-between relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-0.5 text-xs font-semibold text-accent-foreground">Most Common</div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-accent">For newly registered businesses</span>
              <h3 className="mt-2 font-display text-xl font-bold text-foreground">Post-Incorporation Setup</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Getting your CAC certificate is the starting line. Statutory registers, tax registration, annual returns, and data protection setup all follow, miss them, and penalties pile up.
              </p>
              <ul className="mt-6 space-y-2.5 text-sm text-foreground border-t border-border/60 pt-4">
                <li className="flex items-start gap-2">✔ Tax registration (TIN)</li>
                <li className="flex items-start gap-2">✔ Statutory registers setup</li>
                <li className="flex items-start gap-2">✔ Annual returns tracking &amp; filing</li>
                <li className="flex items-start gap-2">✔ NDPA data protection basics</li>
              </ul>
            </div>
            <div className="mt-8">
              <p className="text-sm text-muted-foreground">From <span className="text-2xl font-bold text-foreground">₦12,000</span>/mo or one-off</p>
              <a
                href={whatsappLink("Hi, I'd like pricing for Post-Incorporation services")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground shadow-sm transition-all hover:brightness-105"
              >
                <MessageCircle className="h-4 w-4" /> For further inquiries
              </a>
            </div>
          </div>

          {/* Tier 3: Advisory */}
          <div className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-accent">For scaling or regulated businesses</span>
              <h3 className="mt-2 font-display text-xl font-bold text-foreground">Consulting &amp; Advisory</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Every sector has its own rules: Fintech (CBN), Health (NAFDAC), Data (NDPA). As you grow, we help you figure out exactly what specific frameworks apply to your business operations.
              </p>
              <ul className="mt-6 space-y-2.5 text-sm text-foreground border-t border-border/60 pt-4">
                <li className="flex items-start gap-2">✔ Sector-specific licensing guidance</li>
                <li className="flex items-start gap-2">✔ Employment &amp; HR compliance</li>
                <li className="flex items-start gap-2">✔ Full NDPA program builds</li>
                <li className="flex items-start gap-2">✔ Investor-readiness audits</li>
              </ul>
            </div>
            <div className="mt-8">
              <p className="text-sm text-muted-foreground">Pricing: <span className="text-xl font-bold text-foreground">Custom Scope</span></p>
              <a
                href={whatsappLink("Hi, I'd like to discuss Business Consulting for my company")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:brightness-105"
              >
                <MessageCircle className="h-4 w-4" /> Discuss Scope
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* comparison strip */}
      <section className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
        <div className="animate-fade-in-up overflow-hidden rounded-2xl border border-border bg-card">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="p-4 font-medium text-muted-foreground" />
                <th className="p-4 font-display font-semibold text-foreground">Pre-Incorporation</th>
                <th className="p-4 font-display font-semibold text-foreground">Post-Incorporation</th>
                <th className="p-4 font-display font-semibold text-foreground">Consulting</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr key={row.label} className="border-b border-border last:border-0">
                  <td className="p-4 font-medium text-muted-foreground">{row.label}</td>
                  <td className="p-4 text-foreground">{row.pre}</td>
                  <td className="p-4 text-foreground">{row.post}</td>
                  <td className="p-4 text-foreground">{row.advisory}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* objection handling */}
      <section className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
        <div className="animate-fade-in-up mx-auto max-w-3xl rounded-2xl border border-border bg-muted/40 p-8 text-center md:p-12">
          <h2 className="font-display text-2xl font-bold tracking-tight text-balance text-foreground sm:text-3xl">
            Not a law firm.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-pretty text-muted-foreground">
            The Startup Desk is a compliance consultancy, we handle filings, documentation, and regulatory guidance.
            For anything that requires actual legal representation, we&apos;ll point you to a licensed lawyer we trust.
            Most of what trips founders up isn&apos;t a legal battle,it&apos;s paperwork done wrong or filed late.
            That&apos;s what we fix.
          </p>
        </div>
      </section>

      {/* final CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-24 lg:px-8">
        <div className="animate-fade-in-up relative overflow-hidden rounded-3xl bg-primary px-6 py-14 text-center text-primary-foreground shadow-xl md:px-12">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent/10" />
            <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-primary-foreground/5" />
          </div>
          <div className="relative">
            <h2 className="mx-auto max-w-2xl font-display text-2xl font-bold tracking-tight text-balance sm:text-4xl">
              Not sure which service fits your business?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-primary-foreground/80">
              That&apos;s completely normal. Drop us a text on WhatsApp, tell us a bit about what you&apos;re building, and we&apos;ll get you sorted out with exact pricing.
            </p>
            <div className="mt-8 flex justify-center">
              <a
                href={whatsappLink("Hi, I'm not sure which service fits my business — can you help?")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-7 py-3.5 text-base font-semibold text-accent-foreground shadow-sm transition-all hover:brightness-105 hover:shadow-md"
              >
                <MessageCircle className="h-5 w-5" />
                Let&apos;s Figure It Out
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}