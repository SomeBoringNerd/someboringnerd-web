import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";

import vercel from '@astrojs/vercel/serverless';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://someboringnerd.xyz/',
  integrations: [tailwind(), mdx()],
  output: 'server',
  server: {
    port: 1234
  },
  adapter: vercel()
});