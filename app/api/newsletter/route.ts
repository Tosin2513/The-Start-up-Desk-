import { NextResponse } from "next/server";

export const runtime = "edge"; // Runs instantly on Cloudflare edge nodes

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    const MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY;

    if (!MAILERLITE_API_KEY) {
      console.error("Missing MAILERLITE_API_KEY environment variable");
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    // Ping MailerLite official Subscribers endpoint
    const response = await fetch("https://connect.mailerlite.com/api/subscribers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${MAILERLITE_API_KEY}`,
      },
      body: JSON.stringify({
        email: email,
        status: "active", // Automatically registers them as active subscribers
      }),
    });

    if (!response.ok) {
      const errData = await response.json();
      console.error("MailerLite Error:", errData);
      return NextResponse.json({ error: "Failed to subscribe" }, { status: response.status });
    }

    return NextResponse.json({ success: true, message: "Successfully subscribed!" }, { status: 200 });
  } catch (error) {
    console.error("Newsletter route error:", error);
    return NextResponse.json({ error: "Internal operational error" }, { status: 500 });
  }
}