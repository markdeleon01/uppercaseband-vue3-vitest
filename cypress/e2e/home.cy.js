// https://docs.cypress.io/api/introduction/api.html

describe('Test the home page', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.title().should('eq', 'U P P E R C A S E')
  })
})
