import { fixture, html } from "@open-wc/testing-helpers";
import { screen } from "@testing-library/dom";

describe("PixelNavigation", () => {
  it("should display navigation content", async () => {
    const content = "content";
    await fixture(html`<pixel-navigation>${content}</pixel-navigation>`);

    expect(screen.getByText(content)).toBeDefined();
  });
});
