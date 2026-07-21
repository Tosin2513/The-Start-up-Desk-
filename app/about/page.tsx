import Link from "next/link"
import Image from "next/image"
import { ShieldCheck, ArrowRight, Compass, CheckCircle, Eye, Users } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { whatsappLink } from "@/lib/site"

export const metadata = {
  title: "About Us | The Startup Desk",
  description: "We started The Startup Desk because regulatory compliance shouldn't be the reason a good business fails.",
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
            <span className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-accent/20 bg-white/90 backdrop-blur-md px-4 py-2 text-xs font-bold tracking-wider text-accent">
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
              Not because founders don&apos;t care—because nobody hands you the manual.
            </p>
          </div>
        </div>
      </div>

      {/* THE GAP & THE COMPLIANCE DESK (Two-Column Block) */}
      <section className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          
          {/* Column 1: The Gap Nobody Warns You About */}
          <div className="space-y-6">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <Compass className="h-5 w-5" />
            </div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
              The gap nobody warns you about
            </h2>
            <div className="text-base md:text-lg leading-relaxed text-muted-foreground space-y-4">
              <p>
                Getting your CAC certificate feels like the finish line. It&apos;s actually the starting line. What comes after—annual returns, tax registration, statutory registers, and data protection rules—rarely gets explained clearly, and even more rarely gets explained in time.
              </p>
              <p className="border-l-4 border-accent pl-4 font-medium text-primary bg-muted/40 py-2 rounded-r-xl">
                We&apos;ve sat across from founders who did everything right at incorporation and still got caught out eighteen months later by a filing they didn&apos;t know existed. Not because they were careless, but because nobody told them.
              </p>
              <p className="font-semibold text-primary">
                The Startup Desk exists to close that gap before it becomes a problem instead of after.
              </p>
            </div>
          </div>

          {/* Column 2: The Compliance Desk Team (Institutional Profile with Logo) */}
          <div className="space-y-6 lg:p-8 lg:bg-muted/30 lg:rounded-3xl lg:border lg:border-border/60">
            <div className="flex items-center gap-6">
              <div className="relative w-16 h-16 rounded-2xl bg-white dark:bg-card border border-border/80 flex items-center justify-center p-3 shrink-0 shadow-sm">
                <Image 
                  src="/Logo.svg" 
                  alt="The Startup Desk Logo" 
                  width={40} 
                  height={40} 
                  className="object-contain"
                />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-accent block mb-1">
                  Institutional Support
                </span>
                <h2 className="font-display text-2xl font-extrabold tracking-tight text-primary">
                  Built by corporate specialists
                </h2>
              </div>
            </div>
            
            <div className="text-base leading-relaxed text-muted-foreground space-y-4">
              <p>
                The Startup Desk is managed by a dedicated team of personnel who built this platform after repeatedly witnessing the same pattern: solid businesses getting penalized by paperwork nobody explained to them in time.
              </p>
              <p>
                Our team operates with a clear mandate: easy-to-understand guidance, prevention over rescue, and complete transparency about what we handle so your business stays audit-ready.
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
            Just what&apos;s actually required.
          </h2>
          <p className="mt-6 text-lg md:text-xl leading-relaxed text-white/80 max-w-3xl mx-auto">
            We explain the <span className="text-accent font-bold">why</span> behind every requirement, not just the what. Founders who understand the stakes make better decisions. We handle the routine statutory filings so you can focus entirely on scaling your startup.
          </p>
        </div>
      </section>

      {/* WHAT WE STAND FOR */}
      <section className="mx-auto w-full max-w-6xl px-6 py-16 lg:py-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
            What we stand for
          </h2>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          
          <div className="bg-card border border-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-4">
                <Eye className="w-4 h-4" />
              </div>
              <h3 className="font-display font-bold text-lg text-primary">Transparency</h3>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              If we can&apos;t explain it simply, we haven&apos;t understood it well enough ourselves.
            </p>
          </div>

          <div className="bg-card border border-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-4">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="font-display font-bold text-lg text-primary">Prevention over rescue</h3>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              We&apos;d rather get you ahead of a deadline than help you recover from missing one.
            </p>
          </div>

          <div className="bg-card border border-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-4">
                <Compass className="w-4 h-4" />
              </div>
              <h3 className="font-display font-bold text-lg text-primary">Stage-appropriate</h3>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Whether you&apos;re three weeks or three years post-incorporation, the advice fits your stage.
            </p>
          </div>

          <div className="bg-card border border-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-4">
                <Users className="w-4 h-4" />
              </div>
              <h3 className="font-display font-bold text-lg text-primary">Dedicated Specialists</h3>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Compliance specialists review and process every document you send us.
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
              Ready to stop guessing what&apos;s required?
            </h2>
            
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide text-accent border border-white/10">
              <CheckCircle className="h-3.5 w-3.5" />
              <span>We&apos;re here for you</span>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
              <Link
                href="/services"
                className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-2 overflow-hidden rounded-xl bg-accent px-8 py-4 text-base font-bold text-accent-foreground transition-all hover:bg-accent/90 shadow-sm"
              >
                Get Started
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              
              <a
                href={whatsappLink("Hi The Startup Desk, I want to review my company's post-incorporation status.")}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border-2 border-white/20 bg-white/10 backdrop-blur-sm px-8 py-4 text-base font-bold text-white transition-all hover:bg-white/20 hover:border-[#25D366]/40"
              >
                <svg 
                  className="h-5 w-5 fill-current text-[#25D366] transition-transform group-hover:scale-110" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
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