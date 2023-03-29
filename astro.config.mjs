import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'server',
  server: {
    port: 1234
  },
  adapter: node({
    mode: "standalone"
  })
});