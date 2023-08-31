import { html, LitElement, TemplateResult, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import navigationStyle from '@pixel-io/styles/src/molecules/_navigation.scss?inline';
import reset from '@pixel-io/styles/src/base/_reset.scss?inline';

type PositionTypes = 'top' | 'bottom';

/**
 * Navigation Component.
 *
 * @slot - This element has a slot
 */
@customElement('pixel-navigation')
export class PixelNavigation extends LitElement {
  static styles = [unsafeCSS(reset), unsafeCSS(navigationStyle)];

  /**
   * Navigation position.
   * @type {'top' | 'bottom'}
   */
  @property()
  position: PositionTypes = 'bottom';

  render(): TemplateResult {
    return html`
      <nav class="pixel-navigation pixel-navigation--${this.position}">
        <div class="pixel-navigation__wrapper">
          <slot></slot>
        </div>
      </nav>
    `;
  }
}
