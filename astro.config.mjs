import { defineConfig } from 'astro/config';
import solidJs from "@astrojs/solid-js";
import path, { __dirname } from 'node:path';
import node from "@astrojs/node";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs(), tailwind()],
  output: 'hybrid',
  adapter: node({
    mode: "standalone"
  })
});