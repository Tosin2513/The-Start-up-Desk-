import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Our Compliance Desk | The Startup Desk",
  description: "Get in touch with our team via WhatsApp, professional email routing, or use our interactive AI desk assistant to resolve your startup registration questions.",
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
