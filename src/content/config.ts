import { defineCollection, z } from "astro:content";

const whoami = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		readingTime: z.number().optional(),
		draft: z.boolean().optional(),
	}),
});

const writing = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		readingTime: z.number().optional(),
		draft: z.boolean().optional(),
	}),
});

const thought = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		description: z.string(),
		category: z.string(),
		showTldr: z.boolean().optional(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		readingTime: z.number().optional(),
		draft: z.boolean().optional(),
	}),
});

const ship = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		description: z.string(),
		ship_count: z.number(),
		category: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		readingTime: z.number().optional(),
		draft: z.boolean().optional(),
	}),
});

const tinker = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		description: z.string(),
		category: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		readingTime: z.number().optional(),
		draft: z.boolean().optional(),
	}),
});

const archive = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		description: z.string(),
		category: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		readingTime: z.number().optional(),
		draft: z.boolean().optional(),
	}),
});

export const collections = { writing, thought, ship, whoami, tinker, archive };
