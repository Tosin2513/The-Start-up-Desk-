const NOTION_VERSION = "2022-06-28"

function getToken(): string {
  return (
    process.env.NOTION_TOKEN ||
    process.env.NOTION_API_KEY ||
    ""
  )
}

function getDatabaseId(): string {
  return (
    process.env.NOTION_DATABASE_ID ||
    process.env.NOTION_RESOURCES_DATABASE_ID ||
    ""
  )
}

function getHeaders() {
  const token = getToken()
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

function getUrl(prop: any): string {
  if (!prop?.url) return ""
  return prop.url
}

export interface ResourceSummary {
  slug: string
  title: string
  category: string
  subheading: string
  publishDate: string
}

export interface SectionBlock {
  type: "h2" | "h3" | "paragraph" | "bullet" | "hr"
  content: string
}

export interface ResourceArticle extends ResourceSummary {
  blocks: SectionBlock[]
  calloutTitle: string
  calloutBody: string
  downloadLink?: string
}

function mapPage(page: any): ResourceArticle {
  const p = page.properties
  const rawBody = getText(p.Body)
  
  // Split content by line breaks
  const rawLines = rawBody.split("\n").filter(line => line.trim().length > 0)

  const blocks: SectionBlock[] = rawLines.map((line) => {
    const trimmed = line.trim()

    if (trimmed.startsWith("## ")) {
      return { type: "h2", content: trimmed.replace("## ", "").trim() }
    }
    if (trimmed.startsWith("### ")) {
      return { type: "h3", content: trimmed.replace("### ", "").trim() }
    }
    if (trimmed.startsWith("* ") || trimmed.startsWith("- ") || trimmed.match(/^\d+\.\s/)) {
      return { type: "bullet", content: trimmed.replace(/^(\*|-|\d+\.)\s*/, "").trim() }
    }
    if (trimmed === "---") {
      return { type: "hr", content: "" }
    }

    return { type: "paragraph", content: trimmed }
  })

  return {
    slug: getText(p.Slug),
    title: getTitle(p.Title),
    category: p.Category?.select?.name ?? "Guide",
    subheading: getText(p.Subheading),
    publishDate: p.PublishDate?.date?.start ?? "",
    blocks,
    calloutTitle: getText(p.CalloutTitle),
    calloutBody: getText(p.CalloutBody),
    downloadLink: getUrl(p.DownloadLink),
  }
}

export async function getPublishedResources(): Promise<ResourceSummary[]> {
  const databaseId = getDatabaseId()
  const token = getToken()

  if (!databaseId || !token) {
    console.error("Missing Notion credentials: Check NOTION_TOKEN / NOTION_DATABASE_ID in environment.")
    return []
  }

  try {
    const res = await fetch(`https://api.notion.com/v1/databases/${databaseId}/query`, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify({
        filter: { property: "Published", checkbox: { equals: true } },
        sorts: [{ property: "PublishDate", direction: "descending" }],
      }),
      cache: "no-store",
    })

    if (!res.ok) {
      const errorText = await res.text()
      console.error(`Notion API query error (${res.status}):`, errorText)
      return []
    }

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
  const databaseId = getDatabaseId()
  const token = getToken()

  if (!databaseId || !token) {
    console.error("Missing Notion credentials: Check NOTION_TOKEN / NOTION_DATABASE_ID in environment.")
    return null
  }

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
      cache: "no-store",
    })

    if (!res.ok) {
      const errorText = await res.text()
      console.error(`Notion API query error for slug "${slug}" (${res.status}):`, errorText)
      return null
    }

    const data = await res.json()
    if (!data.results || !data.results.length) {
      console.warn(`No published Notion record found matching slug: "${slug}"`)
      return null
    }

    return mapPage(data.results[0])
  } catch (error) {
    console.error("Error fetching article by slug:", error)
    return null
  }
}