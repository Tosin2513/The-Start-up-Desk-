export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    const { email, name, guideTitle } = await req.json();

    if (!email) {
      return Response.json({ error: "Email is required" }, { status: 400 });
    }

    const apiKey = process.env.MAILERLITE_API_KEY;
    const rawGroupId = process.env.MAILERLITE_CHECKLIST_GROUP_ID;
;
    if (!apiKey) {
      console.error("MAILERLITE_API_KEY is missing in environment variables.");
      return Response.json({ error: "Server configuration error" }, { status: 500 });
    }

    // Build standard fields
    const fields: Record<string, string> = {};
    if (name) fields.name = name;

    const bodyPayload: Record<string, any> = {
      email,
      status: 'active',
    };

    if (Object.keys(fields).length > 0) {
      bodyPayload.fields = fields;
    }

    // Safely format group ID
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
      console.error("MailerLite Error Details:", res.status, JSON.stringify(data));
      return Response.json({ error: data.message || "Failed to subscribe" }, { status: res.status });
    }

    return Response.json({ success: true, data });
  } catch (error) {
    console.error("Route Handler Error:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}