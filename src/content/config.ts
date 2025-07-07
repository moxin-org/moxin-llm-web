import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const post = defineCollection({
  loader: glob({ pattern: ['*.md', '*.mdx'], base: 'src/data/post' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    publishDate: z.coerce.date(),
    updateDate: z.coerce.date().optional(),
    image: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).default([]),
    author: z.string().optional(),
    draft: z.boolean().default(false),
    metadata: z.object({
      canonical: z.string().optional(),
    }).optional(),
  }),
});

const translations = defineCollection({
  loader: glob({ pattern: ['**/*.md', '**/*.mdx'], base: 'src/translations' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    publishDate: z.coerce.date(),
    updateDate: z.coerce.date().optional(),
    image: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).default([]),
    author: z.string().optional(),
    draft: z.boolean().default(false),
    metadata: z.object({
      canonical: z.string().optional(),
    }).optional(),
  }),
});

export const collections = { post, translations };
