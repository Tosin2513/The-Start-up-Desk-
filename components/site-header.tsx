import Link from "next/link"
import { ShieldCheck, MessageCircle } from "lucide-react"
import { whatsappLink } from "@/lib/site"

export function SiteHeader() {
  return (
    <header className="animate-fade-in-up flex items-center justify-between">
      <Link href="/" className="flex items-center gap-2.5">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <ShieldCheck className="h-5 w-5" strokeWidth={2.2} />
        </span>
        <span className="font-display text-lg font-semibold tracking-tight text-foreground">The Startup Desk</span>
      </Link>

      <nav className="flex items-center gap-6">
        <Link
          href="/services"
          className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:block"
        >
          Services
        </Link>
        <Link
          href="/about"
          className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:block"
        >
          About
        </Link>
        <a
          href={whatsappLink("Hi The Startup Desk, I'd like to talk about compliance for my startup.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-lg border border-whatsapp bg-whatsapp px-3.5 py-2 text-sm font-medium text-whatsapp-foreground transition-colors hover:bg-whatsapp/90"
        >
          <MessageCircle className="h-4 w-4" />
          Talk to us
        </a>
      </nav>
    </header>
  )
}
