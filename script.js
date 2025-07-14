// Datos completos de los cursos
const cursos = [
    // Semestre 1
    { id: "PSIC_A002", nombre: "Procesos Cognitivos", codigo: "PSIC A002", semestre: 1, desbloquea: ["PSIC_C001", "PSIC_C002"] },
    { id: "PSIC_A003", nombre: "Evolución Histórica de la Psicología", codigo: "PSIC A003", semestre: 1, desbloquea: ["PSIC_E002", "PSIC_F002"] },
    { id: "ASIGESAPOL", nombre: "Estrategias para el Aprendizaje", codigo: "ASIGESAPOL", semestre: 1 },
    { id: "FILS_0001", nombre: "Antropología", codigo: "FILS 0001", semestre: 1 },
    { id: "PSIC_A001", nombre: "Fundamentos Biológicos del Comportamiento", codigo: "PSIC A001", semestre: 1 },
    { id: "PSIC_A004", nombre: "Fundamentos Filosóficos de la Psicología", codigo: "PSIC A004", semestre: 1 },
    { id: "PSIC_A005", nombre: "Taller de Comunicación", codigo: "PSIC A005", semestre: 1 },
    
    // Semestre 2
    { id: "FILS_0002", nombre: "Ética", codigo: "FILS 0002", semestre: 2, desbloquea: ["ELEFORIN01"] },
    { id: "PSIC_B001", nombre: "Neuropsicología", codigo: "PSIC B001", semestre: 2, desbloquea: ["PSIC_D005"] },
    { id: "PSIC_B002", nombre: "Procesos Afectivos", codigo: "PSIC B002", semestre: 2, desbloquea: ["PSIC_C001", "PSIC_C002"] },
    { id: "PSIC_B004", nombre: "Introducción a la Metodología de la Investigación", codigo: "PSIC B004", semestre: 2, desbloquea: ["PSIC_C004"] },
    { id: "PSIC_B003", nombre: "Fundamentos Socioantropológicos del Comportamiento", codigo: "PSIC B003", semestre: 2 },
    { id: "PSIC_B005", nombre: "Taller de Trabajo Grupal", codigo: "PSIC B005", semestre: 2 },
    
    // Semestre 3
    { id: "PSIC_C001", nombre: "Psicología Evolutiva I", codigo: "PSIC C001", semestre: 3, desbloquea: ["PSIC_D002"] },
    { id: "PSIC_C002", nombre: "Psicología de la Personalidad", codigo: "PSIC C002", semestre: 3, desbloquea: ["PSIC_D001", "PSIC_D005"] },
    { id: "PSIC_C003", nombre: "Psicología Social I", codigo: "PSIC C003", semestre: 3, desbloquea: ["PSIC_D003"] },
    { id: "PSIC_C004", nombre: "Metodología de la Investigación Aplicada", codigo: "PSIC C004", semestre: 3, desbloquea: ["PSIC_D004", "PSIC_E003", "PSIC_F004"] },
    { id: "ELEFORIN01", nombre: "Electivo de Formación Integral I", codigo: "ELEFORIN01", semestre: 3 },
    { id: "PSIC_C005", nombre: "Taller de Entrevista", codigo: "PSIC C005", semestre: 3 },
    
    // Semestre 4
    { id: "PSIC_D001", nombre: "Psico-Patología General", codigo: "PSIC D001", semestre: 4, desbloquea: ["PSIC_E001", "PSIC_F001"] },
    { id: "PSIC_D002", nombre: "Psicología Evolutiva II", codigo: "PSIC D002", semestre: 4, desbloquea: ["PSIC_G004"] },
    { id: "PSIC_D003", nombre: "Psicología Social II", codigo: "PSIC D003", semestre: 4, desbloquea: ["PSIC_G003", "PSIC_G005", "PSIC_H003", "PSIC_H005"] },
    { id: "PSIC_D004", nombre: "Análisis de Datos Cuantitativos", codigo: "PSIC D004", semestre: 4, desbloquea: ["PSIC_I014"] },
    { id: "PSIC_D005", nombre: "Evaluación Psicológica Cognitiva", codigo: "PSIC D005", semestre: 4, desbloquea: ["PSIC_E004"] },
    { id: "ELEFORIN02", nombre: "Electivo de Formación Integral II", codigo: "ELEFORIN02", semestre: 4 },
    
    // Semestre 5
    { id: "PSIC_E002", nombre: "Teorías Psicológicas I", codigo: "PSIC E002", semestre: 5, desbloquea: ["PSIC_G001", "PSIC_G002", "PSIC_G003", "PSIC_G004", "PSIC_G005", "PSIC_G006", "PSIC_H003", "PSIC_H004", "PSIC_H005"] },
    { id: "PSIC_E004", nombre: "Evaluación Psicológica de la Personalidad", codigo: "PSIC E004", semestre: 5, desbloquea: ["PSIC_F003", "PSIC_F005"] },
    { id: "PSIC_E001", nombre: "Psicopatología y Psiquiatría Infantil", codigo: "PSIC E001", semestre: 5 },
    { id: "PSIC_E003", nombre: "Análisis de Datos Cuantitativos", codigo: "PSIC E003", semestre: 5 },
    { id: "PSIC_E005", nombre: "Políticas Públicas", codigo: "PSIC E005", semestre: 5 },
    { id: "ELEFORIN03", nombre: "Electivo de Formación Integral III", codigo: "ELEFORIN03", semestre: 5 },
    
    // Semestre 6
    { id: "PSIC_F002", nombre: "Teorías Psicológicas II", codigo: "PSIC F002", semestre: 6, desbloquea: ["PSIC_H001", "PSIC_H002", "PSIC_G003", "PSIC_G004", "PSIC_G005", "PSIC_G006", "PSIC_H003", "PSIC_H004", "PSIC_H005"] },
    { id: "PSIC_F001", nombre: "Psicopatología y Psiquiatría Adulto", codigo: "PSIC F001", semestre: 6 },
    { id: "PSIC_F003", nombre: "Evaluación Psicológica Integrada", codigo: "PSIC F003", semestre: 6 },
    { id: "PSIC_F004", nombre: "Introducción a Formulación de Proyectos Sociales", codigo: "PSIC F004", semestre: 6 },
    { id: "PSIC_F005", nombre: "Taller Persona del Psicólogo", codigo: "PSIC F005", semestre: 6 },
    { id: "ELEFORIN04", nombre: "Electivo de Formación Integral IV", codigo: "ELEFORIN04", semestre: 6 },
    
    // Semestre 7
    { id: "PSIC_G003", nombre: "Comportamiento Organizacional", codigo: "PSIC G003", semestre: 7, desbloquea: ["PSIC_H003"] },
    { id: "PSIC_G004", nombre: "Factores Psicológicos en Procesos Educativos", codigo: "PSIC G004", semestre: 7, desbloquea: ["PSIC_H004"] },
    { id: "PSIC_G005", nombre: "Problemas Psicosociales Actuales", codigo: "PSIC G005", semestre: 7, desbloquea: ["PSIC_H005"] },
    { id: "PSIC_G001", nombre: "Introducción a Psicoterapia Sistémica", codigo: "PSIC G001", semestre: 7 },
    { id: "PSIC_G002", nombre: "Introducción a Psicoterapia Psicoanalítica", codigo: "PSIC G002", semestre: 7 },
    { id: "PSIC_G006", nombre: "Integración en Psicología", codigo: "PSIC G006", semestre: 7 },
    
    // Semestre 8
    { id: "PSIC_H001", nombre: "Introducción a Psicoterapia Cognitiva", codigo: "PSIC H001", semestre: 8 },
    { id: "PSIC_H002", nombre: "Introducción a Psicoterapia Humanista", codigo: "PSIC H002", semestre: 8 },
    { id: "PSIC_H003", nombre: "Gestión de Personas y Organizaciones", codigo: "PSIC H003", semestre: 8 },
    { id: "PSIC_H004", nombre: "Gestión Escolar", codigo: "PSIC H004", semestre: 8 },
    { id: "PSIC_H005", nombre: "Psicología Comunitaria", codigo: "PSIC H005", semestre: 8 },
    { id: "ELECPSIC1", nombre: "Electivo de Especialización I", codigo: "ELECPSIC1", semestre: 8 },
    
    // Semestre 9
    { id: "DISEINTERV", nombre: "Electivos Diseño en Intervención", codigo: "DISEINTERV", semestre: 9 },
    { id: "DISECONTEX", nombre: "Electivos Diseño en Contextos", codigo: "DISECONTEX", semestre: 9 },
    { id: "ELECPSIC2", nombre: "Electivo de Especialización II", codigo: "ELECPSIC2", semestre: 9 },
    { id: "PSIC_I014", nombre: "Proyecto de Investigación", codigo: "PSIC I014", semestre: 9 },
    
    // Semestre 10
    { id: "PSIC_J009", nombre: "Práctica Profesional", codigo: "PSIC J009", semestre: 10 },
    { id: "ELECPSIC3", nombre: "Electivo de Especialización III", codigo: "ELECPSIC3", semestre: 10 },
    { id: "PSIC_J010", nombre: "Seminario de Investigación", codigo: "PSIC J010", semestre: 10 }
];

