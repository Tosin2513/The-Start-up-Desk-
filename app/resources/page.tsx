import type { Metadata } from "next"
import { getPublishedResources } from "@/lib/notion"
import { ResourcesClient } from "@/components/resources-client"

export const runtime = 'edge';

export const metadata: Metadata = {
  title: "Resources & Compliance Guides | The Startup Desk",
  description: "Free downloadable checklists, founder agreement templates, and statutory compliance guides for Nigerian startups.",
  openGraph: {
    title: "Resources & Compliance Guides | The Startup Desk",
    description: "Free downloadable checklists, founder agreement templates, and statutory compliance guides for Nigerian startups.",
    url: "https://thestartupdesk.com.ng/resources",
    siteName: "The Startup Desk",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resources & Compliance Guides | The Startup Desk",
    description: "Free downloadable checklists, founder agreement templates, and statutory compliance guides for Nigerian startups.",
  },
}

export default async function ResourcesPage() {
  const resources = await getPublishedResources()
  return <ResourcesClient resources={resources} />
}