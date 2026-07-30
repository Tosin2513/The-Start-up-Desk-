"use client"

import { useState } from "react"
import { Download, CheckCircle2, Loader2, Mail } from "lucide-react"

interface LeadMagnetCardProps {
  downloadLink: string
  guideTitle: string
}

export function LeadMagnetCard({ downloadLink, guideTitle }: LeadMagnetCardProps) {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return

    setLoading(true)

    try {
      // 1. Send subscriber to MailerLite via API Route
      await fetch("/api/lead-magnet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, guideTitle }),
      })
    } catch (err) {
      console.error("Failed to add subscriber", err)
    } finally {
      setSubmitted(true)
      setLoading(false)
      
      // Ensure the URL is root-relative or absolute so it never attaches to /resources/
      const safeUrl = downloadLink.startsWith("http") || downloadLink.startsWith("/")
        ? downloadLink
        : `/${downloadLink}`

      // 2. Open the PDF directly in a new tab
      window.open(safeUrl, "_blank")
    }
  }

  return (
    <div className="my-10 rounded-2xl border border-accent/20 bg-accent/5 p-8 text-center space-y-6 shadow-sm">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
        <Download className="h-6 w-6" />
      </div>

      <div className="space-y-2">
        <h3 className="font-display text-xl font-bold text-primary">
          Get the Printable PDF Checklist
        </h3>
        <p className="text-sm text-muted-foreground max-w-md mx-auto">
          Enter your name and email to download the printable 10-point checklist.
        </p>
      </div>

      {submitted ? (
        <div className="bg-background border border-border/80 p-6 rounded-xl space-y-3 animate-fade-in">
          <CheckCircle2 className="h-8 w-8 text-green-500 mx-auto" />
          <h4 className="font-bold text-primary text-base">Your download has started!</h4>
          <p className="text-xs text-muted-foreground">
            Thank you! We've added <span className="font-semibold text-primary">{email}</span> to our resource update list.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-3">
          <input
            type="text"
            placeholder="Your First Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-2.5 text-sm rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent text-foreground"
          />
          <input
            type="email"
            placeholder="Work or Personal Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2.5 text-sm rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent text-foreground"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground font-bold text-sm px-6 py-3 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" /> Preparing Download...
              </>
            ) : (
              <>
                <Mail className="h-4 w-4" /> Download Printable PDF
              </>
            )}
          </button>
        </form>
      )}
    </div>
  )
}