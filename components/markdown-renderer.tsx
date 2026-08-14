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
          a: ({ node, ...props }) => (
            <a
              {...props}
              className="text-accent underline hover:opacity-80 font-medium"
              target="_blank"
              rel="noopener noreferrer"
            />
          ),
          strong: ({ node, ...props }) => (
            <strong {...props} className="font-bold text-foreground" />
          ),
          code: ({ node, ...props }) => (
            <code {...props} className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono" />
          ),
          p: ({ node, ...props }) => (
            <p {...props} className="leading-relaxed" />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}