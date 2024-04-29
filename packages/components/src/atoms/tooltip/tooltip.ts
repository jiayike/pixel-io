import { LitElement, unsafeCSS, html, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import tooltipStyle from '@pixel-io/styles/src/atoms/_tooltip.scss?inline';
import reset from '@pixel-io/styles/src/base/_reset.scss?inline';

type PositionTypes = 'top' | 'bottom' | 'left' | 'right';

/**
 * Tooltip Component.
 *
 * @slot - This element has a slot
 */
@customElement('pixel-tooltip')
export class PixelTooltip extends LitElement {
  static styles = [unsafeCSS(reset), unsafeCSS(tooltipStyle)];

  /**
   * Tooltip position.
   * @type {'top' | 'bottom' | 'left' | 'right'}
   */
  @property()
  position: PositionTypes = 'top';

  /**
   * Tooltip show/hide.
   */
  @property({ type: Boolean })
  show = false;

  private mouseOver(): void {
    this.show = true;
  }

  private mouseOut(): void {
    this.show = false;
  }

  render(): TemplateResult {
    return html`
      <div class="pixel-tooltip-container">
        <div class="pixel-tooltip pixel-tooltip--${this.position}${this.show ? ' pixel-tooltip--show' : ''}">
          <div class="pixel-tooltip__arrow pixel-tooltip__arrow--${this.position}"></div>
          <div class="pixel-tooltip__wrapper">
            <slot name="tooltip-content"></slot>
          </div>
        </div>
        <div @mouseover=${this.mouseOver} @mouseout=${this.mouseOut}>
          <slot></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'pixel-tooltip': PixelTooltip;
  }
}
