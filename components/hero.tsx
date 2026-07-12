import Link from "next/link"
import { ArrowRight, MessageCircle, ShieldCheck, FileCheck2, Landmark, HelpCircle, CheckCircle2, Sparkles, Download, FileText } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { whatsappLink } from "@/lib/site"

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden animate-silk flex flex-col justify-between py-6">
      {/* Background layer for clean typography visibility */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/40 backdrop-blur-[1px]" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col px-6 lg:px-8 h-full justify-center gap-16 my-auto">
        {/* Top Navigation */}
        <SiteHeader />

        {/* ================= HERO INTRO SECTION ================= */}
        <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_0.75fr] pt-4">
          <div className="flex flex-col items-start space-y-6">
            <span className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-accent/20 bg-white/90 backdrop-blur-md px-4 py-1.5 text-xs font-bold tracking-wider text-accent uppercase shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-accent animate-pulse" />
              Nigeria&apos;s Elite Startup Compliance Desk
            </span>

            <h1 className="animate-fade-in-up font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-primary sm:text-5xl lg:text-6xl">
              Compliance shouldn&apos;t be why your startup{" "}
              <span className="animate-word-slide bg-gradient-to-r from-accent to-blue-600 bg-clip-text text-transparent pb-1 block sm:inline">
                <span className="word-slider flex flex-col text-left">
                  <span>gets fined.</span>
                  <span>stalls growth.</span>
                  <span>loses momentum.</span>
                </span>
              </span>
            </h1>

            <p className="animate-fade-in-up max-w-xl text-base md:text-lg leading-relaxed text-muted-foreground font-medium">
              We handle your CAC filings, tax registration, and the regulatory paperwork that 
              trips founders up so you can stay focused on building, not battling deadlines.[span_3](start_span)[span_3](end_span)
            </p>

            <div className="animate-fade-in-up flex w-full flex-col gap-3 sm:flex-row sm:items-center pt-2">
              <Link
                href="/services"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-accent px-7 py-3.5 text-base font-bold text-accent-foreground shadow-lg transition-all hover:scale-[1.02] hover:bg-accent/90 focus:visible:outline-none"
              >
                Get Started Now
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href={whatsappLink("Hi The Startup Desk, I want to review my company's post-incorporation status.")}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#25D366] px-7 py-3.5 text-base font-bold text-white shadow-md transition-all hover:scale-[1.02] hover:bg-[#20ba59] focus:visible:outline-none"
              >
                <svg className="h-5 w-5 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat with an Expert
              </a>
            </div>
          </div>

          {/* Right Core Bento Feature Element */}
          <div className="bg-primary rounded-3xl p-8 text-primary-foreground shadow-2xl space-y-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-accent">The Scope Matrix</p>
              <h3 className="font-display text-lg font-bold text-white mt-1">What we handle entirely for you</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start text-sm">
                <span className="p-2 bg-white/10 rounded-lg text-white"><Landmark className="h-4 w-4" /></span>
                <div><p className="font-bold text-white">CAC Status Filings</p><p className="text-white/70 text-xs mt-0.5">Post-incorporation processing and annual declarations.</p></div>
              </li>
              <li className="flex gap-3 items-start text-sm">
                <span className="p-2 bg-white/10 rounded-lg text-white"><FileCheck2 className="h-4 w-4" /></span>
                <div><p className="font-bold text-white">Tax Boarding Execution</p><p className="text-white/70 text-xs mt-0.5">Setting up corporate TIN, VAT, and PAYE records right.</p></div>
              </li>
              <li className="flex gap-3 items-start text-sm">
                <span className="p-2 bg-white/10 rounded-lg text-white"><ShieldCheck className="h-4 w-4" /></span>
                <div><p className="font-bold text-white">Continuous Monitoring</p><p className="text-white/70 text-xs mt-0.5">Automated statutory calendars built ahead of deadline limits.</p></div>
              </li>
            </ul>
          </div>
        </div>

        {/* ================= HIGH-INTENT RESOURCES BLOCK ================= */}
        <div className="bg-white/80 border border-border rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] bg-primary text-white font-bold uppercase px-2.5 py-1 rounded-md tracking-wider">Instant Access Toolbox</span>
              <h2 className="font-display text-2xl font-extrabold text-primary mt-2">Free compliance downloads</h2>
              <p className="text-sm text-muted-foreground mt-1">Plain English guides gated by simple form captures to secure your operations.</p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              "Post-Incorporation Compliance Calendar",
              "CAC Annual Returns Checklist",
              "NDPA Compliance Starter Kit"
            ].map((pdf, idx) => (
              <div key={idx} className="border border-border/80 bg-background p-4 rounded-xl flex flex-col justify-between hover:border-accent/40 transition-all">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-accent/10 rounded-lg text-accent"><FileText className="h-4 w-4" /></div>
                  <p className="text-xs font-bold text-primary leading-snug">{pdf}</p>
                </div>
                <button className="mt-4 w-full bg-primary hover:bg-primary/95 text-white text-[11px] font-bold py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-all">
                  <Download className="h-3.5 w-3.5" /> Get Blueprint
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* ================= INTERACTIVE FAQ LAYOUT BLOCK ================= */}
        <div className="space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="font-display text-2xl font-extrabold text-primary">Frequently asked questions</h2>
            <p className="text-sm text-muted-foreground mt-1">Immediate plain English explanations for structural security rules.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { q: "Is The Startup Desk a law firm?", a: "No. We are a compliance consultancy. We handle statutory filings, registry documentation, and tracking checklists. We do not provide court representation or custom legal opinions." },
              { q: "What is the penalty for late CAC returns?", a: "Failing to file triggers compound vertical fines calculated daily. If left open for too long, the commission can officially strike off your company name entirely." },
              { q: "When should I register for corporate taxes?", a: "Your corporate tax boarding records (TIN, VAT, PAYE) should ideally be executed directly within the first few months post-incorporation to prevent penalties." },
              { q: "Who does the NDPA compliance rule apply to?", a: "Every Nigerian digital platform or startup handling client data must deploy an active data security protection program to match statutory parameters." }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white border border-border p-5 rounded-2xl shadow-sm space-y-2 hover:border-primary/20 transition-colors">
                <div className="flex items-start gap-2.5">
                  <HelpCircle className="h-4.5 w-4.5 text-accent shrink-0 mt-0.5" />
                  <h4 className="font-display font-bold text-sm text-primary">{faq.q}</h4>
                </div>
                <p className="text-xs leading-relaxed text-muted-foreground pl-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= CLOSING ACTION HERO BLOCK ================= */}
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-12 text-center text-primary-foreground shadow-xl md:px-12">
          <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to stop guessing what is required?
          </h2>
          <p className="mt-4 text-sm text-white/80 max-w-xl mx-auto">
            These guides get you informed. If you would rather have someone just handle it, that is what we are here for.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/services"
              className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-accent px-7 py-3.5 text-base font-semibold text-accent-foreground shadow-sm transition-all hover:scale-[1.02]"
            >
              See our services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href={whatsappLink("Hi The Startup Desk, I want to talk about keeping my startup compliant.")}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-7 py-3.5 text-base font-semibold text-white shadow-sm transition-all hover:scale-[1.02]"
            >
              <MessageCircle className="h-5 w-5 transition-transform group-hover:scale-105" />
              Chat on WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

