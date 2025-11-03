import { createBuyerAndGetToken, createGame } from "../../support/utils";


describe('List Games - /games', () => {

    before(() => {
        createBuyerAndGetToken().then((token) => {
            Cypress.env('tokenBuyer', token);
        })
        createGame()
    })

    it('Should search for a game by title', () => {
        const token = Cypress.env('tokenBuyer');
        const game = Cypress.env('game');
        cy.request({
            method: 'GET',
            url: `/games/search?q=${encodeURIComponent(game.title)}`,
            headers: {
                Authorization: `Bearer ${token}`
            }

        }).then((response) => {
            cy.log(JSON.stringify(response.body));
            expect(response.status).to.eq(200)
            expect(response.body[0].title).to.eq(game.title);
        })
    })


})