import { BASE_URL } from '../support/config';
describe('Home page', () => {
    it('should display the title “Adopet” on the main page.', () => {
        cy.visit(BASE_URL);
        cy.get('[alt="Logo AdoPet"]').should('be.visible');
    });

    it('should display the text “Boas-vindas!” on the main page.', () => {
        cy.visit(BASE_URL);
        cy.contains('Boas-vindas!').should('be.visible');
    });

    it('should display the text “Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!” on the main page.', () => {
        cy.visit(BASE_URL);
        cy.contains('Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible');
    });

    it('should display pets images on the main page.', () => {
        cy.visit(BASE_URL);
        cy.contains('a', 'Ver pets disponíveis para adoção').click();

        cy.wait(3000);
        cy.get(".cards").each(($el) => {
            cy.wrap($el).find('img').should('be.visible');
        });
    });
});