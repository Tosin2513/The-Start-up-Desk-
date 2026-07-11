import Link from "next/link"
import { ShieldCheck, Mail, Phone, MessageCircle } from "lucide-react"
import { siteConfig, whatsappLink } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* brand */}
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <ShieldCheck className="h-5 w-5" strokeWidth={2.2} />
              </span>
              <span className="font-display text-lg font-semibold tracking-tight text-foreground">
                {siteConfig.name}
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Compliance handled — from your first CAC filing to your first funding round. A compliance
              consultancy for early-stage Nigerian startups, not a law firm.
            </p>
          </div>

          {/* nav */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Explore</p>
            <ul className="mt-4 flex flex-col gap-3 text-sm">
              <li>
                <Link href="/services" className="text-foreground transition-colors hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-foreground transition-colors hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <a
                  href={whatsappLink("Hi The Startup Desk, I have a compliance question.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground transition-colors hover:text-primary"
                >
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Get in touch</p>
            <ul className="mt-4 flex flex-col gap-3 text-sm">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2.5 text-foreground transition-colors hover:text-primary"
                >
                  <Mail className="h-4 w-4 text-primary" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.whatsappNumber}`}
                  className="flex items-center gap-2.5 text-foreground transition-colors hover:text-primary"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-foreground transition-colors hover:text-primary"
                >
                  <MessageCircle className="h-4 w-4 text-primary" />
                  WhatsApp us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. Registered with the Corporate Affairs Commission,
            Nigeria.
          </p>
          <p>RC: {siteConfig.rcNumber}</p>
        </div>
      </div>
    </footer>
  )
}
