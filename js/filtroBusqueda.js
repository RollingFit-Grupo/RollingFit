let inputBusqueda = document.getElementById("input_filtro_Servicios");

console.log(inputBusqueda)
console.log(inputBusqueda.value)

function busquedaServicio(nombreServicio) {
    
}

inputBusqueda.addEventListener("input", ()=>{
    let textoBusqueda = inputBusqueda.value;
    busquedaServicio(textoBusqueda);
    console.log(textoBusqueda)
})
