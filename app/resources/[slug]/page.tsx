import Link from "next/link"
import { ArrowRight, MessageCircle, AlertCircle } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { whatsappLink } from "@/lib/site"

// 1. Updated the type definition so Next.js knows params is an async Promise
export default async function IndividualGuide({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  
  // 2. We await the promise right here to safely get your slug variable
  const resolvedParams = await params
  const { slug } = resolvedParams

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <div className="mx-auto w-full max-w-6xl px-6 py-6 lg:px-8">
        <SiteHeader />
        
        {/* Animated two-column container */}
        <div className="grid gap-12 lg:grid-cols-[1fr_320px] py-12 md:py-16">
          
          {/* Article Main Frame */}
          <article className="space-y-8 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            <div className="space-y-4">
              <span className="inline-block bg-muted text-primary text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md">
                Compliance Guide
              </span>
              <h1 className="font-display text-3xl font-extrabold text-primary sm:text-4xl lg:text-5xl leading-tight">
                CAC Annual Returns: What Happens If You Don&apos;t File
              </h1>
              <p className="text-lg md:text-xl font-medium text-muted-foreground leading-relaxed pt-2">
                Every year, early-stage startups drop the ball on statutory updates. Here is exactly how missing your window triggers penalties and structure loss.
              </p>
            </div>

            <hr className="border-border/60" />

            <div className="text-base leading-relaxed text-muted-foreground space-y-6">
              <p>
                Getting your incorporation documents back from the Corporate Affairs Commission is an exciting benchmark. However, it triggers a counting timeline system for legal reporting responsibilities.
              </p>
              
              <h3 className="font-display text-xl font-bold text-primary pt-4">The Statutory Traps</h3>
              <p>
                An annual return is not a tax declaration - it is a verification statement showing the commission your business is still active and working. Failing to update this register triggers compound vertical penalty fines daily.
              </p>
            </div>

            {/* Distinct Callout Box */}
            <div className="bg-muted/40 border-l-4 border-accent p-6 rounded-r-2xl space-y-2 hover:bg-muted/60 transition-colors">
              <div className="flex items-center gap-2 text-primary font-bold text-sm tracking-wide uppercase">
                <AlertCircle className="h-4 w-4 text-accent animate-pulse" />
                What this means for you
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground font-medium">
                If your operations stay hidden from registration metrics for too long, the board will mark the corporate name dead and clear it out for other entries to claim.
              </p>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-8 lg:sticky lg:top-6 h-fit animate-fade-in-up" style={{ animationDelay: "250ms" }}>
            <div className="border border-border p-6 rounded-2xl bg-white space-y-4 shadow-sm hover:shadow-md transition-all">
              <h4 className="font-display font-bold text-base text-primary">Related Guides</h4>
              <ul className="space-y-3 text-sm font-semibold text-accent">
                <li>
                  <Link href="/resources/ndpa-basics-startup-compliance" className="group flex items-center gap-1 hover:underline">
                    NDPA Basics Overview 
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </li>
                <li>
                  <Link href="/resources/post-incorporation-checklist-nigeria" className="group flex items-center gap-1 hover:underline">
                    Post-Incorporation Checklist 
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </li>
              </ul>
            </div>

            <div className="border border-primary/5 p-6 rounded-2xl bg-primary text-white space-y-4 shadow-md hover:scale-[1.01] transition-transform">
              <h4 className="font-display font-bold text-base">Need help with this?</h4>
              <p className="text-xs text-white/70 leading-relaxed">
                If you would rather have our team monitor your statutory calendars instead of tracking paperwork metrics yourself, let us handle it.
              </p>
              <a 
                href={whatsappLink("Hi, I was reading your guide on CAC returns and need support.")} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group inline-flex w-full items-center justify-center gap-2 bg-accent text-accent-foreground text-sm font-bold py-2.5 px-4 rounded-xl shadow-sm hover:brightness-105 transition-all"
              >
                <MessageCircle className="h-4 w-4 transition-transform group-hover:rotate-12" />
                Chat on WhatsApp
              </a>
            </div>
          </aside>

        </div>
      </div>
      <SiteFooter />
    </main>
  )
}
