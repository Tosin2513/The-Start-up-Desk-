"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowRight, BookOpen, Download, FileText, Calendar as CalendarIcon, Mail } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

// 1. Define the unified data types
type ResourceType = "guide" | "download" | "guide+download"
type CategoryType = "All" | "CAC & Incorporation" | "Tax & FIRS" | "Data Privacy" | "General"

interface ResourceItem {
  slug: string
  title: string
  category: Exclude<CategoryType, "All">
  type: ResourceType
  description: string
  hasPdf: boolean
  hasIcs?: boolean
}

// 2. Your updated library containing all 8 correct entries (with 3 new ones added)
const RESOURCES_DATABASE: ResourceItem[] = [
  {
    slug: "cac-annual-returns-what-happens-if-you-dont-file",
    title: "CAC Annual Returns: What Happens If You Don't File",
    category: "CAC & Incorporation",
    type: "guide",
    description: "Every year, early-stage startups drop the ball on statutory updates. Here is exactly how missing your window triggers penalties and structure loss.",
    hasPdf: false,
  },
  {
    slug: "ndpa-basics-startup-compliance",
    title: "NDPA Basics: What Every Tech Startup Needs to Know",
    category: "Data Privacy",
    type: "guide",
    description: "A practical guide to the Nigeria Data Protection Act. Learn whether your startup is a major data controller and how to avoid heavy regulatory audits.",
    hasPdf: false,
  },
  {
    slug: "post-incorporation-checklist-nigeria",
    title: "Post-Incorporation Checklist for Nigerian Startups",
    category: "CAC & Incorporation",
    type: "guide+download",
    description: "You've got your RC number—now what? Access the step-by-step statutory checklist including tax registration timelines, bank setup, and local permits.",
    hasPdf: true,
  },
  {
    slug: "compliance-consultant-vs-lawyer-startup-guide",
    title: "Compliance Consultant vs. Lawyer: Who Do You Actually Need?",
    category: "General",
    type: "guide",
    description: "Stop overpaying for routine corporate filings. Learn when to hire a specialized corporate law firm and when a compliance consultancy is faster and cheaper.",
    hasPdf: false,
  },
  {
    slug: "tax-registration-firs-scucl-requirements",
    title: "Startup Tax Registration: Navigating FIRS & State Tax Boards",
    category: "Tax & FIRS",
    type: "guide",
    description: "A complete walkthrough of registering for TIN, understanding VAT obligations, and setting up corporate tax structures without legal headaches.",
    hasPdf: false,
  },
  // --- NEW ADDITIONS ---
  {
    slug: "nigerian-startup-compliance-deadline-calendar",
    title: "The Nigerian Startup Compliance Deadline Calendar",
    category: "CAC & Incorporation",
    type: "download",
    description: "Never miss a statutory deadline again. Download this interactive calendar package complete with PDF tracker and ICS calendar imports for Google/Outlook.",
    hasPdf: true,
    hasIcs: true,
  },
  {
    slug: "who-regulates-what-founders-guide",
    title: "Who Regulates What: A Founder's Guide to Nigerian Regulatory Bodies",
    category: "General",
    type: "guide",
    description: "Demystifying the alphabet soup of Nigerian regulatory agencies. Learn exactly when your startup needs to deal with CBN, SEC, NITDA, FCCPC, or NAFDAC.",
    hasPdf: false,
  },
  {
    slug: "5-compliance-mistakes-nigerian-startups-fined",
    title: "5 Compliance Mistakes That Get Nigerian Startups Fined",
    category: "General",
    type: "guide",
    description: "Real-world cautionary tales of early-stage compliance failures in Nigeria. Avoid the quiet administrative errors that drain startup runways.",
    hasPdf: false,
  }
]

const CATEGORIES: CategoryType[] = ["All", "CAC & Incorporation", "Tax & FIRS", "Data Privacy", "General"]

