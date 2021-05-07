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
const actualizarHoteles = async (req,res) => {
    try {
        await hoteles.update(req.body,{
            where: {
                id: req.params.id
            }
        })
        res.send(req.body)
    } catch( error ) {
        res.send({
            'error': error.message
        })
    }
}
const eliminarHoteles = async (req,res) => {
    try {
        await hoteles.destroy({
            where: {
                id: req.params.id
            }
        })
        res.send({
            'message': 'Eliminacion Exitosa'
        })
    } catch( error ) {
        res.send({
            'error': error.message
        })
    }
}

module.exports = {
    listarHoteles,
    crearHoteles,
    actualizarHoteles,
    eliminarHoteles
}