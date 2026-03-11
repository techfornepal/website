# Code Standards & Requirements

**Version**: 0.1.1\
**Last Updated**: 2026-03-12 \
**Status**: FOUNDATIONAL - All tooling decisions must reference this document

## Primary Goals

### 1. **Consistency**

- Same formatting across all contributors regardless of editor choice
- Predictable code patterns throughout the codebase
- Unified import organization and naming conventions

### 2. **Quality Assurance**

- Catch errors before they reach production
- Enforce TypeScript strict mode compliance
- Maintain accessibility standards for public-facing site
- Prevent hardcoded values (design system principle)

### 3. **Scalability**

- Handle team growth without configuration chaos
- Clear documentation for new contributors
- Automated enforcement reduces human error

### 4. **Performance**

- Fast feedback loop for developers
- Efficient tooling that doesn't slow down development
- Minimal configuration maintenance overhead

### 5. **Editor Universality**

- Works with VS Code, Cursor, Vim, Neovim, Sublime, etc.
- No editor-specific dependencies
- Git hooks as primary enforcement mechanism

## Code Style Standards (Based on Existing Codebase)

### **Formatting Rules**

- **Line Length**: 100 characters (matches existing long className strings)
- **Indentation**: 2 spaces (current standard throughout codebase)
- **Quotes**: Single quotes for JS/TS imports, double quotes for JSX attributes
- **Semicolons**: Always required (current practice)
- **Trailing Commas**: ES5-compatible (where valid)
- **Whitespace**: Trim trailing whitespace, ensure final newlines

### **Import Organization**

Based on existing patterns in the codebase:

1. **Framework imports** first (`astro:*`, React, Astro integrations)
2. **Third-party packages** (alphabetical)
3. **Internal modules** (`@/...` alias, organized by type)
4. **Relative imports** (`./...`)

Example from existing code:

```tsx
import React from 'react';
import { cn } from '../../../utils/cn';
import { type ButtonSize, type ButtonVariant } from '../types';
```

#### **Barrel Import Boundaries**

The root UI barrel at `src/components/ui/index.ts` is the public entrypoint for
the UI library.

- Use `@/components/ui` from pages, layouts, MDX integration files, and other
  modules outside `src/components/ui`
- Inside `src/components/ui`, prefer direct relative imports such as
  `../layout/Stack` or `./Tag`
- Do not import through a barrel from a module that is itself re-exported by
  that barrel

Reasoning:

- Barrel imports keep external consumers clean
- Internal barrel imports can create circular dependencies during bundling
- Astro and Vite surface these cycles more directly than Next did

Allowed:

```tsx
// src/pages/blog/index.astro
import { BlogPostCard, Container, PageMain } from '@/components/ui';
```

```tsx
// src/components/ui/blog/BlogPostCard.tsx
import { Stack } from '../layout/Stack';
import { Heading } from '../typography/Heading';
import { Text } from '../typography/Text';
```

Avoid:

```tsx
// src/components/ui/blog/BlogPostCard.tsx
import { Heading, Text, Stack, Tag } from '@/components/ui';
```

That pattern looks convenient, but it can route a component back through the
same barrel that re-exports it and produce circular chunk warnings in production
builds.

### **Architecture Compliance**

Must align with existing design system principles:

- **No hardcoded responsive breakpoint classes in component/page code** - use
  `src/utils/responsive.ts`
- **No hardcoded component/page colors** - use CSS custom properties from
  `src/styles/variables.css` or centralized design utilities
- **Centralized utilities** - follow existing patterns
- **8pt grid system** - maintain mathematical consistency
- **TypeScript strict mode** - already configured

## Quality Requirements

### **Error Prevention**

- [ ] TypeScript strict mode compliance
- [ ] No `console.log` in production code (warn in development)
- [ ] No unused imports or variables
- [ ] Accessibility rules for public-facing components
- [ ] Proper error handling patterns

### **Design System Compliance**