export default function ResourcesPage() {
  // 3. Client state for category filtering
  const [selectedCategory, setSelectedCategory] = React.useState<CategoryType>("All")

  // Filter dynamic list based on selection
  const filteredResources = React.useMemo(() => {
    if (selectedCategory === "All") return RESOURCES_DATABASE
    return RESOURCES_DATABASE.filter(item => item.category === selectedCategory)
  }, [selectedCategory])

  // Helper component to render specific badges
  const TypeBadge = ({ type }: { type: ResourceType }) => {
    switch (type) {
      case "guide+download":
        return (
          <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-accent bg-accent/10 px-2.5 py-0.5 rounded-full">
            <FileText className="h-3 w-3" /> Guide + PDF
          </span>
        )
      case "download":
        return (
          <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full dark:text-emerald-400 dark:bg-emerald-950/30">
            <Download className="h-3 w-3" /> Download
          </span>
        )
      case "guide":
      default:
        return (
          <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/5 px-2.5 py-0.5 rounded-full dark:bg-white/10">
            <BookOpen className="h-3 w-3" /> Guide
          </span>
        )
    }
  }

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <div className="mx-auto w-full max-w-6xl px-6 py-6 lg:px-8">
        <SiteHeader />

        {/* HERO SECTION (Kept as-is) */}
        <section className="py-12 md:py-16 text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block bg-muted text-primary text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md">
            The Knowledge Base
          </span>
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-primary sm:text-5xl">
            Compliance resources designed for founders.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Skip the legal jargon. Access practical guides, templates, and regulatory timelines to keep your startup pristine.
          </p>
        </section>

        {/* 2. CATEGORY FILTERS */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 pb-4 border-b border-border/60">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* 3 & 4 & 5. UNIFIED RESOURCE CARD GRID */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {filteredResources.map((resource) => (
            <div 
              key={resource.slug} 
              className="group border border-border bg-card-surface p-6 rounded-2xl flex flex-col justify-between hover:shadow-md transition-all hover:border-primary/20"
            >
              <div className="space-y-4">
                {/* Meta details (Type Badge and Category label) */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    {resource.category}
                  </span>
                  <TypeBadge type={resource.type} />
                </div>

                <h3 className="font-display text-lg font-bold text-primary group-hover:text-accent transition-colors line-clamp-2">
                  {resource.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {resource.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-border/40 flex items-center justify-between">
                {/* Visual file indicators */}
                <div className="flex items-center gap-2">
                  {resource.hasPdf && (
                    <span className="text-[10px] font-medium bg-red-50 text-red-600 px-1.5 py-0.5 rounded border border-red-100 dark:bg-red-950/20 dark:text-red-400 dark:border-red-900/30">
                      PDF
                    </span>
                  )}
                  {resource.hasIcs && (
                    <span className="text-[10px] font-medium bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded border border-blue-100 dark:bg-blue-950/20 dark:text-blue-400 dark:border-blue-900/30 inline-flex items-center gap-0.5">
                      <CalendarIcon className="h-2 w-2" /> ICS
                    </span>
                  )}
                </div>

                {/* Conditional Navigation Action Text */}
                <Link 
                  href={`/resources/${resource.slug}`} 
                  className="inline-flex items-center gap-1 text-xs font-bold text-accent group-hover:translate-x-0.5 transition-transform"
                >
                  {resource.type === "download" ? "Get Download" : "Read Guide"} 
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          ))}

          {filteredResources.length === 0 && (
            <div className="col-span-full py-12 text-center text-muted-foreground">
              No resources found in this category. Check back soon!
            </div>
          )}
        </div>

       {/* NEWSLETTER SIGNUP */}
{(() => {
  const [email, setEmail] = React.useState("")
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = React.useState("")

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus("loading")
    setErrorMessage("")

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      if (res.ok) {
        setStatus("success")
        setEmail("")
      } else {
        const data = await res.json().catch(() => ({}))
        setErrorMessage(data.error || "Failed to subscribe. Please try again.")
        setStatus("error")
      }
    } catch (err) {
      setErrorMessage("Network error. Please try again later.")
      setStatus("error")
    }
  }

  return (
    <section className="bg-muted/40 border border-border p-8 rounded-3xl max-w-4xl mx-auto text-center space-y-6 mb-16">
      <div className="space-y-2">
        <h2 className="font-display text-xl font-bold text-primary">Get statutory updates before they pass.</h2>
        <p className="text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed">
          We track Compliance Obligations so you don't have to. Subscribe to get regulatory reminders directly in your inbox.
        </p>
      </div>

      <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
        <input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email" 
          disabled={status === "loading" || status === "success"}
          required
          className="flex-grow bg-white border border-border text-sm px-4 py-2.5 rounded-xl outline-none focus:border-accent transition-colors dark:bg-black/20 disabled:opacity-60"
        />
        <button 
          type="submit" 
          disabled={status === "loading" || status === "success"}
          className="bg-primary text-primary-foreground font-bold text-xs px-5 py-2.5 rounded-xl shadow-sm hover:brightness-105 transition-all inline-flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-60"
        >
          <Mail className="h-3.5 w-3.5" /> 
          {status === "loading" ? "Subscribing..." : status === "success" ? "Subscribed!" : "Subscribe"}
        </button>
      </form>

      {/* Dynamic Status Feedback */}
      {status === "success" && (
        <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
          ✓ You&apos;re on the list! Check your inbox for updates.
        </p>
      )}
      {status === "error" && (
        <p className="text-xs font-semibold text-rose-600 dark:text-rose-400">
          {errorMessage}
        </p>
      )}
    </section>
  )
})()}

      </div>
      <SiteFooter />
    </main>
  )
}
