import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import * as fs from 'fs';

const COMPONENTS_FOLDER = './src/lib/';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: fs.readdirSync(COMPONENTS_FOLDER).map((file) => `${COMPONENTS_FOLDER}${file}`),
    },
  },
  plugins: [
    svelte({
      include: '**/*.svelte',
    }),
  ],
});
