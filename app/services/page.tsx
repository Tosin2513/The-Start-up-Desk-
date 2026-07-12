import type { Metadata } from "next"
import Link from "next/link"
import { MessageCircle, ArrowRight, CheckCircle2, ShieldAlert, Zap, Compass } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { whatsappLink, siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "Services & Pricing Tiers | The Startup Desk",
  description: "Compliance handled at every stage. Launch, Monitoring, and Advisory tiers built for exactly where your startup is.",
}

const comparison = [
  { label: "Best for", launch: "Just incorporating", monitoring: "Ongoing operations", advisory: "Scaling / raising" },
  { label: "Commitment", launch: "One-off package", monitoring: "Monthly subscription", advisory: "Project-based scope" },
  { label: "Starting price", launch: "₦75,000", monitoring: "₦12,000 / mo", advisory: "Custom billing" },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      
      {/* 1. ANIMATED HEADER SECTION */}
      <div className="relative overflow-hidden animate-silk py-6 border-b border-border/40">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-white/10 backdrop-blur-[1px]" />
        
        <div className="relative mx-auto w-full max-w-6xl px-6 lg:px-8">
          <SiteHeader />
          
          <div className="mx-auto max-w-3xl py-16 text-center md:py-20">
            <span className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-accent/20 bg-white/90 backdrop-blur-md px-4 py-2 text-xs font-bold tracking-wider text-accent uppercase shadow-sm">
              Our Frameworks
            </span>
            <h1 className="animate-fade-in-up mt-6 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-primary sm:text-5xl">
              Compliance, handled at every stage.
            </h1>
            <p className="animate-fade-in-up mx-auto mt-6 max-w-2xl text-lg md:text-xl font-medium leading-relaxed text-muted-foreground">
              Whether you just got your CAC certificate or you are gearing up for your first institutional raise, there is a tier built for exactly where you are.
            </p>
          </div>
        </div>
      </div>

      {/* 2. HOVER-RESPONSIVE PRICING CARDS */}
      <section className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          
          {/* LAUNCH TIER (Lifts up and turns arrow on hover) */}
          <div className="animate-fade-in-up bg-white border border-border rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group" style={{ animationDelay: "100ms" }}>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="p-3 bg-accent/10 text-accent rounded-xl transition-transform duration-300 group-hover:scale-110"><Zap className="h-5 w-5" /></span>
                <span className="text-[10px] uppercase font-extrabold tracking-widest bg-muted text-primary px-2.5 py-1 rounded-md">One-Time</span>
              </div>
              <div>
                <h3 className="font-display font-extrabold text-2xl text-primary">Launch Tier</h3>
                <p className="text-xs text-muted-foreground mt-1 font-medium">Perfect for new entities setting up shop</p>
              </div>
              <div className="pt-2">
                <span className="text-3xl font-extrabold text-primary">₦75,000</span>
                <span className="text-xs text-muted-foreground font-semibold"> / one-off</span>
              </div>
              <hr className="border-border/60" />
              <ul className="space-y-3 text-sm text-muted-foreground font-medium">
                <li className="flex items-center gap-2.5"><CheckCircle2 className="h-4 w-4 text-accent" /> Full CAC Incorporation</li>
                <li className="flex items-center gap-2.5"><CheckCircle2 className="h-4 w-4 text-accent" /> Corporate TIN Generation</li>
                <li className="flex items-center gap-2.5"><CheckCircle2 className="h-4 w-4 text-accent" /> Initial Setup Consultation</li>
              </ul>
            </div>
            <a href={whatsappLink("Hi, I want to get started with the Launch Tier package.")} target="_blank" rel="noopener noreferrer" className="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3 text-sm font-bold text-white shadow-sm hover:bg-accent/90 hover:scale-[1.02] transition-all">
              Deploy Launch Tier 
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* MONITORING TIER (Live Radar pulse embedded inside the badge) */}
          <div className="animate-fade-in-up bg-white border-2 border-primary rounded-3xl p-8 flex flex-col justify-between shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group" style={{ animationDelay: "200ms" }}>
            <div className="absolute top-0 right-0 bg-primary text-white text-[9px] uppercase font-black tracking-widest px-4 py-1 rounded-bl-xl flex items-center gap-1">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white" />
              </span>
              Popular
            </div>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="p-3 bg-primary/10 text-primary rounded-xl transition-transform duration-300 group-hover:scale-110"><Compass className="h-5 w-5" /></span>
                <span className="text-[10px] uppercase font-extrabold tracking-widest bg-primary/20 text-primary px-2.5 py-1 rounded-md">Subscription</span>
              </div>
              <div>
                <h3 className="font-display font-extrabold text-2xl text-primary">Monitoring Tier</h3>
                <p className="text-xs text-muted-foreground mt-1 font-medium">Ongoing protection for active startups</p>
              </div>
              <div className="pt-2">
                <span className="text-3xl font-extrabold text-primary">₦12,000</span>
                <span className="text-xs text-muted-foreground font-semibold"> / month</span>
              </div>
              <hr className="border-border/60" />
              <ul className="space-y-3 text-sm text-muted-foreground font-medium">
                <li className="flex items-center gap-2.5"><CheckCircle2 className="h-4 w-4 text-primary" /> Annual CAC Return Filings</li>
                <li className="flex items-center gap-2.5"><CheckCircle2 className="h-4 w-4 text-primary" /> Monthly FIRS Tax Tracking</li>
                <li className="flex items-center gap-2.5"><CheckCircle2 className="h-4 w-4 text-primary" /> Deadline Calendar Alerts</li>
              </ul>
            </div>
            <a href={whatsappLink("Hi, I want to subscribe to the ongoing Monitoring Tier.")} target="_blank" rel="noopener noreferrer" className="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-bold text-white shadow-sm hover:bg-primary/95 hover:scale-[1.02] transition-all">
              Subscribe Now 
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* ADVISORY TIER */}
          <div className="animate-fade-in-up bg-white border border-border rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group" style={{ animationDelay: "300ms" }}>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="p-3 bg-accent/10 text-accent rounded-xl transition-transform duration-300 group-hover:scale-110"><ShieldAlert className="h-5 w-5" /></span>
                <span className="text-[10px] uppercase font-extrabold tracking-widest bg-muted text-primary px-2.5 py-1 rounded-md">Retainer</span>
              </div>
              <div>
                <h3 className="font-display font-extrabold text-2xl text-primary">Advisory Tier</h3>
                <p className="text-xs text-muted-foreground mt-1 font-medium">Custom consulting for mature operations</p>
              </div>
              <div className="pt-2">
                <span className="text-3xl font-extrabold text-primary">Bespoke</span>
                <span className="text-xs text-muted-foreground font-semibold"> / scoped project</span>
              </div>
              <hr className="border-border/60" />
              <ul className="space-y-3 text-sm text-muted-foreground font-medium">
                <li className="flex items-center gap-2.5"><CheckCircle2 className="h-4 w-4 text-accent" /> NDPA Data Audits</li>
                <li className="flex items-center gap-2.5"><CheckCircle2 className="h-4 w-4 text-accent" /> Fundraising Readiness Reviews</li>
                <li className="flex items-center gap-2.5"><CheckCircle2 className="h-4 w-4 text-accent" /> Custom Structural Filings</li>
              </ul>
            </div>
            <a href={whatsappLink("Hi, I want to book a custom scoping session for the Advisory Tier.")} target="_blank" rel="noopener noreferrer" className="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3 text-sm font-bold text-white shadow-sm hover:bg-accent/90 hover:scale-[1.02] transition-all">
              Request Scoping 
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

        </div>
      </section>

      {/* 3. TRANSPARENT COMPARISON GRID */}
      <section className="mx-auto w-full max-w-6xl px-6 py-4 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
          <div className="overflow-x-auto w-full">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b border-border bg-muted/40">
                  <th className="p-4 font-bold text-muted-foreground text-xs uppercase tracking-wider">Metrics Matrix</th>
                  <th className="p-4 font-display font-extrabold text-primary text-base">Launch</th>
                  <th className="p-4 font-display font-extrabold text-primary text-base">Monitoring</th>
                  <th className="p-4 font-display font-extrabold text-primary text-base">Advisory</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, idx) => (
                  <tr key={idx} className="border-b border-border/60 last:border-0 hover:bg-muted/10 transition-colors">
                    <td className="p-4 font-bold text-muted-foreground text-xs uppercase tracking-wide">{row.label}</td>
                    <td className="p-4 font-medium text-primary">{row.launch}</td>
                    <td className="p-4 font-medium text-primary">{row.monitoring}</td>
                    <td className="p-4 font-medium text-primary">{row.advisory}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. OBJECTION PROCESSING DISCLAIMER */}
      <section className="mx-auto w-full max-w-4xl px-6 py-12">
        <div className="rounded-2xl border border-dashed border-border bg-white p-8 text-center space-y-4 hover:border-primary/20 transition-colors">
          <h2 className="font-display text-xl font-extrabold text-primary">Not a law firm. Not trying to be.</h2>
          <p className="mx-auto max-w-2xl text-xs md:text-sm leading-relaxed text-muted-foreground font-semibold">
            The Startup Desk is a compliance consultancy. We handle filings, documentation, and regulatory guidance. For anything that requires court representation or formal litigation legal opinions, we will point you directly to a licensed lawyer we trust. Most of what trips founders up is not a legal battle but paperwork done wrong or filed late. That is what we fix.
          </p>
        </div>
      </section>

      {/* 5. DYNAMIC BRAND-GREEN WHATSAPP ACTION BLOCK */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-24 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-14 text-center text-primary-foreground shadow-xl md:px-12 group">
          <div className="relative space-y-6">
            <h2 className="mx-auto max-w-2xl font-display text-2xl font-bold tracking-tight text-white sm:text-4xl">
              Not sure which tier fits? Let&apos;s figure it out together.
            </h2>
            <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
              <a
                href={whatsappLink("Hi The Startup Desk, I am looking over your services subpage and want help picking a tier.")}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-[#25D366] px-8 py-4 text-base font-bold text-white shadow-lg transition-all duration-300 hover:bg-[#20ba59] hover:scale-[1.03] hover:-translate-y-0.5"
              >
                <MessageCircle className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
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
