export const runtime = 'edge';

import Link from "next/link"
import { notFound } from "next/navigation"
import { MessageCircle, AlertCircle } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { whatsappLink } from "@/lib/site"
import { getResourceBySlug } from "@/lib/notion"
import { LeadMagnetCard } from "@/components/lead-magnet-card"

// Helper function to render **bold** text without showing raw asterisks
function renderFormattedText(text: string) {
  if (!text) return null
  const parts = text.split(/(\*\*.*?\*\*)/g)
  
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="font-bold text-foreground">
          {part.slice(2, -2)}
        </strong>
      )
    }
    return part
  })
}

export default async function IndividualGuide({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = await getResourceBySlug(slug)

  if (!article) notFound()

  const formattedDate = article.publishDate
    ? new Date(article.publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    : null

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <div className="mx-auto w-full max-w-6xl px-6 py-6 lg:px-8">
        <SiteHeader />
        
        <div className="grid gap-12 lg:grid-cols-[1fr_320px] py-12 md:py-16">
          {/* Main Article Body */}
          <article className="space-y-8 animate-fade-in-up">
            
            {/* Header / Title Info */}
            <div className="space-y-4">
              <span className="inline-block bg-primary/10 text-primary text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full">
                {article.category}
              </span>
              <h1 className="font-display text-3xl font-extrabold text-primary sm:text-4xl lg:text-5xl leading-tight">
                {renderFormattedText(article.title)}
              </h1>
              <p className="text-lg md:text-xl font-medium text-muted-foreground leading-relaxed pt-1">
                {renderFormattedText(article.subheading)}
              </p>
              {formattedDate && (
                <p className="text-xs text-muted-foreground font-semibold">Published {formattedDate}</p>
              )}
            </div>

            <hr className="border-border/60" />

            {/* Article Content Blocks */}
            <div className="text-base leading-relaxed text-muted-foreground space-y-5">
              {article.blocks?.map((block, index) => {
                if (block.type === "h2") {
                  return (
                    <h2 key={index} className="font-display text-2xl font-bold text-primary pt-6 pb-1 border-b border-border/40">
                      {renderFormattedText(block.content)}
                    </h2>
                  )
                }

                if (block.type === "h3") {
                  return (
                    <h3 key={index} className="font-display text-lg font-bold text-primary pt-4 pb-1">
                      {renderFormattedText(block.content)}
                    </h3>
                  )
                }

                if (block.type === "bullet") {
                  return (
                    <div key={index} className="flex items-start gap-3 pl-2 py-1">
                      <div className="h-2 w-2 rounded-full bg-accent mt-2 shrink-0" />
                      <p className="text-foreground/90 font-normal leading-relaxed">
                        {renderFormattedText(block.content)}
                      </p>
                    </div>
                  )
                }

                if (block.type === "hr") {
                  return <hr key={index} className="my-8 border-border/60" />
                }

                return (
                  <p key={index} className="text-foreground/80 leading-relaxed font-normal">
                    {renderFormattedText(block.content)}
                  </p>
                )
              })}
            </div>

            {/* Callout Box */}
            <div className="bg-amber-500/10 border-l-4 border-amber-500 p-6 rounded-r-2xl space-y-2 mt-8">
              <div className="flex items-center gap-2 text-amber-700 font-bold text-xs tracking-widest uppercase">
                <AlertCircle className="h-4 w-4 text-amber-500" />
                {renderFormattedText(article.calloutTitle || "THE GOLDEN RULE OF CO-FOUNDER EQUITY")}
              </div>
              <p className="text-sm leading-relaxed text-amber-950 font-medium">
                {renderFormattedText(article.calloutBody)}
              </p>
            </div>

            {/* Lead Magnet Download Form */}
            {article.downloadLink && (
              <LeadMagnetCard
                downloadLink={article.downloadLink}
                guideTitle={article.title}
              />
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
