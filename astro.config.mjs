// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://luxuryvoyageco.com',
  integrations: [sitemap()],
  image: {
    domains: ['images.unsplash.com', 'garage-web.luxuryvoyageco.com']
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: true
    }
  }
});