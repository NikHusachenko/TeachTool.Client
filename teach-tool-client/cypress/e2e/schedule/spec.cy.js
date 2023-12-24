describe('Schedule Component', () => {
  beforeEach(() => {
    cy.visit('/5course/TeachTool.Client/teach-tool-client/src/app/schedule/page.tsx', { failOnStatusCode: false }); // Adjust the path accordingly
  });

  it('Opens modal on date select', () => {
    // Assuming the modal is initially closed
    cy.get('.ant-calendar-date').first().click(); // Click on the first date cell
    cy.get('.your-modal-selector').should('be.visible');
  });
  
  

  // Add more test cases as needed
});
