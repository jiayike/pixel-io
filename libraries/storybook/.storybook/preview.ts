import "@pixel-ui/styles";
import { defineCustomElements } from "@pixel-ui/components/dist/loader";

defineCustomElements();

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
