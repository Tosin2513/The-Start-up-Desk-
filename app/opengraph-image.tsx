import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'The Startup Desk'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0B1528',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        <span style={{ color: '#F59E0B', fontSize: 24, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 20 }}>
          The Startup Desk
        </span>
        <h1 style={{ color: '#FFFFFF', fontSize: 58, fontWeight: 800, lineHeight: 1.2, margin: 0, maxWidth: 900 }}>
          Business & Regulatory Compliance for Nigerian Startups
        </h1>
        <p style={{ color: '#94A3B8', fontSize: 28, marginTop: 24, maxWidth: 800 }}>
          CAC Filings • SCUML • NDPC Data Protection • Founder Contracts
        </p>
      </div>
    ),
    { ...size }
  )
}