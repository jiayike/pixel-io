import type { Meta, StoryObj } from '@storybook/web-components';
import { html, TemplateResult } from 'lit-html';

type BackgroundColor = string;
type TextColor = 'black' | 'white';

const bgColors: BackgroundColor[] = [
  'white',
  'black',
  'red',
  'pink',
  'purple',
  'deep-purple',
  'indigo',
  'blue',
  'light-blue',
  'cyan',
  'teal',
  'green',
  'light-green',
  'lime',
  'yellow',
  'amber',
  'orange',
  'deep-orange',
  'brown',
  'blue-grey',
  'grey',
];

const getContrast = (hexcolor: string): TextColor => {
  // If a leading # is provided, remove it
  if (hexcolor.slice(0, 1) === '#') {
    hexcolor = hexcolor.slice(1);
  }

  // If a three-character hexcode, make six-character
  if (hexcolor.length === 3) {
    hexcolor = hexcolor
      .split('')
      .map((hex) => `${hex}${hex}`)
      .join('');
  }

  // Convert to RGB value
  const r = parseInt(hexcolor.substring(0, 2), 16);
  const g = parseInt(hexcolor.substring(2, 4), 16);
  const b = parseInt(hexcolor.substring(4, 6), 16);

  // Get YIQ ratio
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;

  // Check contrast
  return yiq >= 128 ? 'black' : 'white';
};

const meta: Meta = {
  title: 'Customization/Colors',
  render: () => {
    const colorContainer = (bgColor: BackgroundColor): TemplateResult => {
      const variableName = `--pixel-color-${bgColor}`;
      const colorHex = getComputedStyle(document.documentElement).getPropertyValue(variableName);

      const colorContainerStyles = `background-color: var(${variableName}); color: ${getContrast(colorHex)}; 
        display: flex; flex-direction: column; justify-content: space-between; 
        min-height: 10rem; padding: 0.8rem;`;

      return html`<div style="${colorContainerStyles}">
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.8rem;">
          <span>${bgColor}</span>
          <span>${colorHex}</span>
        </div>
        <code><small>css variable: ${variableName}</small></code>
      </div>`;
    };

    return html`<div
      style="display: grid; grid-gap: 1rem; grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));"
    >
      ${bgColors.map(colorContainer)}
    </div>`;
  },
};

export default meta;
type Story = StoryObj;

export const Colors: Story = {};
