// Este código cambia el color de fondo del botón al pasar el mouse sobre él
const boton = document.getElementById("close");
boton.addEventListener("mouseover", () => {
    boton.style.backgroundColor = "pink"; // Se cambia el color a "rosado"
});

// Y lo vuelve a su color original al quitar el mouse
boton.addEventListener("mouseout", () => {
    boton.style.backgroundColor = "";
});

// Obtener nodo en DOM por id
let edit_link = document.getElementById("edit-link");

// Agrega listener para el evento 'click' al link "Edit Profile"
edit_link.addEventListener('click', edit_profile);

function edit_profile() {
    //Obtener primer nodo del DOM que cumple con el selecto CSS 
    let nombre = document.querySelector(".profile-info h2");
    
    // Solicitar nuevo nombre via prompt del navegador
    let nuevo_nombre = prompt("Por favor, ingresa tu nombre:", "Nuevo Nombre");

    //Modificar contenido del nodo con el nuevo nombre
    if (nuevo_nombre !=null){
        nombre.textContent = nuevo_nombre;
    }
}

// aceptar o rechazar las solicitudes de conexión
// 
let aceptar1 = document.getElementById("aceptar-1");
let aceptar2 = document.getElementById("aceptar-2");
let rechazar1 = document.getElementById("rechazar-1");
let rechazar2 = document.getElementById("rechazar-2");

//aceptar solicitud 1
aceptar1.addEventListener('click', ()=>{
    let solicitud1 = document.getElementById("solicitud-1");
    //bajar 1 número a las solicitudes de conexión
    let solicitudConexion = document.getElementById("numero-de-solicitudes");
    solicitudConexion.textContent = parseInt(solicitudConexion.textContent) - 1;
    // aumentar en 1 el número de conexiones
    let conexiones = document.getElementById("numero-de-conexiones");
    conexiones.textContent = parseInt(conexiones.textContent) + 1;
    // eliminar la solicitud de conexión
    solicitud1.remove();
})

//aceptar solicitud 2
aceptar2.addEventListener('click', ()=>{
    let solicitud2 = document.getElementById("solicitud-2");
    //bajar 1 número a las solicitudes de conexión
    let solicitudConexion = document.getElementById("numero-de-solicitudes");
    solicitudConexion.textContent = parseInt(solicitudConexion.textContent) - 1;
    // aumentar en 1 el número de conexiones
    let conexiones = document.getElementById("numero-de-conexiones");
    conexiones.textContent = parseInt(conexiones.textContent) + 1;
    // eliminar la solicitud de conexión
    solicitud2.remove();
})

//rechazar solicitud 1
rechazar1.addEventListener('click', ()=>{
    let solicitud1 = document.getElementById("solicitud-1");
    //bajar 1 número a las solicitudes de conexión
    let solicitudConexion = document.getElementById("numero-de-solicitudes");
    solicitudConexion.textContent = parseInt(solicitudConexion.textContent) - 1;
    // eliminar la solicitud de conexión
    solicitud1.remove();
})

//rechazar solicitud 2
rechazar2.addEventListener('click', ()=>{
    let solicitud2 = document.getElementById("solicitud-2");
    //bajar 1 número a las solicitudes de conexión
    let solicitudConexion = document.getElementById("numero-de-solicitudes");
    solicitudConexion.textContent = parseInt(solicitudConexion.textContent) - 1;
    // eliminar la solicitud de conexión
    solicitud2.remove();
})