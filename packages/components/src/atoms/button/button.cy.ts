import { html } from 'lit';
import './button';

describe('PixelButton', () => {
  it('should display button content', () => {
    const content = 'content';
    cy.mount(html`<pixel-button>${content}</pixel-button>`);

    cy.get('pixel-button').should('contain.text', content);
  });

  it.only('should call on click', () => {
    const onClick = cy.stub();
    cy.mount(html`<pixel-button @onClick=${onClick}>content</pixel-button>`);

    cy.get('pixel-button')
      .find('button')
      .click({ force: true })
      .then(() => {
        expect(onClick).to.be.calledOnce;
      });
  });
});
