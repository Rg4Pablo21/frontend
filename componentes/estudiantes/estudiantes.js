const estudiantesSimulados = {
    // PREPRIMARIA
    1: [ // Kinder Básico
        { id: 101, nombre: "Ana", apellido: "López" },
        { id: 102, nombre: "Carlos", apellido: "Martínez" },
        { id: 103, nombre: "María", apellido: "García" },
        { id: 104, nombre: "Juan", apellido: "Pérez" },
        { id: 105, nombre: "Lucía", apellido: "Rodríguez" }
    ],
    2: [ // Kinder Avanzado
        { id: 201, nombre: "Pedro", apellido: "Sánchez" },
        { id: 202, nombre: "Sofía", apellido: "González" },
        { id: 203, nombre: "Diego", apellido: "Hernández" },
        { id: 204, nombre: "Valeria", apellido: "Díaz" },
        { id: 205, nombre: "Miguel", apellido: "Torres" }
    ],
    
    // PRIMARIA
    3: [ // Primero Primaria
        { id: 301, nombre: "Luis", apellido: "Fernández" },
        { id: 302, nombre: "Camila", apellido: "Ramírez" },
        { id: 303, nombre: "Andrés", apellido: "Flores" },
        { id: 304, nombre: "Isabella", apellido: "Castro" },
        { id: 305, nombre: "Jorge", apellido: "Vargas" }
    ],
    4: [ // Segundo Primaria
        { id: 401, nombre: "Daniela", apellido: "Mendoza" },
        { id: 402, nombre: "Alejandro", apellido: "Rojas" },
        { id: 403, nombre: "Gabriela", apellido: "Silva" },
        { id: 404, nombre: "Roberto", apellido: "Morales" },
        { id: 405, nombre: "Patricia", apellido: "Ortiz" }
    ],
    
    // BÁSICOS
    5: [ // Primero Básico
        { id: 501, nombre: "Fernando", apellido: "Guzmán" },
        { id: 502, nombre: "Adriana", apellido: "Ruiz" },
        { id: 503, nombre: "Ricardo", apellido: "Méndez" },
        { id: 504, nombre: "Carolina", apellido: "Herrera" },
        { id: 505, nombre: "José", apellido: "Navarro" }
    ],
    6: [ // Segundo Básico
        { id: 601, nombre: "Mariana", apellido: "Cordero" },
        { id: 602, nombre: "Francisco", apellido: "Paredes" },
        { id: 603, nombre: "Diana", apellido: "Salazar" },
        { id: 604, nombre: "Óscar", apellido: "Carrillo" },
        { id: 605, nombre: "Verónica", apellido: "Vega" }
    ],
    7: [ // Tercero Básico
        { id: 701, nombre: "Paula", apellido: "Santos" },
        { id: 702, nombre: "Javier", apellido: "Cruz" },
        { id: 703, nombre: "Laura", apellido: "Reyes" },
        { id: 704, nombre: "Mario", apellido: "Aguilar" },
        { id: 705, nombre: "Karla", apellido: "Medina" }
    ],
    
    // DIVERSIFICADO
    8: [ // Cuarto Bachillerato
        { id: 801, nombre: "Eduardo", apellido: "Fuentes" },
        { id: 802, nombre: "Natalia", apellido: "Miranda" },
        { id: 803, nombre: "Raúl", apellido: "Valenzuela" },
        { id: 804, nombre: "Ximena", apellido: "Cortés" },
        { id: 805, nombre: "Arturo", apellido: "Lara" }
    ],
    9: [ // Quinto Bachillerato
        { id: 901, nombre: "Beatriz", apellido: "Campos" },
        { id: 902, nombre: "Héctor", apellido: "Ríos" },
        { id: 903, nombre: "Daniela", apellido: "Ponce" },
        { id: 904, nombre: "Roberto", apellido: "Sosa" },
        { id: 905, nombre: "María José", apellido: "Zepeda" }
    ],
    


};

function crearFilaEstudiante(estudiante, estadoActual) {
    const fila = document.createElement('tr');
    fila.innerHTML = `
        <td>${estudiante.nombre} ${estudiante.apellido}</td>
        <td>
            <select class="select-asistencia" data-id="${estudiante.id}">
                <option value="Presente" ${estadoActual === 'Presente' ? 'selected' : ''}>Presente</option>
                <option value="Ausente" ${estadoActual === 'Ausente' ? 'selected' : ''}>Ausente</option>
                <option value="Tarde" ${estadoActual === 'Tarde' ? 'selected' : ''}>Tarde</option>
            </select>
        </td>
    `;
    return fila;
}

export async function cargarListaEstudiantes(idGrado, fecha) {
    try {
        await new Promise(resolve => setTimeout(resolve, 300));
        
        const listaEstudiantes = estudiantesSimulados[idGrado] || [];
        const tablaBody = document.querySelector('#estudiantesTable tbody');
        tablaBody.innerHTML = '';
        
        listaEstudiantes.forEach(estudiante => {
            const estados = ['Presente', 'Ausente', 'Tarde'];
            const estado = estados[Math.floor(Math.random() * estados.length)];
            tablaBody.appendChild(crearFilaEstudiante(estudiante, estado));
        });
        
    } catch (error) {
        console.error('Error al cargar estudiantes:', error);
        alert('No se pudo cargar la lista de estudiantes');
    }
}

export function obtenerDatosAsistencia() {
    const selects = document.querySelectorAll('.select-asistencia');
    const datos = [];
    
    selects.forEach(select => {
        datos.push({
            idEstudiante: select.dataset.id,
            estado: select.value
        });
    });
    
    return datos;
}