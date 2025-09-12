# Development Workflow

> [!IMPORTANT] This project enforces strict code quality standards. All commits
> are automatically validated against our
> [CODE_STANDARDS.md](./CODE_STANDARDS.md).

## Quick Start

### Initial Setup

```bash
# clone and install (sets up Git hooks automatically)
git clone <repository>
cd website
npm install  # ← this installs dependencies AND sets up Git hooks
```

**That's it!** Git hooks are now active and will automatically format/validate
your code on every commit.

## Pre-Push Checklist

Before pushing any changes, **ALWAYS** run:

```bash
npm run validate
```

This command runs our complete quality pipeline:

- ✅ **TypeScript check** - Catches type errors
- ✅ **ESLint check** - Finds code quality issues
- ✅ **Format check** - Ensures consistent styling

### If `npm run validate` Fails:

#### **Fix Issues Step-by-Step:**

1. **TypeScript Errors:**

   ```bash
   npm run typecheck
   # Fix any type errors shown
   ```

2. **Linting Issues:**

   ```bash
   npm run lint        # auto-fixes most issues
   npm run lint:check  # shows remaining issues
   ```

3. **Formatting Issues:**

   ```bash
   npm run format      # auto-formats all files
   npm run format:check # verifies formatting
   ```

4. **Re-validate:**
   ```bash
   npm run validate  # should now pass
   ```

## Daily Workflow

### **Making Changes:**

1. Create a new branch: `git checkout -b {your-branch-name}`
2. Write code in any editor (VS Code, Cursor, Vim, etc.)
3. Just to be safe, ensure you do <a href="#code-quality">code quality
   checks</a>.
4. Ensure the build passes: `npm run build`
5. Stage files: `git add .`
6. Commit: `git commit -m "your message"`
   - 🔄 auto-formatting happens during commit
   - ⚠️ commit blocked if quality checks fail
7. Push: `git push origin {your-branch-name}`
8. Create a pull request.
9. Wait for the pull request to be reviewed and merged.

### **If Commit Gets Blocked:**

```bash
# the pre-commit hook will show what failed
# fix the issues and try again
git add .
git commit -m "your message"
```

## Available Commands

### **Core Development**

```bash
npm run dev        # start development server
npm run build      # production build
```

### <a id="code-quality">**Code Quality**</a> (Reference: [CODE_STANDARDS.md](./CODE_STANDARDS.md))

```bash
npm run validate   # complete quality check (use this!)

# individual checks
npm run typecheck  # TypeScript validation
npm run lint       # fix linting issues
npm run lint:check # check linting (no auto-fix)
npm run format     # format all files
npm run format:check # check formatting (no auto-fix)
```

## Editor Setup (Optional but Recommended)

**Git hooks work with ANY editor**, but editor integration gives you **real-time
error highlighting**:

### **VS Code / Cursor**

**✅ Already configured!** We've included `.vscode/settings.json` for:

- **Real-time ESLint errors** (red underlines)
- **Format on save**
- **TypeScript integration**
- **Tailwind CSS IntelliSense**

**Install recommended extensions:**

1. **Prettier** (`esbenp.prettier-vscode`) - Code formatting
2. **ESLint** (`dbaeumer.vscode-eslint`) - Real-time error highlighting
3. **Tailwind CSS IntelliSense** (`bradlc.vscode-tailwindcss`) - Class
   suggestions
4. **EditorConfig** (`EditorConfig.EditorConfig`) - Basic formatting

VS Code should prompt you to install these automatically.

### **Vim / Neovim**

Add to your config:

```lua
-- auto format on save
vim.api.nvim_create_autocmd("BufWritePre", {
  pattern = {"*.js", "*.jsx", "*.ts", "*.tsx"},
  command = "silent! !npx prettier --write %"
})
```

### **Other Editors**

Most editors support `.editorconfig` (already included) for basic formatting.

## Troubleshooting

### **"Commit was rejected"**

```bash
# check what failed
git status
npm run validate

# fix issues and try again
npm run lint && npm run format
git add .
git commit -m "your message"
```

### **"Git hooks not working"**

```bash
# reinstalling hooks
npm run prepare
chmod +x .husky/pre-commit

# verifying hooks are active
ls -la .husky/
```

### **"Format/lint commands not found"**

```bash
# reinstalling dependencies
rm -rf node_modules package-lock.json
npm install
```

### **"Too many formatting changes"**

This is normal when first setting up! Our standards ensure consistency:

```bash
# reviewing changes
git diff

# accepting formatting (it's automated and consistent)
git add .
git commit -m "Apply code standards formatting"
```

## Understanding Our Standards

- **Read:** [CODE_STANDARDS.md](./CODE_STANDARDS.md) - Complete standards
  documentation
- **Line Length:** 100 characters (readable on all screens)
- **Quotes:** Single quotes for JS/TS, double for JSX
- **Indentation:** 2 spaces everywhere
- **No Hardcoded Values:** Use design system utilities

## Contributing Rules

### **Before Creating Pull Requests:**

1. ✅ `npm run validate` passes
2. ✅ All changes follow [CODE_STANDARDS.md](./CODE_STANDARDS.md)
3. ✅ No console statements in production code
4. ✅ Use centralized utilities (no hardcoded responsive values)

### **Pull Request Checklist:**

- [ ] Changes are tested locally
- [ ] `npm run validate` passes completely
- [ ] Design system compliance maintained
- [ ] Accessibility standards followed
- [ ] TypeScript strict mode satisfied

## Success Metrics

You're following our standards correctly when:

- ✅ Commits go through without formatting conflicts
- ✅ `npm run validate` always passes
- ✅ Code reviews focus on logic, not formatting
- ✅ No style discussions in PRs

---

## Pro Tips

- **Use `npm run validate`** before pushing (saves CI time)
- **Trust the formatting** - it's mathematically consistent
- **Focus on logic** - let tools handle style
- **Any editor works** - Git hooks ensure consistency

**Questions?** Check [CODE_STANDARDS.md](./CODE_STANDARDS.md) or ask the team!
