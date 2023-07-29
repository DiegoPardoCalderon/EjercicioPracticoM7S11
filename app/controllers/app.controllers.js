const db = require("./../models/index")
const Participante = db.participantes
const Curso = db.cursos


// Método para crear participante
exports.crearParticipante = async (participante) => {
    try {
        const registroParticipante = await Participante.create(participante)
        return registroParticipante
    } catch (error) {
        console.log("Error registrando Participante", error);
        return null
    }
}

exports.crearCurso = async (curso) => {
    try {
        const registroCurso = await Curso.create(curso)
        return registroCurso
    } catch (error) {
        console.log("Error registrando Curso", error);
        return null
    }
}

exports.agregarParticipante = async (idCurso, idParticipante) => {
    const curso = await Curso.findByPk(idCurso)
    if(!curso) { // Validación para verificar existencia del curso
        console.log("Curso no encontrado "+idCurso);
        return null
    }
    const participante = await Participante.findByPk(idParticipante)
    if(!participante) { //Validación para verificar la existencia del participante
        console.log("Participante no encontrado "+idParticipante);
        return null
    }
    await curso.addParticipante(participante)
    console.log(`Participante ${idParticipante} agregado al curso ${idCurso}`);
    return curso;
}

exports.consultarCurso = async (idCurso) => {
    const curso = await Curso.findByPk(idCurso, {
        include: [
            {
                model: Participante,
                as: "participantes",
                attributes: [ "id","rut","nombre"],
                through: {
                    attributes: ["cursoId","participanteId"]
                }
            }
        ]
    })
    return curso
}

exports.consultarParticipante = async (idParticipante) => {
    const participante = await Participante.findByPk(idParticipante, {
        include: [
            {
                model: Curso,
                as: "cursos",
                attributes: [ "id","nombre"],
                through: {
                    attributes: ["cursoId","participanteId"]
                }
            }
        ]
    })
    return participante
}