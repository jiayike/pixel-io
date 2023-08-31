import { LitElement, unsafeCSS, html, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import reset from '@pixel-io/styles/src/base/_reset.scss?inline';
import animations from '@pixel-io/styles/src/atoms/_animations.scss?inline';

type AnimationTypes = 'slide-in';
type AnimationDelayTypes = '1' | '2' | '3' | '4';

/**
 * Animation Component.
 *
 * @slot - This element has a slot
 */
@customElement('pixel-animation')
export class PixelAnimation extends LitElement {
  static styles = [unsafeCSS(reset), unsafeCSS(animations)];

  /**
   * Animation type.
   * @type {'slide-in' | undefined}
   */
  @property()
  type?: AnimationTypes;

  /**
   * Animation delay.
   * @type {'1' | '2' | '3' | '4' | undefined}
   */
  @property()
  delay?: AnimationDelayTypes;

  private getAnimationClasses(): string {
    const classes = [];
    if (this.type) {
      classes.push(`animate__${this.type}`);
    }

    if (this.delay) {
      classes.push(`animate__delay-${this.delay}`);
    }

    return classes.join(' ');
  }

  render(): TemplateResult {
    return html`
      <div class="${this.getAnimationClasses()}">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'pixel-animation': PixelAnimation;
  }
}
