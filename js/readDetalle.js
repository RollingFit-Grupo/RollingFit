const parametroURL = new URLSearchParams(window.location.search);


//hace el read de la peli buscada

let listaServicio = JSON.parse(localStorage.getItem("listaServicios")) || [];

console.log(localStorage.getItem("listaServicios"));
console.log(listaServicio[0].id);
// buscar la pelicula que necesito
console.log(listaServicio[0].id);
console.log(listaServicio[0].servicioNombre);
console.log(listaServicio[0].profesor);
console.log(listaServicio[0].imagen);
console.log(listaServicio[0].socialProf);
console.log(listaServicio[0].precio);
console.log(listaServicio[0].tiempo);
console.log(listaServicio[0].categoria);
console.log(listaServicio[0].descripcion);
const servicioBuscado = listaServicio.find((servicio)=>servicio.codigo === parametroURL.get('codigo'));

// Dibujar la card con los datos
let seccion = document.querySelector('#seccionDetalle');
seccion.innerHTML = `<section class="my-5 row position-relative">
<div
  class="col-lg-8 order-lg-1 d-flex flex-column align-items-center"
>
  <div class="row">
    <div class="px-lg-3">
      <p class="text-muted" id="codigoUnico">${listaServicio[0].id}</p>
      <h1 class="display-4 mb-4" id="nombre">${listaServicio[0].categoria} - ${listaServicio[0].servicioNombre}</h1>
      <img
        src="${listaServicio[0].imagen}"
        alt="Imagen (cargada con url)"
        class="img-fluid"
      />
    </div>
  </div>
  <div class="row d-flex flex-column align-items-center">
    <div
      class="col-lg-12 px-lg-3 d-flex flex-column align-items-center mt-2"
    >
      <h3 class="mb-3" id="descripcion">Descripción:</h3>
      <p class="lead mb-4 text-wrap text-break">
        ${listaServicio[0].descripcion}
      </p>
    </div>
    <div class="col-lg-4 mb-4 px-lg-3">
      <h3 class="mb-3" id="categoria">${listaServicio[0].servicioNombre}</h3>
      <div id="caracteristicas" class="">
        <h5>Caracteristicas</h5>
        <div id="cardiovascular" class="progress mb-1" role="progressbar" aria-label="Animated striped example"
          aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
          <div id="cardioVascularBarra"
            class="progress-bar progress-bar-striped progress-bar-animated text-start ps-2 bg-success"
            style="width: 100%">Cardiovascular</div>
        </div>
        <div id="fuerza" class="progress mb-1" role="progressbar" aria-label="Animated striped example "
          aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
          <div id="fuerzaBarra"
            class="progress-bar progress-bar-striped progress-bar-animated text-start ps-2 bg-danger"
            style="width: 40%">Fuerza</div>
        </div>
        <div id="aerobico" class="progress mb-1" role="progressbar" aria-label="Animated striped example"
          aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
          <div id="aerobicoBarra"
            class="progress-bar progress-bar-striped progress-bar-animated text-start ps-2 bg-primary"
            style="width: 80%">Aerobico</div>
        </div>
        <div id="" class="progress mb-1" role="progressbar" aria-label="Animated striped example"
          aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
          <div id=""
            class="progress-bar progress-bar-striped progress-bar-animated text-start ps-2 bg-secondary"
            style="width: 60%">Flexibilidad
          </div>
        </div>
      </div>
    </div>
    <!--Div Profesor-->
    <div class="container mt-2 text-center divProfesor">
      <div class="row">
        <div
          class="col-md-4 d-flex align-items-center justify-content-center"
        >
          <img
            id="imgProfesor"
            src="${listaServicio[0].socialProf}"
            alt="Imagen del profesor"
            class="img-fluid"
          />
        </div>
        <div
          class="col-md-4 d-flex align-items-center justify-content-center"
        >
          <h3 id="nombreProfesor">John Smith</h3>
        </div>
        <div
          class="col-md-4 d-flex align-items-center justify-content-center"
        >
          <p id="descripcionProfesor">
            Descripción del profesor Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Error, dicta officiis! At
            libero voluptatum laudantium consectetur aliquid totam
            repellendus iusto eveniet? Sed unde officia corporis
            pariatur alias illo temporibus sint?
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="col-lg-4 order-lg-2 position-sticky rounded-3 pb-5">
  <div class="p-3 sticky-top">
    <nav>
      <div class="nav nav-tabs" id="nav-tab" role="tablist">
        <button
          class="text-primary nav-link active fw-4 bg-white-50"
          id="nav-basic-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-basic"
          type="button"
          role="tab"
          aria-controls="nav-basic"
          aria-selected="true"
        >
          basic
        </button>
        <button
          class="nav-link"
          id="nav-standard-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-standard"
          type="button"
          role="tab"
          aria-controls="nav-standard"
          aria-selected="false"
        >
          standard
        </button>
        <button
          class="nav-link"
          id="nav-premium-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-premium"
          type="button"
          role="tab"
          aria-controls="nav-premium"
          aria-selected="false"
        >
          premium
        </button>
      </div>
    </nav>
    <div class="tab-content" id="nav-tabContent">
      <div
        class="tab-pane fade show active"
        id="nav-basic"
        role="tabpanel"
        aria-labelledby="nav-basic-tab"
        tabindex="0"
      >
        <h3>Básico</h3>
        <p>Paquete Principiantes</p>
        <p><strong>Total:</strong> US$25</p>
        <p><strong>Tiempo de entrega:</strong>${listaServicio[0].tiempo}</p>
        <ul>
          <li>Programa de entrenamiento de 4 semanas</li>
          <li>Sin plan de dieta</li>
          <li>Sin soporte interactivo</li>
          <li>Sin seguimiento de progreso</li>
        </ul>
      </div>
      <div
        class="tab-pane fade"
        id="nav-standard"
        role="tabpanel"
        aria-labelledby="nav-standard-tab"
        tabindex="0"
      >
        <h3>Estándar</h3>
        <p>Paquete impulsado por resultados (personalizado)</p>
        <p><strong>Total:</strong> US$50</p>
        <p><strong>Tiempo de entrega:</strong>${listaServicio[0].tiempo}</p>
        <ul>
          <li>Programa de entrenamiento de 4 semanas</li>
          <li>Soporte general</li>
          <li>Sin plan de dieta</li>
          <li>Programa de entrenamiento de 8 semanas</li>
          <li>Soporte interactivo</li>
          <li>Seguimiento de progreso</li>
        </ul>
      </div>
      <div
        class="tab-pane fade"
        id="nav-premium"
        role="tabpanel"
        aria-labelledby="nav-premium-tab"
        tabindex="0"
      >
        <h3>Premium</h3>
        <p>Paquete de entrenamiento definitivo (personalizado)</p>
        <p><strong>Total:</strong> US$85</p>
        <p><strong>Tiempo de entrega:</strong>${listaServicio[0].tiempo}</p>
        <ul>
          <li>Programa de entrenamiento de 4 semanas</li>
          <li>Soporte general</li>
          <li>Tutoriales en video</li>
          <li>Programa de entrenamiento de 8 semanas</li>
          <li>Plan de dieta</li>
          <li>Soporte interactivo de entrenamiento</li>
          <li>Tutoriales en video</li>
          <li>Programa de entrenamiento de 12 semanas</li>
          <li>Plan de dieta</li>
          <li>Soporte interactivo</li>
          <li>Seguimiento semanal de responsabilidad</li>
          <li>Soporte continuo</li>
          <li>Seguimiento de progreso</li>
        </ul>
      </div>
      <div class="text-center">
        <button class="btn btn-primary btn-lg">
          Añadir al carro
        </button>
      </div>
    </div>
  </div>
</div>
</section>`