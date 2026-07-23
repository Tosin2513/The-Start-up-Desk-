export const runtime = 'edge';

import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, MessageCircle, AlertCircle } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { whatsappLink } from "@/lib/site"
import { getResourceBySlug } from "@/lib/notion"

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
          <article className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <span className="inline-block bg-muted text-primary text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md">
                {article.category}
              </span>
              <h1 className="font-display text-3xl font-extrabold text-primary sm:text-4xl lg:text-5xl leading-tight">
                {article.title}
              </h1>
              <p className="text-lg md:text-xl font-medium text-muted-foreground leading-relaxed pt-2">
                {article.subheading}
              </p>
              {formattedDate && (
                <p className="text-xs text-muted-foreground font-medium">Published {formattedDate}</p>
              )}
            </div>
            <hr className="border-border/60" />
            <div className="text-base leading-relaxed text-muted-foreground space-y-6">
              {article.sections.map((section, i) => (
                <div key={i}>
                  {section.heading && (
                    <h3 className="font-display text-xl font-bold text-primary pt-4 mb-2">{section.heading}</h3>
                  )}
                  {section.paragraphs.map((p, j) => <p key={j}>{p}</p>)}
                </div>
              ))}
            </div>
            <div className="bg-muted/40 border-l-4 border-accent p-6 rounded-r-2xl space-y-2">
              <div className="flex items-center gap-2 text-primary font-bold text-sm tracking-wide uppercase">
                <AlertCircle className="h-4 w-4 text-accent" />
                {article.calloutTitle}
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground font-medium">{article.calloutBody}</p>
            </div>
          </article>
          <aside className="space-y-8 lg:sticky lg:top-6 h-fit">
            <div className="border border-primary/5 p-6 rounded-2xl bg-primary text-white space-y-4 shadow-md">
              <h4 className="font-display font-bold text-base">Need help with this?</h4>
              <p className="text-xs text-white/70 leading-relaxed">Let our team handle it instead of tracking it yourself.</p>
              <a href={whatsappLink(`Hi, I was reading your guide "${article.title}" and need support.`)} target="_blank" rel="noopener noreferrer" className="group inline-flex w-full items-center justify-center gap-2 bg-accent text-accent-foreground text-sm font-bold py-2.5 px-4 rounded-xl">
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