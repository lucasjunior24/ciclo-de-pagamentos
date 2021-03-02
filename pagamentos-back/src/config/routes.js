const express = require('express')
const auth = require('./auth')

module.exports = function(server) {
        /*
         * Rotas Protegidas
         */

    const protectedApi = express.Router()
    server.use('/api', protectedApi)

    protectedApi.use(auth)

    // Rotas de ciclo de pagamento
    const BillingCycle = require('../api/billingCycleService')
    BillingCycle.register(protectedApi, '/billingCycles')

        /*
         * Rotas Abertas
         */

    const openApi = express.Router()
    server.use('/oapi', openApi)

    const AuthService = require('../api/user/authService')
    openApi.post('/login', AuthService.login)
    openApi.post('/signup', AuthService.signup)
    openApi.post('/validateToken', AuthService.validateToken)
}
