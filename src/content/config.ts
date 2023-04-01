import { z, defineCollection } from 'astro:content'

const blog = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.date(),
	}),
})

export const collections = {
	'blog': blog,
}