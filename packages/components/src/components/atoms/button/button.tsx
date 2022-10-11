import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'pixel-button',
})
export class Button {
  /**
   * The first name
   */
  @Prop() type: string;

  render() {
    return (
      <button class="pixel-button">
        <slot />
      </button>
    );
  }
}
