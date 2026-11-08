// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://kinqkon.com',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
  // Fonts are fetched and self hosted at build time. No runtime request to Google.
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Newsreader',
      cssVariable: '--font-display',
      weights: [400, 500, 600],
      styles: ['normal', 'italic'],
      subsets: ['latin'],
      display: 'swap',
    },
    {
      provider: fontProviders.google(),
      name: 'IBM Plex Sans',
      cssVariable: '--font-sans',
      weights: [400, 500, 600],
      styles: ['normal'],
      subsets: ['latin'],
      display: 'swap',
    },
    {
      provider: fontProviders.google(),
      name: 'IBM Plex Mono',
      cssVariable: '--font-mono',
      weights: [400, 500],
      styles: ['normal'],
      subsets: ['latin'],
      display: 'swap',
    },
  ],
});
