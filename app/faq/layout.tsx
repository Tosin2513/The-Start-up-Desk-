import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Startup Compliance FAQ | The Startup Desk",
  description: "Clear answers on CAC company incorporation timelines, FIRS tax registrations, corporate annual returns, and data protection compliance rules in Nigeria.",
}

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
