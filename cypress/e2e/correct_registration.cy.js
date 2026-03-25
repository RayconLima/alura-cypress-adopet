describe('Registration page', () => {
    it('should must fill in the form fields correctly to register a new user.', () => {
        cy.visit('https://adopet-tau.vercel.app/');
        cy.get('[href="/cadastro"]').click();
        cy.get('[name="name"]').type('Ana de Jesus');
        cy.get('[name="email"]').type('ana@email.com');
        cy.get('[name="password"]').type('Senha123');
        cy.get('[name="confirm_password"]').type('Senha123');
        cy.get('button').click();
    });
});

