import { MetadataRoute } from 'next'
import { getPublishedResources } from '@/lib/notion'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://thestartupdesk.com.ng'

  // 1. Static Pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  // 2. Dynamic Notion Resource Pages
  try {
    const resources = await getPublishedResources()
    const resourcePages: MetadataRoute.Sitemap = resources.map((resource: any) => ({
      url: `${baseUrl}/resources/${resource.slug}`,
      lastModified: resource.publishDate ? new Date(resource.publishDate) : new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    }))

    return [...staticPages, ...resourcePages]
  } catch (error) {
    console.error('Failed to generate sitemap for resources:', error)
    return staticPages
  }
}