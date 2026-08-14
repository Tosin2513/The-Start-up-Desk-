import { NextResponse } from "next/server";
import { getCloudflareContext } from "@opennextjs/cloudflare";

export const runtime = "edge";

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const { choice } = body;
    
    if (!choice || (choice !== "granted" && choice !== "denied")) {
      return NextResponse.json({ error: "Invalid consent choice" }, { status: 400 });
    }

    // 1. Generate unique audit key
    const timestamp = new Date().toISOString();
    const uniqueId = crypto.randomUUID().slice(0, 8);
    const auditKey = `consent_${timestamp}_${uniqueId}`;

    // 2. Extract country metadata from Cloudflare header
    const country = request.headers.get("cf-ipcountry") || "Unknown";

    // 3. Access Cloudflare KV binding via getCloudflareContext()
    let DB: any = null;

    try {
      const { env } = await getCloudflareContext();
      DB = (env as any)?.CONSENT_KV;
    } catch {
      // Fallback for local development or alternative edge runtimes
      // @ts-ignore
      DB = process.env.CONSENT_KV;
    }

    if (!DB) {
      console.error("CONSENT_KV binding missing or not bound in Cloudflare Pages settings.");
      return NextResponse.json({ error: "Database linking error" }, { status: 500 });
    }

    // 4. Save compliance audit log entry into KV store
    const logData = JSON.stringify({
      choice,
      timestamp,
      country,
    });

    // Write to Cloudflare KV with 1-year expiration (31536000 seconds)
    await DB.put(auditKey, logData, { expirationTtl: 31536000 });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Consent API Error:", error);
    return NextResponse.json({ error: "Internal operational error" }, { status: 500 });
  }
}