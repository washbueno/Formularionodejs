//Conexão ao banco de dados
const Sequelize = require('sequelize');
//const { application } = require('express');
const sequelize = new Sequelize('bd_form', 'root', 'root', {
    host: "localhost", dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}