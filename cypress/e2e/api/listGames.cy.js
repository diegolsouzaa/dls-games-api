import { createBuyerAndGetToken, createGame } from "../../support/utils";

describe('List Games - /games', () => {

    before(() => {
        createBuyerAndGetToken().then((token) => {
            Cypress.env('tokenBuyer', token);
        })
        createGame()

    })

    it('Should list all games', () => {
        const token = Cypress.env('tokenBuyer');
        
        cy.request({
            method: 'GET',
            url: '/games',
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            cy.log(JSON.stringify(response.body));
            expect(response.status).to.eq(200)
        })
    })

})