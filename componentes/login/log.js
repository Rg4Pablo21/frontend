export function configurarLogin() {
    const formularioLogin = document.getElementById('loginForm');
    
    if (formularioLogin) {
        formularioLogin.addEventListener('submit', (evento) => {
            evento.preventDefault();
            
            const correo = document.getElementById('correo').value;
            const contrasena = document.getElementById('password').value;
            
            const usuarioSimulado = {
                id: 1,
                nombre: "Profesor",
                apellido: "Fuentes",
                correo: correo
            };
            
            localStorage.setItem('currentUser', JSON.stringify(usuarioSimulado));
            window.location.reload();
        });
    }
}