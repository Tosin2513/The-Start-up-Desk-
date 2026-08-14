import type { Metadata } from "next"
import { Hero } from "@/components/hero"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "The Startup Desk | Nigeria Startup Compliance & Regulatory Advisory",
  description: "We handle CAC annual returns, SCUML registration, NDPC data protection compliance, and founder agreements for Nigerian startups.",
  openGraph: {
    title: "The Startup Desk | Business Compliance Made Simple",
    description: "We handle CAC annual returns, SCUML registration, NDPC compliance, and founder agreements for Nigerian startups.",
    url: "https://thestartupdesk.com.ng",
    siteName: "The Startup Desk",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Startup Desk",
    description: "Startup compliance and regulatory operations made seamless.",
  },
}

export default function Page() {
  return (
    <main className="min-h-screen bg-background flex flex-col justify-between">
      <Hero />
      <SiteFooter />
    </main>
  )
}