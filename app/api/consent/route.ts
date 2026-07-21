import { NextResponse } from "next/server";

export const runtime = "edge"; // Forces this route to run instantly on Cloudflare edge nodes

export async function POST(request: Request) {
  try {
    const { choice } = await request.json();
    
    if (!choice || (choice !== "granted" && choice !== "denied")) {
      return NextResponse.json({ error: "Invalid consent choice" }, { status: 400 });
    }

    // 1. Generate a unique audit key using a clean timestamp + random ID
    const timestamp = new Date().toISOString();
    const uniqueId = crypto.randomUUID().slice(0, 8);
    const auditKey = `consent_${timestamp}_${uniqueId}`;

    // 2. Safely capture the user's connection metadata from Cloudflare headers
    const country = request.headers.get("cf-ipcountry") || "Unknown";

    // 3. Extract the KV binding context from the Cloudflare runtime env
    // @ts-ignore
    const { env } = request.context || {};
    const DB = env?.CONSENT_KV;

    if (!DB) {
      console.error("KV Binding missing or incorrectly configured.");
      return NextResponse.json({ error: "Database linking error" }, { status: 500 });
    }

    // 4. Save the compliance log entry into the KV store
    const logData = JSON.stringify({
      choice,
      timestamp,
      country,
    });

    await DB.put(auditKey, logData);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Internal operational error" }, { status: 500 });
  }
}

