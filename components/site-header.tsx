"use client"

import * as React from "react"
import Link from "next/link"
import { ShieldCheck, MessageCircle, Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { whatsappLink } from "@/lib/site"

export function SiteHeader() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="relative animate-fade-in-up">
      <div className="flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 z-50">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <ShieldCheck className="h-5 w-5" strokeWidth={2.2} />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-foreground">
            The Startup Desk
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="/services"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Services
          </Link>

          <Link
            href="/resources"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Resources
          </Link>

          <Link
            href="/about"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </Link>

          <ThemeToggle />

          <a
            href={whatsappLink(
              "Hi The Startup Desk, I'd like to talk about compliance for my startup."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-whatsapp bg-whatsapp px-3.5 py-2 text-sm font-medium text-whatsapp-foreground transition-colors hover:bg-whatsapp/90"
          >
            <MessageCircle className="h-4 w-4" />
            Talk to us
          </a>
        </nav>

        {/* Mobile Controls Right Side */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          
          {/* Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card-surface text-foreground transition-all z-50"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-card-surface border border-border/80 rounded-2xl p-6 shadow-xl z-40 md:hidden animate-page-slide space-y-5">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/services"
              onClick={() => setIsOpen(false)}
              className="text-sm font-semibold text-foreground hover:text-accent transition-colors"
            >
              Services
            </Link>

            <Link
              href="/resources"
              onClick={() => setIsOpen(false)}
              className="text-sm font-semibold text-foreground hover:text-accent transition-colors"
            >
              Resources
            </Link>

            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="text-sm font-semibold text-foreground hover:text-accent transition-colors"
            >
              About
            </Link>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="text-sm font-semibold text-foreground hover:text-accent transition-colors"
            >
              Contact
            </Link>
          </nav>

          <hr className="border-border/60" />

          {/* Mobile CTA */}
          <a
            href={whatsappLink(
              "Hi The Startup Desk, I'd like to talk about compliance for my startup."
            )}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 w-full rounded-xl border border-whatsapp bg-whatsapp py-3 text-sm font-bold text-whatsapp-foreground transition-colors hover:bg-whatsapp/90"
          >
            <MessageCircle className="h-4 w-4" />
            Talk on WhatsApp
          </a>
        </div>
      )}
    </header>
  )
}

