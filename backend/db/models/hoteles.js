const { sequelize, Sequelize} = require('../config/config')
// Modelo del tabla hoteles.
const hoteles = sequelize.define('hoteles', {
    nombre: {
      type: Sequelize.TEXT,
      field: 'nombre' 
    },
    imagen: {
      type: Sequelize.TEXT,
      field:'imagen'
    },
    capacidad:{
        type: Sequelize.INTEGER,
        field: 'capacidad'
    },
    ubicacion:{
        type: Sequelize.TEXT,
        field: 'ubicacion'
    },
    observacion:{
        type: Sequelize.TEXT,
        field: 'observacion'
    }
  }, {
    freezeTableName: true 
});

module.exports = { 
    hoteles
}