import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const journalCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/journal" }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    publishDate: z.coerce.date(),
    image: z.string(),
    author: z.string().default("Luxury Voyage Atelier"),
    readTime: z.string().optional()
  })
});

export const collections = {
  'journal': journalCollection
};
