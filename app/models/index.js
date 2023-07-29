const conexion = require("./../config/Conexion.config")


const db = {
    conexion: conexion,
    cursos: require("./Curso.model"),
    participantes: require("./Participante.model")
}

db.cursos.belongsToMany(db.participantes, {
    through: "cursos_participantes",
    as: "participantes",
    foreignKey: "cursoId"
})

db.participantes.belongsToMany(db.cursos, {
    through: "cursos_participantes",
    as: "cursos",
    foreignKey: "participanteId"
})
module.exports = db