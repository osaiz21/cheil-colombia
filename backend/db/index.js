const {creardefiniciones} = require('./config/conexion')
const { hoteles }  = require('./models/hoteles')
const debug = require('debug')('chail:db')

const ejecutar = async () => {
  try {
    await creardefiniciones(hoteles)
  }catch(error) {
    console.error(error.message)
  }
}
// Ejecutamos Funcion

(function (){
  try {
    ejecutar();
  } catch (error) {
    console.error(error.message)
    debug('No se Puede Conectar a la db')
  }
})()

module.exports = {
  hoteles
}


