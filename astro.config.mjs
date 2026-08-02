// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://free-protractor-practice.vercel.app',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date(),
      serialize(item) {
        // Boost priority for the home page
        if (item.url === 'https://free-protractor-practice.vercel.app/') {
          item.priority = 1.0;
          item.changefreq = 'daily';
        }
        return item;
      }
    })
  ]
});