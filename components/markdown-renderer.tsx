"use client"

import React from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

interface MarkdownRendererProps {
  content?: string | null
  className?: string
}

export function MarkdownRenderer({ content, className }: MarkdownRendererProps) {
  if (!content) return null

  return (
    <div className={className}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({ node, ...props }) => (
            <h2
              {...props}
              className="font-display text-2xl sm:text-3xl font-extrabold text-primary pt-8 pb-3 mt-4 border-b border-border/40"
            />
          ),
          h3: ({ node, ...props }) => (
            <h3
              {...props}
              className="font-display text-lg sm:text-xl font-bold text-foreground pt-6 pb-2"
            />
          ),
          p: ({ node, ...props }) => (
            <p {...props} className="leading-relaxed text-foreground/90 my-4 text-base" />
          ),
          ul: ({ node, ...props }) => (
            <ul {...props} className="list-disc list-outside pl-6 my-4 space-y-2 text-foreground/90" />
          ),
          ol: ({ node, ...props }) => (
            <ol {...props} className="list-decimal list-outside pl-6 my-4 space-y-2 text-foreground/90" />
          ),
          li: ({ node, ...props }) => (
            <li {...props} className="leading-relaxed" />
          ),
          strong: ({ node, ...props }) => (
            <strong {...props} className="font-bold text-foreground" />
          ),
          hr: ({ node, ...props }) => (
            <hr {...props} className="my-8 border-border/60" />
          ),
          a: ({ node, ...props }) => (
            <a
              {...props}
              className="text-accent underline font-semibold hover:opacity-80 transition-opacity"
              target="_blank"
              rel="noopener noreferrer"
            />
          ),
          code: ({ node, ...props }) => (
            <code {...props} className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono text-foreground" />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}