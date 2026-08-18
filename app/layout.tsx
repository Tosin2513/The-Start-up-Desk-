import Script from 'next/script'
import type { Metadata } from "next" 
import { Inter, Space_Grotesk } from "next/font/google" 
import { ThemeProvider } from "@/components/theme-provider"
import { CookieBanner } from "@/components/cookie-banner"
import "./globals.css"

const inter = Inter({   
  subsets: ["latin"],   
  variable: "--font-inter",   
  display: "swap", 
})

const spaceGrotesk = Space_Grotesk({   
  subsets: ["latin"],   
  variable: "--font-space-grotesk",   
  display: "swap", 
})

export const metadata: Metadata = {
  metadataBase: new URL("https://thestartupdesk.com.ng"),
  title: "The Startup Desk | Business Compliance Made Simple",
  description: "We handle your regulatory paperwork so your startup stays compliant and fine-free.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
}

export default function RootLayout({   
  children, 
}: {   
  children: React.ReactNode 
}) {   
  return (     
    <html 
      lang="en" 
      className={`${inter.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >      
      <body className="font-sans antialiased bg-background text-foreground transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          {/* Site-wide Cookie Banner */}
          <CookieBanner />
        </ThemeProvider>

        {/* Structured Data (JSON-LD) */}
        <Script
          id="schema-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "The Startup Desk",
              "url": "https://thestartupdesk.com.ng",
              "logo": "https://thestartupdesk.com.ng/Logo.svg",
              "description": "Compliance, CAC filings, and regulatory advisory consultancy for early-stage Nigerian startups.",
              "areaServed": "Nigeria",
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "hello@thestartupdesk.com.ng",
                "contactType": "Customer Support"
              }
            }),
          }}
        />

        {/* Google Consent Mode v2: Defaults to 'denied' */}
        <Script id="google-consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'wait_for_update': 500
            });
          `}
        </Script>

        {/* Google Tag Manager / Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MY119FWLRP"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            gtag('js', new Date());
            gtag('config', 'G-MY119FWLRP');
          `}
        </Script>
      </body>     
    </html> 
  )
}