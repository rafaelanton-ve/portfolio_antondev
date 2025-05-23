// 1. Import utilities from `astro:content`
import {defineCollection, reference, z} from 'astro:content';

// 2. Import loader(s)
import { glob } from 'astro/loaders';

// 3. Define your collection(s)
/*const blog = defineCollection({
    loader: glob({ pattern: "**\/!*.mdx", base: "./src/content/blog" }),
    schema: z.object({
        title: z.string(),
        date: z.date(),
        content: z.string(),
        relatedPosts: z.array(reference('blog')),
    }),
});*/

const projects = defineCollection({
    loader: glob({ pattern: "**/*.mdx", base: "./src/content/projects" }),
    schema: ({ image }) => z.object({
        title: z.string(),
        startDate: z.date(),
        endDate: z.date(),
        summary: z.string(),
        url: z.string(),
        cover: image(),
        tags: z.array(z.string()),
        ogImage: z.string(),
        draft: z.boolean().optional(),
        hidden: z.boolean().optional()
    }),
});

const certifications = defineCollection({
    loader: glob({ pattern: "**/*.mdx", base: "./src/content/certifications" }),
    schema: ({ image }) => z.object({
        title: z.string(),
        startDate: z.date(),
        endDate: z.date().optional(),
        school: z.string(),
        location: z.string(),
        icon: z.string(),
        currentUni: z.boolean(),
        technologies: z.array(z.string()).optional(),
        url: z.string().optional()
    }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { projects, certifications };