
// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-vercel';

import { vitePreprocess } from '@sveltejs/kit/vite';
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    alias: {
      $db: './src/db'
    }
  },
  preprocess: vitePreprocess()
};
export default config;
