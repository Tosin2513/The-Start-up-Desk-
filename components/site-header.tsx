"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { MessageCircle, Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { whatsappLink, emailLink } from "@/lib/site"

export function SiteHeader() {
  const [isOpen, setIsOpen] = React.useState(false)

  // Block background scroll when mobile menu is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <header className="w-full relative z-50">
      <div className="flex items-center justify-between py-4">
        
        {/* Logo and Bold Name Group */}
        <Link href="/" className="flex items-center gap-3 relative z-[60]">
          {/* Logo Mark (Pointed to Logo.png, adjust extension to .svg if you upload one instead) */}
          <div className="relative h-8 w-8 shrink-0"> 
            <Image
              src="/Logo.png" 
              alt="The Startup Desk Logo"
              fill
              priority
              className="object-contain dark:brightness-0 dark:invert"
            />
          </div>
          {/* Bolded Text Brand Name */}
          <span className="font-display text-lg font-extrabold tracking-tight text-foreground whitespace-nowrap">
            The Startup Desk
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/services" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Services
          </Link>
          <Link href="/resources" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Resources
          </Link>
          <Link href="/faq" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            FAQ
          </Link>
          <Link href="/about" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Contact
          </Link>
          <ThemeToggle />
          <a
            href={whatsappLink("Hi The Startup Desk, I'd like compliance help")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-whatsapp bg-whatsapp px-3.5 py-2 text-sm font-medium text-white transition-colors hover:bg-whatsapp/90"
          >
            {/* whatsapp icon (white) */}
            <svg className="h-4 w-4 fill-current text-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.058-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.173.198-.297.297-.496.099-.198.05-.372-.025-.52-.075-.149-.67-1.618-.92-2.218-.242-.579-.487-.5-.67-.51l-.572-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479c0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487 2.982 1.287 2.982.859 3.52.805.538-.05 1.758-.719 2.006-1.413.248-.695.248-1.289.173-1.414-.074-.124-.273-.198-.57-.347z" />
            </svg>
            <span>WhatsApp</span>
          </a>
        </nav>

        {/* Mobile Controls Right Side */}
        <div className="flex items-center gap-2 md:hidden relative z-[60]">
          <ThemeToggle />
          
          {/* Hamburger / Close Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card-surface dark:bg-card text-foreground transition-all focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Modern Opaque Fullscreen Mobile Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-0 left-0 w-screen h-screen bg-card-surface dark:bg-card z-[55] md:hidden flex flex-col justify-between p-6">
          
          {/* Menu Link List */}
          <nav className="flex flex-col space-y-6 pt-24 text-left">
            <span className="text-[10px] font-bold tracking-wider uppercase text-muted-foreground/50 border-b border-border/40 pb-2">
              Navigation Menu
            </span>
            <Link
              href="/services"
              onClick={() => setIsOpen(false)}
              className="font-display text-2xl font-bold text-foreground hover:text-accent transition-colors"
            >
              Services
            </Link>
            <Link
              href="/resources"
              onClick={() => setIsOpen(false)}
              className="font-display text-2xl font-bold text-foreground hover:text-accent transition-colors"
            >
              Resources
            </Link>
            <Link
              href="/faq"
              onClick={() => setIsOpen(false)}
              className="font-display text-2xl font-bold text-foreground hover:text-accent transition-colors"
            >
              FAQ
            </Link>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="font-display text-2xl font-bold text-foreground hover:text-accent transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="font-display text-2xl font-bold text-foreground hover:text-accent transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Fixed Mobile Drawer Bottom CTAs */}
          <div className="space-y-4 pb-10">
            <hr className="border-border/60" />
            <a
              href={whatsappLink("Hi The Startup Desk, I'd like to talk about compliance for my startup.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full rounded-xl border border-whatsapp bg-whatsapp py-3.5 text-sm font-bold text-whatsapp-foreground transition-colors hover:bg-whatsapp/90"
            >
              <svg className="h-4 w-4 fill-current text-[#25D366]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M20.52 3.48A11.76 11.76 0 0 0 12 .25C6.1.25 1.5 4.86 1.5 10.77c0 1.9.5 3.66 1.47 5.22L.5 23.5l7.9-2.07A11.82 11.82 0 0 0 12 22.5c5.9 0 10.5-4.6 10.5-10.5 0-2.8-1.08-5.4-3.48-7.02z" />
              </svg>
              Talk on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
