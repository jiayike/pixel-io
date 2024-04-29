import type { Meta, StoryObj as Story } from '@storybook/web-components';
import { withActions } from '@storybook/addon-actions/decorator';
import { html } from 'lit-html';
import { spread } from '@open-wc/lit-helpers';
import { type PixelTooltip } from './tooltip';
import './tooltip';
import '../../atoms/button/button';

const meta: Meta<PixelTooltip> = {
  title: 'Atoms/Tooltip',
  component: 'pixel-tooltip',
  argTypes: {
    position: {
      options: ['top', 'bottom', 'left', 'right'],
    },
  },
  args: {
    position: 'top',
  },
  parameters: {
    actions: {
      handles: ['click pixel-button', 'mouseover pixel-button', 'mouseout pixel-button'],
    },
  },
  decorators: [withActions],
  render: ({ slot, show, ...args }) =>
    html`<div style="margin: 15rem;">
      <pixel-tooltip ?show=${show} ${spread(args)}>
        <div slot="tooltip-content">${slot || 'Tooltip'}</div>
        <pixel-button>Button</pixel-button>
      </pixel-tooltip>
    </div>`,
};

export default meta;

export const Top: Story = {};

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
