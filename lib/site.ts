export const siteConfig = {
  name: "The Startup Desk",
  "BN Number": "9668977",
  email: "hello@thestartupdesk.com.ng",
  phone: "+234 813 794 1914",
  whatsappNumber: "2348137941914",
} as const

/**
 * Build a WhatsApp click-to-chat link with an optional URL-encoded prefilled message.
 * Format: https://wa.me/2348137941914?text=...
 */
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`
  if (!message) return base
  return `${base}?text=${encodeURIComponent(message)}`
}

// Added email helper
export function emailLink(subject?: string, body?: string) {
  const base = `mailto:${siteConfig.email}`
  const params: string[] = []
  if (subject) params.push(`subject=${encodeURIComponent(subject)}`)
  if (body) params.push(`body=${encodeURIComponent(body)}`)
  return params.length ? `${base}?${params.join("&")}` : base
}
