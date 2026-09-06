# AI_CONTEXT.md — The Constitution

> This file is the single source of truth for all AI agents working on this project. Read this first, always.

---

## Project Identity

| Property | Value |
|----------|-------|
| **Name** | Ammar Zia Portfolio |
| **Type** | Personal Developer Portfolio |
| **Scope** | Single-page application showcasing projects, skills, and contact information |
| **Purpose** | Present Ammar Zia as a web developer through a modern, performant, accessible portfolio site |
| **Owner** | Ammar Zia (ammarzia12487@gmail.com) |

---

## Tech Stack

| Technology | Version | Rationale |
|------------|---------|-----------|
| **Next.js** | 14+ (App Router) | Industry-standard React framework with SSR/SSG, optimized routing, and Vercel deployment |
| **TypeScript** | 5+ | Type safety, better DX, catches bugs at compile time |
| **React** | 18+ | Component-based UI with concurrent features |
| **Tailwind CSS** | 3+ | Utility-first CSS with theme support, zero runtime CSS-in-JS overhead |
| **Framer Motion** | 11+ | Declarative animations with layout transitions (Phase 4) |
| **Vercel** | — | Zero-config deployment, edge functions, analytics |

---

## Architecture

### Directory Structure

```
├── src/
│   ├── app/              # App Router pages and layouts
│   │   ├── layout.tsx    # Root layout (providers, header, footer)
│   │   ├── page.tsx      # Home page
│   │   ├── about/        # About page route
│   │   ├── projects/     # Projects page route
│   │   └── contact/      # Contact page route
│   ├── components/       # Reusable UI components
│   │   ├── ui/           # Primitive UI components (Button, Card, etc.)
│   │   ├── layout/       # Layout components (Header, Footer, Section)
│   │   └── sections/     # Page-specific sections (Hero, ProjectGrid, etc.)
│   ├── lib/              # Utilities, helpers, shared logic
│   │   └── utils.ts      # cn() helper, common utilities
│   ├── data/             # Static data (projects, skills, config)
│   └── styles/           # Global styles, CSS variables
│       └── globals.css   # Tailwind directives + theme CSS variables
├── public/               # Static assets (images, icons, fonts)
├── AI_CONTEXT.md         # This file
├── PROJECT_ROADMAP.md    # Phase tracking
├── SYSTEM_LEDGER.md      # Session memory
├── AGENTS.md             # Agent rules
├── next.config.ts        # Next.js configuration
├── tailwind.config.ts    # Tailwind configuration + design tokens
├── tsconfig.json         # TypeScript configuration
├── package.json          # Dependencies and scripts
└── .gitignore            # Git ignore rules
```

### Design Patterns

- **App Router**: File-based routing with nested layouts
- **Component Composition**: Atomic design (ui → layout → sections → pages)
- **Colocation**: Components, tests, and types live near their usage
- **Static Data**: Project data in `src/data/` for easy maintenance
- **Theme System**: CSS variables with Tailwind `class` strategy for light/dark toggle

---

## Design Tokens

### Colors

| Token | Light Mode | Dark Mode |
|-------|-----------|-----------|
| `--bg-primary` | `#ffffff` | `#0a0a0a` |
| `--bg-secondary` | `#f8fafc` | `#111111` |
| `--bg-tertiary` | `#f1f5f9` | `#1a1a1a` |
| `--text-primary` | `#0f172a` | `#f8fafc` |
| `--text-secondary` | `#64748b` | `#94a3b8` |
| `--text-muted` | `#94a3b8` | `#64748b` |
| `--border` | `#e2e8f0` | `#1e293b` |
| `--accent` | `#2563eb` | `#3b82f6` |
| `--accent-hover` | `#1d4ed8` | `#60a5fa` |
| `--accent-muted` | `#dbeafe` | `#1e3a5f` |

### Typography

| Token | Value |
|-------|-------|
| `--font-sans` | `Inter, system-ui, sans-serif` |
| `--font-mono` | `JetBrains Mono, monospace` |
| `--text-xs` | `0.75rem` (12px) |
| `--text-sm` | `0.875rem` (14px) |
| `--text-base` | `1rem` (16px) |
| `--text-lg` | `1.125rem` (18px) |
| `--text-xl` | `1.25rem` (20px) |
| `--text-2xl` | `1.5rem` (24px) |
| `--text-3xl` | `1.875rem` (30px) |
| `--text-4xl` | `2.25rem` (36px) |

