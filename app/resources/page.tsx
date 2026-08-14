import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { getPublishedResources } from "@/lib/notion"
import ResourcesList from "@/components/resources-list"

export default async function ResourcesPage() {
  const resources = await getPublishedResources()

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <div className="mx-auto w-full max-w-6xl px-6 py-6 lg:px-8">
        <SiteHeader />

        <ResourcesList initialResources={resources} />

      </div>
      <SiteFooter />
    </main>
  )
}
