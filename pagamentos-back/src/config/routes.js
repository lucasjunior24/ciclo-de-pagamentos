const express = require('express')

module.exports = function(server) {
    // definnir URL base para todas as rotas
    const router = express.Router()
    server.use('/api', router)

    // Rotas de ciclo de pagamento
    const BillingCycle = require('../api/billingCycleService')
    BillingCycle.register(router, '/billingCycles')
}