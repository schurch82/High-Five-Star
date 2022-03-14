const express = require('express')
const router = express.Router()
const {
    getUsers, 
    registerUsers,
    loginUsers,
    getMe, 
    updateUsers, 
    deleteUsers
} = require('../controllers/usersController')

const {protect} = require('../middleware/authMiddleware')

router.get('/all',protect, getUsers)

router.post('/', registerUsers)

router.post('/login', loginUsers)

router.get('/me',protect, getMe)

router.put('/me',protect, updateUsers)

router.delete('/:id', protect, deleteUsers)



module.exports = router