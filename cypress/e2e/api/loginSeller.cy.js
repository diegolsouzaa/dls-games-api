import { generateNameSeller, generateEmailSeller } from "../../support/utils";

describe('API - Login Seller', () => {

    before(() => {  
        const payload = {
            name: generateNameSeller(),
            email: generateEmailSeller(),
            password: '1234'
        }

        cy.request({
            method: 'POST',
            url: 'seller/register',
            body: payload
        }).then((response) => {
            expect(response.status).to.eq(201)
            Cypress.env('sellerEmail', response.body.email)
            Cypress.env('sellerPassword', response.body.password)
        })
    })

    it('Deve realizar login com sucesso e retornar um token', () => {
        const payload = {
            email: Cypress.env('sellerEmail'),
            password: Cypress.env('sellerPassword')
        }

        cy.request({
            method: 'POST',
            url: 'seller/login',
            body: payload
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('token')
            Cypress.env('tokenSeller', response.body.token)
        })
    })

})