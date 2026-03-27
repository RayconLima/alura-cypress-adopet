describe('User registration', () => {
    beforeEach(() => {
        cy.visit('https://adopet-tau.vercel.app/');
        cy.get('[href="/cadastro"]').click();
    });
    
    it('should submit the registration form with valid data', () => {
        cy.register('Ana de Jesus', 'ana@email.com', 'Senha123', 'Senha123');
    });

    it('should display required field validation messages when submitting an empty form', () => {
        cy.get('button').click();
        
        cy.contains('É necessário informar seu nome').should('be.visible');
        cy.contains('É necessário informar um endereço de email').should('be.visible');
        cy.contains('Crie uma senha').should('be.visible');
        cy.contains('Repita a senha criada acima').should('be.visible');
    });
});