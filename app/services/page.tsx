import type { Metadata } from "next"
import { MessageCircle } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PricingTiers } from "@/components/services/pricing-tiers"
import { whatsappLink } from "@/lib/site"

export const metadata: Metadata = {
  title: "Services — The Startup Desk",
  description:
    "Compliance handled at every stage. Launch, Monitoring, and Advisory tiers built for exactly where your startup is — CAC filings, tax registration, and regulatory paperwork.",
}

const comparison = [
  { label: "Best for", launch: "Just incorporated", monitoring: "Ongoing operations", advisory: "Scaling / raising" },
  { label: "Commitment", launch: "One-off", monitoring: "Monthly", advisory: "Project-based" },
  { label: "Starting price", launch: "₦75,000", monitoring: "₦12,000/mo", advisory: "Custom" },
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
              Compliance, handled at every stage.
            </h1>
            <p
              className="animate-fade-in-up mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-muted-foreground"
              style={{ animationDelay: "220ms" }}
            >
              Whether you just got your CAC certificate or you&apos;re gearing up for your first raise, there&apos;s a
              tier built for exactly where you are.
            </p>
          </div>
        </div>
      </div>

      {/* tiers */}
      <PricingTiers />

      {/* comparison strip */}
      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="animate-fade-in-up overflow-hidden rounded-2xl border border-border bg-card">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="p-4 font-medium text-muted-foreground" />
                <th className="p-4 font-display font-semibold text-foreground">Launch</th>
                <th className="p-4 font-display font-semibold text-foreground">Monitoring</th>
                <th className="p-4 font-display font-semibold text-foreground">Advisory</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr key={row.label} className="border-b border-border last:border-0">
                  <td className="p-4 font-medium text-muted-foreground">{row.label}</td>
                  <td className="p-4 text-foreground">{row.launch}</td>
                  <td className="p-4 text-foreground">{row.monitoring}</td>
                  <td className="p-4 text-foreground">{row.advisory}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* objection handling */}
      <section className="mx-auto max-w-6xl px-6 pb-16 lg:px-8">
        <div className="animate-fade-in-up mx-auto max-w-3xl rounded-2xl border border-border bg-muted/40 p-8 text-center md:p-12">
          <h2 className="font-display text-2xl font-bold tracking-tight text-balance text-foreground sm:text-3xl">
            Not a law firm. Not trying to be.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-pretty text-muted-foreground">
            The Startup Desk is a compliance consultancy — we handle filings, documentation, and regulatory guidance.
            For anything that requires actual legal representation, we&apos;ll point you to a licensed lawyer we trust.
            Most of what trips founders up isn&apos;t a legal battle — it&apos;s paperwork done wrong or filed late.
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
              Not sure which tier fits? Let&apos;s figure it out together.
            </h2>
            <div className="mt-8 flex justify-center">
              <a
                href={whatsappLink(
                  "Hi The Startup Desk, I'm not sure which tier fits my startup — can you help me figure it out?",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-7 py-3.5 text-base font-semibold text-accent-foreground shadow-sm transition-all hover:brightness-105 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              >
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
