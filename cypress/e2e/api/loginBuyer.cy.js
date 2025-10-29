describe('API - Login', () => {

    it('Deve realizar login com sucesso e retornar um token', () => {
        const payload = {
            email: 'diego@email.com',
            password: '1234'
        }
        cy.request({
            method: 'POST',
            url: 'buyer/login',
            body: payload
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('token')
            Cypress.env('token', response.body.token) // guarda token para outros testes
            cy.log('Token armazenado:', response.body.token)
        })
    })
})
