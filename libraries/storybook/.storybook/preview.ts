import { themes } from "@storybook/theming";
import "@pixel-ui/styles";

const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
const theme = isDarkMode ? themes.dark : themes.light;

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme,
  },
};
