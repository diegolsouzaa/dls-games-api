import { generateNameBuyer, generateEmailBuyer, generateNameSeller, generateEmailSeller } from "../../support/utils"

describe('Create Seller - seller/register', () => {

    it.only('Should create user seller', () => {
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
        })  
    })

})