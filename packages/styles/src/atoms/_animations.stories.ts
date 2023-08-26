import type { Meta, StoryObj as Story } from '@storybook/web-components';
import { html } from 'lit-html';

interface ArgTypes {
  type: string;
  delay: string;
}

const meta: Meta<ArgTypes> = {
  title: 'Atoms/Animations',
  argTypes: {
    type: {
      description: 'Type of animation.',
      control: { type: 'select' },
      options: ['', 'animate__slide-in'],
      table: {
        type: { summary: 'string' },
      },
    },
    delay: {
      description: 'Delay for the animation.',
      control: { type: 'select' },
      options: ['', 'animate__delay-1', 'animate__delay-2', 'animate__delay-3', 'animate__delay-4'],
      table: {
        type: { summary: 'string' },
      },
    },
  },
  args: {
    type: 'animate__slide-in',
    delay: 'animate__delay-1',
  },
  render: ({ type, delay }) =>
    html`<div style="background: white; padding: 1rem; display: inline-block;" class="${type} ${delay}">
      Pixel Animation
    </div>`,
};

export default meta;

export const Animations: Story = {};

export const WithAnimatedButtons: Story = {
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
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  render: () =>
    html`<nav class="pixel-navigation pixel-navigation--bottom">
      <div class="pixel-navigation__wrapper">
        <button class="pixel-button pixel-button--primary animate__slide-in">Home</button>
        <button class="pixel-button pixel-button--primary animate__slide-in animate__delay-1">Content</button>
        <button class="pixel-button pixel-button--primary animate__slide-in animate__delay-2">Stories</button>
        <button class="pixel-button pixel-button--primary animate__slide-in animate__delay-3">About Us</button>
        <button class="pixel-button pixel-button--primary animate__slide-in animate__delay-4">FAQ</button>
      </div>
    </nav>`,
};
