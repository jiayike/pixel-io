import type { StorybookConfig } from "@storybook/web-components-vite";
import type { StoriesEntry } from "@storybook/types";
import { HmrOptions, InlineConfig, mergeConfig } from "vite";
import * as path from "path";

type titlePrefix = string;
type directory = string;
type StoryPathType = [titlePrefix, directory];

const getStoriesEntry =
  (files: string) =>
  ([titlePrefix, directory]: StoryPathType): StoriesEntry => ({
    // 👇 The directory field sets the directory your stories
    directory,
    // 👇 The titlePrefix field will generate automatic titles for your stories
    titlePrefix,
    // 👇 Storybook will load all files that contain the stories extension
    files,
  });

const findStories = (): StoriesEntry[] => {
  const storyPaths: StoryPathType[] = [
    ["HTML|CSS", path.resolve(__dirname, "../../../packages/styles/src")],
    ["Components", path.resolve(__dirname, "../../../packages/components/src")],
  ];

  return [
    ...storyPaths.map(getStoriesEntry("**/*.mdx")),
    ...storyPaths.map(getStoriesEntry("**/*.stories.@(js|jsx|ts|tsx|mdx)")),
  ];
};

const config: StorybookConfig = {
  stories: findStories(),
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: {
    name: "@storybook/web-components-vite",
    options: {},
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
};
export default config;
