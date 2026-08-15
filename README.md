# OraFlow

Oral Health · Function · Growth

A dental health blog — educational content about oral health for the whole family. Bilingual site (Serbian / German).

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **CMS:** Sanity
- **Styling:** SCSS Modules
- **Monorepo:** Turborepo + pnpm

## Project Structure

```
oraflow/
├── apps/web/           → Next.js frontend + embedded Sanity Studio
├── packages/sanity/    → Sanity configuration and schemas
├── packages/ui/        → Shared UI components
└── packages/i18n/      → Language support (sr, de)
```

## Getting Started

```bash
# Install dependencies
pnpm install

# Development server (runs both web and studio)
pnpm dev

# Web app only
pnpm --filter @oraflow/web dev

# Build
pnpm build
```

## Routes

| Route | Description |
|-------|-------------|
| `/sr` | Home (Serbian) |
| `/de` | Home (German) |
| `/sr/[category]` | Blog list by category |
| `/sr/[category]/[slug]` | Blog post detail |
| `/studio` | Sanity Studio (CMS) |

## pnpm cheat sheet

| npm | pnpm |
|-----|------|
| `npm install` | `pnpm install` |
| `npm install package` | `pnpm add package` |
| `npm install -D package` | `pnpm add -D package` |
| `npm run dev` | `pnpm dev` |
| `npm run build` | `pnpm build` |
| `npx something` | `pnpm exec something` or `pnpm dlx something` |
