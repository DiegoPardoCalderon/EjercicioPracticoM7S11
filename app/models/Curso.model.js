const Sequelize = require("sequelize")
const conexion = require("./../config/Conexion.config")


const Curso = conexion.define("cursos", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
})
module.exports = Curso
