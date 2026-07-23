const NOTION_VERSION = "2022-06-28"

function getHeaders() {
  const token = process.env.NOTION_TOKEN || process.env.NOTION_API_KEY || ""
  return {
    Authorization: `Bearer ${token}`,
    "Notion-Version": NOTION_VERSION,
    "Content-Type": "application/json",
  }
}

function getText(prop: any): string {
  if (!prop?.rich_text) return ""
  return prop.rich_text.map((t: any) => t.plain_text).join("")
}

function getTitle(prop: any): string {
  if (!prop?.title) return ""
  return prop.title.map((t: any) => t.plain_text).join("")
}

export interface ResourceSummary {
  slug: string
  title: string
  category: string
  subheading: string
  publishDate: string
}

export interface ResourceArticle extends ResourceSummary {
  sections: { heading?: string; paragraphs: string[] }[]
  calloutTitle: string
  calloutBody: string
}

function mapPage(page: any): ResourceArticle {
  const p = page.properties
  const body = getText(p.Body)
  const blocks = body.split("\n\n").filter(Boolean)

  const sections: { heading?: string; paragraphs: string[] }[] = []
  let current: { heading?: string; paragraphs: string[] } = { paragraphs: [] }

  for (const block of blocks) {
    if (block.startsWith("## ")) {
      if (current.paragraphs.length || current.heading) sections.push(current)
      current = { heading: block.replace("## ", "").trim(), paragraphs: [] }
    } else {
      current.paragraphs.push(block.trim())
    }
  }
  if (current.paragraphs.length || current.heading) sections.push(current)

  return {
    slug: getText(p.Slug),
    title: getTitle(p.Title),
    category: p.Category?.select?.name ?? "Guide",
    subheading: getText(p.Subheading),
    publishDate: p.PublishDate?.date?.start ?? "",
    sections,
    calloutTitle: getText(p.CalloutTitle),
    calloutBody: getText(p.CalloutBody),
  }
}

export async function getPublishedResources(): Promise<ResourceSummary[]> {
  const databaseId = process.env.NOTION_DATABASE_ID
  if (!databaseId) return []

  try {
    const res = await fetch(`https://api.notion.com/v1/databases/${databaseId}/query`, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify({
        filter: { property: "Published", checkbox: { equals: true } },
        sorts: [{ property: "PublishDate", direction: "descending" }],
      }),
      next: { revalidate: 3600 },
    })

    if (!res.ok) return []
    const data = await res.json()
    return data.results.map((page: any) => {
      const article = mapPage(page)
      return {
        slug: article.slug,
        title: article.title,
        category: article.category,
        subheading: article.subheading,
        publishDate: article.publishDate,
      }
    })
  } catch (error) {
    console.error("Error fetching Notion resources:", error)
    return []
  }
}

export async function getResourceBySlug(slug: string): Promise<ResourceArticle | null> {
  const databaseId = process.env.NOTION_DATABASE_ID
  if (!databaseId) return null

  try {
    const res = await fetch(`https://api.notion.com/v1/databases/${databaseId}/query`, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify({
        filter: {
          and: [
            { property: "Slug", rich_text: { equals: slug } },
            { property: "Published", checkbox: { equals: true } },
          ],
        },
      }),
      next: { revalidate: 3600 },
    })

    if (!res.ok) return null
    const data = await res.json()
    if (!data.results.length) return null
    return mapPage(data.results[0])
  } catch (error) {
    console.error("Error fetching article by slug:", error)
    return null
  }
}