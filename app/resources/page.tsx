import Link from "next/link"
import { ArrowRight, MessageCircle, FileText, Download, Mail, Layers } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { whatsappLink } from "@/lib/site"

export const metadata = {
  title: "Resources & Compliance Guides | The Startup Desk",
  description: "Compliance guides in plain English. Checklists, calendars, and regulatory breakdowns for Nigerian startups.",
}

const guides = [
  {
    slug: "cac-annual-returns-consequences",
    title: "CAC Annual Returns: What Happens If You Don't File",
    category: "CAC & Incorporation",
    description: "The deadline, the process, and what actually happens if you miss it - including how CAC can strike off your company.",
    type: "Read guide"
  },
  {
    slug: "ndpa-basics-startup-compliance",
    title: "NDPA Basics: What Every Startup Needs to Know",
    category: "Data Protection (NDPA)",
    description: "Nigeria's data protection law explained simply - who it applies to, what's required, and where startups usually get it wrong.",
    type: "Read guide"
  },
  {
    slug: "post-incorporation-checklist-nigeria",
    title: "Post-Incorporation Compliance Checklist",
    category: "CAC & Incorporation",
    description: "Everything to handle in your first 90 days after getting your CAC certificate - downloadable checklist included.",
    type: "Read guide + Download PDF"
  },
  {
    slug: "compliance-consultant-vs-lawyer",
    title: "Compliance Consultant vs. Lawyer: What's the Difference?",
    category: "Funding Readiness",
    description: "When you need a compliance consultant, when you actually need a lawyer, and why the two aren't the same thing.",
    type: "Read guide"
  },
  {
    slug: "tax-registration-tin-firs-nigeria",
    title: "Tax Registration for New Businesses: TIN, FIRS, and What Comes Next",
    category: "Tax & FIRS",
    description: "What to register, when, and what happens if you delay it.",
    type: "Read guide"
  }
]

const categories = ["All", "CAC & Incorporation", "Tax & FIRS", "Data Protection (NDPA)", "HR & Employment", "Funding Readiness"]

export default function ResourcesHub() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      
      {/* Moving Background Header */}
      <div className="relative overflow-hidden animate-silk py-6 border-b border-border/40">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-white/10 backdrop-blur-[1px]" />
        <div className="relative mx-auto w-full max-w-6xl px-6 lg:px-8">
          <SiteHeader />

          <div className="mx-auto max-w-3xl py-16 text-center md:py-20">
            <span className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-accent/20 bg-white/90 backdrop-blur-md px-4 py-2 text-xs font-bold tracking-wider text-accent uppercase shadow-sm">
              Knowledge Hub
            </span>
            <h1 className="animate-fade-in-up mt-6 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-primary sm:text-5xl lg:text-6xl">
              Compliance guides, in plain English.
            </h1>
            <p className="animate-fade-in-up mx-auto mt-6 max-w-2xl text-lg md:text-xl font-medium leading-relaxed text-muted-foreground">
              Everything you need to know about staying compliant - checklists, deadline calendars, and breakdowns of the regulations that actually affect early-stage startups. No jargon, no legalese.
            </p>
          </div>
        </div>
      </div>

      {/* Categories Layer */}
      <section className="mx-auto w-full max-w-6xl px-6 pt-12 lg:px-8">
        <div className="flex items-center gap-2 pb-4 overflow-x-auto no-scrollbar border-b border-border/60">
          <Layers className="h-4 w-4 text-primary shrink-0 hidden sm:block" />
          {categories.map((cat, idx) => (
            <button 
              key={idx}
              className={`whitespace-nowrap px-4 py-2 text-xs font-bold rounded-lg border transition-all hover:scale-[1.03] ${
                cat === "All" 
                  ? "bg-primary text-white border-primary shadow-sm" 
                  : "bg-white text-muted-foreground border-border hover:border-primary/40 hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Animated Guides Grid */}
      <section className="mx-auto w-full max-w-6xl px-6 py-12 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide, i) => (
            <div 
              key={i} 
              className="animate-fade-in-up bg-white border border-border rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all hover:scale-[1.01] group"
              style={{ animationDelay: `${100 * (i + 1)}ms` }}
            >
              <div>
                <span className="inline-block bg-muted text-primary text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md mb-4">
                  {guide.category}
                </span>
                <h3 className="font-display font-bold text-xl text-primary leading-snug group-hover:text-accent transition-colors">
                  {guide.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                  {guide.description}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border/40">
                <Link 
                  href={`/resources/${guide.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-accent group-hover:gap-2.5 transition-all"
                >
                  {guide.type}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Free Downloads Row */}
      <section className="bg-muted/50 border-y border-border/60 py-16">
        <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-primary sm:text-3xl">
              Free downloads
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "Post-Incorporation Compliance Calendar", desc: "Key deadlines for your first year, laid out month by month" },
              { title: "CAC Annual Returns Checklist", desc: "What to prepare, in order" },
              { title: "NDPA Compliance Starter Kit", desc: "Basic policy templates and a plain-English summary of requirements" }
            ].map((pdf, idx) => (
              <div key={idx} className="bg-white border border-border p-6 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
                <div>
                  <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4 animate-pulse">
                    <FileText className="h-5 w-5" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-primary">{pdf.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">PDF Document</p>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{pdf.desc}</p>
                </div>
                <button className="group mt-6 inline-flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary/95 text-white font-bold text-sm py-3 px-4 rounded-xl transition-all shadow-sm hover:scale-[1.02]">
                  <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                  Unlock Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Newsletter Box */}
      <section className="mx-auto w-full max-w-4xl px-6 py-16 text-center">
        <div className="bg-white border-2 border-dashed border-border p-8 md:p-12 rounded-3xl space-y-4 hover:border-accent/40 transition-colors">
          <div className="h-12 w-12 rounded-full bg-accent/10 text-accent flex items-center justify-center mx-auto">
            <Mail className="h-5 w-5 animate-bounce" />
          </div>
          <h3 className="font-display text-2xl font-extrabold text-primary">
            Regulations change. We&apos;ll keep you posted.
          </h3>
          <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
            Get compliance updates and new guides in your inbox - no spam, just what actually affects your business.
          </p>
          <div className="pt-4 max-w-md mx-auto flex flex-col sm:flex-row gap-2">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="w-full px-4 py-3 rounded-xl border border-border text-sm font-medium focus:outline-none focus:border-accent transition-colors"
            />
            <button className="bg-accent text-accent-foreground font-bold px-6 py-3 rounded-xl text-sm whitespace-nowrap shadow-sm hover:bg-accent/90 transition-all hover:scale-[1.02]">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Closing Hero Block */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-24 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-12 text-center text-primary-foreground shadow-xl md:px-12">
          <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-4xl">
            Don&apos;t want to figure this out alone?
          </h2>
          <p className="mt-4 text-base text-white/80 max-w-xl mx-auto">
            These guides get you informed. If you&apos;d rather have someone just handle it, that&apos;s what we&apos;re here for.
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
              href={whatsappLink("Hi The Startup Desk, I read your resources but I need custom help running my startup compliance.")}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-7 py-3.5 text-base font-semibold text-white shadow-sm transition-all hover:scale-[1.02]"
            >
              <MessageCircle className="h-5 w-5 transition-transform group-hover:scale-105" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
      }


