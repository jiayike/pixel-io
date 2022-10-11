import { Component, Prop, h } from '@stencil/core';

export type ButtonTypes = 'primary' | 'secondary';

@Component({
  tag: 'pixel-button',
})
export class Button {
  /**
   * The style of type the button
   */
  @Prop() type: ButtonTypes = 'primary';

  render() {
    return (
      <button
        class={{
          'pixel-button': true,
          [`pixel-button__${this.type}`]: true,
        }}
      >
        <slot />
      </button>
    );
  }
}
