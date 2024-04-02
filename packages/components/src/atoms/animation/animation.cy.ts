import { html } from 'lit';
import './animation';

describe('PixelAnimation', () => {
  it('should have animation type class', () => {
    const content = 'content';
    cy.mount(html`<pixel-animation type="slide-in">${content}</pixel-animation>`);

    cy.get('pixel-animation').should('contain.text', content);
  });
});
