import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-blog-tutorial-pl.netlify.app',
  integrations: [tailwind(), vue()]
});