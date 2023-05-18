const parametroURL = new URLSearchParams(window.location.search);


let listaServicio = JSON.parse(localStorage.getItem("listaServicios")) || [];

const servicioBuscado = listaServicio.find(
  (servicio) => servicio.id === parametroURL.get("id")
);

let seccion = document.querySelector("#seccionDetalle");
seccion.innerHTML = `<section class="my-5 row position-relative">
<div
  class="col-lg-8 order-lg-1 d-flex flex-column align-items-center"
>
  <div class="row">
    <div class="px-lg-3">
      <p class="text-muted" id="codigoUnico">${servicioBuscado.id}</p>
      <h1 class="display-4 mb-4" id="nombre">${servicioBuscado.categoria} - ${servicioBuscado.servicioNombre}</h1>
      <img
        src="${servicioBuscado.imagen}"
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
        ${servicioBuscado.descripcion}
      </p>
    </div>
    <!--Div Profesor-->
  </div>
</div>
<div class="col-lg-4 order-lg-2 position-sticky rounded-3 pb-5">
  <div class="p-3 sticky-top">
  <div
  class="tab-pane fade show active"
  id="nav-basic"
  role="tabpanel"
  aria-labelledby="nav-basic-tab"
  tabindex="0"
>
  <h3 class="py-1">COMPRAR ${servicioBuscado.categoria}</h3>
  <h4><strong>Total:</strong> US$${servicioBuscado.precio}</h4>
  <h4><strong>Tiempo de entrega:</strong> ${servicioBuscado.tiempo}</h4>

  <div class="container mt-2 text-center divProfesor">
  <div class="d-flex flex-column">
    <div
      class="d-flex align-items-center justify-content-center"
    >
      <img
        id="imgProfesor"
        src="${servicioBuscado.socialProf}"
        alt="Imagen del profesor"
        class="img-fluid"
      />
    </div>
    <div
      class=" d-flex align-items-center justify-content-center"
    >
      <h3 id="nombreProfesor">${servicioBuscado.profesor}</h3>
    </div>
    <div
      class="d-flex align-items-center justify-content-center text-center p-4"
    >
      <p id="descripcionProfesor">
        ${servicioBuscado.descripcionProfesional}
      </p>
    </div>
  </div>

  <div class=" mb-4 px-lg-3">
  <h3 class="mb-3" id="categoria">Tipo de Categoria ${servicioBuscado.servicioNombre}</h3>
  <!--Caracteristicas-->
  <!--Caracteristicas-->
</div>

<div class="text-center">
<button class="btn btn-primary btn-lg">
  Añadir al carro
</button>
</div>
</div>
</div>
</div>
</section>`;

