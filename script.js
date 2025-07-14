// Datos de los cursos
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
    
    // Continúa con el resto de los semestres...
    // (Aquí debes incluir todos los cursos de los semestres 3 al 10)
    // Por brevedad no los incluyo todos, pero debes copiar el resto de la lista
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
