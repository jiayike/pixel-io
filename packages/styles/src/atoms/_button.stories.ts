import type { Meta, StoryObj as Story } from '@storybook/web-components';
import { withActions } from '@storybook/addon-actions/decorator';
import { html } from 'lit-html';

interface ArgTypes {
  type: string;
  content: string;
}

const meta: Meta<ArgTypes> = {
  title: 'Atoms/Button',
  argTypes: {
    type: {
      description: 'Style type of the button.',
      control: { type: 'select' },
      options: ['pixel-button--primary', 'pixel-button--secondary'],
      table: {
        type: { summary: 'string' },
      },
    },
    content: {
      description: 'Content of the button.',
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
      },
    },
  },
  parameters: {
    actions: {
      handles: ['click'],
    },
  },
  decorators: [withActions],
  render: ({ type, content }) => html`<button class="pixel-button ${type}">${content}</button>`,
};

export default meta;

export const Primary: Story = {
  args: {
    type: 'pixel-button--primary',
    content: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    type: 'pixel-button--secondary',
    content: 'Secondary Button',
  },
};
