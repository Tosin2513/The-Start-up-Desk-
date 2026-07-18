export const siteConfig = {
  name: "The Startup Desk",
  rcNumber: "9668977",
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
