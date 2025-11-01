import { createSellerAndGetToken } from "../../support/utils";

describe('Create Game - /game', () => {

    before(() => {
        createSellerAndGetToken().then((token) => {
            Cypress.env('tokenSeller', token);
            cy.log('Token Seller ->>>>>>>>>>> ' + token);
        });
    })

    it('Should create a new game', () => {
        const payload = {
            title: 'Game Title',
            year: 2022,
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
                cy.log('Game ID: ' + response.body.id)
                cy.log('Game Title: ' + response.body.title)
            })

        });

    })
})


