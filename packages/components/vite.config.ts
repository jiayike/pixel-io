import { defineConfig } from 'vite';
import glob from 'fast-glob';
import vitePluginCustomElementsManifest from 'vite-plugin-cem';

const folders = ['atoms', 'molecules'];

const files: [PropertyKey, string][] = glob
  .sync([`./src/{${folders.join(',')}}/**/*.ts`], { ignore: ['**/*.stories.ts', '**/*.test.ts'] })
  .map((filePath) => {
    const key = filePath.match(/(?<=\.\/src\/).*(?=\/.*\.ts)/) ?? '';
    return [`${key[0]}`, filePath];
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
      formats: ['es', 'cjs'],
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
});
