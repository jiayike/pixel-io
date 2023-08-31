/// <reference types="vitest" />
import { defineConfig } from 'vite';
import glob from 'fast-glob';
import vitePluginCustomElementsManifest from 'vite-plugin-cem';

const folders = ['atoms', 'molecules'];

const files: [PropertyKey, string][] = glob
  .sync([`./src/{${folders.join(',')}}/**/*.ts`], { ignore: ['**/*.stories.ts', '**/*.test.ts'] })
  .map((file) => {
    const key = file.match(/(?<=\.\/src\/).*(?=\/.*\.ts)/)!;
    return [`${key[0]}`, file];
  });

const componentEntries = Object.fromEntries<string>(files);

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: {
        index: './src/index.ts',
        ...componentEntries,
      },
      formats: ['es'],
      fileName: (fmt, name) => (name === 'index' ? `${name}.${fmt}.js` : `${name}/index.${fmt}.js`),
    },
    rollupOptions: {
      external: /^lit/,
    },
  },
  plugins: [
    vitePluginCustomElementsManifest({
      files: Object.values(componentEntries),
      lit: true,
      dev: true,
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    reporters: ['verbose'],
    setupFiles: ['./src/vitest-setup.ts'],
    coverage: {
      reporter: ['text', 'json', 'html'],
      all: true,
      include: ['src/**/*.ts'],
      provider: 'v8',
    },
  },
});
