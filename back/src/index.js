const express = require('express')
const gameRouter = require('./routes.js')
const conexion = require('./app/models/Conexion.js')

const app = express();

conexion()
app.use(express.json())

app.use('/game', gameRouter)
app.use('/game/:id', gameRouter)
app.use('*', (req, res) => res.status(404).json({error: "page not found"}))

app.listen(3001, () => console.log('Opaa'))