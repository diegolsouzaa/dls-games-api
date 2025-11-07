import { generateNameBuyer, generateEmailBuyer } from "../../support/utils"

describe('Create Buyer - buyer/register', () => {

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
        })
    })

})