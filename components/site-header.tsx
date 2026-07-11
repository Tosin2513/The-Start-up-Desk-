import Link from "next/link"
import { ShieldCheck } from "lucide-react"

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
        <a
          href="https://wa.me/"
          className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:block"
        >
          Talk to us
        </a>
      </nav>
    </header>
  )
}
