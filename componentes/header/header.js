// Función para mostrar el nombre del usuario
function mostrarNombreUsuario(usuario) {
    const elementoNombre = document.getElementById('userName');
    if (usuario && elementoNombre) {
        elementoNombre.textContent = `${usuario.nombre} ${usuario.apellido}`;
    }
}

// Función para configurar el botón de logout
function configurarLogout() {
    const botonLogout = document.getElementById('logoutBtn');
    if (botonLogout) {
        botonLogout.addEventListener('click', () => {
            localStorage.removeItem('currentUser');
            window.location.reload();
        });
    }
}

// Función principal que exportamos
export function inicializarHeader(usuario) {
    mostrarNombreUsuario(usuario);
    configurarLogout();
}