import type { StorybookViteConfig } from "@storybook/builder-vite";
import { HmrOptions, InlineConfig, mergeConfig, ViteDevServer } from "vite";
import * as path from "path";

const storyPaths = [
  path.resolve(__dirname, "../../../packages/components"),
  path.resolve(__dirname, "../stories"),
];

const findStories = (): string[] => {
  const paths = [];
  for (const path of storyPaths) {
    paths.push(`${path}/**/*.stories.mdx`);
    paths.push(`${path}/**/*.stories.@(js|jsx|ts|tsx)`);
  }

  return paths;
};

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
  async viteFinal(config: InlineConfig, { configType }) {
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
