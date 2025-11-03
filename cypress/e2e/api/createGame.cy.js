import { createSellerAndGetToken } from "../../support/utils";

describe('Create Game - /game', () => {

    before(() => {
        createSellerAndGetToken().then((token) => {
            Cypress.env('tokenSeller', token);
        })
    })

    it('Should create a new game', () => {
        const payload = {
            title: "New Game Cypress",
            description: "nao sei",
            price: 59.99
        }
        cy.then(() => {
            const token = Cypress.env('tokenSeller');
            cy.request({
                method: 'POST',
                url: '/games',
                body: payload,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((response) => {
                expect(response.status).to.eq(201)
            })
        });
    })

})