import Link from "next/link"
import { ShieldCheck, Mail, Phone, MessageCircle } from "lucide-react"
import { siteConfig, whatsappLink } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/40 mt-auto">
      <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          
          <div className="max-w-sm space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <ShieldCheck className="h-5 w-5" strokeWidth={2.2} />
              </span>
              <span className="font-display text-lg font-semibold tracking-tight text-primary">
                {siteConfig.name}
              </span>
            </Link>
            <p className="text-xs leading-relaxed text-muted-foreground">
              Compliance handled from your first CAC filing to your first funding round. A compliance consultancy for early-stage Nigerian startups, not a law firm. All advisory frameworks are non-litigation consulting parameters.[span_5](start_span)[span_5](end_span)
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-primary">Explore</p>
            <ul className="mt-4 flex flex-col gap-3 text-xs font-semibold">
              <li><Link href="/services" className="text-muted-foreground transition-colors hover:text-primary">Services</Link></li>
              <li><Link href="/about" className="text-muted-foreground transition-colors hover:text-primary">About</Link></li>
              <li><Link href="/resources" className="text-muted-foreground transition-colors hover:text-primary">Resources Hub</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-primary">Get in touch</p>
            <ul className="mt-4 flex flex-col gap-3 text-xs font-semibold">
              <li>
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary">
                  <Mail className="h-4 w-4 text-accent" /> {siteConfig.email}
                </a>
              </li>
              <li>
                <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary">
                  <Phone className="h-4 w-4 text-accent" /> {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary">
                  <MessageCircle className="h-4 w-4 text-accent" /> WhatsApp support
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-[11px] text-muted-foreground/80 sm:flex-row sm:items-center sm:justify-between font-medium">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. Registered with the Corporate Affairs Commission, Nigeria.[span_6](start_span)[span_6](end_span)
          </p>
          <p className="bg-muted px-2.5 py-1 rounded-md border border-border/60">RC Number: {siteConfig.rcNumber}</p>
        </div>
      </div>
    </footer>
  )
}

