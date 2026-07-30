export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes('@')) {
      return Response.json({ error: "Valid email is required" }, { status: 400 });
    }

    const apiKey = process.env.MAILERLITE_API_KEY;
    const rawGroupId = process.env.MAILERLITE_GROUP_ID;

    if (!apiKey) {
      console.error("MAILERLITE_API_KEY is missing in Cloudflare environment variables.");
      return Response.json({ error: "Server configuration error" }, { status: 500 });
    }

    // Build base subscriber object
    const bodyPayload: Record<string, any> = {
      email: email.trim(),
      status: 'active',
    };

    // Only attach groups if a non-empty string is provided
    if (rawGroupId && typeof rawGroupId === 'string' && rawGroupId.trim().length > 0) {
      bodyPayload.groups = [rawGroupId.trim()];
    }

    const res = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${apiKey.trim()}`,
      },
      body: JSON.stringify(bodyPayload),
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      console.error("MailerLite Newsletter Error:", res.status, data);
      return Response.json({ error: data.message || "Failed to subscribe" }, { status: res.status });
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("Newsletter Route Exception:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}