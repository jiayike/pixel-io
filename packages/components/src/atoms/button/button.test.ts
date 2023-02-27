import { fixture, html } from '@open-wc/testing-helpers';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';

import './button';

describe('PixelButton', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should display button content', async () => {
    const content = 'content';
    await fixture(html`<pixel-button>${content}</pixel-button>`);

    expect(screen.getByText(content)).toBeDefined();
  });

  it('should call on click', async () => {
    const onClick = vi.fn();
    const el = await fixture(html`<pixel-button @onClick=${onClick}>content</pixel-button>`);

    await userEvent.click(el.shadowRoot!.querySelector('button')!);

    expect(onClick).toHaveBeenCalledOnce();
  });
});
