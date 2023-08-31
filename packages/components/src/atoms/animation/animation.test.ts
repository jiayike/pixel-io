import { fixture, html } from '@open-wc/testing-helpers';
import { screen } from 'shadow-dom-testing-library';

import './animation';

describe('PixelAnimation', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should have animation type class', async () => {
    const content = 'content';
    await fixture(html`<pixel-animation type="slide-in">${content}</pixel-animation>`);

    expect(screen.getByText(content)).toBeDefined();
  });
});
