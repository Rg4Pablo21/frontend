import { configurarLogin } from './componentes/login/log.js';
import { inicializarHeader } from './componentes/header/header.js';
import { cargarListaEstudiantes, obtenerDatosAsistencia } from './componentes/estudiantes/estudiantes.js';


function mostrarPantallaSegunLogin() {
    const usuario = JSON.parse(localStorage.getItem('currentUser'));
    const pantallaLogin = document.getElementById('loginContainer');
    const pantallaAsistencia = document.getElementById('asistenciaContainer');
    
    if (usuario) {
        pantallaLogin.style.display = 'none';
        pantallaAsistencia.style.display = 'block';
        inicializarHeader(usuario);
        configurarFechaActual();
    } else {
        pantallaLogin.style.display = 'block';
        pantallaAsistencia.style.display = 'none';
    }
}

function configurarFechaActual() {
    const fechaInput = document.getElementById('fechaAsistencia');
    if (fechaInput) {
        fechaInput.value = new Date().toISOString().split('T')[0];
    }
}

function iniciarAplicacion() {
    mostrarPantallaSegunLogin();
    
    configurarLogin();
    
    const botonCargar = document.getElementById('cargarBtn');
    const botonGuardar = document.getElementById('guardarBtn');
    
    if (botonCargar) {
        botonCargar.addEventListener('click', async () => {
            const idGrado = document.getElementById('gradosSelect').value;
            const fecha = document.getElementById('fechaAsistencia').value;
            await cargarListaEstudiantes(idGrado, fecha);
        });
    }
    
    if (botonGuardar) {
        botonGuardar.addEventListener('click', () => {
            alert('Asistencia guardada');
        });
    }
}

document.addEventListener('DOMContentLoaded', iniciarAplicacion);