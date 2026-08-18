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

function getApiKey(): string {
  return process.env.NOTION_API_KEY || process.env.NOTION_TOKEN || ""
}

function getDatabaseId(): string {
  return process.env.NOTION_RESOURCES_DATABASE_ID || process.env.NOTION_DATABASE_ID || ""
}

function getHeaders() {
  const apiKey = getApiKey()
  if (!apiKey) {
    throw new Error("Missing Notion API token/key.")
  }

  return {
    Authorization: `Bearer ${apiKey}`,
    "Notion-Version": "2022-06-28",
    "Content-Type": "application/json",
  }
}

function extractPlainText(property: any): string {
  if (!property) return ""

  switch (property.type) {
    case "title":
      return Array.isArray(property.title)
        ? property.title.map((t: any) => t?.plain_text || "").join("")
        : ""
    case "rich_text":
      return Array.isArray(property.rich_text)
        ? property.rich_text.map((t: any) => t?.plain_text || "").join("")
        : ""
    case "select":
      return property.select?.name || ""
    case "multi_select":
      return Array.isArray(property.multi_select)
        ? property.multi_select.map((s: any) => s?.name || "").filter(Boolean).join(", ")
        : ""
    case "status":
      return property.status?.name || ""
    case "date":
      return property.date?.start || ""
    case "url":
      return property.url || ""
    case "email":
      return property.email || ""
    case "phone_number":
      return property.phone_number || ""
    case "number":
      return property.number !== null && property.number !== undefined ? String(property.number) : ""
    default:
      // Fallback if property structure is nested differently
      if (Array.isArray(property)) {
        return property.map((t: any) => t?.plain_text || "").join("")
      }
      return ""
  }
}

function mapPageToSummary(page: any): ResourceSummary {
  const props = page.properties || {}
  
  const titleProp = props.Title || props.title || props.Name || props.name
  const slugProp = props.Slug || props.slug
  const categoryProp = props.Category || props.category
  const subheadingProp = props.Subheading || props.subheading
  const publishDateProp = props.PublishDate || props.publishDate || props.Date || props.date

  return {
    id: page.id || "",
    title: extractPlainText(titleProp) || "Untitled Resource",
    slug: extractPlainText(slugProp) || page.id,
    category: extractPlainText(categoryProp) || "General",
    subheading: extractPlainText(subheadingProp) || "",
    publishDate: extractPlainText(publishDateProp) || "",
  }
}

function mapPageToDetail(page: any): ResourceDetail {
  const summary = mapPageToSummary(page)
  const props = page.properties || {}

  const calloutTitleProp = props.CalloutTitle || props.calloutTitle
  const calloutBodyProp = props.CalloutBody || props.calloutBody
  const downloadLinkProp = props.DownloadLink || props.downloadLink
  const bodyProp = props.Body || props.body || props.Content || props.content

  return {
    ...summary,
    calloutTitle: extractPlainText(calloutTitleProp) || undefined,
    calloutBody: extractPlainText(calloutBodyProp) || undefined,
    downloadLink: extractPlainText(downloadLinkProp) || undefined,
    body: extractPlainText(bodyProp) || "",
  }
}

export async function getPublishedResources(): Promise<ResourceSummary[]> {
  const databaseId = getDatabaseId()
  if (!databaseId || !getApiKey()) {
    console.warn("Notion credentials not configured.")
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
  const databaseId = getDatabaseId()
  if (!databaseId || !getApiKey()) {
    console.warn("Notion credentials not configured.")
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