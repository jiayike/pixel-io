import type { Meta, StoryObj as Story } from '@storybook/web-components';
import { withActions } from '@storybook/addon-actions/decorator';
import { html } from 'lit-html';

interface ArgTypes {
  position: string;
}

const meta: Meta<ArgTypes> = {
  title: 'Molecules/Navigation',
  argTypes: {
    position: {
      description: 'Position of the navigation bar.',
      control: { type: 'select' },
      options: ['pixel-navigation--top', 'pixel-navigation--bottom'],
      table: {
        type: { summary: 'string' },
      },
    },
  },
  args: {
    position: 'pixel-navigation--bottom',
  },
  parameters: {
    actions: {
      handles: ['click button'],
    },
  },
  decorators: [withActions],
  render: ({ position }) =>
    html`<nav class="pixel-navigation ${position}">
      <div class="pixel-navigation__wrapper">
        <button class="pixel-button pixel-button--primary">Home</button>
        <button class="pixel-button pixel-button--primary">Content</button>
        <button class="pixel-button pixel-button--primary">Stories</button>
        <button class="pixel-button pixel-button--primary">About Us</button>
        <button class="pixel-button pixel-button--primary">FAQ</button>
      </div>
    </nav>`,
};

export default meta;

export const Navigation: Story = {};
