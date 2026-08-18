export const revalidate = 3600 // Checks Notion for new or newly eligible articles every hour
export const runtime = 'edge'

import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ResourcesList } from "@/components/resources-list"
import { getPublishedResources } from "@/lib/notion"

export const metadata: Metadata = {
  title: "Startup Compliance Playbooks & Guides | The Startup Desk",
  description:
    "Free practical guides on CAC annual returns, NDPA data protection, SCUML registration, and founder vesting agreements for Nigerian startups.",
  alternates: {
    canonical: "https://thestartupdesk.com.ng/resources",
  },
  openGraph: {
    title: "Startup Compliance Playbooks & Guides | The Startup Desk",
    description:
      "Actionable legal and regulatory guides written for founders navigating Nigerian business compliance.",
    url: "https://thestartupdesk.com.ng/resources",
    type: "website",
    siteName: "The Startup Desk",
  },
  twitter: {
    card: "summary_large_image",
    title: "Startup Compliance Playbooks & Guides | The Startup Desk",
    description:
      "Free practical guides on CAC annual returns, NDPA data protection, SCUML registration, and founder agreements.",
  },
}

export default async function ResourcesPage() {
  const resources = await getPublishedResources()

  // Structured CollectionPage Schema for Google
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Startup Compliance Playbooks & Guides",
    description:
      "Free practical guides on CAC annual returns, NDPA data protection, SCUML registration, and founder vesting agreements for Nigerian startups.",
    url: "https://thestartupdesk.com.ng/resources",
    publisher: {
      "@type": "Organization",
      name: "The Startup Desk",
      url: "https://thestartupdesk.com.ng",
      logo: {
        "@type": "ImageObject",
        url: "https://thestartupdesk.com.ng/Logo.svg",
      },
    },
    hasPart: resources.map((item) => ({
      "@type": "Article",
      headline: item.title,
      url: `https://thestartupdesk.com.ng/resources/${item.slug}`,
      datePublished: item.publishDate || undefined,
    })),
  }

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      {/* Schema.org CollectionPage Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />

      <div className="mx-auto w-full max-w-6xl px-6 py-6 lg:px-8">
        <SiteHeader />
        <ResourcesList initialResources={resources} />
      </div>
      <SiteFooter />
    </main>
  )
}