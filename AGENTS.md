# AGENTS.md

This document provides coding standards and conventions for agentic agents working in this repository.

## Build & Test Commands

- **Run development server**: `npm run dev`
- **Build for production**: `npm run build`
- **Start production server**: `npm start`
- **Lint code**: `npm run lint`

### Running Tests
This project does not currently have a test framework configured. No test commands are available.

## Code Style Guidelines

### TypeScript & React
- Use TypeScript with strict mode enabled (`strict: true`)
- Use functional components with explicit type annotations
- Use `React.FC` pattern or explicit prop types; avoid implicit any
- Import types from Next.js: `import type { Metadata } from "next"`
- Use `Readonly<{ children: React.ReactNode }>` for layout component props

### File Organization
- Next.js App Router structure: pages in `src/app/`, components in `src/components/`
- Path alias `@/*` resolves to `./src/*`
- Page files: `page.tsx`, layout files: `layout.tsx`

### Component Conventions
- Use `"use client"` directive for client-side interactive components
- Export components as named exports: `export function ComponentName()`
- Use camelCase for component names (PascalCase)
- Use Framer Motion for animations with `motion.*` components

### Formatting (Prettier)
- Semicolons: `true`
- Single quotes: `true`
- Tab width: `2`
- Trailing commas: `es5`
- Print width: `100`

### Naming Conventions
- Components: PascalCase (e.g., `Navigation`, `HeroSection`)
- Functions/hooks: camelCase (e.g., `useScrollHandler`, `formatDate`)
- Variables/constants: camelCase (e.g., `isOpen`, `navLinks`)
- CSS classes: Tailwind utility classes only

### Imports
- Order: external libs → next → react → @/* → relative paths
- Group imports with blank lines between categories
- Use named imports: `import { useState, useEffect } from "react"`
- Avoid default exports for components

### Error Handling
- Use try-catch for async operations where appropriate
- Log warnings with `console.warn()` (eslint rule: `"no-console": "warn"`)
- Validate form inputs with HTML5 validation attributes (`required`, `type="email"`)

### TypeScript Rules
- No explicit `any` types (eslint: `"@typescript-eslint/no-explicit-any": "warn"`)
- Enable strict null checks via `strict: true`
- Use interfaces for complex object shapes
- Mark optional properties with `?`

### Styling
- Use Tailwind CSS utility classes exclusively
- Responsive breakpoints: `sm:`, `md:`, `lg:`, `xl:`
- Animation transitions: use `transition-all duration-300` or appropriate variants

## Linting & Formatting

Run linting before committing:
```bash
npm run lint
```

Linting uses ESLint with:
- `eslint:recommended`
- `plugin:@typescript-eslint/recommended`
- `plugin:react-hooks/recommended`
- `prettier` (as the final configuration)

### ESLint Rules
- `no-console`: warn
- `@typescript-eslint/no-unused-vars`: error
- `@typescript-eslint/no-explicit-any`: warn

## Cursor/Copilot Rules

None configured. Follow the guidelines above.
