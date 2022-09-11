import type { StorybookViteConfig } from "@storybook/builder-vite";
import type { StoriesEntry } from "@storybook/core-common";
import { HmrOptions, InlineConfig, mergeConfig } from "vite";
import * as path from "path";

const storyPaths = [
  ["Components", path.resolve(__dirname, "../../../packages/components")],
  ["Examples", path.resolve(__dirname, "../stories")],
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

const config: StorybookViteConfig = {
  stories: findStories(),
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/html",
  core: {
    builder: "@storybook/builder-vite",
  },
  features: {
    // storyStoreV7: true,
  },
  async viteFinal(config: InlineConfig) {
    const { port } = config.server!.hmr as HmrOptions;

    // return the customized config
    return mergeConfig(config, {
      // customize the Vite config here
      server: {
        // Configure Vite for HMR with Gitpod.
        hmr: process.env.GITPOD_WORKSPACE_URL
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
};

export default config;
