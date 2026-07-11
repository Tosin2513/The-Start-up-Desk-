import Link from "next/link"
import { ArrowRight, MessageCircle, ShieldCheck, FileCheck2, Landmark } from "lucide-react"
import { SiteHeader } from "@/components/site-header"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* subtle geometric backdrop */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary/5" />
        <div className="absolute right-40 top-40 h-40 w-40 rounded-full border border-primary/10" />
        <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-accent/10" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col px-6 py-8 lg:px-8">
        {/* top bar */}
        <SiteHeader />

        {/* hero body */}
        <div className="grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="max-w-2xl">
            <span
              className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3.5 py-1.5 text-xs font-medium text-muted-foreground"
              style={{ animationDelay: "80ms" }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Compliance made effortless for founders
            </span>

            <h1
              className="animate-fade-in-up mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance text-foreground sm:text-5xl lg:text-6xl"
              style={{ animationDelay: "160ms" }}
            >
              Compliance shouldn&apos;t be the reason your startup gets fined.
            </h1>

            <p
              className="animate-fade-in-up mt-6 max-w-xl text-lg leading-relaxed text-pretty text-muted-foreground"
              style={{ animationDelay: "240ms" }}
            >
              We handle your CAC filings, tax registration, and the regulatory paperwork that
              trips founders up—so you can stay focused on building, not battling deadlines.
            </p>

            <div
              className="animate-fade-in-up mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
              style={{ animationDelay: "320ms" }}
            >
              <Link
                href="/services"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-base font-semibold text-accent-foreground shadow-sm transition-all hover:brightness-105 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Get Started
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href="https://wa.me/"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary/25 bg-transparent px-6 py-3.5 text-base font-semibold text-primary transition-colors hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </a>
            </div>

            <p
              className="animate-fade-in-up mt-8 text-sm text-muted-foreground"
              style={{ animationDelay: "400ms" }}
            >
              Trusted by early-stage teams across fintech, health, and commerce.
            </p>
          </div>

          {/* supporting card */}
          <div
            className="animate-fade-in-up relative rounded-2xl border border-border bg-primary p-8 text-primary-foreground shadow-xl"
            style={{ animationDelay: "300ms" }}
          >
            <p className="text-sm font-medium uppercase tracking-wider text-accent">
              What we take off your plate
            </p>
            <ul className="mt-6 flex flex-col gap-5">
              <li className="flex items-start gap-4">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-foreground/10">
                  <Landmark className="h-5 w-5 text-accent" />
                </span>
                <div>
                  <p className="font-semibold">CAC filings</p>
                  <p className="text-sm leading-relaxed text-primary-foreground/70">
                    Registration, annual returns, and status changes done right.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-foreground/10">
                  <FileCheck2 className="h-5 w-5 text-accent" />
                </span>
                <div>
                  <p className="font-semibold">Tax registration</p>
                  <p className="text-sm leading-relaxed text-primary-foreground/70">
                    TIN, VAT, and PAYE set up correctly from day one.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-foreground/10">
                  <ShieldCheck className="h-5 w-5 text-accent" />
                </span>
                <div>
                  <p className="font-semibold">Regulatory paperwork</p>
                  <p className="text-sm leading-relaxed text-primary-foreground/70">
                    Permits, licenses, and filings tracked before they lapse.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
