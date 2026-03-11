# AGENT_MISTAKES

Mistake memory for future repository edits.

Initialized on 2026-03-12.

## Rules

- Read this file before any repository edit task.
- Record each detected mistake occurrence.
- Deduplicate by normalized `pattern` + `scope_tags` + `prevention_rule`.
- Update matching entries instead of creating duplicates.
- `active` means keep checking for this pattern in future work.
- `resolved` means keep the lesson, but do not treat it as currently open.

## Entry Shape

```md
### MISTAKE-YYYYMMDD-001

- status: active | resolved
- severity: low | medium | high
- scope_tags: [code, docs, tests, config, infra, planning]
- pattern: normalized mistake pattern
- prevention_rule: specific action that prevents recurrence
- validation_check: deterministic pass/fail check
- first_seen: YYYY-MM-DD
- last_seen: YYYY-MM-DD
- occurrence_count: 1
- evidence:
  - file:relative/path:line
  - commit:hash
```

## Entries

### MISTAKE-20260312-001

- status: active
- severity: high
- scope_tags: [code]
- pattern: using client-only viewport state to decide server-rendered navigation
  structure
- prevention_rule: keep the responsive navigation shell in static html and use
  css or a small client island only for interactive mobile behavior
- validation_check: prerendered desktop pages contain the primary nav links
  before hydration and remain navigable with javascript disabled
- first_seen: 2026-03-12
- last_seen: 2026-03-12
- occurrence_count: 1
- evidence:
  - file:src/components/ui/layout/Navbar.tsx:18
  - file:src/layouts/BaseLayout.astro:87

### MISTAKE-20260312-002

- status: active
- severity: medium
- scope_tags: [code]
- pattern: nesting interactive elements for navigation
- prevention_rule: render either an anchor or a button based on behavior, never
  a button inside a link
- validation_check: generated html contains no anchor elements wrapping button
  elements
- first_seen: 2026-03-12
- last_seen: 2026-03-12
- occurrence_count: 1
- evidence:
  - file:src/components/ui/buttons/ResponsiveButton.tsx:35

### MISTAKE-20260312-003

- status: active
- severity: medium
- scope_tags: [code]
- pattern: creating barrel import cycles that produce bundler chunk warnings
- prevention_rule: avoid importing shared root barrels from modules that are
  themselves re-exported by those barrels
- validation_check: production build completes without circular chunk dependency
  warnings
- first_seen: 2026-03-12
- last_seen: 2026-03-12
- occurrence_count: 1
- evidence:
  - file:src/components/ui/blog/BlogPostCard.tsx:1
  - file:src/components/ui/blog/PostMeta.tsx:1

### MISTAKE-20260312-004

- status: resolved
- severity: medium
- scope_tags: [docs]
- pattern: leaving stale framework references in engineering docs after a
  migration
- prevention_rule: review standards and workflow docs for old framework names
  and architecture guidance whenever the stack changes
- validation_check: engineering docs reference the current framework and
  describe import rules that match the live codebase
- first_seen: 2026-03-12
- last_seen: 2026-03-12
- occurrence_count: 1
- evidence:
  - file:CODE_STANDARDS.md:55
  - file:DEVELOPMENT.md:164

### MISTAKE-20260312-005

- status: active
- severity: high
- scope_tags: [config]
- pattern: lint configuration treats commonjs config files as esm without node
  globals prevention_rule: either
- prevention_rule: either ignore tooling config files in eslint or configure
  node globals and source type for .cjs files
- validation_check: npm run lint:check completes with zero errors
- first_seen: 2026-03-12
- last_seen: 2026-03-12
- occurrence_count: 1
- evidence:
  - file:eslint.config.mjs:5
  - file:.prettierrc.cjs:7

### MISTAKE-20260312-006

- status: active
- severity: medium
- scope_tags: [code]
- pattern: mapping client-only react components into mdx without hydration
  causing null render in static output
- prevention_rule: ensure mdx-exposed components render meaningful server html
  or apply explicit client directives where used
- validation_check: prerendered get-involved html contains the expected locale
  date text from mdx content
- first_seen: 2026-03-12
- last_seen: 2026-03-12
- occurrence_count: 1
- evidence:
  - file:src/components/ui/display/LocaleDate.tsx:84
  - file:src/content/pages/get-involved.mdx:6
  - file:src/lib/mdx-components.tsx:31

### MISTAKE-20260312-007

- status: active
- severity: medium
- scope_tags: [code, config]
- pattern: mixing internal route hrefs with an astro trailingslash and build
  format policy that expects a different url path shape
- prevention_rule: choose a single astro url policy and keep build.format,
  internal hrefs, redirects, and active-route checks aligned with that policy
- validation_check: local navigation and built html use one consistent internal
  route shape that matches the configured trailingSlash mode
- first_seen: 2026-03-12
- last_seen: 2026-03-12
- occurrence_count: 3
- evidence:
  - file:astro.config.mjs:10
  - file:src/components/ui/layout/Navbar.tsx:29
  - file:src/components/ui/hero/HeroActions.tsx:15
  - file:src/content/pages/get-involved.mdx:29
  - file:src/components/ui/blog/BlogPostCard.tsx:45
  - file:src/components/ui/blog/Tag.tsx:34
  - file:src/layouts/BaseLayout.astro:47
