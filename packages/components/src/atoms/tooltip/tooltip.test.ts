import { fixture, html } from '@open-wc/testing-helpers';
import { screen } from 'shadow-dom-testing-library';
import userEvent from '@testing-library/user-event';

import './tooltip';

describe('PixelTooltip', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should not display tooltip on load', async () => {
    const content = 'content';
    await fixture(
      html`<pixel-tooltip>
        <div slot="tooltip-content">${content}</div>
        <div>tooltip</div>
      </pixel-tooltip>`,
    );

    expect(screen.getByShadowText(content).assignedSlot?.parentElement?.parentElement).not.toHaveClass(
      'pixel-tooltip--show',
    );
  });

  it('should display tooltip content', async () => {
    const content = 'content';
    await fixture(
      html`<pixel-tooltip>
        <div slot="tooltip-content">${content}</div>
        <div>tooltip</div>
      </pixel-tooltip>`,
    );

    await userEvent.hover(screen.getByShadowText('tooltip'));

    expect(screen.getByShadowText(content)?.assignedSlot?.parentElement?.parentElement).toHaveClass(
      'pixel-tooltip--show',
    );
  });
});
