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
            href={emailLink("Compliance help")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-whatsapp bg-whatsapp px-3.5 py-2 text-sm font-medium text-whatsapp-foreground transition-colors hover:bg-whatsapp/90"
          >
            {/* mail icon */}
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M2 5.75C2 4.23122 3.23122 3 4.75 3H19.25C20.7688 3 22 4.23122 22 5.75V18.25C22 19.7688 20.7688 21 19.25 21H4.75C3.23122 21 2 19.7688 2 18.25V5.75Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3.5 6.75L12 12.25L20.5 6.75" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Talk to us</span>
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
                <path d="M20.52 3.48A11.76 11.76 0 0 0 12 .25C6.1.25 1.5 4.86 1.5 10.77c0 1.9.5 3.66 1.47 5.22L.5 23.5l7.9-2.07A11.82 11.82 0 0 0 12 22.5c5.9 0 10.5-4.6 10.5-10.5 0-2.8-1.08-5.4-3-7.02Zm-8.52 15.32c-1.6 0-3.12-.43-4.44-1.24l-.32-.19-4.69 1.23 1.26-4.57-.21-.37A8.78 8.78 0 0 1 3.5 10.77c0-4.7 3.83-8.53 8.53-8.53 2.28 0 4.44.89 6.06 2.51 1.62 1.62 2.51 3.78 2.51 6.05 0 4.7-3.83 8.53-8.53 8.53Zm4.78-6.38c-.26-.13-1.54-.77-1.78-.86-.24-.09-.42-.13-.6.13-.18.26-.7.86-.86 1.04-.16.18-.32.2-.59.07-.27-.13-1.13-.42-2.15-1.32-.8-.7-1.34-1.56-1.5-1.83-.16-.27-.02-.42.12-.55.12-.12.26-.32.39-.48.13-.16.17-.27.26-.45.09-.18.04-.33-.02-.46-.07-.13-.6-1.44-.82-1.98-.22-.53-.44-.45-.6-.46l-.51-.01c-.17 0-.46.06-.7.33-.24.26-.92.9-.92 2.2 0 1.3.94 2.56 1.07 2.74.13.18 1.85 2.86 4.56 3.9 3 .6 3.38.43 4 .4.62-.03 1.98-.8 2.26-1.57.28-.76.28-1.41.2-1.57-.09-.16-.26-.27-.52-.4Z"/>
              </svg>
              Talk on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
