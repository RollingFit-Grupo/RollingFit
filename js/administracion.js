import Servicio from "./classDetalle.js";

let formServicio = document.getElementById(`formServicio`);
let modalServicio = document.getElementById(`modalEditar`);
const btnCrearServicio = document.getElementById(`btnCrear`);

let id = document.getElementById(`id`),
    servicioNombre = document.getElementById(`servicio`),
    profesor = document.getElementById(`profesor`),
    imagen = document.getElementById(`imagen`),
    socialProf = document.getElementById(`profesorImg`),
    precio = document.getElementById(`precio`),
    tiempo = document.getElementById(`tiempo`),
    categoria = document.getElementById(`categoria`),
    descripcion = document.getElementById(`descripcion`);

let altaServicio = true;
let listaServicios = JSON.parse(localStorage.getItem("listaServicios")) || [];

if (listaServicios.length > 0) {
    listaServicios = listaServicios.map((servicio) => new Servicio(
        servicio.id,
        servicio.servicioNombre,
        servicio.profesor,
        servicio.imagen,
        servicio.socialProf,
        servicio.precio,
        servicio.tiempo,
        servicio.categoria,
        servicio.descripcion,
    )
    );
}
console.log(listaServicios);

cargainicial();

function cargainicial() {
    if (listaServicios.length > 0) {
        listaServicios.map((servicio, posicion) => crearFila(servicio, posicion + 1));
    }
}

function crearFila(servicio, fila) {
    console.log(servicio);
    let tablaServicio = document.getElementById("tablaServicio");
    tablaServicio.innerHTML +=
    `<tr>
    <th scope="row" class="text-center">${fila}</th>
    <td class="tdImage">
    ${servicio.imagen}
    </td>
    <td>${servicio.profesor}</td>
    <td class="text-truncate truncateWidth">${servicio.descripcion}</td>
    <td>${servicio.categoria}</td>
    <td><i class="bi bi-currency-dollar"></i>${servicio.precio}</td>
    <td><i class="bi bi-clock"></i>${servicio.tiempo}</td>
    <td class="">
    <button class="btn btn-warning text-dark"><i class="bi bi-pencil-square"></i></button>
    <button class="btn btn-danger"><i class="bi bi-x-square"></i></button>
    </td>
</tr>`;
}
// Manejadores de eventos
formServicio.addEventListener("submit", prepararFormularioPelicula);
btnCrearServicio.addEventListener("click", desplegarmodalServicio);

// Funciones
function desplegarmodalServicio() {
    limpiarFormulario();
    altaServicio = true;
    modalServicio.show();
}

function prepararFormularioPelicula(e) {
    e.preventDefault();
    altaServicio=true
    console.log("en el evento submit");
    if (altaServicio) {
        crearServicio();
    } else {
        
    }
}
function crearServicio() {
    // Crear servicio
    console.log(`hola`);
    const servicioNuevo = new Servicio(
        undefined,
        servicioNombre.value,
        profesor.value,
        imagen.value,
        socialProf.value,
        precio.value,
        tiempo.value,
        categoria.value,
        descripcion.value
    );
    console.log(servicioNuevo);
    // Agregar el servicio en el arreglo de servicios
    listaServicios.push(servicioNuevo);
    // Guardar el array en el local storage
    guardarEnLocalstorage();
    console.log(servicioNuevo);
    // Dibujar la fila en la tabla
    crearFila(servicioNuevo, listaServicios.length);
    // Mostrar un mensaje
    Swal.fire(
        "Servicio creado",
        "El Servicio nuevo fue creado exitosamente",
        "success"
    );

    limpiarFormulario();
}

function guardarEnLocalstorage() {
    localStorage.setItem("listaServicios", JSON.stringify(listaServicios));
}

function limpiarFormulario() {
    formServicio.reset();
}
