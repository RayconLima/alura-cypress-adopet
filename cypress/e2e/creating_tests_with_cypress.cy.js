import { BASE_URL } from '../support/config';

describe('ADOPET homepage verification', () => {
  beforeEach(() => {
    cy.visit(BASE_URL);
    cy.contains('a', 'Cadastrar').click();
  });

  it('should load home page', () => {
    cy.get("input[name='name']").type('Fulano de tal');
    cy.get('input[name="email"]').type('fulano_de_tal@email.com');
    cy.get('input[name="password"]').type('Senha123');
    cy.get('input[name="confirm_password"]').type('Senha123');
    cy.get('button').click();
  });
});

describe('Exercise', () => {
  it("should load home page and 'Ver pets disponíveis para adoção'", () => {
    cy.visit(BASE_URL);
    cy.contains('a', 'Ver pets disponíveis para adoção').click();
  });

  it('should load home page and test the header buttons', () => {
    cy.visit(BASE_URL);
    cy.wait(1000);
    cy.get('.header__message').click();
    cy.wait(2000);
    cy.get('.header__home').click();
  });

  it('should load login page', () => {
    cy.visit(BASE_URL);
    cy.wait(1000);
    cy.visit(BASE_URL + '/login');
  });

  it("should load home page", () => {
    cy.visit(BASE_URL);
  });

  it("should load home page and click in button 'Falar com o responsável'", () => {
    cy.visit(BASE_URL);
    cy.wait(1000);
    cy.contains('a', 'Ver pets disponíveis para adoção').click();
    cy.wait(2000);
    cy.get("a.card__contact").first().click();

    cy.contains('a', 'Faça seu cadastro').click();
    cy.register('Fulano de tal', 'fulano_de_tal@email.com', 'Senha123', 'Senha123');
    cy.wait(2000);
    cy.sigIn('fulano_de_tal@email.com', 'Senha123');
    cy.wait(2000);
  });
});