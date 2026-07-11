# The Startup Desk

## What this is
A business compliance consultancy website for Nigerian early-stage startups.
Built with Next.js, Tailwind CSS, Framer Motion, and shadcn/ui components.
Hosted on Vercel, connected via GitHub for auto-deploy.

## Business context
- **Company:** The Startup Desk (RC: 9668977)
- **What we do:** Help early-stage Nigerian startups stay compliant — CAC 
  post-incorporation filings, FIRS/tax registration, NDPA data protection, 
  ongoing statutory monitoring.
- **Who we serve:** Startups in their first 1–3 years post-incorporation, 
  1–10 people, through to first-funding-round readiness.
- **Critical constraint:** Founder has a legal background but is NOT a 
  practicing lawyer. All copy must position this as compliance CONSULTING/
  ADVISORY — never legal services, legal advice, or legal representation.
  Avoid words like "legal advice," "legal opinion," "representation." Use 
  "filing," "documentation," "compliance audit," "regulatory guidance" instead.
- **Brand is faceless** — no personal social media tied to the business. 
  Copy should read as "The Startup Desk team," not an individual.

## Positioning statement (north star — every page should echo this tone)
"Compliance shouldn't be the reason your startup gets fined. The Startup 
Desk handles it, so you can focus on building — from your first CAC filing 
to your first funding round."

## Brand identity
- **Logo:** Wordmark with integrated "D" + checkmark icon mark (D doubles 
  as a checkmark — represents "handled/verified"). Icon-only version used 
  as favicon/avatar.
- **Colors:**
  - Primary: deep teal / forest green (~#0d4d40, confirm exact hex from logo file)
  - Accent: warm amber/mustard (~#f2a71b, confirm exact hex from logo file)
  - Neutral: off-white background, charcoal text (avoid pure black/white)
- **Typography:** Clean geometric sans-serif (bold, confident) for headlines; 
  same family or companion sans for body, prioritizing legibility. No serif 
  fonts anywhere (serif reads as "law firm," which we're avoiding).
- **Tone of voice:** Short sentences. Second person ("you," "your startup"). 
  Explain consequences plainly, no legal jargon. Confident, not fear-mongering. 
  Feels like a helpful desk, not an intimidating law office.
- **Visual style to avoid:** gavels, scales of justice, navy-and-gold law 
  firm clichés, generic tech-startup purple gradients.

## Service tiers (pricing to display across site)
1. **Launch** — ₦75,000–₦150,000 (one-off). CAC post-incorporation filing, 
   tax registration, statutory registers, optional brand identity add-on.
2. **Monitoring** — ₦12,000–₦20,000/month. Annual returns tracking/filing, 
   register updates, deadline reminders, regulatory check-ins.
3. **Advisory** — Custom scope, no fixed price shown. NDPA compliance 
   programs, employment/HR structuring, sector licensing, investor-readiness 
   audits.

## Site architecture (9 pages/templates)
1. Home
2. Services (3 tiers detailed)
3. About
4. Resources/Guides (hub — index of downloadable PDFs/articles)
5. Individual Guide page template (reused per guide, SEO-targeted)
6. Compliance Info (deadlines, regulator reference — plain-English)
7. Get Started / Register form
8. Contact
9. FAQ

## Functional requirements (no embedded payments/backend)
- **PDF downloads:** gate behind simple email-capture form (Tally.so or 
  Formspree), not a custom backend.
- **Service sign-up forms:** Tally.so or Formspree embeds, routing 
  submissions to email/WhatsApp/Google Sheet.
- **Primary sales CTA:** WhatsApp redirect links, format:
  `https://wa.me/2348137941914?text=YOUR_PREFILLED_MESSAGE`
  (use URL-encoded prefilled text relevant to what the user clicked)
- **Paid products:** Paystack Payment Links (no-code, generated per 
  product), linked as buttons — not embedded checkout.
- No server-side app logic needed beyond static generation + 
  form/link integrations above.

## Contact details (for footer, contact page, forms)
- Email: the.start.up.desk1@gmail.com *(temporary — will migrate to 
  hello@thestartupdesk.com once domain is purchased; update this file 
  and all instances site-wide when that happens)*
- WhatsApp/Phone: +234 813 794 1914
- RC Number: 9668977

## SEO priorities
Target keyword clusters (low-competition, underserved as of research):
- CAC annual returns / consequences of not filing
- NDPA / NDPR compliance for startups Nigeria
- Post-incorporation compliance checklist Nigeria
- "Compliance consultant vs lawyer" (educational + objection-handling)

Technical basics: fast load (leverage Next.js static generation), unique 
meta title/description per page, one H1 per page matching search intent, 
Organization/LocalBusiness schema markup, mobile-first, submit sitemap to 
Google Search Console at launch.

## Build notes
- Domain not yet purchased — using placeholder/Vercel default URL for now.
- Build section-by-section (Hero → Problem → Services → How It Works → 
  Trust → Resources teaser → Final CTA → Footer) rather than full pages 
  at once, for easier iteration.
- Homepage copy is finalized — see `/docs/homepage-copy.md` (add this 
  file separately if you want copy version-controlled too).
