"use client"

import * as React from "react"
import Script from "next/script"
import Link from "next/link"
import { ArrowRight, ShieldCheck, Phone, Mail, Bot } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { whatsappLink } from "@/lib/site"

export const metadata = {
  title: "Contact Our Compliance Desk | The Startup Desk",
  description: "Get in touch with our team via WhatsApp, professional email routing, or use our interactive AI desk assistant to resolve your startup registration questions.",
};

// Declare global interface for AssistLoop & Tally initializers
declare global {
  interface Window {
    AssistLoopWidget?: {
      init: (config: { agentId?: string }) => void
    }
    Tally?: {
      loadEmbeds: () => void
    }
  }
}

export default function ContactPage() {
  const [showAiBot, setShowAiBot] = React.useState(false)

  // Trigger Tally to re-parse data attribute embeds once DOM is fully responsive
  const handleTallyLoad = () => {
    if (typeof window.Tally !== "undefined") {
      window.Tally.loadEmbeds()
    } else {
      const d = document;
      const w = "https://tally.so/widgets/embed.js";
      if (d.querySelector(`script[src="${w}"]`) === null) {
        const s = d.createElement("script");
        s.src = w;
        s.onload = () => window.Tally?.loadEmbeds();
        s.onerror = () => window.Tally?.loadEmbeds();
        d.body.appendChild(s);
      }
    }
  }

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      {/* AssistLoop Script Loader */}
      <Script
        src="https://assistloop.ai/assistloop-widget.js"
        strategy="afterInteractive"
        onLoad={() => {
          window.AssistLoopWidget?.init({
            agentId: process.env.NEXT_PUBLIC_ASSISTLOOP_AGENT_ID,
          });
        }}
      />

      {/* Tally Embedded Script Loader */}
      <Script 
        src="https://tally.so/widgets/embed.js"
        strategy="afterInteractive"
        onLoad={handleTallyLoad}
      />

      <div className="mx-auto w-full max-w-6xl px-6 py-6 lg:px-8">
        <SiteHeader />

        {/* 1. PAGE HEADER */}
        <section className="py-12 md:py-16 text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block bg-muted text-primary text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md">
            Get in touch
          </span>
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-primary sm:text-5xl">
            Still figuring things out? Let&apos;s talk.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Choose whichever path works best for you. Reach our team directly, access our interactive assistant, or leave a detailed brief below.
          </p>
        </section>

        {/* 2. THE THREE EQUAL-WEIGHT PLATFORM TILES */}
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto mb-16">
          
          {/* Card A: WhatsApp (Uses official green branding logo) */}
          <a 
            href={whatsappLink("Hi, I wanted to reach out regarding company compliance assistance.")}
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-border bg-card p-6 rounded-2xl flex flex-col justify-between hover:border-primary/20 transition-all hover:shadow-md"
          >
            <div>
              <div className="h-10 w-10 rounded-xl bg-[#25D366]/10 flex items-center justify-center mb-4 shrink-0">
                <svg 
                  className="h-5 w-5 fill-current text-[#25D366] transition-transform group-hover:scale-110" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-lg text-primary group-hover:text-accent transition-colors">Instant WhatsApp</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Fastest way to reach us for quick questions or to sync directly with a team member.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-1 text-xs font-bold text-accent">
              Chat Now <ArrowRight className="h-4 w-4 transform group-hover:translate-x-0.5 transition-transform" />
            </div>
          </a>

          {/* Card B: Direct Professional Email */}
          <a 
            href="mailto:hello@thestartupdesk.com.ng"
            className="group border border-border bg-card p-6 rounded-2xl flex flex-col justify-between hover:border-primary/20 transition-all hover:shadow-md"
          >
            <div>
              <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4 shrink-0">
                <Mail className="h-5 w-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-primary group-hover:text-accent transition-colors">Official Email</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Send briefs, share records, or get responses for complicated documentation requirements.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-1 text-xs font-bold text-accent">
              hello@thestartupdesk.com.ng <ArrowRight className="h-4 w-4 transform group-hover:translate-x-0.5 transition-transform" />
            </div>
          </a>

          {/* Card C: Interactive AI Desk Assistant */}
          <button 
            onClick={() => setShowAiBot(!showAiBot)}
            className="group text-left border border-border bg-card p-6 rounded-2xl flex flex-col justify-between hover:border-primary/20 transition-all hover:shadow-md cursor-pointer"
          >
            <div>
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 shrink-0">
                <Bot className="h-5 w-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-primary group-hover:text-accent transition-colors">Compliance Desk Bot</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Ask about pricing structures, tiers, rules, or anything related to immediate operations.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-1 text-xs font-bold text-accent">
              {showAiBot ? "Hide Chat Interface" : "Open Assistant Panel"} <ArrowRight className="h-4 w-4 transform group-hover:translate-x-0.5 transition-transform" />
            </div>
          </button>

        </section>

        {/* 3. DYNAMIC AI COMPONENT CONTAINER (Toggles open/closed smoothly based on Button C click) */}
        {showAiBot && (
          <section className="max-w-5xl mx-auto mb-16 border border-border bg-muted/20 p-2 rounded-3xl overflow-hidden shadow-inner">
            <div 
              id="assistloop-widget-container" 
              className="w-full rounded-2xl bg-background min-h-[450px]"
            />
          </section>
        )}

        {/* 4. REAL BACKEND EMBED AREA (Unified Tally Form Grid Structure) */}
        <section className="grid gap-8 lg:grid-cols-12 items-start max-w-5xl mx-auto mb-20">
      
          {/* Interactive Live Tally Form Popup Trigger */}
          <div className="border border-border bg-card p-8 rounded-3xl lg:col-span-8 shadow-sm flex flex-col justify-between min-h-[220px]">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                Project Intake
              </div>
              <h4 className="font-display text-xl font-bold text-primary">
                Leave a Detailed Brief
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
                Prefer to spell out your project parameters? Skip the manual back-and-forth and use our guided form to drop your structural inquiries or business context.
              </p>
            </div>

            <div className="mt-6 pt-2">
              <button
                data-tally-open="44D4qk" 
                data-tally-emoji-text="👋" 
                data-tally-emoji-animation="wave" 
                data-tally-auto-close="4000"
                className="group inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold text-sm px-6 py-3.5 rounded-xl shadow-sm hover:brightness-105 transition-all cursor-pointer w-full sm:w-auto justify-center"
              >
                Open Brief Builder
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>

        </section>

        {/* 5. REDIRECT FOOTER AREA */}
        <section className="bg-primary text-white p-8 md:p-10 rounded-3xl max-w-5xl mx-auto text-center space-y-4 mb-16 shadow-md">
          <div className="space-y-1">
            <h3 className="font-display text-xl font-bold">Already know what package fits?</h3>
            <p className="text-xs text-white/70 max-w-md mx-auto leading-relaxed">
              Skip setup adjustments entirely and browse structured post-incorporation solutions directly.
            </p>
          </div>
          <Link 
            href="/services" 
            className="group inline-flex items-center gap-1.5 bg-accent text-accent-foreground font-bold text-xs px-5 py-3 rounded-xl shadow-sm hover:brightness-105 transition-all"
          >
            Explore Services <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </section>

      </div>
      <SiteFooter />
    </main>
  )
}