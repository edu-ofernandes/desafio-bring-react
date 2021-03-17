const express = require('express')
const gameController = require('./app/controller/gameCtrl.js')

const gameRouter = express.Router()

gameRouter.post('/game', gameController.getAll)
gameRouter.get('/game/:id', gameController.searchById)

module.exports = gameRouter