const getCharById = require('../controllers/getCharById')

const login = require('../controllers/login')

const {postFav, deleteFav, getFav} = require('../controllers/favControllers')

const { Router } = require('express')

const router = Router()

router.get('/character/:id', getCharById)

router.get('/login', login)

router.post('/favorites', postFav)

router.delete('/favorites/:id', deleteFav)

module.exports = router