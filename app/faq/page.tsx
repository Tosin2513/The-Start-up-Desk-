"use client"

import * as React from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ChevronDown, MessageCircle, HelpCircle } from "lucide-react"
import { whatsappLink } from "@/lib/site"

interface FAQItem {
  question: string
  answer: string
  category: "General" | "CAC & Incorporation" | "Tax & FIRS" | "Data Privacy"
}

const FAQ_DATABASE: FAQItem[] = [
  {
    category: "CAC & Incorporation",
    question: "How long does a standard corporate incorporation take in Nigeria?",
    answer: "Typically, a standard limited liability company registration with the Corporate Affairs Commission (CAC) takes between 3 to 7 business days, provided all documentation, unique name reservations, and shareholder details are submitted correctly."
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
    category: "General",
    question: "What is the difference between a lawyer and your compliance desk?",
    answer: "Lawyers handle complex litigation, custom contract writing, and high-level disputes. The Startup Desk specializes in operational compliance—handling routine filings, tax registrations, entity management, and statutory renewals faster, more efficiently, and at a fraction of the cost of a traditional law firm retainer."
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
                  <span className="flex items-start gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-accent bg-accent/10 px-2 py-0.5 rounded-md mt-1 shrink-0">
                      {faq.category}
                    </span>
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`h-5 w-5 text-muted-foreground shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-accent" : ""
                    }`} 
                  />
                </button>

                <div 
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[300px] border-t border-border/40 p-5 bg-muted/10 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                    {faq.answer}
                  </p>
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
