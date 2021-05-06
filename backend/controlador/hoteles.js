const debug = require('debug')('chail:controlador-hoteles')
const { hoteles } = require('db')
const listarHoteles = async (req,res) => {
    try{
        const data = await hoteles.findAll()
        res.send(
            {
               data
            }
        )
    }catch(error){
        res.send({
            'error': error.message
        })
    }
}
const crearHoteles = async (req,res) => {
    try {
        await hoteles.create(req.body)
        res.send(req.body)
    } catch( error ) {
        res.send({
            'error': error.message
        })
    }
}
const actualizarHoteles = (req,res) => {
    debug('hola')
    res.send({'hola':'111'})
}
const eliminarHoteles = (req,res) => {
    res.send({'hola':'111'})
}

module.exports = {
    listarHoteles,
    crearHoteles,
    actualizarHoteles,
    eliminarHoteles
}