import Link from "next/link"
import { ArrowRight, MessageCircle, ShieldCheck, FileCheck2, Landmark, HelpCircle, FileText } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { whatsappLink, siteConfig } from "@/lib/site"

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden animate-silk flex flex-col justify-between py-6">
      {/* Layout backdrop background layer */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/40 backdrop-blur-[1px]" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col px-6 lg:px-8 h-full justify-center gap-16 my-auto">
        
        {/* 1. NAVIGATION BAR */}
        <SiteHeader />

        {/* 2. HERO SECTION */}
        <div className="grid items-center gap-12 py-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="flex flex-col items-start space-y-6">
            <span
              className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-accent/20 bg-white/90 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold tracking-wide text-primary"
              style={{ animationDelay: "80ms" }}
            >
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              Compliance made effortless for founders
            </span>

            <h1
              className="animate-fade-in-up font-display text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl leading-[1.15] text-primary"
              style={{ animationDelay: "190ms" }}
            >
              Compliance shouldn&apos;t be the reason your startup{" "}
              {/* Isolated sliding block container with strict alignment and hardware acceleration */}
              <span className="inline-flex h-[1.2em] flex-col overflow-hidden align-bottom relative translation-all duration-500 ease-in-out will-change-transform">
                <span 
                  className="animate-word-slide flex flex-col text-left text-accent"
                  style={{ transform: "translateZ(0)" }}
                >
                  <span className="block h-[1.2em] leading-[1.2em]">gets fined.</span>
                  <span className="block h-[1.2em] leading-[1.2em]">stalls growth.</span>
                  <span className="block h-[1.2em] leading-[1.2em]">loses momentum.</span>
                  <span className="block h-[1.2em] leading-[1.2em]">misses deadlines.</span>
                </span>
              </span>
            </h1>

            <p
              className="animate-fade-in-up mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground font-medium"
              style={{ animationDelay: "240ms" }}
            >
              We handle the regulatory paperwork that trips founders up so you can stay focused on building, not battling deadlines.
            </p>

            <div
              className="animate-fade-in-up mt-8 flex w-full flex-col gap-3 sm:flex-row sm:items-center"
              style={{ animationDelay: "320ms" }}
            >
              <Link
                href="/services"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-7 py-3.5 text-base font-bold text-white shadow-lg transition-all hover:bg-accent/90 hover:scale-[1.02]"
              >
                Get Started
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              
              <a
                href={whatsappLink("Hi The Startup Desk, I'd like to talk about keeping my startup compliant.")}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#25D366] px-7 py-3.5 text-base font-bold text-white shadow-md transition-all hover:bg-[#20ba59] hover:scale-[1.02]"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>

            <p
              className="animate-fade-in-up mt-4 text-sm font-semibold text-muted-foreground/80"
              style={{ animationDelay: "400ms" }}
            >
              Trusted by early-stage teams across fintech, health, and commerce.
            </p>
          </div>

          <div className="hidden lg:block h-32" />
        </div>

        {/* 3. PROBLEM SECTION */}
        <div className="animate-fade-in-up bg-white/40 border border-border/60 p-8 rounded-2xl text-center max-w-3xl mx-auto space-y-4" style={{ animationDelay: "200ms" }}>
          <h2 className="font-display text-2xl font-extrabold text-primary">The gap nobody warns you about</h2>
          <p className="text-base text-muted-foreground leading-relaxed font-medium">
            Most compliance problems start in your first few months because nobody hands you a clear manual. 
            Google leaves you with ten different half answers and unexpected fines. We exist to close that gap before it becomes a hazard.
          </p>
        </div>

        {/* 4. WHAT WE TAKE OFF YOUR PLATE SECTION */}
        <div className="mx-auto max-w-3xl py-12 text-center">
          <div className="animate-fade-in-up rounded-2xl border border-border bg-card p-8 md:p-12 shadow-sm">
            <h2 className="font-display text-2xl font-extrabold text-foreground sm:text-3xl">
              What we take off your plate
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-pretty text-muted-foreground">
              We handle the regulatory side of running a business; registration, tax, compliance, licensing so you can stay focused on building, not paperwork.
            </p>
          </div>
        </div>

        {/* 5. HOW IT WORKS SECTION */}
        <div className="bg-white/60 border border-border/80 rounded-3xl p-8 space-y-8">
          <div className="text-center max-w-xl mx-auto"><h2 className="font-display text-2xl font-extrabold text-primary">How it works</h2></div>
          <div className="grid gap-6 sm:grid-cols-4 text-center">
            {[
              { step: "01", t: "Tell us your stage", d: "Brief our desk on your current incorporation metrics via a quick baseline query." },
              { step: "02", t: "We map requirements", d: "Our consulting layer extracts your exact sector obligations and pending filing tasks." },
              { step: "03", t: "We handle paperwork", d: "We prepare files, interface directly with registries, and clear backlogs cleanly." },
              { step: "04", t: "You stay covered", d: "Your structural frameworks stay secure under active monitoring routines." }
            ].map((item, idx) => (
              <div key={idx} className="space-y-2">
                <span className="text-sm font-extrabold text-accent block tracking-wider">{item.step}</span>
                <h4 className="font-display font-bold text-base text-primary">{item.t}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed px-2">{item.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 6. TRUST / CREDIBILITY DISCLAIMER BANNER */}
        <div className="animate-fade-in-up border border-dashed border-border bg-white p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4" style={{ animationDelay: "100ms" }}>
          <div className="flex items-center gap-3">
            <HelpCircle className="h-5 w-5 text-accent shrink-0" />
            <p className="text-xs text-muted-foreground font-semibold leading-relaxed">
              The Startup Desk was built on an experienced legal compliance background to interpret regulation into plain, actionable checklists. We are a dedicated compliance consultancy, not an active law firm, meaning we focus entirely on corporate management paperwork frameworks rather than court litigation or representation.
            </p>
          </div>
        </div>

        {/* 7. RESOURCES TEASER */}
        <div className="bg-white/40 border border-border p-6 md:p-8 rounded-3xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-display text-xl font-extrabold text-primary">Compliance blueprints inside the hub</h3>
              <p className="text-xs text-muted-foreground mt-1 font-medium">Read comprehensive tutorials built to optimize early tracking indicators.</p>
            </div>
            <Link href="/resources" className="inline-flex w-fit items-center gap-1.5 bg-primary hover:bg-primary/95 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-sm transition-all shrink-0">
              Browse all guides <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="bg-white border border-border/80 p-5 rounded-xl space-y-2 hover:border-accent/40 transition-colors">
              <div className="flex items-center gap-2 text-xs font-bold text-accent"><FileText className="h-4 w-4" /> CAC &amp; Incorporation</div>
              <h4 className="font-display font-bold text-sm text-primary">CAC Annual Returns: What Happens If You Don&apos;t File</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">Discover how missing statutory reporting metrics triggers structural registry drop deletion risks.</p>
            </div>
            <div className="bg-white border border-border/80 p-5 rounded-xl space-y-2 hover:border-accent/40 transition-colors">
              <div className="flex items-center gap-2 text-xs font-bold text-accent"><FileText className="h-4 w-4" /> Data Protection</div>
              <h4 className="font-display font-bold text-sm text-primary">NDPA Basics: What Every Startup Needs to Know</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">Clean, split breakdowns of user metadata tracking boundaries designed for operational software modules.</p>
            </div>
          </div>
        </div>

        {/* 8. FINAL CTA BAND */}
        <div className="animate-fade-in-up relative overflow-hidden rounded-3xl bg-primary px-6 py-12 text-center text-primary-foreground shadow-xl md:px-12" style={{ animationDelay: "200ms" }}>
          <div aria-hidden="true" className="pointer-events-none absolute inset-0"><div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent/10 blur-xl" /></div>
          <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-4xl">Ready to stop guessing what is required?</h2>
          <p className="mt-4 text-sm text-white/80 max-w-xl mx-auto">Get your corporate registry frameworks configured and audited cleanly before structural limits block your next transaction phase.</p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="/services" className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-accent px-7 py-3.5 text-base font-bold text-white shadow-sm hover:bg-accent/90 transition-all hover:scale-[1.02]">
              Get Started <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-[#25D366] px-7 py-3.5 text-base font-bold text-white shadow-sm hover:bg-[#20ba59] transition-all hover:scale-[1.02]">
              <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}