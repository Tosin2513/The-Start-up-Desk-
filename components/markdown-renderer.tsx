"use client"

import React from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { CalendarDownloadBox } from "@/components/calendar-download-box"

interface MarkdownRendererProps {
  content?: string | null
  className?: string
}

export function MarkdownRenderer({ content, className }: MarkdownRendererProps) {
  if (!content) return null

  // If the article body contains the calendar trigger text, we can split the content 
  // and render the CalendarDownloadBox right in the middle!
  const triggerText = "[Download the CAC Annual Returns Calendar]";
  const altTriggerText = "Download the CAC Annual Returns Calendar";

  if (content.includes(triggerText) || content.includes(altTriggerText)) {
    const splitKey = content.includes(triggerText) ? triggerText : altTriggerText;
    const parts = content.split(splitKey);

    return (
      <div className={className}>
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
          {parts[0]}
        </ReactMarkdown>

        {/* The interactive calendar box injected right in the middle */}
        <CalendarDownloadBox />

        <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
          {parts[1]}
        </ReactMarkdown>
      </div>
    );
  }

  return (
    <div className={className}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
        {content}
      </ReactMarkdown>
    </div>
  )
}

const markdownComponents = {
  h1: ({ node, ...props }: any) => (
    <h1 {...props} className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary tracking-tight leading-tight" />
  ),
  h2: ({ node, ...props }: any) => (
    <h2 {...props} className="font-display text-2xl sm:text-3xl font-extrabold text-primary pt-8 pb-3 mt-4 border-b border-border/40" />
  ),
  h3: ({ node, ...props }: any) => (
    <h3 {...props} className="font-display text-lg sm:text-xl font-bold text-foreground pt-6 pb-2" />
  ),
  p: ({ node, ...props }: any) => (
    <p {...props} className="leading-relaxed text-foreground/90 my-4 text-base" />
  ),
  ul: ({ node, ...props }: any) => (
    <ul {...props} className="list-disc list-outside pl-6 my-4 space-y-2 text-foreground/90" />
  ),
  ol: ({ node, ...props }: any) => (
    <ol {...props} className="list-decimal list-outside pl-6 my-4 space-y-2 text-foreground/90" />
  ),
  li: ({ node, ...props }: any) => (
    <li {...props} className="leading-relaxed font-normal" />
  ),
  strong: ({ node, ...props }: any) => (
    <strong {...props} className="font-extrabold text-foreground" />
  ),
  hr: ({ node, ...props }: any) => (
    <hr {...props} className="my-8 border-border/60" />
  ),
  a: ({ node, ...props }: any) => (
    <a {...props} className="text-accent underline font-semibold hover:opacity-80 transition-opacity" target="_blank" rel="noopener noreferrer" />
  ),
  code: ({ node, ...props }: any) => (
    <code {...props} className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono text-foreground" />
  ),
}