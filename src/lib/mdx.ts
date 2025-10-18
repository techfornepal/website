import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';
import fg from 'fast-glob';

const CONTENT_DIR = path.join(process.cwd(), 'content', 'blog');
const PAGES_DIR = path.join(process.cwd(), 'content', 'pages');

function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

export async function listPosts() {
  const files = await fg('*.{md,mdx}', { cwd: CONTENT_DIR });
  const posts = await Promise.all(
    files.map(async file => {
      const filePath = path.join(CONTENT_DIR, file);
      const raw = await fs.readFile(filePath, 'utf8');
      const { data } = matter(raw);
      return {
        slug: (data.slug as string) ?? file.replace(/\.(md|mdx)$/i, ''),
        title: data.title as string,
        excerpt: (data.excerpt as string) ?? '',
        date: data.publishDate ? new Date(data.publishDate as string) : undefined,
        tags: (data.tags as string[]) ?? [],
        author: data.author as { name: string; avatar?: string },
      };
    })
  );
  return posts.sort((a, b) => (b.date?.getTime() ?? 0) - (a.date?.getTime() ?? 0));
}

export async function getAllTags(): Promise<{ tag: string; count: number }[]> {
  const files = await fg('*.{md,mdx}', { cwd: CONTENT_DIR });
  const tagMap = new Map<string, number>();

  await Promise.all(
    files.map(async file => {
      const filePath = path.join(CONTENT_DIR, file);
      const raw = await fs.readFile(filePath, 'utf8');
      const { data } = matter(raw);
      const tags = (data.tags as string[]) || [];

      tags.forEach(tag => {
        tagMap.set(tag, (tagMap.get(tag) || 0) + 1);
      });
    })
  );

  return Array.from(tagMap.entries())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count);
}

export async function getPostsByTag(tag: string) {
  const files = await fg('*.{md,mdx}', { cwd: CONTENT_DIR });
  const posts = await Promise.all(
    files.map(async file => {
      const filePath = path.join(CONTENT_DIR, file);
      const raw = await fs.readFile(filePath, 'utf8');
      const { data } = matter(raw);
      const tags = (data.tags as string[]) || [];

      if (tags.includes(tag)) {
        return {
          slug: (data.slug as string) ?? file.replace(/\.(md|mdx)$/i, ''),
          title: data.title as string,
          excerpt: (data.excerpt as string) ?? '',
          date: data.publishDate ? new Date(data.publishDate as string) : undefined,
          tags: tags,
          author: data.author as { name: string; avatar?: string },
        };
      }
      return null;
    })
  );

  return posts
    .filter(post => post !== null)
    .sort((a, b) => (b!.date?.getTime() ?? 0) - (a!.date?.getTime() ?? 0));
}

export async function getPostBySlug(slug: string) {
  try {
    // trying direct filename match first
    const candidates = [
      path.join(CONTENT_DIR, `${slug}.md`),
      path.join(CONTENT_DIR, `${slug}.mdx`),
    ];
    for (const filePath of candidates) {
      try {
        const raw = await fs.readFile(filePath, 'utf8');
        const { content, data } = matter(raw);
        return {
          content,
          frontmatter: data as Record<string, unknown>,
          readingTime: calculateReadingTime(content),
        };
      } catch {
        // continue
      }
    }

    // fallback: scan all posts and find by frontmatter slug
    const files = await fg('*.{md,mdx}', { cwd: CONTENT_DIR });
    for (const file of files) {
      const filePath = path.join(CONTENT_DIR, file);
      const raw = await fs.readFile(filePath, 'utf8');
      const { content, data } = matter(raw);
      const fmSlug = (data.slug as string) ?? file.replace(/\.(md|mdx)$/i, '');
      if (fmSlug === slug) {
        return {
          content,
          frontmatter: data as Record<string, unknown>,
          readingTime: calculateReadingTime(content),
        };
      }
    }

    return null; // post not found
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`Error getting post by slug: ${slug}`, error);
    return null;
  }
}

export async function getPageBySlug(slug: string) {
  try {
    const candidates = [path.join(PAGES_DIR, `${slug}.md`), path.join(PAGES_DIR, `${slug}.mdx`)];

    for (const filePath of candidates) {
      try {
        const raw = await fs.readFile(filePath, 'utf8');
        const { content, data } = matter(raw);
        return {
          content,
          frontmatter: data as Record<string, unknown>,
        };
      } catch {
        // continue to next candidate
      }
    }

    return null; // page not found
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`Error getting page by slug: ${slug}`, error);
    return null;
  }
}
