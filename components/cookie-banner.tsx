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

  const handleAccept = () => {
    // 1. Tell Google Analytics they allowed it
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        'analytics_storage': 'granted'
      })
    }
    // 2. Save the choice so it stays hidden on next reload
    localStorage.setItem("cookie-consent", "granted")
    setIsVisible(false)
  }

  const handleDeny = () => {
    // Analytics remains denied by default; just save choice to hide banner
    localStorage.setItem("cookie-consent", "denied")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 left-4 sm:left-auto max-w-sm bg-muted/95 backdrop-blur-md border border-border p-4 rounded-xl shadow-xl z-50 space-y-3 antialiased">
      <div className="space-y-1">
        <p className="text-xs font-semibold text-foreground">Cookie &amp; Privacy Preferences</p>
        <p className="text-[11px] leading-normal text-muted-foreground">
          We use anonymized analytics to measure platform traffic. You can opt out completely or read our details in the{" "}
          <Link href="/cookies" className="underline hover:text-primary transition-colors font-medium">
            Cookie Policy
          </Link>
          .
        </p>
      </div>
      <div className="flex justify-end gap-2 text-xs font-medium pt-1">
        <button 
          onClick={handleDeny} 
          className="px-3 py-1.5 text-muted-foreground hover:text-foreground transition-colors"
        >
          Decline
        </button>
        <button 
          onClick={handleAccept} 
          className="bg-primary text-primary-foreground px-3 py-1.5 rounded-lg hover:opacity-90 transition-opacity font-semibold"
        >
          Accept
        </button>
      </div>
    </div>
  )
}