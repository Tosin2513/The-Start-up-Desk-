import Script from 'next/script';
import type { Metadata } from "next" 
import { Inter, Space_Grotesk } from "next/font/google" 
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

export const metadata = {
  title: "The Startup Desk | Business Compliance Made Simple",
  description: "We handle your regulatory paperwork so your startup stays compliant and fine-free.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

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
        </ThemeProvider>

        {/* First-Party Cloudflare Google Tag Gateway */}
        <Script
          src="/metrics/gtag/js?id=G-MY119FWLRP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MY119FWLRP');
          `}
        </Script>
      </body>     
    </html> 
  )
}

