import { themes } from "@storybook/theming";
import type { Preview } from "@storybook/web-components";
import "@pixel-io/styles";

const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
const theme = isDarkMode ? themes.dark : themes.light;

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: [
          "HTML|CSS",
          [
            "Quick Start",
            "Changelog",
            "Customization",
            "Atoms",
            "Molecules",
            "Organisms",
          ],
          "Components",
          ["Quick Start", "Changelog", "Atoms", "Molecules", "Organisms"],
          "*",
        ],
        locales: "en-US",
      },
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      theme,
      source: { language: "html", format: "dedent" },
    },
  },
};

export default preview;
