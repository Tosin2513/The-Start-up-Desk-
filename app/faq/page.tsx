"use client"

import * as React from "react"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ChevronDown, MessageCircle, HelpCircle } from "lucide-react"
import { whatsappLink } from "@/lib/site"

interface FAQItem {
  question: string
  answer: React.ReactNode
  category: "General" | "CAC & Incorporation" | "Tax & FIRS" | "Data Privacy" | "Billing & Refund"
}

const FAQ_DATABASE: FAQItem[] = [
  {
    category: "CAC & Incorporation",
    question: "How long does a standard corporate incorporation take in Nigeria?",
    answer: "Typically, a standard limited liability company registration with the Corporate Affairs Commission (CAC) takes between 3 to 14 business days, provided all documentation are submitted correctly."
  },
  {
    category: "CAC & Incorporation",
    question: "What are CAC Annual Returns, and when are they due?",
    answer: "Annual Returns are statutory filings made to the CAC to show your company is still active. They are not tax payments. Every registered company must file returns annually, starting from the second year of incorporation. Failing to file triggers heavy late-payment penalties and risks your company being marked as 'inactive'."
  },
  {
    category: "Tax & FIRS",
    question: "When must my startup register for taxes after incorporation?",
    answer: "Under Nigerian law, every newly incorporated company is expected to register with the Federal Inland Revenue Service (FIRS) for a Tax Identification Number (TIN) immediately. VAT registration is mandatory, and you must begin filing monthly VAT returns even if your startup is not yet generating revenue."
  },
  {
    category: "Data Privacy",
    question: "Does my early-stage startup really need to comply with the NDPA?",
    answer: "Yes. If your startup collects, stores, or processes the personal data of Nigerian citizens (like names, emails, phone numbers, or payment info), you fall under the Nigeria Data Protection Act (NDPA). Non-compliance can lead to massive fines and block you from raising venture capital during due diligence."
  },
  {
    category: "Data Privacy",
    question: "Do you store my personal or business data, and for how long?",
    answer: (
      <span>
        We retain your business metadata and incorporation files securely to process active applications and fulfill statutory record-keeping metrics. Corporate identity assets are archived safely for the lifetime of your entity, while baseline query records are purged automatically after 24 months. For more details, see our complete{" "}
        <Link href="/privacy" className="text-accent underline font-semibold hover:text-accent/80">
          Privacy Policy
        </Link>
        .
      </span>
    )
  },
  {
    category: "Data Privacy",
    question: "Is my information shared with any third parties (e.g. CAC, FIRS)?",
    answer: "We only share your metrics and documentation with official regulatory commissions—such as the Corporate Affairs Commission (CAC) and the Federal Inland Revenue Service (FIRS)—solely to execute the legal filing sequences you purchase. We never sell, lease, or distribute your startup’s assets or data pipelines to commercial third parties."
  },
  {
    category: "Data Privacy",
    question: "Do you use cookies or tracking tools on this website?",
    answer: (
      <span>
        Yes. We use anonymized tracking indicators and a first-party server edge proxy to securely measure platform traffic. Our setup channels tracking details natively through our own domain so that third parties cannot eavesdrop on your session. Read how to manage your active permissions in our{" "}
        <Link href="/cookies" className="text-accent underline font-semibold hover:text-accent/80">
          Cookie Policy
        </Link>
        .
      </span>
    )
  },
  {
    category: "Billing & Refund",
    question: "What happens if I want a refund after paying for the Launch package?",
    answer: (
      <span>
        Refund requests for our Launch package are fully approved if triggered *before* our consulting layer submits your document batch to the registry. Once government filing processing fees are paid out to the corporate registrar, those statutory components become non-refundable. Check out our billing criteria on the{" "}
        <Link href="/services" className="text-accent underline font-semibold hover:text-accent/80">
          Services Panel
        </Link>
        .
      </span>
    )
  },
  {
    category: "Billing & Refund",
    question: "Can I cancel my Monitoring subscription anytime?",
    answer: "Absolutely. Our recurring compliance monitoring plans operate on an un-bonded, monthly or annual rolling schedule. You can deactivate your subscription at any point from your profile settings with zero cancelation fees or lock-in penalties, and your coverage will stay active until the end of your current paid billing phase."
  },
  {
    category: "General",
    question: "What is the difference between a lawyer and your compliance desk?",
    answer: "Lawyers handle complex litigation, custom contract writing, and high-level disputes. The Startup Desk specializes in operational compliance—handling routine filings, tax registrations, entity management, and statutory compliance, more efficiently, and at a fraction of the cost of a traditional law firm retainer."
  },
  {
    category: "General",
    question: "How does the escalation to human support work?",
    answer: "Our interactive AI assistant can answer over 90% of pricing, packaging, and basic regulatory timeline questions immediately on our Contact page. If you require manual reviews, custom share structures, or are ready to initiate a service, the assistant or our contact links will instantly connect you directly to our team via WhatsApp or email."
  }
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <div className="mx-auto w-full max-w-6xl px-6 py-6 lg:px-8">
        <SiteHeader />

        {/* Header Section */}
        <section className="py-12 md:py-16 text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block bg-muted text-primary text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md">
            Got Questions?
          </span>
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-primary sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Clear, straightforward answers about startup setup, legal obligations, and tax filing timelines in Nigeria.
          </p>
        </section>

        {/* FAQ Accordion List */}
        <section className="max-w-3xl mx-auto mb-20 space-y-4">
          {FAQ_DATABASE.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div 
                key={index}
                className="border border-border/80 bg-card-surface rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 text-left font-display font-bold text-base md:text-lg text-primary focus:outline-none hover:bg-muted/30 transition-colors"
                >
                  <span className="flex items-center gap-3 flex-wrap sm:flex-nowrap">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-accent bg-accent/10 px-2 py-0.5 rounded-md mt-0.5 shrink-0">
                      {faq.category}
                    </span>
                    <span className="text-left">{faq.question}</span>
                  </span>
                  <ChevronDown 
                    className={`h-5 w-5 text-muted-foreground shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-accent" : ""
                    }`} 
                  />
                </button>

                <div 
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[400px] border-t border-border/40 p-5 bg-muted/10 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  <div className="text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            )
          })}
        </section>

        {/* CTA Banner */}
        <section className="bg-primary text-white p-8 md:p-10 rounded-3xl max-w-4xl mx-auto text-center space-y-4 mb-16 shadow-md">
          <div className="space-y-1">
            <h3 className="font-display text-xl font-bold flex items-center justify-center gap-2">
              <HelpCircle className="h-5 w-5 text-accent" /> Still need clarity?
            </h3>
            <p className="text-xs text-white/70 max-w-md mx-auto leading-relaxed">
              If your question isn&apos;t covered here, ask our interactive AI assistant or get in touch with our team instantly.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
            <a 
              href="/contact" 
              className="bg-white text-primary font-bold text-xs px-5 py-3 rounded-xl shadow-sm hover:bg-white/90 transition-all inline-flex items-center justify-center"
            >
              Ask Our AI Assistant
            </a>
            <a 
              href={whatsappLink("Hi, I read the FAQs but have a specific compliance question regarding my business.")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-accent-foreground font-bold text-xs px-5 py-3 rounded-xl shadow-sm hover:brightness-105 transition-all inline-flex items-center justify-center gap-1.5"
            >
              <MessageCircle className="h-3.5 w-3.5" /> Speak to a Specialist
            </a>
          </div>
        </section>

      </div>
      <SiteFooter />
    </main>
  )
}
