import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://ixkaito.github.io',
  base: '/bathe',
  integrations: [react(), tailwind()],
  markdown: {
    syntaxHighlight: 'prism',
  },
  scopedStyleStrategy: 'class',
});
