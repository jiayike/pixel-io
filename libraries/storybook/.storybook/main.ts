import type { StorybookConfig } from "@storybook/web-components-vite";
import type { StoriesEntry } from "@storybook/types";
import { HmrOptions, InlineConfig, mergeConfig } from "vite";
import * as path from "path";
const storyPaths = [
  ["HTML|CSS", path.resolve(__dirname, "../node_modules/@pixel-ui/styles/src")],
  [
    "Components",
    path.resolve(__dirname, "../node_modules/@pixel-ui/components/src"),
  ],
];

const findStories = (): StoriesEntry[] =>
  storyPaths.map(([name, path]) => ({
    // 👇 The directory field sets the directory your stories
    directory: path,
    // 👇 The titlePrefix field will generate automatic titles for your stories
    titlePrefix: name,
    // 👇 Storybook will load all files that contain the stories extension
    files: "**/*.stories.@(js|jsx|ts|tsx|mdx)",
  }));

const config: StorybookConfig = {
  stories: findStories(),
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/web-components-vite",
    options: {},
  },
  core: {
    builder: "@storybook/builder-vite",
  },
  features: {
    storyStoreV7: true,
  },
  async viteFinal(config: InlineConfig) {
    const { port } = (config.server?.hmr as HmrOptions) || {};

    // return the customized config
    return mergeConfig(config, {
      // customize the Vite config here
      server: {
        // Configure Vite for HMR with Gitpod.
        hmr:
          process.env.GITPOD_WORKSPACE_URL && port
            ? {
                // Due to port fowarding, we have to replace
                // 'https' with the forwarded port, as this
                // is the URI created by Gitpod.
                host: process.env.GITPOD_WORKSPACE_URL.replace(
                  "https://",
                  `${port}-`
                ),
                protocol: "wss",
                clientPort: 443,
              }
            : true,
      },
    });
  },
  docs: {
    autodocs: true,
  },
};
export default config;
