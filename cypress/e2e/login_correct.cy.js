describe('login page', () => {
    beforeEach(() => {
        cy.visit('https://adopet-tau.vercel.app/');
        cy.get('[href="/login"]').click();
    });
    
    it('should must fill in the form fields correctly to login a user.', () => {
        cy.get('[name="email"]').type('ana@email.com');
        cy.get('[name="password"]').type('Senha123');
        cy.get('button').click();
    });

    it('should display an error message for an invalid email address', () => {
        cy.get('[name="email"]').type('invalid-email');
        cy.get('button').click();
        cy.contains('Por favor, verifique o email digitado').should('be.visible');
    });

    it('should display an error message for an invalid password', () => {
        cy.get('[name="password"]').type('invalid-password');
        cy.get('button').click();
        cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible');
    });
});