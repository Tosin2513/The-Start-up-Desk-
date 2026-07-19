import { Hero } from "@/components/hero"
import { SiteFooter } from "@/components/site-footer"
import { CookieBanner } from "@/components/cookie-banner" // 1. Pull it in here

export default function Page() {
  return (
    <main className="min-h-screen bg-background flex flex-col justify-between">
      <Hero />
      <SiteFooter />
      <CookieBanner /> {/* 2. Add it right here */}
    </main>
  )
}