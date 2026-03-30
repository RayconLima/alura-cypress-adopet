import { API_BASE_URL } from '../support/config';

describe('Api Adopet', () => {     
    it('Mensagens da API', () => {
        const user_id = '250bd75a-0a3b-4e2e-aeb3-56a9d3ff5ea8';

        cy.request({
            method: 'GET' ,
            url: `${API_BASE_URL}/mensagem/${user_id}`,
            headers: Cypress.env()
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')         
        })
    });
})