- [ ] Use centralized responsive utilities from `src/utils/responsive.ts`
- [ ] Use CSS custom properties from `src/styles/variables.css`
- [ ] Follow Nepal flag color scheme (--nepal-red, --nepal-blue, --nepal-white)
- [ ] Maintain 1.25 (Major Third) typography scale
- [ ] Adhere to 8pt spacing grid system

### **Code Organization**

- [ ] Barrel exports (`index.ts`) for clean external imports
- [ ] Barrel exports are public package entrypoints, not internal import paths
- [ ] Component interfaces extend base types from `src/components/ui/types.ts`
- [ ] Atomic design principles (atoms → molecules → organisms)
- [ ] Consistent prop naming and TypeScript interfaces

### **TypeScript & ESLint Conventions**

- [ ] **Unused Parameters in Type Definitions**: Prefix with `_` to indicate
      intentional non-use

  ```tsx
  // ❌ ESLint will flag 'pathname' and 'href' as unused
  interface Props {
    isPathActive: (pathname: string, href: string) => boolean;
  }

  // ✅ Prefix with underscore to indicate intentional non-use
  interface Props {
    isPathActive: (_pathname: string, _href: string) => boolean;
  }
  ```

  **Why**: Parameter names in TypeScript interfaces are documentation-only.
  ESLint's `no-unused-vars` rule flags them because they're not "used"
  anywhere - they're just type annotations. The underscore prefix tells ESLint
  these are intentionally unused.

- [ ] **Console Statements**: Use `// eslint-disable-next-line no-console` for
      necessary logging
- [ ] **Function Parameters**: Use meaningful names even when prefixed with `_`
      for clarity

## Enforcement Strategy

### **Primary Mechanism: Git Hooks**

- **Pre-commit hook** runs on every commit
- **Editor-agnostic** - works regardless of developer's editor choice
- **Fail-fast** - blocks commits that don't meet standards
- **Automated fixing** where possible, manual intervention where necessary

### **Tooling Hierarchy**

1. **Prettier** - Code formatting (primary)
2. **ESLint** - Code quality and error prevention
3. **TypeScript** - Type safety and compilation
4. **EditorConfig** - Basic editor settings (fallback)

### **Package.json Scripts**

Clear, documented commands for all operations:

- `npm run format` - Format all files
- `npm run lint` - Check and fix linting issues
- `npm run typecheck` - Verify TypeScript compliance
- `npm run validate` - Run complete quality check

## Success Metrics

### **Immediate Success Indicators**

- [ ] Zero formatting inconsistencies between contributors
- [ ] All commits pass automated quality checks
- [ ] New contributors can set up environment in <5 minutes
- [ ] No "formatting wars" or style discussions in PRs

### **Long-term Success Indicators**

- [ ] Consistent code quality across growing contributors
- [ ] Fast onboarding of new developers
- [ ] Reduced time spent on code review formatting issues
- [ ] Maintained design system compliance at scale

## Non-Negotiable Rules

### **What We Will NOT Do**

- [ ] **NO** hardcoded responsive breakpoint classes in component/page code
- [ ] **NO** hardcoded component/page colors
- [ ] **NO** inconsistent import organization
- [ ] **NO** bypassing TypeScript strict mode
- [ ] **NO** console statements in production builds

### **What We Will ALWAYS Do**

- [ ] **ALWAYS** reference this document for tooling decisions
- [ ] **ALWAYS** test configuration changes on multiple editors
- [ ] **ALWAYS** ensure backward compatibility with existing code
- [ ] **ALWAYS** prioritize developer experience while maintaining standards
- [ ] **ALWAYS** document reasoning for any standard changes

---

## Change Process

Any modifications to these standards require:

1. **Documented justification** with business/technical reasoning
2. **Impact assessment** on existing codebase
3. **Testing** across different development environments
4. **Update of this document** with version increment
5. **Team consensus** before implementation

**This document serves as the single source of truth for all code quality and
formatting decisions.**
