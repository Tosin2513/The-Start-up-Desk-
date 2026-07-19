"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if the user has already made a choice previously
    const hasConsented = localStorage.getItem("cookie-consent")
    if (!hasConsented) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = async () => {
    // 1. Tell Google Analytics they allowed it
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        'analytics_storage': 'granted'
      })
    }
    
    // 2. Save local state so banner disappears instantly
    localStorage.setItem("cookie-consent", "granted")
    setIsVisible(false)

    // 3. Ping the central Cloudflare KV database ledger
    try {
      await fetch("/api/consent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ choice: "granted" }),
      })
    } catch (err) {
      console.error("Failed to sync audit log to KV store:", err)
    }
  }

  const handleDeny = async () => {
    // 1. Save local state choice to hide banner
    localStorage.setItem("cookie-consent", "denied")
    setIsVisible(false)

    // 2. Ping the central Cloudflare KV database ledger with the denial state
    try {
      await fetch("/api/consent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ choice: "denied" }),
      })
    } catch (err) {
      console.error("Failed to sync audit log to KV store:", err)
    }
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 w-full border-t border-border bg-background/95 backdrop-blur-md px-6 py-8 md:py-10 shadow-[0_-10px_30px_rgba(0,0,0,0.15)] z-[100] antialiased">
      <div className="mx-auto max-w-3xl flex flex-col gap-6 text-left items-center justify-between">
        
        <div className="space-y-2 w-full">
          <p className="text-base font-extrabold text-foreground tracking-tight">Cookie &amp; Privacy Preferences</p>
          <p className="text-sm leading-relaxed text-muted-foreground font-medium">
            We use anonymized analytics to measure platform traffic metrics safely. You can opt out completely or read our structured details inside the{" "}
            <Link href="/cookies" className="underline hover:text-primary transition-colors font-semibold text-accent">
              Cookie Policy
            </Link>
            .
          </p>
        </div>

        <div className="flex w-full flex-col sm:flex-row items-center justify-end gap-3 pt-2">
          <button 
            onClick={handleDeny} 
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border border-border bg-muted/40 hover:bg-muted text-muted-foreground hover:text-foreground px-6 py-3.5 text-sm font-bold transition-all active:scale-[0.99]"
          >
            Decline Optional
          </button>
          <button 
            onClick={handleAccept} 
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-accent text-white px-8 py-3.5 text-sm font-bold shadow-md hover:bg-accent/90 transition-all active:scale-[0.99]"
          >
            Accept All Cookies
          </button>
        </div>

      </div>
    </div>
  )
}
