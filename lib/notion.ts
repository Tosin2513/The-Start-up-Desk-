export interface ResourceSummary {
  id: string
  title: string
  slug: string
  category: string
  subheading: string
  publishDate: string
}

export interface ResourceDetail extends ResourceSummary {
  calloutTitle?: string
  calloutBody?: string
  downloadLink?: string
  body: string
}

function getHeaders() {
  const apiKey = process.env.NOTION_API_KEY
  if (!apiKey) {
    throw new Error("Missing NOTION_API_KEY environment variable.")
  }

  return {
    Authorization: `Bearer ${apiKey}`,
    "Notion-Version": "2022-06-28",
    "Content-Type": "application/json",
  }
}

function extractPlainText(property: any): string {
  if (!property) return ""
  if (property.type === "title" && Array.isArray(property.title)) {
    return property.title.map((t: any) => t.plain_text).join("")
  }
  if (property.type === "rich_text" && Array.isArray(property.rich_text)) {
    return property.rich_text.map((t: any) => t.plain_text).join("")
  }
  if (property.type === "select" && property.select) {
    return property.select.name || ""
  }
  if (property.type === "date" && property.date) {
    return property.date.start || ""
  }
  if (property.type === "url" && property.url) {
    return property.url
  }
  return ""
}

function mapPageToSummary(page: any): ResourceSummary {
  const props = page.properties || {}
  return {
    id: page.id,
    title: extractPlainText(props.Title) || "Untitled Resource",
    slug: extractPlainText(props.Slug) || page.id,
    category: extractPlainText(props.Category) || "General",
    subheading: extractPlainText(props.Subheading) || "",
    publishDate: extractPlainText(props.PublishDate) || "",
  }
}

function mapPageToDetail(page: any): ResourceDetail {
  const summary = mapPageToSummary(page)
  const props = page.properties || {}

  return {
    ...summary,
    calloutTitle: extractPlainText(props.CalloutTitle) || undefined,
    calloutBody: extractPlainText(props.CalloutBody) || undefined,
    downloadLink: extractPlainText(props.DownloadLink) || undefined,
    body: extractPlainText(props.Body) || "",
  }
}

export async function getPublishedResources(): Promise<ResourceSummary[]> {
  const databaseId = process.env.NOTION_RESOURCES_DATABASE_ID
  if (!databaseId) {
    console.warn("NOTION_RESOURCES_DATABASE_ID is not configured.")
    return []
  }

  const todayISO = new Date().toISOString().split("T")[0]

  try {
    const res = await fetch(`https://api.notion.com/v1/databases/${databaseId}/query`, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify({
        filter: {
          and: [
            { property: "Published", checkbox: { equals: true } },
            { property: "PublishDate", date: { on_or_before: todayISO } },
          ],
        },
        sorts: [{ property: "PublishDate", direction: "descending" }],
      }),
      cache: "no-store",
    })

    if (!res.ok) {
      console.error(`Failed to fetch resources from Notion: ${res.status} ${res.statusText}`)
      return []
    }

    const data = await res.json()
    return (data.results || []).map(mapPageToSummary)
  } catch (error) {
    console.error("Error retrieving resources from Notion:", error)
    return []
  }
}

export async function getResourceBySlug(slug: string): Promise<ResourceDetail | null> {
  const databaseId = process.env.NOTION_RESOURCES_DATABASE_ID
  if (!databaseId) {
    console.warn("NOTION_RESOURCES_DATABASE_ID is not configured.")
    return null
  }

  const todayISO = new Date().toISOString().split("T")[0]

  try {
    const res = await fetch(`https://api.notion.com/v1/databases/${databaseId}/query`, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify({
        filter: {
          and: [
            { property: "Slug", rich_text: { equals: slug } },
            { property: "Published", checkbox: { equals: true } },
            { property: "PublishDate", date: { on_or_before: todayISO } },
          ],
        },
      }),
      cache: "no-store",
    })

    if (!res.ok) {
      console.error(`Failed to query resource by slug: ${res.status} ${res.statusText}`)
      return null
    }

    const data = await res.json()
    if (!data.results || data.results.length === 0) {
      return null
    }

    return mapPageToDetail(data.results[0])
  } catch (error) {
    console.error(`Error querying resource by slug (${slug}):`, error)
    return null
  }
}