import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
// Keep the public domain canonical. The Sites version is a private review copy.
export default defineConfig({
  site: 'https://www.wmaterials.net',
  devToolbar: { enabled: false },
  integrations: [sitemap({ filter: (page) => !page.endsWith('/about/') && !page.endsWith('/blog/') })],
});
