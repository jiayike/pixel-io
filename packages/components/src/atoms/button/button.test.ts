import { fixture, html } from '@open-wc/testing-helpers';
import { screen } from 'shadow-dom-testing-library';
import userEvent from '@testing-library/user-event';

import './button';

describe('PixelButton', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should display button content', async () => {
    const content = 'content';
    await fixture(html`<pixel-button>${content}</pixel-button>`);

    expect(screen.getByText(content)).toBeInTheDocument();
  });

  it('should call on click', async () => {
    const onClick = vi.fn();
    await fixture(html`<pixel-button @onClick=${onClick}>content</pixel-button>`);

    await userEvent.click(screen.getByShadowRole('button', { name: 'content' }));

    expect(onClick).toHaveBeenCalledOnce();
  });
});
