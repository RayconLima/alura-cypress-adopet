describe('Home page', () => {
    it('should display the title “Adopet” on the main page.', () => {
        cy.visit('https://adopet-tau.vercel.app/');
        cy.get('[alt="Logo AdoPet"]').should('be.visible');
    });

    it('should display the text “Boas-vindas!” on the main page.', () => {
        cy.visit('https://adopet-tau.vercel.app/');
        cy.contains('Boas-vindas!').should('be.visible');
    });

    it('should display the text “Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!” on the main page.', () => {
        cy.visit('https://adopet-tau.vercel.app/');
        cy.contains('Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible');
    });
});