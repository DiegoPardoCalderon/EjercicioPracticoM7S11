const Sequelize = require("sequelize")
const conexion = require("./../config/Conexion.config")

const Participante = conexion.define("participantes", {
    rut: {
        type: Sequelize.STRING(15),
        unique: true,
        allowNull: false
    },
    nombre: {
        type: Sequelize.STRING(50),
        allowNull: false
    }
})
module.exports = Participante
