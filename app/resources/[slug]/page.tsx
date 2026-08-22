export const revalidate = 3600 // Automatically rechecks Notion every hour
export const runtime = 'edge';

import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { MessageCircle, AlertCircle, ArrowLeft, BookOpen, ArrowRight, Tag } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { whatsappLink } from "@/lib/site"
import { getResourceBySlug, getPublishedResources } from "@/lib/notion"
import { LeadMagnetCard } from "@/components/lead-magnet-card"
import { MarkdownRenderer } from "@/components/markdown-renderer"
import { ShareButtons } from "@/components/share-buttons"
import { Comments } from "@/components/comments"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = await getResourceBySlug(slug)

  if (!article) return { title: "Guide Not Found | The Startup Desk" }

  const pageUrl = `https://thestartupdesk.com.ng/resources/${slug}`
  const description = article.subheading || `Read our guide on ${article.title} for Nigerian startups.`

  return {
    title: `${article.title} | The Startup Desk`,
    description,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `${article.title} | The Startup Desk`,
      description,
      url: pageUrl,
      type: "article",
      publishedTime: article.publishDate || undefined,
      siteName: "The Startup Desk",
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description,
    },
  }
}

export default async function IndividualGuide({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  
  // Fetch the current article and all published resources simultaneously
  const [article, allResources] = await Promise.all([
    getResourceBySlug(slug),
    getPublishedResources(),
  ])

  if (!article) notFound()

  // Filter out the current article to display other blog posts in box form
  const otherGuides = allResources
    .filter((r) => r.slug !== slug)
    .slice(0, 3) // Display up to 3 other guides

  const formattedDate = article.publishDate
    ? new Date(article.publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    : null

  const pageUrl = `https://thestartupdesk.com.ng/resources/${slug}`

  // Structured Article Schema for Google Rich Snippets
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.subheading || `Guide on ${article.title} for Nigerian startups.`,
    datePublished: article.publishDate || undefined,
    url: pageUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    author: {
      "@type": "Organization",
      name: "The Startup Desk",
      url: "https://thestartupdesk.com.ng",
    },
    publisher: {
      "@type": "Organization",
      name: "The Startup Desk",
      logo: {
        "@type": "ImageObject",
        url: "https://thestartupdesk.com.ng/Logo.svg",
      },
    },
  }

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      {/* Schema.org Article Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <div className="mx-auto w-full max-w-6xl px-6 py-6 lg:px-8">
        <SiteHeader />
        
        <div className="grid gap-12 lg:grid-cols-[1fr_320px] py-8 md:py-12">
          {/* Main Article Body */}
          <article className="space-y-8 animate-fade-in-up">
            
            {/* Back Button */}
            <div>
              <Link 
                href="/resources" 
                className="inline-flex items-center gap-2 text-xs font-bold text-muted-foreground hover:text-primary transition-colors bg-muted/40 px-3 py-1.5 rounded-xl border border-border/60"
              >
                <ArrowLeft className="h-3.5 w-3.5" /> Back to Resources &amp; Guides
              </Link>
            </div>

            {/* Header / Title Info */}
            <header className="space-y-4">
              <span className="inline-block bg-primary/10 text-primary text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full">
                {article.category}
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary tracking-tight leading-tight">
                {article.title}
              </h1>
              {article.subheading && (
                <div className="text-lg md:text-xl font-medium text-muted-foreground leading-relaxed pt-1">
                  <MarkdownRenderer content={article.subheading} />
                </div>
              )}
              {formattedDate && (
                <p className="text-xs text-muted-foreground font-semibold">Published {formattedDate}</p>
              )}
            </header>

            <hr className="border-border/60" />

            {/* Article Markdown Body (Will automatically inject calendar widget where link text matches) */}
            <div className="text-base leading-relaxed text-muted-foreground space-y-5">
              <MarkdownRenderer content={article.body} />
            </div>

            {/* Callout Box */}
            {article.calloutBody && (
              <aside className="bg-amber-500/10 border-l-4 border-amber-500 p-6 rounded-r-2xl space-y-2 mt-8">
                <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-xs tracking-widest uppercase">
                  <AlertCircle className="h-4 w-4 text-amber-500 shrink-0" />
                  <span>{article.calloutTitle || "Key Compliance Takeaway"}</span>
                </div>
                <div className="text-sm leading-relaxed text-foreground/90 font-medium">
                  <MarkdownRenderer content={article.calloutBody} />
                </div>
              </aside>
            )}

            {/* 1. Share Buttons */}
            <ShareButtons title={article.title} url={pageUrl} />

            {/* 2. Lead Magnet Download Form */}
            {article.downloadLink && (
              <LeadMagnetCard
                downloadLink={article.downloadLink}
                guideTitle={article.title}
              />
            )}

            {/* 3. Community Comments */}
            <Comments />

            {/* 4. Explore Other Blogs in Box Form */}
            {otherGuides.length > 0 && (
              <section className="space-y-6 pt-8 border-t border-border/60 mt-16">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl font-bold text-primary">Read Next: Other Founder Guides</h3>
                  <Link href="/resources" className="text-xs font-bold text-accent inline-flex items-center gap-1 hover:underline">
                    View all <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
                
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {otherGuides.map((guide) => (
                    <Link
                      key={guide.slug}
                      href={`/resources/${guide.slug}`}
                      className="group flex flex-col justify-between p-5 rounded-2xl border border-border bg-card-surface hover:border-primary/40 hover:shadow-md transition-all"
                    >
                      <div className="space-y-3">
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-accent bg-accent/10 px-2 py-0.5 rounded-md">
                          <Tag className="h-2.5 w-2.5" />
                          {guide.category}
                        </span>
                        <h4 className="font-display text-base font-bold text-primary group-hover:text-accent transition-colors line-clamp-2 leading-snug">
                          {guide.title}
                        </h4>
                        {guide.subheading && (
                          <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                            {guide.subheading}
                          </p>
                        )}
                      </div>
                      <div className="pt-4 mt-4 border-t border-border/40 flex items-center text-xs font-bold text-primary group-hover:text-accent transition-colors gap-1">
                        Read Guide <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}

          </article>

          {/* Sticky Sidebar */}
          <aside className="space-y-8 lg:sticky lg:top-6 h-fit">
            <div className="border border-primary/10 p-6 rounded-2xl bg-primary text-white space-y-4 shadow-lg">
              <h4 className="font-display font-bold text-base">Need help with this?</h4>
              <p className="text-xs text-white/80 leading-relaxed">
                Let our team handle your founder agreements and CAC compliance instead of tracking it yourself.
              </p>
              <a 
                href={whatsappLink(`Hi, I was reading your guide "${article.title}" and need support.`)} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group inline-flex w-full items-center justify-center gap-2 bg-accent text-accent-foreground text-sm font-bold py-3 px-4 rounded-xl hover:opacity-90 transition-opacity"
              >
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </a>
            </div>
          </aside>
        </div>
      </div>

      <SiteFooter />
    </main>
  )
}