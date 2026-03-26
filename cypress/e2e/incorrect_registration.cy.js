describe('Registration page', () => {
    beforeEach(() => {
        cy.visit('https://adopet-tau.vercel.app/');
        cy.get('[href="/cadastro"]').click();
    });
    
    it('should must fill in the form fields incorrectly to register a new user.', () => {
        cy.get('button').click();
        
        cy.contains('É necessário informar seu nome').should('be.visible');
        cy.contains('É necessário informar um endereço de email').should('be.visible');
        cy.contains('Crie uma senha').should('be.visible');
        cy.contains('Repita a senha criada acima').should('be.visible');
    });
});

