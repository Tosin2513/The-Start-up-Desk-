"use client";

import Link from "next/link"
import { ArrowRight, HelpCircle, FileText } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { whatsappLink } from "@/lib/site"

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden animate-silk flex flex-col justify-between py-6">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/40 backdrop-blur-[1px]" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col px-6 lg:px-8 h-full justify-center gap-16 my-auto">
        <SiteHeader />

        <div className="grid items-center gap-12 py-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="flex flex-col items-start space-y-6">
            
            {/* SEO & Screen-Reader Accessible Heading */}
            <h1 className="animate-fade-in-up font-display text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl leading-[1.15] text-primary" style={{ animationDelay: "190ms" }}>
              <span className="sr-only">
                Nigerian Startup Compliance &amp; Legal Filing Advisory. Keep your business active and avoid penalties.
              </span>
              <span aria-hidden="true">
                Compliance shouldn&apos;t be the reason your startup{" "}
                <span className="inline-flex h-[1.2em] flex-col overflow-hidden align-bottom relative font-extrabold">
                  <span
                    className="flex flex-col text-left text-accent"
                    style={{ animation: "slideWords 8s cubic-bezier(0.76, 0, 0.24, 1) infinite" }}
                  >
                    <span className="block h-[1.2em] leading-[1.2em]">gets fined.</span>
                    <span className="block h-[1.2em] leading-[1.2em]">stalls growth.</span>
                    <span className="block h-[1.2em] leading-[1.2em]">loses momentum.</span>
                    <span className="block h-[1.2em] leading-[1.2em]">misses deadlines.</span>
                    <span className="block h-[1.2em] leading-[1.2em]">gets fined.</span>
                  </span>
                </span>
              </span>
            </h1>

            <style jsx global>{`
              @keyframes slideWords {
                0%, 20% { transform: translateY(0); }
                25%, 45% { transform: translateY(-1.2em); }
                50%, 70% { transform: translateY(-2.4em); }
                75%, 95% { transform: translateY(-3.6em); }
                100% { transform: translateY(-4.8em); }
              }
            `}</style>

            <p className="animate-fade-in-up mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground font-medium" style={{ animationDelay: "240ms" }}>
              We handle statutory CAC annual returns, SCUML registration, and NDPC data privacy frameworks so Nigerian founders can build without regulatory friction.
            </p>

            <div className="animate-fade-in-up mt-8 flex w-full flex-col gap-3 sm:flex-row sm:items-center" style={{ animationDelay: "320ms" }}>
              <Link href="/services" className="group inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-7 py-3.5 text-base font-bold text-white shadow-lg hover:bg-accent/90 transition-all">
                Get Started
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>

              <a
                href={whatsappLink("Hi The Startup Desk, I'd like to talk about keeping my startup compliant.")}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#25D366] px-7 py-3.5 text-base font-bold text-white shadow-md hover:bg-[#20ba59] transition-all"
              >
                <svg className="h-5 w-5 fill-white text-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M20.52 3.48A11.76 11.76 0 0 0 12 .25C6.1.25 1.5 4.86 1.5 10.77c0 1.9.5 3.66 1.47 5.22L.5 23.5l7.9-2.07A11.82 11.82 0 0 0 12 22.5c5.9 0 10.5-4.6 10.5-10.5 0-2.8-1.08-5.4-3-7.02Zm-8.52 15.32c-1.6 0-3.12-.43-4.44-1.24l-.32-.19-4.69 1.23 1.26-4.57-.21-.37A8.78 8.78 0 0 1 3.5 10.77c0-4.7 3.83-8.53 8.53-8.53 2.28 0 4.44.89 6.06 2.51 1.62 1.62 2.51 3.78 2.51 6.05 0 4.7-3.83 8.53-8.53 8.53Zm4.78-6.38c-.26-.13-1.54-.77-1.78-.86-.24-.09-.42-.13-.6.13-.18.26-.7.86-.86 1.04-.16.18-.32.2-.59.07-.27-.13-1.13-.42-2.15-1.32-.8-.7-1.34-1.56-1.5-1.83-.16-.27-.02-.42.12-.55.12-.12.26-.32.39-.48.13-.16.17-.27.26-.45.09-.18.04-.33-.02-.46-.07-.13-.6-1.44-.82-1.98-.22-.53-.44-.45-.6-.46l-.51-.01c-.17 0-.46.06-.7.33-.24.26-.92.9-.92 2.2 0 1.3.94 2.56 1.07 2.74.13.18 1.85 2.86 4.56 3.9 3 .6 3.38.43 4 .4.62-.03 1.98-.8 2.26-1.57.28-.76.28-1.41.2-1.57-.09-.16-.26-.27-.52-.4Z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>

            <p className="animate-fade-in-up mt-4 text-sm font-semibold text-muted-foreground/80" style={{ animationDelay: "400ms" }}>
              Trusted regulatory workflows for early-stage teams across fintech, health, and commerce in Nigeria.
            </p>
          </div>

          <div className="hidden lg:block h-32" />
        </div>

        <div className="animate-fade-in-up bg-white/40 border border-border/60 p-8 rounded-2xl text-center max-w-3xl mx-auto space-y-4" style={{ animationDelay: "200ms" }}>
          <h2 className="font-display text-2xl font-extrabold text-primary">The gap nobody warns you about</h2>
          <p className="text-base text-muted-foreground leading-relaxed font-medium">
            Most Nigerian compliance problems start in your first few months because nobody hands you a clear manual. Generic web searches leave you with outdated advice, unexpected CAC penalties, and bank account freezes. We exist to close that gap before it threatens your growth.
          </p>
        </div>

        <div className="mx-auto max-w-3xl py-12 text-center">
          <div className="animate-fade-in-up rounded-2xl border border-border bg-card p-8 md:p-12 shadow-sm">
            <h2 className="font-display text-2xl font-extrabold text-foreground sm:text-3xl">What we take off your plate</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-pretty text-muted-foreground">
              We handle the entire operational side of corporate regulation: Corporate Affairs Commission annual returns, SCUML certifications, NDPC audits, and founder vesting contracts.
            </p>
          </div>
        </div>

        <div className="bg-white/60 border border-border/80 rounded-3xl p-8 space-y-8">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="font-display text-2xl font-extrabold text-primary">How it works</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-4 text-center">
            {[
              { step: "01", t: "Tell us your stage", d: "Brief our desk on your current incorporation metrics and registry history." },
              { step: "02", t: "We map requirements", d: "Our team identifies your sector-specific obligations and outstanding CAC/tax tasks." },
              { step: "03", t: "We handle paperwork", d: "We prepare filings, interface directly with official registries, and resolve status issues." },
              { step: "04", t: "You stay covered", d: "Your statutory standing stays up-to-date under continuous monitoring routines." }
            ].map((item, idx) => (
              <div key={idx} className="space-y-2">
                <span className="text-sm font-extrabold text-accent block tracking-wider">{item.step}</span>
                <h4 className="font-display font-bold text-base text-primary">{item.t}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed px-2">{item.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="animate-fade-in-up border border-dashed border-border bg-white p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4" style={{ animationDelay: "100ms" }}>
          <div className="flex items-center gap-3">
            <HelpCircle className="h-5 w-5 text-accent shrink-0" />
            <p className="text-xs text-muted-foreground font-semibold leading-relaxed">
              The Startup Desk was built on experienced legal compliance foundations to turn Nigerian regulatory rules into plain, actionable checklists. We are a dedicated regulatory compliance consultancy, focusing on company secretarial filings, statutory documentation, and corporate hygiene.
            </p>
          </div>
        </div>

        <div className="bg-white/40 border border-border p-6 md:p-8 rounded-3xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-display text-xl font-extrabold text-primary">Compliance blueprints inside the hub</h3>
              <p className="text-xs text-muted-foreground mt-1 font-medium">Actionable guides written for founders navigating Nigerian business compliance.</p>
            </div>
            <Link href="/resources" className="inline-flex w-fit items-center gap-1.5 bg-primary hover:bg-primary/95 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-sm transition-all">
              Browse all guides <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/resources/cac-annual-returns-penalties-nigeria" className="block bg-white border border-border/80 p-5 rounded-xl space-y-2 hover:border-accent/40 transition-colors">
              <div className="flex items-center gap-2 text-xs font-bold text-accent"><FileText className="h-4 w-4" /> CAC &amp; Incorporation</div>
              <h4 className="font-display font-bold text-sm text-primary">CAC Annual Returns: What Happens If You Don&apos;t File</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">Understand the compounding penalties and inactive company status triggered by missing statutory filings.</p>
            </Link>

            <Link href="/resources" className="block bg-white border border-border/80 p-5 rounded-xl space-y-2 hover:border-accent/40 transition-colors">
              <div className="flex items-center gap-2 text-xs font-bold text-accent"><FileText className="h-4 w-4" /> Data Protection</div>
              <h4 className="font-display font-bold text-sm text-primary">NDPA Basics: What Every Startup Needs to Know</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">Practical data privacy checklists and statutory reporting duties under the Nigeria Data Protection Act.</p>
            </Link>
          </div>
        </div>

        <div className="animate-fade-in-up relative overflow-hidden rounded-3xl bg-primary px-6 py-12 text-center text-primary-foreground shadow-xl md:px-12" style={{ animationDelay: "200ms" }}>
          <div aria-hidden="true" className="pointer-events-none absolute inset-0"><div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent/10 blur-xl" /></div>
          <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-4xl">Ready to stop guessing what is required?</h2>
          <p className="mt-4 text-sm text-white/80 max-w-xl mx-auto">Get your statutory filings audited and aligned before red tape interferes with your next banking or funding milestone.</p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="/services" className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-accent px-7 py-3.5 text-base font-bold text-white shadow-sm hover:bg-accent/90 transition-all hover:scale-[1.02]">
              Get Started <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-[#25D366] px-7 py-3.5 text-base font-bold text-white shadow-sm hover:bg-[#20ba59] transition-all hover:scale-[1.02]">
              <svg className="h-5 w-5 fill-white text-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M20.52 3.48A11.76 11.76 0 0 0 12 .25C6.1.25 1.5 4.86 1.5 10.77c0 1.9.5 3.66 1.47 5.22L.5 23.5l7.9-2.07A11.82 11.82 0 0 0 12 22.5c5.9 0 10.5-4.6 10.5-10.5 0-2.8-1.08-5.4-3-7.02Zm-8.52 15.32c-1.6 0-3.12-.43-4.44-1.24l-.32-.19-4.69 1.23 1.26-4.57-.21-.37A8.78 8.78 0 0 1 3.5 10.77c0-4.7 3.83-8.53 8.53-8.53 2.28 0 4.44.89 6.06 2.51 1.62 1.62 2.51 3.78 2.51 6.05 0 4.7-3.83 8.53-8.53 8.53Zm4.78-6.38c-.26-.13-1.54-.77-1.78-.86-.24-.09-.42-.13-.6.13-.18.26-.7.86-.86 1.04-.16.18-.32.2-.59.07-.27-.13-1.13-.42-2.15-1.32-.8-.7-1.34-1.56-1.5-1.83-.16-.27-.02-.42.12-.55.12-.12.26-.32.39-.48.13-.16.17-.27.26-.45.09-.18.04-.33-.02-.46-.07-.13-.6-1.44-.82-1.98-.22-.53-.44-.45-.6-.46l-.51-.01c-.17 0-.46.06-.7.33-.24.26-.92.9-.92 2.2 0 1.3.94 2.56 1.07 2.74.13.18 1.85 2.86 4.56 3.9 3 .6 3.38.43 4 .4.62-.03 1.98-.8 2.26-1.57.28-.76.28-1.41.2-1.57-.09-.16-.26-.27-.52-.4Z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}