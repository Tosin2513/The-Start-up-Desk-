import Link from "next/link"
import { ArrowRight, ShieldCheck, FileCheck2, Landmark } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { whatsappLink } from "@/lib/site"

export function Hero() {
  return (
    <section className="relative overflow-hidden animate-silk flex flex-col justify-center">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-white/10 backdrop-blur-[1px]" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col px-6 py-8 lg:px-8">
        <SiteHeader />

        <div className="grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="max-w-2xl">
            <span
              className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white/80 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold tracking-wide text-primary"
              style={{ animationDelay: "80ms" }}
            >
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              Compliance made effortless for founders
            </span>

            <h1
              className="animate-fade-in-up mt-6 font-display text-4xl font-bold leading-[1.15] tracking-tight text-primary sm:text-5xl lg:text-6xl"
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
              trips founders up so you can stay focused on building, not battling deadlines.[span_2](start_span)[span_2](end_span)
            </p>

            <div
              className="animate-fade-in-up mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
              style={{ animationDelay: "320ms" }}
            >
              <Link
                href="/services"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-base font-semibold text-accent-foreground shadow-sm transition-all hover:bg-accent/90 hover:shadow-md"
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
                className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#25D366] px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-all hover:bg-[#20ba59] hover:shadow-md"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
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
                  <p className="font-semibold text-white">CAC filings[span_3](start_span)[span_3](end_span)</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-white/70">
                    Registration, annual returns, and status changes done right.[span_4](start_span)[span_4](end_span)
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                  <FileCheck2 className="h-5 w-5 text-white" />
                </span>
                <div>
                  <p className="font-semibold text-white">Tax registration[span_5](start_span)[span_5](end_span)</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-white/70">
                    TIN, VAT, and PAYE set up correctly from day one.[span_6](start_span)[span_6](end_span)
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
