describe('Side Menu', function () {
  beforeEach(function () {
    cy.initializeSession().as('session');
    cy.visit('/');
  });

  it('should navigate correctly to notification-templates', function () {
    cy.getByTestId('side-nav-templates-link').should('have.attr', 'href').should('include', '/workflows');
  });

  it('should navigate correctly to settings', function () {
    cy.getByTestId('side-nav-settings-link').should('have.attr', 'href').should('include', '/settings');
  });

  it('should show bottom support, docs and share feedback', function () {
    cy.getByTestId('side-nav-bottom-links').scrollIntoView().should('be.visible');
    cy.getByTestId('side-nav-bottom-link-support').should('have.attr', 'href').should('eq', 'https://discord.teleflow.khulnasoft.com');
    cy.getByTestId('side-nav-bottom-link-documentation')
      .should('have.attr', 'href')
      .should('eq', 'https://docs.teleflow.khulnasoft.com?utm_campaign=in-app');

    cy.getByTestId('side-nav-bottom-link-share-feedback')
      .should('have.attr', 'href')
      .should('eq', 'https://github.com/khulnasoft/teleflow/issues/new/choose');
  });
});