// Estado de los cursos
let estadoCursos = {};
let cursosAprobados = 0;

// Inicializar estado de cursos
function inicializarEstadoCursos() {
    cursos.forEach(curso => {
        // Todos los cursos del semestre 1 están desbloqueados
        if (curso.semestre === 1) {
            estadoCursos[curso.id] = "desbloqueado";
        } else {
            estadoCursos[curso.id] = "bloqueado";
        }
    });
}

// Generar la malla curricular
function generarMalla() {
    const mallaContainer = document.getElementById("malla-container");
    mallaContainer.innerHTML = "";
    
    // Agrupar cursos por semestre
    const cursosPorSemestre = {};
    cursos.forEach(curso => {
        if (!cursosPorSemestre[curso.semestre]) {
            cursosPorSemestre[curso.semestre] = [];
        }
        cursosPorSemestre[curso.semestre].push(curso);
    });
    
    // Generar HTML para cada semestre
    for (let semestre = 1; semestre <= 10; semestre++) {
        if (cursosPorSemestre[semestre]) {
            const semestreDiv = document.createElement("div");
            semestreDiv.className = "semestre";
            
            semestreDiv.innerHTML = `
                <div class="semestre-header">Semestre ${semestre}</div>
                <div class="cursos-container" id="semestre-${semestre}"></div>
            `;
            
            mallaContainer.appendChild(semestreDiv);
            
            const cursosContainer = semestreDiv.querySelector(`#semestre-${semestre}`);
            
            cursosPorSemestre[semestre].forEach(curso => {
                const cursoDiv = document.createElement("div");
                cursoDiv.className = `curso ${estadoCursos[curso.id]}`;
                cursoDiv.id = `curso-${curso.id}`;
                cursoDiv.dataset.id = curso.id;
                
                let requisitosHTML = "";
                if (curso.desbloquea && curso.desbloquea.length > 0) {
                    requisitosHTML = `
                        <div class="requisitos">
                            <div class="titulo">Desbloquea:</div>
                            <ul>
                                ${curso.desbloquea.map(cod => `<li>${obtenerNombreCurso(cod)}</li>`).join('')}
                            </ul>
                        </div>
                    `;
                }
                
                cursoDiv.innerHTML = `
                    <div class="estado">${estadoCursos[curso.id] === "aprobado" ? "Aprobado" : estadoCursos[curso.id] === "desbloqueado" ? "Disponible" : "Bloqueado"}</div>
                    <div class="codigo">${curso.codigo}</div>
                    <div class="nombre">${curso.nombre}</div>
                    ${requisitosHTML}
                `;
                
                cursoDiv.addEventListener("click", () => aprobarCurso(curso.id));
                cursosContainer.appendChild(cursoDiv);
            });
        }
    }
    
    actualizarContador();
}

