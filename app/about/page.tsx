import Link from "next/link"
import { ShieldCheck, ArrowRight, MessageCircle, HeartHandshake, Compass, Scale, CheckCircle } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { whatsappLink, siteConfig } from "@/lib/site"

export const metadata = {
  title: "About Us | The Startup Desk",
  description: "We started The Startup Desk because compliance shouldn't be the reason a good business fails.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      
      {/* Dynamic Animated Backdrop Section */}
      <div className="relative overflow-hidden animate-silk py-6 border-b border-border/40">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-white/10 backdrop-blur-[1px]" />
        
        <div className="relative mx-auto w-full max-w-6xl px-6 lg:px-8">
          <SiteHeader />

          {/* PAGE HEADER */}
          <div className="mx-auto max-w-3xl py-16 text-center md:py-24">
            <span className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-accent/20 bg-white/90 backdrop-blur-md px-4 py-2 text-xs font-bold tracking-wider text-accent uppercase shadow-sm">
              Our Mission
            </span>
            <h1 
              className="animate-fade-in-up mt-6 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-primary sm:text-5xl lg:text-6xl"
              style={{ animationDelay: "100ms" }}
            >
              We started The Startup Desk because compliance shouldn&apos;t be the reason a good business fails.
            </h1>
            <p 
              className="animate-fade-in-up mx-auto mt-6 max-w-2xl text-lg md:text-xl font-medium leading-relaxed text-muted-foreground"
              style={{ animationDelay: "200ms" }}
            >
              Not because founders don&apos;t care — because nobody hands you the manual.
            </p>
          </div>
        </div>
      </div>

      {/* THE STORY & WHO WE ARE (Two-Column Interactive Block) */}
      <section className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          
          {/* Column 1: The Story */}
          <div className="space-y-6">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <Compass className="h-5 w-5" />
            </div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
              The gap nobody warns you about
            </h2>
            <div className="text-base md:text-lg leading-relaxed text-muted-foreground space-y-4">
              <p>
                Getting your CAC certificate feels like the finish line. It&apos;s actually the starting line. 
                What comes after — annual returns, tax registration, statutory registers, data protection rules — 
                rarely gets explained clearly, and even more rarely gets explained in time.[span_1](start_span)[span_1](end_span)
              </p>
              <p className="border-l-4 border-accent pl-4 font-medium text-primary italic bg-muted/40 py-2 rounded-r-xl">
                We&apos;ve sat across from founders who did everything right at incorporation and still got caught out 
                eighteen months later by a filing they didn&apos;t know existed. Not because they were careless. 
                Because nobody told them, and Google gives you ten different half-answers.
              </p>
              <p>
                The Startup Desk exists to close that gap — plainly, consistently, and before it becomes a problem 
                instead of after.[span_2](start_span)[span_2](end_span)
              </p>
            </div>
          </div>

          {/* Column 2: Who We Are */}
          <div className="space-y-6 lg:p-8 lg:bg-muted/30 lg:rounded-3xl lg:border lg:border-border/60">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <Scale className="h-5 w-5" />
            </div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
              Built on a compliance background, built for founders
            </h2>
            <div className="text-base leading-relaxed text-muted-foreground space-y-4">
              <p>
                The Startup Desk was founded on a legal compliance background — not to give you legal advice, 
                but to translate regulation into steps you can actually act on.[span_3](start_span)[span_3](end_span) 
                <span className="font-bold text-primary"> We&apos;re a compliance consultancy, not a law firm.</span>[span_4](start_span)[span_4](end_span) 
                That distinction matters: we&apos;re not here to represent you in a dispute. We&apos;re here to make 
                sure you never end up in one over something preventable.
              </p>
              <p>
                Where something genuinely requires legal representation, we&apos;ll tell you plainly and point you 
                to a licensed lawyer we trust.[span_5](start_span)[span_5](end_span) Most of what threatens early-stage companies isn&apos;t a 
                legal battle — it&apos;s a missed deadline or a document filed wrong. That&apos;s our lane, and we know it well.[span_6](start_span)[span_6](end_span)
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* HOW WE WORK BLOCK */}
      <section className="bg-primary text-primary-foreground py-16 lg:py-20 relative overflow-hidden">
        <div aria-hidden="true" className="absolute -right-24 -bottom-24 h-64 w-64 rounded-full bg-accent/10 blur-2xl" />
        <div className="mx-auto max-w-4xl px-6 text-center relative">
          <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
            No jargon. No scare tactics. Just what&apos;s actually required.[span_7](start_span)[span_7](end_span)
          </h2>
          <p className="mt-6 text-lg md:text-xl leading-relaxed text-white/80 max-w-3xl mx-auto">
            We explain the <span className="text-accent font-bold">why</span> behind every requirement, not just the 
            what — because founders who understand the stakes make better decisions than founders who are just 
            following a checklist blindly. We keep things in plain English, we tell you what happens if something&apos;s 
            missed, and we handle the parts you&apos;d rather not learn how to do yourself.[span_8](start_span)[span_8](end_span)
          </p>
        </div>
      </section>

      {/* WHAT WE STAND FOR (Bento Grid Style) */}
      <section className="mx-auto w-full max-w-6xl px-6 py-16 lg:py-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
            What we stand for
          </h2>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          
          <div className="bg-card border border-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
            <span className="text-xl font-bold text-accent mb-2 block">01</span>
            <h3 className="font-display font-bold text-lg text-primary">Plain English, always.[span_9](start_span)[span_9](end_span)</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              If we can&apos;t explain it simply, we haven&apos;t understood it well enough ourselves.[span_10](start_span)[span_10](end_span)
            </p>
          </div>

          <div className="bg-card border border-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
            <span className="text-xl font-bold text-accent mb-2 block">02</span>
            <h3 className="font-display font-bold text-lg text-primary">Prevention over rescue.[span_11](start_span)[span_11](end_span)</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              We&apos;d rather get you ahead of a deadline than help you recover from missing one.[span_12](start_span)[span_12](end_span)
            </p>
          </div>

          <div className="bg-card border border-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
            <span className="text-xl font-bold text-accent mb-2 block">03</span>
            <h3 className="font-display font-bold text-lg text-primary">Honest about our lane.[span_13](start_span)[span_13](end_span)</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Compliance consulting, not legal representation — and we&apos;ll tell you when you need the latter.[span_14](start_span)[span_14](end_span)
            </p>
          </div>

          <div className="bg-card border border-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
            <span className="text-xl font-bold text-accent mb-2 block">04</span>
            <h3 className="font-display font-bold text-lg text-primary">Built for where you are.</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Whether you&apos;re three weeks or three years post-incorporation, the advice should fit your stage, 
              not a generic template.[span_15](start_span)[span_15](end_span)
            </p>
          </div>

        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-24 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary/95 px-6 py-14 text-center text-primary-foreground shadow-2xl md:px-12">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent/10 blur-xl" />
            <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-white/5 blur-lg" />
          </div>
          
          <div className="relative max-w-2xl mx-auto space-y-6">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Ready to stop guessing what&apos;s required?[span_16](start_span)[span_16](end_span)
            </h2>
            
            {/* Trust Signal Stamp Embedded Inside CTA */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide text-accent border border-white/10">
              <CheckCircle className="h-3.5 w-3.5" />
              Registered with CAC Nigeria • RC: {siteConfig.rcNumber}[span_17](start_span)[span_17](end_span)
            </div>

            <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
              <Link
                href="/register"
                className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-2 overflow-hidden rounded-xl bg-accent px-8 py-4 text-base font-bold text-accent-foreground shadow-lg transition-all hover:scale-[1.02] hover:bg-accent/90 focus:visible:outline-none"
              >
                Get Started
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={whatsappLink("Hi The Startup Desk, I want to review my company's post-incorporation status.")}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border-2 border-white/20 bg-white/10 backdrop-blur-sm px-8 py-4 text-base font-bold text-white shadow-md transition-all hover:scale-[1.02] hover:bg-white/20 focus:visible:outline-none"
              >
                <MessageCircle className="h-5 w-5 text-white transition-transform group-hover:rotate-12" />
                Chat on WhatsApp[span_18](start_span)[span_18](end_span)
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
              }

