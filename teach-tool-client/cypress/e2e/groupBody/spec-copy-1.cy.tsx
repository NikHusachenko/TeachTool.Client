// cypress/integration/groupBody.spec.js

describe('GroupBody Component', () => {
  beforeEach(() => {
    // Відвідати сторінку з компонентом
    cy.visit('/5course/TeachTool.Client/teach-tool-client/src/app/groups/groupBody.tsx', { failOnStatusCode: false, timeout: 10000 });
  });

  it('should display messages', () => {
    // Перевірка, чи відображаються повідомлення
    cy.get('[data-test="message"]').should('exist', { timeout: 10000 });
cy.get('[data-test="message"]').should('have.length.greaterThan', 0);

    
  });

  it('should send a message', () => {
    // Відправити повідомлення та перевірити, чи воно з'явилося на сторінці
    cy.get('.your-textarea-class').type('Hello, world!');
    cy.get('.your-button-class').click();
    cy.get('.message').should('exist');
  });

  // Додайте інші тести згідно з вашим функціоналом
});
