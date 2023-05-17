let inputBusqueda = document.getElementById("input_filtro_Servicios");
console.log(inputBusqueda.value)
let mensajeAdvertencia = `
<div class="alert alert-warning rounded-5 d-flex flex-column justify-content-center">
    <i class="bi bi-search fs-1 p-3 align-self-center"></i>
    <h5 class="display-5 p-4"><strong>No se encontraron</strong> Servicios...</h5>
</div>`

function busquedaServicio(nombreServicio) {
    let seccionServicio = document.getElementById("seccionServicios");
    let cardsServicio = seccionServicio.querySelectorAll(".card");
    let resultadosEncontrados = false;
    cardsServicio.forEach(card => {
        let tituloCard = card.querySelector("h4")
        let tituloServicio = tituloCard.textContent.toLowerCase() 
        console.log(card)
        console.log(tituloServicio)
        if (nombreServicio === "") {
            card.classList.remove("d-none"); // Muestra la tarjeta
            let resultadosEncontrados = true;
        } else if (tituloServicio.includes(nombreServicio)) {
            card.classList.add("d-block"); // Muestra la tarjeta
            card.classList.remove("d-none"); // Asegura que no esté oculta
            let resultadosEncontrados = true;
        } else {
            card.classList.remove("d-block"); // Oculta la tarjeta
            card.classList.add("d-none"); // Asegura que esté oculta
        }
    });
    console.log(resultadosEncontrados)

}


inputBusqueda.addEventListener("input", ()=>{
    let textoBusqueda = inputBusqueda.value;
    busquedaServicio(textoBusqueda);
    console.log(textoBusqueda)
})
