import { html, LitElement, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import navigationStyle from "@pixel-io/styles/src/molecules/_navigation.scss?inline";
import reset from "@pixel-io/styles/src/base/_reset.scss?inline";

/**
 * Navigation Component.
 *
 * @slot - This element has a slot
 */
@customElement("pixel-navigation")
export class PixelNavigation extends LitElement {
  static styles = [unsafeCSS(reset), unsafeCSS(navigationStyle)];

  render() {
    return html`
      <nav class="pixel-navigation">
        <div class="pixel-navigation__wrapper">
          <slot />
        </div>
      </nav>
    `;
  }
}
