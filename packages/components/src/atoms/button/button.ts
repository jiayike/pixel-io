import { LitElement, unsafeCSS, html, TemplateResult, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import buttonStyle from '@pixel-io/styles/src/atoms/_button.scss?inline';
import reset from '@pixel-io/styles/src/base/_reset.scss?inline';
import animations from '@pixel-io/styles/src/atoms/_animations.scss?inline';

type ButtonTypes = 'primary' | 'secondary' | 'icon';

/**
 * Button Component.
 *
 * @slot - This element has a slot
 * @event onClick
 */
@customElement('pixel-button')
export class PixelButton extends LitElement {
  static styles = [
    unsafeCSS(reset),
    unsafeCSS(animations),
    unsafeCSS(buttonStyle),
    css`
      :host {
        display: inline-block;
      }
    `,
  ];

  /**
   * Button style type.
   * @type {'primary' | 'secondary'}
   */
  @property()
  type: ButtonTypes = 'primary';

  private onClick(): void {
    const event = new CustomEvent('onClick', {
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  render(): TemplateResult {
    return html`
      <button class="pixel-button pixel-button--${this.type}" @click=${this.onClick}>
        <slot></slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'pixel-button': PixelButton;
  }
}
