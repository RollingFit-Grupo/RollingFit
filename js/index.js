let listaServicios = JSON.parse(localStorage.getItem("listaServicios")) || [];

listaServicios.map((servicio) => {
    crearColumna(servicio);
})


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
    // console.log(servicio);
    // console.log(servicio.servicioNombre);
    // console.log(servicio.calificacion);
    // console.log(RatingComponent(servicio.calificacion));
    let tablaServicio = document.getElementById("seccionServicios");
    // console.log(tablaServicio)
    tablaServicio.innerHTML += `<div class="card mb-3 my-2 d-flex justify-content-center border-5">
    <div class="row d-flex g-0">
      <div class="col-sm-12 col-md-4 col-lg-4 p-0 position-relative imgCard">
        <img src="${servicio.imagen}" class="z-2 img-fluid rounded-start h-100" alt="imagen calistenia">
      </div>
      <div class="col-sm-12 col-md-4 col-lg-4 text-center text-lg-start mx-auto align-self-center container">
        <div class="d-flex flex-column">
          <div class="mt-2 ">
            <h4 class="text-center">${servicio.servicioNombre}</h4>
            <div class="custom-paragraph mb-1">
            <p class="overflow-y-scroll">Tipo de entrenamiento físico que se enfoca en el uso
              ${servicio.descripcion}</p>
            </div>
          </div>
          
        <!--TODO: Barras de Caracteristicas-->

        <!---#######################-->
        </div>
      </div>
      <div class="col-sm-12 col-md-4 col-lg-4 text-center align-self-center d-flex flex-column justify-content-around">
        <!--TODO: Puntaje de reseñas-->

        <!---#######################-->
        <div> ${RatingComponent(servicio.calificacion)} </div>
        <div><h4 class="badge text-bg-secondary fs-6">Precio: $${servicio.precio} </h4></div>
        <div class="my-3">
        <a href="#" class="btn btn-primary border rounded-pill" onclick="navegarPaginaDetalle('${servicio.id}')">Ver Detalle</a>
        </div
      </div>
    </div>
  </div>`;
  }


function navegarPaginaDetalle(id){
  console.log('##########');
  console.log(id);
  console.log(window.location.origin+'/pages/detalle.html?id='+id)
  window.location.href = window.location.origin+'/pages/detalle.html?id='+id;
}


/* POR IMPLEMENTAR*/

/*Barras de Caracteristicas */
/*
<div class="">
            <h5>Caracteristicas</h5>
            <div class="progress mb-1" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar progress-bar-striped progress-bar-animated text-start ps-2 bg-success" style="width: 100%">Cardiovascular</div>
            </div>
            <div class="progress mb-1" role="progressbar" aria-label="Animated striped example " aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar progress-bar-striped progress-bar-animated text-start ps-2 bg-danger" style="width: 40%">Fuerza</div>
            </div>
            <div class="progress mb-1" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar progress-bar-striped progress-bar-animated text-start ps-2 bg-primary" style="width: 80%">Aerobico</div>
            </div>
            <div class="progress mb-1" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar progress-bar-striped progress-bar-animated text-start ps-2 bg-secondary" style="width: 60%">Flexibilidad
              </div>
            </div>
          </div>
*/

/*Promedio puntaje de reseñas */
/*
        <h5>Calificación</h5>
        <div class="stars">
          <i class="bi bi-star"></i>
          <i class="bi bi-star"></i>
          <i class="bi bi-star"></i>
          <i class="bi bi-star"></i>
          <i class="bi bi-star"></i>
          <p>Aún sin calificaciones</p>
        </div> 
*/