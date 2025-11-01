export function generateNameBuyer(){
    const name = Date.now() + Math.floor(Math.random() * 1000);
    return `UserBuyer_${name}`;
}

export function generateEmailBuyer(){
    const name = Date.now() + Math.floor(Math.random() * 1000);
    return `UserBuyer_${name}@email.com`; 
}

export function generateNameSeller(){
    const name = Date.now() + Math.floor(Math.random() * 1000);
    return `UserSeller_${name}`;
}

export function generateEmailSeller(){
    const name = Date.now() + Math.floor(Math.random() * 1000);
    return `UserSeller_${name}@email.com`; 
}

export function createSellerAndGetToken(){
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
        const token = response.body.token;
        Cypress.env('sellerToken', token)
        return token;
    })
}