// Obtener nombre del curso por ID
function obtenerNombreCurso(id) {
    const curso = cursos.find(c => c.id === id);
    return curso ? curso.nombre : id;
}

// Aprobar un curso
function aprobarCurso(id) {
    if (estadoCursos[id] !== "desbloqueado") return;
    
    estadoCursos[id] = "aprobado";
    cursosAprobados++;
    
    const cursoDiv = document.getElementById(`curso-${id}`);
    cursoDiv.className = "curso aprobado";
    cursoDiv.querySelector('.estado').textContent = "Aprobado";
    
    // Desbloquear cursos que dependen de este
    const curso = cursos.find(c => c.id === id);
    if (curso.desbloquea) {
        curso.desbloquea.forEach(idDesbloqueado => {
            if (estadoCursos[idDesbloqueado] === "bloqueado") {
                estadoCursos[idDesbloqueado] = "desbloqueado";
                const cursoDesbloqueado = document.getElementById(`curso-${idDesbloqueado}`);
                if (cursoDesbloqueado) {
                    cursoDesbloqueado.className = "curso desbloqueado";
                    cursoDesbloqueado.querySelector('.estado').textContent = "Disponible";
                }
            }
        });
    }
    
    actualizarContador();
}

// Actualizar contador de cursos aprobados
function actualizarContador() {
    document.getElementById("contador-aprobados").textContent = cursosAprobados;
}

// Reiniciar malla
function reiniciarMalla() {
    cursosAprobados = 0;
    inicializarEstadoCursos();
    generarMalla();
}

// Inicializar
document.addEventListener("DOMContentLoaded", () => {
    inicializarEstadoCursos();
    generarMalla();
    
    document.getElementById("reiniciar-btn").addEventListener("click", reiniciarMalla);
});
