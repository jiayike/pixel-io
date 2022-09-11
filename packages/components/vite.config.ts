import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      name: '@pixel-ui/components',
    },
  },
  plugins: [
    svelte({
      include: '**/*.wc.svelte',
    }),
  ],
});
