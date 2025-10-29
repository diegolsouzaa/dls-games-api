import { generateNameBuyer, generateEmailBuyer } from "../../support/utils"

describe('API - Create Buyer', () => {

    it('Should create user buyer', () => {

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
            cy.log('aqui está o log : --------->>>>>>>> ' + response.body.id)
            cy.log('aqui está o log : --------->>>>>>>> ' + response.body.name)
            cy.log('aqui está o log : --------->>>>>>>> ' + response.body.email)

        })
    })
})