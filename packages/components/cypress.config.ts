import { defineConfig } from 'cypress';

export default defineConfig({
  includeShadowDom: true,
  component: {
    devServer: {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
      framework: 'cypress-ct-lit' as any,
      bundler: 'vite',
    },
  },
});
