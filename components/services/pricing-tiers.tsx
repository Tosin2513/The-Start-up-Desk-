import { ArrowRight, MessageCircle, Check, Rocket, Radar, TrendingUp } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { whatsappLink } from "@/lib/site"

type Tier = {
  id: string
  icon: LucideIcon
  tag: string
  name: string
  headline: string
  copy: string
  includedLabel: string
  included: string[]
  who: string
  priceLabel: string
  price: string
  cta: string
  href: string
  featured?: boolean
}

const tiers: Tier[] = [
  {
    id: "launch",
    icon: Rocket,
    tag: "For founders just getting started",
    name: "Launch",
    headline: "Get compliant from day one — not after something goes wrong.",
    copy: "Most compliance problems start in the first 90 days — a missed registration, a document filed wrong, a step nobody told you about. Launch handles the essentials so your company is properly set up from the start, not patched together later.",
    includedLabel: "What's included",
    included: [
      "CAC post-incorporation filing",
      "Statutory registers setup",
      "FIRS tax registration (TIN)",
      "Compliance starter checklist for your specific business type",
      "Optional: brand identity add-on (logo, basic style guide)",
    ],
    who: "Newly incorporated companies, first few months in.",
    priceLabel: "From",
    price: "₦75,000",
    cta: "Get Started",
    href: whatsappLink(
      "Hi The Startup Desk, I'm interested in the Launch package for my newly incorporated company.",
    ),
  },
  {
    id: "monitoring",
    icon: Radar,
    tag: "For founders who don't want to think about deadlines",
    name: "Monitoring",
    headline: "Stay compliant, automatically.",
    copy: "Annual returns. Register updates. Renewal deadlines. None of these are complicated on their own — but miss enough of them and CAC can strike your company off. Monitoring means someone's watching your compliance calendar so you don't have to.",
    includedLabel: "What's included",
    included: [
      "Annual returns tracking and filing",
      "Statutory register updates",
      "Deadline reminders before they become problems",
      "Ongoing regulatory check-ins",
      "Priority WhatsApp access for compliance questions",
    ],
    who: "Companies 6+ months in, already operating, want it off their plate.",
    priceLabel: "From",
    price: "₦12,000/mo",
    cta: "Subscribe",
    href: whatsappLink(
      "Hi The Startup Desk, I'd like to set up the Monitoring plan to stay on top of my filings and deadlines.",
    ),
    featured: true,
  },
  {
    id: "advisory",
    icon: TrendingUp,
    tag: "For founders scaling, hiring, or raising",
    name: "Advisory",
    headline: "The compliance layer that comes with growth.",
    copy: "Hiring your first employees, handling customer data, entering a regulated sector, or prepping for investor due diligence all bring compliance requirements most founders don't see coming until it costs them a deal. Advisory is built around your specific stage and sector — scoped to what you actually need, not a generic package.",
    includedLabel: "What's included (scoped per engagement)",
    included: [
      "NDPA / data protection compliance programs",
      "Employment contracts and HR structuring",
      "Sector-specific licensing guidance",
      "Investor-readiness compliance audits",
    ],
    who: "Funded, hiring, or scaling startups with more complex needs.",
    priceLabel: "",
    price: "Custom scope",
    cta: "Book a Consultation",
    href: whatsappLink(
      "Hi The Startup Desk, I'd like to book an Advisory consultation about compliance for my scaling startup.",
    ),
  },
]

export function PricingTiers() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-8 lg:px-8">
      <div className="grid items-start gap-6 lg:grid-cols-3">
        {tiers.map((tier, i) => {
          const Icon = tier.icon
          const featured = tier.featured
          return (
            <div
              key={tier.id}
              className={`animate-fade-in-up flex h-full flex-col rounded-2xl border p-7 shadow-sm ${
                featured
                  ? "border-primary bg-primary text-primary-foreground shadow-xl lg:-mt-4"
                  : "border-border bg-card"
              }`}
              style={{ animationDelay: `${120 + i * 100}ms` }}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                    featured ? "bg-primary-foreground/10 text-accent" : "bg-primary/8 text-primary"
                  }`}
                >
                  <Icon className="h-5 w-5" strokeWidth={2.1} />
                </span>
                {featured && (
                  <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                    Most popular
                  </span>
                )}
              </div>

              <p
                className={`mt-5 text-xs font-medium uppercase tracking-wider ${
                  featured ? "text-accent" : "text-accent"
                }`}
              >
                {tier.name}
              </p>
              <p
                className={`mt-1 text-sm ${featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}
              >
                {tier.tag}
              </p>

              <h3
                className={`mt-4 font-display text-xl font-bold leading-snug text-balance ${
                  featured ? "text-primary-foreground" : "text-foreground"
                }`}
              >
                {tier.headline}
              </h3>

              <p
                className={`mt-3 text-sm leading-relaxed text-pretty ${
                  featured ? "text-primary-foreground/75" : "text-muted-foreground"
                }`}
              >
                {tier.copy}
              </p>

              <div className="mt-6">
                <p
                  className={`text-xs font-semibold uppercase tracking-wider ${
                    featured ? "text-primary-foreground/60" : "text-muted-foreground"
                  }`}
                >
                  {tier.includedLabel}
                </p>
                <ul className="mt-3 flex flex-col gap-2.5">
                  {tier.included.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed">
                      <Check
                        className={`mt-0.5 h-4 w-4 shrink-0 ${featured ? "text-accent" : "text-primary"}`}
                        strokeWidth={2.4}
                      />
                      <span className={featured ? "text-primary-foreground/90" : "text-foreground"}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <p
                className={`mt-6 text-sm leading-relaxed ${
                  featured ? "text-primary-foreground/70" : "text-muted-foreground"
                }`}
              >
                <span className="font-semibold">Who it&apos;s for: </span>
                {tier.who}
              </p>

              {/* footer pinned to bottom */}
              <div className="mt-auto pt-7">
                <div className="flex items-baseline gap-1.5">
                  {tier.priceLabel && (
                    <span
                      className={`text-sm ${featured ? "text-primary-foreground/60" : "text-muted-foreground"}`}
                    >
                      {tier.priceLabel}
                    </span>
                  )}
                  <span
                    className={`font-display text-2xl font-bold ${
                      featured ? "text-primary-foreground" : "text-foreground"
                    }`}
                  >
                    {tier.price}
                  </span>
                </div>

                <a
                  href={tier.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-base font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                    featured
                      ? "bg-accent text-accent-foreground shadow-sm hover:brightness-105 hover:shadow-md focus-visible:ring-accent"
                      : "border border-primary/25 text-primary hover:bg-primary/5 focus-visible:ring-primary"
                  }`}
                >
                  {tier.id === "advisory" && <MessageCircle className="h-5 w-5" />}
                  {tier.cta}
                  {tier.id !== "advisory" && (
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  )}
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
