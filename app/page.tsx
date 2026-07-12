import { Hero } from "@/components/hero"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background flex flex-col justify-between">
      <Hero />
      {/* This renders your new compliant footer at the bottom of the home page */}
      <SiteFooter />
    </main>
  )
}
