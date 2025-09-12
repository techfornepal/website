/**
 * ESLint Configuration
 *
 * Enforces TypeScript strict mode, accessibility, and design system compliance.
 */

import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
});

const eslintConfig = [
  // base JavaScript and TypeScript configurations
  js.configs.recommended,
  ...compat.extends('next/core-web-vitals'),
  ...compat.extends('next/typescript'),

  {
    rules: {
      // error Prevention
      'no-console': 'warn', // warn about console statements (production concern)
      'no-debugger': 'error', // block debugger statements
      'no-alert': 'error', // block alert() usage
      'no-var': 'error', // force const/let usage
      'prefer-const': 'error', // use const when possible
      'no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_', // ignore args starting with underscore
          varsIgnorePattern: '^_', // Ignore vars starting with underscore
        },
      ],

      // React/Next.js best practices
      'react/jsx-uses-react': 'off', // not needed in React 17+
      'react/react-in-jsx-scope': 'off', // not needed in Next.js
      'react/prop-types': 'off', // we use TypeScript instead
      'react/display-name': 'warn', // helpful for debugging

      // accessibility requirements (public-facing site)
      'jsx-a11y/alt-text': 'error',
      'jsx-a11y/aria-props': 'error',
      'jsx-a11y/aria-proptypes': 'error',
      'jsx-a11y/aria-unsupported-elements': 'error',
      'jsx-a11y/role-has-required-aria-props': 'error',
      'jsx-a11y/role-supports-aria-props': 'error',

      // import organization - basic rules (detailed organization via Prettier)
      'sort-imports': 'off', // let tools handle this, focus on logic
    },

    settings: {
      react: {
        version: 'detect',
      },
    },
  },

  // file-specific configurations
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },

  // configuration files - more lenient per standards
  {
    files: ['*.config.{js,ts,mjs}', 'tailwind.config.{js,ts}', 'next.config.{js,ts}'],
    rules: {
      'no-console': 'off', // console OK in config files
    },
  },

  // ignore patterns per standards
  {
    ignores: ['.next/', 'out/', 'node_modules/', '*.d.ts', '.cache/', 'public/', 'dist/', 'build/'],
  },
];

export default eslintConfig;
