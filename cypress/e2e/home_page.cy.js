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

    it('should display pets images on the main page.', () => {
        cy.visit('https://adopet-tau.vercel.app/');
        cy.contains('a', 'Ver pets disponíveis para adoção').click();

        /**
         * todo: caso não haja outros testes referentes ao conjuntos de image dos pets, 
         * pode ser interessante validar outras propriedades como texto alternativo, titulo, etc.
        */

        cy.wait(3000);
        cy.get(".cards").each(($el) => {
            cy.wrap($el).find('img').should('be.visible');
        });
    });
});