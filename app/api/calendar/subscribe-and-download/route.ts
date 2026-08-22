import { NextResponse } from "next/server";
import { whatsappLink } from "@/lib/site";

export const runtime = "edge";

export async function POST(req: Request) {
  try {
    const { email, subscribe } = await req.json();

    if (subscribe && email) {
      const MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY;
      
      if (MAILERLITE_API_KEY) {
        await fetch("https://connect.mailerlite.com/api/subscribers", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${MAILERLITE_API_KEY}`,
          },
          body: JSON.stringify({
            email: email,
            fields: {
              source: "CAC Calendar Download",
            },
          }),
        });
      }
    }

    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const startDate = `${year}0625T090000Z`;
    const endDate = `${year}0625T100000Z`;

    // Generate WhatsApp support link with prefilled text
    const chatUrl = whatsappLink("Hi, I downloaded the CAC Annual Returns calendar reminder and need help filing my returns.");

    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//The Startup Desk//CAC Annual Returns Reminder//EN
BEGIN:VEVENT
UID:cac-annual-returns-${year}@thestartupdesk.com.ng
DTSTAMP:${year}0620T000000Z
DTSTART:${startDate}
DTEND:${endDate}
SUMMARY:🚨 CAC Annual Returns Deadline Approaching!
DESCRIPTION:Your statutory CAC annual returns filing deadline is June 30th.\\n\\nAvoid penalties and keep your business compliant. Let The Startup Desk handle your filings seamlessly.\\n\\nChat with us on WhatsApp for support: ${chatUrl}
URL:https://thestartupdesk.com.ng/resources/cac-annual-returns-guide
END:VEVENT
END:VCALENDAR`;

    return NextResponse.json({ success: true, ics: icsContent });
  } catch (err) {
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
  }
}