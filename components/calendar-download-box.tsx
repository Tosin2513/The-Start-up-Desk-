"use client";

import { useState } from "react";

export function CalendarDownloadBox() {
  const [email, setEmail] = useState("");
  const [entityType, setEntityType] = useState("limited-company");
  const [targetDate, setTargetDate] = useState("");
  const [yearsCount, setYearsCount] = useState("5");
  const [subscribe, setSubscribe] = useState(true);
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);

  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg(false);

    try {
      const res = await fetch("/api/calendar/subscribe-and-download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, subscribe, entityType, targetDate, yearsCount }),
      });

      const data = await res.json();
      if (data.success && data.ics) {
        // 1. Trigger instant download on their device
        const blob = new Blob([data.ics], { type: "text/calendar;charset=utf-8" });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `cac-filing-reminder-${entityType}-${yearsCount}yrs.ics`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        setSuccessMsg(true);
      }
    } catch (err) {
      console.error("Download failed", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleDownload} className="bg-muted/30 p-6 rounded-2xl border border-border/60 space-y-4 my-8 shadow-sm">
      <h4 className="font-display font-bold text-lg text-primary">Get Your Multi-Year CAC Compliance Calendar (.ics)</h4>
      <p className="text-sm text-muted-foreground">
        Never miss another deadline. Generate automated calendar alerts for the next several years straight to your phone or desktop.
      </p>

      {/* Entity Type Selector */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-foreground">Entity Type</label>
        <select
          value={entityType}
          onChange={(e) => setEntityType(e.target.value)}
          className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
        >
          <option value="limited-company">Limited Company (Due 42 days post-AGM)</option>
          <option value="business-name">Business Name (Due June 30 yearly)</option>
          <option value="incorporated-trustees">Incorporated Trustees (Due June 30 – Dec 31)</option>
        </select>
      </div>

      {/* Years Coverage Selector */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-foreground">Reminder Duration (Years)</label>
        <select
          value={yearsCount}
          onChange={(e) => setYearsCount(e.target.value)}
          className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
        >
          <option value="2">2 Years of Reminders</option>
          <option value="5">5 Years of Reminders (Recommended)</option>
          <option value="10">10 Years of Reminders</option>
        </select>
      </div>

      {/* Dynamic Date Input */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-foreground">
          {entityType === "limited-company" ? "Annual General Meeting (AGM) Date" : "Date of Registration / Incorporation"} <span className="text-muted-foreground font-normal">(Optional)</span>
        </label>
        <input
          type="date"
          value={targetDate}
          onChange={(e) => setTargetDate(e.target.value)}
          className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
        />
      </div>
      
      {/* Email Input (Also sends copy via MailerLite) */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-foreground">Your Email Address <span className="text-muted-foreground font-normal">(For instant download &amp; emailed copy)</span></label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="founder@company.com"
          required
          className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
        />
      </div>

      {/* Newsletter Checkbox */}
      <div className="flex items-center gap-3 pt-1">
        <input
          type="checkbox"
          id="subscribe"
          checked={subscribe}
          onChange={(e) => setSubscribe(e.target.checked)}
          className="rounded border-border text-primary focus:ring-primary h-4 w-4"
        />
        <label htmlFor="subscribe" className="text-xs text-muted-foreground cursor-pointer">
          Yes, subscribe me to The Startup Desk newsletter for weekly regulatory and compliance tips.
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-primary text-primary-foreground text-sm font-bold py-3 px-6 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 shadow-md cursor-pointer"
      >
        {loading ? "Generating Multi-Year Calendar..." : "📅 Download Multi-Year Calendar (.ics)"}
      </button>

      {successMsg && (
        <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 text-center">
          ✓ Calendar downloaded successfully! Your email has also been saved to your subscriber list.
        </p>
      )}
    </form>
  );
}