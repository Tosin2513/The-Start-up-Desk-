import type { Metadata } from "next" 
import { Inter, Space_Grotesk } from "next/font/google" 
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ThemeProvider } from "@/components/theme-provider"
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
  title: "The Startup Desk — Compliance without the fines",   
  description: "We handle your CAC filings, tax registration, and regulatory paperwork so your startup stays compliant and fine-free.", 
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
          <SpeedInsights />
        </ThemeProvider>
      </body>     
    </html> 
  )
}
