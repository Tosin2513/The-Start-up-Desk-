import type { Metadata } from "next"
import { FAQClient } from "@/components/faq-client"

export const metadata: Metadata = {
  title: "Startup Compliance FAQ | The Startup Desk",
  description: "Clear answers about CAC incorporation, annual returns, FIRS tax timelines, NDPA data privacy, and compliance monitoring for Nigerian startups.",
  openGraph: {
    title: "Startup Compliance FAQ | The Startup Desk",
    description: "Clear, straightforward answers about startup setup, legal obligations, and tax filing timelines in Nigeria.",
    url: "https://thestartupdesk.com.ng/faq",
    siteName: "The Startup Desk",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Startup Compliance FAQ | The Startup Desk",
    description: "Clear, straightforward answers about startup setup, legal obligations, and tax filing timelines in Nigeria.",
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does a standard corporate incorporation take in Nigeria?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Typically, a standard limited liability company registration with the Corporate Affairs Commission (CAC) takes between 3 to 14 business days, provided all documentation are submitted correctly."
      }
    },
    {
      "@type": "Question",
      "name": "What are CAC Annual Returns, and when are they due?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Annual Returns are statutory filings made to the CAC to show your company is still active. They are not tax payments. Every registered company must file returns annually, starting from the second year of incorporation. Failing to file triggers heavy late-payment penalties and risks your company being marked as 'inactive'."
      }
    },
    {
      "@type": "Question",
      "name": "When must my startup register for taxes after incorporation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Under Nigerian law, every newly incorporated company is expected to register with the Federal Inland Revenue Service (FIRS) for a Tax Identification Number (TIN) immediately. VAT registration is mandatory, and you must begin filing monthly VAT returns even if your startup is not yet generating revenue."
      }
    },
    {
      "@type": "Question",
      "name": "Does my early-stage startup really need to comply with the NDPA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. If your startup collects, stores, or processes the personal data of Nigerian citizens (like names, emails, phone numbers, or payment info), you fall under the Nigeria Data Protection Act (NDPA). Non-compliance can lead to massive fines and block you from raising venture capital during due diligence."
      }
    },
    {
      "@type": "Question",
      "name": "Do you store my personal or business data, and for how long?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We retain your business metadata and incorporation files securely to process active applications and fulfill statutory record-keeping metrics. Corporate identity assets are archived safely for the lifetime of your entity, while baseline query records are purged automatically after 24 months."
      }
    },
    {
      "@type": "Question",
      "name": "Is my information shared with any third parties (e.g. CAC, FIRS)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We only share your metrics and documentation with official regulatory commissions—such as the Corporate Affairs Commission (CAC) and the Federal Inland Revenue Service (FIRS)—solely to execute the legal filing sequences you purchase. We never sell, lease, or distribute your startup’s assets or data pipelines to commercial third parties."
      }
    },
    {
      "@type": "Question",
      "name": "Do you use cookies or tracking tools on this website?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We use anonymized tracking indicators and a first-party server edge proxy to securely measure platform traffic. Our setup channels tracking details natively through our own domain so that third parties cannot eavesdrop on your session."
      }
    },
    {
      "@type": "Question",
      "name": "What happens if I want a refund after paying for the Launch package?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Refund requests for our Launch package are fully approved if triggered before our consulting layer submits your document batch to the registry. Once government filing processing fees are paid out to the corporate registrar, those statutory components become non-refundable."
      }
    },
    {
      "@type": "Question",
      "name": "Can I cancel my Monitoring subscription anytime?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. Our recurring compliance monitoring plans operate on an un-bonded, monthly or annual rolling schedule. You can deactivate your subscription at any point from your profile settings with zero cancelation fees or lock-in penalties, and your coverage will stay active until the end of your current paid billing phase."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between a lawyer and your compliance desk?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lawyers handle complex litigation, custom contract writing, and high-level disputes. The Startup Desk specializes in operational compliance—handling routine filings, tax registrations, entity management, and statutory compliance, more efficiently, and at a fraction of the cost of a traditional law firm retainer."
      }
    },
    {
      "@type": "Question",
      "name": "How does the escalation to human support work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our interactive AI assistant can answer over 90% of pricing, packaging, and basic regulatory timeline questions immediately on our Contact page. If you require manual reviews, custom share structures, or are ready to initiate a service, the assistant or our contact links will instantly connect you directly to our team via WhatsApp or email."
      }
    }
  ]
}

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <FAQClient />
    </>
  )
}