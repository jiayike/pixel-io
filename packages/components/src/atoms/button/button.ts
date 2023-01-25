import { LitElement, unsafeCSS, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import buttonStyle from "@pixel-ui/styles/src/atoms/button/_button.scss?inline";
import reset from "@pixel-ui/styles/src/base/_reset.scss?inline";

type ButtonTypes = "primary" | "secondary";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement("pixel-button")
export class PixelButton extends LitElement {
  static styles = [unsafeCSS(reset), unsafeCSS(buttonStyle)];

  /**
   * Button style type.
   */
  @property()
  type: ButtonTypes = "primary";

  private onClick = () => {
    const event = new CustomEvent("onClick", {
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  };

  render() {
    return html`
      <button
        class="pixel-button pixel-button__${this.type}"
        @click=${this.onClick}
      >
        <slot />
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "pixel-button": PixelButton;
  }
}
