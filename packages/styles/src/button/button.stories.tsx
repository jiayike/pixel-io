import "./button.scss";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Button/To/MyComponent",
};

export const Basic = (): string => "<button class='button'>hello world</button>";
