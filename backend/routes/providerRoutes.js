const express = require('express')
const router = express.Router()
const {
    getProviders, 
    registerProviders,
    loginProviders,
    getCurrentProvider, 
    updateProviders, 
    deleteProviders
} = require('../controllers/providerControllers')

const {protectProvider} = require('../middleware/authMiddleware')

router.get('/all', getProviders)

router.post('/', registerProviders)

router.post('/login', loginProviders)

router.get('/me', protectProvider,getCurrentProvider)

router.put('/me', updateProviders)

router.delete('/:id', deleteProviders)



module.exports = router