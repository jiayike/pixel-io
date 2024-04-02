import { html } from 'lit';
import './tooltip';

describe('PixelTooltip', () => {
  it('should not display tooltip on load', () => {
    const content = 'content';
    cy.mount(
      html`<pixel-tooltip position="bottom">
        <div slot="tooltip-content">${content}</div>
        <div>tooltip</div>
      </pixel-tooltip>`,
    );

    cy.get('pixel-tooltip').find('[slot="tooltip-content"]').should('not.be.visible');
  });

  it('should display tooltip content', () => {
    const content = 'content';
    cy.mount(
      html`<pixel-tooltip position="bottom">
        <div slot="tooltip-content">${content}</div>
        <div>tooltip</div>
      </pixel-tooltip>`,
    );

    cy.get('pixel-tooltip')
      .trigger('mouseover')
      .then(() => {
        cy.get('pixel-tooltip').find('[slot="tooltip-content"]').should('be.visible');
      });
  });
});
