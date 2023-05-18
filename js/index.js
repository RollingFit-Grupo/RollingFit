let listaServicios = JSON.parse(localStorage.getItem("listaServicios")) || [];
cargarServicios();
cargarFavoritos();
function cargarServicios(){
listaServicios.map((servicio) => {
crearColumna(servicio);
});
}
function cargarFavoritos(){
let listaDeFavoritos = JSON.parse(localStorage.getItem("listaFavoritos")) || [];
listaDeFavoritos.map((servicio) => {
crearLista(servicio);
});
}
function RatingComponent(calificacion) {
  // console.log(calificacion);
  switch (calificacion) {
    case 0:
      return (
        `
        <p class="fs-2 text-warning">
          <i class="bi bi-star"></i>
          <i class="bi bi-star"></i>
          <i class="bi bi-star"></i>
          <i class="bi bi-star"></i>
          <i class="bi bi-star"></i>
        </p>
        `
      );
    case 1:
      return (
        `
        <p class="fs-2 text-warning">
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star"></i>
          <i class="bi bi-star"></i>
          <i class="bi bi-star"></i>
          <i class="bi bi-star"></i>
        </p>
        `
      );
    case 2:
      return (
        `
        <p class="fs-2 text-warning">
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star"></i>
          <i class="bi bi-star"></i>
          <i class="bi bi-star"></i>
        </p>
        `
      );
    case 3:
      return (
        `
        <p class="fs-2 text-warning">
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star"></i>
          <i class="bi bi-star"></i>
        </p>
        `
      );
    case 4:
      return (
        `
        <p class="fs-2 text-warning">
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star"></i>
        </p>
        `
      );
    case 5:
      return (
        `
        <p class="fs-2 text-warning">
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
        </p>
        `
      );
    default:
      return null;
  }
}
function crearColumna(servicio) {
  let tablaServicio = document.getElementById("seccionServicios");
  console.log(tablaServicio)
  tablaServicio.innerHTML += `
    <div class="card mb-3 my-2 d-flex justify-content-center border-5">
      <div class="row d-flex g-0">
        <div class="col-sm-12 col-md-4 col-lg-4 p-0 position-relative imgCard">
          <img src="${servicio.imagen}" class="z-2 img-fluid rounded-start h-100" alt="imagen calistenia">
        </div>
        <div class="col-sm-12 col-md-4 col-lg-4 text-center text-lg-start mx-auto align-self-center container">
          <div class="d-flex flex-column">
            <div class="mt-2">
              <h4 class="text-center">${servicio.servicioNombre}</h4>
              <div class="custom-paragraph mb-1">
                <p class="overflow-y-scroll">Tipo de entrenamiento físico que se enfoca en el uso
                  ${servicio.descripcion}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-4 col-lg-4 text-center align-self-center d-flex flex-column justify-content-around">
          <div>${RatingComponent(servicio.calificacion)}</div>
          <div><h4 class="badge text-bg-secondary fs-6">Precio: $${servicio.precio}</h4></div>
          <div class="my-3">
            <a href="#" class="btn btn-primary border rounded-pill" onclick="navegarPaginaDetalle('${servicio.id}')">Ver Detalle</a>
          </div>
          <button class="btn" onclick="listaDeFavoritos('${servicio.id}', '${servicio.imagen}', '${servicio.servicioNombre}')">
            <i id="corazon_${servicio.id}" class="bi bi-heart"></i>
          </button>
        </div>
      </div>
    </div>`;
}

function listaDeFavoritos(id, imagen, titulo) {
  const listaFavoritosEncontrada = localStorage.getItem("listaFavoritos");
  let listaFavoritos = [];

  if (listaFavoritosEncontrada) {
    listaFavoritos = JSON.parse(listaFavoritosEncontrada);
  }

  const indice = listaFavoritos.findIndex((item) => item.id === id);

  if (indice === -1) {
    // El servicio no está en la lista de favoritos, lo agregamos
    const servicio = {
      id: id,
      imagen: imagen,
      titulo: titulo
    };

    listaFavoritos.push(servicio);
    guardarEnLocalStorage(listaFavoritos);
    cambioColor(true, id);
  } else {
    // El servicio ya está en la lista de favoritos, lo eliminamos
    listaFavoritos.splice(indice, 1);
    guardarEnLocalStorage(listaFavoritos);
    cambioColor(false, id);
  }
}

function guardarEnLocalStorage(listaFavoritos) {
  localStorage.setItem("listaFavoritos", JSON.stringify(listaFavoritos));
}

function cambioColor(esFavorito, id) {
  const corazonElement = document.getElementById(`corazon_${id}`);
  if (esFavorito) {
    corazonElement.className = "bi bi-heart-fill";
  } else {
    corazonElement.className = "bi bi-heart";
  }
}
function crearLista(servicio){
  let listaFav = document.getElementById(`listaFavoritos`);
  listaFav.innerHTML +=`              
  <div class="card w-100">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${servicio.imagen}"class="img-fluid rounded-start" alt="">
      </div>
      <div class="col-md-8">
        <h5 class="card-title">${servicio.titulo}</h5>
      </div>
    </div>
  </div>
`
}
function navegarPaginaDetalle(id) {
  console.log('##########');
  console.log(id);
  console.log(window.location.origin + '/pages/detalle.html?id=' + id)
  window.location.href = window.location.origin + '/pages/detalle.html?id=' + id;
}

