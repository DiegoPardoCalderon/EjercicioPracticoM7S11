const Sequelize = require('sequelize');
const conexion = new Sequelize('cursos', 'postgres', 'postgres', {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres'
});
module.exports = conexion