### Spacing

| Token | Value |
|-------|-------|
| `--space-xs` | `0.25rem` (4px) |
| `--space-sm` | `0.5rem` (8px) |
| `--space-md` | `1rem` (16px) |
| `--space-lg` | `1.5rem` (24px) |
| `--space-xl` | `2rem` (32px) |
| `--space-2xl` | `3rem` (48px) |
| `--space-3xl` | `4rem` (64px) |

### Breakpoints

| Name | Value |
|------|-------|
| `sm` | `640px` |
| `md` | `768px` |
| `lg` | `1024px` |
| `xl` | `1280px` |
| `2xl` | `1536px` |

---

## Strict Rules

### NEVER (Forbidden)

- **NEVER** use `any` type. Use `unknown` or proper types.
- **NEVER** use `console.log` in production code. Use proper error handling.
- **NEVER** hardcode colors. Always use CSS variables / Tailwind theme tokens.
- **NEVER** use inline styles. Use Tailwind utility classes.
- **NEVER** create components longer than 200 lines. Split into smaller components.
- **NEVER** use `index.ts` barrel exports. Import directly from the file.
- **NEVER** add dependencies without documenting rationale in AI_CONTEXT.md.
- **NEVER** modify `tailwind.config.ts` design tokens without updating AI_CONTEXT.md.
- **NEVER** skip TypeScript strict mode.
- **NEVER** commit secrets, API keys, or environment variables to git.

### ALWAYS (Required)

- **ALWAYS** use TypeScript for all new files.
- **ALWAYS** use functional components with hooks.
- **ALWAYS** define explicit return types for non-trivial functions.
- **ALWAYS** handle loading and error states in async components.
- **ALWAYS** use semantic HTML elements (`<section>`, `<nav>`, `<main>`, `<article>`).
- **ALWAYS** add `alt` text to images and `aria-label` to interactive elements.
- **ALWAYS** use the `cn()` utility from `@/lib/utils` for conditional classes.
- **ALWAYS** follow the component hierarchy: `ui/` → `layout/` → `sections/` → pages.
- **ALWAYS** update SYSTEM_LEDGER.md after completing a task.
- **ALWAYS** present a plan before making structural changes.

---

## Session Governance

### Mandatory Planning Governance

**Strict Approval Policy**: NEVER make direct file edits, write code, or execute mutating commands without presenting a complete, detailed implementation plan and receiving explicit user approval first.

### Session Boot Sequences

#### Full Boot (Session Start)
```
Read AI_CONTEXT.md, PROJECT_ROADMAP.md, and SYSTEM_LEDGER.md.
Confirm you understand the architecture, strict rules, and active
phase before we begin working.
```

#### Quick Boot (Context Refresh)
```
Read AI_CONTEXT.md and SYSTEM_LEDGER.md, then resume work from
where we left off.
```

### Session Close-Out Procedure

```
Update PROJECT_ROADMAP.md and SYSTEM_LEDGER.md to reflect all
completed tasks, new files created, and updated system metrics before
wrapping up.
```

---

## Authenticity Rules

1. **Verifiable Claims**: All technical facts, citations, statistics, and API contracts must be verifiable. Unverified or hallucinated code/data is strictly prohibited.
2. **No Fabricated APIs**: Never reference APIs, libraries, or methods that do not exist. If unsure, verify before writing.
3. **Real Statistics**: Any numbers, metrics, or data points must cite valid sources. No made-up figures.
4. **Honest Error Handling**: When something fails, report it honestly. Never silently swallow errors or fabricate success responses.
5. **Dependency Verification**: Before importing a package, confirm it exists in `package.json` or document the installation rationale.

---

## i18n & Localization

| Property | Value |
|----------|-------|
| **Primary Language** | English (en) |
| **Text Direction** | LTR (Left-to-Right) |
| **Character Script** | Latin |
| **Future Support** | None planned for v1 |

---

## Model & Tool Strategy

| Concern | Strategy |
|---------|----------|
| **Primary Model** | Default to the best available model for the task |
| **Fallback Chain** | If primary fails, retry once, then report error to user |
| **Tool Boundaries** | Never execute destructive commands (rm -rf, drop database) without explicit confirmation |
| **File Operations** | Always prefer editing existing files over creating new ones |
| **Search Strategy** | Use glob for file discovery, grep for content search, task agents for complex exploration |

---

*Last updated: 2026-09-06*
