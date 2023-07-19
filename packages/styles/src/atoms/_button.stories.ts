import type { Meta, StoryObj } from '@storybook/web-components';
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
      options: ['primary', 'secondary'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
    content: {
      description: 'Content of the button.',
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Button' },
      },
    },
  },
  parameters: {
    actions: {
      handles: ['click'],
    },
  },
  decorators: [withActions],
  render: (args) => html`<button class="pixel-button pixel-button--${args.type}">${args.content}</button>`,
};

export default meta;
type Story = StoryObj;

export const Primary: Story = {
  args: {
    type: 'primary',
    content: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    type: 'secondary',
    content: 'Secondary Button',
  },
};
