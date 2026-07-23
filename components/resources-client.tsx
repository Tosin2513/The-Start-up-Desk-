"use client"
import * as React from "react"
import Link from "next/link"
import { ArrowRight, BookOpen, Mail } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import type { ResourceSummary } from "@/lib/notion"

export function ResourcesClient({ resources }: { resources: ResourceSummary[] }) {
  const [selectedCategory, setSelectedCategory] = React.useState("All")
  const categories = ["All", ...Array.from(new Set(resources.map(r => r.category)))]
  const filtered = selectedCategory === "All" ? resources : resources.filter(r => r.category === selectedCategory)

  // Newsletter state — moved up here, top-level of the component
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
    <main className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <div className="mx-auto w-full max-w-6xl px-6 py-6 lg:px-8">
        <SiteHeader />

        <section className="py-12 md:py-16 text-center max-w-3xl mx-auto space-y-4">
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-primary sm:text-5xl">
            Compliance resources designed for founders.
          </h1>
        </section>

        <div className="flex flex-wrap justify-center gap-2 mb-10 pb-4 border-b border-border/60">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setSelectedCategory(c)}
              className={`px-4 py-2 text-xs font-semibold rounded-full ${
                selectedCategory === c ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {filtered.map((r) => (
            <Link
              key={r.slug}
              href={`/resources/${r.slug}`}
              className="group border border-border bg-card-surface p-6 rounded-2xl flex flex-col justify-between hover:shadow-md transition-all"
            >
              <div className="space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{r.category}</span>
                <h3 className="font-display text-lg font-bold text-primary line-clamp-2">{r.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{r.subheading}</p>
              </div>
              <div className="pt-6 mt-6 border-t border-border/40 flex items-center justify-between">
                <span className="inline-flex items-center gap-1 text-xs font-bold text-accent">
                  <BookOpen className="h-3 w-3" /> Read Guide <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* NEWSLETTER SIGNUP */}
        <section className="bg-muted/40 border border-border p-8 rounded-3xl max-w-4xl mx-auto text-center space-y-6 mb-16">
          <div className="space-y-2">
            <h2 className="font-display text-xl font-bold text-primary">Get statutory updates before they pass.</h2>
            <p className="text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed">
              We track the FIRS, CAC, and NDPC so you don&apos;t have to. Subscribe to get regulatory reminders directly in your inbox.
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
      </div>
      <SiteFooter />
    </main>
  )
}