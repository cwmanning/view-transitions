import { z, defineCollection } from 'astro:content';

const slideCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    image: z.string().optional(),
  }),
});

export const collections = {
  slide: slideCollection,
};
