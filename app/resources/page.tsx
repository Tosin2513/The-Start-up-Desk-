import { getPublishedResources } from "@/lib/notion"
import { ResourcesClient } from "@/components/resources-client"

export const runtime = 'edge';

export default async function ResourcesPage() {
  const resources = await getPublishedResources()
  return <ResourcesClient resources={resources} />
}