import { defineConfig } from "vite";
import * as path from "path";
import StylelintPlugin from "vite-plugin-stylelint";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/main.scss"),
      name: "@pixel-io/styles",
    },
  },
  plugins: [StylelintPlugin({ fix: true })],
});
