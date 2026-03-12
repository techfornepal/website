/**
 * Prettier Configuration
 *
 * All settings align with existing codebase patterns and documented standards.
 */

module.exports = {
  // Core formatting - matches CODE_STANDARDS.md
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  jsxSingleQuote: false,
  quoteProps: 'as-needed',

  // trailing commas - ES5 compatible per standards
  trailingComma: 'es5',

  // bracket and spacing rules
  bracketSpacing: true, // { foo } not {foo}
  bracketSameLine: false, // JSX closing > on new line

  // arrow function parentheses
  arrowParens: 'avoid', // x => x not (x) => x

  // prose and HTML handling
  proseWrap: 'preserve', // Maintain manual line breaks in docs
  htmlWhitespaceSensitivity: 'css',

  // end of line and language formatting
  endOfLine: 'lf', // Unix line endings
  embeddedLanguageFormatting: 'auto',

  // plugin configuration - Tailwind only
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],

  // file-specific overrides per documentation needs
  overrides: [
    // Markdown files - different width for readability
    {
      files: ['*.md', '*.mdx'],
      options: {
        printWidth: 100,
        proseWrap: 'always', // Wrap prose in markdown
      },
    },

    // JSON files - no trailing commas, narrower width
    {
      files: ['*.json'],
      options: {
        printWidth: 80,
        trailingComma: 'none',
      },
    },

    // package.json - allow longer lines for dependencies
    {
      files: ['package.json'],
      options: {
        printWidth: 120,
        trailingComma: 'none',
      },
    },

    // CSS files - different quote style, longer lines OK
    {
      files: ['*.css', '*.scss', '*.sass', '*.less'],
      options: {
        printWidth: 120,
        singleQuote: false,
      },
    },

    // configuration files - longer lines acceptable
    {
      files: ['*.config.js', '*.config.ts', '*.config.mjs', 'tailwind.config.*', 'next.config.*'],
      options: {
        printWidth: 120,
      },
    },
  ],
};
