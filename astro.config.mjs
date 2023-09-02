import { defineConfig } from 'astro/config';
import solidJs from "@astrojs/solid-js";
import path,{ __dirname }from 'node:path'

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs()],
  output: 'hybrid',
  adapter: node({
    mode: "standalone"
  }),
});