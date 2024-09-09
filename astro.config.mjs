import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";
import playformInline from "@playform/inline";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify(),
  integrations: [playformInline()]
});