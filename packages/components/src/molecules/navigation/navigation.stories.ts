import type { Meta, StoryObj as Story } from '@storybook/web-components';
import { withActions } from '@storybook/addon-actions/decorator';
import { html } from 'lit-html';
import { type PixelNavigation } from './navigation';
import './navigation';
import '../../atoms/button/button';

const meta: Meta<PixelNavigation> = {
  title: 'Molecules/Navigation',
  component: 'pixel-navigation',
  argTypes: {
    position: {
      options: ['top', 'bottom'],
    },
  },
  args: {
    position: 'bottom',
  },
  parameters: {
    actions: {
      handles: ['click pixel-button'],
    },
  },
  decorators: [withActions],
  render: ({ position }) =>
    html`<pixel-navigation position="${position}">
      <pixel-button>Home</pixel-button>
      <pixel-button>Content</pixel-button>
      <pixel-button>Stories</pixel-button>
      <pixel-button>About Us</pixel-button>
      <pixel-button>FAQ</pixel-button>
    </pixel-navigation>`,
};

export default meta;

export const Navigation: Story = {};
