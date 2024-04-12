import type { Meta, StoryObj as Story } from '@storybook/web-components';
import { html } from 'lit-html';

interface ArgTypes {
  position: string;
  show: boolean;
}

const meta: Meta<ArgTypes> = {
  title: 'Atoms/Tooltip',
  argTypes: {
    position: {
      description: 'Position of the tooltip.',
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right'],
    },
    show: {
      description: 'Show or hide the tooltip.',
      control: { type: 'boolean' },
    },
  },
  args: {
    position: 'top',
    show: true,
  },
  render: ({ position, show }) => {
    const margin = position === 'left' ? '15rem' : '10rem';

    return html`<div class="pixel-tooltip-container" style="margin: 1rem; margin-${position}: ${margin};">
      <div class="pixel-tooltip pixel-tooltip--${position} ${show && 'pixel-tooltip--show'}">
        <div class="pixel-tooltip__arrow pixel-tooltip__arrow--${position}"></div>
        <div class="pixel-tooltip__wrapper">Tooltip Content</div>
      </div>
      <button class="pixel-button">${position} tooltip</button>
    </div>`;
  },
};

export default meta;

export const Top: Story = {
  args: {
    position: 'top',
  },
};

export const Bottom: Story = {
  args: {
    position: 'bottom',
  },
};

export const Left: Story = {
  args: {
    position: 'left',
  },
};

export const Right: Story = {
  args: {
    position: 'right',
  },
};
