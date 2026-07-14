"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { MessageCircle, Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { whatsappLink } from "@/lib/site"

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
              src="/Logo.svg" 
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
            href={whatsappLink("Hi The Startup Desk, I'd like to talk about compliance for my startup.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-whatsapp bg-whatsapp px-3.5 py-2 text-sm font-medium text-whatsapp-foreground transition-colors hover:bg-whatsapp/90"
          >
            <MessageCircle className="h-4 w-4" />
            Talk to us
          </a>
        </nav>

        {/* Mobile Controls Right Side */}
        <div className="flex items-center gap-2 md:hidden relative z-[60]">
          <ThemeToggle />
          
          {/* Hamburger / Close Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-white dark:bg-black text-foreground transition-all focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Modern Opaque Fullscreen Mobile Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-0 left-0 w-screen h-screen bg-white dark:bg-[#090d16] z-[55] md:hidden flex flex-col justify-between p-6">
          
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
              className="flex items-center justify-center gap-2 w-full rounded-xl border border-whatsapp bg-whatsapp py-3.5 text-sm font-bold text-whatsapp-foreground transition-colors hover:bg-whatsapp/90 shadow-sm"
            >
              <MessageCircle className="h-4 w-4" />
              Talk on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
