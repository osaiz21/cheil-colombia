const path = require('path')
require('dotenv').config({path: path.resolve(__dirname,'.env')})
const express = require('express')
const debug = require('debug')('chail:server')
const cors = require('cors')
const app = express()
// Puerto por Default del Servicio
const port = process.env.PORT || '3000'
// cors
app.use(cors())
// Formater Data.
app.use(express.json())
// Controladores.
const { 
  listarHoteles,
  crearHoteles,
  actualizarHoteles,
  eliminarHoteles 
} = require('./controlador/hoteles')

app.get('/listar', listarHoteles )
app.post('/crear', crearHoteles )
app.put('/hotel/:id', actualizarHoteles )
app.delete('/hotel/:id', eliminarHoteles )

 
app.listen(port, () => {
    debug(`listen port: ${port}` )
})