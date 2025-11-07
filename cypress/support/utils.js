export function generateNameBuyer() {
    const name = Date.now() + Math.floor(Math.random() * 1000);
    return `UserBuyer_${name}`;
}

export function generateEmailBuyer() {
    const name = Date.now() + Math.floor(Math.random() * 1000);
    return `UserBuyer_${name}@email.com`;
}

export function generateNameSeller() {
    const name = Date.now() + Math.floor(Math.random() * 1000);
    return `UserSeller_${name}`;
}

export function generateEmailSeller() {
    const name = Date.now() + Math.floor(Math.random() * 1000);
    return `UserSeller_${name}@email.com`;
}

export function generateGameName() {
    return {
        title: "Game " + Date.now() + Math.floor(Math.random() * 1000),
        description: "Description",
        price: 10.00
    };
    //retornar esse payload para ser usado em outro teste

}

export function createSellerAndGetToken() {
    const payload = {
        name: generateNameSeller(),
        email: generateEmailSeller(),
        password: '1234'
    }
    return cy.request({
        method: 'POST',
        url: 'seller/register',
        body: payload
    }).then((response) => {
        expect(response.status).to.eq(201)

        return cy.request({
            method: 'POST',
            url: 'seller/login',
            body: {
                email: payload.email,
                password: payload.password
            }
        })
    }).then((response) => {
        expect(response.status).to.eq(200)
        return response.body.token;
    });
}

export function createBuyerAndGetToken() {
    const payload = {
        name: generateNameBuyer(),
        email: generateEmailBuyer(),
        password: '1234'
    }
    return cy.request({
        method: 'POST',
        url: 'buyer/register',
        body: payload
    }).then((response) => {
        expect(response.status).to.eq(201)

        return cy.request({
            method: 'POST',
            url: 'buyer/login',
            body: {
                email: payload.email,
                password: payload.password
            }
        })
    }).then((response) => {
        expect(response.status).to.eq(200)
        return response.body.token;
    });
}

export function createGame() {
    return createSellerAndGetToken().then((tokenSeller) => {
        Cypress.env('tokenSeller', tokenSeller);

        const gamePayload = generateGameName();

        return cy.request({
            method: 'POST',
            url: '/games',
            body: gamePayload,
            headers: {
                 Authorization: `Bearer ${Cypress.env('tokenSeller')}`
            }
        }).then((response) => {
            expect(response.status).to.eq(201)
            Cypress.env('game', response.body);
            return response.body;
        });
    })

}