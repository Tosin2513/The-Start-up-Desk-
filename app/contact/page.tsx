"use client"

import * as React from "react"
import Script from "next/script"
import Link from "next/link"
import { MessageCircle, Mail, FileText, ArrowRight, ShieldCheck, Phone } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { whatsappLink } from "@/lib/site"

// Declare the global window interface for AssistLoop initialization
declare global {
  interface Window {
    AssistLoopWidget?: {
      init: (config: { agentId?: string }) => void
    }
  }
}

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = React.useState(false)

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
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
            Ask a quick question, or tell us where you&apos;re stuck. Our assistant can help right away — and if you&apos;re ready to move forward, we&apos;ll get you connected to the team.
          </p>
        </section>

        {/* 2. AI CHAT WIDGET SECTION (Primary Visual Focus) */}
        <section className="max-w-4xl mx-auto mb-20 space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-accent tracking-wider uppercase">
              Primary Assistant
            </span>
            <p className="text-sm text-muted-foreground max-w-lg mx-auto">
              Ask about pricing, what&apos;s included in each tier, or anything compliance-related — our assistant is trained on everything we do.
            </p>
          </div>

          {/* Widget Embed Area Container */}
          <div className="border border-border/80 bg-card-surface rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow min-h-[450px] flex flex-col justify-between p-1">
            {/* AssistLoop embed iframe target container */}
            <div 
              id="assistloop-widget-container" 
              className="w-full flex-grow rounded-2xl bg-muted/20 min-h-[440px] flex items-center justify-center text-sm text-muted-foreground"
            >
              {/* Fallback placeholder state until AssistLoop widget injects */}
              <div className="text-center space-y-2 p-6">
                <div className="h-2 w-2 bg-accent rounded-full animate-ping mx-auto" />
                <p className="font-semibold text-xs tracking-wide uppercase text-primary">Initializing Compliance Desk Assistant...</p>
              </div>
            </div>
          </div>

          <p className="text-[11px] text-muted-foreground/80 text-center max-w-2xl mx-auto leading-relaxed">
            * Responses are for general guidance only and don&apos;t replace advice specific to your business. For anything that needs a closer look, we&apos;ll connect you with our team directly.
          </p>
        </section>

        <hr className="border-border/60 max-w-5xl mx-auto mb-16" />

        {/* 3. PREFER TO REACH US DIRECTLY SECTION (Secondary Visual Weight) */}
        <section className="max-w-5xl mx-auto mb-20 space-y-10">
          <div className="text-center space-y-2">
            <h2 className="font-display text-2xl font-extrabold text-primary">Prefer to talk to a human right away?</h2>
            <p className="text-sm text-muted-foreground">Skip the assistant entirely if you already have detailed paperwork criteria.</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-12 items-start">
            {/* Quick Contact Rows (7 cols wide on desktop) */}
            <div className="space-y-4 lg:col-span-7">
              {/* WhatsApp Row */}
              <a 
                href={whatsappLink("Hi, I skipped the bot and wanted to reach out regarding compliance assistance.")}
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-border bg-card-surface p-5 rounded-2xl flex items-center gap-4 hover:border-primary/20 transition-all hover:shadow-sm"
              >
                <div className="h-10 w-10 rounded-xl bg-whatsapp/10 flex items-center justify-center text-whatsapp shrink-0">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div className="flex-grow space-y-1">
                  <h4 className="font-display text-sm font-bold text-primary group-hover:text-accent transition-colors">WhatsApp</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">Fastest way to reach us for quick questions or to get started.</p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
              </a>

              {/* Email Row */}
              <a 
                href="mailto:the.start.up.desk1@gmail.com"
                className="group border border-border bg-card-surface p-5 rounded-2xl flex items-center gap-4 hover:border-primary/20 transition-all hover:shadow-sm"
              >
                <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="flex-grow space-y-1">
                  <h4 className="font-display text-sm font-bold text-primary group-hover:text-accent transition-colors">Email</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">For anything detailed, or if you&apos;d rather write it out.</p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
              </a>

              {/* CAC Trust Banner */}
              <div className="border border-dashed border-border p-5 rounded-2xl bg-muted/30 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-primary tracking-wide uppercase">
                  <ShieldCheck className="h-4 w-4 text-accent" />
                  The Startup Desk
                </div>
                <div className="grid grid-cols-2 gap-4 text-xs text-muted-foreground">
                  <div>
                    <span className="font-medium block text-[10px] uppercase text-muted-foreground/60">Registry</span>
                    Registered with the Corporate Affairs Commission, Nigeria
                  </div>
                  <div>
                    <span className="font-medium block text-[10px] uppercase text-muted-foreground/60">ID Number</span>
                    RC: 9668977
                  </div>
                  <div>
                    <span className="font-medium block text-[10px] uppercase text-muted-foreground/60">Phone</span>
                    <a href="tel:+2348137941914" className="hover:underline flex items-center gap-1 mt-0.5">
                      <Phone className="h-3 w-3" /> +234 813 794 1914
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form (5 cols wide on desktop) */}
            <div className="border border-border bg-card-surface p-6 rounded-2xl lg:col-span-5 shadow-sm space-y-4">
              <div className="space-y-1">
                <h4 className="font-display text-sm font-bold text-primary flex items-center gap-2">
                  <FileText className="h-4 w-4 text-accent" /> Contact Form
                </h4>
                <p className="text-xs text-muted-foreground">Send us details; expect a response within 24 hours.</p>
              </div>

              {formSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-xl text-center space-y-2 dark:bg-emerald-950/20 dark:border-emerald-900/30">
                  <p className="text-xs font-bold text-emerald-800 dark:text-emerald-400">Message Received!</p>
                  <p className="text-[11px] text-emerald-600 dark:text-emerald-500 leading-relaxed">Thanks for reaching out. We&apos;ll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-3">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase text-muted-foreground/80 tracking-wider">Your Name</label>
                    <input 
                      type="text" 
                      required 
                      className="w-full bg-white border border-border text-xs px-3 py-2 rounded-lg outline-none focus:border-accent transition-colors dark:bg-black/20"
                      placeholder="e.g., Tosin"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase text-muted-foreground/80 tracking-wider">Email Address</label>
                    <input 
                      type="email" 
                      required 
                      className="w-full bg-white border border-border text-xs px-3 py-2 rounded-lg outline-none focus:border-accent transition-colors dark:bg-black/20"
                      placeholder="e.g., name@domain.com"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase text-muted-foreground/80 tracking-wider">Message</label>
                    <textarea 
                      required 
                      rows={4}
                      className="w-full bg-white border border-border text-xs p-3 rounded-lg outline-none focus:border-accent transition-colors dark:bg-black/20 resize-none"
                      placeholder="Let us know what you need help with..."
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-primary text-primary-foreground font-bold text-xs py-2.5 rounded-xl shadow-sm hover:brightness-105 transition-all cursor-pointer"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* 4. CLOSING NOTE SECTION */}
        <section className="bg-primary text-white p-8 md:p-10 rounded-3xl max-w-4xl mx-auto text-center space-y-4 mb-16 shadow-md">
          <div className="space-y-1">
            <h3 className="font-display text-xl font-bold">Already know what you need?</h3>
            <p className="text-xs text-white/70 max-w-md mx-auto leading-relaxed">
              Skip the back-and-forth — go straight to getting started.
            </p>
          </div>
          <Link 
            href="/services" 
            className="group inline-flex items-center gap-1.5 bg-accent text-accent-foreground font-bold text-xs px-5 py-3 rounded-xl shadow-sm hover:brightness-105 transition-all"
          >
            Get Started <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </section>

      </div>
      <SiteFooter />
    </main>
  )
}

