import {API_BASE_URL, BASE_URL} from '../support/config';

describe('login page', () => {
    beforeEach(() => {
        cy.visit(BASE_URL);
        cy.get('[href="/login"]').click();
        cy.intercept('POST', `${API_BASE_URL}/adotante/login`, { statusCode:400 }).as('stubPost');
    });
    
    it('should must fill in the form fields correctly to login a user.', () => {
        cy.sigIn('ana@email.com', 'Senha123');
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

describe('alternative login flow', () => {
    beforeEach(() => {
        cy.visit(BASE_URL);
        cy.wait(5000);
        cy.get('.header__message').click();
    });

    it('should login through an alternative flow by accessing the main page, clicking the header message icon, and entering valid credentials', () => {
        cy.sigIn('ana@email.com', 'Senha123');
    });
});