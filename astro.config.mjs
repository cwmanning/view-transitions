import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import compress from 'astro-compress';

import { SITE } from './src/utils/config.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  site: SITE.site,
  base: SITE.base,
  trailingSlash: SITE.trailingSlash ? 'always' : 'never',

  output: 'static',

  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    mdx(),

    compress({
      CSS: true,
      HTML: {
        removeAttributeQuotes: false,
      },
      Image: false,
      JavaScript: true,
      SVG: true,
      Logger: 1,
    }),
  ],

  markdown: {},

  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
});
