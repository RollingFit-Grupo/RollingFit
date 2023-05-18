let inputBusqueda = document.getElementById("input_filtro_Servicios");
console.log(inputBusqueda.value)
let mensajeAdvertencia = document.getElementById("mensajeServicioNoEncontrado")

function busquedaServicio(nombreServicio) {
    let seccionServicio = document.getElementById("seccionServicios");
    let cardsServicio = seccionServicio.querySelectorAll(".card");
    let nombreServicioBuscado = nombreServicio.toLowerCase();
    let resultadosEncontrados = false;

    cardsServicio.forEach(card => {
        let tituloCard = card.querySelector("h4")
        let tituloServicio = tituloCard.textContent.toLowerCase() 
        if (nombreServicio === "") {
            card.classList.remove("d-none");
            resultadosEncontrados = true;
        } else if (tituloServicio.includes(nombreServicioBuscado)) {
            card.classList.add("d-block"); 
            card.classList.remove("d-none");
            resultadosEncontrados = true;
        } else {
            card.classList.remove("d-block");
            card.classList.add("d-none");
        }
    });

    if (!resultadosEncontrados) {
        mostrarMensaje();
    } else {
        ocultarMensaje();
    }
}

function mostrarMensaje() {
    mensajeAdvertencia.classList.remove("d-none");
}

function ocultarMensaje() {
    mensajeAdvertencia.classList.remove("d-flex");
    mensajeAdvertencia.classList.add("d-none");
}

inputBusqueda.addEventListener("input", () => {
    let textoBusqueda = inputBusqueda.value;
    busquedaServicio(textoBusqueda);
})