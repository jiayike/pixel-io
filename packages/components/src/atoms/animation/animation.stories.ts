import type { Meta, StoryObj as Story } from '@storybook/web-components';
import { withActions } from '@storybook/addon-actions/decorator';
import { html } from 'lit-html';
import { spread } from '@open-wc/lit-helpers';
import { type PixelAnimation } from './animation';
import './animation';
import '../button/button';
import '../navigation/navigation';

const meta: Meta<PixelAnimation> = {
  title: 'Atoms/Animation',
  component: 'pixel-animation',
  argTypes: {
    type: {
      options: ['slide-in', 'No animation'],
      mapping: {
        'No animation': '',
      },
    },
    delay: {
      options: ['1', '2', '3', '4', 'No delay'],
      mapping: {
        'No delay': '',
      },
    },
  },
  args: {
    type: 'slide-in',
    delay: '1',
  },
  parameters: {
    actions: {
      handles: ['click'],
    },
  },
  decorators: [withActions],
  render: ({ ...args }) =>
    html`<pixel-animation ${spread(args)}>
      <pixel-button>Button</pixel-button>
    </pixel-animation>`,
};

export default meta;

export const AnimatedButton: Story = {};

export const AnimatedNavigation: Story = {
  argTypes: {
    type: {
      table: {
        disable: true,
      },
    },
    delay: {
      table: {
        disable: true,
      },
    },
  },
  render: () =>
    html`<pixel-navigation position="bottom">
      <pixel-animation type="slide-in">
        <pixel-button>Home</pixel-button>
      </pixel-animation>
      <pixel-animation type="slide-in" delay="1">
        <pixel-button>Content</pixel-button>
      </pixel-animation>
      <pixel-animation type="slide-in" delay="2">
        <pixel-button>Stories</pixel-button>
      </pixel-animation>
      <pixel-animation type="slide-in" delay="3">
        <pixel-button>About Us</pixel-button>
      </pixel-animation>
      <pixel-animation type="slide-in" delay="4">
        <pixel-button>FAQ</pixel-button>
      </pixel-animation>
    </pixel-navigation>`,
};
