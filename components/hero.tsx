import Link from "next/link"
import { ArrowRight, MessageCircle, ShieldCheck, FileCheck2, Landmark, CheckCircle2, Sparkles } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { whatsappLink } from "@/lib/site"

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden animate-silk flex flex-col justify-between py-6">
      {/* Premium backdrop overlay for elite contrast */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/40 backdrop-blur-[1px]" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col px-6 lg:px-8 h-full justify-center gap-12 my-auto">
        {/* Top Navigation Bar */}
        <SiteHeader />

        {/* Core Hero Body */}
        <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_0.75fr] pt-8 pb-12">
          
          {/* Left Side: Dynamic Power Copy */}
          <div className="flex flex-col items-start space-y-8">
            <span
              className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-accent/20 bg-white/90 backdrop-blur-md px-4 py-2 text-xs font-bold tracking-wider text-accent uppercase shadow-sm"
              style={{ animationDelay: "80ms" }}
            >
              <Sparkles className="h-3.5 w-3.5 text-accent animate-pulse" />
              Nigeria&apos;s Elite Startup Compliance Desk
            </span>

            {/* Giant Bold Attention Grabbing Headline */}
            <h1
              className="animate-fade-in-up font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-primary sm:text-5xl lg:text-7xl"
              style={{ animationDelay: "160ms" }}
            >
              Compliance shouldn&apos;t be why your startup{" "}
              <span className="animate-word-slide bg-gradient-to-r from-accent to-blue-500 bg-clip-text text-transparent pb-2 block sm:inline">
                <span className="word-slider flex flex-col text-left">
                  <span>gets fined.</span>
                  <span>stalls growth.</span>
                  <span>loses momentum.</span>
                </span>
              </span>
            </h1>

            <p
              className="animate-fade-in-up max-w-xl text-lg md:text-xl leading-relaxed text-muted-foreground font-medium"
              style={{ animationDelay: "240ms" }}
            >
              We handle your CAC filings, tax registration, and the regulatory paperwork that 
              trips founders up—so you can stay focused on building, not battling deadlines.
            </p>

            {/* Tactile, High-Intent CTAs */}
            <div
              className="animate-fade-in-up flex w-full flex-col gap-4 sm:flex-row sm:items-center"
              style={{ animationDelay: "320ms" }}
            >
              <Link
                href="/services"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-accent px-8 py-4 text-base font-bold text-accent-foreground shadow-lg transition-all hover:scale-[1.02] hover:bg-accent/90 hover:shadow-accent/20 focus:visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                Get Started Now
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              
              <a
                href={whatsappLink(
                  "Hi The Startup Desk, I'd like to talk about keeping my startup compliant.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border-2 border-primary/90 bg-primary px-8 py-4 text-base font-bold text-white shadow-md transition-all hover:scale-[1.02] hover:bg-primary/95 focus:visible:outline-none"
              >
                <MessageCircle className="h-5 w-5 text-white transition-transform group-hover:rotate-12" />
                Chat with an Expert
              </a>
            </div>

            {/* Quick Micro-Trust Badges */}
            <div 
              className="animate-fade-in-up flex flex-wrap items-center gap-y-2 gap-x-6 pt-4 text-sm font-semibold text-primary/80"
              style={{ animationDelay: "400ms" }}
            >
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-accent" /> 100% Faceless & Secure
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-accent" /> Audit-Ready Framework
              </span>
            </div>
          </div>

          {/* Right Side: Ultra-Modern Feature Bento Card */}
          <div
            className="animate-fade-in-up relative overflow-hidden rounded-3xl border border-primary/10 bg-primary p-8 text-primary-foreground shadow-2xl lg:p-10"
            style={{ animationDelay: "300ms" }}
          >
            {/* Ambient inner card glow */}
            <div aria-hidden="true" className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/5 blur-2xl" />
            
            <div className="relative space-y-2">
              <p className="text-xs font-bold uppercase tracking-widest text-accent">
                The Compliance Layer
              </p>
              <h3 className="font-display text-xl font-bold text-white">
                What we take off your plate entirely
              </h3>
            </div>

            <ul className="mt-8 flex flex-col gap-6 relative">
              <li className="group flex items-start gap-4 rounded-xl p-3 transition-colors hover:bg-white/5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white shadow-inner">
                  <Landmark className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-bold text-white text-base">CAC Post-Incorporation</p>
                  <p className="mt-1 text-sm leading-relaxed text-white/70">
                    Status management, changes, and annual returns filed perfectly.
                  </p>
                </div>
              </li>

              <li className="group flex items-start gap-4 rounded-xl p-3 transition-colors hover:bg-white/5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white shadow-inner">
                  <FileCheck2 className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-bold text-white text-base">Instant Tax Boarding</p>
                  <p className="mt-1 text-sm leading-relaxed text-white/70">
                    Clean structure execution for your corporate TIN, VAT, and PAYE.
                  </p>
                </div>
              </li>

              <li className="group flex items-start gap-4 rounded-xl p-3 transition-colors hover:bg-white/5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white shadow-inner">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-bold text-white text-base">Continuous Monitoring</p>
                  <p className="mt-1 text-sm leading-relaxed text-white/70">
                    Proactive regulatory deep-dives before deadlines lock you down.
                  </p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Banner Component: Immediate Social Proof Overlay */}
        <div 
          className="animate-fade-in-up border-t border-primary/5 bg-white/40 backdrop-blur-md rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm"
          style={{ animationDelay: "480ms" }}
        >
          <p className="text-xs font-bold uppercase tracking-widest text-primary/60 text-center sm:text-left">
            Empowering Teams From Conception To Round-Ready
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm font-bold text-primary/40">
            <span>FINTECH</span>
            <span>E-COMMERCE</span>
            <span>HEALTH-TECH</span>
            <span>AGRI-TECH</span>
          </div>
        </div>
      </div>
    </section>
  )
}
