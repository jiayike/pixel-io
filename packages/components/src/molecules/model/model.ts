import { LitElement, unsafeCSS, html, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import modelStyle from '@pixel-io/styles/src/molecules/_model.scss?inline';
import reset from '@pixel-io/styles/src/base/_reset.scss?inline';
import '../../atoms/button/button';

export interface PixelModelCloseEvent {
  show: boolean;
}

/**
 * Model Component.
 *
 * @slot - This element has a slot
 * @event PixelModel#onClose
 */
@customElement('pixel-model')
export class PixelModel extends LitElement {
  static styles = [unsafeCSS(reset), unsafeCSS(modelStyle)];

  /**
   * Model show/hide.
   */
  @property({ type: Boolean, reflect: true })
  show = false;

  private onClose(): void {
    this.show = false;
    const event = new CustomEvent<PixelModelCloseEvent>('onClose', {
      bubbles: true,
      composed: true,
      detail: {
        show: this.show,
      },
    });
    this.dispatchEvent(event);
  }

  render(): TemplateResult {
    return html`
      <div class="pixel-model ${this.show ? '' : 'pixel-model--hide'}">
        <div class="pixel-model__backdrop" @click=${this.onClose}></div>
        <div class="pixel-model__container">
          <span class="pixel-model__close">
            <pixel-button type="icon" @click=${this.onClose}>X</pixel-button>
          </span>
          <div class="pixel-model__content">
            <slot></slot>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'pixel-model': PixelModel;
  }
}
