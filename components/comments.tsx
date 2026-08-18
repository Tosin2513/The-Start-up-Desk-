"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

export function Comments() {
  const commentRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (!commentRef.current) return;

    // Clear previous script on re-render/theme toggle
    commentRef.current.innerHTML = "";

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.crossOrigin = "anonymous";

    script.setAttribute("data-repo", "tosin2513/the-start-up-desk-");
    script.setAttribute("data-repo-id", "R_kgDOTU2iqw");
    script.setAttribute("data-category", "Announcements");
    script.setAttribute("data-category-id", "DIC_kwDOTU2iq84DDrCp");
    script.setAttribute("data-mapping", "pathname");
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "bottom");
    script.setAttribute("data-theme", resolvedTheme === "dark" ? "dark" : "light");
    script.setAttribute("data-lang", "en");
    script.setAttribute("data-loading", "lazy");

    commentRef.current.appendChild(script);
  }, [resolvedTheme]);

  return (
    <section className="pt-10 mt-10 border-t border-border/60">
      <h3 className="font-display text-xl font-extrabold text-primary mb-6">
        Discussion &amp; Founder Questions
      </h3>
      <div ref={commentRef} />
    </section>
  );
}