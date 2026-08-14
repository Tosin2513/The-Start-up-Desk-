"use client"

import * as React from "react"
import Link from "next/link"
import { Search, ArrowRight, BookOpen, Clock, Tag } from "lucide-react"
import type { ResourceSummary } from "@/lib/notion"

interface ResourcesListProps {
  initialResources: ResourceSummary[]
}

const CATEGORIES = [
  "All",
  "CAC & Incorporation",
  "Tax & FIRS",
  "Data Privacy",
  "Founder Agreements",
  "General",
]

export function ResourcesList({ initialResources = [] }: ResourcesListProps) {
  const [selectedCategory, setSelectedCategory] = React.useState("All")
  const [searchQuery, setSearchQuery] = React.useState("")

  const filteredResources = initialResources.filter((resource) => {
    const matchesCategory =
      selectedCategory === "All" ||
      resource.category?.toLowerCase() === selectedCategory.toLowerCase()

    const matchesSearch =
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.subheading?.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesCategory && matchesSearch
  })

  return (
    <div className="space-y-12 py-8 md:py-12">
      {/* Header section */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-block bg-primary/10 text-primary text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full">
          Knowledge Base & Guides
        </span>
        <h1 className="font-display text-4xl font-extrabold tracking-tight text-primary sm:text-5xl">
          Startup Compliance & Legal Guides
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          Actionable, plain-English playbooks for Nigerian founders handling CAC, taxes, data privacy, and co-founder equity.
        </p>
      </section>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-5xl mx-auto">
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search guides..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-card-surface text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-muted-foreground/60"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === category
                  ? "bg-primary text-white shadow-sm"
                  : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      {filteredResources.length === 0 ? (
        <div className="text-center py-20 border border-dashed border-border rounded-3xl max-w-3xl mx-auto space-y-3">
          <BookOpen className="h-10 w-10 text-muted-foreground/40 mx-auto" />
          <h3 className="font-display font-bold text-lg text-foreground">No resources found</h3>
          <p className="text-sm text-muted-foreground">
            Try adjusting your search query or selecting a different category.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {filteredResources.map((article) => {
            const formattedDate = article.publishDate
              ? new Date(article.publishDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })
              : null

            return (
              <Link
                key={article.slug}
                href={`/resources/${article.slug}`}
                className="group flex flex-col justify-between p-6 rounded-2xl border border-border bg-card-surface hover:border-primary/40 hover:shadow-lg transition-all duration-200"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-accent bg-accent/10 px-2.5 py-1 rounded-md">
                      <Tag className="h-2.5 w-2.5" />
                      {article.category}
                    </span>
                    {formattedDate && (
                      <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {formattedDate}
                      </span>
                    )}
                  </div>

                  <h2 className="font-display text-lg font-bold text-primary group-hover:text-accent transition-colors line-clamp-2 leading-snug">
                    {article.title}
                  </h2>

                  {article.subheading && (
                    <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">
                      {article.subheading}
                    </p>
                  )}
                </div>

                <div className="pt-6 flex items-center text-xs font-bold text-primary group-hover:text-accent transition-colors gap-1">
                  Read Guide <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}