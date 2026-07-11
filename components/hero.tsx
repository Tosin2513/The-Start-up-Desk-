import Link from "next/link"
import { ArrowRight, MessageCircle, ShieldCheck, FileCheck2, Landmark } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { whatsappLink } from "@/lib/site"

export function Hero() {
  return (
    /* Added the animate-silk class here for the moving backdrop */
    <section className="relative overflow-hidden animate-silk min-h-screen flex flex-col justify-center">
      {/* Subtle overlay to keep text hyper-legible over the moving silk gradient */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-white/20 backdrop-blur-[2px]" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col px-6 py-8 lg:px-8">
        {/* Top bar navigation */}
        <SiteHeader />

        {/* Hero layout structure */}
        <div className="grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="max-w-2xl">
            <span
              className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white/80 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold tracking-wide text-primary"
              style={{ animationDelay: "80ms" }}
            >
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              Compliance made effortless for founders
            </span>

            {/* Dynamic, moving word headline */}
            <h1
              className="animate-fade-in-up mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-primary sm:text-5xl lg:text-6xl"
              style={{ animationDelay: "160ms" }}
            >
              Compliance shouldn&apos;t be the reason your startup{" "}
              <span className="animate-word-slide text-accent">
                <span className="word-slider flex flex-col text-left">
                  <span>gets fined.</span>
                  <span>stalls growth.</span>
                  <span>loses momentum.</span>
                </span>
              </span>
            </h1>

            <p
              className="animate-fade-in-up mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
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
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-base font-semibold text-accent-foreground shadow-sm transition-all hover:bg-accent/90 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                Get Started
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href={whatsappLink(
                  "Hi The Startup Desk, I'd like to talk about keeping my startup compliant.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-white/90 backdrop-blur-sm px-6 py-3.5 text-base font-semibold text-primary transition-all hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <MessageCircle className="h-5 w-5 text-accent transition-transform group-hover:scale-105" />
                Chat on WhatsApp
              </a>
            </div>

            <p
              className="animate-fade-in-up mt-8 text-sm font-medium text-muted-foreground/80"
              style={{ animationDelay: "400ms" }}
            >
              Trusted by early-stage teams across fintech, health, and commerce.
            </p>
          </div>

          {/* Clean, high-contrast structural right card */}
          <div
            className="animate-fade-in-up relative rounded-2xl border border-primary/10 bg-primary p-8 text-primary-foreground shadow-xl lg:p-9"
            style={{ animationDelay: "300ms" }}
          >
            <p className="text-xs font-bold uppercase tracking-wider text-accent/90">
              What we take off your plate
            </p>
            <ul className="mt-6 flex flex-col gap-6">
              <li className="flex items-start gap-4">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                  <Landmark className="h-5 w-5 text-white" />
                </span>
                <div>
                  <p className="font-semibold text-white">CAC filings</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-white/70">
                    Registration, annual returns, and status changes done right.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                  <FileCheck2 className="h-5 w-5 text-white" />
                </span>
                <div>
                  <p className="font-semibold text-white">Tax registration</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-white/70">
                    TIN, VAT, and PAYE set up correctly from day one.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                  <ShieldCheck className="h-5 w-5 text-white" />
                </span>
                <div>
                  <p className="font-semibold text-white">Regulatory paperwork</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-white/70">
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
