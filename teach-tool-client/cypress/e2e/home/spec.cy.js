describe('Home Page', () => {
  it('Displays welcome message', () => {
    cy.visit('./src/app/home/page'); 

    // Assuming there is a div with the text "Welcome to Home Page"
    cy.contains('Welcome to Home Page', { timeout: 10000 }).should('be.visible');

  });
});
