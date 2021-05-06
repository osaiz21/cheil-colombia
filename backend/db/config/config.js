const path = require('path')
require('dotenv').config({path: path.resolve(__dirname,'../.env')})
const Sequelize = require('sequelize');
const sequelize = new Sequelize('cheil', 'root', 'cheil', {
  host: 'localhost',
  dialect: 'mysql',
  port: process.env.PORT_MYSQL || '3306'
})
module.exports = {
    Sequelize,
    sequelize
}