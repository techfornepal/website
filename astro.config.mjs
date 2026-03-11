import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import remarkGfm from 'remark-gfm';

export default defineConfig({
  site: 'https://techfornepal.com',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  integrations: [react(), mdx({ remarkPlugins: [remarkGfm] }), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
