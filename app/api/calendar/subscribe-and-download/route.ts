import { NextResponse } from "next/server";
import { whatsappLink } from "@/lib/site";

export const runtime = "edge";

export async function POST(req: Request) {
  try {
    const { email, subscribe, entityType, targetDate, yearsCount = 5 } = await req.json();

    if (subscribe && email) {
      const MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY;
      
      if (MAILERLITE_API_KEY) {
        // Subscribe / update subscriber in MailerLite with your specific Group ID
        await fetch("https://connect.mailerlite.com/api/subscribers", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${MAILERLITE_API_KEY}`,
          },
          body: JSON.stringify({
            email: email,
            groups: ["196517279678072598"],
            fields: {
              source: `CAC Calendar - ${entityType} (${yearsCount} Years)`,
            },
          }),
        });
      }
    }

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    let baseMonthDay = "0625"; // June 25 default for Business Names
    let deadlineDescription = "";
    let summaryText = "";

    if (entityType === "limited-company") {
      baseMonthDay = "1115"; // Mid-November standard default for Companies
      deadlineDescription = "42 days post-AGM / Annual Compliance Window";
      summaryText = "🚨 Company Annual Returns Deadline Approaching!";
    } else if (entityType === "incorporated-trustees") {
      baseMonthDay = "1215"; // Mid-December default for Trustees
      deadlineDescription = "Trustees Annual Returns Filing Window (June 30 - Dec 31)";
      summaryText = "🚨 Incorporated Trustees Returns Due Soon!";
    } else {
      baseMonthDay = "0625"; // June 25 for Business Names
      deadlineDescription = "June 30th Business Name Deadline";
      summaryText = "🚨 Business Name Annual Returns Due June 30";
    }

    // If user provided a specific target date, use its month and day
    if (targetDate) {
      const parsed = new Date(targetDate);
      const m = String(parsed.getMonth() + 1).padStart(2, "0");
      const d = String(parsed.getDate()).padStart(2, "0");
      baseMonthDay = `${m}${d}`;
    }

    const chatUrl = whatsappLink(`Hi, I downloaded the multi-year CAC calendar reminder for my ${entityType} and need professional help filing.`);

    // Build recurring VEVENTS for the requested number of years (e.g., 5 or 10 years)
    let eventsList = "";
    const totalYears = parseInt(yearsCount) || 5;

    for (let i = 0; i < totalYears; i++) {
      const targetYear = currentYear + i;
      const startDate = `${targetYear}${baseMonthDay}T090000Z`;
      const endDate = `${targetYear}${baseMonthDay}T100000Z`;

      eventsList += `
BEGIN:VEVENT
UID:cac-returns-${entityType}-${targetYear}@thestartupdesk.com.ng
DTSTAMP:${currentYear}0101T000000Z
DTSTART:${startDate}
DTEND:${endDate}
SUMMARY:${summaryText} (${targetYear})
DESCRIPTION:Your statutory CAC annual returns filing deadline is approaching for ${targetYear} (${deadlineDescription}).\\n\\nAvoid late penalties and stay in good standing. Let The Startup Desk handle your filings seamlessly.\\n\\nChat with us on WhatsApp for support: ${chatUrl}
URL:https://thestartupdesk.com.ng/resources/cac-annual-returns-guide
END:VEVENT`;
    }

    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//The Startup Desk//Multi-Year CAC Compliance Calendar//EN${eventsList}
END:VCALENDAR`;

    return NextResponse.json({ success: true, ics: icsContent });
  } catch (err) {
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
  }
}