import { NextResponse } from "next/server";
import { whatsappLink } from "@/lib/site";

export const runtime = "edge";

export async function POST(req: Request) {
  try {
    const { email, subscribe, entityType, targetDate } = await req.json();

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
              source: `CAC Calendar - ${entityType}`,
            },
          }),
        });
      }
    }

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    let reminderDate: Date;
    let deadlineDescription = "";
    let summaryText = "";

    if (targetDate) {
      // If user provided a specific date (AGM or Incorporation Date)
      const parsedDate = new Date(targetDate);
      
      if (entityType === "limited-company") {
        // Limited company: Due 42 days after AGM. Let's set reminder 7 days before those 42 days are up.
        reminderDate = new Date(parsedDate);
        reminderDate.setDate(reminderDate.getDate() + 35); // 35 days post-AGM warning
        deadlineDescription = `42 days post-AGM (Based on AGM date: ${targetDate})`;
        summaryText = "🚨 Company Annual Returns Deadline Approaching!";
      } else {
        // Business Names / Trustees: Custom target date reminder
        reminderDate = new Date(parsedDate);
        reminderDate.setDate(reminderDate.getDate() - 5); // 5 days warning before target date
        deadlineDescription = `Statutory deadline (Based on date: ${targetDate})`;
        summaryText = "🚨 Annual Returns Filing Due Soon!";
      }
    } else {
      // Standard Fallback Defaults if they don't know their exact date
      if (entityType === "limited-company") {
        reminderDate = new Date(`${currentYear}-11-15T09:00:00Z`); // Standard Nov AGM fallback
        deadlineDescription = "Standard Company Filing Window (Default Fallback)";
        summaryText = "🚨 Company Annual Returns Filing Reminder";
      } else if (entityType === "incorporated-trustees") {
        reminderDate = new Date(`${currentYear}-12-15T09:00:00Z`); // Dec fallback
        deadlineDescription = "Incorporated Trustees Filing Window (Default Fallback)";
        summaryText = "🚨 Trustees Annual Returns Filing Reminder";
      } else {
        reminderDate = new Date(`${currentYear}-06-25T09:00:00Z`); // June 25 for Business Names
        deadlineDescription = "June 30th Business Name Deadline";
        summaryText = "🚨 Business Name Annual Returns Due June 30";
      }
    }

    const year = reminderDate.getFullYear();
    const month = String(reminderDate.getMonth() + 1).padStart(2, "0");
    const day = String(reminderDate.getDate()).padStart(2, "0");
    
    const startDate = `${year}${month}${day}T090000Z`;
    const endDate = `${year}${month}${day}T100000Z`;

    const chatUrl = whatsappLink(`Hi, I downloaded the CAC calendar reminder for my ${entityType} and need professional help filing my annual returns.`);

    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//The Startup Desk//CAC Annual Returns Reminder//EN
BEGIN:VEVENT
UID:cac-returns-${entityType}-${year}@thestartupdesk.com.ng
DTSTAMP:${currentYear}0101T000000Z
DTSTART:${startDate}
DTEND:${endDate}
SUMMARY:${summaryText}
DESCRIPTION:Your statutory CAC annual returns filing deadline is approaching (${deadlineDescription}).\\n\\nAvoid late penalties and stay in good standing. Let The Startup Desk handle your filings seamlessly.\\n\\nChat with us on WhatsApp for support: ${chatUrl}
URL:https://thestartupdesk.com.ng/resources/cac-annual-returns-guide
END:VEVENT
END:VCALENDAR`;

    return NextResponse.json({ success: true, ics: icsContent });
  } catch (err) {
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
  }
}