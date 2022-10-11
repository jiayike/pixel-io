import "@pixel-ui/styles";
import { defineCustomElement } from "@pixel-ui/components/dist/components/pixel-button";

defineCustomElement();

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
