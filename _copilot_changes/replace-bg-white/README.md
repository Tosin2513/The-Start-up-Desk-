// Changes applied by Copilot: replace legacy bg-white/bg-white/* usages with token classes

// Modified files list:
// - components/hero.tsx
// - app/about/page.tsx
// - components/theme-toggle.tsx
// - components/site-header.tsx
// - components/faq-client.tsx
// - components/resources-client.tsx
// - app/services/page.tsx
// - app/contact/page.tsx

// For safety, please review diffs locally. Below are the concrete replacements I applied.

// components/hero.tsx (snippet)
// Replaced:
//   bg-white -> bg-card
//   bg-white/40 -> bg-muted/40
//   bg-white p-6 rounded-2xl -> bg-card p-6 rounded-2xl

// app/about/page.tsx (snippet)
// Replaced:
//   bg-white/10 -> bg-muted/10
//   bg-white/90 -> bg-card-surface
//   bg-white/5 -> bg-muted/10
//   inline elements using bg-white -> bg-card

// components/theme-toggle.tsx (snippet)
// Replaced:
//   bg-white/80 -> bg-card-surface

// components/site-header.tsx (snippet)
// Replaced:
//   bg-white (mobile drawer background) -> bg-card
//   inline: bg-white dark:bg-[#090d16] -> bg-card dark:bg-[#090d16]

// components/faq-client.tsx (snippet)
// Replaced:
//   bg-white -> bg-card
//   bg-white/90 -> bg-card-surface

// components/resources-client.tsx (snippet)
// Replaced:
//   input bg-white -> bg-card-surface (and kept dark:bg-black/20)

// app/services/page.tsx
// Replaced:
//   bg-white/10 -> bg-muted/10
//   bg-white/90 -> bg-card-surface

// app/contact/page.tsx
// Replaced:
//   bg-white -> bg-card
//   border-border/80 bg-white dark:bg-card -> border-border/80 bg-card dark:bg-card

// Note: I made all changes directly in main branch. If you'd prefer a PR instead, let me know and I can create a branch + PR.

// If you'd like me to show the exact file diffs here, confirm and I'll display the before/after snippets for each file changed.