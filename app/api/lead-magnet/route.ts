export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    const { email, name } = await req.json();

    if (!email) {
      return Response.json({ error: "Email is required" }, { status: 400 });
    }

    const apiKey = process.env.MAILERLITE_API_KEY;
    const checklistId = process.env.MAILERLITE_CHECKLIST_ID; // Your Checklist Group ID
    

    // Build the groups array dynamically
    const groupsToAttach = [checklistId].filter(Boolean) as string[];

    // Send subscriber details directly to MailerLite API
    const res = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        email,
        status: 'active',
        fields: {
          name: name || "",
        },
        groups: groupsToAttach.length > 0 ? groupsToAttach : undefined,
      }),
    });

    if (!res.ok) {
      const errData = await res.json();
      console.error("MailerLite Error:", errData);
      return Response.json({ error: "MailerLite submission failed" }, { status: res.status });
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("Lead magnet error:", error);
    return Response.json({ error: "Failed to process subscriber" }, { status: 500 });
  }
}