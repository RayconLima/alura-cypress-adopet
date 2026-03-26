describe('Registration page', () => {
    beforeEach(() => {
        cy.visit('https://adopet-tau.vercel.app/');
        cy.get('[href="/cadastro"]').click();
    });
    
    it('should must fill in the form fields correctly to register a new user.', () => {
        cy.register('Ana de Jesus', 'ana@email.com', 'Senha123', 'Senha123');
    });
});

