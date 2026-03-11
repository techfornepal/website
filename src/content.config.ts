import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    excerpt: z.string().optional(),
    publishDate: z.coerce.date().optional(),
    author: z
      .object({
        name: z.string(),
        avatar: z.string().optional(),
      })
      .optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().optional(),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    lastUpdated: z.coerce.date().optional(),
  }),
});

export const collections = { blog, pages };
