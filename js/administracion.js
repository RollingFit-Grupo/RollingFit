import Servicio from "./classDetalle.js";

let formServicio = document.getElementById(`formServicio`);
let modalServicio = new bootstrap.Modal(document.getElementById("modalEditar"));
const btnCrearServicio = document.getElementById(`btnCrear`);

let id = document.getElementById(`id`),
    servicioNombre = document.getElementById(`servicio`),
    profesor = document.getElementById(`profesor`),
    imagen = document.getElementById(`imagen`),
    socialProf = document.getElementById(`profesorImg`),
    precio = document.getElementById(`precio`),
    tiempo = document.getElementById(`tiempo`),
    categoria = document.getElementById(`categoria`),
    descripcion = document.getElementById(`descripcion`),
    revision= document.getElementById(`revisiones`);
    
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
        servicio.revision
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
    console.log(servicio.titulo);
    let tablaServicio = document.getElementById("tablaServicio");
    tablaServicio.innerHTML +=
    `<tr>
    <th scope="row" class="text-center">${servicio.servicioNombre}</th>
    <td class="tdImage"> 
    <img src=" ${servicio.imagen} " class="adminImg" alt=" ${servicio.servicioNombre}">
    </td>
    <td>${servicio.profesor}</td>
    <td>${servicio.categoria}</td>
    <td><i class="bi bi-currency-dollar"> ${servicio.precio}</i></td>
    <td><i class="bi bi-clock"> ${servicio.tiempo}</i></td>
    <td class="">
        <button class="btn btn-warning text-dark" onclick="prepararFormularioServicio('${servicio.id}')"><i class="bi bi-pencil-square"></i></button>
        <button class="btn btn-danger" onclick="borrarServicio('${servicio.id}')"><i class="bi bi-x-square"></i></button>
    </td>
</tr>`;
}
// Manejadores de eventos
formServicio.addEventListener("submit", prepararFormularioServicio);
btnCrearServicio.addEventListener("click", desplegarmodalServicio);

// Funciones
function desplegarmodalServicio() {
    limpiarFormulario();
    altaServicio = true;
    modalServicio.show();
}

function prepararFormularioServicio(e) {
    e.preventDefault();
    console.log("en el evento submit");
    if (altaServicio) {
        crearServicio();
    } else {
        editarServicio();
    }
}
function crearServicio() {
    //AQUI VAN LAS VALIDACIONES

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
        descripcion.value,
        revision.value
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
    modalServicio.hide();
}

function guardarEnLocalstorage() {
    localStorage.setItem("listaServicios",JSON.stringify(listaServicios));
}

function limpiarFormulario() {
    formServicio.reset();
}

window.borrarServicio = (idServicio) => {
    Swal.fire({
        title: "¿Esta seguro de borrar este servicio?",
        text: "No podrás recuperar la informacion luego de eliminar",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Borrar",
        cancelButtonText: "Cancelar",
    }).then((result) => {
        console.log(result);
        if (result.isConfirmed) {
            //id cuando borro
            console.log(idServicio);
            //1 - buscar del array a donde esta el elemento que tiene este id
            let posicionServicio = listaServicios.findIndex((servicio) => servicio.id === idServicio);
            //2 - borrar el servicio del array (splice)
            listaServicios.splice(posicionServicio, 1);
            //3 - actualizar el localstorage
            guardarEnLocalstorage();
            //4- borrar la fila de la tabla
            let tablaServicio = document.getElementById("tablaServicio");
            tablaServicio.removeChild(tablaServicio.children[posicionServicio]);
            //5 - mostrar un cartel al usuario
            Swal.fire(
                "Servicio eliminada",
                "El servicio seleccionado fue eliminado correctamente",
                "success"
            );
            //todo: paso 6 actualizar los numeros de las filas de la tabla.
        }
    });
};
window.prepararFormularioServicio = (idServicio) => {
    //tener los datos de la servicio y cargar en el formulario
    const servicioEncontrado = listaServicios.find((servicio) => servicio.id === idServicio);
    //mostrar la ventana modal
    id.value = servicioEncontrado.id;
    servicioNombre.value = servicioEncontrado.servicioNombre;
    profesor.value = servicioEncontrado.profesor;
    imagen.value = servicioEncontrado.imagen;
    socialProf.value = servicioEncontrado.socialProf;
    precio.value = servicioEncontrado.precio;
    tiempo.value = servicioEncontrado.tiempo;
    categoria.value = servicioEncontrado.categoria;
    descripcion.value = servicioEncontrado.descripcion;
    revision.value = servicioEncontrado.revision;
    modalServicio.show();
    //cambiamos el valor de la variable altaServicio
    altaServicio = false;
};

function editarServicio(){
    console.log("aqui tengo que editar");
    //1- buscaria la posicion de la servicio en el array
    let posicionServicio = listaServicios.findIndex((servicio) => servicio.id === id.value);
    console.log(posicionServicio)
    //todo: validar los datos
    //2- editar los valores de la servicio dentroe del array
    listaServicios[posicionServicio].servicioNombre = servicioNombre.value;
    listaServicios[posicionServicio].imagen = imagen.value;
    listaServicios[posicionServicio].descripcion = descripcion.value;
    listaServicios[posicionServicio].categoria = categoria.value;
    listaServicios[posicionServicio].profesor = profesor.value;
    listaServicios[posicionServicio].socialProf = socialProf.value;
    listaServicios[posicionServicio].tiempo = tiempo.value;
    listaServicios[posicionServicio].precio = precio.value;
    listaServicios[posicionServicio].revision = revision.value;
    //3- actualizar el localstorage
    guardarEnLocalstorage()
    //4-actualizar la fila
    let tablaServicio = document.getElementById("tablaServicio");
    console.log(tablaServicio.children[posicionServicio].children[1])
    //  let celdaTitulo =tablaServicio.children[posicionServicio].children[1]
    tablaServicio.children[posicionServicio].children[0].innerHTML = servicioNombre.value
    tablaServicio.children[posicionServicio].children[1].children[0].setAttribute("src", imagen.value);
    tablaServicio.children[posicionServicio].children[2].innerHTML = profesor.value
    tablaServicio.children[posicionServicio].children[3].innerHTML = categoria.value
    tablaServicio.children[posicionServicio].children[4].children[0].innerHTML = precio.value
    tablaServicio.children[posicionServicio].children[5].children[0].innerHTML = tiempo.value
    //5-mostrar un cartel al usuario
    Swal.fire(
        "Servicio modificada",
        "El Servicio fue modificado exitosamente",
        "success"
    );
    //6- limpiar el formulario y cerrar el modal
    limpiarFormulario();
    modalServicio.hide();
}