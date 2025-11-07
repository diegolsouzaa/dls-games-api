
import { generateNameBuyer, generateEmailBuyer } from "../../support/utils"

describe('API - Login', () => {

    before(() => {
        const payload = {
            name: generateNameBuyer(),
            email: generateEmailBuyer(),
            password: '1234'
        }

        cy.request({
            method: 'POST',
            url: 'buyer/register',
            body: payload
        }).then((response) => {
            expect(response.status).to.eq(201)
            Cypress.env('buyerEmail', response.body.email)
            Cypress.env('buyerPassword', response.body.password)
        })
    })

    it('Deve realizar login com sucesso e retornar um token', () => {
        const payload = {
            email: Cypress.env('buyerEmail'),
            password: Cypress.env('buyerPassword')
        }
       
        cy.request({
            method: 'POST',
            url: 'buyer/login',
            body: payload
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('token')
            Cypress.env('token', response.body.token)
        })
    })
})
