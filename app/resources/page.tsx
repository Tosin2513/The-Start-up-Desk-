export const runtime = 'edge'

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { getPublishedResources } from "@/lib/notion"
import Link from "next/link"

export default async function ResourcesIndex() {
  const resources = await getPublishedResources()

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto w-full max-w-6xl px-6 py-6 lg:px-8">
        <SiteHeader />

        <section className="py-12 md:py-16">
          <h1 className="font-display text-3xl font-extrabold text-primary sm:text-4xl lg:text-5xl leading-tight">Resources</h1>
          <p className="text-muted-foreground mt-4">Guides and compliance resources for startups. Click a guide to read more.</p>

          <div className="mt-8 grid gap-4">
            {resources.length === 0 && (
              <div className="text-sm text-muted-foreground">No published resources found.</div>
            )}

            {resources.map((r) => (
              <Link key={r.slug} href={`/resources/${r.slug}`} className="block p-4 border rounded-lg hover:shadow-md transition">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-lg font-semibold text-foreground">{r.title}</div>
                    <div className="text-sm text-muted-foreground mt-1">{r.subheading}</div>
                  </div>
                  <div className="text-xs text-muted-foreground">{r.publishDate}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <SiteFooter />
      </div>
    </main>
  )
}
