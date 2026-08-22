"use client";

import { useState } from "react";

export function CalendarDownloadBox() {
  const [email, setEmail] = useState("");
  const [subscribe, setSubscribe] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/calendar/subscribe-and-download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, subscribe }),
      });

      const data = await res.json();
      if (data.success && data.ics) {
        const blob = new Blob([data.ics], { type: "text/calendar;charset=utf-8" });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "cac-filing-reminder.ics");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } catch (err) {
      console.error("Download failed", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleDownload} className="bg-muted/30 p-6 rounded-2xl border border-border/60 space-y-4 my-8">
      <h4 className="font-display font-bold text-lg text-primary">Get Your Free CAC Compliance Calendar (.ics)</h4>
      <p className="text-sm text-muted-foreground">
        Add the exact filing deadlines straight to your phone or desktop calendar. No missed dates, no surprise penalties.
      </p>
      
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-foreground">Your Email Address</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="founder@company.com"
          required
          className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
        />
      </div>

      <div className="flex items-center gap-3 pt-1">
        <input
          type="checkbox"
          id="subscribe"
          checked={subscribe}
          onChange={(e) => setSubscribe(e.target.checked)}
          className="rounded border-border text-primary focus:ring-primary h-4 w-4"
        />
        <label htmlFor="subscribe" className="text-xs text-muted-foreground cursor-pointer">
          Yes, subscribe me to The Startup Desk newsletter for weekly founder and compliance tips (Unsubscribe anytime).
        </label>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-primary text-primary-foreground text-sm font-bold py-3 px-6 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 shadow-md"
      >
        {loading ? "Preparing Calendar..." : "📅 Download Calendar & Sync Reminders"}
      </button>
    </form>
  );
}