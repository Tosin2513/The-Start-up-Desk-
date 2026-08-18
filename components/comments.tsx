"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

interface Comment {
  id: number;
  author: string;
  body: string;
  created_at: string;
}

export function Comments() {
  const pathname = usePathname();
  const slug = pathname.split("/").pop() || "";
  
  const [comments, setComments] = useState<Comment[]>([]);
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetch(`/api/comments/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setComments(data);
      })
      .catch((err) => console.error(err));
  }, [slug]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !body.trim()) return;

    setSubmitting(true);
    try {
      const res = await fetch(`/api/comments/${slug}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ author, body }),
      });

      if (res.ok) {
        setAuthor("");
        setBody("");
        // Refresh comments
        const updated = await fetch(`/api/comments/${slug}`).then((r) => r.json());
        if (Array.isArray(updated)) setComments(updated);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="pt-10 mt-10 border-t border-border/65 space-y-8">
      <h3 className="font-display text-xl font-extrabold text-primary">
        Discussion &amp; Founder Questions
      </h3>

      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="space-y-4 bg-muted/30 p-6 rounded-2xl border border-border/60">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-foreground">Your Name</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="e.g. Tosin"
            required
            className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-foreground">Question or Comment</label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Drop your thoughts or questions here..."
            rows={3}
            required
            className="w-full bg-background border border-border rounded-xl p-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
          />
        </div>
        <button
          type="submit"
          disabled={submitting}
          className="bg-primary text-primary-foreground text-sm font-bold py-2.5 px-6 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          {submitting ? "Posting..." : "Post Comment"}
        </button>
      </form>

      {/* Comments List */}
      <div className="space-y-4">
        {comments.length === 0 ? (
          <p className="text-sm text-muted-foreground italic">No comments yet. Be the first to start the discussion!</p>
        ) : (
          comments.map((c) => (
            <div key={c.id} className="p-4 rounded-xl border border-border/40 bg-background space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm text-foreground">{c.author}</span>
                <span className="text-[11px] text-muted-foreground">
                  {new Date(c.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.body}</p>
            </div>
          ))
        )}
      </div>
    </section>
  );
}