import type { Meta, StoryObj as Story } from '@storybook/web-components';
import { withActions } from '@storybook/addon-actions/decorator';
import { useArgs } from '@storybook/preview-api';
import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { type PixelModelCloseEvent, type PixelModel } from './model';
import './model';

const meta: Meta<PixelModel> = {
  title: 'Molecules/Model',
  argTypes: {
    show: Boolean,
    slot: String,
  },
  args: {
    show: true,
    slot: `<h1>Pixel Model</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis elit accumsan leo tristique ultrices.
      Quisque mattis nec magna condimentum suscipit. Fusce erat diam, iaculis non vestibulum convallis, consectetur
      et ligula. Aliquam diam quam, aliquam eget nulla et, mollis auctor dolor. Mauris consequat, sapien vel maximus
      molestie, velit erat condimentum erat, eu suscipit lacus dui blandit urna. Phasellus eu nibh in erat mollis
      posuere. Fusce dapibus tortor lorem, sit amet fermentum nulla pulvinar sodales. Phasellus tincidunt magna at
      urna elementum blandit. Vestibulum suscipit, metus quis pellentesque ultrices, eros orci elementum sapien,
      quis efficitur leo velit eget tortor. Mauris eu enim nibh. Proin venenatis id lacus nec porttitor.
    </p>
    <p>
      Sed suscipit eros eu ex tincidunt, ut pellentesque justo dignissim. Sed porttitor tellus nec semper
      ullamcorper. In volutpat sodales purus. Mauris blandit lacus in enim blandit congue. Aliquam hendrerit nibh in
      lacus malesuada, a posuere leo gravida. Ut volutpat nunc ante, et viverra arcu viverra sed. Nunc congue libero
      ut metus vulputate, in dapibus velit pretium. Fusce augue massa, lobortis in urna id, congue imperdiet metus.
      Duis commodo nulla quam, vel egestas neque cursus id.
    </p>`,
  },
  parameters: {
    actions: {
      handles: ['click pixel-button'],
    },
  },
  decorators: [withActions],
  render: ({ slot, show }) => {
    const [, updateArgs] = useArgs();

    return html`<div style="min-height: 20rem;">
      <pixel-button
        @click=${(): void => {
          updateArgs({
            show: true,
          });
        }}
        >Show Model</pixel-button
      >
      <pixel-model
        ?show=${show}
        @onClose=${(ev: CustomEvent<PixelModelCloseEvent>): void => {
          updateArgs({
            show: ev.detail.show,
          });
        }}
      >
        ${unsafeHTML(slot)}
      </pixel-model>
    </div>`;
  },
};

export default meta;

export const Open: Story = {};
