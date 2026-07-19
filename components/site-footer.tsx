import Link from "next/link"
import Image from "next/image"
import { siteConfig } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/40 mt-auto">
      <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          
          {/* Column 1: Brand Info */}
          <div className="max-w-sm space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Image 
                  src="/Logo.svg" 
                  alt="Logo" 
                  width={20} 
                  height={20} 
                  className="h-5 w-5 object-contain invert brightness-0"
                />
              </span>
              <span className="font-display text-lg font-semibold tracking-tight text-primary">
                {siteConfig.name}
              </span>
            </Link>
            <p className="text-xs leading-relaxed text-muted-foreground">
              Compliance handled from your first CAC filing to your first funding round. A compliance consultancy for early-stage Nigerian startups, not a law firm.
            </p>
          </div>

          {/* Column 2: Explore */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-primary">Explore</p>
            <ul className="mt-4 flex flex-col gap-3 text-xs font-semibold">
              <li><Link href="/services" className="text-muted-foreground transition-colors hover:text-primary">Services</Link></li>
              <li><Link href="/about" className="text-muted-foreground transition-colors hover:text-primary">About</Link></li>
              <li><Link href="/resources" className="text-muted-foreground transition-colors hover:text-primary">Resources Hub</Link></li>
              <li><Link href="/faq" className="text-muted-foreground transition-colors hover:text-primary">FAQ</Link></li>
            </ul>
          </div>

          {/* Column 3: Legal & Compliance */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-primary">Legal &amp; Compliance</p>
            <ul className="mt-4 flex flex-col gap-3 text-xs font-semibold">
              <li><Link href="/privacy" className="text-muted-foreground transition-colors hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="/cookies" className="text-muted-foreground transition-colors hover:text-primary">Cookie Policy</Link></li>
              <li><Link href="/terms" className="text-muted-foreground transition-colors hover:text-primary">Terms of Service</Link></li>
              <li><Link href="/refund-policy" className="text-muted-foreground transition-colors hover:text-primary">Refund &amp; Cancellation Policy</Link></li>
              <li><Link href="/disclosures" className="text-muted-foreground transition-colors hover:text-primary">Regulatory Disclosures</Link></li>
            </ul>
          </div>
          
          {/* Column 4: Contact */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-primary">Get in touch</p>
            <ul className="mt-4 flex flex-col gap-4 text-xs font-semibold">
              <li>
                <a href="mailto:hello@thestartupdesk.com.ng" className="flex items-center gap-2.5 text-muted-foreground transition-colors hover:text-primary">
                  <svg className="h-4 w-4 text-accent fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                  hello@thestartupdesk.com.ng
                </a>
              </li>
              <li>
                <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2.5 text-muted-foreground transition-colors hover:text-primary">
                  <svg className="h-4 w-4 text-accent fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/in/the-start-up-desk-/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2.5 text-muted-foreground transition-colors hover:text-primary"
                >
                  <svg className="h-4 w-4 text-accent fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Sub-Footer Meta info */}
        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-[11px] text-muted-foreground/80 sm:flex-row sm:items-center sm:justify-between font-medium">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. We&apos;re here for you.
          </p>
        </div>
      </div>
    </footer> 
  )
}