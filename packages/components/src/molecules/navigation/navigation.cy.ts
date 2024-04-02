import { html } from 'lit';
import './navigation';

describe('PixelNavigation', () => {
  it('should display navigation content', () => {
    const content = 'content';
    cy.mount(html`<pixel-navigation>${content}</pixel-navigation>`);

    cy.get('pixel-navigation').get('nav').should('exist');
    cy.get('pixel-navigation').contains(content);
  });
});
