import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import { MessageCircle, CheckCircle2, ArrowRight } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { whatsappLink } from "@/lib/site"

export const metadata: Metadata = {
  title: "Services: The Startup Desk",
  description: "CAC, NAFDAC, NDPA, sector licensing; whatever stage you're at, there's a clear path to getting compliant and staying that way.",
}

const comparison = [
  { label: "Best for", pre: "Not yet registered", post: "Newly registered", advisory: "Scaling / regulated" },
  { label: "Commitment", pre: "One-off", post: "One-off or monthly", advisory: "Project-based" },
  { label: "Starting price", pre: "₦50,000", post: "₦12,000/mo or ₦40,000", advisory: "Custom scope" },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      
      {/* Dynamic Animated Backdrop Section */}
      <div className="relative overflow-hidden animate-silk py-6 border-b border-border/40">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-white/10 backdrop-blur-[1px]" />
        
        <div className="relative mx-auto w-full max-w-6xl px-6 lg:px-8">
          <SiteHeader />

          {/* PAGE HEADER */}
          <div className="mx-auto max-w-3xl py-16 text-center md:py-24">
            <span className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-accent/20 bg-white/90 backdrop-blur-md px-4 py-2 text-xs font-bold tracking-wider text-accent">
              Pricing &amp; Tiers
            </span>
            <h1 
              className="animate-fade-in-up mt-6 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-primary sm:text-5xl lg:text-6xl"
              style={{ animationDelay: "100ms" }}
            >
              Every regulation your business needs to deal with handled in one place.
            </h1>
            <p 
              className="animate-fade-in-up mx-auto mt-6 max-w-2xl text-lg md:text-xl font-medium leading-relaxed text-muted-foreground"
              style={{ animationDelay: "200ms" }}
            >
              CAC, NAFDAC, NDPA, sector licensing; whatever stage you&apos;re at, there&apos;s a clear path to getting compliant and staying that way.
            </p>
          </div>
        </div>
      </div>

      {/* TIERS SECTION */}
      <section className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-8 md:grid-cols-3 items-stretch">
          
          {/* Tier 1: Pre-Incorporation */}
          <div className="bg-card border border-border p-6 rounded-3xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-accent block mb-2">For anyone about to register</span>
              <h3 className="font-display text-2xl font-extrabold tracking-tight text-primary">Start right, not just fast.</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Before you even get your CAC certificate, decisions get made that follow your company for years: structure, share allocation, and categories. Getting this right avoids expensive fixes later.
              </p>
              <ul className="mt-6 space-y-3 text-sm font-medium text-foreground border-t border-border/60 pt-6">
                
                <li className="flex items-start gap-2.5"><CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" /> Structure Guidance</li>
                <li className="flex items-start gap-2.5"><CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" /> CAC registration filing</li>
                <li className="flex items-start gap-2.5"><CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" /> Post-registration roadmap</li>
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-border/40">
              <p className="text-sm text-muted-foreground font-medium">From <span className="text-3xl font-extrabold text-primary">₦50,000</span></p>
              <p className="text-xs italic text-muted-foreground mt-1"> *Fees start from ₦50,000 for Business Name registration</p>
              <a
                href={whatsappLink("Hi, I'd like pricing for Pre-Incorporation services")}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-bold text-white shadow-sm transition-all hover:bg-[#20ba5a]"
              >
                <svg className="h-4 w-4 fill-current text-white transition-transform group-hover:scale-110" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Tier 2: Post-Incorporation (Highlighted Accent Tier) */}
          <div className="bg-card border-2 border-accent p-6 rounded-3xl shadow-md hover:shadow-lg transition-all flex flex-col justify-between relative">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-bold tracking-wide text-accent-foreground shadow-sm">
              Most Common
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-accent block mb-2 mt-2">For newly registered businesses</span>
              <h3 className="font-display text-2xl font-extrabold tracking-tight text-primary">Post-Incorporation Setup</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Getting your CAC certificate is the starting line. Statutory registers, tax registration, annual returns, and data protection setup all follow. Miss them, and penalties pile up.
              </p>
              <ul className="mt-6 space-y-3 text-sm font-medium text-foreground border-t border-border/60 pt-6">
              
                <li className="flex items-start gap-2.5"><CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" /> Statutory registers setup</li>
                <li className="flex items-start gap-2.5"><CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" /> Annual returns tracking &amp; filing</li>
                <li className="flex items-start gap-2.5"><CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" /> Data protection basics</li>
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-border/40">
              <p className="text-sm text-muted-foreground font-medium">From <span className="text-3xl font-extrabold text-primary">₦12,000</span>/mo or one-off</p>
              <a
                href={whatsappLink("Hi, I'd like pricing for Post-Incorporation services")}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-bold text-white shadow-sm transition-all hover:bg-[#20ba5a]"
              >
                <svg className="h-4 w-4 fill-current text-white transition-transform group-hover:scale-110" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Tier 3: Advisory */}
          <div className="bg-card border border-border p-6 rounded-3xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-accent block mb-2">For scaling or regulated businesses</span>
              <h3 className="font-display text-2xl font-extrabold tracking-tight text-primary">Consulting &amp; Advisory</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Every sector has its own rules: Fintech (CBN), Health (NAFDAC), Data (NDPA). As you grow, we help you figure out exactly what specific frameworks apply to your business operations.
              </p>
              <ul className="mt-6 space-y-3 text-sm font-medium text-foreground border-t border-border/60 pt-6">
                <li className="flex items-start gap-2.5"><CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" /> Sector-specific licensing guidance</li>
                <li className="flex items-start gap-2.5"><CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" /> Employment compliance</li>
                <li className="flex items-start gap-2.5"><CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" /> Full program builds</li>
                <li className="flex items-start gap-2.5"><CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" /> Readiness audits</li>
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-border/40">
              <p className="text-sm text-muted-foreground font-medium">Pricing: <span className="text-3xl font-extrabold text-primary">Custom Scope</span></p>
              <a
                href={whatsappLink("Hi, I'd like to discuss Business Consulting for my company")}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-bold text-white shadow-sm transition-all hover:bg-[#20ba5a]"
              >
                <svg className="h-4 w-4 fill-current text-white transition-transform group-hover:scale-110" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>

        </div>
      </section>
{/* Tally Form Callout Band */}
<div className="mx-auto mt-16 max-w-xl border border-dashed border-border/80 bg-white/40 dark:bg-card/40 p-8 rounded-2xl text-center space-y-4 backdrop-blur-sm">
  <h3 className="font-display text-xl font-extrabold text-primary"> OR</h3>
  <p className="text-sm font-medium text-muted-foreground leading-relaxed max-w-md mx-auto">
    Prefer email or formal proposals over chat? Share your business parameters via our secure form. 
  </p>
  
  {/* If your Tally form embeds inline automatically right below, this serves as the perfect structural anchor header! */}
</div>
        {/* STRATEGIC HYBRID INTAKE FORM (Embedded Tally Instance) */}
      <section className="mx-auto w-full max-w-xl px-6 py-16 lg:py-20">
        <div className="bg-card border border-border p-8 rounded-3xl shadow-sm space-y-6">
          <div className="text-center space-y-2">
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-primary">Request a Compliance Briefing</h2>
            <p className="text-xs text-muted-foreground font-medium max-w-sm mx-auto"> 
              Fill out our quick onboarding form below and our team will get back to you within 24 hours.
            </p>
          </div>

          {/* Seamless Tally Standard Embed */}
          <div className="w-full min-h-[550px] overflow-hidden rounded-2xl bg-muted/20 border border-border/40">
            <iframe
              data-tally-src="https://tally.so/embed/dW4aXz?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height="550"
              title="Startup Compliance Assessment"
              className="w-full h-full border-0"
            />
          </div>
        </div>
      </section>

      {/* OBJECTION HANDLING PANEL */}
      <section className="mx-auto w-full max-w-6xl px-6 py-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-3xl border border-border/80 bg-muted/30 p-8 text-center md:p-12 backdrop-blur-sm">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-primary">
            
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground font-medium">
            The Startup Desk is a compliance consultancy; we handle filings, documentation, and regulatory guidance. For anything that requires actual legal representation, we&apos;ll point you to a licensed lawyer we trust. Most of what trips founders up isn&apos;t a legal battle, it&apos;s paperwork done wrong or filed late. That&apos;s what we fix.
          </p>
        </div>
      </section>

      {/* FINAL GLOWING CTA */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-24 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary/95 px-6 py-14 text-center text-primary-foreground shadow-2xl md:px-12">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent/10 blur-xl" />
            <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-white/5 blur-lg" />
          </div>
          
          <div className="relative max-w-2xl mx-auto space-y-6">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Not sure which service fits your business?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-white/80 font-medium leading-relaxed">
              That&apos;s completely normal. Drop us a text on WhatsApp, tell us a bit about what you&apos;re building, and we&apos;ll get you sorted out with exact pricing.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
              <a
                href={whatsappLink("Hi, I'm not sure which service fits my business,can you help?")}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-[#25D366] px-8 py-4 text-base font-bold text-white shadow-sm transition-all hover:bg-[#20ba5a]"
              >
                <svg className="h-5 w-5 fill-current text-white transition-transform group-hover:scale-110" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />

      {/* Next.js Optimized Third-Party Script Loader for Tally Engine */}
      <Script id="tally-w-embed" strategy="afterInteractive">
        {`
          var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}
        `}
      </Script>
    </main>
  )
}
