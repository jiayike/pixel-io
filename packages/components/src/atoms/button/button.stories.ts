import type { Meta, StoryObj as Story } from '@storybook/web-components';
import { withActions } from '@storybook/addon-actions/decorator';
import { html } from 'lit-html';
import { spread } from '@open-wc/lit-helpers';
import { type PixelButton } from './button';
import './button';

const meta: Meta<PixelButton> = {
  title: 'Atoms/Button',
  component: 'pixel-button',
  argTypes: {
    type: {
      options: ['primary', 'secondary'],
    },
  },
  args: {
    type: 'primary',
    slot: 'Button',
  },
  parameters: {
    actions: {
      handles: ['click pixel-button'],
    },
  },
  decorators: [withActions],
  render: ({ slot, ...args }) => html`<pixel-button ${spread(args)}>${slot}</pixel-button>`,
};

export default meta;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    type: 'secondary',
  },
};
