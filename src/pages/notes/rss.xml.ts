import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const notes = (await getCollection('notes', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );

  return rss({
    title: 'Naim Kingkon, notes',
    description:
      'Writing by Naim Kingkon on AI agents, grounding model output, the AI visibility market, and hiring engineers from outside the EEA.',
    site: context.site ?? 'https://kinqkon.com',
    items: notes.map((note) => ({
      title: note.data.title,
      description: note.data.summary,
      pubDate: note.data.date,
      link: `/notes/${note.id}/`,
    })),
    customData: '<language>en-gb</language>',
  });
}
